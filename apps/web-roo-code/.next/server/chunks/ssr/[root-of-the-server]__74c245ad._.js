module.exports = [
	39315,
	(a, b, c) => {
		let { createClientModuleProxy: d } = a.r(57689)
		a.n(
			d(
				"[project]/node_modules/.pnpm/next@16.1.6_@opentelemetry+_b8a29fd3e98ec061646680b2e510dc03/node_modules/next/dist/client/script.js <module evaluation>",
			),
		)
	},
	15229,
	(a, b, c) => {
		let { createClientModuleProxy: d } = a.r(57689)
		a.n(
			d(
				"[project]/node_modules/.pnpm/next@16.1.6_@opentelemetry+_b8a29fd3e98ec061646680b2e510dc03/node_modules/next/dist/client/script.js",
			),
		)
	},
	48575,
	(a) => {
		"use strict"
		a.i(39315)
		var b = a.i(15229)
		a.n(b)
	},
	26756,
	(a, b, c) => {
		b.exports = a.r(48575)
	},
	12917,
	(a, b, c) => {
		var d = Object.prototype.toString
		function e(a) {
			return "function" == typeof a.constructor ? a.constructor.name : null
		}
		function f(a) {
			return Array.isArray ? Array.isArray(a) : a instanceof Array
		}
		function g(a) {
			return (
				a instanceof Error ||
				("string" == typeof a.message && a.constructor && "number" == typeof a.constructor.stackTraceLimit)
			)
		}
		function h(a) {
			return (
				a instanceof Date ||
				("function" == typeof a.toDateString &&
					"function" == typeof a.getDate &&
					"function" == typeof a.setDate)
			)
		}
		function i(a) {
			return (
				a instanceof RegExp ||
				("string" == typeof a.flags &&
					"boolean" == typeof a.ignoreCase &&
					"boolean" == typeof a.multiline &&
					"boolean" == typeof a.global)
			)
		}
		function j(a, b) {
			return "GeneratorFunction" === e(a)
		}
		function k(a) {
			return "function" == typeof a.throw && "function" == typeof a.return && "function" == typeof a.next
		}
		function l(a) {
			try {
				if ("number" == typeof a.length && "function" == typeof a.callee) return !0
			} catch (a) {
				if (-1 !== a.message.indexOf("callee")) return !0
			}
			return !1
		}
		function m(a) {
			return !!a.constructor && "function" == typeof a.constructor.isBuffer && a.constructor.isBuffer(a)
		}
		b.exports = function (a) {
			if (void 0 === a) return "undefined"
			if (null === a) return "null"
			var b = typeof a
			if ("boolean" === b) return "boolean"
			if ("string" === b) return "string"
			if ("number" === b) return "number"
			if ("symbol" === b) return "symbol"
			if ("function" === b) return j(a) ? "generatorfunction" : "function"
			if (f(a)) return "array"
			if (m(a)) return "buffer"
			if (l(a)) return "arguments"
			if (h(a)) return "date"
			if (g(a)) return "error"
			if (i(a)) return "regexp"
			switch (e(a)) {
				case "Symbol":
					return "symbol"
				case "Promise":
					return "promise"
				case "WeakMap":
					return "weakmap"
				case "WeakSet":
					return "weakset"
				case "Map":
					return "map"
				case "Set":
					return "set"
				case "Int8Array":
					return "int8array"
				case "Uint8Array":
					return "uint8array"
				case "Uint8ClampedArray":
					return "uint8clampedarray"
				case "Int16Array":
					return "int16array"
				case "Uint16Array":
					return "uint16array"
				case "Int32Array":
					return "int32array"
				case "Uint32Array":
					return "uint32array"
				case "Float32Array":
					return "float32array"
				case "Float64Array":
					return "float64array"
			}
			if (k(a)) return "generator"
			switch ((b = d.call(a))) {
				case "[object Object]":
					return "object"
				case "[object Map Iterator]":
					return "mapiterator"
				case "[object Set Iterator]":
					return "setiterator"
				case "[object String Iterator]":
					return "stringiterator"
				case "[object Array Iterator]":
					return "arrayiterator"
			}
			return b.slice(8, -1).toLowerCase().replace(/\s/g, "")
		}
	},
	36649,
	(a, b, c) => {
		"use strict"
		b.exports = function (a) {
			return null != a && ("object" == typeof a || "function" == typeof a)
		}
	},
	70751,
	(a, b, c) => {
		"use strict"
		var d = a.r(36649)
		function e(a, b) {
			for (var c in b) f(b, c) && (a[c] = b[c])
		}
		function f(a, b) {
			return Object.prototype.hasOwnProperty.call(a, b)
		}
		b.exports = function (a) {
			d(a) || (a = {})
			for (var b = arguments.length, c = 1; c < b; c++) {
				var f = arguments[c]
				d(f) && e(a, f)
			}
			return a
		}
	},
	2621,
	(a, b, c) => {
		"use strict"
		var d = a.r(12917),
			e = a.r(70751)
		function f(a, b) {
			return a.slice(0, b.length) === b && a.charAt(b.length + 1) !== b.slice(-1)
		}
		function g(a) {
			if (("object" !== d(a) && (a = { content: a }), "string" != typeof a.content && !k(a.content)))
				throw TypeError("expected a buffer or string")
			return (a.content = a.content.toString()), (a.sections = []), a
		}
		function h(a, b) {
			return a ? a.slice(b.length).trim() : ""
		}
		function i() {
			return { key: "", data: "", content: "" }
		}
		function j(a) {
			return a
		}
		function k(a) {
			return !!a && !!a.constructor && "function" == typeof a.constructor.isBuffer && a.constructor.isBuffer(a)
		}
		b.exports = function (a, b) {
			"function" == typeof b && (b = { parse: b })
			var c = g(a),
				d = e({}, { section_delimiter: "---", parse: j }, b),
				k = d.section_delimiter,
				l = c.content.split(/\r?\n/),
				m = null,
				n = i(),
				o = [],
				p = []
			function q(a) {
				;(c.content = a), (m = []), (o = [])
			}
			function r(a) {
				p.length &&
					((n.key = h(p[0], k)), (n.content = a), d.parse(n, m), m.push(n), (n = i()), (o = []), (p = []))
			}
			for (var s = 0; s < l.length; s++) {
				var t = l[s],
					u = p.length,
					v = t.trim()
				if (f(v, k)) {
					if (3 === v.length && 0 !== s) {
						if (0 === u || 2 === u) {
							o.push(t)
							continue
						}
						p.push(v), (n.data = o.join("\n")), (o = [])
						continue
					}
					null === m && q(o.join("\n")), 2 === u && r(o.join("\n")), p.push(v)
					continue
				}
				o.push(t)
			}
			return null === m ? q(o.join("\n")) : r(o.join("\n")), (c.sections = m), c
		}
	},
	24762,
	(a, b, c) => {
		"use strict"
		function d(a, b) {
			Error.call(this),
				(this.name = "YAMLException"),
				(this.reason = a),
				(this.mark = b),
				(this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "")),
				Error.captureStackTrace
					? Error.captureStackTrace(this, this.constructor)
					: (this.stack = Error().stack || "")
		}
		;(d.prototype = Object.create(Error.prototype)),
			(d.prototype.constructor = d),
			(d.prototype.toString = function (a) {
				var b = this.name + ": "
				return (b += this.reason || "(unknown reason)"), !a && this.mark && (b += " " + this.mark.toString()), b
			}),
			(b.exports = d)
	},
	75483,
	(a, b, c) => {
		"use strict"
		var d = a.r(24762),
			e = [
				"kind",
				"resolve",
				"construct",
				"instanceOf",
				"predicate",
				"represent",
				"defaultStyle",
				"styleAliases",
			],
			f = ["scalar", "sequence", "mapping"]
		function g(a) {
			var b = {}
			return (
				null !== a &&
					Object.keys(a).forEach(function (c) {
						a[c].forEach(function (a) {
							b[String(a)] = c
						})
					}),
				b
			)
		}
		b.exports = function (a, b) {
			if (
				(Object.keys((b = b || {})).forEach(function (b) {
					if (-1 === e.indexOf(b))
						throw new d('Unknown option "' + b + '" is met in definition of "' + a + '" YAML type.')
				}),
				(this.tag = a),
				(this.kind = b.kind || null),
				(this.resolve =
					b.resolve ||
					function () {
						return !0
					}),
				(this.construct =
					b.construct ||
					function (a) {
						return a
					}),
				(this.instanceOf = b.instanceOf || null),
				(this.predicate = b.predicate || null),
				(this.represent = b.represent || null),
				(this.defaultStyle = b.defaultStyle || null),
				(this.styleAliases = g(b.styleAliases || null)),
				-1 === f.indexOf(this.kind))
			)
				throw new d('Unknown kind "' + this.kind + '" is specified for "' + a + '" YAML type.')
		}
	},
	99908,
	(a, b, c) => {
		"use strict"
		function d(a) {
			return null == a
		}
		function e(a) {
			return "object" == typeof a && null !== a
		}
		function f(a) {
			return Array.isArray(a) ? a : d(a) ? [] : [a]
		}
		function g(a, b) {
			var c, d, e, f
			if (b) for (c = 0, d = (f = Object.keys(b)).length; c < d; c += 1) a[(e = f[c])] = b[e]
			return a
		}
		function h(a, b) {
			var c,
				d = ""
			for (c = 0; c < b; c += 1) d += a
			return d
		}
		function i(a) {
			return 0 === a && -1 / 0 == 1 / a
		}
		;(b.exports.isNothing = d),
			(b.exports.isObject = e),
			(b.exports.toArray = f),
			(b.exports.repeat = h),
			(b.exports.isNegativeZero = i),
			(b.exports.extend = g)
	},
	98488,
	(a, b, c) => {
		"use strict"
		var d = a.r(99908),
			e = a.r(24762),
			f = a.r(75483)
		function g(a, b, c) {
			var d = []
			return (
				a.include.forEach(function (a) {
					c = g(a, b, c)
				}),
				a[b].forEach(function (a) {
					c.forEach(function (b, c) {
						b.tag === a.tag && b.kind === a.kind && d.push(c)
					}),
						c.push(a)
				}),
				c.filter(function (a, b) {
					return -1 === d.indexOf(b)
				})
			)
		}
		function h() {
			var a,
				b,
				c = { scalar: {}, sequence: {}, mapping: {}, fallback: {} }
			function d(a) {
				c[a.kind][a.tag] = c.fallback[a.tag] = a
			}
			for (a = 0, b = arguments.length; a < b; a += 1) arguments[a].forEach(d)
			return c
		}
		function i(a) {
			;(this.include = a.include || []),
				(this.implicit = a.implicit || []),
				(this.explicit = a.explicit || []),
				this.implicit.forEach(function (a) {
					if (a.loadKind && "scalar" !== a.loadKind)
						throw new e(
							"There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.",
						)
				}),
				(this.compiledImplicit = g(this, "implicit", [])),
				(this.compiledExplicit = g(this, "explicit", [])),
				(this.compiledTypeMap = h(this.compiledImplicit, this.compiledExplicit))
		}
		;(i.DEFAULT = null),
			(i.create = function () {
				var a, b
				switch (arguments.length) {
					case 1:
						;(a = i.DEFAULT), (b = arguments[0])
						break
					case 2:
						;(a = arguments[0]), (b = arguments[1])
						break
					default:
						throw new e("Wrong number of arguments for Schema.create function")
				}
				if (
					((a = d.toArray(a)),
					(b = d.toArray(b)),
					!a.every(function (a) {
						return a instanceof i
					}))
				)
					throw new e(
						"Specified list of super schemas (or a single Schema object) contains a non-Schema object.",
					)
				if (
					!b.every(function (a) {
						return a instanceof f
					})
				)
					throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")
				return new i({ include: a, explicit: b })
			}),
			(b.exports = i)
	},
	51286,
	(a, b, c) => {
		"use strict"
		b.exports = new (a.r(75483))("tag:yaml.org,2002:str", {
			kind: "scalar",
			construct: function (a) {
				return null !== a ? a : ""
			},
		})
	},
	14115,
	(a, b, c) => {
		"use strict"
		b.exports = new (a.r(75483))("tag:yaml.org,2002:seq", {
			kind: "sequence",
			construct: function (a) {
				return null !== a ? a : []
			},
		})
	},
	85155,
	(a, b, c) => {
		"use strict"
		b.exports = new (a.r(75483))("tag:yaml.org,2002:map", {
			kind: "mapping",
			construct: function (a) {
				return null !== a ? a : {}
			},
		})
	},
	83962,
	(a, b, c) => {
		"use strict"
		b.exports = new (a.r(98488))({ explicit: [a.r(51286), a.r(14115), a.r(85155)] })
	},
	68344,
	(a, b, c) => {
		"use strict"
		function d(a) {
			if (null === a) return !0
			var b = a.length
			return (1 === b && "~" === a) || (4 === b && ("null" === a || "Null" === a || "NULL" === a))
		}
		function e() {
			return null
		}
		function f(a) {
			return null === a
		}
		b.exports = new (a.r(75483))("tag:yaml.org,2002:null", {
			kind: "scalar",
			resolve: d,
			construct: e,
			predicate: f,
			represent: {
				canonical: function () {
					return "~"
				},
				lowercase: function () {
					return "null"
				},
				uppercase: function () {
					return "NULL"
				},
				camelcase: function () {
					return "Null"
				},
			},
			defaultStyle: "lowercase",
		})
	},
	92536,
	(a, b, c) => {
		"use strict"
		function d(a) {
			if (null === a) return !1
			var b = a.length
			return (
				(4 === b && ("true" === a || "True" === a || "TRUE" === a)) ||
				(5 === b && ("false" === a || "False" === a || "FALSE" === a))
			)
		}
		function e(a) {
			return "true" === a || "True" === a || "TRUE" === a
		}
		function f(a) {
			return "[object Boolean]" === Object.prototype.toString.call(a)
		}
		b.exports = new (a.r(75483))("tag:yaml.org,2002:bool", {
			kind: "scalar",
			resolve: d,
			construct: e,
			predicate: f,
			represent: {
				lowercase: function (a) {
					return a ? "true" : "false"
				},
				uppercase: function (a) {
					return a ? "TRUE" : "FALSE"
				},
				camelcase: function (a) {
					return a ? "True" : "False"
				},
			},
			defaultStyle: "lowercase",
		})
	},
	51927,
	(a, b, c) => {
		"use strict"
		var d = a.r(99908)
		function e(a) {
			return (48 <= a && a <= 57) || (65 <= a && a <= 70) || (97 <= a && a <= 102)
		}
		function f(a) {
			return 48 <= a && a <= 55
		}
		function g(a) {
			return 48 <= a && a <= 57
		}
		function h(a) {
			if (null === a) return !1
			var b,
				c = a.length,
				d = 0,
				h = !1
			if (!c) return !1
			if ((("-" === (b = a[d]) || "+" === b) && (b = a[++d]), "0" === b)) {
				if (d + 1 === c) return !0
				if ("b" === (b = a[++d])) {
					for (d++; d < c; d++)
						if ("_" !== (b = a[d])) {
							if ("0" !== b && "1" !== b) return !1
							h = !0
						}
					return h && "_" !== b
				}
				if ("x" === b) {
					for (d++; d < c; d++)
						if ("_" !== (b = a[d])) {
							if (!e(a.charCodeAt(d))) return !1
							h = !0
						}
					return h && "_" !== b
				}
				for (; d < c; d++)
					if ("_" !== (b = a[d])) {
						if (!f(a.charCodeAt(d))) return !1
						h = !0
					}
				return h && "_" !== b
			}
			if ("_" === b) return !1
			for (; d < c; d++)
				if ("_" !== (b = a[d])) {
					if (":" === b) break
					if (!g(a.charCodeAt(d))) return !1
					h = !0
				}
			return !!h && "_" !== b && (":" !== b || /^(:[0-5]?[0-9])+$/.test(a.slice(d)))
		}
		function i(a) {
			var b,
				c,
				d = a,
				e = 1,
				f = []
			return (-1 !== d.indexOf("_") && (d = d.replace(/_/g, "")),
			("-" === (b = d[0]) || "+" === b) && ("-" === b && (e = -1), (b = (d = d.slice(1))[0])),
			"0" === d)
				? 0
				: "0" === b
					? "b" === d[1]
						? e * parseInt(d.slice(2), 2)
						: "x" === d[1]
							? e * parseInt(d, 16)
							: e * parseInt(d, 8)
					: -1 !== d.indexOf(":")
						? (d.split(":").forEach(function (a) {
								f.unshift(parseInt(a, 10))
							}),
							(d = 0),
							(c = 1),
							f.forEach(function (a) {
								;(d += a * c), (c *= 60)
							}),
							e * d)
						: e * parseInt(d, 10)
		}
		function j(a) {
			return "[object Number]" === Object.prototype.toString.call(a) && a % 1 == 0 && !d.isNegativeZero(a)
		}
		b.exports = new (a.r(75483))("tag:yaml.org,2002:int", {
			kind: "scalar",
			resolve: h,
			construct: i,
			predicate: j,
			represent: {
				binary: function (a) {
					return a >= 0 ? "0b" + a.toString(2) : "-0b" + a.toString(2).slice(1)
				},
				octal: function (a) {
					return a >= 0 ? "0" + a.toString(8) : "-0" + a.toString(8).slice(1)
				},
				decimal: function (a) {
					return a.toString(10)
				},
				hexadecimal: function (a) {
					return a >= 0 ? "0x" + a.toString(16).toUpperCase() : "-0x" + a.toString(16).toUpperCase().slice(1)
				},
			},
			defaultStyle: "decimal",
			styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] },
		})
	},
	36867,
	(a, b, c) => {
		"use strict"
		var d = a.r(99908),
			e = a.r(75483),
			f = RegExp(
				"^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$",
			),
			g = /^[-+]?[0-9]+e/
		b.exports = new e("tag:yaml.org,2002:float", {
			kind: "scalar",
			resolve: function (a) {
				return null !== a && !!f.test(a) && "_" !== a[a.length - 1]
			},
			construct: function (a) {
				var b, c, d, e
				return ((c = "-" === (b = a.replace(/_/g, "").toLowerCase())[0] ? -1 : 1),
				(e = []),
				"+-".indexOf(b[0]) >= 0 && (b = b.slice(1)),
				".inf" === b)
					? 1 === c
						? 1 / 0
						: -1 / 0
					: ".nan" === b
						? NaN
						: b.indexOf(":") >= 0
							? (b.split(":").forEach(function (a) {
									e.unshift(parseFloat(a, 10))
								}),
								(b = 0),
								(d = 1),
								e.forEach(function (a) {
									;(b += a * d), (d *= 60)
								}),
								c * b)
							: c * parseFloat(b, 10)
			},
			predicate: function (a) {
				return "[object Number]" === Object.prototype.toString.call(a) && (a % 1 != 0 || d.isNegativeZero(a))
			},
			represent: function (a, b) {
				var c
				if (isNaN(a))
					switch (b) {
						case "lowercase":
							return ".nan"
						case "uppercase":
							return ".NAN"
						case "camelcase":
							return ".NaN"
					}
				else if (1 / 0 === a)
					switch (b) {
						case "lowercase":
							return ".inf"
						case "uppercase":
							return ".INF"
						case "camelcase":
							return ".Inf"
					}
				else if (-1 / 0 === a)
					switch (b) {
						case "lowercase":
							return "-.inf"
						case "uppercase":
							return "-.INF"
						case "camelcase":
							return "-.Inf"
					}
				else if (d.isNegativeZero(a)) return "-0.0"
				return (c = a.toString(10)), g.test(c) ? c.replace("e", ".e") : c
			},
			defaultStyle: "lowercase",
		})
	},
	86855,
	(a, b, c) => {
		"use strict"
		b.exports = new (a.r(98488))({
			include: [a.r(83962)],
			implicit: [a.r(68344), a.r(92536), a.r(51927), a.r(36867)],
		})
	},
	34073,
	(a, b, c) => {
		"use strict"
		b.exports = new (a.r(98488))({ include: [a.r(86855)] })
	},
	81494,
	(a, b, c) => {
		"use strict"
		var d = a.r(75483),
			e = RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
			f = RegExp(
				"^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$",
			)
		b.exports = new d("tag:yaml.org,2002:timestamp", {
			kind: "scalar",
			resolve: function (a) {
				return null !== a && (null !== e.exec(a) || null !== f.exec(a))
			},
			construct: function (a) {
				var b,
					c,
					d,
					g,
					h,
					i,
					j,
					k,
					l = 0,
					m = null
				if ((null === (b = e.exec(a)) && (b = f.exec(a)), null === b)) throw Error("Date resolve error")
				if (((c = +b[1]), (d = b[2] - 1), (g = +b[3]), !b[4])) return new Date(Date.UTC(c, d, g))
				if (((h = +b[4]), (i = +b[5]), (j = +b[6]), b[7])) {
					for (l = b[7].slice(0, 3); l.length < 3; ) l += "0"
					l *= 1
				}
				return (
					b[9] && ((m = (60 * b[10] + +(b[11] || 0)) * 6e4), "-" === b[9] && (m = -m)),
					(k = new Date(Date.UTC(c, d, g, h, i, j, l))),
					m && k.setTime(k.getTime() - m),
					k
				)
			},
			instanceOf: Date,
			represent: function (a) {
				return a.toISOString()
			},
		})
	},
	73391,
	(a, b, c) => {
		"use strict"
		function d(a) {
			return "<<" === a || null === a
		}
		b.exports = new (a.r(75483))("tag:yaml.org,2002:merge", { kind: "scalar", resolve: d })
	},
	874,
	(a, b, c) => {
		b.exports = a.x("buffer", () => require("buffer"))
	},
	99959,
	(a, b, c) => {
		"use strict"
		try {
			a.t, (d = a.r(874).Buffer)
		} catch (a) {}
		var d,
			e = a.r(75483),
			f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"
		b.exports = new e("tag:yaml.org,2002:binary", {
			kind: "scalar",
			resolve: function (a) {
				if (null === a) return !1
				var b,
					c,
					d = 0,
					e = a.length,
					g = f
				for (c = 0; c < e; c++)
					if (!((b = g.indexOf(a.charAt(c))) > 64)) {
						if (b < 0) return !1
						d += 6
					}
				return d % 8 == 0
			},
			construct: function (a) {
				var b,
					c,
					e = a.replace(/[\r\n=]/g, ""),
					g = e.length,
					h = f,
					i = 0,
					j = []
				for (b = 0; b < g; b++)
					b % 4 == 0 && b && (j.push((i >> 16) & 255), j.push((i >> 8) & 255), j.push(255 & i)),
						(i = (i << 6) | h.indexOf(e.charAt(b)))
				return (0 == (c = (g % 4) * 6)
					? (j.push((i >> 16) & 255), j.push((i >> 8) & 255), j.push(255 & i))
					: 18 === c
						? (j.push((i >> 10) & 255), j.push((i >> 2) & 255))
						: 12 === c && j.push((i >> 4) & 255),
				d)
					? d.from
						? d.from(j)
						: new d(j)
					: j
			},
			predicate: function (a) {
				return d && d.isBuffer(a)
			},
			represent: function (a) {
				var b,
					c,
					d = "",
					e = 0,
					g = a.length,
					h = f
				for (b = 0; b < g; b++)
					b % 3 == 0 &&
						b &&
						((d += h[(e >> 18) & 63]), (d += h[(e >> 12) & 63]), (d += h[(e >> 6) & 63]), (d += h[63 & e])),
						(e = (e << 8) + a[b])
				return (
					0 == (c = g % 3)
						? ((d += h[(e >> 18) & 63]),
							(d += h[(e >> 12) & 63]),
							(d += h[(e >> 6) & 63]),
							(d += h[63 & e]))
						: 2 === c
							? ((d += h[(e >> 10) & 63]), (d += h[(e >> 4) & 63]), (d += h[(e << 2) & 63]), (d += h[64]))
							: 1 === c && ((d += h[(e >> 2) & 63]), (d += h[(e << 4) & 63]), (d += h[64]), (d += h[64])),
					d
				)
			},
		})
	},
	98610,
	(a, b, c) => {
		"use strict"
		var d = a.r(75483),
			e = Object.prototype.hasOwnProperty,
			f = Object.prototype.toString
		b.exports = new d("tag:yaml.org,2002:omap", {
			kind: "sequence",
			resolve: function (a) {
				if (null === a) return !0
				var b,
					c,
					d,
					g,
					h,
					i = [],
					j = a
				for (b = 0, c = j.length; b < c; b += 1) {
					if (((d = j[b]), (h = !1), "[object Object]" !== f.call(d))) return !1
					for (g in d)
						if (e.call(d, g))
							if (h) return !1
							else h = !0
					if (!h || -1 !== i.indexOf(g)) return !1
					i.push(g)
				}
				return !0
			},
			construct: function (a) {
				return null !== a ? a : []
			},
		})
	},
	89379,
	(a, b, c) => {
		"use strict"
		var d = a.r(75483),
			e = Object.prototype.toString
		b.exports = new d("tag:yaml.org,2002:pairs", {
			kind: "sequence",
			resolve: function (a) {
				if (null === a) return !0
				var b,
					c,
					d,
					f,
					g,
					h = a
				for (b = 0, g = Array(h.length), c = h.length; b < c; b += 1) {
					if (((d = h[b]), "[object Object]" !== e.call(d) || 1 !== (f = Object.keys(d)).length)) return !1
					g[b] = [f[0], d[f[0]]]
				}
				return !0
			},
			construct: function (a) {
				if (null === a) return []
				var b,
					c,
					d,
					e,
					f,
					g = a
				for (b = 0, f = Array(g.length), c = g.length; b < c; b += 1)
					(e = Object.keys((d = g[b]))), (f[b] = [e[0], d[e[0]]])
				return f
			},
		})
	},
	61878,
	(a, b, c) => {
		"use strict"
		var d = a.r(75483),
			e = Object.prototype.hasOwnProperty
		b.exports = new d("tag:yaml.org,2002:set", {
			kind: "mapping",
			resolve: function (a) {
				if (null === a) return !0
				var b,
					c = a
				for (b in c) if (e.call(c, b) && null !== c[b]) return !1
				return !0
			},
			construct: function (a) {
				return null !== a ? a : {}
			},
		})
	},
	92239,
	(a, b, c) => {
		"use strict"
		b.exports = new (a.r(98488))({
			include: [a.r(34073)],
			implicit: [a.r(81494), a.r(73391)],
			explicit: [a.r(99959), a.r(98610), a.r(89379), a.r(61878)],
		})
	},
	29739,
	(a, b, c) => {
		"use strict"
		function d() {
			return !0
		}
		function e() {}
		function f() {
			return ""
		}
		function g(a) {
			return void 0 === a
		}
		b.exports = new (a.r(75483))("tag:yaml.org,2002:js/undefined", {
			kind: "scalar",
			resolve: d,
			construct: e,
			predicate: g,
			represent: f,
		})
	},
	1821,
	(a, b, c) => {
		"use strict"
		function d(a) {
			if (null === a || 0 === a.length) return !1
			var b = a,
				c = /\/([gim]*)$/.exec(a),
				d = ""
			return ("/" !== b[0] || (c && (d = c[1]), !(d.length > 3) && "/" === b[b.length - d.length - 1])) && !0
		}
		function e(a) {
			var b = a,
				c = /\/([gim]*)$/.exec(a),
				d = ""
			return "/" === b[0] && (c && (d = c[1]), (b = b.slice(1, b.length - d.length - 1))), new RegExp(b, d)
		}
		function f(a) {
			var b = "/" + a.source + "/"
			return a.global && (b += "g"), a.multiline && (b += "m"), a.ignoreCase && (b += "i"), b
		}
		function g(a) {
			return "[object RegExp]" === Object.prototype.toString.call(a)
		}
		b.exports = new (a.r(75483))("tag:yaml.org,2002:js/regexp", {
			kind: "scalar",
			resolve: d,
			construct: e,
			predicate: g,
			represent: f,
		})
	},
	97989,
	(a, b, c) => {
		!(function (a, c) {
			b.exports = c()
		})(a.e, function () {
			return (function (a) {
				var b = {}
				function c(d) {
					if (b[d]) return b[d].exports
					var e = (b[d] = { exports: {}, id: d, loaded: !1 })
					return a[d].call(e.exports, e, e.exports, c), (e.loaded = !0), e.exports
				}
				return (c.m = a), (c.c = b), (c.p = ""), c(0)
			})([
				function (a, b, c) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 })
					var d = c(1),
						e = c(3),
						f = c(8),
						g = c(15)
					function h(a, b, c) {
						var g,
							h = null,
							i = function (a, b) {
								c && c(a, b), h && h.visit(a, b)
							},
							j = "function" == typeof c ? i : null,
							k = !1
						if (b) {
							k = "boolean" == typeof b.comment && b.comment
							var l = "boolean" == typeof b.attachComment && b.attachComment
							;(k || l) && (((h = new d.CommentHandler()).attach = l), (b.comment = !0), (j = i))
						}
						var m = !1
						b && "string" == typeof b.sourceType && (m = "module" === b.sourceType),
							(g =
								b && "boolean" == typeof b.jsx && b.jsx
									? new e.JSXParser(a, b, j)
									: new f.Parser(a, b, j))
						var n = m ? g.parseModule() : g.parseScript()
						return (
							k && h && (n.comments = h.comments),
							g.config.tokens && (n.tokens = g.tokens),
							g.config.tolerant && (n.errors = g.errorHandler.errors),
							n
						)
					}
					;(b.parse = h),
						(b.parseModule = function (a, b, c) {
							var d = b || {}
							return (d.sourceType = "module"), h(a, d, c)
						}),
						(b.parseScript = function (a, b, c) {
							var d = b || {}
							return (d.sourceType = "script"), h(a, d, c)
						}),
						(b.tokenize = function (a, b, c) {
							var d,
								e = new g.Tokenizer(a, b)
							d = []
							try {
								for (;;) {
									var f = e.getNextToken()
									if (!f) break
									c && (f = c(f)), d.push(f)
								}
							} catch (a) {
								e.errorHandler.tolerate(a)
							}
							return e.errorHandler.tolerant && (d.errors = e.errors()), d
						}),
						(b.Syntax = c(2).Syntax),
						(b.version = "4.0.1")
				},
				function (a, b, c) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 })
					var d = c(2)
					b.CommentHandler = (function () {
						function a() {
							;(this.attach = !1),
								(this.comments = []),
								(this.stack = []),
								(this.leading = []),
								(this.trailing = [])
						}
						return (
							(a.prototype.insertInnerComments = function (a, b) {
								if (a.type === d.Syntax.BlockStatement && 0 === a.body.length) {
									for (var c = [], e = this.leading.length - 1; e >= 0; --e) {
										var f = this.leading[e]
										b.end.offset >= f.start &&
											(c.unshift(f.comment),
											this.leading.splice(e, 1),
											this.trailing.splice(e, 1))
									}
									c.length && (a.innerComments = c)
								}
							}),
							(a.prototype.findTrailingComments = function (a) {
								var b = []
								if (this.trailing.length > 0) {
									for (var c = this.trailing.length - 1; c >= 0; --c) {
										var d = this.trailing[c]
										d.start >= a.end.offset && b.unshift(d.comment)
									}
									return (this.trailing.length = 0), b
								}
								var e = this.stack[this.stack.length - 1]
								if (e && e.node.trailingComments) {
									var f = e.node.trailingComments[0]
									f &&
										f.range[0] >= a.end.offset &&
										((b = e.node.trailingComments), delete e.node.trailingComments)
								}
								return b
							}),
							(a.prototype.findLeadingComments = function (a) {
								for (var b, c = []; this.stack.length > 0; ) {
									var d = this.stack[this.stack.length - 1]
									if (d && d.start >= a.start.offset) (b = d.node), this.stack.pop()
									else break
								}
								if (b) {
									for (
										var e = b.leadingComments ? b.leadingComments.length : 0, f = e - 1;
										f >= 0;
										--f
									) {
										var g = b.leadingComments[f]
										g.range[1] <= a.start.offset && (c.unshift(g), b.leadingComments.splice(f, 1))
									}
									return (
										b.leadingComments && 0 === b.leadingComments.length && delete b.leadingComments,
										c
									)
								}
								for (var f = this.leading.length - 1; f >= 0; --f) {
									var d = this.leading[f]
									d.start <= a.start.offset && (c.unshift(d.comment), this.leading.splice(f, 1))
								}
								return c
							}),
							(a.prototype.visitNode = function (a, b) {
								if (a.type !== d.Syntax.Program || !(a.body.length > 0)) {
									this.insertInnerComments(a, b)
									var c = this.findTrailingComments(b),
										e = this.findLeadingComments(b)
									e.length > 0 && (a.leadingComments = e),
										c.length > 0 && (a.trailingComments = c),
										this.stack.push({ node: a, start: b.start.offset })
								}
							}),
							(a.prototype.visitComment = function (a, b) {
								var c = "L" === a.type[0] ? "Line" : "Block",
									d = { type: c, value: a.value }
								if (
									(a.range && (d.range = a.range),
									a.loc && (d.loc = a.loc),
									this.comments.push(d),
									this.attach)
								) {
									var e = {
										comment: { type: c, value: a.value, range: [b.start.offset, b.end.offset] },
										start: b.start.offset,
									}
									a.loc && (e.comment.loc = a.loc),
										(a.type = c),
										this.leading.push(e),
										this.trailing.push(e)
								}
							}),
							(a.prototype.visit = function (a, b) {
								"LineComment" === a.type || "BlockComment" === a.type
									? this.visitComment(a, b)
									: this.attach && this.visitNode(a, b)
							}),
							a
						)
					})()
				},
				function (a, b) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 }),
						(b.Syntax = {
							AssignmentExpression: "AssignmentExpression",
							AssignmentPattern: "AssignmentPattern",
							ArrayExpression: "ArrayExpression",
							ArrayPattern: "ArrayPattern",
							ArrowFunctionExpression: "ArrowFunctionExpression",
							AwaitExpression: "AwaitExpression",
							BlockStatement: "BlockStatement",
							BinaryExpression: "BinaryExpression",
							BreakStatement: "BreakStatement",
							CallExpression: "CallExpression",
							CatchClause: "CatchClause",
							ClassBody: "ClassBody",
							ClassDeclaration: "ClassDeclaration",
							ClassExpression: "ClassExpression",
							ConditionalExpression: "ConditionalExpression",
							ContinueStatement: "ContinueStatement",
							DoWhileStatement: "DoWhileStatement",
							DebuggerStatement: "DebuggerStatement",
							EmptyStatement: "EmptyStatement",
							ExportAllDeclaration: "ExportAllDeclaration",
							ExportDefaultDeclaration: "ExportDefaultDeclaration",
							ExportNamedDeclaration: "ExportNamedDeclaration",
							ExportSpecifier: "ExportSpecifier",
							ExpressionStatement: "ExpressionStatement",
							ForStatement: "ForStatement",
							ForOfStatement: "ForOfStatement",
							ForInStatement: "ForInStatement",
							FunctionDeclaration: "FunctionDeclaration",
							FunctionExpression: "FunctionExpression",
							Identifier: "Identifier",
							IfStatement: "IfStatement",
							ImportDeclaration: "ImportDeclaration",
							ImportDefaultSpecifier: "ImportDefaultSpecifier",
							ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
							ImportSpecifier: "ImportSpecifier",
							Literal: "Literal",
							LabeledStatement: "LabeledStatement",
							LogicalExpression: "LogicalExpression",
							MemberExpression: "MemberExpression",
							MetaProperty: "MetaProperty",
							MethodDefinition: "MethodDefinition",
							NewExpression: "NewExpression",
							ObjectExpression: "ObjectExpression",
							ObjectPattern: "ObjectPattern",
							Program: "Program",
							Property: "Property",
							RestElement: "RestElement",
							ReturnStatement: "ReturnStatement",
							SequenceExpression: "SequenceExpression",
							SpreadElement: "SpreadElement",
							Super: "Super",
							SwitchCase: "SwitchCase",
							SwitchStatement: "SwitchStatement",
							TaggedTemplateExpression: "TaggedTemplateExpression",
							TemplateElement: "TemplateElement",
							TemplateLiteral: "TemplateLiteral",
							ThisExpression: "ThisExpression",
							ThrowStatement: "ThrowStatement",
							TryStatement: "TryStatement",
							UnaryExpression: "UnaryExpression",
							UpdateExpression: "UpdateExpression",
							VariableDeclaration: "VariableDeclaration",
							VariableDeclarator: "VariableDeclarator",
							WhileStatement: "WhileStatement",
							WithStatement: "WithStatement",
							YieldExpression: "YieldExpression",
						})
				},
				function (a, b, c) {
					"use strict"
					var d =
						(this && this.__extends) ||
						(function () {
							var a =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (a, b) {
										a.__proto__ = b
									}) ||
								function (a, b) {
									for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
								}
							return function (b, c) {
								function d() {
									this.constructor = b
								}
								a(b, c),
									(b.prototype =
										null === c ? Object.create(c) : ((d.prototype = c.prototype), new d()))
							}
						})()
					Object.defineProperty(b, "__esModule", { value: !0 })
					var e = c(4),
						f = c(5),
						g = c(6),
						h = c(7),
						i = c(8),
						j = c(13),
						k = c(14)
					function l(a) {
						var b
						switch (a.type) {
							case g.JSXSyntax.JSXIdentifier:
								b = a.name
								break
							case g.JSXSyntax.JSXNamespacedName:
								var c = a
								b = l(c.namespace) + ":" + l(c.name)
								break
							case g.JSXSyntax.JSXMemberExpression:
								var d = a
								b = l(d.object) + "." + l(d.property)
						}
						return b
					}
					;(j.TokenName[100] = "JSXIdentifier"),
						(j.TokenName[101] = "JSXText"),
						(b.JSXParser = (function (a) {
							function b(b, c, d) {
								return a.call(this, b, c, d) || this
							}
							return (
								d(b, a),
								(b.prototype.parsePrimaryExpression = function () {
									return this.match("<")
										? this.parseJSXRoot()
										: a.prototype.parsePrimaryExpression.call(this)
								}),
								(b.prototype.startJSX = function () {
									;(this.scanner.index = this.startMarker.index),
										(this.scanner.lineNumber = this.startMarker.line),
										(this.scanner.lineStart = this.startMarker.index - this.startMarker.column)
								}),
								(b.prototype.finishJSX = function () {
									this.nextToken()
								}),
								(b.prototype.reenterJSX = function () {
									this.startJSX(), this.expectJSX("}"), this.config.tokens && this.tokens.pop()
								}),
								(b.prototype.createJSXNode = function () {
									return (
										this.collectComments(),
										{
											index: this.scanner.index,
											line: this.scanner.lineNumber,
											column: this.scanner.index - this.scanner.lineStart,
										}
									)
								}),
								(b.prototype.createJSXChildNode = function () {
									return {
										index: this.scanner.index,
										line: this.scanner.lineNumber,
										column: this.scanner.index - this.scanner.lineStart,
									}
								}),
								(b.prototype.scanXHTMLEntity = function (a) {
									for (
										var b = "&", c = !0, d = !1, f = !1, g = !1;
										!this.scanner.eof() && c && !d;

									) {
										var h = this.scanner.source[this.scanner.index]
										if (h === a) break
										if (((d = ";" === h), (b += h), ++this.scanner.index, !d))
											switch (b.length) {
												case 2:
													f = "#" === h
													break
												case 3:
													f &&
														((c =
															(g = "x" === h) ||
															e.Character.isDecimalDigit(h.charCodeAt(0))),
														(f = f && !g))
													break
												default:
													c =
														(c =
															c &&
															!(f && !e.Character.isDecimalDigit(h.charCodeAt(0)))) &&
														!(g && !e.Character.isHexDigit(h.charCodeAt(0)))
											}
									}
									if (c && d && b.length > 2) {
										var i = b.substr(1, b.length - 2)
										f && i.length > 1
											? (b = String.fromCharCode(parseInt(i.substr(1), 10)))
											: g && i.length > 2
												? (b = String.fromCharCode(parseInt("0" + i.substr(1), 16)))
												: f || g || !k.XHTMLEntities[i] || (b = k.XHTMLEntities[i])
									}
									return b
								}),
								(b.prototype.lexJSX = function () {
									var a = this.scanner.source.charCodeAt(this.scanner.index)
									if (
										60 === a ||
										62 === a ||
										47 === a ||
										58 === a ||
										61 === a ||
										123 === a ||
										125 === a
									) {
										var b = this.scanner.source[this.scanner.index++]
										return {
											type: 7,
											value: b,
											lineNumber: this.scanner.lineNumber,
											lineStart: this.scanner.lineStart,
											start: this.scanner.index - 1,
											end: this.scanner.index,
										}
									}
									if (34 === a || 39 === a) {
										for (
											var c = this.scanner.index,
												d = this.scanner.source[this.scanner.index++],
												f = "";
											!this.scanner.eof();

										) {
											var g = this.scanner.source[this.scanner.index++]
											if (g === d) break
											"&" === g ? (f += this.scanXHTMLEntity(d)) : (f += g)
										}
										return {
											type: 8,
											value: f,
											lineNumber: this.scanner.lineNumber,
											lineStart: this.scanner.lineStart,
											start: c,
											end: this.scanner.index,
										}
									}
									if (46 === a) {
										var h = this.scanner.source.charCodeAt(this.scanner.index + 1),
											i = this.scanner.source.charCodeAt(this.scanner.index + 2),
											b = 46 === h && 46 === i ? "..." : ".",
											c = this.scanner.index
										return (
											(this.scanner.index += b.length),
											{
												type: 7,
												value: b,
												lineNumber: this.scanner.lineNumber,
												lineStart: this.scanner.lineStart,
												start: c,
												end: this.scanner.index,
											}
										)
									}
									if (96 === a)
										return {
											type: 10,
											value: "",
											lineNumber: this.scanner.lineNumber,
											lineStart: this.scanner.lineStart,
											start: this.scanner.index,
											end: this.scanner.index,
										}
									if (e.Character.isIdentifierStart(a) && 92 !== a) {
										var c = this.scanner.index
										for (++this.scanner.index; !this.scanner.eof(); ) {
											var g = this.scanner.source.charCodeAt(this.scanner.index)
											if (e.Character.isIdentifierPart(g) && 92 !== g) ++this.scanner.index
											else if (45 === g) ++this.scanner.index
											else break
										}
										return {
											type: 100,
											value: this.scanner.source.slice(c, this.scanner.index),
											lineNumber: this.scanner.lineNumber,
											lineStart: this.scanner.lineStart,
											start: c,
											end: this.scanner.index,
										}
									}
									return this.scanner.lex()
								}),
								(b.prototype.nextJSXToken = function () {
									this.collectComments(),
										(this.startMarker.index = this.scanner.index),
										(this.startMarker.line = this.scanner.lineNumber),
										(this.startMarker.column = this.scanner.index - this.scanner.lineStart)
									var a = this.lexJSX()
									return (
										(this.lastMarker.index = this.scanner.index),
										(this.lastMarker.line = this.scanner.lineNumber),
										(this.lastMarker.column = this.scanner.index - this.scanner.lineStart),
										this.config.tokens && this.tokens.push(this.convertToken(a)),
										a
									)
								}),
								(b.prototype.nextJSXText = function () {
									;(this.startMarker.index = this.scanner.index),
										(this.startMarker.line = this.scanner.lineNumber),
										(this.startMarker.column = this.scanner.index - this.scanner.lineStart)
									for (var a = this.scanner.index, b = ""; !this.scanner.eof(); ) {
										var c = this.scanner.source[this.scanner.index]
										if ("{" === c || "<" === c) break
										++this.scanner.index,
											(b += c),
											e.Character.isLineTerminator(c.charCodeAt(0)) &&
												(++this.scanner.lineNumber,
												"\r" === c &&
													"\n" === this.scanner.source[this.scanner.index] &&
													++this.scanner.index,
												(this.scanner.lineStart = this.scanner.index))
									}
									;(this.lastMarker.index = this.scanner.index),
										(this.lastMarker.line = this.scanner.lineNumber),
										(this.lastMarker.column = this.scanner.index - this.scanner.lineStart)
									var d = {
										type: 101,
										value: b,
										lineNumber: this.scanner.lineNumber,
										lineStart: this.scanner.lineStart,
										start: a,
										end: this.scanner.index,
									}
									return (
										b.length > 0 && this.config.tokens && this.tokens.push(this.convertToken(d)), d
									)
								}),
								(b.prototype.peekJSXToken = function () {
									var a = this.scanner.saveState()
									this.scanner.scanComments()
									var b = this.lexJSX()
									return this.scanner.restoreState(a), b
								}),
								(b.prototype.expectJSX = function (a) {
									var b = this.nextJSXToken()
									;(7 !== b.type || b.value !== a) && this.throwUnexpectedToken(b)
								}),
								(b.prototype.matchJSX = function (a) {
									var b = this.peekJSXToken()
									return 7 === b.type && b.value === a
								}),
								(b.prototype.parseJSXIdentifier = function () {
									var a = this.createJSXNode(),
										b = this.nextJSXToken()
									return (
										100 !== b.type && this.throwUnexpectedToken(b),
										this.finalize(a, new f.JSXIdentifier(b.value))
									)
								}),
								(b.prototype.parseJSXElementName = function () {
									var a = this.createJSXNode(),
										b = this.parseJSXIdentifier()
									if (this.matchJSX(":")) {
										var c = b
										this.expectJSX(":")
										var d = this.parseJSXIdentifier()
										b = this.finalize(a, new f.JSXNamespacedName(c, d))
									} else if (this.matchJSX("."))
										for (; this.matchJSX("."); ) {
											var e = b
											this.expectJSX(".")
											var g = this.parseJSXIdentifier()
											b = this.finalize(a, new f.JSXMemberExpression(e, g))
										}
									return b
								}),
								(b.prototype.parseJSXAttributeName = function () {
									var a,
										b = this.createJSXNode(),
										c = this.parseJSXIdentifier()
									if (this.matchJSX(":")) {
										var d = c
										this.expectJSX(":")
										var e = this.parseJSXIdentifier()
										a = this.finalize(b, new f.JSXNamespacedName(d, e))
									} else a = c
									return a
								}),
								(b.prototype.parseJSXStringLiteralAttribute = function () {
									var a = this.createJSXNode(),
										b = this.nextJSXToken()
									8 !== b.type && this.throwUnexpectedToken(b)
									var c = this.getTokenRaw(b)
									return this.finalize(a, new h.Literal(b.value, c))
								}),
								(b.prototype.parseJSXExpressionAttribute = function () {
									var a = this.createJSXNode()
									this.expectJSX("{"),
										this.finishJSX(),
										this.match("}") &&
											this.tolerateError(
												"JSX attributes must only be assigned a non-empty expression",
											)
									var b = this.parseAssignmentExpression()
									return this.reenterJSX(), this.finalize(a, new f.JSXExpressionContainer(b))
								}),
								(b.prototype.parseJSXAttributeValue = function () {
									return this.matchJSX("{")
										? this.parseJSXExpressionAttribute()
										: this.matchJSX("<")
											? this.parseJSXElement()
											: this.parseJSXStringLiteralAttribute()
								}),
								(b.prototype.parseJSXNameValueAttribute = function () {
									var a = this.createJSXNode(),
										b = this.parseJSXAttributeName(),
										c = null
									return (
										this.matchJSX("=") &&
											(this.expectJSX("="), (c = this.parseJSXAttributeValue())),
										this.finalize(a, new f.JSXAttribute(b, c))
									)
								}),
								(b.prototype.parseJSXSpreadAttribute = function () {
									var a = this.createJSXNode()
									this.expectJSX("{"), this.expectJSX("..."), this.finishJSX()
									var b = this.parseAssignmentExpression()
									return this.reenterJSX(), this.finalize(a, new f.JSXSpreadAttribute(b))
								}),
								(b.prototype.parseJSXAttributes = function () {
									for (var a = []; !this.matchJSX("/") && !this.matchJSX(">"); ) {
										var b = this.matchJSX("{")
											? this.parseJSXSpreadAttribute()
											: this.parseJSXNameValueAttribute()
										a.push(b)
									}
									return a
								}),
								(b.prototype.parseJSXOpeningElement = function () {
									var a = this.createJSXNode()
									this.expectJSX("<")
									var b = this.parseJSXElementName(),
										c = this.parseJSXAttributes(),
										d = this.matchJSX("/")
									return (
										d && this.expectJSX("/"),
										this.expectJSX(">"),
										this.finalize(a, new f.JSXOpeningElement(b, d, c))
									)
								}),
								(b.prototype.parseJSXBoundaryElement = function () {
									var a = this.createJSXNode()
									if ((this.expectJSX("<"), this.matchJSX("/"))) {
										this.expectJSX("/")
										var b = this.parseJSXElementName()
										return this.expectJSX(">"), this.finalize(a, new f.JSXClosingElement(b))
									}
									var c = this.parseJSXElementName(),
										d = this.parseJSXAttributes(),
										e = this.matchJSX("/")
									return (
										e && this.expectJSX("/"),
										this.expectJSX(">"),
										this.finalize(a, new f.JSXOpeningElement(c, e, d))
									)
								}),
								(b.prototype.parseJSXEmptyExpression = function () {
									var a = this.createJSXChildNode()
									return (
										this.collectComments(),
										(this.lastMarker.index = this.scanner.index),
										(this.lastMarker.line = this.scanner.lineNumber),
										(this.lastMarker.column = this.scanner.index - this.scanner.lineStart),
										this.finalize(a, new f.JSXEmptyExpression())
									)
								}),
								(b.prototype.parseJSXExpressionContainer = function () {
									var a,
										b = this.createJSXNode()
									return (
										this.expectJSX("{"),
										this.matchJSX("}")
											? ((a = this.parseJSXEmptyExpression()), this.expectJSX("}"))
											: (this.finishJSX(),
												(a = this.parseAssignmentExpression()),
												this.reenterJSX()),
										this.finalize(b, new f.JSXExpressionContainer(a))
									)
								}),
								(b.prototype.parseJSXChildren = function () {
									for (var a = []; !this.scanner.eof(); ) {
										var b = this.createJSXChildNode(),
											c = this.nextJSXText()
										if (c.start < c.end) {
											var d = this.getTokenRaw(c),
												e = this.finalize(b, new f.JSXText(c.value, d))
											a.push(e)
										}
										if ("{" === this.scanner.source[this.scanner.index]) {
											var g = this.parseJSXExpressionContainer()
											a.push(g)
										} else break
									}
									return a
								}),
								(b.prototype.parseComplexJSXElement = function (a) {
									for (var b = []; !this.scanner.eof(); ) {
										a.children = a.children.concat(this.parseJSXChildren())
										var c = this.createJSXChildNode(),
											d = this.parseJSXBoundaryElement()
										if (d.type === g.JSXSyntax.JSXOpeningElement) {
											var e = d
											if (e.selfClosing) {
												var h = this.finalize(c, new f.JSXElement(e, [], null))
												a.children.push(h)
											} else b.push(a), (a = { node: c, opening: e, closing: null, children: [] })
										}
										if (d.type === g.JSXSyntax.JSXClosingElement) {
											a.closing = d
											var i = l(a.opening.name)
											if (
												(i !== l(a.closing.name) &&
													this.tolerateError(
														"Expected corresponding JSX closing tag for %0",
														i,
													),
												b.length > 0)
											) {
												var h = this.finalize(
													a.node,
													new f.JSXElement(a.opening, a.children, a.closing),
												)
												;(a = b[b.length - 1]).children.push(h), b.pop()
											} else break
										}
									}
									return a
								}),
								(b.prototype.parseJSXElement = function () {
									var a = this.createJSXNode(),
										b = this.parseJSXOpeningElement(),
										c = [],
										d = null
									if (!b.selfClosing) {
										var e = this.parseComplexJSXElement({
											node: a,
											opening: b,
											closing: d,
											children: c,
										})
										;(c = e.children), (d = e.closing)
									}
									return this.finalize(a, new f.JSXElement(b, c, d))
								}),
								(b.prototype.parseJSXRoot = function () {
									this.config.tokens && this.tokens.pop(), this.startJSX()
									var a = this.parseJSXElement()
									return this.finishJSX(), a
								}),
								(b.prototype.isStartOfExpression = function () {
									return a.prototype.isStartOfExpression.call(this) || this.match("<")
								}),
								b
							)
						})(i.Parser))
				},
				function (a, b) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 })
					var c =
							/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
						d =
							/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
					b.Character = {
						fromCodePoint: function (a) {
							return a < 65536
								? String.fromCharCode(a)
								: String.fromCharCode(55296 + ((a - 65536) >> 10)) +
										String.fromCharCode(56320 + ((a - 65536) & 1023))
						},
						isWhiteSpace: function (a) {
							return (
								32 === a ||
								9 === a ||
								11 === a ||
								12 === a ||
								160 === a ||
								(a >= 5760 &&
									[
										5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239,
										8287, 12288, 65279,
									].indexOf(a) >= 0)
							)
						},
						isLineTerminator: function (a) {
							return 10 === a || 13 === a || 8232 === a || 8233 === a
						},
						isIdentifierStart: function (a) {
							return (
								36 === a ||
								95 === a ||
								(a >= 65 && a <= 90) ||
								(a >= 97 && a <= 122) ||
								92 === a ||
								(a >= 128 && c.test(b.Character.fromCodePoint(a)))
							)
						},
						isIdentifierPart: function (a) {
							return (
								36 === a ||
								95 === a ||
								(a >= 65 && a <= 90) ||
								(a >= 97 && a <= 122) ||
								(a >= 48 && a <= 57) ||
								92 === a ||
								(a >= 128 && d.test(b.Character.fromCodePoint(a)))
							)
						},
						isDecimalDigit: function (a) {
							return a >= 48 && a <= 57
						},
						isHexDigit: function (a) {
							return (a >= 48 && a <= 57) || (a >= 65 && a <= 70) || (a >= 97 && a <= 102)
						},
						isOctalDigit: function (a) {
							return a >= 48 && a <= 55
						},
					}
				},
				function (a, b, c) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 })
					var d = c(6)
					;(b.JSXClosingElement = (function () {
						return function (a) {
							;(this.type = d.JSXSyntax.JSXClosingElement), (this.name = a)
						}
					})()),
						(b.JSXElement = (function () {
							return function (a, b, c) {
								;(this.type = d.JSXSyntax.JSXElement),
									(this.openingElement = a),
									(this.children = b),
									(this.closingElement = c)
							}
						})()),
						(b.JSXEmptyExpression = (function () {
							return function () {
								this.type = d.JSXSyntax.JSXEmptyExpression
							}
						})()),
						(b.JSXExpressionContainer = (function () {
							return function (a) {
								;(this.type = d.JSXSyntax.JSXExpressionContainer), (this.expression = a)
							}
						})()),
						(b.JSXIdentifier = (function () {
							return function (a) {
								;(this.type = d.JSXSyntax.JSXIdentifier), (this.name = a)
							}
						})()),
						(b.JSXMemberExpression = (function () {
							return function (a, b) {
								;(this.type = d.JSXSyntax.JSXMemberExpression), (this.object = a), (this.property = b)
							}
						})()),
						(b.JSXAttribute = (function () {
							return function (a, b) {
								;(this.type = d.JSXSyntax.JSXAttribute), (this.name = a), (this.value = b)
							}
						})()),
						(b.JSXNamespacedName = (function () {
							return function (a, b) {
								;(this.type = d.JSXSyntax.JSXNamespacedName), (this.namespace = a), (this.name = b)
							}
						})()),
						(b.JSXOpeningElement = (function () {
							return function (a, b, c) {
								;(this.type = d.JSXSyntax.JSXOpeningElement),
									(this.name = a),
									(this.selfClosing = b),
									(this.attributes = c)
							}
						})()),
						(b.JSXSpreadAttribute = (function () {
							return function (a) {
								;(this.type = d.JSXSyntax.JSXSpreadAttribute), (this.argument = a)
							}
						})()),
						(b.JSXText = (function () {
							return function (a, b) {
								;(this.type = d.JSXSyntax.JSXText), (this.value = a), (this.raw = b)
							}
						})())
				},
				function (a, b) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 }),
						(b.JSXSyntax = {
							JSXAttribute: "JSXAttribute",
							JSXClosingElement: "JSXClosingElement",
							JSXElement: "JSXElement",
							JSXEmptyExpression: "JSXEmptyExpression",
							JSXExpressionContainer: "JSXExpressionContainer",
							JSXIdentifier: "JSXIdentifier",
							JSXMemberExpression: "JSXMemberExpression",
							JSXNamespacedName: "JSXNamespacedName",
							JSXOpeningElement: "JSXOpeningElement",
							JSXSpreadAttribute: "JSXSpreadAttribute",
							JSXText: "JSXText",
						})
				},
				function (a, b, c) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 })
					var d = c(2)
					;(b.ArrayExpression = (function () {
						return function (a) {
							;(this.type = d.Syntax.ArrayExpression), (this.elements = a)
						}
					})()),
						(b.ArrayPattern = (function () {
							return function (a) {
								;(this.type = d.Syntax.ArrayPattern), (this.elements = a)
							}
						})()),
						(b.ArrowFunctionExpression = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.ArrowFunctionExpression),
									(this.id = null),
									(this.params = a),
									(this.body = b),
									(this.generator = !1),
									(this.expression = c),
									(this.async = !1)
							}
						})()),
						(b.AssignmentExpression = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.AssignmentExpression),
									(this.operator = a),
									(this.left = b),
									(this.right = c)
							}
						})()),
						(b.AssignmentPattern = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.AssignmentPattern), (this.left = a), (this.right = b)
							}
						})()),
						(b.AsyncArrowFunctionExpression = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.ArrowFunctionExpression),
									(this.id = null),
									(this.params = a),
									(this.body = b),
									(this.generator = !1),
									(this.expression = c),
									(this.async = !0)
							}
						})()),
						(b.AsyncFunctionDeclaration = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.FunctionDeclaration),
									(this.id = a),
									(this.params = b),
									(this.body = c),
									(this.generator = !1),
									(this.expression = !1),
									(this.async = !0)
							}
						})()),
						(b.AsyncFunctionExpression = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.FunctionExpression),
									(this.id = a),
									(this.params = b),
									(this.body = c),
									(this.generator = !1),
									(this.expression = !1),
									(this.async = !0)
							}
						})()),
						(b.AwaitExpression = (function () {
							return function (a) {
								;(this.type = d.Syntax.AwaitExpression), (this.argument = a)
							}
						})()),
						(b.BinaryExpression = (function () {
							return function (a, b, c) {
								var e = "||" === a || "&&" === a
								;(this.type = e ? d.Syntax.LogicalExpression : d.Syntax.BinaryExpression),
									(this.operator = a),
									(this.left = b),
									(this.right = c)
							}
						})()),
						(b.BlockStatement = (function () {
							return function (a) {
								;(this.type = d.Syntax.BlockStatement), (this.body = a)
							}
						})()),
						(b.BreakStatement = (function () {
							return function (a) {
								;(this.type = d.Syntax.BreakStatement), (this.label = a)
							}
						})()),
						(b.CallExpression = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.CallExpression), (this.callee = a), (this.arguments = b)
							}
						})()),
						(b.CatchClause = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.CatchClause), (this.param = a), (this.body = b)
							}
						})()),
						(b.ClassBody = (function () {
							return function (a) {
								;(this.type = d.Syntax.ClassBody), (this.body = a)
							}
						})()),
						(b.ClassDeclaration = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.ClassDeclaration),
									(this.id = a),
									(this.superClass = b),
									(this.body = c)
							}
						})()),
						(b.ClassExpression = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.ClassExpression),
									(this.id = a),
									(this.superClass = b),
									(this.body = c)
							}
						})()),
						(b.ComputedMemberExpression = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.MemberExpression),
									(this.computed = !0),
									(this.object = a),
									(this.property = b)
							}
						})()),
						(b.ConditionalExpression = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.ConditionalExpression),
									(this.test = a),
									(this.consequent = b),
									(this.alternate = c)
							}
						})()),
						(b.ContinueStatement = (function () {
							return function (a) {
								;(this.type = d.Syntax.ContinueStatement), (this.label = a)
							}
						})()),
						(b.DebuggerStatement = (function () {
							return function () {
								this.type = d.Syntax.DebuggerStatement
							}
						})()),
						(b.Directive = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.ExpressionStatement), (this.expression = a), (this.directive = b)
							}
						})()),
						(b.DoWhileStatement = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.DoWhileStatement), (this.body = a), (this.test = b)
							}
						})()),
						(b.EmptyStatement = (function () {
							return function () {
								this.type = d.Syntax.EmptyStatement
							}
						})()),
						(b.ExportAllDeclaration = (function () {
							return function (a) {
								;(this.type = d.Syntax.ExportAllDeclaration), (this.source = a)
							}
						})()),
						(b.ExportDefaultDeclaration = (function () {
							return function (a) {
								;(this.type = d.Syntax.ExportDefaultDeclaration), (this.declaration = a)
							}
						})()),
						(b.ExportNamedDeclaration = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.ExportNamedDeclaration),
									(this.declaration = a),
									(this.specifiers = b),
									(this.source = c)
							}
						})()),
						(b.ExportSpecifier = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.ExportSpecifier), (this.exported = b), (this.local = a)
							}
						})()),
						(b.ExpressionStatement = (function () {
							return function (a) {
								;(this.type = d.Syntax.ExpressionStatement), (this.expression = a)
							}
						})()),
						(b.ForInStatement = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.ForInStatement),
									(this.left = a),
									(this.right = b),
									(this.body = c),
									(this.each = !1)
							}
						})()),
						(b.ForOfStatement = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.ForOfStatement),
									(this.left = a),
									(this.right = b),
									(this.body = c)
							}
						})()),
						(b.ForStatement = (function () {
							return function (a, b, c, e) {
								;(this.type = d.Syntax.ForStatement),
									(this.init = a),
									(this.test = b),
									(this.update = c),
									(this.body = e)
							}
						})()),
						(b.FunctionDeclaration = (function () {
							return function (a, b, c, e) {
								;(this.type = d.Syntax.FunctionDeclaration),
									(this.id = a),
									(this.params = b),
									(this.body = c),
									(this.generator = e),
									(this.expression = !1),
									(this.async = !1)
							}
						})()),
						(b.FunctionExpression = (function () {
							return function (a, b, c, e) {
								;(this.type = d.Syntax.FunctionExpression),
									(this.id = a),
									(this.params = b),
									(this.body = c),
									(this.generator = e),
									(this.expression = !1),
									(this.async = !1)
							}
						})()),
						(b.Identifier = (function () {
							return function (a) {
								;(this.type = d.Syntax.Identifier), (this.name = a)
							}
						})()),
						(b.IfStatement = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.IfStatement),
									(this.test = a),
									(this.consequent = b),
									(this.alternate = c)
							}
						})()),
						(b.ImportDeclaration = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.ImportDeclaration), (this.specifiers = a), (this.source = b)
							}
						})()),
						(b.ImportDefaultSpecifier = (function () {
							return function (a) {
								;(this.type = d.Syntax.ImportDefaultSpecifier), (this.local = a)
							}
						})()),
						(b.ImportNamespaceSpecifier = (function () {
							return function (a) {
								;(this.type = d.Syntax.ImportNamespaceSpecifier), (this.local = a)
							}
						})()),
						(b.ImportSpecifier = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.ImportSpecifier), (this.local = a), (this.imported = b)
							}
						})()),
						(b.LabeledStatement = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.LabeledStatement), (this.label = a), (this.body = b)
							}
						})()),
						(b.Literal = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.Literal), (this.value = a), (this.raw = b)
							}
						})()),
						(b.MetaProperty = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.MetaProperty), (this.meta = a), (this.property = b)
							}
						})()),
						(b.MethodDefinition = (function () {
							return function (a, b, c, e, f) {
								;(this.type = d.Syntax.MethodDefinition),
									(this.key = a),
									(this.computed = b),
									(this.value = c),
									(this.kind = e),
									(this.static = f)
							}
						})()),
						(b.Module = (function () {
							return function (a) {
								;(this.type = d.Syntax.Program), (this.body = a), (this.sourceType = "module")
							}
						})()),
						(b.NewExpression = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.NewExpression), (this.callee = a), (this.arguments = b)
							}
						})()),
						(b.ObjectExpression = (function () {
							return function (a) {
								;(this.type = d.Syntax.ObjectExpression), (this.properties = a)
							}
						})()),
						(b.ObjectPattern = (function () {
							return function (a) {
								;(this.type = d.Syntax.ObjectPattern), (this.properties = a)
							}
						})()),
						(b.Property = (function () {
							return function (a, b, c, e, f, g) {
								;(this.type = d.Syntax.Property),
									(this.key = b),
									(this.computed = c),
									(this.value = e),
									(this.kind = a),
									(this.method = f),
									(this.shorthand = g)
							}
						})()),
						(b.RegexLiteral = (function () {
							return function (a, b, c, e) {
								;(this.type = d.Syntax.Literal),
									(this.value = a),
									(this.raw = b),
									(this.regex = { pattern: c, flags: e })
							}
						})()),
						(b.RestElement = (function () {
							return function (a) {
								;(this.type = d.Syntax.RestElement), (this.argument = a)
							}
						})()),
						(b.ReturnStatement = (function () {
							return function (a) {
								;(this.type = d.Syntax.ReturnStatement), (this.argument = a)
							}
						})()),
						(b.Script = (function () {
							return function (a) {
								;(this.type = d.Syntax.Program), (this.body = a), (this.sourceType = "script")
							}
						})()),
						(b.SequenceExpression = (function () {
							return function (a) {
								;(this.type = d.Syntax.SequenceExpression), (this.expressions = a)
							}
						})()),
						(b.SpreadElement = (function () {
							return function (a) {
								;(this.type = d.Syntax.SpreadElement), (this.argument = a)
							}
						})()),
						(b.StaticMemberExpression = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.MemberExpression),
									(this.computed = !1),
									(this.object = a),
									(this.property = b)
							}
						})()),
						(b.Super = (function () {
							return function () {
								this.type = d.Syntax.Super
							}
						})()),
						(b.SwitchCase = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.SwitchCase), (this.test = a), (this.consequent = b)
							}
						})()),
						(b.SwitchStatement = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.SwitchStatement), (this.discriminant = a), (this.cases = b)
							}
						})()),
						(b.TaggedTemplateExpression = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.TaggedTemplateExpression), (this.tag = a), (this.quasi = b)
							}
						})()),
						(b.TemplateElement = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.TemplateElement), (this.value = a), (this.tail = b)
							}
						})()),
						(b.TemplateLiteral = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.TemplateLiteral), (this.quasis = a), (this.expressions = b)
							}
						})()),
						(b.ThisExpression = (function () {
							return function () {
								this.type = d.Syntax.ThisExpression
							}
						})()),
						(b.ThrowStatement = (function () {
							return function (a) {
								;(this.type = d.Syntax.ThrowStatement), (this.argument = a)
							}
						})()),
						(b.TryStatement = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.TryStatement),
									(this.block = a),
									(this.handler = b),
									(this.finalizer = c)
							}
						})()),
						(b.UnaryExpression = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.UnaryExpression),
									(this.operator = a),
									(this.argument = b),
									(this.prefix = !0)
							}
						})()),
						(b.UpdateExpression = (function () {
							return function (a, b, c) {
								;(this.type = d.Syntax.UpdateExpression),
									(this.operator = a),
									(this.argument = b),
									(this.prefix = c)
							}
						})()),
						(b.VariableDeclaration = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.VariableDeclaration), (this.declarations = a), (this.kind = b)
							}
						})()),
						(b.VariableDeclarator = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.VariableDeclarator), (this.id = a), (this.init = b)
							}
						})()),
						(b.WhileStatement = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.WhileStatement), (this.test = a), (this.body = b)
							}
						})()),
						(b.WithStatement = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.WithStatement), (this.object = a), (this.body = b)
							}
						})()),
						(b.YieldExpression = (function () {
							return function (a, b) {
								;(this.type = d.Syntax.YieldExpression), (this.argument = a), (this.delegate = b)
							}
						})())
				},
				function (a, b, c) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 })
					var d = c(9),
						e = c(10),
						f = c(11),
						g = c(7),
						h = c(12),
						i = c(2),
						j = c(13),
						k = "ArrowParameterPlaceHolder"
					b.Parser = (function () {
						function a(a, b, c) {
							void 0 === b && (b = {}),
								(this.config = {
									range: "boolean" == typeof b.range && b.range,
									loc: "boolean" == typeof b.loc && b.loc,
									source: null,
									tokens: "boolean" == typeof b.tokens && b.tokens,
									comment: "boolean" == typeof b.comment && b.comment,
									tolerant: "boolean" == typeof b.tolerant && b.tolerant,
								}),
								this.config.loc &&
									b.source &&
									null !== b.source &&
									(this.config.source = String(b.source)),
								(this.delegate = c),
								(this.errorHandler = new e.ErrorHandler()),
								(this.errorHandler.tolerant = this.config.tolerant),
								(this.scanner = new h.Scanner(a, this.errorHandler)),
								(this.scanner.trackComment = this.config.comment),
								(this.operatorPrecedence = {
									")": 0,
									";": 0,
									",": 0,
									"=": 0,
									"]": 0,
									"||": 1,
									"&&": 2,
									"|": 3,
									"^": 4,
									"&": 5,
									"==": 6,
									"!=": 6,
									"===": 6,
									"!==": 6,
									"<": 7,
									">": 7,
									"<=": 7,
									">=": 7,
									"<<": 8,
									">>": 8,
									">>>": 8,
									"+": 9,
									"-": 9,
									"*": 11,
									"/": 11,
									"%": 11,
								}),
								(this.lookahead = {
									type: 2,
									value: "",
									lineNumber: this.scanner.lineNumber,
									lineStart: 0,
									start: 0,
									end: 0,
								}),
								(this.hasLineTerminator = !1),
								(this.context = {
									isModule: !1,
									await: !1,
									allowIn: !0,
									allowStrictDirective: !0,
									allowYield: !0,
									firstCoverInitializedNameError: null,
									isAssignmentTarget: !1,
									isBindingElement: !1,
									inFunctionBody: !1,
									inIteration: !1,
									inSwitch: !1,
									labelSet: {},
									strict: !1,
								}),
								(this.tokens = []),
								(this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }),
								(this.lastMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }),
								this.nextToken(),
								(this.lastMarker = {
									index: this.scanner.index,
									line: this.scanner.lineNumber,
									column: this.scanner.index - this.scanner.lineStart,
								})
						}
						return (
							(a.prototype.throwError = function (a) {
								for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
								var e = Array.prototype.slice.call(arguments, 1),
									f = a.replace(/%(\d)/g, function (a, b) {
										return d.assert(b < e.length, "Message reference must be in range"), e[b]
									}),
									g = this.lastMarker.index,
									h = this.lastMarker.line,
									i = this.lastMarker.column + 1
								throw this.errorHandler.createError(g, h, i, f)
							}),
							(a.prototype.tolerateError = function (a) {
								for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
								var e = Array.prototype.slice.call(arguments, 1),
									f = a.replace(/%(\d)/g, function (a, b) {
										return d.assert(b < e.length, "Message reference must be in range"), e[b]
									}),
									g = this.lastMarker.index,
									h = this.scanner.lineNumber,
									i = this.lastMarker.column + 1
								this.errorHandler.tolerateError(g, h, i, f)
							}),
							(a.prototype.unexpectedTokenError = function (a, b) {
								var c,
									d = b || f.Messages.UnexpectedToken
								if (
									(a
										? (!b &&
												((d =
													2 === a.type
														? f.Messages.UnexpectedEOS
														: 3 === a.type
															? f.Messages.UnexpectedIdentifier
															: 6 === a.type
																? f.Messages.UnexpectedNumber
																: 8 === a.type
																	? f.Messages.UnexpectedString
																	: 10 === a.type
																		? f.Messages.UnexpectedTemplate
																		: f.Messages.UnexpectedToken),
												4 === a.type &&
													(this.scanner.isFutureReservedWord(a.value)
														? (d = f.Messages.UnexpectedReserved)
														: this.context.strict &&
															this.scanner.isStrictModeReservedWord(a.value) &&
															(d = f.Messages.StrictReservedWord))),
											(c = a.value))
										: (c = "ILLEGAL"),
									(d = d.replace("%0", c)),
									a && "number" == typeof a.lineNumber)
								) {
									var e = a.start,
										g = a.lineNumber,
										h = this.lastMarker.index - this.lastMarker.column,
										i = a.start - h + 1
									return this.errorHandler.createError(e, g, i, d)
								}
								var e = this.lastMarker.index,
									g = this.lastMarker.line,
									i = this.lastMarker.column + 1
								return this.errorHandler.createError(e, g, i, d)
							}),
							(a.prototype.throwUnexpectedToken = function (a, b) {
								throw this.unexpectedTokenError(a, b)
							}),
							(a.prototype.tolerateUnexpectedToken = function (a, b) {
								this.errorHandler.tolerate(this.unexpectedTokenError(a, b))
							}),
							(a.prototype.collectComments = function () {
								if (this.config.comment) {
									var a = this.scanner.scanComments()
									if (a.length > 0 && this.delegate)
										for (var b = 0; b < a.length; ++b) {
											var c = a[b],
												d = void 0
											;(d = {
												type: c.multiLine ? "BlockComment" : "LineComment",
												value: this.scanner.source.slice(c.slice[0], c.slice[1]),
											}),
												this.config.range && (d.range = c.range),
												this.config.loc && (d.loc = c.loc)
											var e = {
												start: {
													line: c.loc.start.line,
													column: c.loc.start.column,
													offset: c.range[0],
												},
												end: {
													line: c.loc.end.line,
													column: c.loc.end.column,
													offset: c.range[1],
												},
											}
											this.delegate(d, e)
										}
								} else this.scanner.scanComments()
							}),
							(a.prototype.getTokenRaw = function (a) {
								return this.scanner.source.slice(a.start, a.end)
							}),
							(a.prototype.convertToken = function (a) {
								var b = { type: j.TokenName[a.type], value: this.getTokenRaw(a) }
								return (
									this.config.range && (b.range = [a.start, a.end]),
									this.config.loc &&
										(b.loc = {
											start: { line: this.startMarker.line, column: this.startMarker.column },
											end: {
												line: this.scanner.lineNumber,
												column: this.scanner.index - this.scanner.lineStart,
											},
										}),
									9 === a.type && (b.regex = { pattern: a.pattern, flags: a.flags }),
									b
								)
							}),
							(a.prototype.nextToken = function () {
								var a = this.lookahead
								;(this.lastMarker.index = this.scanner.index),
									(this.lastMarker.line = this.scanner.lineNumber),
									(this.lastMarker.column = this.scanner.index - this.scanner.lineStart),
									this.collectComments(),
									this.scanner.index !== this.startMarker.index &&
										((this.startMarker.index = this.scanner.index),
										(this.startMarker.line = this.scanner.lineNumber),
										(this.startMarker.column = this.scanner.index - this.scanner.lineStart))
								var b = this.scanner.lex()
								return (
									(this.hasLineTerminator = a.lineNumber !== b.lineNumber),
									b &&
										this.context.strict &&
										3 === b.type &&
										this.scanner.isStrictModeReservedWord(b.value) &&
										(b.type = 4),
									(this.lookahead = b),
									this.config.tokens && 2 !== b.type && this.tokens.push(this.convertToken(b)),
									a
								)
							}),
							(a.prototype.nextRegexToken = function () {
								this.collectComments()
								var a = this.scanner.scanRegExp()
								return (
									this.config.tokens && (this.tokens.pop(), this.tokens.push(this.convertToken(a))),
									(this.lookahead = a),
									this.nextToken(),
									a
								)
							}),
							(a.prototype.createNode = function () {
								return {
									index: this.startMarker.index,
									line: this.startMarker.line,
									column: this.startMarker.column,
								}
							}),
							(a.prototype.startNode = function (a, b) {
								void 0 === b && (b = 0)
								var c = a.start - a.lineStart,
									d = a.lineNumber
								return c < 0 && ((c += b), d--), { index: a.start, line: d, column: c }
							}),
							(a.prototype.finalize = function (a, b) {
								if (
									(this.config.range && (b.range = [a.index, this.lastMarker.index]),
									this.config.loc &&
										((b.loc = {
											start: { line: a.line, column: a.column },
											end: { line: this.lastMarker.line, column: this.lastMarker.column },
										}),
										this.config.source && (b.loc.source = this.config.source)),
									this.delegate)
								) {
									var c = {
										start: { line: a.line, column: a.column, offset: a.index },
										end: {
											line: this.lastMarker.line,
											column: this.lastMarker.column,
											offset: this.lastMarker.index,
										},
									}
									this.delegate(b, c)
								}
								return b
							}),
							(a.prototype.expect = function (a) {
								var b = this.nextToken()
								;(7 !== b.type || b.value !== a) && this.throwUnexpectedToken(b)
							}),
							(a.prototype.expectCommaSeparator = function () {
								if (this.config.tolerant) {
									var a = this.lookahead
									7 === a.type && "," === a.value
										? this.nextToken()
										: 7 === a.type && ";" === a.value
											? (this.nextToken(), this.tolerateUnexpectedToken(a))
											: this.tolerateUnexpectedToken(a, f.Messages.UnexpectedToken)
								} else this.expect(",")
							}),
							(a.prototype.expectKeyword = function (a) {
								var b = this.nextToken()
								;(4 !== b.type || b.value !== a) && this.throwUnexpectedToken(b)
							}),
							(a.prototype.match = function (a) {
								return 7 === this.lookahead.type && this.lookahead.value === a
							}),
							(a.prototype.matchKeyword = function (a) {
								return 4 === this.lookahead.type && this.lookahead.value === a
							}),
							(a.prototype.matchContextualKeyword = function (a) {
								return 3 === this.lookahead.type && this.lookahead.value === a
							}),
							(a.prototype.matchAssign = function () {
								if (7 !== this.lookahead.type) return !1
								var a = this.lookahead.value
								return (
									"=" === a ||
									"*=" === a ||
									"**=" === a ||
									"/=" === a ||
									"%=" === a ||
									"+=" === a ||
									"-=" === a ||
									"<<=" === a ||
									">>=" === a ||
									">>>=" === a ||
									"&=" === a ||
									"^=" === a ||
									"|=" === a
								)
							}),
							(a.prototype.isolateCoverGrammar = function (a) {
								var b = this.context.isBindingElement,
									c = this.context.isAssignmentTarget,
									d = this.context.firstCoverInitializedNameError
								;(this.context.isBindingElement = !0),
									(this.context.isAssignmentTarget = !0),
									(this.context.firstCoverInitializedNameError = null)
								var e = a.call(this)
								return (
									null !== this.context.firstCoverInitializedNameError &&
										this.throwUnexpectedToken(this.context.firstCoverInitializedNameError),
									(this.context.isBindingElement = b),
									(this.context.isAssignmentTarget = c),
									(this.context.firstCoverInitializedNameError = d),
									e
								)
							}),
							(a.prototype.inheritCoverGrammar = function (a) {
								var b = this.context.isBindingElement,
									c = this.context.isAssignmentTarget,
									d = this.context.firstCoverInitializedNameError
								;(this.context.isBindingElement = !0),
									(this.context.isAssignmentTarget = !0),
									(this.context.firstCoverInitializedNameError = null)
								var e = a.call(this)
								return (
									(this.context.isBindingElement = this.context.isBindingElement && b),
									(this.context.isAssignmentTarget = this.context.isAssignmentTarget && c),
									(this.context.firstCoverInitializedNameError =
										d || this.context.firstCoverInitializedNameError),
									e
								)
							}),
							(a.prototype.consumeSemicolon = function () {
								this.match(";")
									? this.nextToken()
									: this.hasLineTerminator ||
										(2 === this.lookahead.type ||
											this.match("}") ||
											this.throwUnexpectedToken(this.lookahead),
										(this.lastMarker.index = this.startMarker.index),
										(this.lastMarker.line = this.startMarker.line),
										(this.lastMarker.column = this.startMarker.column))
							}),
							(a.prototype.parsePrimaryExpression = function () {
								var a,
									b,
									c,
									d = this.createNode()
								switch (this.lookahead.type) {
									case 3:
										;(this.context.isModule || this.context.await) &&
											"await" === this.lookahead.value &&
											this.tolerateUnexpectedToken(this.lookahead),
											(a = this.matchAsyncFunction()
												? this.parseFunctionExpression()
												: this.finalize(d, new g.Identifier(this.nextToken().value)))
										break
									case 6:
									case 8:
										this.context.strict &&
											this.lookahead.octal &&
											this.tolerateUnexpectedToken(this.lookahead, f.Messages.StrictOctalLiteral),
											(this.context.isAssignmentTarget = !1),
											(this.context.isBindingElement = !1),
											(b = this.nextToken()),
											(c = this.getTokenRaw(b)),
											(a = this.finalize(d, new g.Literal(b.value, c)))
										break
									case 1:
										;(this.context.isAssignmentTarget = !1),
											(this.context.isBindingElement = !1),
											(b = this.nextToken()),
											(c = this.getTokenRaw(b)),
											(a = this.finalize(d, new g.Literal("true" === b.value, c)))
										break
									case 5:
										;(this.context.isAssignmentTarget = !1),
											(this.context.isBindingElement = !1),
											(b = this.nextToken()),
											(c = this.getTokenRaw(b)),
											(a = this.finalize(d, new g.Literal(null, c)))
										break
									case 10:
										a = this.parseTemplateLiteral()
										break
									case 7:
										switch (this.lookahead.value) {
											case "(":
												;(this.context.isBindingElement = !1),
													(a = this.inheritCoverGrammar(this.parseGroupExpression))
												break
											case "[":
												a = this.inheritCoverGrammar(this.parseArrayInitializer)
												break
											case "{":
												a = this.inheritCoverGrammar(this.parseObjectInitializer)
												break
											case "/":
											case "/=":
												;(this.context.isAssignmentTarget = !1),
													(this.context.isBindingElement = !1),
													(this.scanner.index = this.startMarker.index),
													(b = this.nextRegexToken()),
													(c = this.getTokenRaw(b)),
													(a = this.finalize(
														d,
														new g.RegexLiteral(b.regex, c, b.pattern, b.flags),
													))
												break
											default:
												a = this.throwUnexpectedToken(this.nextToken())
										}
										break
									case 4:
										!this.context.strict && this.context.allowYield && this.matchKeyword("yield")
											? (a = this.parseIdentifierName())
											: !this.context.strict && this.matchKeyword("let")
												? (a = this.finalize(d, new g.Identifier(this.nextToken().value)))
												: ((this.context.isAssignmentTarget = !1),
													(this.context.isBindingElement = !1),
													this.matchKeyword("function")
														? (a = this.parseFunctionExpression())
														: this.matchKeyword("this")
															? (this.nextToken(),
																(a = this.finalize(d, new g.ThisExpression())))
															: (a = this.matchKeyword("class")
																	? this.parseClassExpression()
																	: this.throwUnexpectedToken(this.nextToken())))
										break
									default:
										a = this.throwUnexpectedToken(this.nextToken())
								}
								return a
							}),
							(a.prototype.parseSpreadElement = function () {
								var a = this.createNode()
								this.expect("...")
								var b = this.inheritCoverGrammar(this.parseAssignmentExpression)
								return this.finalize(a, new g.SpreadElement(b))
							}),
							(a.prototype.parseArrayInitializer = function () {
								var a = this.createNode(),
									b = []
								for (this.expect("["); !this.match("]"); )
									if (this.match(",")) this.nextToken(), b.push(null)
									else if (this.match("...")) {
										var c = this.parseSpreadElement()
										this.match("]") ||
											((this.context.isAssignmentTarget = !1),
											(this.context.isBindingElement = !1),
											this.expect(",")),
											b.push(c)
									} else
										b.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),
											this.match("]") || this.expect(",")
								return this.expect("]"), this.finalize(a, new g.ArrayExpression(b))
							}),
							(a.prototype.parsePropertyMethod = function (a) {
								;(this.context.isAssignmentTarget = !1), (this.context.isBindingElement = !1)
								var b = this.context.strict,
									c = this.context.allowStrictDirective
								this.context.allowStrictDirective = a.simple
								var d = this.isolateCoverGrammar(this.parseFunctionSourceElements)
								return (
									this.context.strict &&
										a.firstRestricted &&
										this.tolerateUnexpectedToken(a.firstRestricted, a.message),
									this.context.strict &&
										a.stricted &&
										this.tolerateUnexpectedToken(a.stricted, a.message),
									(this.context.strict = b),
									(this.context.allowStrictDirective = c),
									d
								)
							}),
							(a.prototype.parsePropertyMethodFunction = function () {
								var a = !1,
									b = this.createNode(),
									c = this.context.allowYield
								this.context.allowYield = !0
								var d = this.parseFormalParameters(),
									e = this.parsePropertyMethod(d)
								return (
									(this.context.allowYield = c),
									this.finalize(b, new g.FunctionExpression(null, d.params, e, a))
								)
							}),
							(a.prototype.parsePropertyMethodAsyncFunction = function () {
								var a = this.createNode(),
									b = this.context.allowYield,
									c = this.context.await
								;(this.context.allowYield = !1), (this.context.await = !0)
								var d = this.parseFormalParameters(),
									e = this.parsePropertyMethod(d)
								return (
									(this.context.allowYield = b),
									(this.context.await = c),
									this.finalize(a, new g.AsyncFunctionExpression(null, d.params, e))
								)
							}),
							(a.prototype.parseObjectPropertyKey = function () {
								var a,
									b = this.createNode(),
									c = this.nextToken()
								switch (c.type) {
									case 8:
									case 6:
										this.context.strict &&
											c.octal &&
											this.tolerateUnexpectedToken(c, f.Messages.StrictOctalLiteral)
										var d = this.getTokenRaw(c)
										a = this.finalize(b, new g.Literal(c.value, d))
										break
									case 3:
									case 1:
									case 5:
									case 4:
										a = this.finalize(b, new g.Identifier(c.value))
										break
									case 7:
										"[" === c.value
											? ((a = this.isolateCoverGrammar(this.parseAssignmentExpression)),
												this.expect("]"))
											: (a = this.throwUnexpectedToken(c))
										break
									default:
										a = this.throwUnexpectedToken(c)
								}
								return a
							}),
							(a.prototype.isPropertyKey = function (a, b) {
								return (
									(a.type === i.Syntax.Identifier && a.name === b) ||
									(a.type === i.Syntax.Literal && a.value === b)
								)
							}),
							(a.prototype.parseObjectProperty = function (a) {
								var b,
									c = this.createNode(),
									d = this.lookahead,
									e = null,
									h = null,
									i = !1,
									j = !1,
									k = !1,
									l = !1
								if (3 === d.type) {
									var m = d.value
									this.nextToken(),
										(i = this.match("[")),
										(e = (l =
											!this.hasLineTerminator &&
											"async" === m &&
											!this.match(":") &&
											!this.match("(") &&
											!this.match("*") &&
											!this.match(","))
											? this.parseObjectPropertyKey()
											: this.finalize(c, new g.Identifier(m)))
								} else
									this.match("*")
										? this.nextToken()
										: ((i = this.match("[")), (e = this.parseObjectPropertyKey()))
								var n = this.qualifiedPropertyName(this.lookahead)
								if (3 === d.type && !l && "get" === d.value && n)
									(b = "get"),
										(i = this.match("[")),
										(e = this.parseObjectPropertyKey()),
										(this.context.allowYield = !1),
										(h = this.parseGetterMethod())
								else if (3 === d.type && !l && "set" === d.value && n)
									(b = "set"),
										(i = this.match("[")),
										(e = this.parseObjectPropertyKey()),
										(h = this.parseSetterMethod())
								else if (7 === d.type && "*" === d.value && n)
									(b = "init"),
										(i = this.match("[")),
										(e = this.parseObjectPropertyKey()),
										(h = this.parseGeneratorMethod()),
										(j = !0)
								else if (
									(e || this.throwUnexpectedToken(this.lookahead),
									(b = "init"),
									this.match(":") && !l)
								)
									!i &&
										this.isPropertyKey(e, "__proto__") &&
										(a.value && this.tolerateError(f.Messages.DuplicateProtoProperty),
										(a.value = !0)),
										this.nextToken(),
										(h = this.inheritCoverGrammar(this.parseAssignmentExpression))
								else if (this.match("("))
									(h = l
										? this.parsePropertyMethodAsyncFunction()
										: this.parsePropertyMethodFunction()),
										(j = !0)
								else if (3 === d.type) {
									var m = this.finalize(c, new g.Identifier(d.value))
									if (this.match("=")) {
										;(this.context.firstCoverInitializedNameError = this.lookahead),
											this.nextToken(),
											(k = !0)
										var o = this.isolateCoverGrammar(this.parseAssignmentExpression)
										h = this.finalize(c, new g.AssignmentPattern(m, o))
									} else (k = !0), (h = m)
								} else this.throwUnexpectedToken(this.nextToken())
								return this.finalize(c, new g.Property(b, e, i, h, j, k))
							}),
							(a.prototype.parseObjectInitializer = function () {
								var a = this.createNode()
								this.expect("{")
								for (var b = [], c = { value: !1 }; !this.match("}"); )
									b.push(this.parseObjectProperty(c)), this.match("}") || this.expectCommaSeparator()
								return this.expect("}"), this.finalize(a, new g.ObjectExpression(b))
							}),
							(a.prototype.parseTemplateHead = function () {
								d.assert(this.lookahead.head, "Template literal must start with a template head")
								var a = this.createNode(),
									b = this.nextToken(),
									c = b.value,
									e = b.cooked
								return this.finalize(a, new g.TemplateElement({ raw: c, cooked: e }, b.tail))
							}),
							(a.prototype.parseTemplateElement = function () {
								10 !== this.lookahead.type && this.throwUnexpectedToken()
								var a = this.createNode(),
									b = this.nextToken(),
									c = b.value,
									d = b.cooked
								return this.finalize(a, new g.TemplateElement({ raw: c, cooked: d }, b.tail))
							}),
							(a.prototype.parseTemplateLiteral = function () {
								var a = this.createNode(),
									b = [],
									c = [],
									d = this.parseTemplateHead()
								for (c.push(d); !d.tail; )
									b.push(this.parseExpression()), (d = this.parseTemplateElement()), c.push(d)
								return this.finalize(a, new g.TemplateLiteral(c, b))
							}),
							(a.prototype.reinterpretExpressionAsPattern = function (a) {
								switch (a.type) {
									case i.Syntax.Identifier:
									case i.Syntax.MemberExpression:
									case i.Syntax.RestElement:
									case i.Syntax.AssignmentPattern:
										break
									case i.Syntax.SpreadElement:
										;(a.type = i.Syntax.RestElement),
											this.reinterpretExpressionAsPattern(a.argument)
										break
									case i.Syntax.ArrayExpression:
										a.type = i.Syntax.ArrayPattern
										for (var b = 0; b < a.elements.length; b++)
											null !== a.elements[b] && this.reinterpretExpressionAsPattern(a.elements[b])
										break
									case i.Syntax.ObjectExpression:
										a.type = i.Syntax.ObjectPattern
										for (var b = 0; b < a.properties.length; b++)
											this.reinterpretExpressionAsPattern(a.properties[b].value)
										break
									case i.Syntax.AssignmentExpression:
										;(a.type = i.Syntax.AssignmentPattern),
											delete a.operator,
											this.reinterpretExpressionAsPattern(a.left)
								}
							}),
							(a.prototype.parseGroupExpression = function () {
								var a
								if ((this.expect("("), this.match(")")))
									this.nextToken(),
										this.match("=>") || this.expect("=>"),
										(a = { type: k, params: [], async: !1 })
								else {
									var b = this.lookahead,
										c = []
									if (this.match("..."))
										(a = this.parseRestElement(c)),
											this.expect(")"),
											this.match("=>") || this.expect("=>"),
											(a = { type: k, params: [a], async: !1 })
									else {
										var d = !1
										if (
											((this.context.isBindingElement = !0),
											(a = this.inheritCoverGrammar(this.parseAssignmentExpression)),
											this.match(","))
										) {
											var e = []
											for (
												this.context.isAssignmentTarget = !1, e.push(a);
												2 !== this.lookahead.type && this.match(",");

											) {
												if ((this.nextToken(), this.match(")"))) {
													this.nextToken()
													for (var f = 0; f < e.length; f++)
														this.reinterpretExpressionAsPattern(e[f])
													;(d = !0), (a = { type: k, params: e, async: !1 })
												} else if (this.match("...")) {
													this.context.isBindingElement ||
														this.throwUnexpectedToken(this.lookahead),
														e.push(this.parseRestElement(c)),
														this.expect(")"),
														this.match("=>") || this.expect("=>"),
														(this.context.isBindingElement = !1)
													for (var f = 0; f < e.length; f++)
														this.reinterpretExpressionAsPattern(e[f])
													;(d = !0), (a = { type: k, params: e, async: !1 })
												} else e.push(this.inheritCoverGrammar(this.parseAssignmentExpression))
												if (d) break
											}
											d || (a = this.finalize(this.startNode(b), new g.SequenceExpression(e)))
										}
										if (!d) {
											if (
												(this.expect(")"),
												this.match("=>") &&
													(a.type === i.Syntax.Identifier &&
														"yield" === a.name &&
														((d = !0), (a = { type: k, params: [a], async: !1 })),
													!d))
											) {
												if (
													(this.context.isBindingElement ||
														this.throwUnexpectedToken(this.lookahead),
													a.type === i.Syntax.SequenceExpression)
												)
													for (var f = 0; f < a.expressions.length; f++)
														this.reinterpretExpressionAsPattern(a.expressions[f])
												else this.reinterpretExpressionAsPattern(a)
												a = {
													type: k,
													params:
														a.type === i.Syntax.SequenceExpression ? a.expressions : [a],
													async: !1,
												}
											}
											this.context.isBindingElement = !1
										}
									}
								}
								return a
							}),
							(a.prototype.parseArguments = function () {
								this.expect("(")
								var a = []
								if (!this.match(")"))
									for (;;) {
										var b = this.match("...")
											? this.parseSpreadElement()
											: this.isolateCoverGrammar(this.parseAssignmentExpression)
										if (
											(a.push(b),
											this.match(")") || (this.expectCommaSeparator(), this.match(")")))
										)
											break
									}
								return this.expect(")"), a
							}),
							(a.prototype.isIdentifierName = function (a) {
								return 3 === a.type || 4 === a.type || 1 === a.type || 5 === a.type
							}),
							(a.prototype.parseIdentifierName = function () {
								var a = this.createNode(),
									b = this.nextToken()
								return (
									this.isIdentifierName(b) || this.throwUnexpectedToken(b),
									this.finalize(a, new g.Identifier(b.value))
								)
							}),
							(a.prototype.parseNewExpression = function () {
								var a,
									b = this.createNode(),
									c = this.parseIdentifierName()
								if (
									(d.assert("new" === c.name, "New expression must start with `new`"),
									this.match("."))
								)
									if (
										(this.nextToken(),
										3 === this.lookahead.type &&
											this.context.inFunctionBody &&
											"target" === this.lookahead.value)
									) {
										var e = this.parseIdentifierName()
										a = new g.MetaProperty(c, e)
									} else this.throwUnexpectedToken(this.lookahead)
								else {
									var f = this.isolateCoverGrammar(this.parseLeftHandSideExpression),
										h = this.match("(") ? this.parseArguments() : []
									;(a = new g.NewExpression(f, h)),
										(this.context.isAssignmentTarget = !1),
										(this.context.isBindingElement = !1)
								}
								return this.finalize(b, a)
							}),
							(a.prototype.parseAsyncArgument = function () {
								var a = this.parseAssignmentExpression()
								return (this.context.firstCoverInitializedNameError = null), a
							}),
							(a.prototype.parseAsyncArguments = function () {
								this.expect("(")
								var a = []
								if (!this.match(")"))
									for (;;) {
										var b = this.match("...")
											? this.parseSpreadElement()
											: this.isolateCoverGrammar(this.parseAsyncArgument)
										if (
											(a.push(b),
											this.match(")") || (this.expectCommaSeparator(), this.match(")")))
										)
											break
									}
								return this.expect(")"), a
							}),
							(a.prototype.parseLeftHandSideExpressionAllowCall = function () {
								var a,
									b = this.lookahead,
									c = this.matchContextualKeyword("async"),
									d = this.context.allowIn
								for (
									this.context.allowIn = !0,
										this.matchKeyword("super") && this.context.inFunctionBody
											? ((a = this.createNode()),
												this.nextToken(),
												(a = this.finalize(a, new g.Super())),
												this.match("(") ||
													this.match(".") ||
													this.match("[") ||
													this.throwUnexpectedToken(this.lookahead))
											: (a = this.inheritCoverGrammar(
													this.matchKeyword("new")
														? this.parseNewExpression
														: this.parsePrimaryExpression,
												));
									;

								)
									if (this.match(".")) {
										;(this.context.isBindingElement = !1),
											(this.context.isAssignmentTarget = !0),
											this.expect(".")
										var e = this.parseIdentifierName()
										a = this.finalize(this.startNode(b), new g.StaticMemberExpression(a, e))
									} else if (this.match("(")) {
										var f = c && b.lineNumber === this.lookahead.lineNumber
										;(this.context.isBindingElement = !1), (this.context.isAssignmentTarget = !1)
										var h = f ? this.parseAsyncArguments() : this.parseArguments()
										if (
											((a = this.finalize(this.startNode(b), new g.CallExpression(a, h))),
											f && this.match("=>"))
										) {
											for (var i = 0; i < h.length; ++i) this.reinterpretExpressionAsPattern(h[i])
											a = { type: k, params: h, async: !0 }
										}
									} else if (this.match("[")) {
										;(this.context.isBindingElement = !1),
											(this.context.isAssignmentTarget = !0),
											this.expect("[")
										var e = this.isolateCoverGrammar(this.parseExpression)
										this.expect("]"),
											(a = this.finalize(this.startNode(b), new g.ComputedMemberExpression(a, e)))
									} else if (10 === this.lookahead.type && this.lookahead.head) {
										var j = this.parseTemplateLiteral()
										a = this.finalize(this.startNode(b), new g.TaggedTemplateExpression(a, j))
									} else break
								return (this.context.allowIn = d), a
							}),
							(a.prototype.parseSuper = function () {
								var a = this.createNode()
								return (
									this.expectKeyword("super"),
									this.match("[") || this.match(".") || this.throwUnexpectedToken(this.lookahead),
									this.finalize(a, new g.Super())
								)
							}),
							(a.prototype.parseLeftHandSideExpression = function () {
								d.assert(this.context.allowIn, "callee of new expression always allow in keyword.")
								for (
									var a = this.startNode(this.lookahead),
										b =
											this.matchKeyword("super") && this.context.inFunctionBody
												? this.parseSuper()
												: this.inheritCoverGrammar(
														this.matchKeyword("new")
															? this.parseNewExpression
															: this.parsePrimaryExpression,
													);
									;

								)
									if (this.match("[")) {
										;(this.context.isBindingElement = !1),
											(this.context.isAssignmentTarget = !0),
											this.expect("[")
										var c = this.isolateCoverGrammar(this.parseExpression)
										this.expect("]"), (b = this.finalize(a, new g.ComputedMemberExpression(b, c)))
									} else if (this.match(".")) {
										;(this.context.isBindingElement = !1),
											(this.context.isAssignmentTarget = !0),
											this.expect(".")
										var c = this.parseIdentifierName()
										b = this.finalize(a, new g.StaticMemberExpression(b, c))
									} else if (10 === this.lookahead.type && this.lookahead.head) {
										var e = this.parseTemplateLiteral()
										b = this.finalize(a, new g.TaggedTemplateExpression(b, e))
									} else break
								return b
							}),
							(a.prototype.parseUpdateExpression = function () {
								var a,
									b = this.lookahead
								if (this.match("++") || this.match("--")) {
									var c = this.startNode(b),
										d = this.nextToken()
									;(a = this.inheritCoverGrammar(this.parseUnaryExpression)),
										this.context.strict &&
											a.type === i.Syntax.Identifier &&
											this.scanner.isRestrictedWord(a.name) &&
											this.tolerateError(f.Messages.StrictLHSPrefix),
										this.context.isAssignmentTarget ||
											this.tolerateError(f.Messages.InvalidLHSInAssignment)
									var e = !0
									;(a = this.finalize(c, new g.UpdateExpression(d.value, a, e))),
										(this.context.isAssignmentTarget = !1),
										(this.context.isBindingElement = !1)
								} else if (
									((a = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall)),
									!this.hasLineTerminator &&
										7 === this.lookahead.type &&
										(this.match("++") || this.match("--")))
								) {
									this.context.strict &&
										a.type === i.Syntax.Identifier &&
										this.scanner.isRestrictedWord(a.name) &&
										this.tolerateError(f.Messages.StrictLHSPostfix),
										this.context.isAssignmentTarget ||
											this.tolerateError(f.Messages.InvalidLHSInAssignment),
										(this.context.isAssignmentTarget = !1),
										(this.context.isBindingElement = !1)
									var h = this.nextToken().value,
										e = !1
									a = this.finalize(this.startNode(b), new g.UpdateExpression(h, a, e))
								}
								return a
							}),
							(a.prototype.parseAwaitExpression = function () {
								var a = this.createNode()
								this.nextToken()
								var b = this.parseUnaryExpression()
								return this.finalize(a, new g.AwaitExpression(b))
							}),
							(a.prototype.parseUnaryExpression = function () {
								var a
								if (
									this.match("+") ||
									this.match("-") ||
									this.match("~") ||
									this.match("!") ||
									this.matchKeyword("delete") ||
									this.matchKeyword("void") ||
									this.matchKeyword("typeof")
								) {
									var b = this.startNode(this.lookahead),
										c = this.nextToken()
									;(a = this.inheritCoverGrammar(this.parseUnaryExpression)),
										(a = this.finalize(b, new g.UnaryExpression(c.value, a))),
										this.context.strict &&
											"delete" === a.operator &&
											a.argument.type === i.Syntax.Identifier &&
											this.tolerateError(f.Messages.StrictDelete),
										(this.context.isAssignmentTarget = !1),
										(this.context.isBindingElement = !1)
								} else
									a =
										this.context.await && this.matchContextualKeyword("await")
											? this.parseAwaitExpression()
											: this.parseUpdateExpression()
								return a
							}),
							(a.prototype.parseExponentiationExpression = function () {
								var a = this.lookahead,
									b = this.inheritCoverGrammar(this.parseUnaryExpression)
								if (b.type !== i.Syntax.UnaryExpression && this.match("**")) {
									this.nextToken(),
										(this.context.isAssignmentTarget = !1),
										(this.context.isBindingElement = !1)
									var c = b,
										d = this.isolateCoverGrammar(this.parseExponentiationExpression)
									b = this.finalize(this.startNode(a), new g.BinaryExpression("**", c, d))
								}
								return b
							}),
							(a.prototype.binaryPrecedence = function (a) {
								var b = a.value
								return 7 === a.type
									? this.operatorPrecedence[b] || 0
									: 4 === a.type && ("instanceof" === b || (this.context.allowIn && "in" === b))
										? 7
										: 0
							}),
							(a.prototype.parseBinaryExpression = function () {
								var a = this.lookahead,
									b = this.inheritCoverGrammar(this.parseExponentiationExpression),
									c = this.lookahead,
									d = this.binaryPrecedence(c)
								if (d > 0) {
									this.nextToken(),
										(this.context.isAssignmentTarget = !1),
										(this.context.isBindingElement = !1)
									for (
										var e = [a, this.lookahead],
											f = b,
											h = this.isolateCoverGrammar(this.parseExponentiationExpression),
											i = [f, c.value, h],
											j = [d];
										!((d = this.binaryPrecedence(this.lookahead)) <= 0);

									) {
										for (; i.length > 2 && d <= j[j.length - 1]; ) {
											h = i.pop()
											var k = i.pop()
											j.pop(), (f = i.pop()), e.pop()
											var l = this.startNode(e[e.length - 1])
											i.push(this.finalize(l, new g.BinaryExpression(k, f, h)))
										}
										i.push(this.nextToken().value),
											j.push(d),
											e.push(this.lookahead),
											i.push(this.isolateCoverGrammar(this.parseExponentiationExpression))
									}
									var m = i.length - 1
									b = i[m]
									for (var n = e.pop(); m > 1; ) {
										var o = e.pop(),
											p = n && n.lineStart,
											l = this.startNode(o, p),
											k = i[m - 1]
										;(b = this.finalize(l, new g.BinaryExpression(k, i[m - 2], b))),
											(m -= 2),
											(n = o)
									}
								}
								return b
							}),
							(a.prototype.parseConditionalExpression = function () {
								var a = this.lookahead,
									b = this.inheritCoverGrammar(this.parseBinaryExpression)
								if (this.match("?")) {
									this.nextToken()
									var c = this.context.allowIn
									this.context.allowIn = !0
									var d = this.isolateCoverGrammar(this.parseAssignmentExpression)
									;(this.context.allowIn = c), this.expect(":")
									var e = this.isolateCoverGrammar(this.parseAssignmentExpression)
									;(b = this.finalize(this.startNode(a), new g.ConditionalExpression(b, d, e))),
										(this.context.isAssignmentTarget = !1),
										(this.context.isBindingElement = !1)
								}
								return b
							}),
							(a.prototype.checkPatternParam = function (a, b) {
								switch (b.type) {
									case i.Syntax.Identifier:
										this.validateParam(a, b, b.name)
										break
									case i.Syntax.RestElement:
										this.checkPatternParam(a, b.argument)
										break
									case i.Syntax.AssignmentPattern:
										this.checkPatternParam(a, b.left)
										break
									case i.Syntax.ArrayPattern:
										for (var c = 0; c < b.elements.length; c++)
											null !== b.elements[c] && this.checkPatternParam(a, b.elements[c])
										break
									case i.Syntax.ObjectPattern:
										for (var c = 0; c < b.properties.length; c++)
											this.checkPatternParam(a, b.properties[c].value)
								}
								a.simple = a.simple && b instanceof g.Identifier
							}),
							(a.prototype.reinterpretAsCoverFormalsList = function (a) {
								var b,
									c = [a],
									d = !1
								switch (a.type) {
									case i.Syntax.Identifier:
										break
									case k:
										;(c = a.params), (d = a.async)
										break
									default:
										return null
								}
								b = { simple: !0, paramSet: {} }
								for (var e = 0; e < c.length; ++e) {
									var g = c[e]
									g.type === i.Syntax.AssignmentPattern
										? g.right.type === i.Syntax.YieldExpression &&
											(g.right.argument && this.throwUnexpectedToken(this.lookahead),
											(g.right.type = i.Syntax.Identifier),
											(g.right.name = "yield"),
											delete g.right.argument,
											delete g.right.delegate)
										: d &&
											g.type === i.Syntax.Identifier &&
											"await" === g.name &&
											this.throwUnexpectedToken(this.lookahead),
										this.checkPatternParam(b, g),
										(c[e] = g)
								}
								if (this.context.strict || !this.context.allowYield)
									for (var e = 0; e < c.length; ++e) {
										var g = c[e]
										g.type === i.Syntax.YieldExpression && this.throwUnexpectedToken(this.lookahead)
									}
								if (b.message === f.Messages.StrictParamDupe) {
									var h = this.context.strict ? b.stricted : b.firstRestricted
									this.throwUnexpectedToken(h, b.message)
								}
								return {
									simple: b.simple,
									params: c,
									stricted: b.stricted,
									firstRestricted: b.firstRestricted,
									message: b.message,
								}
							}),
							(a.prototype.parseAssignmentExpression = function () {
								var a
								if (!this.context.allowYield && this.matchKeyword("yield"))
									a = this.parseYieldExpression()
								else {
									var b = this.lookahead,
										c = b
									if (
										((a = this.parseConditionalExpression()),
										3 === c.type &&
											c.lineNumber === this.lookahead.lineNumber &&
											"async" === c.value &&
											(3 === this.lookahead.type || this.matchKeyword("yield")))
									) {
										var d = this.parsePrimaryExpression()
										this.reinterpretExpressionAsPattern(d),
											(a = { type: k, params: [d], async: !0 })
									}
									if (a.type === k || this.match("=>")) {
										;(this.context.isAssignmentTarget = !1), (this.context.isBindingElement = !1)
										var e = a.async,
											h = this.reinterpretAsCoverFormalsList(a)
										if (h) {
											this.hasLineTerminator && this.tolerateUnexpectedToken(this.lookahead),
												(this.context.firstCoverInitializedNameError = null)
											var j = this.context.strict,
												l = this.context.allowStrictDirective
											this.context.allowStrictDirective = h.simple
											var m = this.context.allowYield,
												n = this.context.await
											;(this.context.allowYield = !0), (this.context.await = e)
											var o = this.startNode(b)
											this.expect("=>")
											var p = void 0
											if (this.match("{")) {
												var q = this.context.allowIn
												;(this.context.allowIn = !0),
													(p = this.parseFunctionSourceElements()),
													(this.context.allowIn = q)
											} else p = this.isolateCoverGrammar(this.parseAssignmentExpression)
											var r = p.type !== i.Syntax.BlockStatement
											this.context.strict &&
												h.firstRestricted &&
												this.throwUnexpectedToken(h.firstRestricted, h.message),
												this.context.strict &&
													h.stricted &&
													this.tolerateUnexpectedToken(h.stricted, h.message),
												(a = e
													? this.finalize(
															o,
															new g.AsyncArrowFunctionExpression(h.params, p, r),
														)
													: this.finalize(o, new g.ArrowFunctionExpression(h.params, p, r))),
												(this.context.strict = j),
												(this.context.allowStrictDirective = l),
												(this.context.allowYield = m),
												(this.context.await = n)
										}
									} else if (this.matchAssign()) {
										if (
											(this.context.isAssignmentTarget ||
												this.tolerateError(f.Messages.InvalidLHSInAssignment),
											this.context.strict && a.type === i.Syntax.Identifier)
										) {
											var s = a
											this.scanner.isRestrictedWord(s.name) &&
												this.tolerateUnexpectedToken(c, f.Messages.StrictLHSAssignment),
												this.scanner.isStrictModeReservedWord(s.name) &&
													this.tolerateUnexpectedToken(c, f.Messages.StrictReservedWord)
										}
										this.match("=")
											? this.reinterpretExpressionAsPattern(a)
											: ((this.context.isAssignmentTarget = !1),
												(this.context.isBindingElement = !1))
										var t = (c = this.nextToken()).value,
											u = this.isolateCoverGrammar(this.parseAssignmentExpression)
										;(a = this.finalize(this.startNode(b), new g.AssignmentExpression(t, a, u))),
											(this.context.firstCoverInitializedNameError = null)
									}
								}
								return a
							}),
							(a.prototype.parseExpression = function () {
								var a = this.lookahead,
									b = this.isolateCoverGrammar(this.parseAssignmentExpression)
								if (this.match(",")) {
									var c = []
									for (c.push(b); 2 !== this.lookahead.type && this.match(","); )
										this.nextToken(),
											c.push(this.isolateCoverGrammar(this.parseAssignmentExpression))
									b = this.finalize(this.startNode(a), new g.SequenceExpression(c))
								}
								return b
							}),
							(a.prototype.parseStatementListItem = function () {
								var a
								if (
									((this.context.isAssignmentTarget = !0),
									(this.context.isBindingElement = !0),
									4 === this.lookahead.type)
								)
									switch (this.lookahead.value) {
										case "export":
											this.context.isModule ||
												this.tolerateUnexpectedToken(
													this.lookahead,
													f.Messages.IllegalExportDeclaration,
												),
												(a = this.parseExportDeclaration())
											break
										case "import":
											this.context.isModule ||
												this.tolerateUnexpectedToken(
													this.lookahead,
													f.Messages.IllegalImportDeclaration,
												),
												(a = this.parseImportDeclaration())
											break
										case "const":
											a = this.parseLexicalDeclaration({ inFor: !1 })
											break
										case "function":
											a = this.parseFunctionDeclaration()
											break
										case "class":
											a = this.parseClassDeclaration()
											break
										case "let":
											a = this.isLexicalDeclaration()
												? this.parseLexicalDeclaration({ inFor: !1 })
												: this.parseStatement()
											break
										default:
											a = this.parseStatement()
									}
								else a = this.parseStatement()
								return a
							}),
							(a.prototype.parseBlock = function () {
								var a = this.createNode()
								this.expect("{")
								for (var b = []; !this.match("}"); ) b.push(this.parseStatementListItem())
								return this.expect("}"), this.finalize(a, new g.BlockStatement(b))
							}),
							(a.prototype.parseLexicalBinding = function (a, b) {
								var c = this.createNode(),
									d = [],
									e = this.parsePattern(d, a)
								this.context.strict &&
									e.type === i.Syntax.Identifier &&
									this.scanner.isRestrictedWord(e.name) &&
									this.tolerateError(f.Messages.StrictVarName)
								var h = null
								return (
									"const" === a
										? this.matchKeyword("in") ||
											this.matchContextualKeyword("of") ||
											(this.match("=")
												? (this.nextToken(),
													(h = this.isolateCoverGrammar(this.parseAssignmentExpression)))
												: this.throwError(f.Messages.DeclarationMissingInitializer, "const"))
										: ((!b.inFor && e.type !== i.Syntax.Identifier) || this.match("=")) &&
											(this.expect("="),
											(h = this.isolateCoverGrammar(this.parseAssignmentExpression))),
									this.finalize(c, new g.VariableDeclarator(e, h))
								)
							}),
							(a.prototype.parseBindingList = function (a, b) {
								for (var c = [this.parseLexicalBinding(a, b)]; this.match(","); )
									this.nextToken(), c.push(this.parseLexicalBinding(a, b))
								return c
							}),
							(a.prototype.isLexicalDeclaration = function () {
								var a = this.scanner.saveState()
								this.scanner.scanComments()
								var b = this.scanner.lex()
								return (
									this.scanner.restoreState(a),
									3 === b.type ||
										(7 === b.type && "[" === b.value) ||
										(7 === b.type && "{" === b.value) ||
										(4 === b.type && "let" === b.value) ||
										(4 === b.type && "yield" === b.value)
								)
							}),
							(a.prototype.parseLexicalDeclaration = function (a) {
								var b = this.createNode(),
									c = this.nextToken().value
								d.assert(
									"let" === c || "const" === c,
									"Lexical declaration must be either let or const",
								)
								var e = this.parseBindingList(c, a)
								return this.consumeSemicolon(), this.finalize(b, new g.VariableDeclaration(e, c))
							}),
							(a.prototype.parseBindingRestElement = function (a, b) {
								var c = this.createNode()
								this.expect("...")
								var d = this.parsePattern(a, b)
								return this.finalize(c, new g.RestElement(d))
							}),
							(a.prototype.parseArrayPattern = function (a, b) {
								var c = this.createNode()
								this.expect("[")
								for (var d = []; !this.match("]"); )
									if (this.match(",")) this.nextToken(), d.push(null)
									else {
										if (this.match("...")) {
											d.push(this.parseBindingRestElement(a, b))
											break
										}
										d.push(this.parsePatternWithDefault(a, b)), this.match("]") || this.expect(",")
									}
								return this.expect("]"), this.finalize(c, new g.ArrayPattern(d))
							}),
							(a.prototype.parsePropertyPattern = function (a, b) {
								var c,
									d,
									e = this.createNode(),
									f = !1,
									h = !1,
									i = !1
								if (3 === this.lookahead.type) {
									var j = this.lookahead
									c = this.parseVariableIdentifier()
									var k = this.finalize(e, new g.Identifier(j.value))
									if (this.match("=")) {
										a.push(j), (h = !0), this.nextToken()
										var l = this.parseAssignmentExpression()
										d = this.finalize(this.startNode(j), new g.AssignmentPattern(k, l))
									} else
										this.match(":")
											? (this.expect(":"), (d = this.parsePatternWithDefault(a, b)))
											: (a.push(j), (h = !0), (d = k))
								} else
									(f = this.match("[")),
										(c = this.parseObjectPropertyKey()),
										this.expect(":"),
										(d = this.parsePatternWithDefault(a, b))
								return this.finalize(e, new g.Property("init", c, f, d, i, h))
							}),
							(a.prototype.parseObjectPattern = function (a, b) {
								var c = this.createNode(),
									d = []
								for (this.expect("{"); !this.match("}"); )
									d.push(this.parsePropertyPattern(a, b)), this.match("}") || this.expect(",")
								return this.expect("}"), this.finalize(c, new g.ObjectPattern(d))
							}),
							(a.prototype.parsePattern = function (a, b) {
								var c
								return (
									this.match("[")
										? (c = this.parseArrayPattern(a, b))
										: this.match("{")
											? (c = this.parseObjectPattern(a, b))
											: (this.matchKeyword("let") &&
													("const" === b || "let" === b) &&
													this.tolerateUnexpectedToken(
														this.lookahead,
														f.Messages.LetInLexicalBinding,
													),
												a.push(this.lookahead),
												(c = this.parseVariableIdentifier(b))),
									c
								)
							}),
							(a.prototype.parsePatternWithDefault = function (a, b) {
								var c = this.lookahead,
									d = this.parsePattern(a, b)
								if (this.match("=")) {
									this.nextToken()
									var e = this.context.allowYield
									this.context.allowYield = !0
									var f = this.isolateCoverGrammar(this.parseAssignmentExpression)
									;(this.context.allowYield = e),
										(d = this.finalize(this.startNode(c), new g.AssignmentPattern(d, f)))
								}
								return d
							}),
							(a.prototype.parseVariableIdentifier = function (a) {
								var b = this.createNode(),
									c = this.nextToken()
								return (
									4 === c.type && "yield" === c.value
										? this.context.strict
											? this.tolerateUnexpectedToken(c, f.Messages.StrictReservedWord)
											: this.context.allowYield || this.throwUnexpectedToken(c)
										: 3 !== c.type
											? this.context.strict &&
												4 === c.type &&
												this.scanner.isStrictModeReservedWord(c.value)
												? this.tolerateUnexpectedToken(c, f.Messages.StrictReservedWord)
												: (this.context.strict || "let" !== c.value || "var" !== a) &&
													this.throwUnexpectedToken(c)
											: (this.context.isModule || this.context.await) &&
												3 === c.type &&
												"await" === c.value &&
												this.tolerateUnexpectedToken(c),
									this.finalize(b, new g.Identifier(c.value))
								)
							}),
							(a.prototype.parseVariableDeclaration = function (a) {
								var b = this.createNode(),
									c = [],
									d = this.parsePattern(c, "var")
								this.context.strict &&
									d.type === i.Syntax.Identifier &&
									this.scanner.isRestrictedWord(d.name) &&
									this.tolerateError(f.Messages.StrictVarName)
								var e = null
								return (
									this.match("=")
										? (this.nextToken(),
											(e = this.isolateCoverGrammar(this.parseAssignmentExpression)))
										: d.type === i.Syntax.Identifier || a.inFor || this.expect("="),
									this.finalize(b, new g.VariableDeclarator(d, e))
								)
							}),
							(a.prototype.parseVariableDeclarationList = function (a) {
								var b = { inFor: a.inFor },
									c = []
								for (c.push(this.parseVariableDeclaration(b)); this.match(","); )
									this.nextToken(), c.push(this.parseVariableDeclaration(b))
								return c
							}),
							(a.prototype.parseVariableStatement = function () {
								var a = this.createNode()
								this.expectKeyword("var")
								var b = this.parseVariableDeclarationList({ inFor: !1 })
								return this.consumeSemicolon(), this.finalize(a, new g.VariableDeclaration(b, "var"))
							}),
							(a.prototype.parseEmptyStatement = function () {
								var a = this.createNode()
								return this.expect(";"), this.finalize(a, new g.EmptyStatement())
							}),
							(a.prototype.parseExpressionStatement = function () {
								var a = this.createNode(),
									b = this.parseExpression()
								return this.consumeSemicolon(), this.finalize(a, new g.ExpressionStatement(b))
							}),
							(a.prototype.parseIfClause = function () {
								return (
									this.context.strict &&
										this.matchKeyword("function") &&
										this.tolerateError(f.Messages.StrictFunction),
									this.parseStatement()
								)
							}),
							(a.prototype.parseIfStatement = function () {
								var a,
									b = this.createNode(),
									c = null
								this.expectKeyword("if"), this.expect("(")
								var d = this.parseExpression()
								return (
									!this.match(")") && this.config.tolerant
										? (this.tolerateUnexpectedToken(this.nextToken()),
											(a = this.finalize(this.createNode(), new g.EmptyStatement())))
										: (this.expect(")"),
											(a = this.parseIfClause()),
											this.matchKeyword("else") &&
												(this.nextToken(), (c = this.parseIfClause()))),
									this.finalize(b, new g.IfStatement(d, a, c))
								)
							}),
							(a.prototype.parseDoWhileStatement = function () {
								var a = this.createNode()
								this.expectKeyword("do")
								var b = this.context.inIteration
								this.context.inIteration = !0
								var c = this.parseStatement()
								;(this.context.inIteration = b), this.expectKeyword("while"), this.expect("(")
								var d = this.parseExpression()
								return (
									!this.match(")") && this.config.tolerant
										? this.tolerateUnexpectedToken(this.nextToken())
										: (this.expect(")"), this.match(";") && this.nextToken()),
									this.finalize(a, new g.DoWhileStatement(c, d))
								)
							}),
							(a.prototype.parseWhileStatement = function () {
								var a,
									b = this.createNode()
								this.expectKeyword("while"), this.expect("(")
								var c = this.parseExpression()
								if (!this.match(")") && this.config.tolerant)
									this.tolerateUnexpectedToken(this.nextToken()),
										(a = this.finalize(this.createNode(), new g.EmptyStatement()))
								else {
									this.expect(")")
									var d = this.context.inIteration
									;(this.context.inIteration = !0),
										(a = this.parseStatement()),
										(this.context.inIteration = d)
								}
								return this.finalize(b, new g.WhileStatement(c, a))
							}),
							(a.prototype.parseForStatement = function () {
								var a,
									b,
									c,
									d = null,
									e = null,
									h = null,
									j = !0,
									k = this.createNode()
								if ((this.expectKeyword("for"), this.expect("("), this.match(";"))) this.nextToken()
								else if (this.matchKeyword("var")) {
									;(d = this.createNode()), this.nextToken()
									var l = this.context.allowIn
									this.context.allowIn = !1
									var m = this.parseVariableDeclarationList({ inFor: !0 })
									if (((this.context.allowIn = l), 1 === m.length && this.matchKeyword("in"))) {
										var n = m[0]
										n.init &&
											(n.id.type === i.Syntax.ArrayPattern ||
												n.id.type === i.Syntax.ObjectPattern ||
												this.context.strict) &&
											this.tolerateError(f.Messages.ForInOfLoopInitializer, "for-in"),
											(d = this.finalize(d, new g.VariableDeclaration(m, "var"))),
											this.nextToken(),
											(a = d),
											(b = this.parseExpression()),
											(d = null)
									} else
										1 === m.length && null === m[0].init && this.matchContextualKeyword("of")
											? ((d = this.finalize(d, new g.VariableDeclaration(m, "var"))),
												this.nextToken(),
												(a = d),
												(b = this.parseAssignmentExpression()),
												(d = null),
												(j = !1))
											: ((d = this.finalize(d, new g.VariableDeclaration(m, "var"))),
												this.expect(";"))
								} else if (this.matchKeyword("const") || this.matchKeyword("let")) {
									d = this.createNode()
									var o = this.nextToken().value
									if (this.context.strict || "in" !== this.lookahead.value) {
										var l = this.context.allowIn
										this.context.allowIn = !1
										var m = this.parseBindingList(o, { inFor: !0 })
										;(this.context.allowIn = l),
											1 === m.length && null === m[0].init && this.matchKeyword("in")
												? ((d = this.finalize(d, new g.VariableDeclaration(m, o))),
													this.nextToken(),
													(a = d),
													(b = this.parseExpression()),
													(d = null))
												: 1 === m.length &&
													  null === m[0].init &&
													  this.matchContextualKeyword("of")
													? ((d = this.finalize(d, new g.VariableDeclaration(m, o))),
														this.nextToken(),
														(a = d),
														(b = this.parseAssignmentExpression()),
														(d = null),
														(j = !1))
													: (this.consumeSemicolon(),
														(d = this.finalize(d, new g.VariableDeclaration(m, o))))
									} else
										(d = this.finalize(d, new g.Identifier(o))),
											this.nextToken(),
											(a = d),
											(b = this.parseExpression()),
											(d = null)
								} else {
									var p = this.lookahead,
										l = this.context.allowIn
									if (
										((this.context.allowIn = !1),
										(d = this.inheritCoverGrammar(this.parseAssignmentExpression)),
										(this.context.allowIn = l),
										this.matchKeyword("in"))
									)
										(this.context.isAssignmentTarget && d.type !== i.Syntax.AssignmentExpression) ||
											this.tolerateError(f.Messages.InvalidLHSInForIn),
											this.nextToken(),
											this.reinterpretExpressionAsPattern(d),
											(a = d),
											(b = this.parseExpression()),
											(d = null)
									else if (this.matchContextualKeyword("of"))
										(this.context.isAssignmentTarget && d.type !== i.Syntax.AssignmentExpression) ||
											this.tolerateError(f.Messages.InvalidLHSInForLoop),
											this.nextToken(),
											this.reinterpretExpressionAsPattern(d),
											(a = d),
											(b = this.parseAssignmentExpression()),
											(d = null),
											(j = !1)
									else {
										if (this.match(",")) {
											for (var q = [d]; this.match(","); )
												this.nextToken(),
													q.push(this.isolateCoverGrammar(this.parseAssignmentExpression))
											d = this.finalize(this.startNode(p), new g.SequenceExpression(q))
										}
										this.expect(";")
									}
								}
								if (
									(void 0 === a &&
										(this.match(";") || (e = this.parseExpression()),
										this.expect(";"),
										this.match(")") || (h = this.parseExpression())),
									!this.match(")") && this.config.tolerant)
								)
									this.tolerateUnexpectedToken(this.nextToken()),
										(c = this.finalize(this.createNode(), new g.EmptyStatement()))
								else {
									this.expect(")")
									var r = this.context.inIteration
									;(this.context.inIteration = !0),
										(c = this.isolateCoverGrammar(this.parseStatement)),
										(this.context.inIteration = r)
								}
								return void 0 === a
									? this.finalize(k, new g.ForStatement(d, e, h, c))
									: j
										? this.finalize(k, new g.ForInStatement(a, b, c))
										: this.finalize(k, new g.ForOfStatement(a, b, c))
							}),
							(a.prototype.parseContinueStatement = function () {
								var a = this.createNode()
								this.expectKeyword("continue")
								var b = null
								if (3 === this.lookahead.type && !this.hasLineTerminator) {
									var c = this.parseVariableIdentifier()
									b = c
									var d = "$" + c.name
									Object.prototype.hasOwnProperty.call(this.context.labelSet, d) ||
										this.throwError(f.Messages.UnknownLabel, c.name)
								}
								return (
									this.consumeSemicolon(),
									null !== b ||
										this.context.inIteration ||
										this.throwError(f.Messages.IllegalContinue),
									this.finalize(a, new g.ContinueStatement(b))
								)
							}),
							(a.prototype.parseBreakStatement = function () {
								var a = this.createNode()
								this.expectKeyword("break")
								var b = null
								if (3 === this.lookahead.type && !this.hasLineTerminator) {
									var c = this.parseVariableIdentifier(),
										d = "$" + c.name
									Object.prototype.hasOwnProperty.call(this.context.labelSet, d) ||
										this.throwError(f.Messages.UnknownLabel, c.name),
										(b = c)
								}
								return (
									this.consumeSemicolon(),
									null !== b ||
										this.context.inIteration ||
										this.context.inSwitch ||
										this.throwError(f.Messages.IllegalBreak),
									this.finalize(a, new g.BreakStatement(b))
								)
							}),
							(a.prototype.parseReturnStatement = function () {
								this.context.inFunctionBody || this.tolerateError(f.Messages.IllegalReturn)
								var a = this.createNode()
								this.expectKeyword("return")
								var b =
									(this.match(";") ||
										this.match("}") ||
										this.hasLineTerminator ||
										2 === this.lookahead.type) &&
									8 !== this.lookahead.type &&
									10 !== this.lookahead.type
										? null
										: this.parseExpression()
								return this.consumeSemicolon(), this.finalize(a, new g.ReturnStatement(b))
							}),
							(a.prototype.parseWithStatement = function () {
								this.context.strict && this.tolerateError(f.Messages.StrictModeWith)
								var a,
									b = this.createNode()
								this.expectKeyword("with"), this.expect("(")
								var c = this.parseExpression()
								return (
									!this.match(")") && this.config.tolerant
										? (this.tolerateUnexpectedToken(this.nextToken()),
											(a = this.finalize(this.createNode(), new g.EmptyStatement())))
										: (this.expect(")"), (a = this.parseStatement())),
									this.finalize(b, new g.WithStatement(c, a))
								)
							}),
							(a.prototype.parseSwitchCase = function () {
								var a,
									b = this.createNode()
								this.matchKeyword("default")
									? (this.nextToken(), (a = null))
									: (this.expectKeyword("case"), (a = this.parseExpression())),
									this.expect(":")
								for (
									var c = [];
									!(this.match("}") || this.matchKeyword("default") || this.matchKeyword("case"));

								)
									c.push(this.parseStatementListItem())
								return this.finalize(b, new g.SwitchCase(a, c))
							}),
							(a.prototype.parseSwitchStatement = function () {
								var a = this.createNode()
								this.expectKeyword("switch"), this.expect("(")
								var b = this.parseExpression()
								this.expect(")")
								var c = this.context.inSwitch
								this.context.inSwitch = !0
								var d = [],
									e = !1
								for (this.expect("{"); !this.match("}"); ) {
									var h = this.parseSwitchCase()
									null === h.test &&
										(e && this.throwError(f.Messages.MultipleDefaultsInSwitch), (e = !0)),
										d.push(h)
								}
								return (
									this.expect("}"),
									(this.context.inSwitch = c),
									this.finalize(a, new g.SwitchStatement(b, d))
								)
							}),
							(a.prototype.parseLabelledStatement = function () {
								var a,
									b = this.createNode(),
									c = this.parseExpression()
								if (c.type === i.Syntax.Identifier && this.match(":")) {
									this.nextToken()
									var d = c,
										e = "$" + d.name
									Object.prototype.hasOwnProperty.call(this.context.labelSet, e) &&
										this.throwError(f.Messages.Redeclaration, "Label", d.name),
										(this.context.labelSet[e] = !0)
									var h = void 0
									if (this.matchKeyword("class"))
										this.tolerateUnexpectedToken(this.lookahead), (h = this.parseClassDeclaration())
									else if (this.matchKeyword("function")) {
										var j = this.lookahead,
											k = this.parseFunctionDeclaration()
										this.context.strict
											? this.tolerateUnexpectedToken(j, f.Messages.StrictFunction)
											: k.generator &&
												this.tolerateUnexpectedToken(j, f.Messages.GeneratorInLegacyContext),
											(h = k)
									} else h = this.parseStatement()
									delete this.context.labelSet[e], (a = new g.LabeledStatement(d, h))
								} else this.consumeSemicolon(), (a = new g.ExpressionStatement(c))
								return this.finalize(b, a)
							}),
							(a.prototype.parseThrowStatement = function () {
								var a = this.createNode()
								this.expectKeyword("throw"),
									this.hasLineTerminator && this.throwError(f.Messages.NewlineAfterThrow)
								var b = this.parseExpression()
								return this.consumeSemicolon(), this.finalize(a, new g.ThrowStatement(b))
							}),
							(a.prototype.parseCatchClause = function () {
								var a = this.createNode()
								this.expectKeyword("catch"),
									this.expect("("),
									this.match(")") && this.throwUnexpectedToken(this.lookahead)
								for (var b = [], c = this.parsePattern(b), d = {}, e = 0; e < b.length; e++) {
									var h = "$" + b[e].value
									Object.prototype.hasOwnProperty.call(d, h) &&
										this.tolerateError(f.Messages.DuplicateBinding, b[e].value),
										(d[h] = !0)
								}
								this.context.strict &&
									c.type === i.Syntax.Identifier &&
									this.scanner.isRestrictedWord(c.name) &&
									this.tolerateError(f.Messages.StrictCatchVariable),
									this.expect(")")
								var j = this.parseBlock()
								return this.finalize(a, new g.CatchClause(c, j))
							}),
							(a.prototype.parseFinallyClause = function () {
								return this.expectKeyword("finally"), this.parseBlock()
							}),
							(a.prototype.parseTryStatement = function () {
								var a = this.createNode()
								this.expectKeyword("try")
								var b = this.parseBlock(),
									c = this.matchKeyword("catch") ? this.parseCatchClause() : null,
									d = this.matchKeyword("finally") ? this.parseFinallyClause() : null
								return (
									c || d || this.throwError(f.Messages.NoCatchOrFinally),
									this.finalize(a, new g.TryStatement(b, c, d))
								)
							}),
							(a.prototype.parseDebuggerStatement = function () {
								var a = this.createNode()
								return (
									this.expectKeyword("debugger"),
									this.consumeSemicolon(),
									this.finalize(a, new g.DebuggerStatement())
								)
							}),
							(a.prototype.parseStatement = function () {
								var a
								switch (this.lookahead.type) {
									case 1:
									case 5:
									case 6:
									case 8:
									case 10:
									case 9:
										a = this.parseExpressionStatement()
										break
									case 7:
										var b = this.lookahead.value
										a =
											"{" === b
												? this.parseBlock()
												: "(" === b
													? this.parseExpressionStatement()
													: ";" === b
														? this.parseEmptyStatement()
														: this.parseExpressionStatement()
										break
									case 3:
										a = this.matchAsyncFunction()
											? this.parseFunctionDeclaration()
											: this.parseLabelledStatement()
										break
									case 4:
										switch (this.lookahead.value) {
											case "break":
												a = this.parseBreakStatement()
												break
											case "continue":
												a = this.parseContinueStatement()
												break
											case "debugger":
												a = this.parseDebuggerStatement()
												break
											case "do":
												a = this.parseDoWhileStatement()
												break
											case "for":
												a = this.parseForStatement()
												break
											case "function":
												a = this.parseFunctionDeclaration()
												break
											case "if":
												a = this.parseIfStatement()
												break
											case "return":
												a = this.parseReturnStatement()
												break
											case "switch":
												a = this.parseSwitchStatement()
												break
											case "throw":
												a = this.parseThrowStatement()
												break
											case "try":
												a = this.parseTryStatement()
												break
											case "var":
												a = this.parseVariableStatement()
												break
											case "while":
												a = this.parseWhileStatement()
												break
											case "with":
												a = this.parseWithStatement()
												break
											default:
												a = this.parseExpressionStatement()
										}
										break
									default:
										a = this.throwUnexpectedToken(this.lookahead)
								}
								return a
							}),
							(a.prototype.parseFunctionSourceElements = function () {
								var a = this.createNode()
								this.expect("{")
								var b = this.parseDirectivePrologues(),
									c = this.context.labelSet,
									d = this.context.inIteration,
									e = this.context.inSwitch,
									f = this.context.inFunctionBody
								for (
									this.context.labelSet = {},
										this.context.inIteration = !1,
										this.context.inSwitch = !1,
										this.context.inFunctionBody = !0;
									2 !== this.lookahead.type && !this.match("}");

								)
									b.push(this.parseStatementListItem())
								return (
									this.expect("}"),
									(this.context.labelSet = c),
									(this.context.inIteration = d),
									(this.context.inSwitch = e),
									(this.context.inFunctionBody = f),
									this.finalize(a, new g.BlockStatement(b))
								)
							}),
							(a.prototype.validateParam = function (a, b, c) {
								var d = "$" + c
								this.context.strict
									? (this.scanner.isRestrictedWord(c) &&
											((a.stricted = b), (a.message = f.Messages.StrictParamName)),
										Object.prototype.hasOwnProperty.call(a.paramSet, d) &&
											((a.stricted = b), (a.message = f.Messages.StrictParamDupe)))
									: !a.firstRestricted &&
										(this.scanner.isRestrictedWord(c)
											? ((a.firstRestricted = b), (a.message = f.Messages.StrictParamName))
											: this.scanner.isStrictModeReservedWord(c)
												? ((a.firstRestricted = b), (a.message = f.Messages.StrictReservedWord))
												: Object.prototype.hasOwnProperty.call(a.paramSet, d) &&
													((a.stricted = b), (a.message = f.Messages.StrictParamDupe))),
									"function" == typeof Object.defineProperty
										? Object.defineProperty(a.paramSet, d, {
												value: !0,
												enumerable: !0,
												writable: !0,
												configurable: !0,
											})
										: (a.paramSet[d] = !0)
							}),
							(a.prototype.parseRestElement = function (a) {
								var b = this.createNode()
								this.expect("...")
								var c = this.parsePattern(a)
								return (
									this.match("=") && this.throwError(f.Messages.DefaultRestParameter),
									this.match(")") || this.throwError(f.Messages.ParameterAfterRestParameter),
									this.finalize(b, new g.RestElement(c))
								)
							}),
							(a.prototype.parseFormalParameter = function (a) {
								for (
									var b = [],
										c = this.match("...")
											? this.parseRestElement(b)
											: this.parsePatternWithDefault(b),
										d = 0;
									d < b.length;
									d++
								)
									this.validateParam(a, b[d], b[d].value)
								;(a.simple = a.simple && c instanceof g.Identifier), a.params.push(c)
							}),
							(a.prototype.parseFormalParameters = function (a) {
								var b
								if (
									((b = { simple: !0, params: [], firstRestricted: a }),
									this.expect("("),
									!this.match(")"))
								)
									for (
										b.paramSet = {};
										2 !== this.lookahead.type &&
										(this.parseFormalParameter(b), !this.match(")")) &&
										(this.expect(","), !this.match(")"));

									);
								return (
									this.expect(")"),
									{
										simple: b.simple,
										params: b.params,
										stricted: b.stricted,
										firstRestricted: b.firstRestricted,
										message: b.message,
									}
								)
							}),
							(a.prototype.matchAsyncFunction = function () {
								var a = this.matchContextualKeyword("async")
								if (a) {
									var b = this.scanner.saveState()
									this.scanner.scanComments()
									var c = this.scanner.lex()
									this.scanner.restoreState(b),
										(a = b.lineNumber === c.lineNumber && 4 === c.type && "function" === c.value)
								}
								return a
							}),
							(a.prototype.parseFunctionDeclaration = function (a) {
								var b,
									c = this.createNode(),
									d = this.matchContextualKeyword("async")
								d && this.nextToken(), this.expectKeyword("function")
								var e = !d && this.match("*")
								e && this.nextToken()
								var h = null,
									i = null
								if (!a || !this.match("(")) {
									var j = this.lookahead
									;(h = this.parseVariableIdentifier()),
										this.context.strict
											? this.scanner.isRestrictedWord(j.value) &&
												this.tolerateUnexpectedToken(j, f.Messages.StrictFunctionName)
											: this.scanner.isRestrictedWord(j.value)
												? ((i = j), (b = f.Messages.StrictFunctionName))
												: this.scanner.isStrictModeReservedWord(j.value) &&
													((i = j), (b = f.Messages.StrictReservedWord))
								}
								var k = this.context.await,
									l = this.context.allowYield
								;(this.context.await = d), (this.context.allowYield = !e)
								var m = this.parseFormalParameters(i),
									n = m.params,
									o = m.stricted
								;(i = m.firstRestricted), m.message && (b = m.message)
								var p = this.context.strict,
									q = this.context.allowStrictDirective
								this.context.allowStrictDirective = m.simple
								var r = this.parseFunctionSourceElements()
								return (
									this.context.strict && i && this.throwUnexpectedToken(i, b),
									this.context.strict && o && this.tolerateUnexpectedToken(o, b),
									(this.context.strict = p),
									(this.context.allowStrictDirective = q),
									(this.context.await = k),
									(this.context.allowYield = l),
									d
										? this.finalize(c, new g.AsyncFunctionDeclaration(h, n, r))
										: this.finalize(c, new g.FunctionDeclaration(h, n, r, e))
								)
							}),
							(a.prototype.parseFunctionExpression = function () {
								var a,
									b,
									c = this.createNode(),
									d = this.matchContextualKeyword("async")
								d && this.nextToken(), this.expectKeyword("function")
								var e = !d && this.match("*")
								e && this.nextToken()
								var h = null,
									i = this.context.await,
									j = this.context.allowYield
								if (((this.context.await = d), (this.context.allowYield = !e), !this.match("("))) {
									var k = this.lookahead
									;(h =
										!this.context.strict && !e && this.matchKeyword("yield")
											? this.parseIdentifierName()
											: this.parseVariableIdentifier()),
										this.context.strict
											? this.scanner.isRestrictedWord(k.value) &&
												this.tolerateUnexpectedToken(k, f.Messages.StrictFunctionName)
											: this.scanner.isRestrictedWord(k.value)
												? ((b = k), (a = f.Messages.StrictFunctionName))
												: this.scanner.isStrictModeReservedWord(k.value) &&
													((b = k), (a = f.Messages.StrictReservedWord))
								}
								var l = this.parseFormalParameters(b),
									m = l.params,
									n = l.stricted
								;(b = l.firstRestricted), l.message && (a = l.message)
								var o = this.context.strict,
									p = this.context.allowStrictDirective
								this.context.allowStrictDirective = l.simple
								var q = this.parseFunctionSourceElements()
								return (
									this.context.strict && b && this.throwUnexpectedToken(b, a),
									this.context.strict && n && this.tolerateUnexpectedToken(n, a),
									(this.context.strict = o),
									(this.context.allowStrictDirective = p),
									(this.context.await = i),
									(this.context.allowYield = j),
									d
										? this.finalize(c, new g.AsyncFunctionExpression(h, m, q))
										: this.finalize(c, new g.FunctionExpression(h, m, q, e))
								)
							}),
							(a.prototype.parseDirective = function () {
								var a = this.lookahead,
									b = this.createNode(),
									c = this.parseExpression(),
									d = c.type === i.Syntax.Literal ? this.getTokenRaw(a).slice(1, -1) : null
								return (
									this.consumeSemicolon(),
									this.finalize(b, d ? new g.Directive(c, d) : new g.ExpressionStatement(c))
								)
							}),
							(a.prototype.parseDirectivePrologues = function () {
								for (var a = null, b = []; ; ) {
									var c = this.lookahead
									if (8 !== c.type) break
									var d = this.parseDirective()
									b.push(d)
									var e = d.directive
									if ("string" != typeof e) break
									"use strict" === e
										? ((this.context.strict = !0),
											a && this.tolerateUnexpectedToken(a, f.Messages.StrictOctalLiteral),
											this.context.allowStrictDirective ||
												this.tolerateUnexpectedToken(
													c,
													f.Messages.IllegalLanguageModeDirective,
												))
										: !a && c.octal && (a = c)
								}
								return b
							}),
							(a.prototype.qualifiedPropertyName = function (a) {
								switch (a.type) {
									case 3:
									case 8:
									case 1:
									case 5:
									case 6:
									case 4:
										return !0
									case 7:
										return "[" === a.value
								}
								return !1
							}),
							(a.prototype.parseGetterMethod = function () {
								var a = this.createNode(),
									b = !1,
									c = this.context.allowYield
								this.context.allowYield = !b
								var d = this.parseFormalParameters()
								d.params.length > 0 && this.tolerateError(f.Messages.BadGetterArity)
								var e = this.parsePropertyMethod(d)
								return (
									(this.context.allowYield = c),
									this.finalize(a, new g.FunctionExpression(null, d.params, e, b))
								)
							}),
							(a.prototype.parseSetterMethod = function () {
								var a = this.createNode(),
									b = !1,
									c = this.context.allowYield
								this.context.allowYield = !b
								var d = this.parseFormalParameters()
								1 !== d.params.length
									? this.tolerateError(f.Messages.BadSetterArity)
									: d.params[0] instanceof g.RestElement &&
										this.tolerateError(f.Messages.BadSetterRestParameter)
								var e = this.parsePropertyMethod(d)
								return (
									(this.context.allowYield = c),
									this.finalize(a, new g.FunctionExpression(null, d.params, e, b))
								)
							}),
							(a.prototype.parseGeneratorMethod = function () {
								var a = this.createNode(),
									b = !0,
									c = this.context.allowYield
								this.context.allowYield = !0
								var d = this.parseFormalParameters()
								this.context.allowYield = !1
								var e = this.parsePropertyMethod(d)
								return (
									(this.context.allowYield = c),
									this.finalize(a, new g.FunctionExpression(null, d.params, e, b))
								)
							}),
							(a.prototype.isStartOfExpression = function () {
								var a = !0,
									b = this.lookahead.value
								switch (this.lookahead.type) {
									case 7:
										a =
											"[" === b ||
											"(" === b ||
											"{" === b ||
											"+" === b ||
											"-" === b ||
											"!" === b ||
											"~" === b ||
											"++" === b ||
											"--" === b ||
											"/" === b ||
											"/=" === b
										break
									case 4:
										a =
											"class" === b ||
											"delete" === b ||
											"function" === b ||
											"let" === b ||
											"new" === b ||
											"super" === b ||
											"this" === b ||
											"typeof" === b ||
											"void" === b ||
											"yield" === b
								}
								return a
							}),
							(a.prototype.parseYieldExpression = function () {
								var a = this.createNode()
								this.expectKeyword("yield")
								var b = null,
									c = !1
								if (!this.hasLineTerminator) {
									var d = this.context.allowYield
									;(this.context.allowYield = !1),
										(c = this.match("*"))
											? (this.nextToken(), (b = this.parseAssignmentExpression()))
											: this.isStartOfExpression() && (b = this.parseAssignmentExpression()),
										(this.context.allowYield = d)
								}
								return this.finalize(a, new g.YieldExpression(b, c))
							}),
							(a.prototype.parseClassElement = function (a) {
								var b = this.lookahead,
									c = this.createNode(),
									d = "",
									e = null,
									h = null,
									i = !1,
									j = !1,
									k = !1,
									l = !1
								if (this.match("*")) this.nextToken()
								else if (
									((i = this.match("[")),
									"static" === (e = this.parseObjectPropertyKey()).name &&
										(this.qualifiedPropertyName(this.lookahead) || this.match("*")) &&
										((b = this.lookahead),
										(k = !0),
										(i = this.match("[")),
										this.match("*") ? this.nextToken() : (e = this.parseObjectPropertyKey())),
									3 === b.type && !this.hasLineTerminator && "async" === b.value)
								) {
									var m = this.lookahead.value
									":" !== m &&
										"(" !== m &&
										"*" !== m &&
										((l = !0),
										(b = this.lookahead),
										(e = this.parseObjectPropertyKey()),
										3 === b.type &&
											"constructor" === b.value &&
											this.tolerateUnexpectedToken(b, f.Messages.ConstructorIsAsync))
								}
								var n = this.qualifiedPropertyName(this.lookahead)
								return (
									3 === b.type
										? "get" === b.value && n
											? ((d = "get"),
												(i = this.match("[")),
												(e = this.parseObjectPropertyKey()),
												(this.context.allowYield = !1),
												(h = this.parseGetterMethod()))
											: "set" === b.value &&
												n &&
												((d = "set"),
												(i = this.match("[")),
												(e = this.parseObjectPropertyKey()),
												(h = this.parseSetterMethod()))
										: 7 === b.type &&
											"*" === b.value &&
											n &&
											((d = "init"),
											(i = this.match("[")),
											(e = this.parseObjectPropertyKey()),
											(h = this.parseGeneratorMethod()),
											(j = !0)),
									!d &&
										e &&
										this.match("(") &&
										((d = "init"),
										(h = l
											? this.parsePropertyMethodAsyncFunction()
											: this.parsePropertyMethodFunction()),
										(j = !0)),
									d || this.throwUnexpectedToken(this.lookahead),
									"init" === d && (d = "method"),
									!i &&
										(k &&
											this.isPropertyKey(e, "prototype") &&
											this.throwUnexpectedToken(b, f.Messages.StaticPrototype),
										!k &&
											this.isPropertyKey(e, "constructor") &&
											(("method" !== d || !j || (h && h.generator)) &&
												this.throwUnexpectedToken(b, f.Messages.ConstructorSpecialMethod),
											a.value
												? this.throwUnexpectedToken(b, f.Messages.DuplicateConstructor)
												: (a.value = !0),
											(d = "constructor"))),
									this.finalize(c, new g.MethodDefinition(e, i, h, d, k))
								)
							}),
							(a.prototype.parseClassElementList = function () {
								var a = [],
									b = { value: !1 }
								for (this.expect("{"); !this.match("}"); )
									this.match(";") ? this.nextToken() : a.push(this.parseClassElement(b))
								return this.expect("}"), a
							}),
							(a.prototype.parseClassBody = function () {
								var a = this.createNode(),
									b = this.parseClassElementList()
								return this.finalize(a, new g.ClassBody(b))
							}),
							(a.prototype.parseClassDeclaration = function (a) {
								var b = this.createNode(),
									c = this.context.strict
								;(this.context.strict = !0), this.expectKeyword("class")
								var d = a && 3 !== this.lookahead.type ? null : this.parseVariableIdentifier(),
									e = null
								this.matchKeyword("extends") &&
									(this.nextToken(),
									(e = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall)))
								var f = this.parseClassBody()
								return (this.context.strict = c), this.finalize(b, new g.ClassDeclaration(d, e, f))
							}),
							(a.prototype.parseClassExpression = function () {
								var a = this.createNode(),
									b = this.context.strict
								;(this.context.strict = !0), this.expectKeyword("class")
								var c = 3 === this.lookahead.type ? this.parseVariableIdentifier() : null,
									d = null
								this.matchKeyword("extends") &&
									(this.nextToken(),
									(d = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall)))
								var e = this.parseClassBody()
								return (this.context.strict = b), this.finalize(a, new g.ClassExpression(c, d, e))
							}),
							(a.prototype.parseModule = function () {
								;(this.context.strict = !0), (this.context.isModule = !0), (this.scanner.isModule = !0)
								for (
									var a = this.createNode(), b = this.parseDirectivePrologues();
									2 !== this.lookahead.type;

								)
									b.push(this.parseStatementListItem())
								return this.finalize(a, new g.Module(b))
							}),
							(a.prototype.parseScript = function () {
								for (
									var a = this.createNode(), b = this.parseDirectivePrologues();
									2 !== this.lookahead.type;

								)
									b.push(this.parseStatementListItem())
								return this.finalize(a, new g.Script(b))
							}),
							(a.prototype.parseModuleSpecifier = function () {
								var a = this.createNode()
								8 !== this.lookahead.type && this.throwError(f.Messages.InvalidModuleSpecifier)
								var b = this.nextToken(),
									c = this.getTokenRaw(b)
								return this.finalize(a, new g.Literal(b.value, c))
							}),
							(a.prototype.parseImportSpecifier = function () {
								var a,
									b,
									c = this.createNode()
								return (
									3 === this.lookahead.type
										? ((b = a = this.parseVariableIdentifier()),
											this.matchContextualKeyword("as") &&
												(this.nextToken(), (b = this.parseVariableIdentifier())))
										: ((b = a = this.parseIdentifierName()),
											this.matchContextualKeyword("as")
												? (this.nextToken(), (b = this.parseVariableIdentifier()))
												: this.throwUnexpectedToken(this.nextToken())),
									this.finalize(c, new g.ImportSpecifier(b, a))
								)
							}),
							(a.prototype.parseNamedImports = function () {
								this.expect("{")
								for (var a = []; !this.match("}"); )
									a.push(this.parseImportSpecifier()), this.match("}") || this.expect(",")
								return this.expect("}"), a
							}),
							(a.prototype.parseImportDefaultSpecifier = function () {
								var a = this.createNode(),
									b = this.parseIdentifierName()
								return this.finalize(a, new g.ImportDefaultSpecifier(b))
							}),
							(a.prototype.parseImportNamespaceSpecifier = function () {
								var a = this.createNode()
								this.expect("*"),
									this.matchContextualKeyword("as") ||
										this.throwError(f.Messages.NoAsAfterImportNamespace),
									this.nextToken()
								var b = this.parseIdentifierName()
								return this.finalize(a, new g.ImportNamespaceSpecifier(b))
							}),
							(a.prototype.parseImportDeclaration = function () {
								this.context.inFunctionBody && this.throwError(f.Messages.IllegalImportDeclaration)
								var a,
									b = this.createNode()
								this.expectKeyword("import")
								var c = []
								if (8 === this.lookahead.type) a = this.parseModuleSpecifier()
								else {
									if (
										(this.match("{")
											? (c = c.concat(this.parseNamedImports()))
											: this.match("*")
												? c.push(this.parseImportNamespaceSpecifier())
												: this.isIdentifierName(this.lookahead) && !this.matchKeyword("default")
													? (c.push(this.parseImportDefaultSpecifier()),
														this.match(",") &&
															(this.nextToken(),
															this.match("*")
																? c.push(this.parseImportNamespaceSpecifier())
																: this.match("{")
																	? (c = c.concat(this.parseNamedImports()))
																	: this.throwUnexpectedToken(this.lookahead)))
													: this.throwUnexpectedToken(this.nextToken()),
										!this.matchContextualKeyword("from"))
									) {
										var d = this.lookahead.value
											? f.Messages.UnexpectedToken
											: f.Messages.MissingFromClause
										this.throwError(d, this.lookahead.value)
									}
									this.nextToken(), (a = this.parseModuleSpecifier())
								}
								return this.consumeSemicolon(), this.finalize(b, new g.ImportDeclaration(c, a))
							}),
							(a.prototype.parseExportSpecifier = function () {
								var a = this.createNode(),
									b = this.parseIdentifierName(),
									c = b
								return (
									this.matchContextualKeyword("as") &&
										(this.nextToken(), (c = this.parseIdentifierName())),
									this.finalize(a, new g.ExportSpecifier(b, c))
								)
							}),
							(a.prototype.parseExportDeclaration = function () {
								this.context.inFunctionBody && this.throwError(f.Messages.IllegalExportDeclaration)
								var a,
									b = this.createNode()
								if ((this.expectKeyword("export"), this.matchKeyword("default")))
									if ((this.nextToken(), this.matchKeyword("function"))) {
										var c = this.parseFunctionDeclaration(!0)
										a = this.finalize(b, new g.ExportDefaultDeclaration(c))
									} else if (this.matchKeyword("class")) {
										var c = this.parseClassDeclaration(!0)
										a = this.finalize(b, new g.ExportDefaultDeclaration(c))
									} else if (this.matchContextualKeyword("async")) {
										var c = this.matchAsyncFunction()
											? this.parseFunctionDeclaration(!0)
											: this.parseAssignmentExpression()
										a = this.finalize(b, new g.ExportDefaultDeclaration(c))
									} else {
										this.matchContextualKeyword("from") &&
											this.throwError(f.Messages.UnexpectedToken, this.lookahead.value)
										var c = this.match("{")
											? this.parseObjectInitializer()
											: this.match("[")
												? this.parseArrayInitializer()
												: this.parseAssignmentExpression()
										this.consumeSemicolon(),
											(a = this.finalize(b, new g.ExportDefaultDeclaration(c)))
									}
								else if (this.match("*")) {
									if ((this.nextToken(), !this.matchContextualKeyword("from"))) {
										var d = this.lookahead.value
											? f.Messages.UnexpectedToken
											: f.Messages.MissingFromClause
										this.throwError(d, this.lookahead.value)
									}
									this.nextToken()
									var e = this.parseModuleSpecifier()
									this.consumeSemicolon(), (a = this.finalize(b, new g.ExportAllDeclaration(e)))
								} else if (4 === this.lookahead.type) {
									var c = void 0
									switch (this.lookahead.value) {
										case "let":
										case "const":
											c = this.parseLexicalDeclaration({ inFor: !1 })
											break
										case "var":
										case "class":
										case "function":
											c = this.parseStatementListItem()
											break
										default:
											this.throwUnexpectedToken(this.lookahead)
									}
									a = this.finalize(b, new g.ExportNamedDeclaration(c, [], null))
								} else if (this.matchAsyncFunction()) {
									var c = this.parseFunctionDeclaration()
									a = this.finalize(b, new g.ExportNamedDeclaration(c, [], null))
								} else {
									var h = [],
										i = null,
										j = !1
									for (this.expect("{"); !this.match("}"); )
										(j = j || this.matchKeyword("default")),
											h.push(this.parseExportSpecifier()),
											this.match("}") || this.expect(",")
									if ((this.expect("}"), this.matchContextualKeyword("from")))
										this.nextToken(), (i = this.parseModuleSpecifier()), this.consumeSemicolon()
									else if (j) {
										var d = this.lookahead.value
											? f.Messages.UnexpectedToken
											: f.Messages.MissingFromClause
										this.throwError(d, this.lookahead.value)
									} else this.consumeSemicolon()
									a = this.finalize(b, new g.ExportNamedDeclaration(null, h, i))
								}
								return a
							}),
							a
						)
					})()
				},
				function (a, b) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 }),
						(b.assert = function (a, b) {
							if (!a) throw Error("ASSERT: " + b)
						})
				},
				function (a, b) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 }),
						(b.ErrorHandler = (function () {
							function a() {
								;(this.errors = []), (this.tolerant = !1)
							}
							return (
								(a.prototype.recordError = function (a) {
									this.errors.push(a)
								}),
								(a.prototype.tolerate = function (a) {
									if (this.tolerant) this.recordError(a)
									else throw a
								}),
								(a.prototype.constructError = function (a, b) {
									var c = Error(a)
									try {
										throw c
									} catch (a) {
										Object.create &&
											Object.defineProperty &&
											Object.defineProperty((c = Object.create(a)), "column", { value: b })
									}
									return c
								}),
								(a.prototype.createError = function (a, b, c, d) {
									var e = "Line " + b + ": " + d,
										f = this.constructError(e, c)
									return (f.index = a), (f.lineNumber = b), (f.description = d), f
								}),
								(a.prototype.throwError = function (a, b, c, d) {
									throw this.createError(a, b, c, d)
								}),
								(a.prototype.tolerateError = function (a, b, c, d) {
									var e = this.createError(a, b, c, d)
									if (this.tolerant) this.recordError(e)
									else throw e
								}),
								a
							)
						})())
				},
				function (a, b) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 }),
						(b.Messages = {
							BadGetterArity: "Getter must not have any formal parameters",
							BadSetterArity: "Setter must have exactly one formal parameter",
							BadSetterRestParameter: "Setter function argument must not be a rest parameter",
							ConstructorIsAsync: "Class constructor may not be an async method",
							ConstructorSpecialMethod: "Class constructor may not be an accessor",
							DeclarationMissingInitializer: "Missing initializer in %0 declaration",
							DefaultRestParameter: "Unexpected token =",
							DuplicateBinding: "Duplicate binding %0",
							DuplicateConstructor: "A class may only have one constructor",
							DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
							ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
							GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
							IllegalBreak: "Illegal break statement",
							IllegalContinue: "Illegal continue statement",
							IllegalExportDeclaration: "Unexpected token",
							IllegalImportDeclaration: "Unexpected token",
							IllegalLanguageModeDirective:
								"Illegal 'use strict' directive in function with non-simple parameter list",
							IllegalReturn: "Illegal return statement",
							InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
							InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
							InvalidLHSInAssignment: "Invalid left-hand side in assignment",
							InvalidLHSInForIn: "Invalid left-hand side in for-in",
							InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
							InvalidModuleSpecifier: "Unexpected token",
							InvalidRegExp: "Invalid regular expression",
							LetInLexicalBinding: "let is disallowed as a lexically bound name",
							MissingFromClause: "Unexpected token",
							MultipleDefaultsInSwitch: "More than one default clause in switch statement",
							NewlineAfterThrow: "Illegal newline after throw",
							NoAsAfterImportNamespace: "Unexpected token",
							NoCatchOrFinally: "Missing catch or finally after try",
							ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
							Redeclaration: "%0 '%1' has already been declared",
							StaticPrototype: "Classes may not have static property named prototype",
							StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
							StrictDelete: "Delete of an unqualified identifier in strict mode.",
							StrictFunction:
								"In strict mode code, functions can only be declared at top level or inside a block",
							StrictFunctionName: "Function name may not be eval or arguments in strict mode",
							StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
							StrictLHSPostfix:
								"Postfix increment/decrement may not have eval or arguments operand in strict mode",
							StrictLHSPrefix:
								"Prefix increment/decrement may not have eval or arguments operand in strict mode",
							StrictModeWith: "Strict mode code may not include a with statement",
							StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
							StrictParamDupe: "Strict mode function may not have duplicate parameter names",
							StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
							StrictReservedWord: "Use of future reserved word in strict mode",
							StrictVarName: "Variable name may not be eval or arguments in strict mode",
							TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
							UnexpectedEOS: "Unexpected end of input",
							UnexpectedIdentifier: "Unexpected identifier",
							UnexpectedNumber: "Unexpected number",
							UnexpectedReserved: "Unexpected reserved word",
							UnexpectedString: "Unexpected string",
							UnexpectedTemplate: "Unexpected quasi %0",
							UnexpectedToken: "Unexpected token %0",
							UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
							UnknownLabel: "Undefined label '%0'",
							UnterminatedRegExp: "Invalid regular expression: missing /",
						})
				},
				function (a, b, c) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 })
					var d = c(9),
						e = c(4),
						f = c(11)
					function g(a) {
						return "0123456789abcdef".indexOf(a.toLowerCase())
					}
					function h(a) {
						return "01234567".indexOf(a)
					}
					b.Scanner = (function () {
						function a(a, b) {
							;(this.source = a),
								(this.errorHandler = b),
								(this.trackComment = !1),
								(this.isModule = !1),
								(this.length = a.length),
								(this.index = 0),
								(this.lineNumber = +(a.length > 0)),
								(this.lineStart = 0),
								(this.curlyStack = [])
						}
						return (
							(a.prototype.saveState = function () {
								return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart }
							}),
							(a.prototype.restoreState = function (a) {
								;(this.index = a.index),
									(this.lineNumber = a.lineNumber),
									(this.lineStart = a.lineStart)
							}),
							(a.prototype.eof = function () {
								return this.index >= this.length
							}),
							(a.prototype.throwUnexpectedToken = function (a) {
								return (
									void 0 === a && (a = f.Messages.UnexpectedTokenIllegal),
									this.errorHandler.throwError(
										this.index,
										this.lineNumber,
										this.index - this.lineStart + 1,
										a,
									)
								)
							}),
							(a.prototype.tolerateUnexpectedToken = function (a) {
								void 0 === a && (a = f.Messages.UnexpectedTokenIllegal),
									this.errorHandler.tolerateError(
										this.index,
										this.lineNumber,
										this.index - this.lineStart + 1,
										a,
									)
							}),
							(a.prototype.skipSingleLineComment = function (a) {
								var b,
									c,
									d = []
								for (
									this.trackComment &&
									((d = []),
									(b = this.index - a),
									(c = {
										start: { line: this.lineNumber, column: this.index - this.lineStart - a },
										end: {},
									}));
									!this.eof();

								) {
									var f = this.source.charCodeAt(this.index)
									if ((++this.index, e.Character.isLineTerminator(f))) {
										if (this.trackComment) {
											c.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 }
											var g = {
												multiLine: !1,
												slice: [b + a, this.index - 1],
												range: [b, this.index - 1],
												loc: c,
											}
											d.push(g)
										}
										return (
											13 === f && 10 === this.source.charCodeAt(this.index) && ++this.index,
											++this.lineNumber,
											(this.lineStart = this.index),
											d
										)
									}
								}
								if (this.trackComment) {
									c.end = { line: this.lineNumber, column: this.index - this.lineStart }
									var g = {
										multiLine: !1,
										slice: [b + a, this.index],
										range: [b, this.index],
										loc: c,
									}
									d.push(g)
								}
								return d
							}),
							(a.prototype.skipMultiLineComment = function () {
								var a,
									b,
									c = []
								for (
									this.trackComment &&
									((c = []),
									(a = this.index - 2),
									(b = {
										start: { line: this.lineNumber, column: this.index - this.lineStart - 2 },
										end: {},
									}));
									!this.eof();

								) {
									var d = this.source.charCodeAt(this.index)
									if (e.Character.isLineTerminator(d))
										13 === d && 10 === this.source.charCodeAt(this.index + 1) && ++this.index,
											++this.lineNumber,
											++this.index,
											(this.lineStart = this.index)
									else if (42 === d) {
										if (47 === this.source.charCodeAt(this.index + 1)) {
											if (((this.index += 2), this.trackComment)) {
												b.end = { line: this.lineNumber, column: this.index - this.lineStart }
												var f = {
													multiLine: !0,
													slice: [a + 2, this.index - 2],
													range: [a, this.index],
													loc: b,
												}
												c.push(f)
											}
											return c
										}
										++this.index
									} else ++this.index
								}
								if (this.trackComment) {
									b.end = { line: this.lineNumber, column: this.index - this.lineStart }
									var f = {
										multiLine: !0,
										slice: [a + 2, this.index],
										range: [a, this.index],
										loc: b,
									}
									c.push(f)
								}
								return this.tolerateUnexpectedToken(), c
							}),
							(a.prototype.scanComments = function () {
								this.trackComment && (a = [])
								for (var a, b = 0 === this.index; !this.eof(); ) {
									var c = this.source.charCodeAt(this.index)
									if (e.Character.isWhiteSpace(c)) ++this.index
									else if (e.Character.isLineTerminator(c))
										++this.index,
											13 === c && 10 === this.source.charCodeAt(this.index) && ++this.index,
											++this.lineNumber,
											(this.lineStart = this.index),
											(b = !0)
									else if (47 === c)
										if (47 === (c = this.source.charCodeAt(this.index + 1))) {
											this.index += 2
											var d = this.skipSingleLineComment(2)
											this.trackComment && (a = a.concat(d)), (b = !0)
										} else if (42 === c) {
											this.index += 2
											var d = this.skipMultiLineComment()
											this.trackComment && (a = a.concat(d))
										} else break
									else if (b && 45 === c)
										if (
											45 === this.source.charCodeAt(this.index + 1) &&
											62 === this.source.charCodeAt(this.index + 2)
										) {
											this.index += 3
											var d = this.skipSingleLineComment(3)
											this.trackComment && (a = a.concat(d))
										} else break
									else if (60 !== c || this.isModule) break
									else if ("!--" === this.source.slice(this.index + 1, this.index + 4)) {
										this.index += 4
										var d = this.skipSingleLineComment(4)
										this.trackComment && (a = a.concat(d))
									} else break
								}
								return a
							}),
							(a.prototype.isFutureReservedWord = function (a) {
								switch (a) {
									case "enum":
									case "export":
									case "import":
									case "super":
										return !0
									default:
										return !1
								}
							}),
							(a.prototype.isStrictModeReservedWord = function (a) {
								switch (a) {
									case "implements":
									case "interface":
									case "package":
									case "private":
									case "protected":
									case "public":
									case "static":
									case "yield":
									case "let":
										return !0
									default:
										return !1
								}
							}),
							(a.prototype.isRestrictedWord = function (a) {
								return "eval" === a || "arguments" === a
							}),
							(a.prototype.isKeyword = function (a) {
								switch (a.length) {
									case 2:
										return "if" === a || "in" === a || "do" === a
									case 3:
										return "var" === a || "for" === a || "new" === a || "try" === a || "let" === a
									case 4:
										return (
											"this" === a ||
											"else" === a ||
											"case" === a ||
											"void" === a ||
											"with" === a ||
											"enum" === a
										)
									case 5:
										return (
											"while" === a ||
											"break" === a ||
											"catch" === a ||
											"throw" === a ||
											"const" === a ||
											"yield" === a ||
											"class" === a ||
											"super" === a
										)
									case 6:
										return (
											"return" === a ||
											"typeof" === a ||
											"delete" === a ||
											"switch" === a ||
											"export" === a ||
											"import" === a
										)
									case 7:
										return "default" === a || "finally" === a || "extends" === a
									case 8:
										return "function" === a || "continue" === a || "debugger" === a
									case 10:
										return "instanceof" === a
									default:
										return !1
								}
							}),
							(a.prototype.codePointAt = function (a) {
								var b = this.source.charCodeAt(a)
								if (b >= 55296 && b <= 56319) {
									var c = this.source.charCodeAt(a + 1)
									c >= 56320 && c <= 57343 && (b = (b - 55296) * 1024 + c - 56320 + 65536)
								}
								return b
							}),
							(a.prototype.scanHexEscape = function (a) {
								for (var b = "u" === a ? 4 : 2, c = 0, d = 0; d < b; ++d)
									if (!(!this.eof() && e.Character.isHexDigit(this.source.charCodeAt(this.index))))
										return null
									else c = 16 * c + g(this.source[this.index++])
								return String.fromCharCode(c)
							}),
							(a.prototype.scanUnicodeCodePointEscape = function () {
								var a = this.source[this.index],
									b = 0
								for (
									"}" === a && this.throwUnexpectedToken();
									!this.eof() &&
									((a = this.source[this.index++]), e.Character.isHexDigit(a.charCodeAt(0)));

								)
									b = 16 * b + g(a)
								return (
									(b > 1114111 || "}" !== a) && this.throwUnexpectedToken(),
									e.Character.fromCodePoint(b)
								)
							}),
							(a.prototype.getIdentifier = function () {
								for (var a = this.index++; !this.eof(); ) {
									var b = this.source.charCodeAt(this.index)
									if (92 === b || (b >= 55296 && b < 57343))
										return (this.index = a), this.getComplexIdentifier()
									if (e.Character.isIdentifierPart(b)) ++this.index
									else break
								}
								return this.source.slice(a, this.index)
							}),
							(a.prototype.getComplexIdentifier = function () {
								var a,
									b = this.codePointAt(this.index),
									c = e.Character.fromCodePoint(b)
								for (
									this.index += c.length,
										92 === b &&
											(117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(),
											++this.index,
											"{" === this.source[this.index]
												? (++this.index, (a = this.scanUnicodeCodePointEscape()))
												: (null !== (a = this.scanHexEscape("u")) &&
														"\\" !== a &&
														e.Character.isIdentifierStart(a.charCodeAt(0))) ||
													this.throwUnexpectedToken(),
											(c = a));
									!this.eof() &&
									((b = this.codePointAt(this.index)), e.Character.isIdentifierPart(b));

								)
									(c += a = e.Character.fromCodePoint(b)),
										(this.index += a.length),
										92 === b &&
											((c = c.substr(0, c.length - 1)),
											117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(),
											++this.index,
											"{" === this.source[this.index]
												? (++this.index, (a = this.scanUnicodeCodePointEscape()))
												: (null !== (a = this.scanHexEscape("u")) &&
														"\\" !== a &&
														e.Character.isIdentifierPart(a.charCodeAt(0))) ||
													this.throwUnexpectedToken(),
											(c += a))
								return c
							}),
							(a.prototype.octalToDecimal = function (a) {
								var b = "0" !== a,
									c = h(a)
								return (
									!this.eof() &&
										e.Character.isOctalDigit(this.source.charCodeAt(this.index)) &&
										((b = !0),
										(c = 8 * c + h(this.source[this.index++])),
										"0123".indexOf(a) >= 0 &&
											!this.eof() &&
											e.Character.isOctalDigit(this.source.charCodeAt(this.index)) &&
											(c = 8 * c + h(this.source[this.index++]))),
									{ code: c, octal: b }
								)
							}),
							(a.prototype.scanIdentifier = function () {
								var a,
									b = this.index,
									c =
										92 === this.source.charCodeAt(b)
											? this.getComplexIdentifier()
											: this.getIdentifier()
								if (
									3 !=
										(a =
											1 === c.length
												? 3
												: this.isKeyword(c)
													? 4
													: "null" === c
														? 5
														: "true" === c || "false" === c
															? 1
															: 3) &&
									b + c.length !== this.index
								) {
									var d = this.index
									;(this.index = b),
										this.tolerateUnexpectedToken(f.Messages.InvalidEscapedReservedWord),
										(this.index = d)
								}
								return {
									type: a,
									value: c,
									lineNumber: this.lineNumber,
									lineStart: this.lineStart,
									start: b,
									end: this.index,
								}
							}),
							(a.prototype.scanPunctuator = function () {
								var a = this.index,
									b = this.source[this.index]
								switch (b) {
									case "(":
									case "{":
										"{" === b && this.curlyStack.push("{"), ++this.index
										break
									case ".":
										++this.index,
											"." === this.source[this.index] &&
												"." === this.source[this.index + 1] &&
												((this.index += 2), (b = "..."))
										break
									case "}":
										++this.index, this.curlyStack.pop()
										break
									case ")":
									case ";":
									case ",":
									case "[":
									case "]":
									case ":":
									case "?":
									case "~":
										++this.index
										break
									default:
										">>>=" === (b = this.source.substr(this.index, 4))
											? (this.index += 4)
											: "===" === (b = b.substr(0, 3)) ||
												  "!==" === b ||
												  ">>>" === b ||
												  "<<=" === b ||
												  ">>=" === b ||
												  "**=" === b
												? (this.index += 3)
												: "&&" === (b = b.substr(0, 2)) ||
													  "||" === b ||
													  "==" === b ||
													  "!=" === b ||
													  "+=" === b ||
													  "-=" === b ||
													  "*=" === b ||
													  "/=" === b ||
													  "++" === b ||
													  "--" === b ||
													  "<<" === b ||
													  ">>" === b ||
													  "&=" === b ||
													  "|=" === b ||
													  "^=" === b ||
													  "%=" === b ||
													  "<=" === b ||
													  ">=" === b ||
													  "=>" === b ||
													  "**" === b
													? (this.index += 2)
													: ((b = this.source[this.index]),
														"<>=!+-*%&|^/".indexOf(b) >= 0 && ++this.index)
								}
								return (
									this.index === a && this.throwUnexpectedToken(),
									{
										type: 7,
										value: b,
										lineNumber: this.lineNumber,
										lineStart: this.lineStart,
										start: a,
										end: this.index,
									}
								)
							}),
							(a.prototype.scanHexLiteral = function (a) {
								for (
									var b = "";
									!this.eof() && e.Character.isHexDigit(this.source.charCodeAt(this.index));

								)
									b += this.source[this.index++]
								return (
									0 === b.length && this.throwUnexpectedToken(),
									e.Character.isIdentifierStart(this.source.charCodeAt(this.index)) &&
										this.throwUnexpectedToken(),
									{
										type: 6,
										value: parseInt("0x" + b, 16),
										lineNumber: this.lineNumber,
										lineStart: this.lineStart,
										start: a,
										end: this.index,
									}
								)
							}),
							(a.prototype.scanBinaryLiteral = function (a) {
								for (
									var b, c = "";
									!this.eof() && ("0" === (b = this.source[this.index]) || "1" === b);

								)
									c += this.source[this.index++]
								return (
									0 === c.length && this.throwUnexpectedToken(),
									!this.eof() &&
										((b = this.source.charCodeAt(this.index)),
										(e.Character.isIdentifierStart(b) || e.Character.isDecimalDigit(b)) &&
											this.throwUnexpectedToken()),
									{
										type: 6,
										value: parseInt(c, 2),
										lineNumber: this.lineNumber,
										lineStart: this.lineStart,
										start: a,
										end: this.index,
									}
								)
							}),
							(a.prototype.scanOctalLiteral = function (a, b) {
								var c = "",
									d = !1
								for (
									e.Character.isOctalDigit(a.charCodeAt(0))
										? ((d = !0), (c = "0" + this.source[this.index++]))
										: ++this.index;
									!this.eof() && e.Character.isOctalDigit(this.source.charCodeAt(this.index));

								)
									c += this.source[this.index++]
								return (
									d || 0 !== c.length || this.throwUnexpectedToken(),
									(e.Character.isIdentifierStart(this.source.charCodeAt(this.index)) ||
										e.Character.isDecimalDigit(this.source.charCodeAt(this.index))) &&
										this.throwUnexpectedToken(),
									{
										type: 6,
										value: parseInt(c, 8),
										octal: d,
										lineNumber: this.lineNumber,
										lineStart: this.lineStart,
										start: b,
										end: this.index,
									}
								)
							}),
							(a.prototype.isImplicitOctalLiteral = function () {
								for (var a = this.index + 1; a < this.length; ++a) {
									var b = this.source[a]
									if ("8" === b || "9" === b) return !1
									if (!e.Character.isOctalDigit(b.charCodeAt(0))) break
								}
								return !0
							}),
							(a.prototype.scanNumericLiteral = function () {
								var a = this.index,
									b = this.source[a]
								d.assert(
									e.Character.isDecimalDigit(b.charCodeAt(0)) || "." === b,
									"Numeric literal must start with a decimal digit or a decimal point",
								)
								var c = ""
								if ("." !== b) {
									if (((c = this.source[this.index++]), (b = this.source[this.index]), "0" === c)) {
										if ("x" === b || "X" === b) return ++this.index, this.scanHexLiteral(a)
										if ("b" === b || "B" === b) return ++this.index, this.scanBinaryLiteral(a)
										if (
											"o" === b ||
											"O" === b ||
											(b &&
												e.Character.isOctalDigit(b.charCodeAt(0)) &&
												this.isImplicitOctalLiteral())
										)
											return this.scanOctalLiteral(b, a)
									}
									for (; e.Character.isDecimalDigit(this.source.charCodeAt(this.index)); )
										c += this.source[this.index++]
									b = this.source[this.index]
								}
								if ("." === b) {
									for (
										c += this.source[this.index++];
										e.Character.isDecimalDigit(this.source.charCodeAt(this.index));

									)
										c += this.source[this.index++]
									b = this.source[this.index]
								}
								if ("e" === b || "E" === b)
									if (
										((c += this.source[this.index++]),
										("+" === (b = this.source[this.index]) || "-" === b) &&
											(c += this.source[this.index++]),
										e.Character.isDecimalDigit(this.source.charCodeAt(this.index)))
									)
										for (; e.Character.isDecimalDigit(this.source.charCodeAt(this.index)); )
											c += this.source[this.index++]
									else this.throwUnexpectedToken()
								return (
									e.Character.isIdentifierStart(this.source.charCodeAt(this.index)) &&
										this.throwUnexpectedToken(),
									{
										type: 6,
										value: parseFloat(c),
										lineNumber: this.lineNumber,
										lineStart: this.lineStart,
										start: a,
										end: this.index,
									}
								)
							}),
							(a.prototype.scanStringLiteral = function () {
								var a = this.index,
									b = this.source[a]
								d.assert("'" === b || '"' === b, "String literal must starts with a quote"),
									++this.index
								for (var c = !1, g = ""; !this.eof(); ) {
									var h = this.source[this.index++]
									if (h === b) {
										b = ""
										break
									}
									if ("\\" === h)
										if (
											(h = this.source[this.index++]) &&
											e.Character.isLineTerminator(h.charCodeAt(0))
										)
											++this.lineNumber,
												"\r" === h && "\n" === this.source[this.index] && ++this.index,
												(this.lineStart = this.index)
										else
											switch (h) {
												case "u":
													if ("{" === this.source[this.index])
														++this.index, (g += this.scanUnicodeCodePointEscape())
													else {
														var i = this.scanHexEscape(h)
														null === i && this.throwUnexpectedToken(), (g += i)
													}
													break
												case "x":
													var j = this.scanHexEscape(h)
													null === j &&
														this.throwUnexpectedToken(f.Messages.InvalidHexEscapeSequence),
														(g += j)
													break
												case "n":
													g += "\n"
													break
												case "r":
													g += "\r"
													break
												case "t":
													g += "	"
													break
												case "b":
													g += "\b"
													break
												case "f":
													g += "\f"
													break
												case "v":
													g += "\v"
													break
												case "8":
												case "9":
													;(g += h), this.tolerateUnexpectedToken()
													break
												default:
													if (h && e.Character.isOctalDigit(h.charCodeAt(0))) {
														var k = this.octalToDecimal(h)
														;(c = k.octal || c), (g += String.fromCharCode(k.code))
													} else g += h
											}
									else if (e.Character.isLineTerminator(h.charCodeAt(0))) break
									else g += h
								}
								return (
									"" !== b && ((this.index = a), this.throwUnexpectedToken()),
									{
										type: 8,
										value: g,
										octal: c,
										lineNumber: this.lineNumber,
										lineStart: this.lineStart,
										start: a,
										end: this.index,
									}
								)
							}),
							(a.prototype.scanTemplate = function () {
								var a = "",
									b = !1,
									c = this.index,
									d = "`" === this.source[c],
									g = !1,
									h = 2
								for (++this.index; !this.eof(); ) {
									var i = this.source[this.index++]
									if ("`" === i) {
										;(h = 1), (g = !0), (b = !0)
										break
									}
									if ("$" === i) {
										if ("{" === this.source[this.index]) {
											this.curlyStack.push("${"), ++this.index, (b = !0)
											break
										}
										a += i
									} else if ("\\" === i)
										if (
											((i = this.source[this.index++]),
											e.Character.isLineTerminator(i.charCodeAt(0)))
										)
											++this.lineNumber,
												"\r" === i && "\n" === this.source[this.index] && ++this.index,
												(this.lineStart = this.index)
										else
											switch (i) {
												case "n":
													a += "\n"
													break
												case "r":
													a += "\r"
													break
												case "t":
													a += "	"
													break
												case "u":
													if ("{" === this.source[this.index])
														++this.index, (a += this.scanUnicodeCodePointEscape())
													else {
														var j = this.index,
															k = this.scanHexEscape(i)
														null !== k ? (a += k) : ((this.index = j), (a += i))
													}
													break
												case "x":
													var l = this.scanHexEscape(i)
													null === l &&
														this.throwUnexpectedToken(f.Messages.InvalidHexEscapeSequence),
														(a += l)
													break
												case "b":
													a += "\b"
													break
												case "f":
													a += "\f"
													break
												case "v":
													a += "\v"
													break
												default:
													"0" === i
														? (e.Character.isDecimalDigit(
																this.source.charCodeAt(this.index),
															) &&
																this.throwUnexpectedToken(
																	f.Messages.TemplateOctalLiteral,
																),
															(a += "\0"))
														: e.Character.isOctalDigit(i.charCodeAt(0))
															? this.throwUnexpectedToken(f.Messages.TemplateOctalLiteral)
															: (a += i)
											}
									else
										e.Character.isLineTerminator(i.charCodeAt(0))
											? (++this.lineNumber,
												"\r" === i && "\n" === this.source[this.index] && ++this.index,
												(this.lineStart = this.index),
												(a += "\n"))
											: (a += i)
								}
								return (
									b || this.throwUnexpectedToken(),
									d || this.curlyStack.pop(),
									{
										type: 10,
										value: this.source.slice(c + 1, this.index - h),
										cooked: a,
										head: d,
										tail: g,
										lineNumber: this.lineNumber,
										lineStart: this.lineStart,
										start: c,
										end: this.index,
									}
								)
							}),
							(a.prototype.testRegExp = function (a, b) {
								var c = "￿",
									d = a,
									e = this
								b.indexOf("u") >= 0 &&
									(d = d
										.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function (a, b, d) {
											var g = parseInt(b || d, 16)
											return (g > 1114111 && e.throwUnexpectedToken(f.Messages.InvalidRegExp),
											g <= 65535)
												? String.fromCharCode(g)
												: c
										})
										.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c))
								try {
									RegExp(d)
								} catch (a) {
									this.throwUnexpectedToken(f.Messages.InvalidRegExp)
								}
								try {
									return new RegExp(a, b)
								} catch (a) {
									return null
								}
							}),
							(a.prototype.scanRegExpBody = function () {
								var a = this.source[this.index]
								d.assert("/" === a, "Regular expression literal must start with a slash")
								for (var b = this.source[this.index++], c = !1, g = !1; !this.eof(); )
									if (((b += a = this.source[this.index++]), "\\" === a))
										(a = this.source[this.index++]),
											e.Character.isLineTerminator(a.charCodeAt(0)) &&
												this.throwUnexpectedToken(f.Messages.UnterminatedRegExp),
											(b += a)
									else if (e.Character.isLineTerminator(a.charCodeAt(0)))
										this.throwUnexpectedToken(f.Messages.UnterminatedRegExp)
									else if (c) "]" === a && (c = !1)
									else if ("/" === a) {
										g = !0
										break
									} else "[" === a && (c = !0)
								return (
									g || this.throwUnexpectedToken(f.Messages.UnterminatedRegExp),
									b.substr(1, b.length - 2)
								)
							}),
							(a.prototype.scanRegExpFlags = function () {
								for (var a = "", b = ""; !this.eof(); ) {
									var c = this.source[this.index]
									if (!e.Character.isIdentifierPart(c.charCodeAt(0))) break
									if ((++this.index, "\\" !== c || this.eof())) (b += c), (a += c)
									else if ("u" === (c = this.source[this.index])) {
										++this.index
										var d = this.index,
											f = this.scanHexEscape("u")
										if (null !== f)
											for (b += f, a += "\\u"; d < this.index; ++d) a += this.source[d]
										else (this.index = d), (b += "u"), (a += "\\u")
										this.tolerateUnexpectedToken()
									} else (a += "\\"), this.tolerateUnexpectedToken()
								}
								return b
							}),
							(a.prototype.scanRegExp = function () {
								var a = this.index,
									b = this.scanRegExpBody(),
									c = this.scanRegExpFlags(),
									d = this.testRegExp(b, c)
								return {
									type: 9,
									value: "",
									pattern: b,
									flags: c,
									regex: d,
									lineNumber: this.lineNumber,
									lineStart: this.lineStart,
									start: a,
									end: this.index,
								}
							}),
							(a.prototype.lex = function () {
								if (this.eof())
									return {
										type: 2,
										value: "",
										lineNumber: this.lineNumber,
										lineStart: this.lineStart,
										start: this.index,
										end: this.index,
									}
								var a = this.source.charCodeAt(this.index)
								return e.Character.isIdentifierStart(a)
									? this.scanIdentifier()
									: 40 === a || 41 === a || 59 === a
										? this.scanPunctuator()
										: 39 === a || 34 === a
											? this.scanStringLiteral()
											: 46 === a
												? e.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))
													? this.scanNumericLiteral()
													: this.scanPunctuator()
												: e.Character.isDecimalDigit(a)
													? this.scanNumericLiteral()
													: 96 === a ||
														  (125 === a &&
																"${" === this.curlyStack[this.curlyStack.length - 1])
														? this.scanTemplate()
														: a >= 55296 &&
															  a < 57343 &&
															  e.Character.isIdentifierStart(
																	this.codePointAt(this.index),
															  )
															? this.scanIdentifier()
															: this.scanPunctuator()
							}),
							a
						)
					})()
				},
				function (a, b) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 }),
						(b.TokenName = {}),
						(b.TokenName[1] = "Boolean"),
						(b.TokenName[2] = "<end>"),
						(b.TokenName[3] = "Identifier"),
						(b.TokenName[4] = "Keyword"),
						(b.TokenName[5] = "Null"),
						(b.TokenName[6] = "Numeric"),
						(b.TokenName[7] = "Punctuator"),
						(b.TokenName[8] = "String"),
						(b.TokenName[9] = "RegularExpression"),
						(b.TokenName[10] = "Template")
				},
				function (a, b) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 }),
						(b.XHTMLEntities = {
							quot: '"',
							amp: "&",
							apos: "'",
							gt: ">",
							nbsp: " ",
							iexcl: "¡",
							cent: "¢",
							pound: "£",
							curren: "¤",
							yen: "¥",
							brvbar: "¦",
							sect: "§",
							uml: "¨",
							copy: "©",
							ordf: "ª",
							laquo: "«",
							not: "¬",
							shy: "­",
							reg: "®",
							macr: "¯",
							deg: "°",
							plusmn: "±",
							sup2: "²",
							sup3: "³",
							acute: "´",
							micro: "µ",
							para: "¶",
							middot: "·",
							cedil: "¸",
							sup1: "¹",
							ordm: "º",
							raquo: "»",
							frac14: "¼",
							frac12: "½",
							frac34: "¾",
							iquest: "¿",
							Agrave: "À",
							Aacute: "Á",
							Acirc: "Â",
							Atilde: "Ã",
							Auml: "Ä",
							Aring: "Å",
							AElig: "Æ",
							Ccedil: "Ç",
							Egrave: "È",
							Eacute: "É",
							Ecirc: "Ê",
							Euml: "Ë",
							Igrave: "Ì",
							Iacute: "Í",
							Icirc: "Î",
							Iuml: "Ï",
							ETH: "Ð",
							Ntilde: "Ñ",
							Ograve: "Ò",
							Oacute: "Ó",
							Ocirc: "Ô",
							Otilde: "Õ",
							Ouml: "Ö",
							times: "×",
							Oslash: "Ø",
							Ugrave: "Ù",
							Uacute: "Ú",
							Ucirc: "Û",
							Uuml: "Ü",
							Yacute: "Ý",
							THORN: "Þ",
							szlig: "ß",
							agrave: "à",
							aacute: "á",
							acirc: "â",
							atilde: "ã",
							auml: "ä",
							aring: "å",
							aelig: "æ",
							ccedil: "ç",
							egrave: "è",
							eacute: "é",
							ecirc: "ê",
							euml: "ë",
							igrave: "ì",
							iacute: "í",
							icirc: "î",
							iuml: "ï",
							eth: "ð",
							ntilde: "ñ",
							ograve: "ò",
							oacute: "ó",
							ocirc: "ô",
							otilde: "õ",
							ouml: "ö",
							divide: "÷",
							oslash: "ø",
							ugrave: "ù",
							uacute: "ú",
							ucirc: "û",
							uuml: "ü",
							yacute: "ý",
							thorn: "þ",
							yuml: "ÿ",
							OElig: "Œ",
							oelig: "œ",
							Scaron: "Š",
							scaron: "š",
							Yuml: "Ÿ",
							fnof: "ƒ",
							circ: "ˆ",
							tilde: "˜",
							Alpha: "Α",
							Beta: "Β",
							Gamma: "Γ",
							Delta: "Δ",
							Epsilon: "Ε",
							Zeta: "Ζ",
							Eta: "Η",
							Theta: "Θ",
							Iota: "Ι",
							Kappa: "Κ",
							Lambda: "Λ",
							Mu: "Μ",
							Nu: "Ν",
							Xi: "Ξ",
							Omicron: "Ο",
							Pi: "Π",
							Rho: "Ρ",
							Sigma: "Σ",
							Tau: "Τ",
							Upsilon: "Υ",
							Phi: "Φ",
							Chi: "Χ",
							Psi: "Ψ",
							Omega: "Ω",
							alpha: "α",
							beta: "β",
							gamma: "γ",
							delta: "δ",
							epsilon: "ε",
							zeta: "ζ",
							eta: "η",
							theta: "θ",
							iota: "ι",
							kappa: "κ",
							lambda: "λ",
							mu: "μ",
							nu: "ν",
							xi: "ξ",
							omicron: "ο",
							pi: "π",
							rho: "ρ",
							sigmaf: "ς",
							sigma: "σ",
							tau: "τ",
							upsilon: "υ",
							phi: "φ",
							chi: "χ",
							psi: "ψ",
							omega: "ω",
							thetasym: "ϑ",
							upsih: "ϒ",
							piv: "ϖ",
							ensp: " ",
							emsp: " ",
							thinsp: " ",
							zwnj: "‌",
							zwj: "‍",
							lrm: "‎",
							rlm: "‏",
							ndash: "–",
							mdash: "—",
							lsquo: "‘",
							rsquo: "’",
							sbquo: "‚",
							ldquo: "“",
							rdquo: "”",
							bdquo: "„",
							dagger: "†",
							Dagger: "‡",
							bull: "•",
							hellip: "…",
							permil: "‰",
							prime: "′",
							Prime: "″",
							lsaquo: "‹",
							rsaquo: "›",
							oline: "‾",
							frasl: "⁄",
							euro: "€",
							image: "ℑ",
							weierp: "℘",
							real: "ℜ",
							trade: "™",
							alefsym: "ℵ",
							larr: "←",
							uarr: "↑",
							rarr: "→",
							darr: "↓",
							harr: "↔",
							crarr: "↵",
							lArr: "⇐",
							uArr: "⇑",
							rArr: "⇒",
							dArr: "⇓",
							hArr: "⇔",
							forall: "∀",
							part: "∂",
							exist: "∃",
							empty: "∅",
							nabla: "∇",
							isin: "∈",
							notin: "∉",
							ni: "∋",
							prod: "∏",
							sum: "∑",
							minus: "−",
							lowast: "∗",
							radic: "√",
							prop: "∝",
							infin: "∞",
							ang: "∠",
							and: "∧",
							or: "∨",
							cap: "∩",
							cup: "∪",
							int: "∫",
							there4: "∴",
							sim: "∼",
							cong: "≅",
							asymp: "≈",
							ne: "≠",
							equiv: "≡",
							le: "≤",
							ge: "≥",
							sub: "⊂",
							sup: "⊃",
							nsub: "⊄",
							sube: "⊆",
							supe: "⊇",
							oplus: "⊕",
							otimes: "⊗",
							perp: "⊥",
							sdot: "⋅",
							lceil: "⌈",
							rceil: "⌉",
							lfloor: "⌊",
							rfloor: "⌋",
							loz: "◊",
							spades: "♠",
							clubs: "♣",
							hearts: "♥",
							diams: "♦",
							lang: "⟨",
							rang: "⟩",
						})
				},
				function (a, b, c) {
					"use strict"
					Object.defineProperty(b, "__esModule", { value: !0 })
					var d = c(10),
						e = c(12),
						f = c(13),
						g = (function () {
							function a() {
								;(this.values = []), (this.curly = this.paren = -1)
							}
							return (
								(a.prototype.beforeFunctionExpression = function (a) {
									return (
										[
											"(",
											"{",
											"[",
											"in",
											"typeof",
											"instanceof",
											"new",
											"return",
											"case",
											"delete",
											"throw",
											"void",
											"=",
											"+=",
											"-=",
											"*=",
											"**=",
											"/=",
											"%=",
											"<<=",
											">>=",
											">>>=",
											"&=",
											"|=",
											"^=",
											",",
											"+",
											"-",
											"*",
											"**",
											"/",
											"%",
											"++",
											"--",
											"<<",
											">>",
											">>>",
											"&",
											"|",
											"^",
											"!",
											"~",
											"&&",
											"||",
											"?",
											":",
											"===",
											"==",
											">=",
											"<=",
											"<",
											">",
											"!=",
											"!==",
										].indexOf(a) >= 0
									)
								}),
								(a.prototype.isRegexStart = function () {
									var a = this.values[this.values.length - 1],
										b = null !== a
									switch (a) {
										case "this":
										case "]":
											b = !1
											break
										case ")":
											var c = this.values[this.paren - 1]
											b = "if" === c || "while" === c || "for" === c || "with" === c
											break
										case "}":
											if (((b = !1), "function" === this.values[this.curly - 3])) {
												var d = this.values[this.curly - 4]
												b = !!d && !this.beforeFunctionExpression(d)
											} else if ("function" === this.values[this.curly - 4]) {
												var d = this.values[this.curly - 5]
												b = !d || !this.beforeFunctionExpression(d)
											}
									}
									return b
								}),
								(a.prototype.push = function (a) {
									7 === a.type || 4 === a.type
										? ("{" === a.value
												? (this.curly = this.values.length)
												: "(" === a.value && (this.paren = this.values.length),
											this.values.push(a.value))
										: this.values.push(null)
								}),
								a
							)
						})()
					b.Tokenizer = (function () {
						function a(a, b) {
							;(this.errorHandler = new d.ErrorHandler()),
								(this.errorHandler.tolerant = !!b && "boolean" == typeof b.tolerant && b.tolerant),
								(this.scanner = new e.Scanner(a, this.errorHandler)),
								(this.scanner.trackComment = !!b && "boolean" == typeof b.comment && b.comment),
								(this.trackRange = !!b && "boolean" == typeof b.range && b.range),
								(this.trackLoc = !!b && "boolean" == typeof b.loc && b.loc),
								(this.buffer = []),
								(this.reader = new g())
						}
						return (
							(a.prototype.errors = function () {
								return this.errorHandler.errors
							}),
							(a.prototype.getNextToken = function () {
								if (0 === this.buffer.length) {
									var a = this.scanner.scanComments()
									if (this.scanner.trackComment)
										for (var b = 0; b < a.length; ++b) {
											var c = a[b],
												d = this.scanner.source.slice(c.slice[0], c.slice[1]),
												e = { type: c.multiLine ? "BlockComment" : "LineComment", value: d }
											this.trackRange && (e.range = c.range),
												this.trackLoc && (e.loc = c.loc),
												this.buffer.push(e)
										}
									if (!this.scanner.eof()) {
										var g = void 0
										this.trackLoc &&
											(g = {
												start: {
													line: this.scanner.lineNumber,
													column: this.scanner.index - this.scanner.lineStart,
												},
												end: {},
											})
										var h =
											"/" === this.scanner.source[this.scanner.index] &&
											this.reader.isRegexStart()
												? this.scanner.scanRegExp()
												: this.scanner.lex()
										this.reader.push(h)
										var i = {
											type: f.TokenName[h.type],
											value: this.scanner.source.slice(h.start, h.end),
										}
										this.trackRange && (i.range = [h.start, h.end]),
											this.trackLoc &&
												((g.end = {
													line: this.scanner.lineNumber,
													column: this.scanner.index - this.scanner.lineStart,
												}),
												(i.loc = g)),
											9 === h.type && (i.regex = { pattern: h.pattern, flags: h.flags }),
											this.buffer.push(i)
									}
								}
								return this.buffer.shift()
							}),
							a
						)
					})()
				},
			])
		})
	},
	33237,
	(a, b, c) => {
		"use strict"
		var d
		try {
			a.t, (d = a.r(97989))
		} catch (a) {}
		function e(a) {
			if (null === a) return !1
			try {
				var b = "(" + a + ")",
					c = d.parse(b, { range: !0 })
				if (
					"Program" !== c.type ||
					1 !== c.body.length ||
					"ExpressionStatement" !== c.body[0].type ||
					("ArrowFunctionExpression" !== c.body[0].expression.type &&
						"FunctionExpression" !== c.body[0].expression.type)
				)
					return !1
				return !0
			} catch (a) {
				return !1
			}
		}
		function f(a) {
			var b,
				c = "(" + a + ")",
				e = d.parse(c, { range: !0 }),
				f = []
			if (
				"Program" !== e.type ||
				1 !== e.body.length ||
				"ExpressionStatement" !== e.body[0].type ||
				("ArrowFunctionExpression" !== e.body[0].expression.type &&
					"FunctionExpression" !== e.body[0].expression.type)
			)
				throw Error("Failed to resolve function")
			return (e.body[0].expression.params.forEach(function (a) {
				f.push(a.name)
			}),
			(b = e.body[0].expression.body.range),
			"BlockStatement" === e.body[0].expression.body.type)
				? Function(f, c.slice(b[0] + 1, b[1] - 1))
				: Function(f, "return " + c.slice(b[0], b[1]))
		}
		function g(a) {
			return a.toString()
		}
		function h(a) {
			return "[object Function]" === Object.prototype.toString.call(a)
		}
		b.exports = new (a.r(75483))("tag:yaml.org,2002:js/function", {
			kind: "scalar",
			resolve: e,
			construct: f,
			predicate: h,
			represent: g,
		})
	},
	59643,
	(a, b, c) => {
		"use strict"
		var d = a.r(98488)
		b.exports = d.DEFAULT = new d({ include: [a.r(92239)], explicit: [a.r(29739), a.r(1821), a.r(33237)] })
	},
	18359,
	(a, b, c) => {
		"use strict"
		var d = a.r(99908)
		function e(a, b, c, d, e) {
			;(this.name = a), (this.buffer = b), (this.position = c), (this.line = d), (this.column = e)
		}
		;(e.prototype.getSnippet = function (a, b) {
			var c, e, f, g, h
			if (!this.buffer) return null
			for (
				a = a || 4, b = b || 75, c = "", e = this.position;
				e > 0 && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(e - 1));

			)
				if (((e -= 1), this.position - e > b / 2 - 1)) {
					;(c = " ... "), (e += 5)
					break
				}
			for (
				f = "", g = this.position;
				g < this.buffer.length && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(g));

			)
				if ((g += 1) - this.position > b / 2 - 1) {
					;(f = " ... "), (g -= 5)
					break
				}
			return (
				(h = this.buffer.slice(e, g)),
				d.repeat(" ", a) + c + h + f + "\n" + d.repeat(" ", a + this.position - e + c.length) + "^"
			)
		}),
			(e.prototype.toString = function (a) {
				var b,
					c = ""
				return (
					this.name && (c += 'in "' + this.name + '" '),
					(c += "at line " + (this.line + 1) + ", column " + (this.column + 1)),
					!a && (b = this.getSnippet()) && (c += ":\n" + b),
					c
				)
			}),
			(b.exports = e)
	},
	35092,
	(a, b, c) => {
		"use strict"
		var d = a.r(99908),
			e = a.r(24762),
			f = a.r(18359),
			g = a.r(92239),
			h = a.r(59643),
			i = Object.prototype.hasOwnProperty,
			j = 1,
			k = 2,
			l = 3,
			m = 4,
			n = 1,
			o = 2,
			p = 3,
			q =
				/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
			r = /[\x85\u2028\u2029]/,
			s = /[,\[\]\{\}]/,
			t = /^(?:!|!!|![a-z\-]+!)$/i,
			u = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i
		function v(a) {
			return Object.prototype.toString.call(a)
		}
		function w(a) {
			return 10 === a || 13 === a
		}
		function x(a) {
			return 9 === a || 32 === a
		}
		function y(a) {
			return 9 === a || 32 === a || 10 === a || 13 === a
		}
		function z(a) {
			return 44 === a || 91 === a || 93 === a || 123 === a || 125 === a
		}
		function A(a) {
			var b
			return 48 <= a && a <= 57 ? a - 48 : 97 <= (b = 32 | a) && b <= 102 ? b - 97 + 10 : -1
		}
		function B(a) {
			return 120 === a ? 2 : 117 === a ? 4 : 8 * (85 === a)
		}
		function C(a) {
			return 48 <= a && a <= 57 ? a - 48 : -1
		}
		function D(a) {
			return 48 === a
				? "\0"
				: 97 === a
					? "\x07"
					: 98 === a
						? "\b"
						: 116 === a || 9 === a
							? "	"
							: 110 === a
								? "\n"
								: 118 === a
									? "\v"
									: 102 === a
										? "\f"
										: 114 === a
											? "\r"
											: 101 === a
												? "\x1b"
												: 32 === a
													? " "
													: 34 === a
														? '"'
														: 47 === a
															? "/"
															: 92 === a
																? "\\"
																: 78 === a
																	? ""
																	: 95 === a
																		? " "
																		: 76 === a
																			? "\u2028"
																			: 80 === a
																				? "\u2029"
																				: ""
		}
		function E(a) {
			return a <= 65535
				? String.fromCharCode(a)
				: String.fromCharCode(((a - 65536) >> 10) + 55296, ((a - 65536) & 1023) + 56320)
		}
		for (var F = Array(256), G = Array(256), H = 0; H < 256; H++) (F[H] = +!!D(H)), (G[H] = D(H))
		function I(a, b) {
			;(this.input = a),
				(this.filename = b.filename || null),
				(this.schema = b.schema || h),
				(this.onWarning = b.onWarning || null),
				(this.legacy = b.legacy || !1),
				(this.json = b.json || !1),
				(this.listener = b.listener || null),
				(this.implicitTypes = this.schema.compiledImplicit),
				(this.typeMap = this.schema.compiledTypeMap),
				(this.length = a.length),
				(this.position = 0),
				(this.line = 0),
				(this.lineStart = 0),
				(this.lineIndent = 0),
				(this.documents = [])
		}
		function J(a, b) {
			return new e(b, new f(a.filename, a.input, a.position, a.line, a.position - a.lineStart))
		}
		function K(a, b) {
			throw J(a, b)
		}
		function L(a, b) {
			a.onWarning && a.onWarning.call(null, J(a, b))
		}
		var M = {
			YAML: function (a, b, c) {
				var d, e, f
				null !== a.version && K(a, "duplication of %YAML directive"),
					1 !== c.length && K(a, "YAML directive accepts exactly one argument"),
					null === (d = /^([0-9]+)\.([0-9]+)$/.exec(c[0])) &&
						K(a, "ill-formed argument of the YAML directive"),
					(e = parseInt(d[1], 10)),
					(f = parseInt(d[2], 10)),
					1 !== e && K(a, "unacceptable YAML version of the document"),
					(a.version = c[0]),
					(a.checkLineBreaks = f < 2),
					1 !== f && 2 !== f && L(a, "unsupported YAML version of the document")
			},
			TAG: function (a, b, c) {
				var d, e
				2 !== c.length && K(a, "TAG directive accepts exactly two arguments"),
					(d = c[0]),
					(e = c[1]),
					t.test(d) || K(a, "ill-formed tag handle (first argument) of the TAG directive"),
					i.call(a.tagMap, d) && K(a, 'there is a previously declared suffix for "' + d + '" tag handle'),
					u.test(e) || K(a, "ill-formed tag prefix (second argument) of the TAG directive"),
					(a.tagMap[d] = e)
			},
		}
		function N(a, b, c, d) {
			var e, f, g, h
			if (b < c) {
				if (((h = a.input.slice(b, c)), d))
					for (e = 0, f = h.length; e < f; e += 1)
						9 === (g = h.charCodeAt(e)) ||
							(32 <= g && g <= 1114111) ||
							K(a, "expected valid JSON character")
				else q.test(h) && K(a, "the stream contains non-printable characters")
				a.result += h
			}
		}
		function O(a, b, c, e) {
			var f, g, h, j
			for (
				d.isObject(c) || K(a, "cannot merge mappings; the provided source object is unacceptable"),
					h = 0,
					j = (f = Object.keys(c)).length;
				h < j;
				h += 1
			)
				(g = f[h]), i.call(b, g) || ((b[g] = c[g]), (e[g] = !0))
		}
		function P(a, b, c, d, e, f, g, h) {
			var j, k
			if (Array.isArray(e))
				for (j = 0, k = (e = Array.prototype.slice.call(e)).length; j < k; j += 1)
					Array.isArray(e[j]) && K(a, "nested arrays are not supported inside keys"),
						"object" == typeof e && "[object Object]" === v(e[j]) && (e[j] = "[object Object]")
			if (
				("object" == typeof e && "[object Object]" === v(e) && (e = "[object Object]"),
				(e = String(e)),
				null === b && (b = {}),
				"tag:yaml.org,2002:merge" === d)
			)
				if (Array.isArray(f)) for (j = 0, k = f.length; j < k; j += 1) O(a, b, f[j], c)
				else O(a, b, f, c)
			else
				!a.json &&
					!i.call(c, e) &&
					i.call(b, e) &&
					((a.line = g || a.line), (a.position = h || a.position), K(a, "duplicated mapping key")),
					(b[e] = f),
					delete c[e]
			return b
		}
		function Q(a) {
			var b
			10 === (b = a.input.charCodeAt(a.position))
				? a.position++
				: 13 === b
					? (a.position++, 10 === a.input.charCodeAt(a.position) && a.position++)
					: K(a, "a line break is expected"),
				(a.line += 1),
				(a.lineStart = a.position)
		}
		function R(a, b, c) {
			for (var d = 0, e = a.input.charCodeAt(a.position); 0 !== e; ) {
				for (; x(e); ) e = a.input.charCodeAt(++a.position)
				if (b && 35 === e)
					do e = a.input.charCodeAt(++a.position)
					while (10 !== e && 13 !== e && 0 !== e)
				if (w(e))
					for (Q(a), e = a.input.charCodeAt(a.position), d++, a.lineIndent = 0; 32 === e; )
						a.lineIndent++, (e = a.input.charCodeAt(++a.position))
				else break
			}
			return -1 !== c && 0 !== d && a.lineIndent < c && L(a, "deficient indentation"), d
		}
		function S(a) {
			var b,
				c = a.position
			return (
				!!(
					(45 === (b = a.input.charCodeAt(c)) || 46 === b) &&
					b === a.input.charCodeAt(c + 1) &&
					b === a.input.charCodeAt(c + 2) &&
					((c += 3), 0 === (b = a.input.charCodeAt(c)) || y(b))
				) || !1
			)
		}
		function T(a, b) {
			1 === b ? (a.result += " ") : b > 1 && (a.result += d.repeat("\n", b - 1))
		}
		function U(a, b, c) {
			var d,
				e,
				f,
				g,
				h,
				i,
				j,
				k,
				l = a.kind,
				m = a.result
			if (
				y((k = a.input.charCodeAt(a.position))) ||
				z(k) ||
				35 === k ||
				38 === k ||
				42 === k ||
				33 === k ||
				124 === k ||
				62 === k ||
				39 === k ||
				34 === k ||
				37 === k ||
				64 === k ||
				96 === k ||
				((63 === k || 45 === k) && (y((d = a.input.charCodeAt(a.position + 1))) || (c && z(d))))
			)
				return !1
			for (a.kind = "scalar", a.result = "", e = f = a.position, g = !1; 0 !== k; ) {
				if (58 === k) {
					if (y((d = a.input.charCodeAt(a.position + 1))) || (c && z(d))) break
				} else if (35 === k) {
					if (y(a.input.charCodeAt(a.position - 1))) break
				} else if ((a.position === a.lineStart && S(a)) || (c && z(k))) break
				else if (w(k)) {
					if (((h = a.line), (i = a.lineStart), (j = a.lineIndent), R(a, !1, -1), a.lineIndent >= b)) {
						;(g = !0), (k = a.input.charCodeAt(a.position))
						continue
					}
					;(a.position = f), (a.line = h), (a.lineStart = i), (a.lineIndent = j)
					break
				}
				g && (N(a, e, f, !1), T(a, a.line - h), (e = f = a.position), (g = !1)),
					x(k) || (f = a.position + 1),
					(k = a.input.charCodeAt(++a.position))
			}
			return N(a, e, f, !1), !!a.result || ((a.kind = l), (a.result = m), !1)
		}
		function V(a, b) {
			var c, d, e
			if (39 !== (c = a.input.charCodeAt(a.position))) return !1
			for (
				a.kind = "scalar", a.result = "", a.position++, d = e = a.position;
				0 !== (c = a.input.charCodeAt(a.position));

			)
				if (39 === c) {
					if ((N(a, d, a.position, !0), 39 !== (c = a.input.charCodeAt(++a.position)))) return !0
					;(d = a.position), a.position++, (e = a.position)
				} else
					w(c)
						? (N(a, d, e, !0), T(a, R(a, !1, b)), (d = e = a.position))
						: a.position === a.lineStart && S(a)
							? K(a, "unexpected end of the document within a single quoted scalar")
							: (a.position++, (e = a.position))
			K(a, "unexpected end of the stream within a single quoted scalar")
		}
		function W(a, b) {
			var c, d, e, f, g, h
			if (34 !== (h = a.input.charCodeAt(a.position))) return !1
			for (
				a.kind = "scalar", a.result = "", a.position++, c = d = a.position;
				0 !== (h = a.input.charCodeAt(a.position));

			)
				if (34 === h) return N(a, c, a.position, !0), a.position++, !0
				else if (92 === h) {
					if ((N(a, c, a.position, !0), w((h = a.input.charCodeAt(++a.position))))) R(a, !1, b)
					else if (h < 256 && F[h]) (a.result += G[h]), a.position++
					else if ((g = B(h)) > 0) {
						for (e = g, f = 0; e > 0; e--)
							(g = A((h = a.input.charCodeAt(++a.position)))) >= 0
								? (f = (f << 4) + g)
								: K(a, "expected hexadecimal character")
						;(a.result += E(f)), a.position++
					} else K(a, "unknown escape sequence")
					c = d = a.position
				} else
					w(h)
						? (N(a, c, d, !0), T(a, R(a, !1, b)), (c = d = a.position))
						: a.position === a.lineStart && S(a)
							? K(a, "unexpected end of the document within a double quoted scalar")
							: (a.position++, (d = a.position))
			K(a, "unexpected end of the stream within a double quoted scalar")
		}
		function X(a, b) {
			var c,
				d,
				e,
				f,
				g,
				h,
				i,
				k,
				l,
				m,
				n = !0,
				o = a.tag,
				p = a.anchor,
				q = {}
			if (91 === (m = a.input.charCodeAt(a.position))) (e = 93), (h = !1), (d = [])
			else {
				if (123 !== m) return !1
				;(e = 125), (h = !0), (d = {})
			}
			for (null !== a.anchor && (a.anchorMap[a.anchor] = d), m = a.input.charCodeAt(++a.position); 0 !== m; ) {
				if ((R(a, !0, b), (m = a.input.charCodeAt(a.position)) === e))
					return (
						a.position++,
						(a.tag = o),
						(a.anchor = p),
						(a.kind = h ? "mapping" : "sequence"),
						(a.result = d),
						!0
					)
				n || K(a, "missed comma between flow collection entries"),
					(k = i = l = null),
					(f = g = !1),
					63 === m && y(a.input.charCodeAt(a.position + 1)) && ((f = g = !0), a.position++, R(a, !0, b)),
					(c = a.line),
					ac(a, b, j, !1, !0),
					(k = a.tag),
					(i = a.result),
					R(a, !0, b),
					(m = a.input.charCodeAt(a.position)),
					(g || a.line === c) &&
						58 === m &&
						((f = !0),
						(m = a.input.charCodeAt(++a.position)),
						R(a, !0, b),
						ac(a, b, j, !1, !0),
						(l = a.result)),
					h ? P(a, d, q, k, i, l) : f ? d.push(P(a, null, q, k, i, l)) : d.push(i),
					R(a, !0, b),
					44 === (m = a.input.charCodeAt(a.position))
						? ((n = !0), (m = a.input.charCodeAt(++a.position)))
						: (n = !1)
			}
			K(a, "unexpected end of the stream within a flow collection")
		}
		function Y(a, b) {
			var c,
				e,
				f,
				g,
				h = n,
				i = !1,
				j = !1,
				k = b,
				l = 0,
				m = !1
			if (124 === (g = a.input.charCodeAt(a.position))) e = !1
			else {
				if (62 !== g) return !1
				e = !0
			}
			for (a.kind = "scalar", a.result = ""; 0 !== g; )
				if (43 === (g = a.input.charCodeAt(++a.position)) || 45 === g)
					n === h ? (h = 43 === g ? p : o) : K(a, "repeat of a chomping mode identifier")
				else if ((f = C(g)) >= 0)
					0 === f
						? K(a, "bad explicit indentation width of a block scalar; it cannot be less than one")
						: j
							? K(a, "repeat of an indentation width identifier")
							: ((k = b + f - 1), (j = !0))
				else break
			if (x(g)) {
				do g = a.input.charCodeAt(++a.position)
				while (x(g))
				if (35 === g)
					do g = a.input.charCodeAt(++a.position)
					while (!w(g) && 0 !== g)
			}
			for (; 0 !== g; ) {
				for (Q(a), a.lineIndent = 0, g = a.input.charCodeAt(a.position); (!j || a.lineIndent < k) && 32 === g; )
					a.lineIndent++, (g = a.input.charCodeAt(++a.position))
				if ((!j && a.lineIndent > k && (k = a.lineIndent), w(g))) {
					l++
					continue
				}
				if (a.lineIndent < k) {
					h === p ? (a.result += d.repeat("\n", i ? 1 + l : l)) : h === n && i && (a.result += "\n")
					break
				}
				for (
					e
						? x(g)
							? ((m = !0), (a.result += d.repeat("\n", i ? 1 + l : l)))
							: m
								? ((m = !1), (a.result += d.repeat("\n", l + 1)))
								: 0 === l
									? i && (a.result += " ")
									: (a.result += d.repeat("\n", l))
						: (a.result += d.repeat("\n", i ? 1 + l : l)),
						i = !0,
						j = !0,
						l = 0,
						c = a.position;
					!w(g) && 0 !== g;

				)
					g = a.input.charCodeAt(++a.position)
				N(a, c, a.position, !1)
			}
			return !0
		}
		function Z(a, b) {
			var c,
				d,
				e = a.tag,
				f = a.anchor,
				g = [],
				h = !1
			for (
				null !== a.anchor && (a.anchorMap[a.anchor] = g), d = a.input.charCodeAt(a.position);
				0 !== d && 45 === d && y(a.input.charCodeAt(a.position + 1));

			) {
				if (((h = !0), a.position++, R(a, !0, -1) && a.lineIndent <= b)) {
					g.push(null), (d = a.input.charCodeAt(a.position))
					continue
				}
				if (
					((c = a.line),
					ac(a, b, l, !1, !0),
					g.push(a.result),
					R(a, !0, -1),
					(d = a.input.charCodeAt(a.position)),
					(a.line === c || a.lineIndent > b) && 0 !== d)
				)
					K(a, "bad indentation of a sequence entry")
				else if (a.lineIndent < b) break
			}
			return !!h && ((a.tag = e), (a.anchor = f), (a.kind = "sequence"), (a.result = g), !0)
		}
		function $(a, b, c) {
			var d,
				e,
				f,
				g,
				h,
				i = a.tag,
				j = a.anchor,
				l = {},
				n = {},
				o = null,
				p = null,
				q = null,
				r = !1,
				s = !1
			for (null !== a.anchor && (a.anchorMap[a.anchor] = l), h = a.input.charCodeAt(a.position); 0 !== h; ) {
				if (
					((d = a.input.charCodeAt(a.position + 1)),
					(f = a.line),
					(g = a.position),
					(63 === h || 58 === h) && y(d))
				)
					63 === h
						? (r && (P(a, l, n, o, p, null), (o = p = q = null)), (s = !0), (r = !0), (e = !0))
						: r
							? ((r = !1), (e = !0))
							: K(
									a,
									"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line",
								),
						(a.position += 1),
						(h = d)
				else if (ac(a, c, k, !1, !0))
					if (a.line === f) {
						for (h = a.input.charCodeAt(a.position); x(h); ) h = a.input.charCodeAt(++a.position)
						if (58 === h)
							y((h = a.input.charCodeAt(++a.position))) ||
								K(
									a,
									"a whitespace character is expected after the key-value separator within a block mapping",
								),
								r && (P(a, l, n, o, p, null), (o = p = q = null)),
								(s = !0),
								(r = !1),
								(e = !1),
								(o = a.tag),
								(p = a.result)
						else {
							if (!s) return (a.tag = i), (a.anchor = j), !0
							K(a, "can not read an implicit mapping pair; a colon is missed")
						}
					} else {
						if (!s) return (a.tag = i), (a.anchor = j), !0
						K(a, "can not read a block mapping entry; a multiline key may not be an implicit key")
					}
				else break
				if (
					((a.line === f || a.lineIndent > b) &&
						(ac(a, b, m, !0, e) && (r ? (p = a.result) : (q = a.result)),
						r || (P(a, l, n, o, p, q, f, g), (o = p = q = null)),
						R(a, !0, -1),
						(h = a.input.charCodeAt(a.position))),
					a.lineIndent > b && 0 !== h)
				)
					K(a, "bad indentation of a mapping entry")
				else if (a.lineIndent < b) break
			}
			return (
				r && P(a, l, n, o, p, null), s && ((a.tag = i), (a.anchor = j), (a.kind = "mapping"), (a.result = l)), s
			)
		}
		function _(a) {
			var b,
				c,
				d,
				e,
				f = !1,
				g = !1
			if (33 !== (e = a.input.charCodeAt(a.position))) return !1
			if (
				(null !== a.tag && K(a, "duplication of a tag property"),
				60 === (e = a.input.charCodeAt(++a.position))
					? ((f = !0), (e = a.input.charCodeAt(++a.position)))
					: 33 === e
						? ((g = !0), (c = "!!"), (e = a.input.charCodeAt(++a.position)))
						: (c = "!"),
				(b = a.position),
				f)
			) {
				do e = a.input.charCodeAt(++a.position)
				while (0 !== e && 62 !== e)
				a.position < a.length
					? ((d = a.input.slice(b, a.position)), (e = a.input.charCodeAt(++a.position)))
					: K(a, "unexpected end of the stream within a verbatim tag")
			} else {
				for (; 0 !== e && !y(e); )
					33 === e &&
						(g
							? K(a, "tag suffix cannot contain exclamation marks")
							: ((c = a.input.slice(b - 1, a.position + 1)),
								t.test(c) || K(a, "named tag handle cannot contain such characters"),
								(g = !0),
								(b = a.position + 1))),
						(e = a.input.charCodeAt(++a.position))
				;(d = a.input.slice(b, a.position)),
					s.test(d) && K(a, "tag suffix cannot contain flow indicator characters")
			}
			return (
				d && !u.test(d) && K(a, "tag name cannot contain such characters: " + d),
				f
					? (a.tag = d)
					: i.call(a.tagMap, c)
						? (a.tag = a.tagMap[c] + d)
						: "!" === c
							? (a.tag = "!" + d)
							: "!!" === c
								? (a.tag = "tag:yaml.org,2002:" + d)
								: K(a, 'undeclared tag handle "' + c + '"'),
				!0
			)
		}
		function aa(a) {
			var b, c
			if (38 !== (c = a.input.charCodeAt(a.position))) return !1
			for (
				null !== a.anchor && K(a, "duplication of an anchor property"),
					c = a.input.charCodeAt(++a.position),
					b = a.position;
				0 !== c && !y(c) && !z(c);

			)
				c = a.input.charCodeAt(++a.position)
			return (
				a.position === b && K(a, "name of an anchor node must contain at least one character"),
				(a.anchor = a.input.slice(b, a.position)),
				!0
			)
		}
		function ab(a) {
			var b, c, d
			if (42 !== (d = a.input.charCodeAt(a.position))) return !1
			for (d = a.input.charCodeAt(++a.position), b = a.position; 0 !== d && !y(d) && !z(d); )
				d = a.input.charCodeAt(++a.position)
			return (
				a.position === b && K(a, "name of an alias node must contain at least one character"),
				(c = a.input.slice(b, a.position)),
				i.call(a.anchorMap, c) || K(a, 'unidentified alias "' + c + '"'),
				(a.result = a.anchorMap[c]),
				R(a, !0, -1),
				!0
			)
		}
		function ac(a, b, c, d, e) {
			var f,
				g,
				h,
				n,
				o,
				p,
				q,
				r,
				s = 1,
				t = !1,
				u = !1
			if (
				(null !== a.listener && a.listener("open", a),
				(a.tag = null),
				(a.anchor = null),
				(a.kind = null),
				(a.result = null),
				(f = g = h = m === c || l === c),
				d &&
					R(a, !0, -1) &&
					((t = !0),
					a.lineIndent > b ? (s = 1) : a.lineIndent === b ? (s = 0) : a.lineIndent < b && (s = -1)),
				1 === s)
			)
				for (; _(a) || aa(a); )
					R(a, !0, -1)
						? ((t = !0),
							(h = f),
							a.lineIndent > b ? (s = 1) : a.lineIndent === b ? (s = 0) : a.lineIndent < b && (s = -1))
						: (h = !1)
			if (
				(h && (h = t || e),
				(1 === s || m === c) &&
					((q = j === c || k === c ? b : b + 1),
					(r = a.position - a.lineStart),
					1 === s
						? (h && (Z(a, r) || $(a, r, q))) || X(a, q)
							? (u = !0)
							: ((g && Y(a, q)) || V(a, q) || W(a, q)
									? (u = !0)
									: ab(a)
										? ((u = !0),
											(null !== a.tag || null !== a.anchor) &&
												K(a, "alias node should not have any properties"))
										: U(a, q, j === c) && ((u = !0), null === a.tag && (a.tag = "?")),
								null !== a.anchor && (a.anchorMap[a.anchor] = a.result))
						: 0 === s && (u = h && Z(a, r))),
				null !== a.tag && "!" !== a.tag)
			)
				if ("?" === a.tag) {
					for (
						null !== a.result &&
							"scalar" !== a.kind &&
							K(a, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + a.kind + '"'),
							n = 0,
							o = a.implicitTypes.length;
						n < o;
						n += 1
					)
						if ((p = a.implicitTypes[n]).resolve(a.result)) {
							;(a.result = p.construct(a.result)),
								(a.tag = p.tag),
								null !== a.anchor && (a.anchorMap[a.anchor] = a.result)
							break
						}
				} else
					i.call(a.typeMap[a.kind || "fallback"], a.tag)
						? ((p = a.typeMap[a.kind || "fallback"][a.tag]),
							null !== a.result &&
								p.kind !== a.kind &&
								K(
									a,
									"unacceptable node kind for !<" +
										a.tag +
										'> tag; it should be "' +
										p.kind +
										'", not "' +
										a.kind +
										'"',
								),
							p.resolve(a.result)
								? ((a.result = p.construct(a.result)),
									null !== a.anchor && (a.anchorMap[a.anchor] = a.result))
								: K(a, "cannot resolve a node with !<" + a.tag + "> explicit tag"))
						: K(a, "unknown tag !<" + a.tag + ">")
			return null !== a.listener && a.listener("close", a), null !== a.tag || null !== a.anchor || u
		}
		function ad(a) {
			var b,
				c,
				d,
				e,
				f = a.position,
				g = !1
			for (
				a.version = null, a.checkLineBreaks = a.legacy, a.tagMap = {}, a.anchorMap = {};
				0 !== (e = a.input.charCodeAt(a.position)) &&
				(R(a, !0, -1), (e = a.input.charCodeAt(a.position)), !(a.lineIndent > 0) && 37 === e);

			) {
				for (g = !0, e = a.input.charCodeAt(++a.position), b = a.position; 0 !== e && !y(e); )
					e = a.input.charCodeAt(++a.position)
				for (
					c = a.input.slice(b, a.position),
						d = [],
						c.length < 1 && K(a, "directive name must not be less than one character in length");
					0 !== e;

				) {
					for (; x(e); ) e = a.input.charCodeAt(++a.position)
					if (35 === e) {
						do e = a.input.charCodeAt(++a.position)
						while (0 !== e && !w(e))
						break
					}
					if (w(e)) break
					for (b = a.position; 0 !== e && !y(e); ) e = a.input.charCodeAt(++a.position)
					d.push(a.input.slice(b, a.position))
				}
				0 !== e && Q(a), i.call(M, c) ? M[c](a, c, d) : L(a, 'unknown document directive "' + c + '"')
			}
			if (
				(R(a, !0, -1),
				0 === a.lineIndent &&
				45 === a.input.charCodeAt(a.position) &&
				45 === a.input.charCodeAt(a.position + 1) &&
				45 === a.input.charCodeAt(a.position + 2)
					? ((a.position += 3), R(a, !0, -1))
					: g && K(a, "directives end mark is expected"),
				ac(a, a.lineIndent - 1, m, !1, !0),
				R(a, !0, -1),
				a.checkLineBreaks &&
					r.test(a.input.slice(f, a.position)) &&
					L(a, "non-ASCII line breaks are interpreted as content"),
				a.documents.push(a.result),
				a.position === a.lineStart && S(a))
			) {
				46 === a.input.charCodeAt(a.position) && ((a.position += 3), R(a, !0, -1))
				return
			}
			a.position < a.length - 1 && K(a, "end of the stream or a document separator is expected")
		}
		function ae(a, b) {
			;(a = String(a)),
				(b = b || {}),
				0 !== a.length &&
					(10 !== a.charCodeAt(a.length - 1) && 13 !== a.charCodeAt(a.length - 1) && (a += "\n"),
					65279 === a.charCodeAt(0) && (a = a.slice(1)))
			var c = new I(a, b),
				d = a.indexOf("\0")
			for (
				-1 !== d && ((c.position = d), K(c, "null byte is not allowed in input")), c.input += "\0";
				32 === c.input.charCodeAt(c.position);

			)
				(c.lineIndent += 1), (c.position += 1)
			for (; c.position < c.length - 1; ) ad(c)
			return c.documents
		}
		function af(a, b, c) {
			null !== b && "object" == typeof b && void 0 === c && ((c = b), (b = null))
			var d = ae(a, c)
			if ("function" != typeof b) return d
			for (var e = 0, f = d.length; e < f; e += 1) b(d[e])
		}
		function ag(a, b) {
			var c = ae(a, b)
			if (0 !== c.length) {
				if (1 === c.length) return c[0]
				throw new e("expected a single document in the stream, but found more")
			}
		}
		function ah(a, b, c) {
			return (
				"object" == typeof b && null !== b && void 0 === c && ((c = b), (b = null)),
				af(a, b, d.extend({ schema: g }, c))
			)
		}
		function ai(a, b) {
			return ag(a, d.extend({ schema: g }, b))
		}
		;(b.exports.loadAll = af), (b.exports.load = ag), (b.exports.safeLoadAll = ah), (b.exports.safeLoad = ai)
	},
	21135,
	(a, b, c) => {
		"use strict"
		var d = a.r(99908),
			e = a.r(24762),
			f = a.r(59643),
			g = a.r(92239),
			h = Object.prototype.toString,
			i = Object.prototype.hasOwnProperty,
			j = 9,
			k = 10,
			l = 13,
			m = 32,
			n = 33,
			o = 34,
			p = 35,
			q = 37,
			r = 38,
			s = 39,
			t = 42,
			u = 44,
			v = 45,
			w = 58,
			x = 61,
			y = 62,
			z = 63,
			A = 64,
			B = 91,
			C = 93,
			D = 96,
			E = 123,
			F = 124,
			G = 125,
			H = {}
		;(H[0] = "\\0"),
			(H[7] = "\\a"),
			(H[8] = "\\b"),
			(H[9] = "\\t"),
			(H[10] = "\\n"),
			(H[11] = "\\v"),
			(H[12] = "\\f"),
			(H[13] = "\\r"),
			(H[27] = "\\e"),
			(H[34] = '\\"'),
			(H[92] = "\\\\"),
			(H[133] = "\\N"),
			(H[160] = "\\_"),
			(H[8232] = "\\L"),
			(H[8233] = "\\P")
		var I = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"]
		function J(a, b) {
			var c, d, e, f, g, h, j
			if (null === b) return {}
			for (e = 0, c = {}, f = (d = Object.keys(b)).length; e < f; e += 1)
				(h = String(b[(g = d[e])])),
					"!!" === g.slice(0, 2) && (g = "tag:yaml.org,2002:" + g.slice(2)),
					(j = a.compiledTypeMap.fallback[g]) && i.call(j.styleAliases, h) && (h = j.styleAliases[h]),
					(c[g] = h)
			return c
		}
		function K(a) {
			var b, c, f
			if (((b = a.toString(16).toUpperCase()), a <= 255)) (c = "x"), (f = 2)
			else if (a <= 65535) (c = "u"), (f = 4)
			else if (a <= 0xffffffff) (c = "U"), (f = 8)
			else throw new e("code point within a string may not be greater than 0xFFFFFFFF")
			return "\\" + c + d.repeat("0", f - b.length) + b
		}
		function L(a) {
			;(this.schema = a.schema || f),
				(this.indent = Math.max(1, a.indent || 2)),
				(this.noArrayIndent = a.noArrayIndent || !1),
				(this.skipInvalid = a.skipInvalid || !1),
				(this.flowLevel = d.isNothing(a.flowLevel) ? -1 : a.flowLevel),
				(this.styleMap = J(this.schema, a.styles || null)),
				(this.sortKeys = a.sortKeys || !1),
				(this.lineWidth = a.lineWidth || 80),
				(this.noRefs = a.noRefs || !1),
				(this.noCompatMode = a.noCompatMode || !1),
				(this.condenseFlow = a.condenseFlow || !1),
				(this.implicitTypes = this.schema.compiledImplicit),
				(this.explicitTypes = this.schema.compiledExplicit),
				(this.tag = null),
				(this.result = ""),
				(this.duplicates = []),
				(this.usedDuplicates = null)
		}
		function M(a, b) {
			for (var c, e = d.repeat(" ", b), f = 0, g = -1, h = "", i = a.length; f < i; )
				-1 === (g = a.indexOf("\n", f)) ? ((c = a.slice(f)), (f = i)) : ((c = a.slice(f, g + 1)), (f = g + 1)),
					c.length && "\n" !== c && (h += e),
					(h += c)
			return h
		}
		function N(a, b) {
			return "\n" + d.repeat(" ", a.indent * b)
		}
		function O(a, b) {
			var c, d
			for (c = 0, d = a.implicitTypes.length; c < d; c += 1) if (a.implicitTypes[c].resolve(b)) return !0
			return !1
		}
		function P(a) {
			return a === m || a === j
		}
		function Q(a) {
			return (
				(32 <= a && a <= 126) ||
				(161 <= a && a <= 55295 && 8232 !== a && 8233 !== a) ||
				(57344 <= a && a <= 65533 && 65279 !== a) ||
				(65536 <= a && a <= 1114111)
			)
		}
		function R(a) {
			return Q(a) && !P(a) && 65279 !== a && a !== l && a !== k
		}
		function S(a, b) {
			return (
				Q(a) &&
				65279 !== a &&
				a !== u &&
				a !== B &&
				a !== C &&
				a !== E &&
				a !== G &&
				a !== w &&
				(a !== p || (b && R(b)))
			)
		}
		function T(a) {
			return (
				Q(a) &&
				65279 !== a &&
				!P(a) &&
				a !== v &&
				a !== z &&
				a !== w &&
				a !== u &&
				a !== B &&
				a !== C &&
				a !== E &&
				a !== G &&
				a !== p &&
				a !== r &&
				a !== t &&
				a !== n &&
				a !== F &&
				a !== x &&
				a !== y &&
				a !== s &&
				a !== o &&
				a !== q &&
				a !== A &&
				a !== D
			)
		}
		function U(a) {
			return /^\n* /.test(a)
		}
		var V = 1,
			W = 2,
			X = 3,
			Y = 4,
			Z = 5
		function $(a, b, c, d, e) {
			var f,
				g,
				h,
				i = !1,
				j = !1,
				l = -1 !== d,
				m = -1,
				n = T(a.charCodeAt(0)) && !P(a.charCodeAt(a.length - 1))
			if (b)
				for (f = 0; f < a.length; f++) {
					if (!Q((g = a.charCodeAt(f)))) return Z
					;(h = f > 0 ? a.charCodeAt(f - 1) : null), (n = n && S(g, h))
				}
			else {
				for (f = 0; f < a.length; f++) {
					if ((g = a.charCodeAt(f)) === k)
						(i = !0), l && ((j = j || (f - m - 1 > d && " " !== a[m + 1])), (m = f))
					else if (!Q(g)) return Z
					;(h = f > 0 ? a.charCodeAt(f - 1) : null), (n = n && S(g, h))
				}
				j = j || (l && f - m - 1 > d && " " !== a[m + 1])
			}
			return i || j ? (c > 9 && U(a) ? Z : j ? Y : X) : n && !e(a) ? V : W
		}
		function _(a, b, c, d) {
			a.dump = (function () {
				if (0 === b.length) return "''"
				if (!a.noCompatMode && -1 !== I.indexOf(b)) return "'" + b + "'"
				var f = a.indent * Math.max(1, c),
					g = -1 === a.lineWidth ? -1 : Math.max(Math.min(a.lineWidth, 40), a.lineWidth - f)
				function h(b) {
					return O(a, b)
				}
				switch ($(b, d || (a.flowLevel > -1 && c >= a.flowLevel), a.indent, g, h)) {
					case V:
						return b
					case W:
						return "'" + b.replace(/'/g, "''") + "'"
					case X:
						return "|" + aa(b, a.indent) + ab(M(b, f))
					case Y:
						return ">" + aa(b, a.indent) + ab(M(ac(b, g), f))
					case Z:
						return '"' + ae(b, g) + '"'
					default:
						throw new e("impossible error: invalid scalar style")
				}
			})()
		}
		function aa(a, b) {
			var c = U(a) ? String(b) : "",
				d = "\n" === a[a.length - 1]
			return c + (d && ("\n" === a[a.length - 2] || "\n" === a) ? "+" : d ? "" : "-") + "\n"
		}
		function ab(a) {
			return "\n" === a[a.length - 1] ? a.slice(0, -1) : a
		}
		function ac(a, b) {
			for (
				var c,
					d,
					e = /(\n+)([^\n]*)/g,
					f = (function () {
						var c = a.indexOf("\n")
						return (e.lastIndex = c = -1 !== c ? c : a.length), ad(a.slice(0, c), b)
					})(),
					g = "\n" === a[0] || " " === a[0];
				(d = e.exec(a));

			) {
				var h = d[1],
					i = d[2]
				;(c = " " === i[0]), (f += h + (g || c || "" === i ? "" : "\n") + ad(i, b)), (g = c)
			}
			return f
		}
		function ad(a, b) {
			if ("" === a || " " === a[0]) return a
			for (var c, d, e = / [^ ]/g, f = 0, g = 0, h = 0, i = ""; (c = e.exec(a)); )
				(h = c.index) - f > b && ((d = g > f ? g : h), (i += "\n" + a.slice(f, d)), (f = d + 1)), (g = h)
			return (
				(i += "\n"),
				a.length - f > b && g > f ? (i += a.slice(f, g) + "\n" + a.slice(g + 1)) : (i += a.slice(f)),
				i.slice(1)
			)
		}
		function ae(a) {
			for (var b, c, d, e = "", f = 0; f < a.length; f++) {
				if ((b = a.charCodeAt(f)) >= 55296 && b <= 56319 && (c = a.charCodeAt(f + 1)) >= 56320 && c <= 57343) {
					;(e += K((b - 55296) * 1024 + c - 56320 + 65536)), f++
					continue
				}
				e += !(d = H[b]) && Q(b) ? a[f] : d || K(b)
			}
			return e
		}
		function af(a, b, c) {
			var d,
				e,
				f = "",
				g = a.tag
			for (d = 0, e = c.length; d < e; d += 1)
				ak(a, b, c[d], !1, !1) && (0 !== d && (f += "," + (a.condenseFlow ? "" : " ")), (f += a.dump))
			;(a.tag = g), (a.dump = "[" + f + "]")
		}
		function ag(a, b, c, d) {
			var e,
				f,
				g = "",
				h = a.tag
			for (e = 0, f = c.length; e < f; e += 1)
				ak(a, b + 1, c[e], !0, !0) &&
					((d && 0 === e) || (g += N(a, b)),
					a.dump && k === a.dump.charCodeAt(0) ? (g += "-") : (g += "- "),
					(g += a.dump))
			;(a.tag = h), (a.dump = g || "[]")
		}
		function ah(a, b, c) {
			var d,
				e,
				f,
				g,
				h,
				i = "",
				j = a.tag,
				k = Object.keys(c)
			for (d = 0, e = k.length; d < e; d += 1)
				(h = ""),
					0 !== d && (h += ", "),
					a.condenseFlow && (h += '"'),
					(g = c[(f = k[d])]),
					ak(a, b, f, !1, !1) &&
						(a.dump.length > 1024 && (h += "? "),
						(h += a.dump + (a.condenseFlow ? '"' : "") + ":" + (a.condenseFlow ? "" : " ")),
						ak(a, b, g, !1, !1) && ((h += a.dump), (i += h)))
			;(a.tag = j), (a.dump = "{" + i + "}")
		}
		function ai(a, b, c, d) {
			var f,
				g,
				h,
				i,
				j,
				l,
				m = "",
				n = a.tag,
				o = Object.keys(c)
			if (!0 === a.sortKeys) o.sort()
			else if ("function" == typeof a.sortKeys) o.sort(a.sortKeys)
			else if (a.sortKeys) throw new e("sortKeys must be a boolean or a function")
			for (f = 0, g = o.length; f < g; f += 1)
				(l = ""),
					(d && 0 === f) || (l += N(a, b)),
					(i = c[(h = o[f])]),
					ak(a, b + 1, h, !0, !0, !0) &&
						((j = (null !== a.tag && "?" !== a.tag) || (a.dump && a.dump.length > 1024)) &&
							(a.dump && k === a.dump.charCodeAt(0) ? (l += "?") : (l += "? ")),
						(l += a.dump),
						j && (l += N(a, b)),
						ak(a, b + 1, i, !0, j) &&
							(a.dump && k === a.dump.charCodeAt(0) ? (l += ":") : (l += ": "), (l += a.dump), (m += l)))
			;(a.tag = n), (a.dump = m || "{}")
		}
		function aj(a, b, c) {
			var d, f, g, j, k, l
			for (g = 0, j = (f = c ? a.explicitTypes : a.implicitTypes).length; g < j; g += 1)
				if (
					((k = f[g]).instanceOf || k.predicate) &&
					(!k.instanceOf || ("object" == typeof b && b instanceof k.instanceOf)) &&
					(!k.predicate || k.predicate(b))
				) {
					if (((a.tag = c ? k.tag : "?"), k.represent)) {
						if (((l = a.styleMap[k.tag] || k.defaultStyle), "[object Function]" === h.call(k.represent)))
							d = k.represent(b, l)
						else if (i.call(k.represent, l)) d = k.represent[l](b, l)
						else throw new e("!<" + k.tag + '> tag resolver accepts not "' + l + '" style')
						a.dump = d
					}
					return !0
				}
			return !1
		}
		function ak(a, b, c, d, f, g) {
			;(a.tag = null), (a.dump = c), aj(a, c, !1) || aj(a, c, !0)
			var i = h.call(a.dump)
			d && (d = a.flowLevel < 0 || a.flowLevel > b)
			var j,
				k,
				l = "[object Object]" === i || "[object Array]" === i
			if (
				(l && (k = -1 !== (j = a.duplicates.indexOf(c))),
				((null !== a.tag && "?" !== a.tag) || k || (2 !== a.indent && b > 0)) && (f = !1),
				k && a.usedDuplicates[j])
			)
				a.dump = "*ref_" + j
			else {
				if ((l && k && !a.usedDuplicates[j] && (a.usedDuplicates[j] = !0), "[object Object]" === i))
					d && 0 !== Object.keys(a.dump).length
						? (ai(a, b, a.dump, f), k && (a.dump = "&ref_" + j + a.dump))
						: (ah(a, b, a.dump), k && (a.dump = "&ref_" + j + " " + a.dump))
				else if ("[object Array]" === i) {
					var m = a.noArrayIndent && b > 0 ? b - 1 : b
					d && 0 !== a.dump.length
						? (ag(a, m, a.dump, f), k && (a.dump = "&ref_" + j + a.dump))
						: (af(a, m, a.dump), k && (a.dump = "&ref_" + j + " " + a.dump))
				} else if ("[object String]" === i) "?" !== a.tag && _(a, a.dump, b, g)
				else {
					if (a.skipInvalid) return !1
					throw new e("unacceptable kind of an object to dump " + i)
				}
				null !== a.tag && "?" !== a.tag && (a.dump = "!<" + a.tag + "> " + a.dump)
			}
			return !0
		}
		function al(a, b) {
			var c,
				d,
				e = [],
				f = []
			for (am(a, e, f), c = 0, d = f.length; c < d; c += 1) b.duplicates.push(e[f[c]])
			b.usedDuplicates = Array(d)
		}
		function am(a, b, c) {
			var d, e, f
			if (null !== a && "object" == typeof a)
				if (-1 !== (e = b.indexOf(a))) -1 === c.indexOf(e) && c.push(e)
				else if ((b.push(a), Array.isArray(a))) for (e = 0, f = a.length; e < f; e += 1) am(a[e], b, c)
				else for (e = 0, f = (d = Object.keys(a)).length; e < f; e += 1) am(a[d[e]], b, c)
		}
		function an(a, b) {
			var c = new L((b = b || {}))
			return (c.noRefs || al(a, c), ak(c, 0, a, !0, !0)) ? c.dump + "\n" : ""
		}
		function ao(a, b) {
			return an(a, d.extend({ schema: g }, b))
		}
		;(b.exports.dump = an), (b.exports.safeDump = ao)
	},
	44927,
	(a, b, c) => {
		"use strict"
		var d = a.r(35092),
			e = a.r(21135)
		function f(a) {
			return function () {
				throw Error("Function " + a + " is deprecated and cannot be used.")
			}
		}
		;(b.exports.Type = a.r(75483)),
			(b.exports.Schema = a.r(98488)),
			(b.exports.FAILSAFE_SCHEMA = a.r(83962)),
			(b.exports.JSON_SCHEMA = a.r(86855)),
			(b.exports.CORE_SCHEMA = a.r(34073)),
			(b.exports.DEFAULT_SAFE_SCHEMA = a.r(92239)),
			(b.exports.DEFAULT_FULL_SCHEMA = a.r(59643)),
			(b.exports.load = d.load),
			(b.exports.loadAll = d.loadAll),
			(b.exports.safeLoad = d.safeLoad),
			(b.exports.safeLoadAll = d.safeLoadAll),
			(b.exports.dump = e.dump),
			(b.exports.safeDump = e.safeDump),
			(b.exports.YAMLException = a.r(24762)),
			(b.exports.MINIMAL_SCHEMA = a.r(83962)),
			(b.exports.SAFE_SCHEMA = a.r(92239)),
			(b.exports.DEFAULT_SCHEMA = a.r(59643)),
			(b.exports.scan = f("scan")),
			(b.exports.parse = f("parse")),
			(b.exports.compose = f("compose")),
			(b.exports.addConstructor = f("addConstructor"))
	},
	52207,
	(a, b, c) => {
		"use strict"
		b.exports = a.r(44927)
	},
	46515,
	(__turbopack_context__, module, exports) => {
		"use strict"
		let yaml = __turbopack_context__.r(52207),
			engines = (exports = module.exports)
		;(engines.yaml = { parse: yaml.safeLoad.bind(yaml), stringify: yaml.safeDump.bind(yaml) }),
			(engines.json = {
				parse: JSON.parse.bind(JSON),
				stringify: function (a, b) {
					let c = Object.assign({ replacer: null, space: 2 }, b)
					return JSON.stringify(a, c.replacer, c.space)
				},
			}),
			(engines.javascript = {
				parse: function parse(str, options, wrap) {
					try {
						return (
							!1 !== wrap && (str = "(function() {\nreturn " + str.trim() + ";\n}());"), eval(str) || {}
						)
					} catch (err) {
						if (!1 !== wrap && /(unexpected|identifier)/i.test(err.message)) return parse(str, options, !1)
						throw SyntaxError(err)
					}
				},
				stringify: function () {
					throw Error("stringifying JavaScript is not supported")
				},
			})
	},
	62444,
	(a, b, c) => {
		"use strict"
		b.exports = function (a) {
			return "string" == typeof a && "\uFEFF" === a.charAt(0) ? a.slice(1) : a
		}
	},
	6138,
	(a, b, c) => {
		"use strict"
		let d = a.r(62444),
			e = a.r(12917)
		;(c.define = function (a, b, c) {
			Reflect.defineProperty(a, b, { enumerable: !1, configurable: !0, writable: !0, value: c })
		}),
			(c.isBuffer = function (a) {
				return "buffer" === e(a)
			}),
			(c.isObject = function (a) {
				return "object" === e(a)
			}),
			(c.toBuffer = function (a) {
				return "string" == typeof a ? Buffer.from(a) : a
			}),
			(c.toString = function (a) {
				if (c.isBuffer(a)) return d(String(a))
				if ("string" != typeof a) throw TypeError("expected input to be a string or buffer")
				return d(a)
			}),
			(c.arrayify = function (a) {
				return a ? (Array.isArray(a) ? a : [a]) : []
			}),
			(c.startsWith = function (a, b, c) {
				return "number" != typeof c && (c = b.length), a.slice(0, c) === b
			})
	},
	23500,
	(a, b, c) => {
		"use strict"
		let d = a.r(46515),
			e = a.r(6138)
		b.exports = function (a) {
			let b = Object.assign({}, a)
			return (
				(b.delimiters = e.arrayify(b.delims || b.delimiters || "---")),
				1 === b.delimiters.length && b.delimiters.push(b.delimiters[0]),
				(b.language = (b.language || b.lang || "yaml").toLowerCase()),
				(b.engines = Object.assign({}, d, b.parsers, b.engines)),
				b
			)
		}
	},
	79803,
	(a, b, c) => {
		"use strict"
		function d(a) {
			switch (a.toLowerCase()) {
				case "js":
				case "javascript":
					return "javascript"
				case "coffee":
				case "coffeescript":
				case "cson":
					return "coffee"
				case "yaml":
				case "yml":
					return "yaml"
				default:
					return a
			}
		}
		b.exports = function (a, b) {
			let c = b.engines[a] || b.engines[d(a)]
			if (void 0 === c) throw Error('gray-matter engine "' + a + '" is not registered')
			return "function" == typeof c && (c = { parse: c }), c
		}
	},
	90722,
	(a, b, c) => {
		"use strict"
		let d = a.r(12917),
			e = a.r(79803),
			f = a.r(23500)
		function g(a) {
			return "\n" !== a.slice(-1) ? a + "\n" : a
		}
		b.exports = function (a, b, c) {
			if (null == b && null == c)
				switch (d(a)) {
					case "object":
						;(b = a.data), (c = {})
						break
					case "string":
						return a
					default:
						throw TypeError("expected file to be a string or object")
				}
			let h = a.content,
				i = f(c)
			if (null == b) {
				if (!i.data) return a
				b = i.data
			}
			let j = a.language || i.language,
				k = e(j, i)
			if ("function" != typeof k.stringify) throw TypeError('expected "' + j + '.stringify" to be a function')
			b = Object.assign({}, a.data, b)
			let l = i.delimiters[0],
				m = i.delimiters[1],
				n = k.stringify(b, c).trim(),
				o = ""
			return (
				"{}" !== n && (o = g(l) + g(n) + g(m)),
				"string" == typeof a.excerpt &&
					"" !== a.excerpt &&
					-1 === h.indexOf(a.excerpt.trim()) &&
					(o += g(a.excerpt) + g(m)),
				o + g(h)
			)
		}
	},
	66183,
	(a, b, c) => {
		"use strict"
		let d = a.r(23500)
		b.exports = function (a, b) {
			let c = d(b)
			if ((null == a.data && (a.data = {}), "function" == typeof c.excerpt)) return c.excerpt(a, c)
			let e = a.data.excerpt_separator || c.excerpt_separator
			if (null == e && (!1 === c.excerpt || null == c.excerpt)) return a
			let f = "string" == typeof c.excerpt ? c.excerpt : e || c.delimiters[0],
				g = a.content.indexOf(f)
			return -1 !== g && (a.excerpt = a.content.slice(0, g)), a
		}
	},
	31310,
	(a, b, c) => {
		"use strict"
		let d = a.r(12917),
			e = a.r(90722),
			f = a.r(6138)
		b.exports = function (a) {
			return (
				"object" !== d(a) && (a = { content: a }),
				"object" !== d(a.data) && (a.data = {}),
				a.contents && null == a.content && (a.content = a.contents),
				f.define(a, "orig", f.toBuffer(a.content)),
				f.define(a, "language", a.language || ""),
				f.define(a, "matter", a.matter || ""),
				f.define(a, "stringify", function (b, c) {
					return c && c.language && (a.language = c.language), e(a, b, c)
				}),
				(a.content = f.toString(a.content)),
				(a.isEmpty = !1),
				(a.excerpt = ""),
				a
			)
		}
	},
	48082,
	(a, b, c) => {
		"use strict"
		let d = a.r(79803),
			e = a.r(23500)
		b.exports = function (a, b, c) {
			let f = e(c),
				g = d(a, f)
			if ("function" != typeof g.parse) throw TypeError('expected "' + a + '.parse" to be a function')
			return g.parse(b, f)
		}
	},
	28860,
	(a, b, c) => {
		"use strict"
		let d = a.r(22734),
			e = a.r(2621),
			f = a.r(23500),
			g = a.r(90722),
			h = a.r(66183),
			i = a.r(46515),
			j = a.r(31310),
			k = a.r(48082),
			l = a.r(6138)
		function m(a, b) {
			if ("" === a) return { data: {}, content: a, excerpt: "", orig: a }
			let c = j(a),
				d = m.cache[c.content]
			if (!b) {
				if (d) return ((c = Object.assign({}, d)).orig = d.orig), c
				m.cache[c.content] = c
			}
			return n(c, b)
		}
		function n(a, b) {
			let c = f(b),
				d = c.delimiters[0],
				g = "\n" + c.delimiters[1],
				i = a.content
			c.language && (a.language = c.language)
			let j = d.length
			if (!l.startsWith(i, d, j)) return h(a, c), a
			if (i.charAt(j) === d.slice(-1)) return a
			let n = (i = i.slice(j)).length,
				o = m.language(i, c)
			o.name && ((a.language = o.name), (i = i.slice(o.raw.length)))
			let p = i.indexOf(g)
			return (
				-1 === p && (p = n),
				(a.matter = i.slice(0, p)),
				"" === a.matter.replace(/^\s*#[^\n]+/gm, "").trim()
					? ((a.isEmpty = !0), (a.empty = a.content), (a.data = {}))
					: (a.data = k(a.language, a.matter, c)),
				p === n
					? (a.content = "")
					: ((a.content = i.slice(p + g.length)),
						"\r" === a.content[0] && (a.content = a.content.slice(1)),
						"\n" === a.content[0] && (a.content = a.content.slice(1))),
				h(a, c),
				(!0 === c.sections || "function" == typeof c.section) && e(a, c.section),
				a
			)
		}
		;(m.engines = i),
			(m.stringify = function (a, b, c) {
				return "string" == typeof a && (a = m(a, c)), g(a, b, c)
			}),
			(m.read = function (a, b) {
				let c = m(d.readFileSync(a, "utf8"), b)
				return (c.path = a), c
			}),
			(m.test = function (a, b) {
				return l.startsWith(a, f(b).delimiters[0])
			}),
			(m.language = function (a, b) {
				let c = f(b).delimiters[0]
				m.test(a) && (a = a.slice(c.length))
				let d = a.slice(0, a.search(/\r?\n/))
				return { raw: d, name: d ? d.trim() : "" }
			}),
			(m.cache = {}),
			(m.clearCache = function () {
				m.cache = {}
			}),
			(b.exports = m)
	},
	2213,
	71886,
	20223,
	(a) => {
		"use strict"
		var b,
			c = a.i(22734),
			d = a.i(14747),
			e = a.i(28860),
			f = a.i(26418)
		let g = /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
			h = /^(1[0-2]|[1-9]):([0-5][0-9])(am|pm)$/i,
			i = f.z.object({
				title: f.z.string().min(1, "Title is required"),
				slug: f.z.string().regex(g, "Slug must match ^[a-z0-9]+(?:-[a-z0-9]+)*$"),
				description: f.z.string().min(1, "Description is required"),
				tags: f.z
					.array(f.z.string())
					.max(15, "Maximum 15 tags allowed")
					.transform((a) => a.map((a) => a.toLowerCase().trim())),
				status: f.z.enum(["draft", "published"]),
				publish_date: f.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD format"),
				publish_time_pt: f.z.string().regex(h, "Must be h:mmam/pm format (e.g., 9:00am)"),
				source: f.z.enum(["Office Hours", "After Hours", "Roo Cast"]).optional(),
				featured: f.z.boolean().optional(),
			})
		function j() {
			let a = new Intl.DateTimeFormat("en-US", {
					timeZone: "America/Los_Angeles",
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					hour12: !1,
				}).formatToParts(new Date()),
				b = (b) => a.find((a) => a.type === b)?.value ?? ""
			return {
				date: `${b("year")}-${b("month")}-${b("day")}`,
				minutes: 60 * parseInt(b("hour"), 10) + parseInt(b("minute"), 10),
			}
		}
		function k(a) {
			let b = a.match(/^(1[0-2]|[1-9]):([0-5][0-9])(am|pm)$/i)
			if (!b) throw Error(`Invalid time format: ${a}. Expected h:mmam/pm (e.g., 9:00am)`)
			let c = b[1],
				d = b[2],
				e = b[3]
			if (!c || !d || !e) throw Error(`Invalid time format: ${a}. Expected h:mmam/pm (e.g., 9:00am)`)
			let f = parseInt(c, 10),
				g = parseInt(d, 10),
				h = "pm" === e.toLowerCase()
			return 12 === f ? (f = 12 * !!h) : h && (f += 12), 60 * f + g
		}
		function l(a, b) {
			if ("published" !== a.status) return !1
			let c = k(a.publish_time_pt)
			return !!(b.date > a.publish_date) || (b.date === a.publish_date && !!(b.minutes >= c))
		}
		function m(a) {
			return a
		}
		function n(a) {
			return a.replace(/[<>]/g, "")
		}
		function o(a) {
			return Math.max(
				1,
				Math.ceil(
					n(
						a
							.replace(/```[\s\S]*?```/g, "")
							.replace(/`[^`]+`/g, "")
							.replace(/!\[.*?\]\(.*?\)/g, "")
							.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
							.replace(/^#{1,6}\s+/gm, "")
							.replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, "$1")
							.replace(/^[-*_]{3,}\s*$/gm, ""),
					)
						.trim()
						.split(/\s+/)
						.filter((a) => a.length > 0).length / 200,
				),
			)
		}
		function p(a) {
			return `${a} min read`
		}
		function q(a) {
			return a.filter((a) => !0 === a.featured)
		}
		a.s(
			[
				"calculateReadingTime",
				() => o,
				"formatPostDatePt",
				() => m,
				"formatReadingTime",
				() => p,
				"getNowPt",
				() => j,
				"isPublished",
				() => l,
				"parsePublishTimePt",
				() => k,
			],
			71886,
		)
		let r = d.default.join(process.cwd(), "src/content/blog"),
			s = 12
		function t(a) {
			let b = j()
			if (!c.default.existsSync(r)) return []
			let f = c.default.readdirSync(r).filter((a) => a.endsWith(".md")),
				g = [],
				h = new Map()
			for (let j of f) {
				let f = d.default.join(r, j),
					k = c.default.readFileSync(f, "utf8"),
					{ data: m, content: n } = (0, e.default)(k),
					o = i.safeParse(m)
				if (!o.success) {
					let a = o.error.errors.map((a) => `${a.path.join(".")}: ${a.message}`).join(", ")
					throw Error(`Invalid frontmatter in ${j}: ${a}`)
				}
				let p = o.data
				if (h.has(p.slug)) throw Error(`Duplicate slug "${p.slug}" found in ${j} and ${h.get(p.slug)}`)
				h.set(p.slug, j)
				let q = { ...p, content: n, filepath: j }
				a?.includeDrafts ? g.push(q) : l(q, b) && g.push(q)
			}
			return g.sort((a, b) => {
				if (a.publish_date !== b.publish_date) return b.publish_date.localeCompare(a.publish_date)
				let c = k(a.publish_time_pt)
				return k(b.publish_time_pt) - c
			})
		}
		function u(a = 1, b) {
			let c = t(b),
				d = c.length,
				e = Math.ceil(d / s),
				f = Math.max(1, Math.min(a, e || 1)),
				g = (f - 1) * s,
				h = g + s
			return {
				posts: c.slice(g, h),
				currentPage: f,
				totalPages: e,
				totalPosts: d,
				hasNextPage: f < e,
				hasPreviousPage: f > 1,
			}
		}
		function v(a) {
			let b = j()
			if (!c.default.existsSync(r)) return null
			for (let f of c.default.readdirSync(r).filter((a) => a.endsWith(".md"))) {
				let g = d.default.join(r, f),
					h = c.default.readFileSync(g, "utf8"),
					{ data: j, content: k } = (0, e.default)(h),
					m = i.safeParse(j)
				if (!m.success) continue
				let n = m.data
				if (n.slug === a) {
					let a = { ...n, content: k, filepath: f }
					if (l(a, b)) return a
					break
				}
			}
			return null
		}
		function w(a) {
			let b = t(),
				c = b.findIndex((b) => b.slug === a)
			return -1 === c
				? { previous: null, next: null }
				: { previous: c > 0 ? (b[c - 1] ?? null) : null, next: c < b.length - 1 ? (b[c + 1] ?? null) : null }
		}
		function x() {
			return q(t())
		}
		a.s(
			[
				"POSTS_PER_PAGE",
				0,
				s,
				"getAdjacentPosts",
				() => w,
				"getAllBlogPosts",
				() => t,
				"getBlogPostBySlug",
				() => v,
				"getCuratedBlogPosts",
				() => x,
				"getPaginatedBlogPosts",
				() => u,
			],
			20223,
		)
		var y = void 0,
			z = "u" > typeof globalThis ? globalThis : y
		"u" < typeof self && (z.self = z), "u" < typeof File && (z.File = function () {})
		var A = Array.prototype,
			B = A.forEach,
			C = A.indexOf,
			D = null == z ? void 0 : z.navigator,
			E = null == z ? void 0 : z.document,
			F = null == z ? void 0 : z.location,
			G = null == z ? void 0 : z.fetch,
			H =
				null != z && z.XMLHttpRequest && "withCredentials" in new z.XMLHttpRequest()
					? z.XMLHttpRequest
					: void 0,
			I = null == z ? void 0 : z.AbortController,
			J = null == D ? void 0 : D.userAgent,
			K = null != y ? y : {},
			L = { DEBUG: !1, LIB_VERSION: "1.336.4" }
		function M(a, b, c, d, e, f, g) {
			try {
				var h = a[f](g),
					i = h.value
			} catch (a) {
				return void c(a)
			}
			h.done ? b(i) : Promise.resolve(i).then(d, e)
		}
		function N(a) {
			return function () {
				var b = this,
					c = arguments
				return new Promise(function (d, e) {
					var f = a.apply(b, c)
					function g(a) {
						M(f, d, e, g, h, "next", a)
					}
					function h(a) {
						M(f, d, e, g, h, "throw", a)
					}
					g(void 0)
				})
			}
		}
		function O() {
			return (O = Object.assign.bind()).apply(null, arguments)
		}
		function P(a, b) {
			if (null == a) return {}
			var c = {}
			for (var d in a)
				if ({}.hasOwnProperty.call(a, d)) {
					if (-1 !== b.indexOf(d)) continue
					c[d] = a[d]
				}
			return c
		}
		var Q = [
				"amazonbot",
				"amazonproductbot",
				"app.hypefactors.com",
				"applebot",
				"archive.org_bot",
				"awariobot",
				"backlinksextendedbot",
				"baiduspider",
				"bingbot",
				"bingpreview",
				"chrome-lighthouse",
				"dataforseobot",
				"deepscan",
				"duckduckbot",
				"facebookexternal",
				"facebookcatalog",
				"http://yandex.com/bots",
				"hubspot",
				"ia_archiver",
				"leikibot",
				"linkedinbot",
				"meta-externalagent",
				"mj12bot",
				"msnbot",
				"nessus",
				"petalbot",
				"pinterest",
				"prerender",
				"rogerbot",
				"screaming frog",
				"sebot-wa",
				"sitebulb",
				"slackbot",
				"slurp",
				"trendictionbot",
				"turnitin",
				"twitterbot",
				"vercel-screenshot",
				"vercelbot",
				"yahoo! slurp",
				"yandexbot",
				"zoombot",
				"bot.htm",
				"bot.php",
				"(bot;",
				"bot/",
				"crawler",
				"ahrefsbot",
				"ahrefssiteaudit",
				"semrushbot",
				"siteauditbot",
				"splitsignalbot",
				"gptbot",
				"oai-searchbot",
				"chatgpt-user",
				"perplexitybot",
				"better uptime bot",
				"sentryuptimebot",
				"uptimerobot",
				"headlesschrome",
				"cypress",
				"google-hoteladsverifier",
				"adsbot-google",
				"apis-google",
				"duplexweb-google",
				"feedfetcher-google",
				"google favicon",
				"google web preview",
				"google-read-aloud",
				"googlebot",
				"googleother",
				"google-cloudvertexbot",
				"googleweblight",
				"mediapartners-google",
				"storebot-google",
				"google-inspectiontool",
				"bytespider",
			],
			R = function (a, b) {
				if ((void 0 === b && (b = []), !a)) return !1
				var c = a.toLowerCase()
				return Q.concat(b).some((a) => {
					var b = a.toLowerCase()
					return -1 !== c.indexOf(b)
				})
			},
			S = [
				"$snapshot",
				"$pageview",
				"$pageleave",
				"$set",
				"survey dismissed",
				"survey sent",
				"survey shown",
				"$identify",
				"$groupidentify",
				"$create_alias",
				"$$client_ingestion_warning",
				"$web_experiment_applied",
				"$feature_enrollment_update",
				"$feature_flag_called",
			]
		function T(a, b) {
			return -1 !== a.indexOf(b)
		}
		var U = function (a) {
				return a.trim()
			},
			V = function (a) {
				return a.replace(/^\$/, "")
			},
			W = Array.isArray,
			X = Object.prototype,
			Y = X.hasOwnProperty,
			Z = X.toString,
			$ =
				W ||
				function (a) {
					return "[object Array]" === Z.call(a)
				},
			_ = (a) => "function" == typeof a,
			aa = (a) => a === Object(a) && !$(a),
			ab = (a) => {
				if (aa(a)) {
					for (var b in a) if (Y.call(a, b)) return !1
					return !0
				}
				return !1
			},
			ac = (a) => void 0 === a,
			ad = (a) => "[object String]" == Z.call(a),
			ae = (a) => ad(a) && 0 === a.trim().length,
			af = (a) => null === a,
			ag = (a) => ac(a) || af(a),
			ah = (a) => "[object Number]" == Z.call(a) && a == a,
			ai = (a) => ah(a) && a > 0,
			aj = (a) => "[object Boolean]" === Z.call(a),
			ak = (a) => a instanceof FormData,
			al = (a) => T(S, a)
		function am(a) {
			return null === a || "object" != typeof a
		}
		function an(a, b) {
			return Object.prototype.toString.call(a) === "[object " + b + "]"
		}
		function ao(a) {
			return (
				!ac(Event) &&
				(function (a, b) {
					try {
						return a instanceof b
					} catch (a) {
						return !1
					}
				})(a, Event)
			)
		}
		var ap = [!0, "true", 1, "1", "yes"],
			aq = (a) => T(ap, a),
			ar = [!1, "false", 0, "0", "no"]
		function as(a, b, c, d, e) {
			return (
				b > c && (d.warn("min cannot be greater than max."), (b = c)),
				ah(a)
					? a > c
						? (d.warn(" cannot be  greater than max: " + c + ". Using max value instead."), c)
						: a < b
							? (d.warn(" cannot be less than min: " + b + ". Using min value instead."), b)
							: a
					: (d.warn(" must be a number. using max or fallback. max: " + c + ", fallback: " + e),
						as(e || c, b, c, d))
			)
		}
		class at {
			constructor(a) {
				;(this.t = {}),
					(this.i = a.i),
					(this.o = as(a.bucketSize, 0, 100, a.h)),
					(this.m = as(a.refillRate, 0, this.o, a.h)),
					(this.$ = as(a.refillInterval, 0, 864e5, a.h))
			}
			S(a, b) {
				var c = Math.floor((b - a.lastAccess) / this.$)
				if (c > 0) {
					var d = c * this.m
					;(a.tokens = Math.min(a.tokens + d, this.o)), (a.lastAccess = a.lastAccess + c * this.$)
				}
			}
			consumeRateLimit(a) {
				var b,
					c = Date.now(),
					d = String(a),
					e = this.t[d]
				return (
					e ? this.S(e, c) : ((e = { tokens: this.o, lastAccess: c }), (this.t[d] = e)),
					0 === e.tokens ||
						(e.tokens--, 0 === e.tokens && (null == (b = this.i) || b.call(this, a)), 0 === e.tokens)
				)
			}
			stop() {
				this.t = {}
			}
		}
		var au,
			av,
			aw,
			ax = "Mobile",
			ay = "iOS",
			az = "Android",
			aA = "Tablet",
			aB = az + " " + aA,
			aC = "iPad",
			aD = "Apple",
			aE = aD + " Watch",
			aF = "Safari",
			aG = "BlackBerry",
			aH = "Samsung",
			aI = aH + "Browser",
			aJ = aH + " Internet",
			aK = "Chrome",
			aL = aK + " OS",
			aM = aK + " " + ay,
			aN = "Internet Explorer",
			aO = aN + " " + ax,
			aP = "Opera",
			aQ = aP + " Mini",
			aR = "Edge",
			aS = "Microsoft " + aR,
			aT = "Firefox",
			aU = aT + " " + ay,
			aV = "Nintendo",
			aW = "PlayStation",
			aX = "Xbox",
			aY = az + " " + ax,
			aZ = ax + " " + aF,
			a$ = "Windows",
			a_ = a$ + " Phone",
			a0 = "Nokia",
			a1 = "Ouya",
			a2 = "Generic",
			a3 = a2 + " " + ax.toLowerCase(),
			a4 = a2 + " " + aA.toLowerCase(),
			a5 = "Konqueror",
			a6 = "(\\d+(\\.\\d+)?)",
			a7 = RegExp("Version/" + a6),
			a8 = RegExp(aX, "i"),
			a9 = RegExp(aW + " \\w+", "i"),
			ba = RegExp(aV + " \\w+", "i"),
			bb = RegExp(aG + "|PlayBook|BB10", "i"),
			bc = {
				"NT3.51": "NT 3.11",
				"NT4.0": "NT 4.0",
				"5.0": "2000",
				5.1: "XP",
				5.2: "XP",
				"6.0": "Vista",
				6.1: "7",
				6.2: "8",
				6.3: "8.1",
				6.4: "10",
				"10.0": "10",
			},
			bd = (a, b) =>
				(b && T(b, aD)) ||
				(function (a) {
					return T(a, aF) && !T(a, aK) && !T(a, az)
				})(a),
			be = function (a, b) {
				return (
					(b = b || ""),
					T(a, " OPR/") && T(a, "Mini")
						? aQ
						: T(a, " OPR/")
							? aP
							: bb.test(a)
								? aG
								: T(a, "IE" + ax) || T(a, "WPDesktop")
									? aO
									: T(a, aI)
										? aJ
										: T(a, aR) || T(a, "Edg/")
											? aS
											: T(a, "FBIOS")
												? "Facebook " + ax
												: T(a, "UCWEB") || T(a, "UCBrowser")
													? "UC Browser"
													: T(a, "CriOS")
														? aM
														: T(a, "CrMo") || T(a, aK)
															? aK
															: T(a, az) && T(a, aF)
																? aY
																: T(a, "FxiOS")
																	? aU
																	: T(a.toLowerCase(), a5.toLowerCase())
																		? a5
																		: bd(a, b)
																			? T(a, ax)
																				? aZ
																				: aF
																			: T(a, aT)
																				? aT
																				: T(a, "MSIE") || T(a, "Trident/")
																					? aN
																					: T(a, "Gecko")
																						? aT
																						: ""
				)
			},
			bf = {
				[aO]: [RegExp("rv:" + a6)],
				[aS]: [RegExp(aR + "?\\/" + a6)],
				[aK]: [RegExp("(" + aK + "|CrMo)\\/" + a6)],
				[aM]: [RegExp("CriOS\\/" + a6)],
				"UC Browser": [RegExp("(UCBrowser|UCWEB)\\/" + a6)],
				[aF]: [a7],
				[aZ]: [a7],
				[aP]: [RegExp("(Opera|OPR)\\/" + a6)],
				[aT]: [RegExp(aT + "\\/" + a6)],
				[aU]: [RegExp("FxiOS\\/" + a6)],
				[a5]: [RegExp("Konqueror[:/]?" + a6, "i")],
				[aG]: [RegExp(aG + " " + a6), a7],
				[aY]: [RegExp("android\\s" + a6, "i")],
				[aJ]: [RegExp(aI + "\\/" + a6)],
				[aN]: [RegExp("(rv:|MSIE )" + a6)],
				Mozilla: [RegExp("rv:" + a6)],
			},
			bg = function (a, b) {
				var c = bf[be(a, b)]
				if (ac(c)) return null
				for (var d = 0; d < c.length; d++) {
					var e = c[d],
						f = a.match(e)
					if (f) return parseFloat(f[f.length - 2])
				}
				return null
			},
			bh = [
				[RegExp(aX + "; " + aX + " (.*?)[);]", "i"), (a) => [aX, (a && a[1]) || ""]],
				[RegExp(aV, "i"), [aV, ""]],
				[RegExp(aW, "i"), [aW, ""]],
				[bb, [aG, ""]],
				[
					RegExp(a$, "i"),
					(a, b) => {
						if (/Phone/.test(b) || /WPDesktop/.test(b)) return [a_, ""]
						if (new RegExp(ax).test(b) && !/IEMobile\b/.test(b)) return [a$ + " " + ax, ""]
						var c = /Windows NT ([0-9.]+)/i.exec(b)
						if (c && c[1]) {
							var d = bc[c[1]] || ""
							return /arm/i.test(b) && (d = "RT"), [a$, d]
						}
						return [a$, ""]
					},
				],
				[
					/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
					(a) => (a && a[3] ? [ay, [a[3], a[4], a[5] || "0"].join(".")] : [ay, ""]),
				],
				[
					/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
					(a) => {
						var b = ""
						return a && a.length >= 3 && (b = ac(a[2]) ? a[3] : a[2]), ["watchOS", b]
					},
				],
				[
					RegExp("(" + az + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + az + ")", "i"),
					(a) => (a && a[2] ? [az, [a[2], a[3], a[4] || "0"].join(".")] : [az, ""]),
				],
				[
					/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
					(a) => {
						var b = ["Mac OS X", ""]
						if (a && a[1]) {
							var c = [a[1], a[2], a[3] || "0"]
							b[1] = c.join(".")
						}
						return b
					},
				],
				[/Mac/i, ["Mac OS X", ""]],
				[/CrOS/, [aL, ""]],
				[/Linux|debian/i, ["Linux", ""]],
			],
			bi = function (a) {
				return ba.test(a)
					? aV
					: a9.test(a)
						? aW
						: a8.test(a)
							? aX
							: RegExp(a1, "i").test(a)
								? a1
								: RegExp("(" + a_ + "|WPDesktop)", "i").test(a)
									? a_
									: /iPad/.test(a)
										? aC
										: /iPod/.test(a)
											? "iPod Touch"
											: /iPhone/.test(a)
												? "iPhone"
												: /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(a)
													? aE
													: bb.test(a)
														? aG
														: /(kobo)\s(ereader|touch)/i.test(a)
															? "Kobo"
															: RegExp(a0, "i").test(a)
																? a0
																: /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(a) ||
																	  /(kf[a-z]+)( bui|\)).+silk\//i.test(a)
																	? "Kindle Fire"
																	: /(Android|ZTE)/i.test(a)
																		? (new RegExp(ax).test(a) &&
																				!/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(
																					a,
																				)) ||
																			(/pixel[\daxl ]{1,6}/i.test(a) &&
																				!/pixel c/i.test(a)) ||
																			/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(
																				a,
																			) ||
																			(/lmy47v/i.test(a) && !/QTAQZ3/i.test(a))
																			? az
																			: aB
																		: RegExp("(pda|" + ax + ")", "i").test(a)
																			? a3
																			: RegExp(aA, "i").test(a) &&
																				  !RegExp(aA + " pc", "i").test(a)
																				? a4
																				: ""
			},
			bj = (a) => a instanceof Error
		function bk(a) {
			var b = globalThis._posthogChunkIds
			if (b) {
				var c = Object.keys(b)
				return (
					(aw && c.length === av) ||
						((av = c.length),
						(aw = c.reduce((c, d) => {
							au || (au = {})
							var e = au[d]
							if (e) c[e[0]] = e[1]
							else
								for (var f = a(d), g = f.length - 1; g >= 0; g--) {
									var h = f[g],
										i = null == h ? void 0 : h.filename,
										j = b[d]
									if (i && j) {
										;(c[i] = j), (au[d] = [i, j])
										break
									}
								}
							return c
						}, {}))),
					aw
				)
			}
		}
		class bl {
			constructor(a, b, c) {
				void 0 === c && (c = []), (this.coercers = a), (this.stackParser = b), (this.modifiers = c)
			}
			buildFromUnknown(a, b) {
				void 0 === b && (b = {})
				var c = (b && b.mechanism) || { handled: !0, type: "generic" },
					d = this.buildCoercingContext(c, b, 0).apply(a),
					e = this.buildParsingContext(),
					f = this.parseStacktrace(d, e)
				return { $exception_list: this.convertToExceptionList(f, c), $exception_level: "error" }
			}
			modifyFrames(a) {
				var b = this
				return N(function* () {
					for (var c of a)
						c.stacktrace &&
							c.stacktrace.frames &&
							$(c.stacktrace.frames) &&
							(c.stacktrace.frames = yield b.applyModifiers(c.stacktrace.frames))
					return a
				})()
			}
			coerceFallback(a) {
				var b
				return {
					type: "Error",
					value: "Unknown error",
					stack: null == (b = a.syntheticException) ? void 0 : b.stack,
					synthetic: !0,
				}
			}
			parseStacktrace(a, b) {
				var c, d
				return (
					null != a.cause && (c = this.parseStacktrace(a.cause, b)),
					"" != a.stack &&
						null != a.stack &&
						(d = this.applyChunkIds(this.stackParser(a.stack, +!!a.synthetic), b.chunkIdMap)),
					O({}, a, { cause: c, stack: d })
				)
			}
			applyChunkIds(a, b) {
				return a.map((a) => (a.filename && b && (a.chunk_id = b[a.filename]), a))
			}
			applyCoercers(a, b) {
				for (var c of this.coercers) if (c.match(a)) return c.coerce(a, b)
				return this.coerceFallback(b)
			}
			applyModifiers(a) {
				var b = this
				return N(function* () {
					var c = a
					for (var d of b.modifiers) c = yield d(c)
					return c
				})()
			}
			convertToExceptionList(a, b) {
				var c,
					d,
					e,
					f = {
						type: a.type,
						value: a.value,
						mechanism: {
							type: null != (c = b.type) ? c : "generic",
							handled: null == (d = b.handled) || d,
							synthetic: null != (e = a.synthetic) && e,
						},
					}
				a.stack && (f.stacktrace = { type: "raw", frames: a.stack })
				var g = [f]
				return null != a.cause && g.push(...this.convertToExceptionList(a.cause, O({}, b, { handled: !0 }))), g
			}
			buildParsingContext() {
				return { chunkIdMap: bk(this.stackParser) }
			}
			buildCoercingContext(a, b, c) {
				void 0 === c && (c = 0)
				var d = (c, d) => {
					if (d <= 4) {
						var e = this.buildCoercingContext(a, b, d)
						return this.applyCoercers(c, e)
					}
				}
				return O({}, b, {
					syntheticException: 0 == c ? b.syntheticException : void 0,
					mechanism: a,
					apply: (a) => d(a, c),
					next: (a) => d(a, c + 1),
				})
			}
		}
		var bm = "?"
		function bn(a, b, c, d, e) {
			var f = { platform: a, filename: b, function: "<anonymous>" === c ? bm : c, in_app: !0 }
			return ac(d) || (f.lineno = d), ac(e) || (f.colno = e), f
		}
		var bo = (a, b) => {
				var c = -1 !== a.indexOf("safari-extension"),
					d = -1 !== a.indexOf("safari-web-extension")
				return c || d
					? [
							-1 !== a.indexOf("@") ? a.split("@")[0] : bm,
							c ? "safari-extension:" + b : "safari-web-extension:" + b,
						]
					: [a, b]
			},
			bp = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
			bq =
				/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
			br = /\((\S*)(?::(\d+))(?::(\d+))\)/,
			bs = (a, b) => {
				var c = bp.exec(a)
				if (c) {
					var [, d, e, f] = c
					return bn(b, d, bm, +e, +f)
				}
				var g = bq.exec(a)
				if (g) {
					if (g[2] && 0 === g[2].indexOf("eval")) {
						var h = br.exec(g[2])
						h && ((g[2] = h[1]), (g[3] = h[2]), (g[4] = h[3]))
					}
					var [i, j] = bo(g[1] || bm, g[2])
					return bn(b, j, i, g[3] ? +g[3] : void 0, g[4] ? +g[4] : void 0)
				}
			},
			bt =
				/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
			bu = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
			bv = (a, b) => {
				var c = bt.exec(a)
				if (c) {
					if (c[3] && c[3].indexOf(" > eval") > -1) {
						var d = bu.exec(c[3])
						d && ((c[1] = c[1] || "eval"), (c[3] = d[1]), (c[4] = d[2]), (c[5] = ""))
					}
					var e = c[3],
						f = c[1] || bm
					return ([f, e] = bo(f, e)), bn(b, e, f, c[4] ? +c[4] : void 0, c[5] ? +c[5] : void 0)
				}
			},
			bw = /\(error: (.*)\)/,
			bx = 50
		function by() {
			return (function (a) {
				for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d]
				return function (b, d) {
					void 0 === d && (d = 0)
					for (var e = [], f = b.split("\n"), g = d; g < f.length; g++) {
						var h = f[g]
						if (!(h.length > 1024)) {
							var i = bw.test(h) ? h.replace(bw, "$1") : h
							if (!i.match(/\S*Error: /)) {
								for (var j of c) {
									var k = j(i, a)
									if (k) {
										e.push(k)
										break
									}
								}
								if (e.length >= bx) break
							}
						}
					}
					return (function (a) {
						if (!a.length) return []
						var b = Array.from(a)
						return (
							b.reverse(),
							b.slice(0, bx).map((a) => {
								var c
								return O({}, a, {
									filename: a.filename || ((c = b)[c.length - 1] || {}).filename,
									function: a.function || bm,
								})
							})
						)
					})(e)
				}
			})("web:javascript", bs, bv)
		}
		class bz {
			match(a) {
				return this.isDOMException(a) || this.isDOMError(a)
			}
			coerce(a, b) {
				var c = ad(a.stack)
				return {
					type: this.getType(a),
					value: this.getValue(a),
					stack: c ? a.stack : void 0,
					cause: a.cause ? b.next(a.cause) : void 0,
					synthetic: !1,
				}
			}
			getType(a) {
				return this.isDOMError(a) ? "DOMError" : "DOMException"
			}
			getValue(a) {
				var b = a.name || (this.isDOMError(a) ? "DOMError" : "DOMException")
				return a.message ? b + ": " + a.message : b
			}
			isDOMException(a) {
				return an(a, "DOMException")
			}
			isDOMError(a) {
				return an(a, "DOMError")
			}
		}
		class bA {
			match(a) {
				return a instanceof Error
			}
			coerce(a, b) {
				return {
					type: this.getType(a),
					value: this.getMessage(a, b),
					stack: this.getStack(a),
					cause: a.cause ? b.next(a.cause) : void 0,
					synthetic: !1,
				}
			}
			getType(a) {
				return a.name || a.constructor.name
			}
			getMessage(a, b) {
				var c = a.message
				return c.error && "string" == typeof c.error.message ? String(c.error.message) : String(c)
			}
			getStack(a) {
				return a.stacktrace || a.stack || void 0
			}
		}
		class bB {
			match(a) {
				return an(a, "ErrorEvent") && null != a.error
			}
			coerce(a, b) {
				var c
				return (
					b.apply(a.error) || {
						type: "ErrorEvent",
						value: a.message,
						stack: null == (c = b.syntheticException) ? void 0 : c.stack,
						synthetic: !0,
					}
				)
			}
		}
		var bC =
			/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
		class bD {
			match(a) {
				return "string" == typeof a
			}
			coerce(a, b) {
				var c,
					[d, e] = this.getInfos(a)
				return {
					type: null != d ? d : "Error",
					value: null != e ? e : a,
					stack: null == (c = b.syntheticException) ? void 0 : c.stack,
					synthetic: !0,
				}
			}
			getInfos(a) {
				var b = "Error",
					c = a,
					d = a.match(bC)
				return d && ((b = d[1]), (c = d[2])), [b, c]
			}
		}
		var bE = ["fatal", "error", "warning", "log", "info", "debug"]
		function bF(a, b) {
			void 0 === b && (b = 40)
			var c = Object.keys(a)
			if ((c.sort(), !c.length)) return "[object has no keys]"
			for (var d = c.length; d > 0; d--) {
				var e = c.slice(0, d).join(", ")
				if (!(e.length > b)) return d === c.length || e.length <= b ? e : e.slice(0, b) + "..."
			}
			return ""
		}
		class bG {
			match(a) {
				return "object" == typeof a && null !== a
			}
			coerce(a, b) {
				var c,
					d = this.getErrorPropertyFromObject(a)
				return d
					? b.apply(d)
					: {
							type: this.getType(a),
							value: this.getValue(a),
							stack: null == (c = b.syntheticException) ? void 0 : c.stack,
							level: this.isSeverityLevel(a.level) ? a.level : "error",
							synthetic: !0,
						}
			}
			getType(a) {
				return ao(a) ? a.constructor.name : "Error"
			}
			getValue(a) {
				if ("name" in a && "string" == typeof a.name) {
					var b = "'" + a.name + "' captured as exception"
					return (
						"message" in a && "string" == typeof a.message && (b += " with message: '" + a.message + "'"), b
					)
				}
				if ("message" in a && "string" == typeof a.message) return a.message
				var c = this.getObjectClassName(a)
				return (c && "Object" !== c ? "'" + c + "'" : "Object") + " captured as exception with keys: " + bF(a)
			}
			isSeverityLevel(a) {
				return ad(a) && !ae(a) && bE.indexOf(a) >= 0
			}
			getErrorPropertyFromObject(a) {
				for (var b in a)
					if (Object.prototype.hasOwnProperty.call(a, b)) {
						var c = a[b]
						if (bj(c)) return c
					}
			}
			getObjectClassName(a) {
				try {
					var b = Object.getPrototypeOf(a)
					return b ? b.constructor.name : void 0
				} catch (a) {
					return
				}
			}
		}
		class bH {
			match(a) {
				return ao(a)
			}
			coerce(a, b) {
				var c,
					d = a.constructor.name
				return {
					type: d,
					value: d + " captured as exception with keys: " + bF(a),
					stack: null == (c = b.syntheticException) ? void 0 : c.stack,
					synthetic: !0,
				}
			}
		}
		class bI {
			match(a) {
				return am(a)
			}
			coerce(a, b) {
				var c
				return {
					type: "Error",
					value: "Primitive value captured as exception: " + String(a),
					stack: null == (c = b.syntheticException) ? void 0 : c.stack,
					synthetic: !0,
				}
			}
		}
		class bJ {
			match(a) {
				return an(a, "PromiseRejectionEvent")
			}
			coerce(a, b) {
				var c,
					d = this.getUnhandledRejectionReason(a)
				return am(d)
					? {
							type: "UnhandledRejection",
							value: "Non-Error promise rejection captured with value: " + String(d),
							stack: null == (c = b.syntheticException) ? void 0 : c.stack,
							synthetic: !0,
						}
					: b.apply(d)
			}
			getUnhandledRejectionReason(a) {
				if (am(a)) return a
				try {
					if ("reason" in a) return a.reason
					if ("detail" in a && "reason" in a.detail) return a.detail.reason
				} catch (a) {}
				return a
			}
		}
		var bK = function (a, b) {
				var { debugEnabled: c } = void 0 === b ? {} : b,
					d = {
						k: function (a) {
							y && (L.DEBUG || K.POSTHOG_DEBUG || c) && !ac(y.console) && y.console
						},
						info: function () {
							for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c]
							d.k("log", ...b)
						},
						warn: function () {
							for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c]
							d.k("warn", ...b)
						},
						error: function () {
							for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c]
							d.k("error", ...b)
						},
						critical: function () {
							for (var b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d]
							console.error(a, ...c)
						},
						uninitializedWarning: (a) => {
							d.error("You must initialize PostHog before calling " + a)
						},
						createLogger: (b, c) => bK(a + " " + b, c),
					}
				return d
			},
			bL = bK("[PostHog.js]"),
			bM = bL.createLogger,
			bN = bM("[ExternalScriptsLoader]"),
			bO = (a, b, c) => {
				if (a.config.disable_external_dependency_loading)
					return (
						bN.warn(b + " was requested but loading of external scripts is disabled."),
						c("Loading of external scripts is disabled")
					)
				var d = null == E ? void 0 : E.querySelectorAll("script")
				if (d) {
					for (
						var e,
							f = function () {
								if (d[g].src === b) {
									var a = d[g]
									return a.__posthog_loading_callback_fired
										? { v: c() }
										: (a.addEventListener("load", (b) => {
												;(a.__posthog_loading_callback_fired = !0), c(void 0, b)
											}),
											(a.onerror = (a) => c(a)),
											{ v: void 0 })
								}
							},
							g = 0;
						g < d.length;
						g++
					)
						if ((e = f())) return e.v
				}
				var h = () => {
					if (!E) return c("document not found")
					var d = E.createElement("script")
					if (
						((d.type = "text/javascript"),
						(d.crossOrigin = "anonymous"),
						(d.src = b),
						(d.onload = (a) => {
							;(d.__posthog_loading_callback_fired = !0), c(void 0, a)
						}),
						(d.onerror = (a) => c(a)),
						a.config.prepare_external_dependency_script &&
							(d = a.config.prepare_external_dependency_script(d)),
						!d)
					)
						return c("prepare_external_dependency_script returned null")
					if ("head" === a.config.external_scripts_inject_target) E.head.appendChild(d)
					else {
						var e,
							f = E.querySelectorAll("body > script")
						f.length > 0 ? null == (e = f[0].parentNode) || e.insertBefore(d, f[0]) : E.body.appendChild(d)
					}
				}
				null != E && E.body ? h() : null == E || E.addEventListener("DOMContentLoaded", h)
			}
		;(K.__PosthogExtensions__ = K.__PosthogExtensions__ || {}),
			(K.__PosthogExtensions__.loadExternalDependency = (a, b, c) => {
				var d = "/static/" + b + ".js?v=" + a.version
				if (("remote-config" === b && (d = "/array/" + a.config.token + "/config.js"), "toolbar" === b)) {
					var e = 3e5
					d = d + "&t=" + Math.floor(Date.now() / e) * e
				}
				var f = a.requestRouter.endpointFor("assets", d)
				bO(a, f, c)
			}),
			(K.__PosthogExtensions__.loadSiteApp = (a, b, c) => {
				var d = a.requestRouter.endpointFor("api", b)
				bO(a, d, c)
			})
		var bP = {}
		function bQ(a, b, c) {
			if ($(a)) {
				if (B && a.forEach === B) a.forEach(b, c)
				else if ("length" in a && a.length === +a.length) {
					for (var d = 0, e = a.length; d < e; d++) if (d in a && b.call(c, a[d], d) === bP) return
				}
			}
		}
		function bR(a, b, c) {
			if (!ag(a)) {
				if ($(a)) return bQ(a, b, c)
				if (ak(a)) {
					for (var d of a.entries()) if (b.call(c, d[1], d[0]) === bP) return
				} else for (var e in a) if (Y.call(a, e) && b.call(c, a[e], e) === bP) return
			}
		}
		var bS = function (a) {
				for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d]
				return (
					bQ(c, function (b) {
						for (var c in b) void 0 !== b[c] && (a[c] = b[c])
					}),
					a
				)
			},
			bT = function (a) {
				for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d]
				return (
					bQ(c, function (b) {
						bQ(b, function (b) {
							a.push(b)
						})
					}),
					a
				)
			}
		function bU(a) {
			for (var b = Object.keys(a), c = b.length, d = Array(c); c--; ) d[c] = [b[c], a[b[c]]]
			return d
		}
		var bV = function (a) {
				try {
					return a()
				} catch (a) {
					return
				}
			},
			bW = function (a) {
				return function () {
					try {
						for (var b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d]
						return a.apply(this, c)
					} catch (a) {
						bL.critical(
							"Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A.",
						),
							bL.critical(a)
					}
				}
			},
			bX = function (a) {
				var b = {}
				return (
					bR(a, function (a, c) {
						;((ad(a) && a.length > 0) || ah(a)) && (b[c] = a)
					}),
					b
				)
			}
		function bY(a, b) {
			var c, d, e
			return (
				(c = a),
				(d = (a) => (ad(a) && !af(b) ? a.slice(0, b) : a)),
				(e = new Set()),
				(function a(b, c) {
					var f
					return b !== Object(b)
						? d
							? d(b, c)
							: b
						: e.has(b)
							? void 0
							: (e.add(b),
								$(b)
									? ((f = []),
										bQ(b, (b) => {
											f.push(a(b))
										}))
									: ((f = {}),
										bR(b, (b, c) => {
											e.has(b) || (f[c] = a(b, c))
										})),
								f)
				})(c)
			)
		}
		var bZ = ["herokuapp.com", "vercel.app", "netlify.app"]
		function b$(a) {
			var b = null == a ? void 0 : a.hostname
			if (!ad(b)) return !1
			var c = b.split(".").slice(-2).join(".")
			for (var d of bZ) if (c === d) return !1
			return !0
		}
		function b_(a, b) {
			for (var c = 0; c < a.length; c++) if (b(a[c])) return a[c]
		}
		function b0(a, b, c, d) {
			var { capture: e = !1, passive: f = !0 } = null != d ? d : {}
			null == a || a.addEventListener(b, c, { capture: e, passive: f })
		}
		var b1 = "$people_distinct_id",
			b2 = "__alias",
			b3 = "__timers",
			b4 = "$autocapture_disabled_server_side",
			b5 = "$heatmaps_enabled_server_side",
			b6 = "$exception_capture_enabled_server_side",
			b7 = "$error_tracking_suppression_rules",
			b8 = "$error_tracking_capture_extension_exceptions",
			b9 = "$web_vitals_enabled_server_side",
			ca = "$dead_clicks_enabled_server_side",
			cb = "$product_tours_enabled_server_side",
			cc = "$web_vitals_allowed_metrics",
			cd = "$session_recording_remote_config",
			ce = "$sesid",
			cf = "$session_is_sampled",
			cg = "$enabled_feature_flags",
			ch = "$early_access_features",
			ci = "$feature_flag_details",
			cj = "$stored_person_properties",
			ck = "$stored_group_properties",
			cl = "$surveys",
			cm = "$flag_call_reported",
			cn = "$user_state",
			co = "$client_session_props",
			cp = "$capture_rate_limit",
			cq = "$initial_campaign_params",
			cr = "$initial_referrer_info",
			cs = "$initial_person_info",
			ct = "$epp",
			cu = "__POSTHOG_TOOLBAR__",
			cv = "$posthog_cookieless",
			cw = [
				b1,
				b2,
				"__cmpns",
				b3,
				"$session_recording_enabled_server_side",
				b5,
				ce,
				cg,
				b7,
				cn,
				ch,
				ci,
				ck,
				cj,
				cl,
				cm,
				co,
				cp,
				cq,
				cr,
				ct,
				cs,
				"$conversations_widget_session_id",
				"$conversations_ticket_id",
				"$conversations_widget_state",
				"$conversations_user_traits",
			]
		function cx(a) {
			return (
				a instanceof Element &&
				(a.id === cu || !(null == a.closest || !a.closest(".toolbar-global-fade-container")))
			)
		}
		function cy(a) {
			return !!a && 1 === a.nodeType
		}
		function cz(a, b) {
			return !!a && !!a.tagName && a.tagName.toLowerCase() === b.toLowerCase()
		}
		function cA(a) {
			return !!a && 3 === a.nodeType
		}
		function cB(a) {
			return !!a && 11 === a.nodeType
		}
		function cC(a) {
			return a ? U(a).split(/\s+/) : []
		}
		function cD(a) {
			var b = null == y ? void 0 : y.location.href
			return !!(b && a && a.some((a) => b.match(a)))
		}
		function cE(a) {
			var b = ""
			switch (typeof a.className) {
				case "string":
					b = a.className
					break
				case "object":
					b =
						(a.className && "baseVal" in a.className ? a.className.baseVal : null) ||
						a.getAttribute("class") ||
						""
					break
				default:
					b = ""
			}
			return cC(b)
		}
		function cF(a) {
			return ag(a)
				? null
				: U(a)
						.split(/(\s+)/)
						.filter((a) => cX(a))
						.join("")
						.replace(/[\r\n]/g, " ")
						.replace(/[ ]+/g, " ")
						.substring(0, 255)
		}
		function cG(a) {
			var b = ""
			return (
				cP(a) &&
					!cQ(a) &&
					a.childNodes &&
					a.childNodes.length &&
					bR(a.childNodes, function (a) {
						var c
						cA(a) && a.textContent && (b += null != (c = cF(a.textContent)) ? c : "")
					}),
				U(b)
			)
		}
		function cH(a) {
			var b
			return ac(a.target)
				? a.srcElement || null
				: null != (b = a.target) && b.shadowRoot
					? a.composedPath()[0] || null
					: a.target || null
		}
		var cI = ["a", "button", "form", "input", "select", "textarea", "label"]
		function cJ(a, b) {
			if (ac(b)) return !0
			var c,
				d = function (a) {
					if (b.some((b) => a.matches(b))) return { v: !0 }
				}
			for (var e of a) if ((c = d(e))) return c.v
			return !1
		}
		function cK(a) {
			var b = a.parentNode
			return !(!b || !cy(b)) && b
		}
		function cL(a, b) {
			if (!y || cM(a)) return !1
		}
		var cM = (a) => !a || cz(a, "html") || !cy(a),
			cN = (a, b) => {
				if (!y || cM(a)) return { parentIsUsefulElement: !1, targetElementList: [] }
			}
		function cO(a, b, c, d, e) {
			if (
				(void 0 === c && (c = void 0),
				!y ||
					cM(a) ||
					(null != (f = c) && f.url_allowlist && !cD(c.url_allowlist)) ||
					(null != (g = c) && g.url_ignorelist && cD(c.url_ignorelist)))
			)
				return !1
			if (null != (h = c) && h.dom_event_allowlist) {
				var f,
					g,
					h,
					i,
					j = c.dom_event_allowlist
				if (j && !j.some((a) => b.type === a)) return !1
			}
			var { parentIsUsefulElement: k, targetElementList: l } = cN(a, d)
			if (
				!(function (a, b) {
					var c = null == b ? void 0 : b.element_allowlist
					if (ac(c)) return !0
					var d,
						e = function (a) {
							if (c.some((b) => a.tagName.toLowerCase() === b)) return { v: !0 }
						}
					for (var f of a) if ((d = e(f))) return d.v
					return !1
				})(l, c) ||
				!cJ(l, null == (i = c) ? void 0 : i.css_selector_allowlist)
			)
				return !1
			var m = y.getComputedStyle(a)
			if (m && "pointer" === m.getPropertyValue("cursor") && "click" === b.type) return !0
			var n = a.tagName.toLowerCase()
			switch (n) {
				case "html":
					return !1
				case "form":
					return (e || ["submit"]).indexOf(b.type) >= 0
				case "input":
				case "select":
				case "textarea":
					return (e || ["change", "click"]).indexOf(b.type) >= 0
				default:
					return k
						? (e || ["click"]).indexOf(b.type) >= 0
						: (e || ["click"]).indexOf(b.type) >= 0 &&
								(cI.indexOf(n) > -1 || "true" === a.getAttribute("contenteditable"))
			}
		}
		function cP(a) {
			for (var b = a; b.parentNode && !cz(b, "body"); b = b.parentNode) {
				var c = cE(b)
				if (T(c, "ph-sensitive") || T(c, "ph-no-capture")) return !1
			}
			if (T(cE(a), "ph-include")) return !0
			var d = a.type || ""
			if (ad(d))
				switch (d.toLowerCase()) {
					case "hidden":
					case "password":
						return !1
				}
			var e = a.name || a.id || ""
			return !(
				ad(e) &&
				/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
					e.replace(/[^a-zA-Z0-9]/g, ""),
				)
			)
		}
		function cQ(a) {
			return !!(
				(cz(a, "input") && !["button", "checkbox", "submit", "reset"].includes(a.type)) ||
				cz(a, "select") ||
				cz(a, "textarea") ||
				"true" === a.getAttribute("contenteditable")
			)
		}
		var cR =
				"(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
			cS = RegExp("^(?:" + cR + ")$"),
			cT = new RegExp(cR),
			cU = "\\d{3}-?\\d{2}-?\\d{4}",
			cV = RegExp("^(" + cU + ")$"),
			cW = RegExp("(" + cU + ")")
		function cX(a, b) {
			return (
				void 0 === b && (b = !0),
				!(
					ag(a) ||
					(ad(a) && ((a = U(a)), (b ? cS : cT).test((a || "").replace(/[- ]/g, "")) || (b ? cV : cW).test(a)))
				) && !0
			)
		}
		function cY(a) {
			var b = cG(a)
			return cX((b = (b + " " + cZ(a)).trim())) ? b : ""
		}
		function cZ(a) {
			var b = ""
			return (
				a &&
					a.childNodes &&
					a.childNodes.length &&
					bR(a.childNodes, function (a) {
						var c
						if (a && "span" === (null == (c = a.tagName) ? void 0 : c.toLowerCase()))
							try {
								var d = cG(a)
								;(b = (b + " " + d).trim()),
									a.childNodes && a.childNodes.length && (b = (b + " " + cZ(a)).trim())
							} catch (a) {
								bL.error("[AutoCapture]", a)
							}
					}),
				b
			)
		}
		function c$(a) {
			return (function (a) {
				return a
					.map((a) => {
						var b,
							c,
							d = ""
						if ((a.tag_name && (d += a.tag_name), a.attr_class))
							for (var e of (a.attr_class.sort(), a.attr_class)) d += "." + e.replace(/"/g, "")
						var f = O(
								{},
								a.text ? { text: a.text } : {},
								{
									"nth-child": null != (b = a.nth_child) ? b : 0,
									"nth-of-type": null != (c = a.nth_of_type) ? c : 0,
								},
								a.href ? { href: a.href } : {},
								a.attr_id ? { attr_id: a.attr_id } : {},
								a.attributes,
							),
							g = {}
						return (
							bU(f)
								.sort((a, b) => {
									var [c] = a,
										[d] = b
									return c.localeCompare(d)
								})
								.forEach((a) => {
									var [b, c] = a
									return (g[c_(b.toString())] = c_(c.toString()))
								}),
							(d += ":"),
							(d += bU(g)
								.map((a) => {
									var [b, c] = a
									return b + '="' + c + '"'
								})
								.join(""))
						)
					})
					.join(";")
			})(
				(function (a) {
					return a.map((a) => {
						var b,
							c,
							d = {
								text: null == (b = a.$el_text) ? void 0 : b.slice(0, 400),
								tag_name: a.tag_name,
								href: null == (c = a.attr__href) ? void 0 : c.slice(0, 2048),
								attr_class: c0(a),
								attr_id: a.attr__id,
								nth_child: a.nth_child,
								nth_of_type: a.nth_of_type,
								attributes: {},
							}
						return (
							bU(a)
								.filter((a) => {
									var [b] = a
									return 0 === b.indexOf("attr__")
								})
								.forEach((a) => {
									var [b, c] = a
									return (d.attributes[b] = c)
								}),
							d
						)
					})
				})(a),
			)
		}
		function c_(a) {
			return a.replace(/"|\\"/g, '\\"')
		}
		function c0(a) {
			var b = a.attr__class
			return b ? ($(b) ? b : cC(b)) : void 0
		}
		class c1 {
			constructor(a) {
				this.disabled = !1 === a
				var b = aa(a) ? a : {}
				;(this.thresholdPx = b.threshold_px || 30),
					(this.timeoutMs = b.timeout_ms || 1e3),
					(this.clickCount = b.click_count || 3),
					(this.clicks = [])
			}
			isRageClick(a, b, c) {
				if (this.disabled) return !1
				var d = this.clicks[this.clicks.length - 1]
				if (d && Math.abs(a - d.x) + Math.abs(b - d.y) < this.thresholdPx && c - d.timestamp < this.timeoutMs) {
					if ((this.clicks.push({ x: a, y: b, timestamp: c }), this.clicks.length === this.clickCount))
						return !0
				} else this.clicks = [{ x: a, y: b, timestamp: c }]
				return !1
			}
		}
		var c2 = (a) => {
				var b = null == E ? void 0 : E.createElement("a")
				return ac(b) ? null : ((b.href = a), b)
			},
			c3 = function (a, b) {
				void 0 === b && (b = "&")
				var c,
					d,
					e = []
				return (
					bR(a, function (a, b) {
						ac(a) ||
							ac(b) ||
							"undefined" === b ||
							((c = encodeURIComponent(a instanceof File ? a.name : a.toString())),
							(d = encodeURIComponent(b)),
							(e[e.length] = d + "=" + c))
					}),
					e.join(b)
				)
			},
			c4 = function (a, b) {
				for (
					var c,
						d = ((a.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"),
						e = 0;
					e < d.length;
					e++
				) {
					var f = d[e].split("=")
					if (f[0] === b) {
						c = f
						break
					}
				}
				if (!$(c) || c.length < 2) return ""
				var g = c[1]
				try {
					g = decodeURIComponent(g)
				} catch (a) {
					bL.error("Skipping decoding for malformed query param: " + g)
				}
				return g.replace(/\+/g, " ")
			},
			c5 = function (a, b, c) {
				if (!a || !b || !b.length) return a
				for (
					var d = a.split("#"),
						e = d[0] || "",
						f = d[1],
						g = e.split("?"),
						h = g[1],
						i = g[0],
						j = (h || "").split("&"),
						k = [],
						l = 0;
					l < j.length;
					l++
				) {
					var m = j[l].split("=")
					$(m) && (b.includes(m[0]) ? k.push(m[0] + "=" + c) : k.push(j[l]))
				}
				var n = i
				return null != h && (n += "?" + k.join("&")), null != f && (n += "#" + f), n
			},
			c6 = function (a, b) {
				var c = a.match(RegExp(b + "=([^&]*)"))
				return c ? c[1] : null
			},
			c7 = "$copy_autocapture",
			c8 = bM("[AutoCapture]")
		function c9(a, b) {
			return b.length > a ? b.slice(0, a) + "..." : b
		}
		function da(a) {
			if (a.previousElementSibling) return a.previousElementSibling
			var b = a
			do b = b.previousSibling
			while (b && !cy(b))
			return b
		}
		function db(a, b, c, d) {
			var e = a.tagName.toLowerCase(),
				f = { tag_name: e }
			cI.indexOf(e) > -1 &&
				!c &&
				("a" === e.toLowerCase() || "button" === e.toLowerCase()
					? (f.$el_text = c9(1024, cY(a)))
					: (f.$el_text = c9(1024, cG(a))))
			var g = cE(a)
			g.length > 0 &&
				(f.classes = g.filter(function (a) {
					return "" !== a
				})),
				bR(a.attributes, function (c) {
					var e
					if (
						(!cQ(a) || -1 !== ["name", "id", "class", "aria-label"].indexOf(c.name)) &&
						(null == d || !d.includes(c.name)) &&
						!b &&
						cX(c.value) &&
						(!ad((e = c.name)) || ("_ngcontent" !== e.substring(0, 10) && "_nghost" !== e.substring(0, 7)))
					) {
						var g = c.value
						"class" === c.name && (g = cC(g).join(" ")), (f["attr__" + c.name] = c9(1024, g))
					}
				})
			for (var h = 1, i = 1, j = a; (j = da(j)); ) h++, j.tagName === a.tagName && i++
			return (f.nth_child = h), (f.nth_of_type = i), f
		}
		function dc(a, b) {
			for (
				var c,
					d,
					{
						e: e,
						maskAllElementAttributes: f,
						maskAllText: g,
						elementAttributeIgnoreList: h,
						elementsChainAsString: i,
					} = b,
					j = [a],
					k = a;
				k.parentNode && !cz(k, "body");

			)
				cB(k.parentNode)
					? (j.push(k.parentNode.host), (k = k.parentNode.host))
					: (j.push(k.parentNode), (k = k.parentNode))
			var l,
				m = [],
				n = {},
				o = !1,
				p = !1
			if (
				(bR(j, (a) => {
					var b = cP(a)
					"a" === a.tagName.toLowerCase() && ((o = a.getAttribute("href")), (o = b && o && cX(o) && o)),
						T(cE(a), "ph-no-capture") && (p = !0),
						m.push(db(a, f, g, h)),
						bS(
							n,
							(function (a) {
								if (!cP(a)) return {}
								var b = {}
								return (
									bR(a.attributes, function (a) {
										if (a.name && 0 === a.name.indexOf("data-ph-capture-attribute")) {
											var c = a.name.replace("data-ph-capture-attribute-", ""),
												d = a.value
											c && d && cX(d) && (b[c] = d)
										}
									}),
									b
								)
							})(a),
						)
				}),
				p)
			)
				return { props: {}, explicitNoCapture: p }
			if (
				(g ||
					("a" === a.tagName.toLowerCase() || "button" === a.tagName.toLowerCase()
						? (m[0].$el_text = cY(a))
						: (m[0].$el_text = cG(a))),
				o)
			) {
				m[0].attr__href = o
				var q,
					r,
					s = null == (q = c2(o)) ? void 0 : q.host,
					t = null == y || null == (r = y.location) ? void 0 : r.host
				s && t && s !== t && (l = o)
			}
			return {
				props: bS(
					{ $event_type: e.type, $ce_version: 1 },
					i ? {} : { $elements: m },
					{ $elements_chain: c$(m) },
					null != (c = m[0]) && c.$el_text ? { $el_text: null == (d = m[0]) ? void 0 : d.$el_text } : {},
					l && "click" === e.type ? { $external_click_url: l } : {},
					n,
				),
			}
		}
		class dd {
			constructor(a) {
				;(this.P = !1),
					(this.T = null),
					(this.I = !1),
					(this.instance = a),
					(this.rageclicks = new c1(a.config.rageclick)),
					(this.C = null)
			}
			get R() {
				var a,
					b,
					c = aa(this.instance.config.autocapture) ? this.instance.config.autocapture : {}
				return (
					(c.url_allowlist = null == (a = c.url_allowlist) ? void 0 : a.map((a) => new RegExp(a))),
					(c.url_ignorelist = null == (b = c.url_ignorelist) ? void 0 : b.map((a) => new RegExp(a))),
					c
				)
			}
			F() {
				this.isBrowserSupported() ||
					c8.info("Disabling Automatic Event Collection because this browser is not supported")
			}
			startIfEnabled() {
				this.isEnabled && !this.P && (this.F(), (this.P = !0))
			}
			onRemoteConfig(a) {
				a.elementsChainAsString && (this.I = a.elementsChainAsString),
					this.instance.persistence && this.instance.persistence.register({ [b4]: !!a.autocapture_opt_out }),
					(this.T = !!a.autocapture_opt_out),
					this.startIfEnabled()
			}
			setElementSelectors(a) {
				this.C = a
			}
			getElementSelectors(a) {
				var b,
					c = []
				return (
					null == (b = this.C) ||
						b.forEach((b) => {
							var d = null == E ? void 0 : E.querySelectorAll(b)
							null == d ||
								d.forEach((d) => {
									a === d && c.push(b)
								})
						}),
					c
				)
			}
			get isEnabled() {
				var a,
					b,
					c = null == (a = this.instance.persistence) ? void 0 : a.props[b4]
				if (af(this.T) && !aj(c) && !this.instance.O()) return !1
				var d = null != (b = this.T) ? b : !!c
				return !!this.instance.config.autocapture && !d
			}
			M(a, b) {
				if ((void 0 === b && (b = "$autocapture"), this.isEnabled)) {
					var c,
						d = cH(a)
					cA(d) && (d = d.parentNode || null),
						"$autocapture" === b &&
							"click" === a.type &&
							a instanceof MouseEvent &&
							this.instance.config.rageclick &&
							null != (c = this.rageclicks) &&
							c.isRageClick(a.clientX, a.clientY, a.timeStamp || new Date().getTime()) &&
							cL(d, this.instance.config.rageclick) &&
							this.M(a, "$rageclick")
					var e = b === c7
					if (d && cO(d, a, this.R, e, e ? ["copy", "cut"] : void 0)) {
						var { props: f, explicitNoCapture: g } = dc(d, {
							e: a,
							maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
							maskAllText: this.instance.config.mask_all_text,
							elementAttributeIgnoreList: this.R.element_attribute_ignorelist,
							elementsChainAsString: this.I,
						})
						if (g) return !1
						var h = this.getElementSelectors(d)
						if ((h && h.length > 0 && (f.$element_selectors = h), b === c7)) {
							var i,
								j = cF(null == y || null == (i = y.getSelection()) ? void 0 : i.toString()),
								k = a.type || "clipboard"
							if (!j) return !1
							;(f.$selected_content = j), (f.$copy_type = k)
						}
						return this.instance.capture(b, f), !0
					}
				}
			}
			isBrowserSupported() {
				return _(null == E ? void 0 : E.querySelectorAll)
			}
		}
		Math.trunc ||
			(Math.trunc = function (a) {
				return a < 0 ? Math.ceil(a) : Math.floor(a)
			}),
			Number.isInteger ||
				(Number.isInteger = function (a) {
					return ah(a) && isFinite(a) && Math.floor(a) === a
				})
		var de = "0123456789abcdef"
		class df {
			constructor(a) {
				if (((this.bytes = a), 16 !== a.length)) throw TypeError("not 128-bit length")
			}
			static fromFieldsV7(a, b, c, d) {
				if (
					!Number.isInteger(a) ||
					!Number.isInteger(b) ||
					!Number.isInteger(c) ||
					!Number.isInteger(d) ||
					a < 0 ||
					b < 0 ||
					c < 0 ||
					d < 0 ||
					a > 0xffffffffffff ||
					b > 4095 ||
					c > 0x3fffffff ||
					d > 0xffffffff
				)
					throw RangeError("invalid field value")
				var e = new Uint8Array(16)
				return (
					(e[0] = a / 0x10000000000),
					(e[1] = a / 0x100000000),
					(e[2] = a / 0x1000000),
					(e[3] = a / 65536),
					(e[4] = a / 256),
					(e[5] = a),
					(e[6] = 112 | (b >>> 8)),
					(e[7] = b),
					(e[8] = 128 | (c >>> 24)),
					(e[9] = c >>> 16),
					(e[10] = c >>> 8),
					(e[11] = c),
					(e[12] = d >>> 24),
					(e[13] = d >>> 16),
					(e[14] = d >>> 8),
					(e[15] = d),
					new df(e)
				)
			}
			toString() {
				for (var a = "", b = 0; b < this.bytes.length; b++)
					(a = a + de.charAt(this.bytes[b] >>> 4) + de.charAt(15 & this.bytes[b])),
						(3 !== b && 5 !== b && 7 !== b && 9 !== b) || (a += "-")
				if (36 !== a.length) throw Error("Invalid UUIDv7 was generated")
				return a
			}
			clone() {
				return new df(this.bytes.slice(0))
			}
			equals(a) {
				return 0 === this.compareTo(a)
			}
			compareTo(a) {
				for (var b = 0; b < 16; b++) {
					var c = this.bytes[b] - a.bytes[b]
					if (0 !== c) return Math.sign(c)
				}
				return 0
			}
		}
		class dg {
			constructor() {
				;(this.A = 0), (this.D = 0), (this.j = new dj())
			}
			generate() {
				var a = this.generateOrAbort()
				if (ac(a)) {
					this.A = 0
					var b = this.generateOrAbort()
					if (ac(b)) throw Error("Could not generate UUID after timestamp reset")
					return b
				}
				return a
			}
			generateOrAbort() {
				var a = Date.now()
				if (a > this.A) (this.A = a), this.L()
				else {
					if (!(a + 1e4 > this.A)) return
					this.D++, this.D > 0x3ffffffffff && (this.A++, this.L())
				}
				return df.fromFieldsV7(
					this.A,
					Math.trunc(this.D / 0x40000000),
					0x3fffffff & this.D,
					this.j.nextUint32(),
				)
			}
			L() {
				this.D = 1024 * this.j.nextUint32() + (1023 & this.j.nextUint32())
			}
		}
		var dh,
			di = (a) => {
				if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
					throw Error("no cryptographically strong RNG available")
				for (var b = 0; b < a.length; b++)
					a[b] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random())
				return a
			}
		y && !ac(y.crypto) && crypto.getRandomValues && (di = (a) => crypto.getRandomValues(a))
		class dj {
			constructor() {
				;(this.N = new Uint32Array(8)), (this.U = 1 / 0)
			}
			nextUint32() {
				return this.U >= this.N.length && (di(this.N), (this.U = 0)), this.N[this.U++]
			}
		}
		var dk = () => dl().toString(),
			dl = () => (dh || (dh = new dg())).generate(),
			dm = "",
			dn = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
		function dp(a, b) {
			if (b) {
				var c = (function (a, b) {
					if ((void 0 === b && (b = E), dm)) return dm
					if (!b || ["localhost", "127.0.0.1"].includes(a)) return ""
					for (var c = a.split("."), d = Math.min(c.length, 8), e = "dmn_chk_" + dk(); !dm && d--; ) {
						var f = c.slice(d).join("."),
							g = e + "=1;domain=." + f + ";path=/"
						;(b.cookie = g + ";max-age=3"),
							b.cookie.includes(e) && ((b.cookie = g + ";max-age=0"), (dm = f))
					}
					return dm
				})(a)
				if (!c) {
					var d = ((a) => {
						var b = a.match(dn)
						return b ? b[0] : ""
					})(a)
					d !== c && bL.info("Warning: cookie subdomain discovery mismatch", d, c), (c = d)
				}
				return c ? "; domain=." + c : ""
			}
			return ""
		}
		var dq = {
				H: () => !!E,
				B: function (a) {
					bL.error("cookieStore error: " + a)
				},
				q: function (a) {
					if (E) {
						try {
							for (
								var b = a + "=", c = E.cookie.split(";").filter((a) => a.length), d = 0;
								d < c.length;
								d++
							) {
								for (var e = c[d]; " " == e.charAt(0); ) e = e.substring(1, e.length)
								if (0 === e.indexOf(b)) return decodeURIComponent(e.substring(b.length, e.length))
							}
						} catch (a) {}
						return null
					}
				},
				W: function (a) {
					var b
					try {
						b = JSON.parse(dq.q(a)) || {}
					} catch (a) {}
					return b
				},
				G: function (a, b, c, d, e) {
					if (E)
						try {
							var f = "",
								g = "",
								h = dp(E.location.hostname, d)
							if (c) {
								var i = new Date()
								i.setTime(i.getTime() + 24 * c * 36e5), (f = "; expires=" + i.toUTCString())
							}
							e && (g = "; secure")
							var j =
								a + "=" + encodeURIComponent(JSON.stringify(b)) + f + "; SameSite=Lax; path=/" + h + g
							return (
								j.length > 3686.4 && bL.warn("cookieStore warning: large cookie, len=" + j.length),
								(E.cookie = j),
								j
							)
						} catch (a) {
							return
						}
				},
				V: function (a, b) {
					if (null != E && E.cookie)
						try {
							dq.G(a, "", -1, b)
						} catch (a) {
							return
						}
				},
			},
			dr = null,
			ds = {
				H: function () {
					if (!af(dr)) return dr
					var a = !0
					return (
						ac(y) && (a = !1),
						a || bL.error("localStorage unsupported; falling back to cookie store"),
						(dr = a),
						a
					)
				},
				B: function (a) {
					bL.error("localStorage error: " + a)
				},
				q: function (a) {
					try {
						return null == y ? void 0 : y.localStorage.getItem(a)
					} catch (a) {
						ds.B(a)
					}
					return null
				},
				W: function (a) {
					try {
						return JSON.parse(ds.q(a)) || {}
					} catch (a) {}
					return null
				},
				G: function (a, b) {
					try {
						null == y || y.localStorage.setItem(a, JSON.stringify(b))
					} catch (a) {
						ds.B(a)
					}
				},
				V: function (a) {
					try {
						null == y || y.localStorage.removeItem(a)
					} catch (a) {
						ds.B(a)
					}
				},
			},
			dt = ["$device_id", "distinct_id", ce, cf, ct, cs],
			du = {},
			dv = {
				H: function () {
					return !0
				},
				B: function (a) {
					bL.error("memoryStorage error: " + a)
				},
				q: function (a) {
					return du[a] || null
				},
				W: function (a) {
					return du[a] || null
				},
				G: function (a, b) {
					du[a] = b
				},
				V: function (a) {
					delete du[a]
				},
			},
			dw = null,
			dx = {
				H: function () {
					if (!af(dw)) return dw
					if (((dw = !0), ac(y))) dw = !1
					else
						try {
							var a = "__support__"
							dx.G(a, "xyz"), '"xyz"' !== dx.q(a) && (dw = !1), dx.V(a)
						} catch (a) {
							dw = !1
						}
					return dw
				},
				B: function (a) {
					bL.error("sessionStorage error: ", a)
				},
				q: function (a) {
					try {
						return null == y ? void 0 : y.sessionStorage.getItem(a)
					} catch (a) {
						dx.B(a)
					}
					return null
				},
				W: function (a) {
					try {
						return JSON.parse(dx.q(a)) || null
					} catch (a) {}
					return null
				},
				G: function (a, b) {
					try {
						null == y || y.sessionStorage.setItem(a, JSON.stringify(b))
					} catch (a) {
						dx.B(a)
					}
				},
				V: function (a) {
					try {
						null == y || y.sessionStorage.removeItem(a)
					} catch (a) {
						dx.B(a)
					}
				},
			},
			dy = (function (a) {
				return (
					(a[(a.PENDING = -1)] = "PENDING"),
					(a[(a.DENIED = 0)] = "DENIED"),
					(a[(a.GRANTED = 1)] = "GRANTED"),
					a
				)
			})({})
		class dz {
			constructor(a) {
				this._instance = a
			}
			get R() {
				return this._instance.config
			}
			get consent() {
				return this.J() ? dy.DENIED : this.K
			}
			isOptedOut() {
				return (
					"always" === this.R.cookieless_mode ||
					this.consent === dy.DENIED ||
					(this.consent === dy.PENDING &&
						(this.R.opt_out_capturing_by_default || "on_reject" === this.R.cookieless_mode))
				)
			}
			isOptedIn() {
				return !this.isOptedOut()
			}
			isExplicitlyOptedOut() {
				return this.consent === dy.DENIED
			}
			optInOut(a) {
				this.Y.G(this.X, +!!a, this.R.cookie_expiration, this.R.cross_subdomain_cookie, this.R.secure_cookie)
			}
			reset() {
				this.Y.V(this.X, this.R.cross_subdomain_cookie)
			}
			get X() {
				var {
					token: a,
					opt_out_capturing_cookie_prefix: b,
					consent_persistence_name: c,
				} = this._instance.config
				return c || (b ? b + a : "__ph_opt_in_out_" + a)
			}
			get K() {
				var a = this.Y.q(this.X)
				return aq(a) ? dy.GRANTED : T(ar, a) ? dy.DENIED : dy.PENDING
			}
			get Y() {
				if (!this.Z) {
					var a = this.R.opt_out_capturing_persistence_type
					this.Z = "localStorage" === a ? ds : dq
					var b = "localStorage" === a ? dq : ds
					b.q(this.X) &&
						(this.Z.q(this.X) || this.optInOut(aq(b.q(this.X))), b.V(this.X, this.R.cross_subdomain_cookie))
				}
				return this.Z
			}
			J() {
				return (
					!!this.R.respect_dnt &&
					!!b_([null == D ? void 0 : D.doNotTrack, null == D ? void 0 : D.msDoNotTrack, K.doNotTrack], (a) =>
						aq(a),
					)
				)
			}
		}
		var dA = bM("[Dead Clicks]"),
			dB = () => !0,
			dC = (a) => {
				var b,
					c = !(null == (b = a.instance.persistence) || !b.get_property(ca)),
					d = a.instance.config.capture_dead_clicks
				return aj(d) ? d : !!aa(d) || c
			}
		class dD {
			get lazyLoadedDeadClicksAutocapture() {
				return this.tt
			}
			constructor(a, b, c) {
				;(this.instance = a), (this.isEnabled = b), (this.onCapture = c), this.startIfEnabled()
			}
			onRemoteConfig(a) {
				this.instance.persistence &&
					this.instance.persistence.register({ [ca]: null == a ? void 0 : a.captureDeadClicks }),
					this.startIfEnabled()
			}
			startIfEnabled() {
				this.isEnabled(this) &&
					this.it(() => {
						this.et()
					})
			}
			it(a) {
				var b, c
				null != (b = K.__PosthogExtensions__) && b.initDeadClicksAutocapture && a(),
					null == (c = K.__PosthogExtensions__) ||
						null == c.loadExternalDependency ||
						c.loadExternalDependency(this.instance, "dead-clicks-autocapture", (b) => {
							b ? dA.error("failed to load script", b) : a()
						})
			}
			et() {
				var a
				if (E) {
					if (!this.tt && null != (a = K.__PosthogExtensions__) && a.initDeadClicksAutocapture) {
						var b = aa(this.instance.config.capture_dead_clicks)
							? this.instance.config.capture_dead_clicks
							: {}
						;(b.__onCapture = this.onCapture),
							(this.tt = K.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, b)),
							this.tt.start(E),
							dA.info("starting...")
					}
				} else dA.error("`document` not found. Cannot start.")
			}
			stop() {
				this.tt && (this.tt.stop(), (this.tt = void 0), dA.info("stopping..."))
			}
		}
		var dE = bM("[ExceptionAutocapture]")
		class dF {
			constructor(a) {
				var b, c, d
				;(this.rt = () => {
					var a
					y && this.isEnabled && null != (a = K.__PosthogExtensions__) && a.errorWrappingFunctions
				}),
					(this._instance = a),
					(this.ht = !(null == (b = this._instance.persistence) || !b.props[b6])),
					(this.dt = new at({
						refillRate:
							null != (c = this._instance.config.error_tracking.__exceptionRateLimiterRefillRate) ? c : 1,
						bucketSize:
							null != (d = this._instance.config.error_tracking.__exceptionRateLimiterBucketSize)
								? d
								: 10,
						refillInterval: 1e4,
						h: dE,
					})),
					(this.R = this.vt()),
					this.startIfEnabledOrStop()
			}
			vt() {
				var a = this._instance.config.capture_exceptions,
					b = { capture_unhandled_errors: !1, capture_unhandled_rejections: !1, capture_console_errors: !1 }
				return (
					aa(a)
						? (b = O({}, b, a))
						: (ac(a) ? this.ht : a) &&
							(b = O({}, b, { capture_unhandled_errors: !0, capture_unhandled_rejections: !0 })),
					b
				)
			}
			get isEnabled() {
				return (
					this.R.capture_console_errors ||
					this.R.capture_unhandled_errors ||
					this.R.capture_unhandled_rejections
				)
			}
			startIfEnabledOrStop() {
				this.isEnabled ? (dE.info("enabled"), this.ut(), this.it(this.rt)) : this.ut()
			}
			it(a) {
				var b, c
				null != (b = K.__PosthogExtensions__) && b.errorWrappingFunctions && a(),
					null == (c = K.__PosthogExtensions__) ||
						null == c.loadExternalDependency ||
						c.loadExternalDependency(this._instance, "exception-autocapture", (b) => {
							if (b) return dE.error("failed to load script", b)
							a()
						})
			}
			ut() {
				var a, b, c
				null == (a = this.st) || a.call(this),
					(this.st = void 0),
					null == (b = this.nt) || b.call(this),
					(this.nt = void 0),
					null == (c = this.ot) || c.call(this),
					(this.ot = void 0)
			}
			onRemoteConfig(a) {
				var b = a.autocaptureExceptions
				;(this.ht = !!b),
					this._instance.persistence && this._instance.persistence.register({ [b6]: this.ht }),
					(this.R = this.vt()),
					this.startIfEnabledOrStop()
			}
			onConfigChange() {
				this.R = this.vt()
			}
			captureException(a) {
				var b,
					c,
					d =
						null !=
						(b = null == a || null == (c = a.$exception_list) || null == (c = c[0]) ? void 0 : c.type)
							? b
							: "Exception"
				this.dt.consumeRateLimit(d)
					? dE.info("Skipping exception capture because of client rate limiting.", { exception: d })
					: this._instance.exceptions.sendExceptionEvent(a)
			}
		}
		class dG {
			constructor(a) {
				var b
				;(this._instance = a), (this.ct = (null == y || null == (b = y.location) ? void 0 : b.pathname) || "")
			}
			get isEnabled() {
				return "history_change" === this._instance.config.capture_pageview
			}
			startIfEnabled() {
				this.isEnabled && (bL.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
			}
			stop() {
				this.ft && this.ft(), (this.ft = void 0), bL.info("History API monitoring stopped")
			}
			monitorHistoryChanges() {}
			_t(a) {
				try {
					var b,
						c = null == y || null == (b = y.location) ? void 0 : b.pathname
					if (!c) return
					c !== this.ct && this.isEnabled && this._instance.capture("$pageview", { navigation_type: a }),
						(this.ct = c)
				} catch (b) {
					bL.error("Error capturing " + a + " pageview", b)
				}
			}
			yt() {
				if (!this.ft) {
					var a = () => {
						this._t("popstate")
					}
					b0(y, "popstate", a),
						(this.ft = () => {
							y && y.removeEventListener("popstate", a)
						})
				}
			}
		}
		var dH = bM("[SegmentIntegration]")
		function dI(a, b) {
			var c = a.config.segment
			if (!c) return b()
			!(function (a, b) {
				var c = a.config.segment
				if (!c) return b()
				var d = (c) => {
						var d = () => c.anonymousId() || dk()
						;(a.config.get_device_id = d),
							c.id() &&
								(a.register({ distinct_id: c.id(), $device_id: d() }),
								a.persistence.set_property(cn, "identified")),
							b()
					},
					e = c.user()
				"then" in e && _(e.then) ? e.then(d) : d(e)
			})(a, () => {
				c.register(
					((a) => {
						;(Promise && Promise.resolve) ||
							dH.warn(
								"This browser does not have Promise support, and can not use the segment integration",
							)
						var b = (b, c) => {
							if (!c) return b
							b.event.userId ||
								b.event.anonymousId === a.get_distinct_id() ||
								(dH.info("No userId set, resetting PostHog"), a.reset()),
								b.event.userId &&
									b.event.userId !== a.get_distinct_id() &&
									(dH.info("UserId set, identifying with PostHog"), a.identify(b.event.userId))
							var d = a.calculateEventProperties(c, b.event.properties)
							return (b.event.properties = Object.assign({}, d, b.event.properties)), b
						}
						return {
							name: "PostHog JS",
							type: "enrichment",
							version: "1.0.0",
							isLoaded: () => !0,
							load: () => Promise.resolve(),
							track: (a) => b(a, a.event.event),
							page: (a) => b(a, "$pageview"),
							identify: (a) => b(a, "$identify"),
							screen: (a) => b(a, "$screen"),
						}
					})(a),
				).then(() => {
					b()
				})
			})
		}
		var dJ = "posthog-js"
		function dK(a, b) {
			var {
				organization: c,
				projectId: d,
				prefix: e,
				severityAllowList: f = ["error"],
				sendExceptionsToPostHog: g = !0,
			} = void 0 === b ? {} : b
			return (b) => {
				if (!("*" === f || f.includes(b.level)) || !a.__loaded) return b
				b.tags || (b.tags = {})
				var h,
					i,
					j,
					k,
					l,
					m = a.requestRouter.endpointFor(
						"ui",
						"/project/" + a.config.token + "/person/" + a.get_distinct_id(),
					)
				;(b.tags["PostHog Person URL"] = m),
					a.sessionRecordingStarted() &&
						(b.tags["PostHog Recording URL"] = a.get_session_replay_url({ withTimestamp: !0 }))
				var n = (null == (h = b.exception) ? void 0 : h.values) || [],
					o = n.map((a) =>
						O({}, a, {
							stacktrace: a.stacktrace
								? O({}, a.stacktrace, {
										type: "raw",
										frames: (a.stacktrace.frames || []).map((a) =>
											O({}, a, { platform: "web:javascript" }),
										),
									})
								: void 0,
						}),
					),
					p = {
						$exception_message: (null == (i = n[0]) ? void 0 : i.value) || b.message,
						$exception_type: null == (j = n[0]) ? void 0 : j.type,
						$exception_level: b.level,
						$exception_list: o,
						$sentry_event_id: b.event_id,
						$sentry_exception: b.exception,
						$sentry_exception_message: (null == (k = n[0]) ? void 0 : k.value) || b.message,
						$sentry_exception_type: null == (l = n[0]) ? void 0 : l.type,
						$sentry_tags: b.tags,
					}
				return (
					c &&
						d &&
						(p.$sentry_url =
							(e || "https://sentry.io/organizations/") +
							c +
							"/issues/?project=" +
							d +
							"&query=" +
							b.event_id),
					g && a.exceptions.sendExceptionEvent(p),
					b
				)
			}
		}
		class dL {
			constructor(a, b, c, d, e, f) {
				;(this.name = dJ),
					(this.setupOnce = function (g) {
						g(
							dK(a, {
								organization: b,
								projectId: c,
								prefix: d,
								severityAllowList: e,
								sendExceptionsToPostHog: null == f || f,
							}),
						)
					})
			}
		}
		var dM = null != y && y.location ? c6(y.location.hash, "__posthog") || c6(location.hash, "state") : null,
			dN = "_postHogToolbarParams",
			dO = bM("[Toolbar]"),
			dP = (function (a) {
				return (
					(a[(a.UNINITIALIZED = 0)] = "UNINITIALIZED"),
					(a[(a.LOADING = 1)] = "LOADING"),
					(a[(a.LOADED = 2)] = "LOADED"),
					a
				)
			})(dP || {})
		class dQ {
			constructor(a) {
				this.instance = a
			}
			bt(a) {
				K.ph_toolbar_state = a
			}
			wt() {
				var a
				return null != (a = K.ph_toolbar_state) ? a : dP.UNINITIALIZED
			}
			maybeLoadToolbar(a, b, c) {
				if (
					(void 0 === a && (a = void 0), void 0 === b && (b = void 0), void 0 === c && (c = void 0), !y || !E)
				)
					return !1
				;(a = null != a ? a : y.location), (c = null != c ? c : y.history)
				try {
					if (!b) {
						try {
							y.localStorage.setItem("test", "test"), y.localStorage.removeItem("test")
						} catch (a) {
							return !1
						}
						b = null == y ? void 0 : y.localStorage
					}
					var d,
						e = dM || c6(a.hash, "__posthog") || c6(a.hash, "state"),
						f = e
							? bV(() => JSON.parse(atob(decodeURIComponent(e)))) ||
								bV(() => JSON.parse(decodeURIComponent(e)))
							: null
					return (
						f && "ph_authorize" === f.action
							? (((d = f).source = "url"),
								d &&
									Object.keys(d).length > 0 &&
									(f.desiredHash
										? (a.hash = f.desiredHash)
										: c
											? c.replaceState(c.state, "", a.pathname + a.search)
											: (a.hash = "")))
							: (((d = JSON.parse(b.getItem(dN) || "{}")).source = "localstorage"), delete d.userIntent),
						!(!d.token || this.instance.config.token !== d.token) && (this.loadToolbar(d), !0)
					)
				} catch (a) {
					return !1
				}
			}
			xt(a) {
				var b = K.ph_load_toolbar || K.ph_load_editor
				!ag(b) && _(b) ? b(a, this.instance) : dO.warn("No toolbar load function found")
			}
			loadToolbar(a) {
				return null != E && E.getElementById(cu), !1
			}
			Et(a) {
				return this.loadToolbar(a)
			}
			maybeLoadEditor(a, b, c) {
				return (
					void 0 === a && (a = void 0),
					void 0 === b && (b = void 0),
					void 0 === c && (c = void 0),
					this.maybeLoadToolbar(a, b, c)
				)
			}
		}
		var dR = bM("[TracingHeaders]")
		class dS {
			constructor(a) {
				;(this.$t = void 0),
					(this.St = void 0),
					(this.rt = () => {
						var a, b
						ac(this.$t) &&
							(null == (a = K.__PosthogExtensions__) ||
								null == (a = a.tracingHeadersPatchFns) ||
								a._patchXHR(
									this._instance.config.__add_tracing_headers || [],
									this._instance.get_distinct_id(),
									this._instance.sessionManager,
								)),
							ac(this.St) &&
								(null == (b = K.__PosthogExtensions__) ||
									null == (b = b.tracingHeadersPatchFns) ||
									b._patchFetch(
										this._instance.config.__add_tracing_headers || [],
										this._instance.get_distinct_id(),
										this._instance.sessionManager,
									))
					}),
					(this._instance = a)
			}
			it(a) {
				var b, c
				null != (b = K.__PosthogExtensions__) && b.tracingHeadersPatchFns && a(),
					null == (c = K.__PosthogExtensions__) ||
						null == c.loadExternalDependency ||
						c.loadExternalDependency(this._instance, "tracing-headers", (b) => {
							if (b) return dR.error("failed to load script", b)
							a()
						})
			}
			startIfEnabledOrStop() {
				var a, b
				this._instance.config.__add_tracing_headers
					? this.it(this.rt)
					: (null == (a = this.$t) || a.call(this),
						null == (b = this.St) || b.call(this),
						(this.$t = void 0),
						(this.St = void 0))
			}
		}
		var dT = "https?://(.*)",
			dU = [
				"gclid",
				"gclsrc",
				"dclid",
				"gbraid",
				"wbraid",
				"fbclid",
				"msclkid",
				"twclid",
				"li_fat_id",
				"igshid",
				"ttclid",
				"rdt_cid",
				"epik",
				"qclid",
				"sccid",
				"irclid",
				"_kx",
			],
			dV = bT(
				["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid"],
				dU,
			),
			dW = "<masked>",
			dX = ["li_fat_id"]
		function dY(a, b, c) {
			if (!E) return {}
			var d,
				e = b ? bT([], dU, c || []) : [],
				f = dZ(c5(E.URL, e, dW), a)
			return bS(
				((d = {}),
				bR(dX, function (a) {
					var b = dq.q(a)
					d[a] = b || null
				}),
				d),
				f,
			)
		}
		function dZ(a, b) {
			var c = dV.concat(b || []),
				d = {}
			return (
				bR(c, function (b) {
					var c = c4(a, b)
					d[b] = c || null
				}),
				d
			)
		}
		function d$(a) {
			var b = (function (a) {
					return a
						? 0 === a.search(dT + "google.([^/?]*)")
							? "google"
							: 0 === a.search(dT + "bing.com")
								? "bing"
								: 0 === a.search(dT + "yahoo.com")
									? "yahoo"
									: 0 === a.search(dT + "duckduckgo.com")
										? "duckduckgo"
										: null
						: null
				})(a),
				c = "yahoo" != b ? "q" : "p",
				d = {}
			if (!af(b)) {
				d.$search_engine = b
				var e = E ? c4(E.referrer, c) : ""
				e.length && (d.ph_keyword = e)
			}
			return d
		}
		function d_() {
			return navigator.language || navigator.userLanguage
		}
		function d0() {
			return (null == E ? void 0 : E.referrer) || "$direct"
		}
		function d1(a, b) {
			var c = a ? bT([], dU, b || []) : [],
				d = null == F ? void 0 : F.href.substring(0, 1e3)
			return { r: d0().substring(0, 1e3), u: d ? c5(d, c, dW) : void 0 }
		}
		function d2(a) {
			var b,
				{ r: c, u: d } = a,
				e = {
					$referrer: c,
					$referring_domain:
						null == c ? void 0 : "$direct" == c ? "$direct" : null == (b = c2(c)) ? void 0 : b.host,
				}
			if (d) {
				e.$current_url = d
				var f = c2(d)
				;(e.$host = null == f ? void 0 : f.host), (e.$pathname = null == f ? void 0 : f.pathname), bS(e, dZ(d))
			}
			return c && bS(e, d$(c)), e
		}
		function d3() {
			try {
				return Intl.DateTimeFormat().resolvedOptions().timeZone
			} catch (a) {
				return
			}
		}
		function d4() {
			try {
				return new Date().getTimezoneOffset()
			} catch (a) {
				return
			}
		}
		function d5(a, b) {
			if (!J) return {}
			var c,
				d,
				e = a ? bT([], dU, b || []) : [],
				[f, g] = (function (a) {
					for (var b = 0; b < bh.length; b++) {
						var [c, d] = bh[b],
							e = c.exec(a),
							f = e && (_(d) ? d(e, a) : d)
						if (f) return f
					}
					return ["", ""]
				})(J)
			return bS(
				bX({
					$os: f,
					$os_version: g,
					$browser: be(J, navigator.vendor),
					$device: bi(J),
					$device_type:
						(d = bi(J)) === aC || d === aB || "Kobo" === d || "Kindle Fire" === d || d === a4
							? aA
							: d === aV || d === aX || d === aW || d === a1
								? "Console"
								: d === aE
									? "Wearable"
									: d
										? ax
										: "Desktop",
					$timezone: d3(),
					$timezone_offset: d4(),
				}),
				{
					$current_url: c5(null == F ? void 0 : F.href, e, dW),
					$host: null == F ? void 0 : F.host,
					$pathname: null == F ? void 0 : F.pathname,
					$raw_user_agent: J.length > 1e3 ? J.substring(0, 997) + "..." : J,
					$browser_version: bg(J, navigator.vendor),
					$browser_language: d_(),
					$browser_language_prefix: "string" == typeof (c = d_()) ? c.split("-")[0] : void 0,
					$screen_height: null == y ? void 0 : y.screen.height,
					$screen_width: null == y ? void 0 : y.screen.width,
					$viewport_height: null == y ? void 0 : y.innerHeight,
					$viewport_width: null == y ? void 0 : y.innerWidth,
					$lib: "web",
					$lib_version: L.LIB_VERSION,
					$insert_id:
						Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
					$time: Date.now() / 1e3,
				},
			)
		}
		var d6 = bM("[Web Vitals]"),
			d7 = 9e5
		class d8 {
			constructor(a) {
				var b
				;(this.kt = !1),
					(this.P = !1),
					(this.N = { url: void 0, metrics: [], firstMetricTimestamp: void 0 }),
					(this.Pt = () => {
						clearTimeout(this.Tt),
							0 !== this.N.metrics.length &&
								(this._instance.capture(
									"$web_vitals",
									this.N.metrics.reduce(
										(a, b) =>
											O({}, a, {
												["$web_vitals_" + b.name + "_event"]: O({}, b),
												["$web_vitals_" + b.name + "_value"]: b.value,
											}),
										{},
									),
								),
								(this.N = { url: void 0, metrics: [], firstMetricTimestamp: void 0 }))
					}),
					(this.It = (a) => {
						var b,
							c =
								null == (b = this._instance.sessionManager)
									? void 0
									: b.checkAndGetSessionAndWindowId(!0)
						if (ac(c)) d6.error("Could not read session ID. Dropping metrics!")
						else {
							this.N = this.N || { url: void 0, metrics: [], firstMetricTimestamp: void 0 }
							var d = this.Ct()
							ac(d) ||
								(ag(null == a ? void 0 : a.name) || ag(null == a ? void 0 : a.value)
									? d6.error("Invalid metric received", a)
									: this.Rt && a.value >= this.Rt
										? d6.error("Ignoring metric with value >= " + this.Rt, a)
										: (this.N.url !== d &&
												(this.Pt(),
												(this.Tt = setTimeout(this.Pt, this.flushToCaptureTimeoutMs))),
											ac(this.N.url) && (this.N.url = d),
											(this.N.firstMetricTimestamp = ac(this.N.firstMetricTimestamp)
												? Date.now()
												: this.N.firstMetricTimestamp),
											a.attribution &&
												a.attribution.interactionTargetElement &&
												(a.attribution.interactionTargetElement = void 0),
											this.N.metrics.push(
												O({}, a, {
													$current_url: d,
													$session_id: c.sessionId,
													$window_id: c.windowId,
													timestamp: Date.now(),
												}),
											),
											this.N.metrics.length === this.allowedMetrics.length && this.Pt()))
						}
					}),
					(this.rt = () => {
						if (!this.P) {
							var a,
								b,
								c,
								d,
								e = K.__PosthogExtensions__
							ac(e) ||
								ac(e.postHogWebVitalsCallbacks) ||
								({ onLCP: a, onCLS: b, onFCP: c, onINP: d } = e.postHogWebVitalsCallbacks),
								a && b && c && d
									? (this.allowedMetrics.indexOf("LCP") > -1 && a(this.It.bind(this)),
										this.allowedMetrics.indexOf("CLS") > -1 && b(this.It.bind(this)),
										this.allowedMetrics.indexOf("FCP") > -1 && c(this.It.bind(this)),
										this.allowedMetrics.indexOf("INP") > -1 && d(this.It.bind(this)),
										(this.P = !0))
									: d6.error("web vitals callbacks not loaded - not starting")
						}
					}),
					(this._instance = a),
					(this.kt = !(null == (b = this._instance.persistence) || !b.props[b9])),
					this.startIfEnabled()
			}
			get allowedMetrics() {
				var a,
					b,
					c = aa(this._instance.config.capture_performance)
						? null == (a = this._instance.config.capture_performance)
							? void 0
							: a.web_vitals_allowed_metrics
						: void 0
				return ag(c)
					? (null == (b = this._instance.persistence) ? void 0 : b.props[cc]) || ["CLS", "FCP", "INP", "LCP"]
					: c
			}
			get flushToCaptureTimeoutMs() {
				return (
					(aa(this._instance.config.capture_performance)
						? this._instance.config.capture_performance.web_vitals_delayed_flush_ms
						: void 0) || 5e3
				)
			}
			get useAttribution() {
				var a = aa(this._instance.config.capture_performance)
					? this._instance.config.capture_performance.web_vitals_attribution
					: void 0
				return null != a && a
			}
			get Rt() {
				var a =
					aa(this._instance.config.capture_performance) &&
					ah(this._instance.config.capture_performance.__web_vitals_max_value)
						? this._instance.config.capture_performance.__web_vitals_max_value
						: d7
				return 0 < a && a <= 6e4 ? d7 : a
			}
			get isEnabled() {
				var a = null == F ? void 0 : F.protocol
				if ("http:" !== a && "https:" !== a)
					return d6.info("Web Vitals are disabled on non-http/https protocols"), !1
				var b = aa(this._instance.config.capture_performance)
					? this._instance.config.capture_performance.web_vitals
					: aj(this._instance.config.capture_performance)
						? this._instance.config.capture_performance
						: void 0
				return aj(b) ? b : this.kt
			}
			startIfEnabled() {
				this.isEnabled && !this.P && (d6.info("enabled, starting..."), this.it(this.rt))
			}
			onRemoteConfig(a) {
				var b = aa(a.capturePerformance) && !!a.capturePerformance.web_vitals,
					c = aa(a.capturePerformance) ? a.capturePerformance.web_vitals_allowed_metrics : void 0
				this._instance.persistence &&
					(this._instance.persistence.register({ [b9]: b }),
					this._instance.persistence.register({ [cc]: c })),
					(this.kt = b),
					this.startIfEnabled()
			}
			it(a) {
				var b, c
				if (null != (b = K.__PosthogExtensions__) && b.postHogWebVitalsCallbacks) a()
				else {
					var d = this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
					null == (c = K.__PosthogExtensions__) ||
						null == c.loadExternalDependency ||
						c.loadExternalDependency(this._instance, d, (b) => {
							b ? d6.error("failed to load script", b) : a()
						})
				}
			}
			Ct() {
				d6.error("Could not determine current URL")
			}
		}
		var d9 = bM("[Heatmaps]")
		function ea(a) {
			return aa(a) && "clientX" in a && "clientY" in a && ah(a.clientX) && ah(a.clientY)
		}
		class eb {
			constructor(a) {
				var b
				;(this.kt = !1),
					(this.P = !1),
					(this.Ft = null),
					(this.instance = a),
					(this.kt = !(null == (b = this.instance.persistence) || !b.props[b5])),
					(this.rageclicks = new c1(a.config.rageclick))
			}
			get flushIntervalMilliseconds() {
				var a = 5e3
				return (
					aa(this.instance.config.capture_heatmaps) &&
						this.instance.config.capture_heatmaps.flush_interval_milliseconds &&
						(a = this.instance.config.capture_heatmaps.flush_interval_milliseconds),
					a
				)
			}
			get isEnabled() {
				return ag(this.instance.config.capture_heatmaps)
					? ag(this.instance.config.enable_heatmaps)
						? this.kt
						: this.instance.config.enable_heatmaps
					: !1 !== this.instance.config.capture_heatmaps
			}
			startIfEnabled() {
				if (this.isEnabled) this.P || (d9.info("starting..."), this.Mt(), this.Ot())
				else {
					var a
					clearInterval(null != (a = this.Ft) ? a : void 0), this.At(), this.getAndClearBuffer()
				}
			}
			onRemoteConfig(a) {
				var b = !!a.heatmaps
				this.instance.persistence && this.instance.persistence.register({ [b5]: b }),
					(this.kt = b),
					this.startIfEnabled()
			}
			getAndClearBuffer() {
				var a = this.N
				return (this.N = void 0), a
			}
			Dt(a) {
				this.jt(a.originalEvent, "deadclick")
			}
			Ot() {
				this.Ft && clearInterval(this.Ft),
					(this.Ft = !(function (a) {
						return "visible" === (null == a ? void 0 : a.visibilityState)
					})(E)
						? null
						: setInterval(this.Lt.bind(this), this.flushIntervalMilliseconds))
			}
			Mt() {
				y &&
					E &&
					((this.Nt = this.Lt.bind(this)),
					b0(y, "beforeunload", this.Nt),
					(this.Ut = (a) => this.jt(a || (null == y ? void 0 : y.event))),
					b0(E, "click", this.Ut, { capture: !0 }),
					(this.zt = (a) => this.Ht(a || (null == y ? void 0 : y.event))),
					b0(E, "mousemove", this.zt, { capture: !0 }),
					(this.Bt = new dD(this.instance, dB, this.Dt.bind(this))),
					this.Bt.startIfEnabled(),
					(this.qt = this.Ot.bind(this)),
					b0(E, "visibilitychange", this.qt),
					(this.P = !0))
			}
			At() {
				var a
				y &&
					E &&
					(this.Nt && y.removeEventListener("beforeunload", this.Nt),
					this.Ut && E.removeEventListener("click", this.Ut, { capture: !0 }),
					this.zt && E.removeEventListener("mousemove", this.zt, { capture: !0 }),
					this.qt && E.removeEventListener("visibilitychange", this.qt),
					clearTimeout(this.Wt),
					null == (a = this.Bt) || a.stop(),
					(this.P = !1))
			}
			Gt(a, b) {
				var c = this.instance.scrollManager.scrollY(),
					d = this.instance.scrollManager.scrollX(),
					e = this.instance.scrollManager.scrollElement(),
					f = (function (a, b, c) {
						for (var d = a; d && cy(d) && !cz(d, "body") && d !== c; ) {
							if (T(b, null == y ? void 0 : y.getComputedStyle(d).position)) return !0
							d = cK(d)
						}
						return !1
					})(cH(a), ["fixed", "sticky"], e)
				return { x: a.clientX + (f ? 0 : d), y: a.clientY + (f ? 0 : c), target_fixed: f, type: b }
			}
			jt(a, b) {
				var c
				if ((void 0 === b && (b = "click"), !cx(a.target) && ea(a))) {
					var d = this.Gt(a, b)
					null != (c = this.rageclicks) &&
						c.isRageClick(a.clientX, a.clientY, new Date().getTime()) &&
						this.Vt(O({}, d, { type: "rageclick" })),
						this.Vt(d)
				}
			}
			Ht(a) {
				!cx(a.target) &&
					ea(a) &&
					(clearTimeout(this.Wt),
					(this.Wt = setTimeout(() => {
						this.Vt(this.Gt(a, "mousemove"))
					}, 500)))
			}
			Vt(a) {}
			Lt() {
				this.N && !ab(this.N) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() })
			}
		}
		class ec {
			constructor(a) {
				;(this.Jt = (a, b, c) => {
					c &&
						(c.noSessionId || c.activityTimeout || c.sessionPastMaximumLength) &&
						(bL.info("[PageViewManager] Session rotated, clearing pageview state", {
							sessionId: a,
							changeReason: c,
						}),
						(this.Kt = void 0),
						this._instance.scrollManager.resetContext())
				}),
					(this._instance = a),
					this.Yt()
			}
			Yt() {
				var a
				this.Xt = null == (a = this._instance.sessionManager) ? void 0 : a.onSessionId(this.Jt)
			}
			destroy() {
				var a
				null == (a = this.Xt) || a.call(this), (this.Xt = void 0)
			}
			doPageView(a, b) {
				var c,
					d = this.Qt(a, b)
				return (
					(this.Kt = {
						pathname: null != (c = null == y ? void 0 : y.location.pathname) ? c : "",
						pageViewId: b,
						timestamp: a,
					}),
					this._instance.scrollManager.resetContext(),
					d
				)
			}
			doPageLeave(a) {
				var b
				return this.Qt(a, null == (b = this.Kt) ? void 0 : b.pageViewId)
			}
			doEvent() {
				var a
				return { $pageview_id: null == (a = this.Kt) ? void 0 : a.pageViewId }
			}
			Qt(a, b) {
				var c = this.Kt
				if (!c) return { $pageview_id: b }
				var d = { $pageview_id: b, $prev_pageview_id: c.pageViewId },
					e = this._instance.scrollManager.getContext()
				if (e && !this._instance.config.disable_scroll_properties) {
					var {
						maxScrollHeight: f,
						lastScrollY: g,
						maxScrollY: h,
						maxContentHeight: i,
						lastContentY: j,
						maxContentY: k,
					} = e
					if (!(ac(f) || ac(g) || ac(h) || ac(i) || ac(j) || ac(k))) {
						;(f = Math.ceil(f)),
							(g = Math.ceil(g)),
							(h = Math.ceil(h)),
							(i = Math.ceil(i)),
							(j = Math.ceil(j)),
							(k = Math.ceil(k))
						var l = f <= 1 ? 1 : as(g / f, 0, 1, bL),
							m = f <= 1 ? 1 : as(h / f, 0, 1, bL),
							n = i <= 1 ? 1 : as(j / i, 0, 1, bL),
							o = i <= 1 ? 1 : as(k / i, 0, 1, bL)
						d = bS(d, {
							$prev_pageview_last_scroll: g,
							$prev_pageview_last_scroll_percentage: l,
							$prev_pageview_max_scroll: h,
							$prev_pageview_max_scroll_percentage: m,
							$prev_pageview_last_content: j,
							$prev_pageview_last_content_percentage: n,
							$prev_pageview_max_content: k,
							$prev_pageview_max_content_percentage: o,
						})
					}
				}
				return (
					c.pathname && (d.$prev_pageview_pathname = c.pathname),
					c.timestamp && (d.$prev_pageview_duration = (a.getTime() - c.timestamp.getTime()) / 1e3),
					d
				)
			}
		}
		var ed = (function (a) {
				return (a.GZipJS = "gzip-js"), (a.Base64 = "base64"), a
			})({}),
			ee = Uint8Array,
			ef = Uint16Array,
			eg = Uint32Array,
			eh = new ee([
				0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
			]),
			ei = new ee([
				0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
			]),
			ej = new ee([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
			ek = function (a, b) {
				for (var c = new ef(31), d = 0; d < 31; ++d) c[d] = b += 1 << a[d - 1]
				var e = new eg(c[30])
				for (d = 1; d < 30; ++d) for (var f = c[d]; f < c[d + 1]; ++f) e[f] = ((f - c[d]) << 5) | d
				return [c, e]
			},
			el = ek(eh, 2),
			em = el[0],
			en = el[1]
		;(em[28] = 258), (en[258] = 28)
		for (var eo = ek(ei, 0)[1], ep = new ef(32768), eq = 0; eq < 32768; ++eq) {
			var er = ((43690 & eq) >>> 1) | ((21845 & eq) << 1)
			;(er = ((61680 & (er = ((52428 & er) >>> 2) | ((13107 & er) << 2))) >>> 4) | ((3855 & er) << 4)),
				(ep[eq] = (((65280 & er) >>> 8) | ((255 & er) << 8)) >>> 1)
		}
		var es = function (a, b, c) {
				for (var d = a.length, e = 0, f = new ef(b); e < d; ++e) ++f[a[e] - 1]
				var g,
					h = new ef(b)
				for (e = 0; e < b; ++e) h[e] = (h[e - 1] + f[e - 1]) << 1
				if (c) {
					g = new ef(1 << b)
					var i = 15 - b
					for (e = 0; e < d; ++e)
						if (a[e])
							for (
								var j = (e << 4) | a[e], k = b - a[e], l = h[a[e] - 1]++ << k, m = l | ((1 << k) - 1);
								l <= m;
								++l
							)
								g[ep[l] >>> i] = j
				} else for (g = new ef(d), e = 0; e < d; ++e) g[e] = ep[h[a[e] - 1]++] >>> (15 - a[e])
				return g
			},
			et = new ee(288)
		for (eq = 0; eq < 144; ++eq) et[eq] = 8
		for (eq = 144; eq < 256; ++eq) et[eq] = 9
		for (eq = 256; eq < 280; ++eq) et[eq] = 7
		for (eq = 280; eq < 288; ++eq) et[eq] = 8
		var eu = new ee(32)
		for (eq = 0; eq < 32; ++eq) eu[eq] = 5
		var ev = es(et, 9, 0),
			ew = es(eu, 5, 0),
			ex = function (a) {
				return ((a / 8) | 0) + (7 & a && 1)
			},
			ey = function (a, b, c) {
				;(null == c || c > a.length) && (c = a.length)
				var d = new (a instanceof ef ? ef : a instanceof eg ? eg : ee)(c - b)
				return d.set(a.subarray(b, c)), d
			},
			ez = function (a, b, c) {
				c <<= 7 & b
				var d = (b / 8) | 0
				;(a[d] |= c), (a[d + 1] |= c >>> 8)
			},
			eA = function (a, b, c) {
				c <<= 7 & b
				var d = (b / 8) | 0
				;(a[d] |= c), (a[d + 1] |= c >>> 8), (a[d + 2] |= c >>> 16)
			},
			eB = function (a, b) {
				for (var c = [], d = 0; d < a.length; ++d) a[d] && c.push({ s: d, f: a[d] })
				var e = c.length,
					f = c.slice()
				if (!e) return [new ee(0), 0]
				if (1 == e) {
					var g = new ee(c[0].s + 1)
					return (g[c[0].s] = 1), [g, 1]
				}
				c.sort(function (a, b) {
					return a.f - b.f
				}),
					c.push({ s: -1, f: 25001 })
				var h = c[0],
					i = c[1],
					j = 0,
					k = 1,
					l = 2
				for (c[0] = { s: -1, f: h.f + i.f, l: h, r: i }; k != e - 1; )
					(h = c[c[j].f < c[l].f ? j++ : l++]),
						(i = c[j != k && c[j].f < c[l].f ? j++ : l++]),
						(c[k++] = { s: -1, f: h.f + i.f, l: h, r: i })
				var m = f[0].s
				for (d = 1; d < e; ++d) f[d].s > m && (m = f[d].s)
				var n = new ef(m + 1),
					o = eC(c[k - 1], n, 0)
				if (o > b) {
					d = 0
					var p = 0,
						q = o - b,
						r = 1 << q
					for (
						f.sort(function (a, b) {
							return n[b.s] - n[a.s] || a.f - b.f
						});
						d < e;
						++d
					) {
						var s = f[d].s
						if (!(n[s] > b)) break
						;(p += r - (1 << (o - n[s]))), (n[s] = b)
					}
					for (p >>>= q; p > 0; ) {
						var t = f[d].s
						n[t] < b ? (p -= 1 << (b - n[t]++ - 1)) : ++d
					}
					for (; d >= 0 && p; --d) {
						var u = f[d].s
						n[u] == b && (--n[u], ++p)
					}
					o = b
				}
				return [new ee(n), o]
			},
			eC = function (a, b, c) {
				return -1 == a.s ? Math.max(eC(a.l, b, c + 1), eC(a.r, b, c + 1)) : (b[a.s] = c)
			},
			eD = function (a) {
				for (var b = a.length; b && !a[--b]; );
				for (
					var c = new ef(++b),
						d = 0,
						e = a[0],
						f = 1,
						g = function (a) {
							c[d++] = a
						},
						h = 1;
					h <= b;
					++h
				)
					if (a[h] == e && h != b) ++f
					else {
						if (!e && f > 2) {
							for (; f > 138; f -= 138) g(32754)
							f > 2 && (g(f > 10 ? ((f - 11) << 5) | 28690 : ((f - 3) << 5) | 12305), (f = 0))
						} else if (f > 3) {
							for (g(e), --f; f > 6; f -= 6) g(8304)
							f > 2 && (g(((f - 3) << 5) | 8208), (f = 0))
						}
						for (; f--; ) g(e)
						;(f = 1), (e = a[h])
					}
				return [c.subarray(0, d), b]
			},
			eE = function (a, b) {
				for (var c = 0, d = 0; d < b.length; ++d) c += a[d] * b[d]
				return c
			},
			eF = function (a, b, c) {
				var d = c.length,
					e = ex(b + 2)
				;(a[e] = 255 & d), (a[e + 1] = d >>> 8), (a[e + 2] = 255 ^ a[e]), (a[e + 3] = 255 ^ a[e + 1])
				for (var f = 0; f < d; ++f) a[e + f + 4] = c[f]
				return 8 * (e + 4 + d)
			},
			eG = function (a, b, c, d, e, f, g, h, i, j, k) {
				ez(b, k++, c), ++e[256]
				for (
					var l = eB(e, 15),
						m = l[0],
						n = l[1],
						o = eB(f, 15),
						p = o[0],
						q = o[1],
						r = eD(m),
						s = r[0],
						t = r[1],
						u = eD(p),
						v = u[0],
						w = u[1],
						x = new ef(19),
						y = 0;
					y < s.length;
					++y
				)
					x[31 & s[y]]++
				for (y = 0; y < v.length; ++y) x[31 & v[y]]++
				for (var z = eB(x, 7), A = z[0], B = z[1], C = 19; C > 4 && !A[ej[C - 1]]; --C);
				var D,
					E,
					F,
					G,
					H = (j + 5) << 3,
					I = eE(e, et) + eE(f, eu) + g,
					J = eE(e, m) + eE(f, p) + g + 14 + 3 * C + eE(x, A) + (2 * x[16] + 3 * x[17] + 7 * x[18])
				if (H <= I && H <= J) return eF(b, k, a.subarray(i, i + j))
				if ((ez(b, k, 1 + (J < I)), (k += 2), J < I)) {
					;(D = es(m, n, 0)), (E = m), (F = es(p, q, 0)), (G = p)
					var K = es(A, B, 0)
					for (ez(b, k, t - 257), ez(b, k + 5, w - 1), ez(b, k + 10, C - 4), k += 14, y = 0; y < C; ++y)
						ez(b, k + 3 * y, A[ej[y]])
					k += 3 * C
					for (var L = [s, v], M = 0; M < 2; ++M) {
						var N = L[M]
						for (y = 0; y < N.length; ++y) {
							var O = 31 & N[y]
							ez(b, k, K[O]), (k += A[O]), O > 15 && (ez(b, k, (N[y] >>> 5) & 127), (k += N[y] >>> 12))
						}
					}
				} else (D = ev), (E = et), (F = ew), (G = eu)
				for (y = 0; y < h; ++y)
					if (d[y] > 255) {
						eA(b, k, D[(O = (d[y] >>> 18) & 31) + 257]),
							(k += E[O + 257]),
							O > 7 && (ez(b, k, (d[y] >>> 23) & 31), (k += eh[O]))
						var P = 31 & d[y]
						eA(b, k, F[P]), (k += G[P]), P > 3 && (eA(b, k, (d[y] >>> 5) & 8191), (k += ei[P]))
					} else eA(b, k, D[d[y]]), (k += E[d[y]])
				return eA(b, k, D[256]), k + E[256]
			},
			eH = new eg([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
			eI = (function () {
				for (var a = new eg(256), b = 0; b < 256; ++b) {
					for (var c = b, d = 9; --d; ) c = (1 & c && 0xedb88320) ^ (c >>> 1)
					a[b] = c
				}
				return a
			})(),
			eJ = function (a, b, c, d, e) {
				return (function (a, b, c, d, e, f) {
					var g = a.length,
						h = new ee(d + g + 5 * (1 + Math.floor(g / 7e3)) + e),
						i = h.subarray(d, h.length - e),
						j = 0
					if (!b || g < 8)
						for (var k = 0; k <= g; k += 65535) {
							var l = k + 65535
							l < g ? (j = eF(i, j, a.subarray(k, l))) : ((i[k] = f), (j = eF(i, j, a.subarray(k, g))))
						}
					else {
						for (
							var m = eH[b - 1],
								n = m >>> 13,
								o = 8191 & m,
								p = (1 << c) - 1,
								q = new ef(32768),
								r = new ef(p + 1),
								s = Math.ceil(c / 3),
								t = 2 * s,
								u = function (b) {
									return (a[b] ^ (a[b + 1] << s) ^ (a[b + 2] << t)) & p
								},
								v = new eg(25e3),
								w = new ef(288),
								x = new ef(32),
								y = 0,
								z = 0,
								A = ((k = 0), 0),
								B = 0,
								C = 0;
							k < g;
							++k
						) {
							var D = u(k),
								E = 32767 & k,
								F = r[D]
							if (((q[E] = F), (r[D] = E), B <= k)) {
								var G = g - k
								if ((y > 7e3 || A > 24576) && G > 423) {
									;(j = eG(a, i, 0, v, w, x, z, A, C, k - C, j)), (A = y = z = 0), (C = k)
									for (var H = 0; H < 286; ++H) w[H] = 0
									for (H = 0; H < 30; ++H) x[H] = 0
								}
								var I = 2,
									J = 0,
									K = o,
									L = (E - F) & 32767
								if (G > 2 && D == u(k - L))
									for (
										var M = Math.min(n, G) - 1, N = Math.min(32767, k), O = Math.min(258, G);
										L <= N && --K && E != F;

									) {
										if (a[k + I] == a[k + I - L]) {
											for (var P = 0; P < O && a[k + P] == a[k + P - L]; ++P);
											if (P > I) {
												if (((I = P), (J = L), P > M)) break
												var Q = Math.min(L, P - 2),
													R = 0
												for (H = 0; H < Q; ++H) {
													var S = (k - L + H + 32768) & 32767,
														T = (S - q[S] + 32768) & 32767
													T > R && ((R = T), (F = S))
												}
											}
										}
										L += ((E = F) - (F = q[E]) + 32768) & 32767
									}
								if (J) {
									v[A++] = 0x10000000 | (en[I] << 18) | eo[J]
									var U = 31 & en[I],
										V = 31 & eo[J]
									;(z += eh[U] + ei[V]), ++w[257 + U], ++x[V], (B = k + I), ++y
								} else (v[A++] = a[k]), ++w[a[k]]
							}
						}
						j = eG(a, i, f, v, w, x, z, A, C, k - C, j)
					}
					return ey(h, 0, d + ex(j) + e)
				})(
					a,
					null == b.level ? 6 : b.level,
					null == b.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(a.length)))) : 12 + b.mem,
					c,
					d,
					!0,
				)
			},
			eK = function (a, b, c) {
				for (; c; ++b) (a[b] = c), (c >>>= 8)
			}
		function eL(a, b) {
			void 0 === b && (b = {})
			var c = (function () {
					var a = 0xffffffff
					return {
						p: function (b) {
							for (var c = a, d = 0; d < b.length; ++d) c = eI[(255 & c) ^ b[d]] ^ (c >>> 8)
							a = c
						},
						d: function () {
							return 0xffffffff ^ a
						},
					}
				})(),
				d = a.length
			c.p(a)
			var e,
				f = eJ(a, b, 10 + (((e = b).filename && e.filename.length + 1) || 0), 8),
				g = f.length
			return (
				(function (a, b) {
					var c = b.filename
					if (
						((a[0] = 31),
						(a[1] = 139),
						(a[2] = 8),
						(a[8] = b.level < 2 ? 4 : 2 * (9 == b.level)),
						(a[9] = 3),
						0 != b.mtime && eK(a, 4, Math.floor(new Date(b.mtime || Date.now()) / 1e3)),
						c)
					) {
						a[3] = 8
						for (var d = 0; d <= c.length; ++d) a[d + 10] = c.charCodeAt(d)
					}
				})(f, b),
				eK(f, g - 8, c.d()),
				eK(f, g - 4, d),
				f
			)
		}
		var eM = function (a) {
				var b,
					c,
					d,
					e,
					f = ""
				for (
					b = c = 0, d = (a = (a + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, e = 0;
					e < d;
					e++
				) {
					var g = a.charCodeAt(e),
						h = null
					g < 128
						? c++
						: (h =
								g > 127 && g < 2048
									? String.fromCharCode((g >> 6) | 192, (63 & g) | 128)
									: String.fromCharCode((g >> 12) | 224, ((g >> 6) & 63) | 128, (63 & g) | 128)),
						af(h) || (c > b && (f += a.substring(b, c)), (f += h), (b = c = e + 1))
				}
				return c > b && (f += a.substring(b, a.length)), f
			},
			eN = !!H || !!G,
			eO = "text/plain",
			eP = function (a, b, c) {
				void 0 === c && (c = !0)
				var d,
					[e, f] = a.split("?"),
					g = O({}, b),
					h =
						null !=
						(d =
							null == f
								? void 0
								: f.split("&").map((a) => {
										var b,
											[d, e] = a.split("="),
											f = c && null != (b = g[d]) ? b : e
										return delete g[d], d + "=" + f
									}))
							? d
							: [],
					i = c3(g)
				return i && h.push(i), e + "?" + h.join("&")
			},
			eQ = (a, b) => JSON.stringify(a, (a, b) => ("bigint" == typeof b ? b.toString() : b), b),
			eR = (a) => {
				var { data: b, compression: c } = a
				if (b) {
					if (c === ed.GZipJS) {
						var d = new Blob(
							[
								eL(
									(function (a, b) {
										var c = a.length
										if ("u" > typeof TextEncoder) return new TextEncoder().encode(a)
										for (
											var d = new ee(a.length + (a.length >>> 1)),
												e = 0,
												f = function (a) {
													d[e++] = a
												},
												g = 0;
											g < c;
											++g
										) {
											if (e + 5 > d.length) {
												var h = new ee(e + 8 + ((c - g) << 1))
												h.set(d), (d = h)
											}
											var i = a.charCodeAt(g)
											i < 128
												? f(i)
												: (i < 2048
														? f(192 | (i >>> 6))
														: (i > 55295 && i < 57344
																? (f(
																		240 |
																			((i =
																				(65536 + (1047552 & i)) |
																				(1023 & a.charCodeAt(++g))) >>>
																				18),
																	),
																	f(128 | ((i >>> 12) & 63)))
																: f(224 | (i >>> 12)),
															f(128 | ((i >>> 6) & 63))),
													f(128 | (63 & i)))
										}
										return ey(d, 0, e)
									})(eQ(b)),
									{ mtime: 0 },
								),
							],
							{ type: eO },
						)
						return { contentType: eO, body: d, estimatedSize: d.size }
					}
					if (c === ed.Base64) {
						let a
						var e =
							"data=" +
							encodeURIComponent(
								"string" ==
									typeof (a = (function (a) {
										var b,
											c,
											d,
											e,
											f,
											g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
											h = 0,
											i = 0,
											j = "",
											k = []
										if (!a) return a
										a = eM(a)
										do
											(b =
												((f =
													(a.charCodeAt(h++) << 16) |
													(a.charCodeAt(h++) << 8) |
													a.charCodeAt(h++)) >>
													18) &
												63),
												(c = (f >> 12) & 63),
												(d = (f >> 6) & 63),
												(e = 63 & f),
												(k[i++] = g.charAt(b) + g.charAt(c) + g.charAt(d) + g.charAt(e))
										while (h < a.length)
										switch (((j = k.join("")), a.length % 3)) {
											case 1:
												j = j.slice(0, -2) + "=="
												break
											case 2:
												j = j.slice(0, -1) + "="
										}
										return j
									})(eQ(b)))
									? a
									: eQ(a),
							)
						return {
							contentType: "application/x-www-form-urlencoded",
							body: e,
							estimatedSize: new Blob([e]).size,
						}
					}
					var f = eQ(b)
					return { contentType: "application/json", body: f, estimatedSize: new Blob([f]).size }
				}
			},
			eS = []
		G &&
			eS.push({
				transport: "fetch",
				method: (a) => {
					var b,
						c,
						{ contentType: d, body: e, estimatedSize: f } = null != (b = eR(a)) ? b : {},
						g = new Headers()
					bR(a.headers, function (a, b) {
						g.append(b, a)
					}),
						d && g.append("Content-Type", d)
					var h = a.url,
						i = null
					if (I) {
						var j = new I()
						i = { signal: j.signal, timeout: setTimeout(() => j.abort(), a.timeout) }
					}
					G(
						h,
						O(
							{
								method: (null == a ? void 0 : a.method) || "GET",
								headers: g,
								keepalive: "POST" === a.method && 52428.8 > (f || 0),
								body: e,
								signal: null == (c = i) ? void 0 : c.signal,
							},
							a.fetchOptions,
						),
					)
						.then((b) =>
							b.text().then((c) => {
								var d = { statusCode: b.status, text: c }
								if (200 === b.status)
									try {
										d.json = JSON.parse(c)
									} catch (a) {
										bL.error(a)
									}
								null == a.callback || a.callback(d)
							}),
						)
						.catch((b) => {
							bL.error(b), null == a.callback || a.callback({ statusCode: 0, text: b })
						})
						.finally(() => (i ? clearTimeout(i.timeout) : null))
				},
			}),
			H &&
				eS.push({
					transport: "XHR",
					method: (a) => {
						var b,
							c = new H()
						c.open(a.method || "GET", a.url, !0)
						var { contentType: d, body: e } = null != (b = eR(a)) ? b : {}
						bR(a.headers, function (a, b) {
							c.setRequestHeader(b, a)
						}),
							d && c.setRequestHeader("Content-Type", d),
							a.timeout && (c.timeout = a.timeout),
							a.disableXHRCredentials || (c.withCredentials = !0),
							(c.onreadystatechange = () => {
								if (4 === c.readyState) {
									var b = { statusCode: c.status, text: c.responseText }
									if (200 === c.status)
										try {
											b.json = JSON.parse(c.responseText)
										} catch (a) {}
									null == a.callback || a.callback(b)
								}
							}),
							c.send(e)
					},
				}),
			null != D &&
				D.sendBeacon &&
				eS.push({
					transport: "sendBeacon",
					method: (a) => {
						var b = eP(a.url, { beacon: "1" })
						try {
							var c,
								{ contentType: d, body: e } = null != (c = eR(a)) ? c : {},
								f = "string" == typeof e ? new Blob([e], { type: d }) : e
							D.sendBeacon(b, f)
						} catch (a) {}
					},
				})
		var eT = function (a, b) {
			if (
				!(function (a) {
					try {
						new RegExp(a)
					} catch (a) {
						return !1
					}
					return !0
				})(b)
			)
				return !1
			try {
				return new RegExp(b).test(a)
			} catch (a) {
				return !1
			}
		}
		function eU(a, b, c) {
			return eQ({ distinct_id: a, userPropertiesToSet: b, userPropertiesToSetOnce: c })
		}
		var eV = {
				exact: (a, b) => b.some((b) => a.some((a) => b === a)),
				is_not: (a, b) => b.every((b) => a.every((a) => b !== a)),
				regex: (a, b) => b.some((b) => a.some((a) => eT(b, a))),
				not_regex: (a, b) => b.every((b) => a.every((a) => !eT(b, a))),
				icontains: (a, b) => b.map(eW).some((b) => a.map(eW).some((a) => b.includes(a))),
				not_icontains: (a, b) => b.map(eW).every((b) => a.map(eW).every((a) => !b.includes(a))),
				gt: (a, b) =>
					b.some((b) => {
						var c = parseFloat(b)
						return !isNaN(c) && a.some((a) => c > parseFloat(a))
					}),
				lt: (a, b) =>
					b.some((b) => {
						var c = parseFloat(b)
						return !isNaN(c) && a.some((a) => c < parseFloat(a))
					}),
			},
			eW = (a) => a.toLowerCase()
		function eX(a, b) {
			return (
				!a ||
				Object.entries(a).every((a) => {
					var [c, d] = a,
						e = null == b ? void 0 : b[c]
					if (ac(e) || af(e)) return !1
					var f = [String(e)],
						g = eV[d.operator]
					return !!g && g(d.values, f)
				})
			)
		}
		var eY = bM("[Error tracking]")
		class eZ {
			constructor(a) {
				var b, c
				;(this.Zt = []),
					(this.ti = new bl(
						[new bz(), new bJ(), new bB(), new bA(), new bH(), new bG(), new bD(), new bI()],
						by(),
					)),
					(this._instance = a),
					(this.Zt =
						null != (b = null == (c = this._instance.persistence) ? void 0 : c.get_property(b7)) ? b : [])
			}
			onRemoteConfig(a) {
				var b,
					c,
					d,
					e = null != (b = null == (c = a.errorTracking) ? void 0 : c.suppressionRules) ? b : [],
					f = null == (d = a.errorTracking) ? void 0 : d.captureExtensionExceptions
				;(this.Zt = e),
					this._instance.persistence && this._instance.persistence.register({ [b7]: this.Zt, [b8]: f })
			}
			get ii() {
				var a,
					b = !!this._instance.get_property(b8),
					c = this._instance.config.error_tracking.captureExtensionExceptions
				return null != (a = null != c ? c : b) && a
			}
			buildProperties(a, b) {
				return this.ti.buildFromUnknown(a, {
					syntheticException: null == b ? void 0 : b.syntheticException,
					mechanism: { handled: null == b ? void 0 : b.handled },
				})
			}
			sendExceptionEvent(a) {
				var b = a.$exception_list
				if (this.ei(b)) {
					if (this.ri(b)) return void eY.info("Skipping exception capture because a suppression rule matched")
					if (!this.ii && this.si(b))
						return void eY.info("Skipping exception capture because it was thrown by an extension")
					if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.ni(b))
						return void eY.info("Skipping exception capture because it was thrown by the PostHog SDK")
				}
				return this._instance.capture("$exception", a, { _noTruncate: !0, _batchKey: "exceptionEvent" })
			}
			ri(a) {
				if (0 === a.length) return !1
				var b = a.reduce(
					(a, b) => {
						var { type: c, value: d } = b
						return (
							ad(c) && c.length > 0 && a.$exception_types.push(c),
							ad(d) && d.length > 0 && a.$exception_values.push(d),
							a
						)
					},
					{ $exception_types: [], $exception_values: [] },
				)
				return this.Zt.some((a) => {
					var c = a.values.map((a) => {
						var c,
							d = eV[a.operator],
							e = $(a.value) ? a.value : [a.value],
							f = null != (c = b[a.key]) ? c : []
						return e.length > 0 && d(e, f)
					})
					return "OR" === a.type ? c.some(Boolean) : c.every(Boolean)
				})
			}
			si(a) {
				return a
					.flatMap((a) => {
						var b, c
						return null != (b = null == (c = a.stacktrace) ? void 0 : c.frames) ? b : []
					})
					.some((a) => a.filename && a.filename.startsWith("chrome-extension://"))
			}
			ni(a) {
				if (a.length > 0) {
					var b,
						c,
						d,
						e,
						f = null != (b = null == (c = a[0].stacktrace) ? void 0 : c.frames) ? b : [],
						g = f[f.length - 1]
					return (
						null !=
							(d = null == g || null == (e = g.filename) ? void 0 : e.includes("posthog.com/static")) && d
					)
				}
				return !1
			}
			ei(a) {
				return !ag(a) && $(a)
			}
		}
		var e$ = bM("[FeatureFlags]"),
			e_ = bM("[FeatureFlags]", { debugEnabled: !0 }),
			e0 = "$active_feature_flags",
			e1 = "$override_feature_flags",
			e2 = "$feature_flag_payloads",
			e3 = "$override_feature_flag_payloads",
			e4 = "$feature_flag_request_id",
			e5 = "$feature_flag_evaluated_at",
			e6 = (a) => {
				var b = {}
				for (var [c, d] of bU(a || {})) d && (b[c] = d)
				return b
			},
			e7 = (a) => {
				var b = a.flags
				return (
					b
						? ((a.featureFlags = Object.fromEntries(
								Object.keys(b).map((a) => {
									var c
									return [a, null != (c = b[a].variant) ? c : b[a].enabled]
								}),
							)),
							(a.featureFlagPayloads = Object.fromEntries(
								Object.keys(b)
									.filter((a) => b[a].enabled)
									.filter((a) => {
										var c
										return null == (c = b[a].metadata) ? void 0 : c.payload
									})
									.map((a) => {
										var c
										return [a, null == (c = b[a].metadata) ? void 0 : c.payload]
									}),
							)))
						: e$.warn(
								"Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version",
							),
					a
				)
			},
			e8 = (function (a) {
				return (a.FeatureFlags = "feature_flags"), (a.Recordings = "recordings"), a
			})({})
		class e9 {
			constructor(a) {
				;(this.oi = !1),
					(this.ai = !1),
					(this.li = !1),
					(this.ui = !1),
					(this.hi = !1),
					(this.di = !1),
					(this.vi = !1),
					(this.ci = !1),
					(this._instance = a),
					(this.featureFlagEventHandlers = [])
			}
			fi() {
				var a,
					b =
						null != (a = this._instance.config.evaluation_contexts)
							? a
							: this._instance.config.evaluation_environments
				return (
					!this._instance.config.evaluation_environments ||
						this._instance.config.evaluation_contexts ||
						this.ci ||
						(e$.warn(
							"evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version.",
						),
						(this.ci = !0)),
					null != b && b.length
						? b.filter((a) => {
								var b = a && "string" == typeof a && a.trim().length > 0
								return (
									b || e$.error("Invalid evaluation context found:", a, "Expected non-empty string"),
									b
								)
							})
						: []
				)
			}
			pi() {
				return this.fi().length > 0
			}
			flags() {
				if (this._instance.config.__preview_remote_config) this.di = !0
				else {
					var a =
						!this.gi &&
						(this._instance.config.advanced_disable_feature_flags ||
							this._instance.config.advanced_disable_feature_flags_on_first_load)
					this.mi({ disableFlags: a })
				}
			}
			get hasLoadedFlags() {
				return this.ai
			}
			getFlags() {
				return Object.keys(this.getFlagVariants())
			}
			getFlagsWithDetails() {
				var a = this._instance.get_property(ci),
					b = this._instance.get_property(e1),
					c = this._instance.get_property(e3)
				if (!c && !b) return a || {}
				var d = bS({}, a || {})
				for (var e of [...new Set([...Object.keys(c || {}), ...Object.keys(b || {})])]) {
					var f,
						g,
						h = d[e],
						i = null == b ? void 0 : b[e],
						j = ac(i) ? null != (f = null == h ? void 0 : h.enabled) && f : !!i,
						k = ac(i) ? h.variant : "string" == typeof i ? i : void 0,
						l = null == c ? void 0 : c[e],
						m = O({}, h, {
							enabled: j,
							variant: j ? (null != k ? k : null == h ? void 0 : h.variant) : void 0,
						})
					j !== (null == h ? void 0 : h.enabled) && (m.original_enabled = null == h ? void 0 : h.enabled),
						k !== (null == h ? void 0 : h.variant) && (m.original_variant = null == h ? void 0 : h.variant),
						l &&
							(m.metadata = O({}, null == h ? void 0 : h.metadata, {
								payload: l,
								original_payload: null == h || null == (g = h.metadata) ? void 0 : g.payload,
							})),
						(d[e] = m)
				}
				return (
					this.oi ||
						(e$.warn(" Overriding feature flag details!", {
							flagDetails: a,
							overriddenPayloads: c,
							finalDetails: d,
						}),
						(this.oi = !0)),
					d
				)
			}
			getFlagVariants() {
				var a = this._instance.get_property(cg),
					b = this._instance.get_property(e1)
				if (!b) return a || {}
				for (var c = bS({}, a), d = Object.keys(b), e = 0; e < d.length; e++) c[d[e]] = b[d[e]]
				return (
					this.oi ||
						(e$.warn(" Overriding feature flags!", { enabledFlags: a, overriddenFlags: b, finalFlags: c }),
						(this.oi = !0)),
					c
				)
			}
			getFlagPayloads() {
				var a = this._instance.get_property(e2),
					b = this._instance.get_property(e3)
				if (!b) return a || {}
				for (var c = bS({}, a || {}), d = Object.keys(b), e = 0; e < d.length; e++) c[d[e]] = b[d[e]]
				return (
					this.oi ||
						(e$.warn(" Overriding feature flag payloads!", {
							flagPayloads: a,
							overriddenPayloads: b,
							finalPayloads: c,
						}),
						(this.oi = !0)),
					c
				)
			}
			reloadFeatureFlags() {
				this.ui ||
					this._instance.config.advanced_disable_feature_flags ||
					this.gi ||
					(this.gi = setTimeout(() => {
						this.mi()
					}, 5))
			}
			yi() {
				clearTimeout(this.gi), (this.gi = void 0)
			}
			ensureFlagsLoaded() {
				this.ai || this.li || this.gi || this.reloadFeatureFlags()
			}
			setAnonymousDistinctId(a) {
				this.$anon_distinct_id = a
			}
			setReloadingPaused(a) {
				this.ui = a
			}
			mi(a) {
				var b
				if ((this.yi(), !this._instance.O()))
					if (this.li) this.hi = !0
					else {
						var c = this._instance.config.token,
							d = this._instance.get_property("$device_id"),
							e = {
								token: c,
								distinct_id: this._instance.get_distinct_id(),
								groups: this._instance.getGroups(),
								$anon_distinct_id: this.$anon_distinct_id,
								person_properties: O(
									{},
									(null == (b = this._instance.persistence) ? void 0 : b.get_initial_props()) || {},
									this._instance.get_property(cj) || {},
								),
								group_properties: this._instance.get_property(ck),
							}
						af(d) || ac(d) || (e.$device_id = d),
							((null != a && a.disableFlags) || this._instance.config.advanced_disable_feature_flags) &&
								(e.disable_flags = !0),
							this.pi() && (e.evaluation_contexts = this.fi())
						var f = this._instance.config.__preview_remote_config,
							g = f ? "/flags/?v=2" : "/flags/?v=2&config=true",
							h = this._instance.config.advanced_only_evaluate_survey_feature_flags
								? "&only_evaluate_survey_feature_flags=true"
								: "",
							i = this._instance.requestRouter.endpointFor("flags", g + h)
						f && (e.timezone = d3()),
							(this.li = !0),
							this._instance._send_request({
								method: "POST",
								url: i,
								data: e,
								compression: this._instance.config.disable_compression ? void 0 : ed.Base64,
								timeout: this._instance.config.feature_flag_request_timeout_ms,
								callback: (a) => {
									var b,
										c,
										d,
										f = !0
									200 === a.statusCode && (this.hi || (this.$anon_distinct_id = void 0), (f = !1)),
										(this.li = !1),
										this.di || ((this.di = !0), this._instance.bi(null != (d = a.json) ? d : {})),
										(!e.disable_flags || this.hi) &&
											(((this.vi = !f),
											a.json && null != (c = a.json.quotaLimited) && c.includes(e8.FeatureFlags))
												? e$.warn(
														"You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.",
													)
												: (e.disable_flags ||
														this.receivedFeatureFlags(null != (b = a.json) ? b : {}, f),
													this.hi && ((this.hi = !1), this.mi())))
								},
							})
					}
			}
			getFeatureFlag(a, b) {
				var c
				if ((void 0 === b && (b = {}), this.ai || (this.getFlags() && this.getFlags().length > 0))) {
					var d = this.getFeatureFlagResult(a, b)
					return null != (c = null == d ? void 0 : d.variant) ? c : null == d ? void 0 : d.enabled
				}
				e$.warn('getFeatureFlag for key "' + a + "\" failed. Feature flags didn't load in time.")
			}
			getFeatureFlagDetails(a) {
				return this.getFlagsWithDetails()[a]
			}
			getFeatureFlagPayload(a) {
				var b = this.getFeatureFlagResult(a, { send_event: !1 })
				return null == b ? void 0 : b.payload
			}
			getFeatureFlagResult(a, b) {
				if ((void 0 === b && (b = {}), this.ai || (this.getFlags() && this.getFlags().length > 0))) {
					var c = this.getFlagVariants(),
						d = a in c,
						e = c[a],
						f = this.getFlagPayloads()[a],
						g = String(e),
						h = this._instance.get_property(e4) || void 0,
						i = this._instance.get_property(e5) || void 0,
						j = this._instance.get_property(cm) || {}
					if ((b.send_event || !("send_event" in b)) && (!(a in j) || !j[a].includes(g))) {
						$(j[a]) ? j[a].push(g) : (j[a] = [g]),
							null == (m = this._instance.persistence) || m.register({ [cm]: j })
						var k = this.getFeatureFlagDetails(a),
							l = {
								$feature_flag: a,
								$feature_flag_response: e,
								$feature_flag_payload: f || null,
								$feature_flag_request_id: h,
								$feature_flag_evaluated_at: i,
								$feature_flag_bootstrapped_response:
									(null == (n = this._instance.config.bootstrap) || null == (n = n.featureFlags)
										? void 0
										: n[a]) || null,
								$feature_flag_bootstrapped_payload:
									(null == (o = this._instance.config.bootstrap) ||
									null == (o = o.featureFlagPayloads)
										? void 0
										: o[a]) || null,
								$used_bootstrap_value: !this.vi,
							}
						ac(null == k || null == (p = k.metadata) ? void 0 : p.version) ||
							(l.$feature_flag_version = k.metadata.version)
						var m,
							n,
							o,
							p,
							q,
							r,
							s,
							t,
							u,
							v,
							w =
								null != (q = null == k || null == (r = k.reason) ? void 0 : r.description)
									? q
									: null == k || null == (s = k.reason)
										? void 0
										: s.code
						w && (l.$feature_flag_reason = w),
							null != k && null != (t = k.metadata) && t.id && (l.$feature_flag_id = k.metadata.id),
							(ac(null == k ? void 0 : k.original_variant) &&
								ac(null == k ? void 0 : k.original_enabled)) ||
								(l.$feature_flag_original_response = ac(k.original_variant)
									? k.original_enabled
									: k.original_variant),
							null != k &&
								null != (u = k.metadata) &&
								u.original_payload &&
								(l.$feature_flag_original_payload =
									null == k || null == (v = k.metadata) ? void 0 : v.original_payload),
							this._instance.capture("$feature_flag_called", l)
					}
					if (d) {
						var x = f
						if (!ac(f))
							try {
								x = JSON.parse(f)
							} catch (a) {}
						return { key: a, enabled: !!e, variant: "string" == typeof e ? e : void 0, payload: x }
					}
				} else e$.warn('getFeatureFlagResult for key "' + a + "\" failed. Feature flags didn't load in time.")
			}
			getRemoteConfigPayload(a, b) {
				var c = this._instance.config.token,
					d = { distinct_id: this._instance.get_distinct_id(), token: c }
				this.pi() && (d.evaluation_contexts = this.fi()),
					this._instance._send_request({
						method: "POST",
						url: this._instance.requestRouter.endpointFor("flags", "/flags/?v=2&config=true"),
						data: d,
						compression: this._instance.config.disable_compression ? void 0 : ed.Base64,
						timeout: this._instance.config.feature_flag_request_timeout_ms,
						callback: (c) => {
							var d,
								e = null == (d = c.json) ? void 0 : d.featureFlagPayloads
							b((null == e ? void 0 : e[a]) || void 0)
						},
					})
			}
			isFeatureEnabled(a, b) {
				if ((void 0 === b && (b = {}), this.ai || (this.getFlags() && this.getFlags().length > 0))) {
					var c = this.getFeatureFlag(a, b)
					return ac(c) ? void 0 : !!c
				}
				e$.warn('isFeatureEnabled for key "' + a + "\" failed. Feature flags didn't load in time.")
			}
			addFeatureFlagsHandler(a) {
				this.featureFlagEventHandlers.push(a)
			}
			removeFeatureFlagsHandler(a) {
				this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((b) => b !== a)
			}
			receivedFeatureFlags(a, b) {
				if (this._instance.persistence) {
					this.ai = !0
					var c = this.getFlagVariants(),
						d = this.getFlagPayloads(),
						e = this.getFlagsWithDetails()
					!(function (a, b, c, d, e) {
						void 0 === c && (c = {}), void 0 === d && (d = {}), void 0 === e && (e = {})
						var f = e7(a),
							g = f.flags,
							h = f.featureFlags,
							i = f.featureFlagPayloads
						if (h) {
							var j = a.requestId,
								k = a.evaluatedAt
							if ($(h)) {
								e$.warn(
									"v1 of the feature flags endpoint is deprecated. Please use the latest version.",
								)
								var l = {}
								if (h) for (var m = 0; m < h.length; m++) l[h[m]] = !0
								b && b.register({ [e0]: h, [cg]: l })
							} else {
								var n = h,
									o = i,
									p = g
								a.errorsWhileComputingFlags &&
									((n = O({}, c, n)), (o = O({}, d, o)), (p = O({}, e, p))),
									b &&
										b.register(
											O(
												{
													[e0]: Object.keys(e6(n)),
													[cg]: n || {},
													[e2]: o || {},
													[ci]: p || {},
												},
												j ? { [e4]: j } : {},
												k ? { [e5]: k } : {},
											),
										)
							}
						}
					})(a, this._instance.persistence, c, d, e),
						this.wi(b)
				}
			}
			override(a, b) {
				void 0 === b && (b = !1),
					e$.warn("override is deprecated. Please use overrideFeatureFlags instead."),
					this.overrideFeatureFlags({ flags: a, suppressWarning: b })
			}
			overrideFeatureFlags(a) {
				if (!this._instance.__loaded || !this._instance.persistence)
					return e$.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
				if (!1 === a)
					return (
						this._instance.persistence.unregister(e1),
						this._instance.persistence.unregister(e3),
						this.wi(),
						e_.info("All overrides cleared")
					)
				if (a && "object" == typeof a && ("flags" in a || "payloads" in a)) {
					var b,
						c = a
					if (((this.oi = !!(null != (b = c.suppressWarning) && b)), "flags" in c)) {
						if (!1 === c.flags) this._instance.persistence.unregister(e1), e_.info("Flag overrides cleared")
						else if (c.flags) {
							if ($(c.flags)) {
								for (var d = {}, e = 0; e < c.flags.length; e++) d[c.flags[e]] = !0
								this._instance.persistence.register({ [e1]: d })
							} else this._instance.persistence.register({ [e1]: c.flags })
							e_.info("Flag overrides set", { flags: c.flags })
						}
					}
					return (
						"payloads" in c &&
							(!1 === c.payloads
								? (this._instance.persistence.unregister(e3), e_.info("Payload overrides cleared"))
								: c.payloads &&
									(this._instance.persistence.register({ [e3]: c.payloads }),
									e_.info("Payload overrides set", { payloads: c.payloads }))),
						void this.wi()
					)
				}
				this.wi()
			}
			onFeatureFlags(a) {
				if ((this.addFeatureFlagsHandler(a), this.ai)) {
					var { flags: b, flagVariants: c } = this.xi()
					a(b, c)
				}
				return () => this.removeFeatureFlagsHandler(a)
			}
			updateEarlyAccessFeatureEnrollment(a, b, c) {
				var d,
					e = (this._instance.get_property(ch) || []).find((b) => b.flagKey === a),
					f = { ["$feature_enrollment/" + a]: b },
					g = { $feature_flag: a, $feature_enrollment: b, $set: f }
				e && (g.$early_access_feature_name = e.name),
					c && (g.$feature_enrollment_stage = c),
					this._instance.capture("$feature_enrollment_update", g),
					this.setPersonPropertiesForFlags(f, !1)
				var h = O({}, this.getFlagVariants(), { [a]: b })
				null == (d = this._instance.persistence) || d.register({ [e0]: Object.keys(e6(h)), [cg]: h }), this.wi()
			}
			getEarlyAccessFeatures(a, b, c) {
				void 0 === b && (b = !1)
				var d = this._instance.get_property(ch),
					e = c ? "&" + c.map((a) => "stage=" + a).join("&") : ""
				if (d && !b) return a(d)
				this._instance._send_request({
					url: this._instance.requestRouter.endpointFor(
						"api",
						"/api/early_access_features/?token=" + this._instance.config.token + e,
					),
					method: "GET",
					callback: (b) => {
						var c, d
						if (b.json) {
							var e = b.json.earlyAccessFeatures
							return (
								null == (c = this._instance.persistence) || c.unregister(ch),
								null == (d = this._instance.persistence) || d.register({ [ch]: e }),
								a(e)
							)
						}
					},
				})
			}
			xi() {
				var a = this.getFlags(),
					b = this.getFlagVariants()
				return {
					flags: a.filter((a) => b[a]),
					flagVariants: Object.keys(b)
						.filter((a) => b[a])
						.reduce((a, c) => ((a[c] = b[c]), a), {}),
				}
			}
			wi(a) {
				var { flags: b, flagVariants: c } = this.xi()
				this.featureFlagEventHandlers.forEach((d) => d(b, c, { errorsLoading: a }))
			}
			setPersonPropertiesForFlags(a, b) {
				void 0 === b && (b = !0)
				var c = this._instance.get_property(cj) || {}
				this._instance.register({ [cj]: O({}, c, a) }), b && this._instance.reloadFeatureFlags()
			}
			resetPersonPropertiesForFlags() {
				this._instance.unregister(cj)
			}
			setGroupPropertiesForFlags(a, b) {
				void 0 === b && (b = !0)
				var c = this._instance.get_property(ck) || {}
				0 !== Object.keys(c).length &&
					Object.keys(c).forEach((b) => {
						;(c[b] = O({}, c[b], a[b])), delete a[b]
					}),
					this._instance.register({ [ck]: O({}, c, a) }),
					b && this._instance.reloadFeatureFlags()
			}
			resetGroupPropertiesForFlags(a) {
				if (a) {
					var b = this._instance.get_property(ck) || {}
					this._instance.register({ [ck]: O({}, b, { [a]: {} }) })
				} else this._instance.unregister(ck)
			}
			reset() {
				;(this.ai = !1),
					(this.li = !1),
					(this.ui = !1),
					(this.hi = !1),
					(this.di = !1),
					(this.vi = !1),
					(this.$anon_distinct_id = void 0),
					this.yi(),
					(this.oi = !1)
			}
		}
		var fa = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"]
		class fb {
			constructor(a, b) {
				;(this.R = a),
					(this.props = {}),
					(this.Ei = !1),
					(this.$i = ((a) => {
						var b = ""
						return (
							a.token && (b = a.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")),
							a.persistence_name ? "ph_" + a.persistence_name : "ph_" + b + "_posthog"
						)
					})(a)),
					(this.Y = this.Si(a)),
					this.load(),
					a.debug && bL.info("Persistence loaded", a.persistence, O({}, this.props)),
					this.update_config(a, a, b),
					this.save()
			}
			isDisabled() {
				return !!this.ki
			}
			Si(a) {
				;-1 === fa.indexOf(a.persistence.toLowerCase()) &&
					(bL.critical("Unknown persistence type " + a.persistence + "; falling back to localStorage+cookie"),
					(a.persistence = "localStorage+cookie"))
				var b = (function (a) {
						void 0 === a && (a = [])
						var b = [...dt, ...a]
						return O({}, ds, {
							W: function (a) {
								try {
									var b = {}
									try {
										b = dq.W(a) || {}
									} catch (a) {}
									var c = bS(b, JSON.parse(ds.q(a) || "{}"))
									return ds.G(a, c), c
								} catch (a) {}
								return null
							},
							G: function (a, c, d, e, f, g) {
								try {
									ds.G(a, c, void 0, void 0, g)
									var h = {}
									b.forEach((a) => {
										c[a] && (h[a] = c[a])
									}),
										Object.keys(h).length && dq.G(a, h, d, e, f, g)
								} catch (a) {
									ds.B(a)
								}
							},
							V: function (a, b) {
								try {
									null == y || y.localStorage.removeItem(a), dq.V(a, b)
								} catch (a) {
									ds.B(a)
								}
							},
						})
					})(a.cookie_persisted_properties || []),
					c = a.persistence.toLowerCase()
				return "localstorage" === c && ds.H()
					? ds
					: "localstorage+cookie" === c && b.H()
						? b
						: "sessionstorage" === c && dx.H()
							? dx
							: "memory" === c
								? dv
								: "cookie" === c
									? dq
									: b.H()
										? b
										: dq
			}
			properties() {
				var a = {}
				return (
					bR(this.props, function (b, c) {
						if (c === cg && aa(b))
							for (var d, e, f, g = Object.keys(b), h = 0; h < g.length; h++)
								a["$feature/" + g[h]] = b[g[h]]
						else
							(e = c),
								(f = !1),
								(af((d = cw))
									? f
									: C && d.indexOf === C
										? -1 != d.indexOf(e)
										: (bR(d, function (a) {
												if (f || (f = a === e)) return bP
											}),
											f)) || (a[c] = b)
					}),
					a
				)
			}
			load() {
				if (!this.ki) {
					var a = this.Y.W(this.$i)
					a && (this.props = bS({}, a))
				}
			}
			save() {
				this.ki || this.Y.G(this.$i, this.props, this.Pi, this.Ti, this.Ii, this.R.debug)
			}
			remove() {
				this.Y.V(this.$i, !1), this.Y.V(this.$i, !0)
			}
			clear() {
				this.remove(), (this.props = {})
			}
			register_once(a, b, c) {
				if (aa(a)) {
					ac(b) && (b = "None"), (this.Pi = ac(c) ? this.Ci : c)
					var d = !1
					if (
						(bR(a, (a, c) => {
							;(this.props.hasOwnProperty(c) && this.props[c] !== b) || ((this.props[c] = a), (d = !0))
						}),
						d)
					)
						return this.save(), !0
				}
				return !1
			}
			register(a, b) {
				if (aa(a)) {
					this.Pi = ac(b) ? this.Ci : b
					var c = !1
					if (
						(bR(a, (b, d) => {
							a.hasOwnProperty(d) && this.props[d] !== b && ((this.props[d] = b), (c = !0))
						}),
						c)
					)
						return this.save(), !0
				}
				return !1
			}
			unregister(a) {
				a in this.props && (delete this.props[a], this.save())
			}
			update_campaign_params() {
				if (!this.Ei) {
					var a = dY(
						this.R.custom_campaign_params,
						this.R.mask_personal_data_properties,
						this.R.custom_personal_data_properties,
					)
					ab(bX(a)) || this.register(a), (this.Ei = !0)
				}
			}
			update_search_keyword() {
				var a
				this.register((a = null == E ? void 0 : E.referrer) ? d$(a) : {})
			}
			update_referrer_info() {
				var a
				this.register_once(
					{
						$referrer: d0(),
						$referring_domain:
							(null != E && E.referrer && (null == (a = c2(E.referrer)) ? void 0 : a.host)) || "$direct",
					},
					void 0,
				)
			}
			set_initial_person_info() {
				this.props[cq] ||
					this.props[cr] ||
					this.register_once(
						{ [cs]: d1(this.R.mask_personal_data_properties, this.R.custom_personal_data_properties) },
						void 0,
					)
			}
			get_initial_props() {
				var a = {}
				bR([cr, cq], (b) => {
					var c = this.props[b]
					c &&
						bR(c, function (b, c) {
							a["$initial_" + V(c)] = b
						})
				})
				var b,
					c,
					d = this.props[cs]
				return (
					d &&
						bS(
							a,
							((b = d2(d)),
							(c = {}),
							bR(b, function (a, b) {
								c["$initial_" + V(b)] = a
							}),
							c),
						),
					a
				)
			}
			safe_merge(a) {
				return (
					bR(this.props, function (b, c) {
						c in a || (a[c] = b)
					}),
					a
				)
			}
			update_config(a, b, c) {
				if (
					((this.Ci = this.Pi = a.cookie_expiration),
					this.set_disabled(a.disable_persistence || !!c),
					this.set_cross_subdomain(a.cross_subdomain_cookie),
					this.set_secure(a.secure_cookie),
					a.persistence !== b.persistence ||
						!((a, b) => {
							if (a.length !== b.length) return !1
							var c = [...a].sort(),
								d = [...b].sort()
							return c.every((a, b) => a === d[b])
						})(a.cookie_persisted_properties || [], b.cookie_persisted_properties || []))
				) {
					var d = this.Si(a),
						e = this.props
					this.clear(), (this.Y = d), (this.props = e), this.save()
				}
			}
			set_disabled(a) {
				;(this.ki = a), this.ki ? this.remove() : this.save()
			}
			set_cross_subdomain(a) {
				a !== this.Ti && ((this.Ti = a), this.remove(), this.save())
			}
			set_secure(a) {
				a !== this.Ii && ((this.Ii = a), this.remove(), this.save())
			}
			set_event_timer(a, b) {
				var c = this.props[b3] || {}
				;(c[a] = b), (this.props[b3] = c), this.save()
			}
			remove_event_timer(a) {
				var b = (this.props[b3] || {})[a]
				return ac(b) || (delete this.props[b3][a], this.save()), b
			}
			get_property(a) {
				return this.props[a]
			}
			set_property(a, b) {
				;(this.props[a] = b), this.save()
			}
		}
		var fc = bM("[Product Tours]"),
			fd = "ph_product_tours"
		class fe {
			constructor(a) {
				;(this.Ri = null), (this.Fi = null), (this._instance = a)
			}
			onRemoteConfig(a) {
				this._instance.persistence &&
					this._instance.persistence.register({ [cb]: !(null == a || !a.productTours) }),
					this.loadIfEnabled()
			}
			loadIfEnabled() {
				var a, b
				this.Ri ||
					(a = this._instance).config.disable_product_tours ||
					null == (b = a.persistence) ||
					!b.get_property(cb) ||
					this.it(() => this.Mi())
			}
			it(a) {
				var b, c
				null != (b = K.__PosthogExtensions__) && b.generateProductTours
					? a()
					: null == (c = K.__PosthogExtensions__) ||
						null == c.loadExternalDependency ||
						c.loadExternalDependency(this._instance, "product-tours", (b) => {
							b ? fc.error("Could not load product tours script", b) : a()
						})
			}
			Mi() {
				var a
				!this.Ri &&
					null != (a = K.__PosthogExtensions__) &&
					a.generateProductTours &&
					(this.Ri = K.__PosthogExtensions__.generateProductTours(this._instance, !0))
			}
			getProductTours(a, b) {
				if ((void 0 === b && (b = !1), !$(this.Fi) || b)) {
					var c = this._instance.persistence
					if (c) {
						var d = c.props[fd]
						if ($(d) && !b) return (this.Fi = d), void a(d, { isLoaded: !0 })
					}
					this._instance._send_request({
						url: this._instance.requestRouter.endpointFor(
							"api",
							"/api/product_tours/?token=" + this._instance.config.token,
						),
						method: "GET",
						callback: (b) => {
							var d = b.statusCode
							if (200 !== d || !b.json) {
								var e = "Product Tours API could not be loaded, status: " + d
								return fc.error(e), void a([], { isLoaded: !1, error: e })
							}
							var f = $(b.json.product_tours) ? b.json.product_tours : []
							;(this.Fi = f), c && c.register({ [fd]: f }), a(f, { isLoaded: !0 })
						},
					})
				} else a(this.Fi, { isLoaded: !0 })
			}
			getActiveProductTours(a) {
				ag(this.Ri)
					? a([], { isLoaded: !1, error: "Product tours not loaded" })
					: this.Ri.getActiveProductTours(a)
			}
			showProductTour(a) {
				var b
				null == (b = this.Ri) || b.showTourById(a)
			}
			previewTour(a) {
				this.Ri
					? this.Ri.previewTour(a)
					: this.it(() => {
							var b
							this.Mi(), null == (b = this.Ri) || b.previewTour(a)
						})
			}
			dismissProductTour() {
				var a
				null == (a = this.Ri) || a.dismissTour("user_clicked_skip")
			}
			nextStep() {
				var a
				null == (a = this.Ri) || a.nextStep()
			}
			previousStep() {
				var a
				null == (a = this.Ri) || a.previousStep()
			}
			clearCache() {
				var a
				;(this.Fi = null), null == (a = this._instance.persistence) || a.unregister(fd)
			}
			resetTour(a) {
				var b
				null == (b = this.Ri) || b.resetTour(a)
			}
			resetAllTours() {
				var a
				null == (a = this.Ri) || a.resetAllTours()
			}
			cancelPendingTour(a) {
				var b
				null == (b = this.Ri) || b.cancelPendingTour(a)
			}
		}
		var ff = (function (a) {
				return (a.Activation = "events"), (a.Cancellation = "cancelEvents"), a
			})({}),
			fg =
				((function (a) {
					;(a.Button = "button"), (a.Tab = "tab"), (a.Selector = "selector")
				})({}),
				(function (a) {
					;(a.TopLeft = "top_left"),
						(a.TopRight = "top_right"),
						(a.TopCenter = "top_center"),
						(a.MiddleLeft = "middle_left"),
						(a.MiddleRight = "middle_right"),
						(a.MiddleCenter = "middle_center"),
						(a.Left = "left"),
						(a.Center = "center"),
						(a.Right = "right"),
						(a.NextToTrigger = "next_to_trigger")
				})({}),
				(function (a) {
					;(a.Top = "top"), (a.Left = "left"), (a.Right = "right"), (a.Bottom = "bottom")
				})({}),
				(function (a) {
					return (
						(a.Popover = "popover"),
						(a.API = "api"),
						(a.Widget = "widget"),
						(a.ExternalSurvey = "external_survey"),
						a
					)
				})({})),
			fh =
				((function (a) {
					;(a.Open = "open"),
						(a.MultipleChoice = "multiple_choice"),
						(a.SingleChoice = "single_choice"),
						(a.Rating = "rating"),
						(a.Link = "link")
				})({}),
				(function (a) {
					;(a.NextQuestion = "next_question"),
						(a.End = "end"),
						(a.ResponseBased = "response_based"),
						(a.SpecificQuestion = "specific_question")
				})({}),
				(function (a) {
					;(a.Once = "once"), (a.Recurring = "recurring"), (a.Always = "always")
				})({}),
				(function (a) {
					return (
						(a.SHOWN = "survey shown"),
						(a.DISMISSED = "survey dismissed"),
						(a.SENT = "survey sent"),
						(a.ABANDONED = "survey abandoned"),
						a
					)
				})({})),
			fi = (function (a) {
				return (
					(a.SURVEY_ID = "$survey_id"),
					(a.SURVEY_NAME = "$survey_name"),
					(a.SURVEY_RESPONSE = "$survey_response"),
					(a.SURVEY_ITERATION = "$survey_iteration"),
					(a.SURVEY_ITERATION_START_DATE = "$survey_iteration_start_date"),
					(a.SURVEY_PARTIALLY_COMPLETED = "$survey_partially_completed"),
					(a.SURVEY_SUBMISSION_ID = "$survey_submission_id"),
					(a.SURVEY_QUESTIONS = "$survey_questions"),
					(a.SURVEY_COMPLETED = "$survey_completed"),
					(a.PRODUCT_TOUR_ID = "$product_tour_id"),
					(a.SURVEY_LAST_SEEN_DATE = "$survey_last_seen_date"),
					a
				)
			})({}),
			fj = (function (a) {
				return (a.Popover = "popover"), (a.Inline = "inline"), a
			})({}),
			fk = bM("[Surveys]"),
			fl = "seenSurvey_",
			fm = (a, b) => {
				var c = "$survey_" + b + "/" + a.id
				return (
					a.current_iteration &&
						a.current_iteration > 0 &&
						(c = "$survey_" + b + "/" + a.id + "/" + a.current_iteration),
					c
				)
			},
			fn = (a) =>
				((a, b) => {
					var c = "" + a + b.id
					return (
						b.current_iteration &&
							b.current_iteration > 0 &&
							(c = "" + a + b.id + "_" + b.current_iteration),
						c
					)
				})(fl, a),
			fo = [fg.Popover, fg.Widget, fg.API],
			fp = { ignoreConditions: !1, ignoreDelay: !1, displayType: fj.Popover }
		class fq {
			constructor() {
				;(this.Oi = {}), (this.Oi = {})
			}
			on(a, b) {
				return (
					this.Oi[a] || (this.Oi[a] = []),
					this.Oi[a].push(b),
					() => {
						this.Oi[a] = this.Oi[a].filter((a) => a !== b)
					}
				)
			}
			emit(a, b) {
				for (var c of this.Oi[a] || []) c(b)
				for (var d of this.Oi["*"] || []) d(a, b)
			}
		}
		function fr(a, b, c) {
			if (ag(a)) return !1
			switch (c) {
				case "exact":
					return a === b
				case "contains":
					return RegExp(
						b
							.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
							.replace(/_/g, ".")
							.replace(/%/g, ".*"),
						"i",
					).test(a)
				case "regex":
					try {
						return new RegExp(b).test(a)
					} catch (a) {
						return !1
					}
				default:
					return !1
			}
		}
		class fs {
			constructor(a) {
				;(this.Ai = new fq()),
					(this.Di = (a, b) => this.ji(a, b) && this.Li(a, b) && this.Ni(a, b) && this.Ui(a, b)),
					(this.ji = (a, b) =>
						null == b || !b.event || (null == a ? void 0 : a.event) === (null == b ? void 0 : b.event)),
					(this._instance = a),
					(this.zi = new Set()),
					(this.Hi = new Set())
			}
			init() {
				var a, b
				ac(null == (a = this._instance) ? void 0 : a._addCaptureHook) ||
					null == (b = this._instance) ||
					b._addCaptureHook((a, b) => {
						this.on(a, b)
					})
			}
			register(a) {
				var b, c
				if (
					!ac(null == (b = this._instance) ? void 0 : b._addCaptureHook) &&
					(a.forEach((a) => {
						var b, c
						null == (b = this.Hi) || b.add(a),
							null == (c = a.steps) ||
								c.forEach((a) => {
									var b
									null == (b = this.zi) || b.add((null == a ? void 0 : a.event) || "")
								})
					}),
					null != (c = this._instance) && c.autocapture)
				) {
					var d,
						e = new Set()
					a.forEach((a) => {
						var b
						null == (b = a.steps) ||
							b.forEach((a) => {
								null != a && a.selector && e.add(null == a ? void 0 : a.selector)
							})
					}),
						null == (d = this._instance) || d.autocapture.setElementSelectors(e)
				}
			}
			on(a, b) {
				var c
				null != b &&
					0 != a.length &&
					(this.zi.has(a) || this.zi.has(null == b ? void 0 : b.event)) &&
					this.Hi &&
					(null == (c = this.Hi) ? void 0 : c.size) > 0 &&
					this.Hi.forEach((a) => {
						this.Bi(b, a) && this.Ai.emit("actionCaptured", a.name)
					})
			}
			qi(a) {
				this.onAction("actionCaptured", (b) => a(b))
			}
			Bi(a, b) {
				if (null == (null == b ? void 0 : b.steps)) return !1
				for (var c of b.steps) if (this.Di(a, c)) return !0
				return !1
			}
			onAction(a, b) {
				return this.Ai.on(a, b)
			}
			Li(a, b) {
				if (null != b && b.url) {
					var c,
						d = null == a || null == (c = a.properties) ? void 0 : c.$current_url
					if (!d || "string" != typeof d || !fr(d, b.url, b.url_matching || "contains")) return !1
				}
				return !0
			}
			Ni(a, b) {
				return !!this.Wi(a, b) && !!this.Gi(a, b) && !!this.Vi(a, b)
			}
			Wi(a, b) {
				if (null == b || !b.href) return !0
				var c = this.Ji(a)
				if (c.length > 0) return c.some((a) => fr(a.href, b.href, b.href_matching || "exact"))
				var d,
					e,
					f = (null == a || null == (d = a.properties) ? void 0 : d.$elements_chain) || ""
				return !!f && fr((e = f.match(/(?::|")href="(.*?)"/)) ? e[1] : "", b.href, b.href_matching || "exact")
			}
			Gi(a, b) {
				if (null == b || !b.text) return !0
				var c = this.Ji(a)
				if (c.length > 0)
					return c.some(
						(a) =>
							fr(a.text, b.text, b.text_matching || "exact") ||
							fr(a.$el_text, b.text, b.text_matching || "exact"),
					)
				var d,
					e,
					f,
					g,
					h = (null == a || null == (d = a.properties) ? void 0 : d.$elements_chain) || ""
				return (
					!!h &&
					((e = (function (a) {
						for (var b, c = [], d = /(?::|")text="(.*?)"/g; !ag((b = d.exec(a))); )
							c.includes(b[1]) || c.push(b[1])
						return c
					})(h)),
					(f = b.text),
					(g = b.text_matching || "exact"),
					e.some((a) => fr(a, f, g)))
				)
			}
			Vi(a, b) {
				if (null == b || !b.selector) return !0
				var c,
					d,
					e = null == a || null == (c = a.properties) ? void 0 : c.$element_selectors
				if (null != e && e.includes(b.selector)) return !0
				var f = (null == a || null == (d = a.properties) ? void 0 : d.$elements_chain) || ""
				if (b.selector_regex && f)
					try {
						return new RegExp(b.selector_regex).test(f)
					} catch (a) {}
				return !1
			}
			Ji(a) {
				var b
				return null == (null == a || null == (b = a.properties) ? void 0 : b.$elements)
					? []
					: null == a
						? void 0
						: a.properties.$elements
			}
			Ui(a, b) {
				return (
					null == b ||
					!b.properties ||
					0 === b.properties.length ||
					eX(
						b.properties.reduce((a, b) => {
							var c = $(b.value) ? b.value.map(String) : null != b.value ? [String(b.value)] : []
							return (a[b.key] = { values: c, operator: b.operator || "exact" }), a
						}, {}),
						null == a ? void 0 : a.properties,
					)
				)
			}
		}
		class ft {
			constructor(a) {
				;(this._instance = a), (this.Ki = new Map()), (this.Yi = new Map()), (this.Xi = new Map())
			}
			Qi(a, b) {
				return !!a && eX(a.propertyFilters, null == b ? void 0 : b.properties)
			}
			Zi(a, b) {
				var c = new Map()
				return (
					a.forEach((a) => {
						var d
						null == (d = a.conditions) ||
							null == (d = d[b]) ||
							null == (d = d.values) ||
							d.forEach((b) => {
								if (null != b && b.name) {
									var d = c.get(b.name) || []
									d.push(a.id), c.set(b.name, d)
								}
							})
					}),
					c
				)
			}
			te(a, b, c) {
				var d = (c === ff.Activation ? this.Ki : this.Yi).get(a),
					e = []
				return (
					this.ie((a) => {
						e = a.filter((a) => (null == d ? void 0 : d.includes(a.id)))
					}),
					e.filter((d) => {
						var e,
							f =
								null == (e = d.conditions) || null == (e = e[c]) || null == (e = e.values)
									? void 0
									: e.find((b) => b.name === a)
						return this.Qi(f, b)
					})
				)
			}
			register(a) {
				var b
				ac(null == (b = this._instance) ? void 0 : b._addCaptureHook) || (this.ee(a), this.re(a))
			}
			re(a) {
				var b = a.filter((a) => {
					var b, c
					return (
						(null == (b = a.conditions) ? void 0 : b.actions) &&
						(null == (c = a.conditions) || null == (c = c.actions) || null == (c = c.values)
							? void 0
							: c.length) > 0
					)
				})
				0 !== b.length &&
					(null == this.se &&
						((this.se = new fs(this._instance)),
						this.se.init(),
						this.se.qi((a) => {
							this.onAction(a)
						})),
					b.forEach((a) => {
						var b, c, d, e, f
						a.conditions &&
							null != (b = a.conditions) &&
							b.actions &&
							null != (c = a.conditions) &&
							null != (c = c.actions) &&
							c.values &&
							(null == (d = a.conditions) || null == (d = d.actions) || null == (d = d.values)
								? void 0
								: d.length) > 0 &&
							(null == (e = this.se) || e.register(a.conditions.actions.values),
							null == (f = a.conditions) ||
								null == (f = f.actions) ||
								null == (f = f.values) ||
								f.forEach((b) => {
									if (b && b.name) {
										var c = this.Xi.get(b.name)
										c && c.push(a.id), this.Xi.set(b.name, c || [a.id])
									}
								}))
					}))
			}
			ee(a) {
				var b,
					c = a.filter((a) => {
						var b, c
						return (
							(null == (b = a.conditions) ? void 0 : b.events) &&
							(null == (c = a.conditions) || null == (c = c.events) || null == (c = c.values)
								? void 0
								: c.length) > 0
						)
					}),
					d = a.filter((a) => {
						var b, c
						return (
							(null == (b = a.conditions) ? void 0 : b.cancelEvents) &&
							(null == (c = a.conditions) || null == (c = c.cancelEvents) || null == (c = c.values)
								? void 0
								: c.length) > 0
						)
					})
				;(0 !== c.length || 0 !== d.length) &&
					(null == (b = this._instance) ||
						b._addCaptureHook((a, b) => {
							this.onEvent(a, b)
						}),
					(this.Ki = this.Zi(a, ff.Activation)),
					(this.Yi = this.Zi(a, ff.Cancellation)))
			}
			onEvent(a, b) {
				var c,
					d = this.ne(),
					e = this.oe(),
					f = this.ae(),
					g = (null == (c = this._instance) || null == (c = c.persistence) ? void 0 : c.props[e]) || []
				if (f === a && b && g.length > 0) {
					d.info("event matched, removing item from activated items", {
						event: a,
						eventPayload: b,
						existingActivatedItems: g,
					})
					var h,
						i,
						j =
							(null == b || null == (h = b.properties) ? void 0 : h.$survey_id) ||
							(null == b || null == (i = b.properties) ? void 0 : i.$product_tour_id)
					if (j) {
						var k = g.indexOf(j)
						k >= 0 && (g.splice(k, 1), this.le(g))
					}
				} else {
					if (this.Yi.has(a)) {
						var l = this.te(a, b, ff.Cancellation)
						l.length > 0 &&
							(d.info("cancel event matched, cancelling items", {
								event: a,
								itemsToCancel: l.map((a) => a.id),
							}),
							l.forEach((a) => {
								var b = g.indexOf(a.id)
								b >= 0 && g.splice(b, 1), this.ue(a.id)
							}),
							this.le(g))
					}
					if (this.Ki.has(a)) {
						d.info("event name matched", { event: a, eventPayload: b, items: this.Ki.get(a) })
						var m = this.te(a, b, ff.Activation)
						this.le(g.concat(m.map((a) => a.id) || []))
					}
				}
			}
			onAction(a) {
				var b,
					c = this.oe(),
					d = (null == (b = this._instance) || null == (b = b.persistence) ? void 0 : b.props[c]) || []
				this.Xi.has(a) && this.le(d.concat(this.Xi.get(a) || []))
			}
			le(a) {
				var b,
					c = this.ne(),
					d = this.oe(),
					e = [...new Set(a)].filter((a) => !this.he(a))
				c.info("updating activated items", { activatedItems: e }),
					null == (b = this._instance) || null == (b = b.persistence) || b.register({ [d]: e })
			}
			getActivatedIds() {
				var a,
					b = this.oe()
				return (null == (a = this._instance) || null == (a = a.persistence) ? void 0 : a.props[b]) || []
			}
			getEventToItemsMap() {
				return this.Ki
			}
			de() {
				return this.se
			}
		}
		class fu extends ft {
			constructor(a) {
				super(a)
			}
			oe() {
				return "$surveys_activated"
			}
			ae() {
				return fh.SHOWN
			}
			ie(a) {
				var b
				null == (b = this._instance) || b.getSurveys(a)
			}
			ue(a) {
				var b
				null == (b = this._instance) || b.cancelPendingSurvey(a)
			}
			ne() {
				return fk
			}
			he() {
				return !1
			}
			getSurveys() {
				return this.getActivatedIds()
			}
			getEventToSurveys() {
				return this.getEventToItemsMap()
			}
		}
		class fv {
			constructor(a) {
				;(this.ve = void 0),
					(this._surveyManager = null),
					(this.ce = !1),
					(this.fe = []),
					(this.pe = null),
					(this._instance = a),
					(this._surveyEventReceiver = null)
			}
			onRemoteConfig(a) {
				if (!this._instance.config.disable_surveys) {
					var b = a.surveys
					if (ag(b)) return fk.warn("Flags not loaded yet. Not loading surveys.")
					var c = $(b)
					;(this.ve = c ? b.length > 0 : b),
						fk.info("flags response received, isSurveysEnabled: " + this.ve),
						this.loadIfEnabled()
				}
			}
			reset() {
				localStorage.removeItem("lastSeenSurveyDate")
				for (var a = [], b = 0; b < localStorage.length; b++) {
					var c = localStorage.key(b)
					;((null != c && c.startsWith(fl)) || (null != c && c.startsWith("inProgressSurvey_"))) && a.push(c)
				}
				a.forEach((a) => localStorage.removeItem(a))
			}
			loadIfEnabled() {
				if (!this._surveyManager)
					if (this.ce) fk.info("Already initializing surveys, skipping...")
					else if (this._instance.config.disable_surveys) fk.info("Disabled. Not loading surveys.")
					else if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())
						fk.info("Not loading surveys in cookieless mode without consent.")
					else {
						var a = null == K ? void 0 : K.__PosthogExtensions__
						if (a) {
							if (!ac(this.ve) || this._instance.config.advanced_enable_surveys) {
								var b = this.ve || this._instance.config.advanced_enable_surveys
								this.ce = !0
								try {
									var c = a.generateSurveys
									if (c) return void this.ge(c, b)
									var d = a.loadExternalDependency
									if (!d) return void this._e("PostHog loadExternalDependency extension not found.")
									d(this._instance, "surveys", (c) => {
										c || !a.generateSurveys
											? this._e("Could not load surveys script", c)
											: this.ge(a.generateSurveys, b)
									})
								} catch (a) {
									throw (this._e("Error initializing surveys", a), a)
								} finally {
									this.ce = !1
								}
							}
						} else fk.error("PostHog Extensions not found.")
					}
			}
			ge(a, b) {
				;(this._surveyManager = a(this._instance, b)),
					(this._surveyEventReceiver = new fu(this._instance)),
					fk.info("Surveys loaded successfully"),
					this.me({ isLoaded: !0 })
			}
			_e(a, b) {
				fk.error(a, b), this.me({ isLoaded: !1, error: a })
			}
			onSurveysLoaded(a) {
				return (
					this.fe.push(a),
					this._surveyManager && this.me({ isLoaded: !0 }),
					() => {
						this.fe = this.fe.filter((b) => b !== a)
					}
				)
			}
			getSurveys(a, b) {
				if ((void 0 === b && (b = !1), this._instance.config.disable_surveys))
					return fk.info("Disabled. Not loading surveys."), a([])
				var c,
					d = this._instance.get_property(cl)
				if (d && !b) return a(d, { isLoaded: !0 })
				"u" > typeof Promise && this.pe
					? this.pe.then((b) => {
							var { surveys: c, context: d } = b
							return a(c, d)
						})
					: ("u" > typeof Promise &&
							(this.pe = new Promise((a) => {
								c = a
							})),
						this._instance._send_request({
							url: this._instance.requestRouter.endpointFor(
								"api",
								"/api/surveys/?token=" + this._instance.config.token,
							),
							method: "GET",
							timeout: this._instance.config.surveys_request_timeout_ms,
							callback: (b) => {
								this.pe = null
								var d = b.statusCode
								if (200 !== d || !b.json) {
									var e = "Surveys API could not be loaded, status: " + d
									fk.error(e)
									var f = { isLoaded: !1, error: e }
									return a([], f), void (null == c || c({ surveys: [], context: f }))
								}
								var g,
									h,
									i = b.json.surveys || [],
									j = i.filter(
										(a) =>
											(function (a) {
												return !(!a.start_date || a.end_date)
											})(a) &&
											((function (a) {
												var b
												return !(
													null == (b = a.conditions) ||
													null == (b = b.events) ||
													null == (b = b.values) ||
													!b.length
												)
											})(a) ||
												(function (a) {
													var b
													return !(
														null == (b = a.conditions) ||
														null == (b = b.actions) ||
														null == (b = b.values) ||
														!b.length
													)
												})(a)),
									)
								j.length > 0 && (null == (h = this._surveyEventReceiver) || h.register(j)),
									null == (g = this._instance.persistence) || g.register({ [cl]: i })
								var k = { isLoaded: !0 }
								a(i, k), null == c || c({ surveys: i, context: k })
							},
						}))
			}
			me(a) {
				for (var b of this.fe)
					try {
						if (!a.isLoaded) return b([], a)
						this.getSurveys(b)
					} catch (a) {
						fk.error("Error in survey callback", a)
					}
			}
			getActiveMatchingSurveys(a, b) {
				if ((void 0 === b && (b = !1), !ag(this._surveyManager)))
					return this._surveyManager.getActiveMatchingSurveys(a, b)
				fk.warn("init was not called")
			}
			ye(a) {
				var b = null
				return (
					this.getSurveys((c) => {
						var d
						b = null != (d = c.find((b) => b.id === a)) ? d : null
					}),
					b
				)
			}
			be(a) {
				if (ag(this._surveyManager))
					return { eligible: !1, reason: "SDK is not enabled or survey functionality is not yet loaded" }
				var b = "string" == typeof a ? this.ye(a) : a
				return b ? this._surveyManager.checkSurveyEligibility(b) : { eligible: !1, reason: "Survey not found" }
			}
			canRenderSurvey(a) {
				if (ag(this._surveyManager))
					return (
						fk.warn("init was not called"),
						{ visible: !1, disabledReason: "SDK is not enabled or survey functionality is not yet loaded" }
					)
				var b = this.be(a)
				return { visible: b.eligible, disabledReason: b.reason }
			}
			canRenderSurveyAsync(a, b) {
				return ag(this._surveyManager)
					? (fk.warn("init was not called"),
						Promise.resolve({
							visible: !1,
							disabledReason: "SDK is not enabled or survey functionality is not yet loaded",
						}))
					: new Promise((c) => {
							this.getSurveys((b) => {
								var d,
									e = null != (d = b.find((b) => b.id === a)) ? d : null
								if (e) {
									var f = this.be(e)
									c({ visible: f.eligible, disabledReason: f.reason })
								} else c({ visible: !1, disabledReason: "Survey not found" })
							}, b)
						})
			}
			renderSurvey(a, b, c) {
				var d
				if (ag(this._surveyManager)) fk.warn("init was not called")
				else {
					var e = "string" == typeof a ? this.ye(a) : a
					if (null != e && e.id)
						if (fo.includes(e.type)) {
							var f = null == E ? void 0 : E.querySelector(b)
							if (f)
								return null != (d = e.appearance) && d.surveyPopupDelaySeconds
									? (fk.info(
											"Rendering survey " +
												e.id +
												" with delay of " +
												e.appearance.surveyPopupDelaySeconds +
												" seconds",
										),
										void setTimeout(() => {
											var a, b
											fk.info(
												"Rendering survey " +
													e.id +
													" with delay of " +
													(null == (a = e.appearance) ? void 0 : a.surveyPopupDelaySeconds) +
													" seconds",
											),
												null == (b = this._surveyManager) || b.renderSurvey(e, f, c),
												fk.info("Survey " + e.id + " rendered")
										}, 1e3 * e.appearance.surveyPopupDelaySeconds))
									: void this._surveyManager.renderSurvey(e, f, c)
							fk.warn("Survey element not found")
						} else fk.warn("Surveys of type " + e.type + " cannot be rendered in the app")
					else fk.warn("Survey not found")
				}
			}
			displaySurvey(a, b) {
				var c
				if (ag(this._surveyManager)) fk.warn("init was not called")
				else {
					var d = this.ye(a)
					if (d) {
						var e = d
						if (
							(null != (c = d.appearance) &&
								c.surveyPopupDelaySeconds &&
								b.ignoreDelay &&
								(e = O({}, d, { appearance: O({}, d.appearance, { surveyPopupDelaySeconds: 0 }) })),
							b.displayType !== fj.Popover &&
								b.initialResponses &&
								fk.warn(
									"initialResponses is only supported for popover surveys. prefill will not be applied.",
								),
							!1 === b.ignoreConditions)
						) {
							var f = this.canRenderSurvey(d)
							if (!f.visible)
								return void fk.warn("Survey is not eligible to be displayed: ", f.disabledReason)
						}
						b.displayType !== fj.Inline
							? this._surveyManager.handlePopoverSurvey(e, b)
							: this.renderSurvey(e, b.selector, b.properties)
					} else fk.warn("Survey not found")
				}
			}
			cancelPendingSurvey(a) {
				ag(this._surveyManager) ? fk.warn("init was not called") : this._surveyManager.cancelSurvey(a)
			}
			handlePageUnload() {
				var a
				null == (a = this._surveyManager) || a.handlePageUnload()
			}
		}
		var fw = bM("[Conversations]")
		class fx {
			constructor(a) {
				;(this.we = void 0),
					(this._conversationsManager = null),
					(this.xe = !1),
					(this.Ee = null),
					(this._instance = a)
			}
			onRemoteConfig(a) {
				if (!this._instance.config.disable_conversations) {
					var b = a.conversations
					ag(b) || (aj(b) ? (this.we = b) : ((this.we = b.enabled), (this.Ee = b)), this.loadIfEnabled())
				}
			}
			reset() {
				var a
				null == (a = this._conversationsManager) || a.reset(),
					(this._conversationsManager = null),
					(this.we = void 0),
					(this.Ee = null)
			}
			loadIfEnabled() {
				if (
					!this._conversationsManager &&
					!this.xe &&
					!(
						this._instance.config.disable_conversations ||
						(this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())
					)
				) {
					var a = null == K ? void 0 : K.__PosthogExtensions__
					if (a && !ac(this.we) && this.we)
						if (this.Ee && this.Ee.token) {
							this.xe = !0
							try {
								var b = a.initConversations
								if (b) return this.$e(b), void (this.xe = !1)
								var c = a.loadExternalDependency
								if (!c) return void this.Se("PostHog loadExternalDependency extension not found.")
								c(this._instance, "conversations", (b) => {
									b || !a.initConversations
										? this.Se("Could not load conversations script", b)
										: this.$e(a.initConversations),
										(this.xe = !1)
								})
							} catch (a) {
								this.Se("Error initializing conversations", a), (this.xe = !1)
							}
						} else fw.error("Conversations enabled but missing token in remote config.")
				}
			}
			$e(a) {
				if (this.Ee)
					try {
						;(this._conversationsManager = a(this.Ee, this._instance)),
							fw.info("Conversations loaded successfully")
					} catch (a) {
						this.Se("Error completing conversations initialization", a)
					}
				else fw.error("Cannot complete initialization: remote config is null")
			}
			Se(a, b) {
				fw.error(a, b), (this._conversationsManager = null), (this.xe = !1)
			}
			show() {
				this._conversationsManager
					? this._conversationsManager.show()
					: fw.warn("Conversations not loaded yet.")
			}
			hide() {
				this._conversationsManager && this._conversationsManager.hide()
			}
			isAvailable() {
				return !0 === this.we && !af(this._conversationsManager)
			}
			isVisible() {
				var a, b
				return null != (a = null == (b = this._conversationsManager) ? void 0 : b.isVisible()) && a
			}
			sendMessage(a, b, c) {
				var d = this
				return N(function* () {
					return d._conversationsManager
						? d._conversationsManager.sendMessage(a, b, c)
						: (fw.warn("Conversations not available yet."), null)
				})()
			}
			getMessages(a, b) {
				var c = this
				return N(function* () {
					return c._conversationsManager
						? c._conversationsManager.getMessages(a, b)
						: (fw.warn("Conversations not available yet."), null)
				})()
			}
			markAsRead(a) {
				var b = this
				return N(function* () {
					return b._conversationsManager
						? b._conversationsManager.markAsRead(a)
						: (fw.warn("Conversations not available yet."), null)
				})()
			}
			getTickets(a) {
				var b = this
				return N(function* () {
					return b._conversationsManager
						? b._conversationsManager.getTickets(a)
						: (fw.warn("Conversations not available yet."), null)
				})()
			}
			getCurrentTicketId() {
				var a, b
				return null != (a = null == (b = this._conversationsManager) ? void 0 : b.getCurrentTicketId())
					? a
					: null
			}
			getWidgetSessionId() {
				var a, b
				return null != (a = null == (b = this._conversationsManager) ? void 0 : b.getWidgetSessionId())
					? a
					: null
			}
		}
		class fy {
			constructor(a) {
				var b
				;(this.ke = !1),
					(this.Pe = !1),
					(this._instance = a),
					this._instance && null != (b = this._instance.config.logs) && b.captureConsoleLogs && (this.ke = !0)
			}
			onRemoteConfig(a) {
				var b,
					c = null == (b = a.logs) ? void 0 : b.captureConsoleLogs
				!ag(c) && c && ((this.ke = !0), this.loadIfEnabled())
			}
			reset() {}
			loadIfEnabled() {
				if (this.ke && !this.Pe) {
					var a = bM("[logs]"),
						b = null == K ? void 0 : K.__PosthogExtensions__
					if (b) {
						var c = b.loadExternalDependency
						c
							? c(this._instance, "logs", (c) => {
									var d
									c || null == (d = b.logs) || !d.initializeLogs
										? a.error("Could not load logs script", c)
										: (b.logs.initializeLogs(this._instance), (this.Pe = !0))
								})
							: a.error("PostHog loadExternalDependency extension not found.")
					} else a.error("PostHog Extensions not found.")
				}
			}
		}
		var fz = bM("[RateLimiter]")
		class fA {
			constructor(a) {
				;(this.serverLimits = {}),
					(this.lastEventRateLimited = !1),
					(this.checkForLimiting = (a) => {
						var b = a.text
						if (b && b.length)
							try {
								;(JSON.parse(b).quota_limited || []).forEach((a) => {
									fz.info((a || "events") + " is quota limited."),
										(this.serverLimits[a] = new Date().getTime() + 6e4)
								})
							} catch (a) {
								return void fz.warn(
									'could not rate limit - continuing. Error: "' +
										(null == a ? void 0 : a.message) +
										'"',
									{ text: b },
								)
							}
					}),
					(this.instance = a),
					(this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited)
			}
			get captureEventsPerSecond() {
				var a
				return (null == (a = this.instance.config.rate_limiting) ? void 0 : a.events_per_second) || 10
			}
			get captureEventsBurstLimit() {
				var a
				return Math.max(
					(null == (a = this.instance.config.rate_limiting) ? void 0 : a.events_burst_limit) ||
						10 * this.captureEventsPerSecond,
					this.captureEventsPerSecond,
				)
			}
			clientRateLimitContext(a) {
				void 0 === a && (a = !1)
				var b,
					c,
					d,
					{ captureEventsBurstLimit: e, captureEventsPerSecond: f } = this,
					g = new Date().getTime(),
					h =
						null != (b = null == (c = this.instance.persistence) ? void 0 : c.get_property(cp))
							? b
							: { tokens: e, last: g }
				;(h.tokens += ((g - h.last) / 1e3) * f), (h.last = g), h.tokens > e && (h.tokens = e)
				var i = h.tokens < 1
				return (
					i || a || (h.tokens = Math.max(0, h.tokens - 1)),
					!i ||
						this.lastEventRateLimited ||
						a ||
						this.instance.capture(
							"$$client_ingestion_warning",
							{
								$$client_ingestion_warning_message:
									"posthog-js client rate limited. Config is set to " +
									f +
									" events per second and " +
									e +
									" events burst limit.",
							},
							{ skip_client_rate_limiting: !0 },
						),
					(this.lastEventRateLimited = i),
					null == (d = this.instance.persistence) || d.set_property(cp, h),
					{ isRateLimited: i, remainingTokens: h.tokens }
				)
			}
			isServerRateLimited(a) {
				var b = this.serverLimits[a || "events"] || !1
				return !1 !== b && new Date().getTime() < b
			}
		}
		var fB = bM("[RemoteConfig]")
		class fC {
			constructor(a) {
				this._instance = a
			}
			get remoteConfig() {
				var a
				return null == (a = K._POSTHOG_REMOTE_CONFIG) || null == (a = a[this._instance.config.token])
					? void 0
					: a.config
			}
			Te(a) {
				var b, c
				null != (b = K.__PosthogExtensions__) && b.loadExternalDependency
					? null == (c = K.__PosthogExtensions__) ||
						null == c.loadExternalDependency ||
						c.loadExternalDependency(this._instance, "remote-config", () => a(this.remoteConfig))
					: (fB.error("PostHog Extensions not found. Cannot load remote config."), a())
			}
			Ie(a) {
				this._instance._send_request({
					method: "GET",
					url: this._instance.requestRouter.endpointFor(
						"assets",
						"/array/" + this._instance.config.token + "/config",
					),
					callback: (b) => {
						a(b.json)
					},
				})
			}
			load() {
				try {
					if (this.remoteConfig)
						return (
							fB.info("Using preloaded remote config", this.remoteConfig), void this.bi(this.remoteConfig)
						)
					if (this._instance.O())
						return void fB.warn("Remote config is disabled. Falling back to local config.")
					this.Te((a) => {
						a
							? this.bi(a)
							: (fB.info("No config found after loading remote JS config. Falling back to JSON."),
								this.Ie((a) => {
									this.bi(a)
								}))
					})
				} catch (a) {
					fB.error("Error loading remote config", a)
				}
			}
			bi(a) {
				a
					? this._instance.config.__preview_remote_config
						? (this._instance.bi(a),
							!1 !== a.hasFeatureFlags && this._instance.featureFlags.ensureFlagsLoaded())
						: fB.info("__preview_remote_config is disabled. Logging config instead", a)
					: fB.error("Failed to fetch remote config from PostHog.")
			}
		}
		var fD = 3e3
		class fE {
			constructor(a, b) {
				;(this.Ce = !0),
					(this.Re = []),
					(this.Fe = as(
						(null == b ? void 0 : b.flush_interval_ms) || fD,
						250,
						5e3,
						bL.createLogger("flush interval"),
						fD,
					)),
					(this.Me = a)
			}
			enqueue(a) {
				this.Re.push(a), this.Oe || this.Ae()
			}
			unload() {
				this.De()
				var a = Object.values(this.Re.length > 0 ? this.je() : {})
				;[...a.filter((a) => 0 === a.url.indexOf("/e")), ...a.filter((a) => 0 !== a.url.indexOf("/e"))].map(
					(a) => {
						this.Me(O({}, a, { transport: "sendBeacon" }))
					},
				)
			}
			enable() {
				;(this.Ce = !1), this.Ae()
			}
			Ae() {
				var a = this
				this.Ce ||
					(this.Oe = setTimeout(() => {
						if ((this.De(), this.Re.length > 0)) {
							var b = this.je(),
								c = function () {
									var c = b[d],
										e = new Date().getTime()
									c.data &&
										$(c.data) &&
										bR(c.data, (a) => {
											;(a.offset = Math.abs(a.timestamp - e)), delete a.timestamp
										}),
										a.Me(c)
								}
							for (var d in b) c()
						}
					}, this.Fe))
			}
			De() {
				clearTimeout(this.Oe), (this.Oe = void 0)
			}
			je() {
				var a = {}
				return (
					bR(this.Re, (b) => {
						var c,
							d = b,
							e = (d ? d.batchKey : null) || d.url
						ac(a[e]) && (a[e] = O({}, d, { data: [] })), null == (c = a[e].data) || c.push(d.data)
					}),
					(this.Re = []),
					a
				)
			}
		}
		var fF = ["retriesPerformedSoFar"]
		class fG {
			constructor(a) {
				;(this.Le = !1),
					(this.Ne = 3e3),
					(this.Re = []),
					(this._instance = a),
					(this.Re = []),
					(this.Ue = !0),
					!ac(y) &&
						"onLine" in y.navigator &&
						((this.Ue = y.navigator.onLine),
						(this.ze = () => {
							;(this.Ue = !0), this.Lt()
						}),
						(this.He = () => {
							this.Ue = !1
						}),
						b0(y, "online", this.ze),
						b0(y, "offline", this.He))
			}
			get length() {
				return this.Re.length
			}
			retriableRequest(a) {
				var { retriesPerformedSoFar: b } = a,
					c = P(a, fF)
				ai(b) && (c.url = eP(c.url, { retry_count: b })),
					this._instance._send_request(
						O({}, c, {
							callback: (a) => {
								200 !== a.statusCode &&
								(a.statusCode < 400 || a.statusCode >= 500) &&
								(null != b ? b : 0) < 10
									? this.Be(O({ retriesPerformedSoFar: b }, c))
									: null == c.callback || c.callback(a)
							},
						}),
					)
			}
			Be(a) {
				var b = a.retriesPerformedSoFar || 0
				a.retriesPerformedSoFar = b + 1
				var c = (function (a) {
						var b = 3e3 * Math.pow(2, a),
							c = b / 2,
							d = Math.min(18e5, b),
							e = (Math.random() - 0.5) * (d - c)
						return Math.ceil(d + e)
					})(b),
					d = Date.now() + c
				this.Re.push({ retryAt: d, requestOptions: a })
				var e = "Enqueued failed request for retry in " + c
				navigator.onLine || (e += " (Browser is offline)"), bL.warn(e), this.Le || ((this.Le = !0), this.qe())
			}
			qe() {
				;(this.We && clearTimeout(this.We), 0 === this.Re.length)
					? ((this.Le = !1), (this.We = void 0))
					: (this.We = setTimeout(() => {
							this.Ue && this.Re.length > 0 && this.Lt(), this.qe()
						}, this.Ne))
			}
			Lt() {
				var a = Date.now(),
					b = [],
					c = this.Re.filter((c) => c.retryAt < a || (b.push(c), !1))
				if (((this.Re = b), c.length > 0)) for (var { requestOptions: d } of c) this.retriableRequest(d)
			}
			unload() {
				for (var { requestOptions: a } of (this.We && (clearTimeout(this.We), (this.We = void 0)),
				(this.Le = !1),
				ac(y) ||
					(this.ze && (y.removeEventListener("online", this.ze), (this.ze = void 0)),
					this.He && (y.removeEventListener("offline", this.He), (this.He = void 0))),
				this.Re))
					try {
						this._instance._send_request(O({}, a, { transport: "sendBeacon" }))
					} catch (a) {
						bL.error(a)
					}
				this.Re = []
			}
		}
		class fH {
			constructor(a) {
				;(this.Ge = () => {
					this.Ve || (this.Ve = {})
					var a,
						b,
						c,
						d,
						e = this.scrollElement(),
						f = this.scrollY(),
						g = e ? Math.max(0, e.scrollHeight - e.clientHeight) : 0,
						h = f + ((null == e ? void 0 : e.clientHeight) || 0),
						i = (null == e ? void 0 : e.scrollHeight) || 0
					;(this.Ve.lastScrollY = Math.ceil(f)),
						(this.Ve.maxScrollY = Math.max(f, null != (a = this.Ve.maxScrollY) ? a : 0)),
						(this.Ve.maxScrollHeight = Math.max(g, null != (b = this.Ve.maxScrollHeight) ? b : 0)),
						(this.Ve.lastContentY = h),
						(this.Ve.maxContentY = Math.max(h, null != (c = this.Ve.maxContentY) ? c : 0)),
						(this.Ve.maxContentHeight = Math.max(i, null != (d = this.Ve.maxContentHeight) ? d : 0))
				}),
					(this._instance = a)
			}
			getContext() {
				return this.Ve
			}
			resetContext() {
				var a = this.Ve
				return setTimeout(this.Ge, 0), a
			}
			startMeasuringScrollPosition() {
				b0(y, "scroll", this.Ge, { capture: !0 }),
					b0(y, "scrollend", this.Ge, { capture: !0 }),
					b0(y, "resize", this.Ge)
			}
			scrollElement() {
				if (!this._instance.config.scroll_root_selector) return null == y ? void 0 : y.document.documentElement
				for (var a of $(this._instance.config.scroll_root_selector)
					? this._instance.config.scroll_root_selector
					: [this._instance.config.scroll_root_selector]) {
					var b = null == y ? void 0 : y.document.querySelector(a)
					if (b) return b
				}
			}
			scrollY() {
				if (this._instance.config.scroll_root_selector) {
					var a = this.scrollElement()
					return (a && a.scrollTop) || 0
				}
				return (y && (y.scrollY || y.pageYOffset || y.document.documentElement.scrollTop)) || 0
			}
			scrollX() {
				if (this._instance.config.scroll_root_selector) {
					var a = this.scrollElement()
					return (a && a.scrollLeft) || 0
				}
				return (y && (y.scrollX || y.pageXOffset || y.document.documentElement.scrollLeft)) || 0
			}
		}
		var fI = (a) =>
			d1(
				null == a ? void 0 : a.config.mask_personal_data_properties,
				null == a ? void 0 : a.config.custom_personal_data_properties,
			)
		class fJ {
			constructor(a, b, c, d) {
				;(this.Je = (a) => {
					var b = this.Ke()
					if (!b || b.sessionId !== a) {
						var c = { sessionId: a, props: this.Ye(this._instance) }
						this.Xe.register({ [co]: c })
					}
				}),
					(this._instance = a),
					(this.Qe = b),
					(this.Xe = c),
					(this.Ye = d || fI),
					this.Qe.onSessionId(this.Je)
			}
			Ke() {
				return this.Xe.props[co]
			}
			getSetOnceProps() {
				var a,
					b = null == (a = this.Ke()) ? void 0 : a.props
				return b
					? "r" in b
						? d2(b)
						: {
								$referring_domain: b.referringDomain,
								$pathname: b.initialPathName,
								utm_source: b.utm_source,
								utm_campaign: b.utm_campaign,
								utm_medium: b.utm_medium,
								utm_content: b.utm_content,
								utm_term: b.utm_term,
							}
					: {}
			}
			getSessionProps() {
				var a = {}
				return (
					bR(bX(this.getSetOnceProps()), (b, c) => {
						"$current_url" === c && (c = "url"), (a["$session_entry_" + V(c)] = b)
					}),
					a
				)
			}
		}
		var fK = bM("[SessionId]")
		class fL {
			on(a, b) {
				return this.Ze.on(a, b)
			}
			constructor(a, b, c) {
				if (
					((this.tr = []),
					(this.ir = void 0),
					(this.Ze = new fq()),
					(this.er = (a, b) => !(!ai(a) || !ai(b)) && Math.abs(a - b) > this.sessionTimeoutMs),
					!a.persistence)
				)
					throw Error("SessionIdManager requires a PostHogPersistence instance")
				if ("always" === a.config.cookieless_mode)
					throw Error('SessionIdManager cannot be used with cookieless_mode="always"')
				;(this.R = a.config),
					(this.Xe = a.persistence),
					(this.rr = void 0),
					(this.sr = void 0),
					(this._sessionStartTimestamp = null),
					(this._sessionActivityTimestamp = null),
					(this.nr = b || dk),
					(this.ar = c || dk)
				var d,
					e = this.R.persistence_name || this.R.token,
					f = this.R.session_idle_timeout_seconds || 1800
				if (
					((this._sessionTimeoutMs =
						1e3 * as(f, 60, 36e3, fK.createLogger("session_idle_timeout_seconds"), 1800)),
					a.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }),
					this.lr(),
					(this.ur = "ph_" + e + "_window_id"),
					(this.hr = "ph_" + e + "_primary_window_exists"),
					this.dr())
				) {
					var g = dx.W(this.ur),
						h = dx.W(this.hr)
					g && !h ? (this.rr = g) : dx.V(this.ur), dx.G(this.hr, !0)
				}
				if (null != (d = this.R.bootstrap) && d.sessionID)
					try {
						var i = ((a) => {
							var b = a.replace(/-/g, "")
							if (32 !== b.length) throw Error("Not a valid UUID")
							if ("7" !== b[12]) throw Error("Not a UUIDv7")
							return parseInt(b.substring(0, 12), 16)
						})(this.R.bootstrap.sessionID)
						this.vr(this.R.bootstrap.sessionID, new Date().getTime(), i)
					} catch (a) {
						fK.error("Invalid sessionID in bootstrap", a)
					}
				this.cr()
			}
			get sessionTimeoutMs() {
				return this._sessionTimeoutMs
			}
			onSessionId(a) {
				return (
					ac(this.tr) && (this.tr = []),
					this.tr.push(a),
					this.sr && a(this.sr, this.rr),
					() => {
						this.tr = this.tr.filter((b) => b !== a)
					}
				)
			}
			dr() {
				return "memory" !== this.R.persistence && !this.Xe.ki && dx.H()
			}
			pr(a) {
				a !== this.rr && ((this.rr = a), this.dr() && dx.G(this.ur, a))
			}
			gr() {
				return this.rr ? this.rr : this.dr() ? dx.W(this.ur) : null
			}
			vr(a, b, c) {
				;(a === this.sr && b === this._sessionActivityTimestamp && c === this._sessionStartTimestamp) ||
					((this._sessionStartTimestamp = c),
					(this._sessionActivityTimestamp = b),
					(this.sr = a),
					this.Xe.register({ [ce]: [b, a, c] }))
			}
			_r() {
				var a = this.Xe.props[ce]
				return $(a) && 2 === a.length && a.push(a[0]), a || [0, null, 0]
			}
			resetSessionId() {
				this.vr(null, null, null)
			}
			destroy() {
				clearTimeout(this.mr),
					(this.mr = void 0),
					this.ir &&
						y &&
						(y.removeEventListener("beforeunload", this.ir, { capture: !1 }), (this.ir = void 0)),
					(this.tr = [])
			}
			cr() {
				;(this.ir = () => {
					this.dr() && dx.V(this.hr)
				}),
					b0(y, "beforeunload", this.ir, { capture: !1 })
			}
			checkAndGetSessionAndWindowId(a, b) {
				if ((void 0 === a && (a = !1), void 0 === b && (b = null), "always" === this.R.cookieless_mode))
					throw Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"')
				var c = b || new Date().getTime(),
					[d, e, f] = this._r(),
					g = this.gr(),
					h = ai(f) && Math.abs(c - f) > 864e5,
					i = !1,
					j = !e,
					k = !j && !a && this.er(c, d)
				j || k || h
					? ((e = this.nr()),
						(g = this.ar()),
						fK.info("new session ID generated", {
							sessionId: e,
							windowId: g,
							changeReason: { noSessionId: j, activityTimeout: k, sessionPastMaximumLength: h },
						}),
						(f = c),
						(i = !0))
					: g || ((g = this.ar()), (i = !0))
				var l = ai(d) && a && !h ? d : c,
					m = ai(f) ? f : new Date().getTime()
				return (
					this.pr(g),
					this.vr(e, l, m),
					a || this.lr(),
					i &&
						this.tr.forEach((a) =>
							a(e, g, i ? { noSessionId: j, activityTimeout: k, sessionPastMaximumLength: h } : void 0),
						),
					{
						sessionId: e,
						windowId: g,
						sessionStartTimestamp: m,
						changeReason: i ? { noSessionId: j, activityTimeout: k, sessionPastMaximumLength: h } : void 0,
						lastActivityTimestamp: d,
					}
				)
			}
			lr() {
				clearTimeout(this.mr),
					(this.mr = setTimeout(() => {
						var [a] = this._r()
						if (this.er(new Date().getTime(), a)) {
							var b = this.sr
							this.resetSessionId(), this.Ze.emit("forcedIdleReset", { idleSessionId: b })
						}
					}, 1.1 * this.sessionTimeoutMs))
			}
		}
		var fM = ["$set_once", "$set"],
			fN = bM("[SiteApps]")
		class fO {
			constructor(a) {
				;(this._instance = a), (this.yr = []), (this.apps = {})
			}
			get isEnabled() {
				return !!this._instance.config.opt_in_site_apps
			}
			br(a, b) {
				if (b) {
					var c = this.globalsForEvent(b)
					this.yr.push(c), this.yr.length > 1e3 && (this.yr = this.yr.slice(10))
				}
			}
			get siteAppLoaders() {
				var a
				return null == (a = K._POSTHOG_REMOTE_CONFIG) || null == (a = a[this._instance.config.token])
					? void 0
					: a.siteApps
			}
			init() {
				if (this.isEnabled) {
					var a = this._instance._addCaptureHook(this.br.bind(this))
					this.wr = () => {
						a(), (this.yr = []), (this.wr = void 0)
					}
				}
			}
			globalsForEvent(a) {
				if (!a) throw Error("Event payload is required")
				var b,
					c,
					d,
					e,
					f,
					g,
					h,
					i = {},
					j = this._instance.get_property("$groups") || []
				for (var [k, l] of Object.entries(this._instance.get_property("$stored_group_properties") || {}))
					i[k] = { id: j[k], type: k, properties: l }
				var { $set_once: m, $set: n } = a
				return {
					event: O({}, P(a, fM), {
						properties: O(
							{},
							a.properties,
							n
								? {
										$set: O(
											{},
											null != (b = null == (c = a.properties) ? void 0 : c.$set) ? b : {},
											n,
										),
									}
								: {},
							m
								? {
										$set_once: O(
											{},
											null != (d = null == (e = a.properties) ? void 0 : e.$set_once) ? d : {},
											m,
										),
									}
								: {},
						),
						elements_chain: null != (f = null == (g = a.properties) ? void 0 : g.$elements_chain) ? f : "",
						distinct_id: null == (h = a.properties) ? void 0 : h.distinct_id,
					}),
					person: { properties: this._instance.get_property("$stored_person_properties") },
					groups: i,
				}
			}
			setupSiteApp(a) {
				var b = this.apps[a.id],
					c = () => {
						var c
						!b.errored &&
							this.yr.length &&
							(fN.info("Processing " + this.yr.length + " events for site app with id " + a.id),
							this.yr.forEach((a) => (null == b.processEvent ? void 0 : b.processEvent(a))),
							(b.processedBuffer = !0)),
							Object.values(this.apps).every((a) => a.processedBuffer || a.errored) &&
								(null == (c = this.wr) || c.call(this))
					},
					d = !1,
					e = (e) => {
						;(b.errored = !e),
							(b.loaded = !0),
							fN.info("Site app with id " + a.id + " " + (e ? "loaded" : "errored")),
							d && c()
					}
				try {
					var { processEvent: f } = a.init({
						posthog: this._instance,
						callback: (a) => {
							e(a)
						},
					})
					f && (b.processEvent = f), (d = !0)
				} catch (b) {
					fN.error("Error while initializing PostHog app with config id " + a.id, b), e(!1)
				}
				if (d && b.loaded)
					try {
						c()
					} catch (c) {
						fN.error("Error while processing buffered events PostHog app with config id " + a.id, c),
							(b.errored = !0)
					}
			}
			Er() {
				var a = this.siteAppLoaders || []
				for (var b of a) this.apps[b.id] = { id: b.id, loaded: !1, errored: !1, processedBuffer: !1 }
				for (var c of a) this.setupSiteApp(c)
			}
			$r(a) {
				if (0 !== Object.keys(this.apps).length) {
					var b = this.globalsForEvent(a)
					for (var c of Object.values(this.apps))
						try {
							null == c.processEvent || c.processEvent(b)
						} catch (b) {
							fN.error("Error while processing event " + a.event + " for site app " + c.id, b)
						}
				}
			}
			onRemoteConfig(a) {
				var b,
					c,
					d,
					e = this
				if (null != (b = this.siteAppLoaders) && b.length)
					return this.isEnabled
						? (this.Er(), void this._instance.on("eventCaptured", (a) => this.$r(a)))
						: void fN.error(
								'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.',
							)
				if ((null == (c = this.wr) || c.call(this), null != (d = a.siteApps) && d.length))
					if (this.isEnabled) {
						var f = function (a) {
							var b
							;(K["__$$ph_site_app_" + a] = e._instance),
								null == (b = K.__PosthogExtensions__) ||
									null == b.loadSiteApp ||
									b.loadSiteApp(e._instance, h, (b) => {
										if (b)
											return fN.error(
												"Error while initializing PostHog app with config id " + a,
												b,
											)
									})
						}
						for (var { id: g, url: h } of a.siteApps) f(g)
					} else fN.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
			}
		}
		var fP = function (a, b) {
				if (!a) return !1
				var c = a.userAgent
				if (c && R(c, b)) return !0
				try {
					var d = null == a ? void 0 : a.userAgentData
					if (null != d && d.brands && d.brands.some((a) => R(null == a ? void 0 : a.brand, b))) return !0
				} catch (a) {}
				return !!a.webdriver
			},
			fQ = (function (a) {
				return (a.US = "us"), (a.EU = "eu"), (a.CUSTOM = "custom"), a
			})({}),
			fR = "i.posthog.com"
		class fS {
			constructor(a) {
				;(this.Sr = {}), (this.instance = a)
			}
			get apiHost() {
				var a = this.instance.config.api_host.trim().replace(/\/$/, "")
				return "https://app.posthog.com" === a ? "https://us.i.posthog.com" : a
			}
			get flagsApiHost() {
				var a = this.instance.config.flags_api_host
				return a ? a.trim().replace(/\/$/, "") : this.apiHost
			}
			get uiHost() {
				var a,
					b = null == (a = this.instance.config.ui_host) ? void 0 : a.replace(/\/$/, "")
				return (
					b || (b = this.apiHost.replace("." + fR, ".posthog.com")),
					"https://app.posthog.com" === b ? "https://us.posthog.com" : b
				)
			}
			get region() {
				return (
					this.Sr[this.apiHost] ||
						(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
							? (this.Sr[this.apiHost] = fQ.US)
							: /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
								? (this.Sr[this.apiHost] = fQ.EU)
								: (this.Sr[this.apiHost] = fQ.CUSTOM)),
					this.Sr[this.apiHost]
				)
			}
			endpointFor(a, b) {
				if ((void 0 === b && (b = ""), b && (b = "/" === b[0] ? b : "/" + b), "ui" === a))
					return this.uiHost + b
				if ("flags" === a) return this.flagsApiHost + b
				if (this.region === fQ.CUSTOM) return this.apiHost + b
				var c = fR + b
				switch (a) {
					case "assets":
						return "https://" + this.region + "-assets." + c
					case "api":
						return "https://" + this.region + "." + c
				}
			}
		}
		var fT = {
			icontains: (a, b) => !!y && b.href.toLowerCase().indexOf(a.toLowerCase()) > -1,
			not_icontains: (a, b) => !!y && -1 === b.href.toLowerCase().indexOf(a.toLowerCase()),
			regex: (a, b) => !!y && eT(b.href, a),
			not_regex: (a, b) => !!y && !eT(b.href, a),
			exact: (a, b) => b.href === a,
			is_not: (a, b) => b.href !== a,
		}
		class fU {
			constructor(a) {
				var b = this
				;(this.getWebExperimentsAndEvaluateDisplayLogic = function (a) {
					void 0 === a && (a = !1),
						b.getWebExperiments((a) => {
							fU.kr("retrieved web experiments from the server"),
								(b.Pr = new Map()),
								a.forEach((a) => {
									if (a.feature_flag_key) {
										b.Pr &&
											(fU.kr("setting flag key ", a.feature_flag_key, " to web experiment ", a),
											null == (c = b.Pr) || c.set(a.feature_flag_key, a))
										var c,
											d = b._instance.getFeatureFlag(a.feature_flag_key)
										ad(d) && a.variants[d] && b.Tr(a.name, d, a.variants[d].transforms)
									} else if (a.variants)
										for (var e in a.variants) {
											var f = a.variants[e]
											fU.Ir(f) && b.Tr(a.name, e, f.transforms)
										}
								})
						}, a)
				}),
					(this._instance = a),
					this._instance.onFeatureFlags((a) => {
						this.onFeatureFlags(a)
					})
			}
			onFeatureFlags(a) {
				if (this._is_bot()) fU.kr("Refusing to render web experiment since the viewer is a likely bot")
				else if (!this._instance.config.disable_web_experiments) {
					if (ag(this.Pr))
						return (this.Pr = new Map()), this.loadIfEnabled(), void this.previewWebExperiment()
					fU.kr("applying feature flags", a),
						a.forEach((a) => {
							var b
							if (this.Pr && null != (b = this.Pr) && b.has(a)) {
								var c,
									d = this._instance.getFeatureFlag(a),
									e = null == (c = this.Pr) ? void 0 : c.get(a)
								d && null != e && e.variants[d] && this.Tr(e.name, d, e.variants[d].transforms)
							}
						})
				}
			}
			previewWebExperiment() {
				var a = fU.getWindowLocation()
				if (null != a && a.search) {
					var b = c4(null == a ? void 0 : a.search, "__experiment_id"),
						c = c4(null == a ? void 0 : a.search, "__experiment_variant")
					b &&
						c &&
						(fU.kr("previewing web experiments " + b + " && " + c),
						this.getWebExperiments(
							(a) => {
								this.Cr(parseInt(b), c, a)
							},
							!1,
							!0,
						))
				}
			}
			loadIfEnabled() {
				this._instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
			}
			getWebExperiments(a, b, c) {
				if (this._instance.config.disable_web_experiments && !c) return a([])
				var d = this._instance.get_property("$web_experiments")
				if (d && !b) return a(d)
				this._instance._send_request({
					url: this._instance.requestRouter.endpointFor(
						"api",
						"/api/web_experiments/?token=" + this._instance.config.token,
					),
					method: "GET",
					callback: (b) => (200 === b.statusCode && b.json ? a(b.json.experiments || []) : a([])),
				})
			}
			Cr(a, b, c) {
				var d = c.filter((b) => b.id === a)
				d &&
					d.length > 0 &&
					(fU.kr("Previewing web experiment [" + d[0].name + "] with variant [" + b + "]"),
					this.Tr(d[0].name, b, d[0].variants[b].transforms))
			}
			static Ir(a) {
				return !ag(a.conditions) && fU.Rr(a) && fU.Fr(a)
			}
			static Rr(a) {
				if (ag(a.conditions) || ag(null == (b = a.conditions) ? void 0 : b.url)) return !0
				var b,
					c,
					d,
					e,
					f = fU.getWindowLocation()
				return (
					!!f &&
					(null == (c = a.conditions) ||
						!c.url ||
						fT[null != (d = null == (e = a.conditions) ? void 0 : e.urlMatchType) ? d : "icontains"](
							a.conditions.url,
							f,
						))
				)
			}
			static getWindowLocation() {
				return null == y ? void 0 : y.location
			}
			static Fr(a) {
				if (ag(a.conditions) || ag(null == (c = a.conditions) ? void 0 : c.utm)) return !0
				var b = dY()
				if (b.utm_source) {
					var c,
						d,
						e,
						f,
						g,
						h,
						i,
						j,
						k,
						l =
							null == (d = a.conditions) ||
							null == (d = d.utm) ||
							!d.utm_campaign ||
							(null == (e = a.conditions) || null == (e = e.utm) ? void 0 : e.utm_campaign) ==
								b.utm_campaign,
						m =
							null == (f = a.conditions) ||
							null == (f = f.utm) ||
							!f.utm_source ||
							(null == (g = a.conditions) || null == (g = g.utm) ? void 0 : g.utm_source) == b.utm_source,
						n =
							null == (h = a.conditions) ||
							null == (h = h.utm) ||
							!h.utm_medium ||
							(null == (i = a.conditions) || null == (i = i.utm) ? void 0 : i.utm_medium) == b.utm_medium,
						o =
							null == (j = a.conditions) ||
							null == (j = j.utm) ||
							!j.utm_term ||
							(null == (k = a.conditions) || null == (k = k.utm) ? void 0 : k.utm_term) == b.utm_term
					return l && n && o && m
				}
				return !1
			}
			static kr(a) {
				for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d]
				bL.info("[WebExperiments] " + a, c)
			}
			Tr(a, b, c) {
				this._is_bot()
					? fU.kr("Refusing to render web experiment since the viewer is a likely bot")
					: "control" !== b
						? c.forEach((c) => {
								if (c.selector) {
									fU.kr("applying transform of variant " + b + " for experiment " + a + " ", c)
									var d,
										e = null == (d = document) ? void 0 : d.querySelectorAll(c.selector)
									null == e ||
										e.forEach((a) => {
											var b = a
											c.html && (b.innerHTML = c.html), c.css && b.setAttribute("style", c.css)
										})
								}
							})
						: fU.kr("Control variants leave the page unmodified.")
			}
			_is_bot() {
				return D && this._instance ? fP(D, this._instance.config.custom_blocked_useragents) : void 0
			}
		}
		var fV = bM("[PostHog ExternalIntegrations]"),
			fW = { intercom: "intercom-integration", crispChat: "crisp-chat-integration" }
		class fX {
			constructor(a) {
				this._instance = a
			}
			it(a, b) {
				var c
				null == (c = K.__PosthogExtensions__) ||
					null == c.loadExternalDependency ||
					c.loadExternalDependency(this._instance, a, (a) => {
						if (a) return fV.error("failed to load script", a)
						b()
					})
			}
			startIfEnabledOrStop() {
				var a,
					b = this,
					c = function (a) {
						var c, d, f
						!e ||
							(null != (c = K.__PosthogExtensions__) && null != (c = c.integrations) && c[a]) ||
							b.it(fW[a], () => {
								var c
								null == (c = K.__PosthogExtensions__) ||
									null == (c = c.integrations) ||
									null == (c = c[a]) ||
									c.start(b._instance)
							}),
							!e &&
								null != (d = K.__PosthogExtensions__) &&
								null != (d = d.integrations) &&
								d[a] &&
								(null == (f = K.__PosthogExtensions__) ||
									null == (f = f.integrations) ||
									null == (f = f[a]) ||
									f.stop())
					}
				for (var [d, e] of Object.entries(null != (a = this._instance.config.integrations) ? a : {})) c(d)
			}
		}
		var fY = "[SessionRecording]",
			fZ = bM(fY)
		class f$ {
			get started() {
				var a
				return !(null == (a = this.Mr) || !a.isStarted)
			}
			get status() {
				return this.Mr ? this.Mr.status : this.Or && !this.Ar ? "disabled" : "lazy_loading"
			}
			constructor(a) {
				if (
					((this._forceAllowLocalhostNetworkCapture = !1),
					(this.Or = !1),
					(this.Dr = void 0),
					(this._instance = a),
					!this._instance.sessionManager)
				)
					throw (
						(fZ.error("started without valid sessionManager"),
						Error(fY + " started without valid sessionManager. This is a bug."))
					)
				if ("always" === this._instance.config.cookieless_mode)
					throw Error(fY + ' cannot be used with cookieless_mode="always"')
			}
			get Ar() {
				var a,
					b = !(null == (a = this._instance.get_property(cd)) || !a.enabled),
					c = !this._instance.config.disable_session_recording,
					d = this._instance.config.disable_session_recording || this._instance.consent.isOptedOut()
				return y && b && c && !d
			}
			startIfEnabledOrStop(a) {
				var b
				if (!this.Ar || null == (b = this.Mr) || !b.isStarted) {
					var c = !ac(Object.assign) && !ac(Array.from)
					this.Ar && c ? (this.jr(a), fZ.info("starting")) : this.stopRecording()
				}
			}
			jr(a) {
				var b, c, d
				this.Ar &&
					(null != K &&
					null != (b = K.__PosthogExtensions__) &&
					null != (b = b.rrweb) &&
					b.record &&
					null != (c = K.__PosthogExtensions__) &&
					c.initSessionRecording
						? this.Lr(a)
						: null == (d = K.__PosthogExtensions__) ||
							null == d.loadExternalDependency ||
							d.loadExternalDependency(this._instance, this.Nr, (b) => {
								if (b) return fZ.error("could not load recorder", b)
								this.Lr(a)
							}))
			}
			stopRecording() {
				var a, b
				null == (a = this.Dr) || a.call(this), (this.Dr = void 0), null == (b = this.Mr) || b.stop()
			}
			Ur() {
				var a
				null == (a = this._instance.persistence) || a.unregister(cf)
			}
			zr(a) {
				if (this._instance.persistence) {
					var b,
						c,
						d = this._instance.persistence,
						e = () => {
							var b = !1 === a.sessionRecording ? void 0 : a.sessionRecording,
								c = null == b ? void 0 : b.sampleRate,
								e = ag(c) ? null : parseFloat(c)
							ag(e) && this.Ur()
							var f = null == b ? void 0 : b.minimumDurationMilliseconds
							d.register({
								[cd]: O({ enabled: !!b }, b, {
									networkPayloadCapture: O(
										{ capturePerformance: a.capturePerformance },
										null == b ? void 0 : b.networkPayloadCapture,
									),
									canvasRecording: {
										enabled: null == b ? void 0 : b.recordCanvas,
										fps: null == b ? void 0 : b.canvasFps,
										quality: null == b ? void 0 : b.canvasQuality,
									},
									sampleRate: e,
									minimumDurationMilliseconds: ac(f) ? null : f,
									endpoint: null == b ? void 0 : b.endpoint,
									triggerMatchType: null == b ? void 0 : b.triggerMatchType,
									masking: null == b ? void 0 : b.masking,
									urlTriggers: null == b ? void 0 : b.urlTriggers,
								}),
							})
						}
					e(),
						null == (b = this.Dr) || b.call(this),
						(this.Dr = null == (c = this._instance.sessionManager) ? void 0 : c.onSessionId(e))
				}
			}
			onRemoteConfig(a) {
				"sessionRecording" in a
					? !1 !== a.sessionRecording
						? (this.zr(a), (this.Or = !0), this.startIfEnabledOrStop())
						: (this.Or = !0)
					: fZ.info("skipping remote config with no sessionRecording", a)
			}
			log(a, b) {
				var c
				void 0 === b && (b = "log"),
					null != (c = this.Mr) && c.log ? this.Mr.log(a, b) : fZ.warn("log called before recorder was ready")
			}
			get Nr() {
				var a,
					b,
					c = null == (a = this._instance) || null == (a = a.persistence) ? void 0 : a.get_property(cd)
				return (null == c || null == (b = c.scriptConfig) ? void 0 : b.script) || "lazy-recorder"
			}
			Lr(a) {
				var b, c
				if (null == (b = K.__PosthogExtensions__) || !b.initSessionRecording)
					throw Error("Called on script loaded before session recording is available")
				this.Mr ||
					((this.Mr =
						null == (c = K.__PosthogExtensions__) ? void 0 : c.initSessionRecording(this._instance)),
					(this.Mr._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture)),
					this.Mr.start(a)
			}
			onRRwebEmit(a) {
				var b
				null == (b = this.Mr) || null == b.onRRwebEmit || b.onRRwebEmit(a)
			}
			overrideLinkedFlag() {
				var a, b
				this.Mr || null == (b = this._instance.persistence) || b.register({ $replay_override_linked_flag: !0 }),
					null == (a = this.Mr) || a.overrideLinkedFlag()
			}
			overrideSampling() {
				var a, b
				this.Mr || null == (b = this._instance.persistence) || b.register({ $replay_override_sampling: !0 }),
					null == (a = this.Mr) || a.overrideSampling()
			}
			overrideTrigger(a) {
				var b, c
				this.Mr ||
					null == (c = this._instance.persistence) ||
					c.register({
						["url" === a ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0,
					}),
					null == (b = this.Mr) || b.overrideTrigger(a)
			}
			get sdkDebugProperties() {
				var a
				return (null == (a = this.Mr) ? void 0 : a.sdkDebugProperties) || { $recording_status: this.status }
			}
			tryAddCustomEvent(a, b) {
				var c
				return !(null == (c = this.Mr) || !c.tryAddCustomEvent(a, b))
			}
		}
		var f_ = {},
			f0 = () => {},
			f1 = "posthog",
			f2 =
				!eN &&
				-1 === (null == J ? void 0 : J.indexOf("MSIE")) &&
				-1 === (null == J ? void 0 : J.indexOf("Mozilla")),
			f3 = (a) => {
				var b
				let c
				return O(
					{
						api_host: "https://us.i.posthog.com",
						flags_api_host: null,
						ui_host: null,
						token: "",
						autocapture: !0,
						cross_subdomain_cookie: b$(null == E ? void 0 : E.location),
						persistence: "localStorage+cookie",
						persistence_name: "",
						cookie_persisted_properties: [],
						loaded: f0,
						save_campaign_params: !0,
						custom_campaign_params: [],
						custom_blocked_useragents: [],
						save_referrer: !0,
						capture_pageleave: "if_capture_pageview",
						defaults: null != a ? a : "unset",
						__preview_deferred_init_extensions: !1,
						debug:
							(F &&
								ad(null == F ? void 0 : F.search) &&
								-1 !== F.search.indexOf("__posthog_debug=true")) ||
							!1,
						cookie_expiration: 365,
						upgrade: !1,
						disable_session_recording: !1,
						disable_persistence: !1,
						disable_web_experiments: !0,
						disable_surveys: !1,
						disable_surveys_automatic_display: !1,
						disable_conversations: !1,
						disable_product_tours: !0,
						disable_external_dependency_loading: !1,
						enable_recording_console_log: void 0,
						secure_cookie: "https:" === (null == y || null == (b = y.location) ? void 0 : b.protocol),
						ip: !1,
						opt_out_capturing_by_default: !1,
						opt_out_persistence_by_default: !1,
						opt_out_useragent_filter: !1,
						opt_out_capturing_persistence_type: "localStorage",
						consent_persistence_name: null,
						opt_out_capturing_cookie_prefix: null,
						opt_in_site_apps: !1,
						property_denylist: [],
						respect_dnt: !1,
						sanitize_properties: null,
						request_headers: {},
						request_batching: !0,
						properties_string_max_length: 65535,
						mask_all_element_attributes: !1,
						mask_all_text: !1,
						mask_personal_data_properties: !1,
						custom_personal_data_properties: [],
						advanced_disable_flags: !1,
						advanced_disable_decide: !1,
						advanced_disable_feature_flags: !1,
						advanced_disable_feature_flags_on_first_load: !1,
						advanced_only_evaluate_survey_feature_flags: !1,
						advanced_enable_surveys: !1,
						advanced_disable_toolbar_metrics: !1,
						feature_flag_request_timeout_ms: 3e3,
						surveys_request_timeout_ms: 1e4,
						on_request_error: (a) => {
							var b = "Bad HTTP status: " + a.statusCode + " " + a.text
							bL.error(b)
						},
						get_device_id: (a) => a,
						capture_performance: void 0,
						name: "posthog",
						bootstrap: {},
						disable_compression: !1,
						session_idle_timeout_seconds: 1800,
						person_profiles: "identified_only",
						before_send: void 0,
						request_queue_config: { flush_interval_ms: fD },
						error_tracking: {},
						_onCapture: f0,
						__preview_eager_load_replay: !1,
					},
					{
						rageclick: !((c = a) && c >= "2025-11-30") || { content_ignorelist: !0 },
						capture_pageview: !(c && c >= "2025-05-24") || "history_change",
						session_recording: c && c >= "2025-11-30" ? { strictMinimumDuration: !0 } : {},
						external_scripts_inject_target: c && c >= "2026-01-30" ? "head" : "body",
					},
				)
			},
			f4 = (a) => {
				var b = {}
				ac(a.process_person) || (b.person_profiles = a.process_person),
					ac(a.xhr_headers) || (b.request_headers = a.xhr_headers),
					ac(a.cookie_name) || (b.persistence_name = a.cookie_name),
					ac(a.disable_cookie) || (b.disable_persistence = a.disable_cookie),
					ac(a.store_google) || (b.save_campaign_params = a.store_google),
					ac(a.verbose) || (b.debug = a.verbose)
				var c = bS({}, b, a)
				return (
					$(a.property_blacklist) &&
						(ac(a.property_denylist)
							? (c.property_denylist = a.property_blacklist)
							: $(a.property_denylist)
								? (c.property_denylist = [...a.property_blacklist, ...a.property_denylist])
								: bL.error("Invalid value for property_denylist config: " + a.property_denylist)),
					c
				)
			}
		class f5 {
			constructor() {
				this.__forceAllowLocalhost = !1
			}
			get Hr() {
				return this.__forceAllowLocalhost
			}
			set Hr(a) {
				bL.error(
					"WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`",
				),
					(this.__forceAllowLocalhost = a)
			}
		}
		class f6 {
			get decideEndpointWasHit() {
				var a, b
				return null != (a = null == (b = this.featureFlags) ? void 0 : b.hasLoadedFlags) && a
			}
			get flagsEndpointWasHit() {
				var a, b
				return null != (a = null == (b = this.featureFlags) ? void 0 : b.hasLoadedFlags) && a
			}
			constructor() {
				;(this.webPerformance = new f5()),
					(this.Br = !1),
					(this.version = L.LIB_VERSION),
					(this.qr = new fq()),
					(this._calculate_event_properties = this.calculateEventProperties.bind(this)),
					(this.config = f3()),
					(this.SentryIntegration = dL),
					(this.sentryIntegration = (a) =>
						(function (a, b) {
							var c = dK(a, b)
							return { name: dJ, processEvent: (a) => c(a) }
						})(this, a)),
					(this.__request_queue = []),
					(this.__loaded = !1),
					(this.analyticsDefaultEndpoint = "/e/"),
					(this.Wr = !1),
					(this.Gr = null),
					(this.Vr = null),
					(this.Jr = null),
					(this.featureFlags = new e9(this)),
					(this.toolbar = new dQ(this)),
					(this.scrollManager = new fH(this)),
					(this.pageViewManager = new ec(this)),
					(this.surveys = new fv(this)),
					(this.conversations = new fx(this)),
					(this.logs = new fy(this)),
					(this.experiments = new fU(this)),
					(this.exceptions = new eZ(this)),
					(this.rateLimiter = new fA(this)),
					(this.requestRouter = new fS(this)),
					(this.consent = new dz(this)),
					(this.externalIntegrations = new fX(this)),
					(this.people = {
						set: (a, b, c) => {
							var d = ad(a) ? { [a]: b } : a
							this.setPersonProperties(d), null == c || c({})
						},
						set_once: (a, b, c) => {
							var d = ad(a) ? { [a]: b } : a
							this.setPersonProperties(void 0, d), null == c || c({})
						},
					}),
					this.on("eventCaptured", (a) => bL.info('send "' + (null == a ? void 0 : a.event) + '"', a))
			}
			init(a, b, c) {
				if (c && c !== f1) {
					var d,
						e = null != (d = f_[c]) ? d : new f6()
					return e._init(a, b, c), (f_[c] = e), (f_[f1][c] = e), e
				}
				return this._init(a, b, c)
			}
			_init(a, b, c) {
				if ((void 0 === b && (b = {}), ac(a) || ae(a)))
					return (
						bL.critical(
							"PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()",
						),
						this
					)
				if (this.__loaded)
					return (
						console.warn(
							"[PostHog.js]",
							"You have already initialized PostHog! Re-initializing is a no-op",
						),
						this
					)
				;(this.__loaded = !0),
					(this.config = {}),
					(b.debug = this.Kr(b.debug)),
					(this.Yr = b),
					(this.Xr = []),
					b.person_profiles && (this.Vr = b.person_profiles),
					this.set_config(bS({}, f3(b.defaults), f4(b), { name: c, token: a })),
					this.config.on_xhr_error && bL.error("on_xhr_error is deprecated. Use on_request_error instead"),
					(this.compression = b.disable_compression ? void 0 : ed.GZipJS)
				var d = this.Qr()
				;(this.persistence = new fb(this.config, d)),
					(this.sessionPersistence =
						"sessionStorage" === this.config.persistence || "memory" === this.config.persistence
							? this.persistence
							: new fb(O({}, this.config, { persistence: "sessionStorage" }), d))
				var e = O({}, this.persistence.props),
					f = O({}, this.sessionPersistence.props)
				this.register({ $initialization_time: new Date().toISOString() }),
					(this.Zr = new fE((a) => this.ts(a), this.config.request_queue_config)),
					(this.es = new fG(this)),
					(this.__request_queue = [])
				var g =
					"always" === this.config.cookieless_mode ||
					("on_reject" === this.config.cookieless_mode && this.consent.isExplicitlyOptedOut())
				if (
					(g ||
						((this.sessionManager = new fL(this)),
						(this.sessionPropsManager = new fJ(this, this.sessionManager, this.persistence))),
					this.config.__preview_deferred_init_extensions
						? (bL.info("Deferring extension initialization to improve startup performance"),
							setTimeout(() => {
								this.rs(g)
							}, 0))
						: (bL.info("Initializing extensions synchronously"), this.rs(g)),
					(L.DEBUG = L.DEBUG || this.config.debug),
					L.DEBUG &&
						bL.info("Starting in debug mode", {
							this: this,
							config: b,
							thisC: O({}, this.config),
							p: e,
							s: f,
						}),
					void 0 !== (null == (h = b.bootstrap) ? void 0 : h.distinctID))
				) {
					var h,
						i,
						j,
						k = this.config.get_device_id(dk()),
						l = null != (i = b.bootstrap) && i.isIdentifiedID ? k : b.bootstrap.distinctID
					this.persistence.set_property(
						cn,
						null != (j = b.bootstrap) && j.isIdentifiedID ? "identified" : "anonymous",
					),
						this.register({ distinct_id: b.bootstrap.distinctID, $device_id: l })
				}
				if (this.ss()) {
					var m,
						n,
						o = Object.keys((null == (m = b.bootstrap) ? void 0 : m.featureFlags) || {})
							.filter((a) => {
								var c
								return !(null == (c = b.bootstrap) || null == (c = c.featureFlags) || !c[a])
							})
							.reduce((a, c) => {
								var d
								return (
									(a[c] =
										(null == (d = b.bootstrap) || null == (d = d.featureFlags) ? void 0 : d[c]) ||
										!1),
									a
								)
							}, {}),
						p = Object.keys((null == (n = b.bootstrap) ? void 0 : n.featureFlagPayloads) || {})
							.filter((a) => o[a])
							.reduce((a, c) => {
								var d, e
								return (
									null != (d = b.bootstrap) &&
										null != (d = d.featureFlagPayloads) &&
										d[c] &&
										(a[c] =
											null == (e = b.bootstrap) || null == (e = e.featureFlagPayloads)
												? void 0
												: e[c]),
									a
								)
							}, {})
					this.featureFlags.receivedFeatureFlags({ featureFlags: o, featureFlagPayloads: p })
				}
				if (g) this.register_once({ distinct_id: cv, $device_id: null }, "")
				else if (!this.get_distinct_id()) {
					var q = this.config.get_device_id(dk())
					this.register_once({ distinct_id: q, $device_id: q }, ""),
						this.persistence.set_property(cn, "anonymous")
				}
				return (
					b0(y, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
						passive: !1,
					}),
					this.toolbar.maybeLoadToolbar(),
					b.segment ? dI(this, () => this.ns()) : this.ns(),
					_(this.config._onCapture) &&
						this.config._onCapture !== f0 &&
						(bL.warn("onCapture is deprecated. Please use `before_send` instead"),
						this.on("eventCaptured", (a) => this.config._onCapture(a.event, a))),
					this.config.ip &&
						bL.warn(
							'The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.',
						),
					this
				)
			}
			rs(a) {
				var b = performance.now()
				;(this.historyAutocapture = new dG(this)), this.historyAutocapture.startIfEnabled()
				var c = []
				c.push(() => {
					new dS(this).startIfEnabledOrStop()
				}),
					c.push(() => {
						var a
						;(this.siteApps = new fO(this)), null == (a = this.siteApps) || a.init()
					}),
					a ||
						c.push(() => {
							;(this.sessionRecording = new f$(this)), this.sessionRecording.startIfEnabledOrStop()
						}),
					this.config.disable_scroll_properties ||
						c.push(() => {
							this.scrollManager.startMeasuringScrollPosition()
						}),
					c.push(() => {
						;(this.autocapture = new dd(this)), this.autocapture.startIfEnabled()
					}),
					c.push(() => {
						this.surveys.loadIfEnabled()
					}),
					c.push(() => {
						this.logs.loadIfEnabled()
					}),
					c.push(() => {
						this.conversations.loadIfEnabled()
					}),
					c.push(() => {
						;(this.productTours = new fe(this)), this.productTours.loadIfEnabled()
					}),
					c.push(() => {
						;(this.heatmaps = new eb(this)), this.heatmaps.startIfEnabled()
					}),
					c.push(() => {
						this.webVitalsAutocapture = new d8(this)
					}),
					c.push(() => {
						;(this.exceptionObserver = new dF(this)), this.exceptionObserver.startIfEnabledOrStop()
					}),
					c.push(() => {
						;(this.deadClicksAutocapture = new dD(this, dC)), this.deadClicksAutocapture.startIfEnabled()
					}),
					c.push(() => {
						if (this.os) {
							var a = this.os
							;(this.os = void 0), this.bi(a)
						}
					}),
					this.ls(c, b)
			}
			ls(a, b) {
				for (; a.length > 0; ) {
					if (this.config.__preview_deferred_init_extensions && performance.now() - b >= 30 && a.length > 0)
						return void setTimeout(() => {
							this.ls(a, b)
						}, 0)
					var c = a.shift()
					if (c)
						try {
							c()
						} catch (a) {
							bL.error("Error initializing extension:", a)
						}
				}
				var d = Math.round(performance.now() - b)
				this.register_for_session({
					$sdk_debug_extensions_init_method: this.config.__preview_deferred_init_extensions
						? "deferred"
						: "synchronous",
					$sdk_debug_extensions_init_time_ms: d,
				}),
					this.config.__preview_deferred_init_extensions &&
						bL.info("PostHog extensions initialized (" + d + "ms)")
			}
			bi(a) {
				var b, c, d, e, f, g, h, i, j
				E && E.body
					? (this.config.__preview_deferred_init_extensions && (this.os = a),
						(this.compression = void 0),
						a.supportedCompression &&
							!this.config.disable_compression &&
							(this.compression = T(a.supportedCompression, ed.GZipJS)
								? ed.GZipJS
								: T(a.supportedCompression, ed.Base64)
									? ed.Base64
									: void 0),
						null != (b = a.analytics) &&
							b.endpoint &&
							(this.analyticsDefaultEndpoint = a.analytics.endpoint),
						this.set_config({ person_profiles: this.Vr ? this.Vr : "identified_only" }),
						null == (c = this.siteApps) || c.onRemoteConfig(a),
						null == (d = this.sessionRecording) || d.onRemoteConfig(a),
						null == (e = this.autocapture) || e.onRemoteConfig(a),
						null == (f = this.heatmaps) || f.onRemoteConfig(a),
						this.surveys.onRemoteConfig(a),
						this.logs.onRemoteConfig(a),
						this.conversations.onRemoteConfig(a),
						null == (g = this.productTours) || g.onRemoteConfig(a),
						null == (h = this.webVitalsAutocapture) || h.onRemoteConfig(a),
						null == (i = this.exceptionObserver) || i.onRemoteConfig(a),
						this.exceptions.onRemoteConfig(a),
						null == (j = this.deadClicksAutocapture) || j.onRemoteConfig(a))
					: (bL.info("document not ready yet, trying again in 500 milliseconds..."),
						setTimeout(() => {
							this.bi(a)
						}, 500))
			}
			ns() {
				try {
					this.config.loaded(this)
				} catch (a) {
					bL.critical("`loaded` function failed", a)
				}
				this.us(),
					this.config.capture_pageview &&
						setTimeout(() => {
							;(this.consent.isOptedIn() || "always" === this.config.cookieless_mode) && this.hs()
						}, 1),
					new fC(this).load(),
					this.featureFlags.flags()
			}
			us() {
				var a
				this.is_capturing() && this.config.request_batching && (null == (a = this.Zr) || a.enable())
			}
			_dom_loaded() {
				this.is_capturing() && bQ(this.__request_queue, (a) => this.ts(a)),
					(this.__request_queue = []),
					this.us()
			}
			_handle_unload() {
				var a, b
				this.surveys.handlePageUnload(),
					this.config.request_batching
						? (this.ds() && this.capture("$pageleave"),
							null == (a = this.Zr) || a.unload(),
							null == (b = this.es) || b.unload())
						: this.ds() && this.capture("$pageleave", null, { transport: "sendBeacon" })
			}
			_send_request(a) {
				this.__loaded &&
					(f2
						? this.__request_queue.push(a)
						: this.rateLimiter.isServerRateLimited(a.batchKey) ||
							((a.transport = a.transport || this.config.api_transport),
							(a.url = eP(a.url, { ip: +!!this.config.ip })),
							(a.headers = O({}, this.config.request_headers, a.headers)),
							(a.compression = "best-available" === a.compression ? this.compression : a.compression),
							(a.disableXHRCredentials = this.config.__preview_disable_xhr_credentials),
							this.config.__preview_disable_beacon && (a.disableTransport = ["sendBeacon"]),
							(a.fetchOptions = a.fetchOptions || this.config.fetch_options),
							((a) => {
								var b,
									c,
									d,
									e = O({}, a)
								;(e.timeout = e.timeout || 6e4),
									(e.url = eP(e.url, {
										_: new Date().getTime().toString(),
										ver: L.LIB_VERSION,
										compression: e.compression,
									}))
								var f = null != (b = e.transport) ? b : "fetch",
									g = eS.filter(
										(a) =>
											!e.disableTransport ||
											!a.transport ||
											!e.disableTransport.includes(a.transport),
									),
									h =
										null != (c = null == (d = b_(g, (a) => a.transport === f)) ? void 0 : d.method)
											? c
											: g[0].method
								if (!h) throw Error("No available transport method")
								h(e)
							})(
								O({}, a, {
									callback: (b) => {
										var c, d
										this.rateLimiter.checkForLimiting(b),
											b.statusCode >= 400 &&
												(null == (c = (d = this.config).on_request_error) || c.call(d, b)),
											null == a.callback || a.callback(b)
									},
								}),
							)))
			}
			ts(a) {
				this.es ? this.es.retriableRequest(a) : this._send_request(a)
			}
			_execute_array(a) {
				var b,
					c = [],
					d = [],
					e = []
				bQ(a, (a) => {
					a &&
						($((b = a[0]))
							? e.push(a)
							: _(a)
								? a.call(this)
								: $(a) && "alias" === b
									? c.push(a)
									: $(a) && -1 !== b.indexOf("capture") && _(this[b])
										? e.push(a)
										: d.push(a))
				})
				var f = function (a, b) {
					bQ(
						a,
						function (a) {
							if ($(a[0])) {
								var c = b
								bR(a, function (a) {
									c = c[a[0]].apply(c, a.slice(1))
								})
							} else this[a[0]].apply(this, a.slice(1))
						},
						b,
					)
				}
				f(c, this), f(d, this), f(e, this)
			}
			ss() {
				var a, b
				return (
					((null == (a = this.config.bootstrap) ? void 0 : a.featureFlags) &&
						Object.keys(null == (b = this.config.bootstrap) ? void 0 : b.featureFlags).length > 0) ||
					!1
				)
			}
			push(a) {
				this._execute_array([a])
			}
			capture(a, b, c) {
				var d
				if (this.__loaded && this.persistence && this.sessionPersistence && this.Zr) {
					if (this.is_capturing())
						if (!ac(a) && ad(a)) {
							var e = !this.config.opt_out_useragent_filter && this._is_bot()
							if (!(e && !this.config.__preview_capture_bot_pageviews)) {
								var f =
									null != c && c.skip_client_rate_limiting
										? void 0
										: this.rateLimiter.clientRateLimitContext()
								if (null == f || !f.isRateLimited) {
									null != b &&
										b.$current_url &&
										!ad(null == b ? void 0 : b.$current_url) &&
										(bL.error(
											"Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value.",
										),
										null == b || delete b.$current_url),
										this.sessionPersistence.update_search_keyword(),
										this.config.save_campaign_params &&
											this.sessionPersistence.update_campaign_params(),
										this.config.save_referrer && this.sessionPersistence.update_referrer_info(),
										(this.config.save_campaign_params || this.config.save_referrer) &&
											this.persistence.set_initial_person_info()
									var g = new Date(),
										h = (null == c ? void 0 : c.timestamp) || g,
										i = dk(),
										j = {
											uuid: i,
											event: a,
											properties: this.calculateEventProperties(a, b || {}, h, i),
										}
									"$pageview" === a &&
										this.config.__preview_capture_bot_pageviews &&
										e &&
										((j.event = "$bot_pageview"), (j.properties.$browser_type = "bot")),
										f && (j.properties.$lib_rate_limit_remaining_tokens = f.remainingTokens),
										(null == c ? void 0 : c.$set) && (j.$set = null == c ? void 0 : c.$set)
									var k,
										l = "$groupidentify" !== a,
										m = this.vs(null == c ? void 0 : c.$set_once, l)
									if (
										(m && (j.$set_once = m),
										((j = bY(
											j,
											null != c && c._noTruncate
												? null
												: this.config.properties_string_max_length,
										)).timestamp = h),
										ac(null == c ? void 0 : c.timestamp) ||
											((j.properties.$event_time_override_provided = !0),
											(j.properties.$event_time_override_system_time = g)),
										a === fh.DISMISSED || a === fh.SENT)
									) {
										var n = null == b ? void 0 : b[fi.SURVEY_ID],
											o = null == b ? void 0 : b[fi.SURVEY_ITERATION]
										;(k = { id: n, current_iteration: o }),
											localStorage.getItem(fn(k)) || localStorage.setItem(fn(k), "true"),
											(j.$set = O({}, j.$set, {
												[fm(
													{ id: n, current_iteration: o },
													a === fh.SENT ? "responded" : "dismissed",
												)]: !0,
											}))
									} else
										a === fh.SHOWN &&
											(j.$set = O({}, j.$set, {
												[fi.SURVEY_LAST_SEEN_DATE]: new Date().toISOString(),
											}))
									var p = O({}, j.properties.$set, j.$set)
									if ((ab(p) || this.setPersonPropertiesForFlags(p), !ag(this.config.before_send))) {
										var q = this.cs(j)
										if (!q) return
										j = q
									}
									this.qr.emit("eventCaptured", j)
									var r = {
										method: "POST",
										url:
											null != (d = null == c ? void 0 : c._url)
												? d
												: this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
										data: j,
										compression: "best-available",
										batchKey: null == c ? void 0 : c._batchKey,
									}
									return (
										!this.config.request_batching ||
										(c && (null == c || !c._batchKey)) ||
										(null != c && c.send_instantly)
											? this.ts(r)
											: this.Zr.enqueue(r),
										j
									)
								}
								bL.critical("This capture call is ignored due to client rate limiting.")
							}
						} else bL.error("No event name provided to posthog.capture")
				} else bL.uninitializedWarning("posthog.capture")
			}
			_addCaptureHook(a) {
				return this.on("eventCaptured", (b) => a(b.event, b))
			}
			calculateEventProperties(a, b, c, d, e) {
				if (((c = c || new Date()), !this.persistence || !this.sessionPersistence)) return b
				var f,
					g = e ? void 0 : this.persistence.remove_event_timer(a),
					h = O({}, b)
				if (
					((h.token = this.config.token),
					(h.$config_defaults = this.config.defaults),
					("always" == this.config.cookieless_mode ||
						("on_reject" == this.config.cookieless_mode && this.consent.isExplicitlyOptedOut())) &&
						(h.$cookieless_mode = !0),
					"$snapshot" === a)
				) {
					var i = O({}, this.persistence.properties(), this.sessionPersistence.properties())
					return (
						(h.distinct_id = i.distinct_id),
						((!ad(h.distinct_id) && !ah(h.distinct_id)) || ae(h.distinct_id)) &&
							bL.error(
								"Invalid distinct_id for replay event. This indicates a bug in your implementation",
							),
						h
					)
				}
				var j,
					k = d5(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties)
				if (this.sessionManager) {
					var { sessionId: l, windowId: m } = this.sessionManager.checkAndGetSessionAndWindowId(
						e,
						c.getTime(),
					)
					;(h.$session_id = l), (h.$window_id = m)
				}
				this.sessionPropsManager && bS(h, this.sessionPropsManager.getSessionProps())
				try {
					this.sessionRecording && bS(h, this.sessionRecording.sdkDebugProperties),
						(h.$sdk_debug_retry_queue_size = null == (f = this.es) ? void 0 : f.length)
				} catch (a) {
					h.$sdk_debug_error_capturing_properties = String(a)
				}
				if (
					(this.requestRouter.region === fQ.CUSTOM && (h.$lib_custom_api_host = this.config.api_host),
					(j =
						"$pageview" !== a || e
							? "$pageleave" !== a || e
								? this.pageViewManager.doEvent()
								: this.pageViewManager.doPageLeave(c)
							: this.pageViewManager.doPageView(c, d)),
					(h = bS(h, j)),
					"$pageview" === a && E && (h.title = E.title),
					!ac(g))
				) {
					var n = c.getTime() - g
					h.$duration = parseFloat((n / 1e3).toFixed(3))
				}
				J && this.config.opt_out_useragent_filter && (h.$browser_type = this._is_bot() ? "bot" : "browser"),
					((h = bS(
						{},
						k,
						this.persistence.properties(),
						this.sessionPersistence.properties(),
						h,
					)).$is_identified = this._isIdentified()),
					$(this.config.property_denylist)
						? bR(this.config.property_denylist, function (a) {
								delete h[a]
							})
						: bL.error(
								"Invalid value for property_denylist config: " +
									this.config.property_denylist +
									" or property_blacklist config: " +
									this.config.property_blacklist,
							)
				var o = this.config.sanitize_properties
				o && (bL.error("sanitize_properties is deprecated. Use before_send instead"), (h = o(h, a)))
				var p = this.fs()
				return (h.$process_person_profile = p), p && !e && this.ps("_calculate_event_properties"), h
			}
			vs(a, b) {
				if ((void 0 === b && (b = !0), !this.persistence || !this.fs() || this.Br)) return a
				var c,
					d = bS(
						{},
						this.persistence.get_initial_props(),
						(null == (c = this.sessionPropsManager) ? void 0 : c.getSetOnceProps()) || {},
						a || {},
					),
					e = this.config.sanitize_properties
				return (
					e &&
						(bL.error("sanitize_properties is deprecated. Use before_send instead"),
						(d = e(d, "$set_once"))),
					b && (this.Br = !0),
					ab(d) ? void 0 : d
				)
			}
			register(a, b) {
				var c
				null == (c = this.persistence) || c.register(a, b)
			}
			register_once(a, b, c) {
				var d
				null == (d = this.persistence) || d.register_once(a, b, c)
			}
			register_for_session(a) {
				var b
				null == (b = this.sessionPersistence) || b.register(a)
			}
			unregister(a) {
				var b
				null == (b = this.persistence) || b.unregister(a)
			}
			unregister_for_session(a) {
				var b
				null == (b = this.sessionPersistence) || b.unregister(a)
			}
			gs(a, b) {
				this.register({ [a]: b })
			}
			getFeatureFlag(a, b) {
				return this.featureFlags.getFeatureFlag(a, b)
			}
			getFeatureFlagPayload(a) {
				return this.featureFlags.getFeatureFlagPayload(a)
			}
			getFeatureFlagResult(a, b) {
				return this.featureFlags.getFeatureFlagResult(a, b)
			}
			isFeatureEnabled(a, b) {
				return this.featureFlags.isFeatureEnabled(a, b)
			}
			reloadFeatureFlags() {
				this.featureFlags.reloadFeatureFlags()
			}
			updateFlags(a, b, c) {
				var d = null != c && c.merge ? this.featureFlags.getFlagVariants() : {},
					e = null != c && c.merge ? this.featureFlags.getFlagPayloads() : {},
					f = O({}, d, a),
					g = O({}, e, b),
					h = {}
				for (var [i, j] of Object.entries(f)) {
					var k = "string" == typeof j
					h[i] = {
						key: i,
						enabled: !!k || !!j,
						variant: k ? j : void 0,
						reason: void 0,
						metadata: ac(null == g ? void 0 : g[i])
							? void 0
							: { id: 0, version: void 0, description: void 0, payload: g[i] },
					}
				}
				this.featureFlags.receivedFeatureFlags({ flags: h })
			}
			updateEarlyAccessFeatureEnrollment(a, b, c) {
				this.featureFlags.updateEarlyAccessFeatureEnrollment(a, b, c)
			}
			getEarlyAccessFeatures(a, b, c) {
				return void 0 === b && (b = !1), this.featureFlags.getEarlyAccessFeatures(a, b, c)
			}
			on(a, b) {
				return this.qr.on(a, b)
			}
			onFeatureFlags(a) {
				return this.featureFlags.onFeatureFlags(a)
			}
			onSurveysLoaded(a) {
				return this.surveys.onSurveysLoaded(a)
			}
			onSessionId(a) {
				var b, c
				return null != (b = null == (c = this.sessionManager) ? void 0 : c.onSessionId(a)) ? b : () => {}
			}
			getSurveys(a, b) {
				void 0 === b && (b = !1), this.surveys.getSurveys(a, b)
			}
			getActiveMatchingSurveys(a, b) {
				void 0 === b && (b = !1), this.surveys.getActiveMatchingSurveys(a, b)
			}
			renderSurvey(a, b) {
				this.surveys.renderSurvey(a, b)
			}
			displaySurvey(a, b) {
				void 0 === b && (b = fp), this.surveys.displaySurvey(a, b)
			}
			cancelPendingSurvey(a) {
				this.surveys.cancelPendingSurvey(a)
			}
			canRenderSurvey(a) {
				return this.surveys.canRenderSurvey(a)
			}
			canRenderSurveyAsync(a, b) {
				return void 0 === b && (b = !1), this.surveys.canRenderSurveyAsync(a, b)
			}
			identify(a, b, c) {
				if (!this.__loaded || !this.persistence) return bL.uninitializedWarning("posthog.identify")
				if (
					(ah(a) &&
						((a = a.toString()),
						bL.warn(
							"The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.",
						)),
					a)
				)
					if (["distinct_id", "distinctid"].includes(a.toLowerCase()))
						bL.critical(
							'The string "' +
								a +
								'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.',
						)
					else if (a !== cv) {
						if (this.ps("posthog.identify")) {
							var d = this.get_distinct_id()
							if ((this.register({ $user_id: a }), !this.get_property("$device_id"))) {
								var e = d
								this.register_once({ $had_persisted_distinct_id: !0, $device_id: e }, "")
							}
							a !== d &&
								a !== this.get_property(b2) &&
								(this.unregister(b2), this.register({ distinct_id: a }))
							var f = "anonymous" === (this.persistence.get_property(cn) || "anonymous")
							a !== d && f
								? (this.persistence.set_property(cn, "identified"),
									this.setPersonPropertiesForFlags(O({}, c || {}, b || {}), !1),
									this.capture(
										"$identify",
										{ distinct_id: a, $anon_distinct_id: d },
										{ $set: b || {}, $set_once: c || {} },
									),
									(this.Jr = eU(a, b, c)),
									this.featureFlags.setAnonymousDistinctId(d))
								: (b || c) && this.setPersonProperties(b, c),
								a !== d && (this.reloadFeatureFlags(), this.unregister(cm))
						}
					} else
						bL.critical(
							'The string "' +
								cv +
								'" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.',
						)
				else bL.error("Unique user id has not been set in posthog.identify")
			}
			setPersonProperties(a, b) {
				if ((a || b) && this.ps("posthog.setPersonProperties")) {
					var c = eU(this.get_distinct_id(), a, b)
					this.Jr !== c
						? (this.setPersonPropertiesForFlags(O({}, b || {}, a || {})),
							this.capture("$set", { $set: a || {}, $set_once: b || {} }),
							(this.Jr = c))
						: bL.info(
								"A duplicate setPersonProperties call was made with the same properties. It has been ignored.",
							)
				}
			}
			group(a, b, c) {
				if (a && b) {
					var d = this.getGroups()
					d[a] !== b && this.resetGroupPropertiesForFlags(a),
						this.register({ $groups: O({}, d, { [a]: b }) }),
						c &&
							(this.capture("$groupidentify", { $group_type: a, $group_key: b, $group_set: c }),
							this.setGroupPropertiesForFlags({ [a]: c })),
						d[a] === b || c || this.reloadFeatureFlags()
				} else bL.error("posthog.group requires a group type and group key")
			}
			resetGroups() {
				this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
			}
			setPersonPropertiesForFlags(a, b) {
				void 0 === b && (b = !0), this.featureFlags.setPersonPropertiesForFlags(a, b)
			}
			resetPersonPropertiesForFlags() {
				this.featureFlags.resetPersonPropertiesForFlags()
			}
			setGroupPropertiesForFlags(a, b) {
				void 0 === b && (b = !0),
					this.ps("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(a, b)
			}
			resetGroupPropertiesForFlags(a) {
				this.featureFlags.resetGroupPropertiesForFlags(a)
			}
			reset(a) {
				if ((bL.info("reset"), !this.__loaded)) return bL.uninitializedWarning("posthog.reset")
				var b,
					c,
					d,
					e,
					f = this.get_property("$device_id")
				if (
					(this.consent.reset(),
					null == (b = this.persistence) || b.clear(),
					null == (c = this.sessionPersistence) || c.clear(),
					this.surveys.reset(),
					this.featureFlags.reset(),
					null == (d = this.persistence) || d.set_property(cn, "anonymous"),
					null == (e = this.sessionManager) || e.resetSessionId(),
					(this.Jr = null),
					"always" === this.config.cookieless_mode)
				)
					this.register_once({ distinct_id: cv, $device_id: null }, "")
				else {
					var g = this.config.get_device_id(dk())
					this.register_once({ distinct_id: g, $device_id: a ? g : f }, "")
				}
				this.register({ $last_posthog_reset: new Date().toISOString() }, 1)
			}
			get_distinct_id() {
				return this.get_property("distinct_id")
			}
			getGroups() {
				return this.get_property("$groups") || {}
			}
			get_session_id() {
				var a, b
				return null !=
					(a = null == (b = this.sessionManager) ? void 0 : b.checkAndGetSessionAndWindowId(!0).sessionId)
					? a
					: ""
			}
			get_session_replay_url(a) {
				if (!this.sessionManager) return ""
				var { sessionId: b, sessionStartTimestamp: c } = this.sessionManager.checkAndGetSessionAndWindowId(!0),
					d = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + b)
				if (null != a && a.withTimestamp && c) {
					var e,
						f = null != (e = a.timestampLookBack) ? e : 10
					if (!c) return d
					d += "?t=" + Math.max(Math.floor((new Date().getTime() - c) / 1e3) - f, 0)
				}
				return d
			}
			alias(a, b) {
				return a === this.get_property(b1)
					? (bL.critical("Attempting to create alias for existing People user - aborting."), -2)
					: this.ps("posthog.alias")
						? (ac(b) && (b = this.get_distinct_id()),
							a !== b
								? (this.gs(b2, a), this.capture("$create_alias", { alias: a, distinct_id: b }))
								: (bL.warn("alias matches current distinct_id - skipping api call."),
									this.identify(a),
									-1))
						: void 0
			}
			set_config(a) {
				var b = O({}, this.config)
				if (aa(a)) {
					bS(this.config, f4(a))
					var c,
						d,
						e,
						f,
						g,
						h,
						i,
						j = this.Qr()
					null == (c = this.persistence) || c.update_config(this.config, b, j),
						(this.sessionPersistence =
							"sessionStorage" === this.config.persistence || "memory" === this.config.persistence
								? this.persistence
								: new fb(O({}, this.config, { persistence: "sessionStorage" }), j))
					var k = this.Kr(this.config.debug)
					aj(k) && (this.config.debug = k),
						aj(this.config.debug) &&
							(this.config.debug
								? ((L.DEBUG = !0),
									ds.H() && ds.G("ph_debug", "true"),
									bL.info("set_config", { config: a, oldConfig: b, newConfig: O({}, this.config) }))
								: ((L.DEBUG = !1), ds.H() && ds.V("ph_debug"))),
						null == (d = this.exceptionObserver) || d.onConfigChange(),
						null == (e = this.sessionRecording) || e.startIfEnabledOrStop(),
						null == (f = this.autocapture) || f.startIfEnabled(),
						null == (g = this.heatmaps) || g.startIfEnabled(),
						null == (h = this.exceptionObserver) || h.startIfEnabledOrStop(),
						this.surveys.loadIfEnabled(),
						this._s(),
						null == (i = this.externalIntegrations) || i.startIfEnabledOrStop()
				}
			}
			startSessionRecording(a) {
				var b,
					c,
					d,
					e,
					f,
					g = !0 === a,
					h = {
						sampling: g || !(null == a || !a.sampling),
						linked_flag: g || !(null == a || !a.linked_flag),
						url_trigger: g || !(null == a || !a.url_trigger),
						event_trigger: g || !(null == a || !a.event_trigger),
					}
				Object.values(h).some(Boolean) &&
					(null == (b = this.sessionManager) || b.checkAndGetSessionAndWindowId(),
					h.sampling && (null == (c = this.sessionRecording) || c.overrideSampling()),
					h.linked_flag && (null == (d = this.sessionRecording) || d.overrideLinkedFlag()),
					h.url_trigger && (null == (e = this.sessionRecording) || e.overrideTrigger("url")),
					h.event_trigger && (null == (f = this.sessionRecording) || f.overrideTrigger("event"))),
					this.set_config({ disable_session_recording: !1 })
			}
			stopSessionRecording() {
				this.set_config({ disable_session_recording: !0 })
			}
			sessionRecordingStarted() {
				var a
				return !(null == (a = this.sessionRecording) || !a.started)
			}
			captureException(a, b) {
				var c = Error("PostHog syntheticException"),
					d = this.exceptions.buildProperties(a, { handled: !0, syntheticException: c })
				return this.exceptions.sendExceptionEvent(O({}, d, b))
			}
			startExceptionAutocapture(a) {
				this.set_config({ capture_exceptions: null == a || a })
			}
			stopExceptionAutocapture() {
				this.set_config({ capture_exceptions: !1 })
			}
			loadToolbar(a) {
				return this.toolbar.loadToolbar(a)
			}
			get_property(a) {
				var b
				return null == (b = this.persistence) ? void 0 : b.props[a]
			}
			getSessionProperty(a) {
				var b
				return null == (b = this.sessionPersistence) ? void 0 : b.props[a]
			}
			toString() {
				var a,
					b = null != (a = this.config.name) ? a : f1
				return b !== f1 && (b = f1 + "." + b), b
			}
			_isIdentified() {
				var a, b
				return (
					"identified" === (null == (a = this.persistence) ? void 0 : a.get_property(cn)) ||
					"identified" === (null == (b = this.sessionPersistence) ? void 0 : b.get_property(cn))
				)
			}
			fs() {
				var a, b
				return !(
					"never" === this.config.person_profiles ||
					("identified_only" === this.config.person_profiles &&
						!this._isIdentified() &&
						ab(this.getGroups()) &&
						(null == (a = this.persistence) || null == (a = a.props) || !a[b2]) &&
						(null == (b = this.persistence) || null == (b = b.props) || !b[ct]))
				)
			}
			ds() {
				return (
					!0 === this.config.capture_pageleave ||
					("if_capture_pageview" === this.config.capture_pageleave &&
						(!0 === this.config.capture_pageview || "history_change" === this.config.capture_pageview))
				)
			}
			createPersonProfile() {
				this.fs() || (this.ps("posthog.createPersonProfile") && this.setPersonProperties({}, {}))
			}
			ps(a) {
				return "never" === this.config.person_profiles
					? (bL.error(a + ' was called, but process_person is set to "never". This call will be ignored.'),
						!1)
					: (this.gs(ct, !0), !0)
			}
			Qr() {
				if ("always" === this.config.cookieless_mode) return !0
				var a = this.consent.isOptedOut(),
					b = this.config.opt_out_persistence_by_default || "on_reject" === this.config.cookieless_mode
				return this.config.disable_persistence || (a && !!b)
			}
			_s() {
				var a,
					b,
					c,
					d,
					e = this.Qr()
				return (
					(null == (a = this.persistence) ? void 0 : a.ki) !== e &&
						(null == (c = this.persistence) || c.set_disabled(e)),
					(null == (b = this.sessionPersistence) ? void 0 : b.ki) !== e &&
						(null == (d = this.sessionPersistence) || d.set_disabled(e)),
					e
				)
			}
			opt_in_capturing(a) {
				var b, c, d, e
				"always" !== this.config.cookieless_mode
					? ("on_reject" === this.config.cookieless_mode &&
							this.consent.isExplicitlyOptedOut() &&
							(this.reset(!0),
							null == (c = this.sessionManager) || c.destroy(),
							null == (d = this.pageViewManager) || d.destroy(),
							(this.sessionManager = new fL(this)),
							(this.pageViewManager = new ec(this)),
							this.persistence &&
								(this.sessionPropsManager = new fJ(this, this.sessionManager, this.persistence)),
							(this.sessionRecording = new f$(this)),
							this.sessionRecording.startIfEnabledOrStop()),
						this.consent.optInOut(!0),
						this._s(),
						this.us(),
						null == (b = this.sessionRecording) || b.startIfEnabledOrStop(),
						"on_reject" == this.config.cookieless_mode && this.surveys.loadIfEnabled(),
						(ac(null == a ? void 0 : a.captureEventName) || (null != a && a.captureEventName)) &&
							this.capture(
								null != (e = null == a ? void 0 : a.captureEventName) ? e : "$opt_in",
								null == a ? void 0 : a.captureProperties,
								{ send_instantly: !0 },
							),
						this.config.capture_pageview && this.hs())
					: bL.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')
			}
			opt_out_capturing() {
				var a, b, c
				"always" !== this.config.cookieless_mode
					? ("on_reject" === this.config.cookieless_mode && this.consent.isOptedIn() && this.reset(!0),
						this.consent.optInOut(!1),
						this._s(),
						"on_reject" === this.config.cookieless_mode &&
							(this.register({ distinct_id: cv, $device_id: null }),
							null == (a = this.sessionManager) || a.destroy(),
							null == (b = this.pageViewManager) || b.destroy(),
							(this.sessionManager = void 0),
							(this.sessionPropsManager = void 0),
							null == (c = this.sessionRecording) || c.stopRecording(),
							(this.sessionRecording = void 0),
							this.hs()))
					: bL.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')
			}
			has_opted_in_capturing() {
				return this.consent.isOptedIn()
			}
			has_opted_out_capturing() {
				return this.consent.isOptedOut()
			}
			get_explicit_consent_status() {
				var a = this.consent.consent
				return a === dy.GRANTED ? "granted" : a === dy.DENIED ? "denied" : "pending"
			}
			is_capturing() {
				return (
					"always" === this.config.cookieless_mode ||
					("on_reject" === this.config.cookieless_mode
						? this.consent.isExplicitlyOptedOut() || this.consent.isOptedIn()
						: !this.has_opted_out_capturing())
				)
			}
			clear_opt_in_out_capturing() {
				this.consent.reset(), this._s()
			}
			_is_bot() {
				return D ? fP(D, this.config.custom_blocked_useragents) : void 0
			}
			hs() {
				E &&
					("visible" === E.visibilityState
						? this.Wr ||
							((this.Wr = !0),
							this.capture("$pageview", { title: E.title }, { send_instantly: !0 }),
							this.Gr && (E.removeEventListener("visibilitychange", this.Gr), (this.Gr = null)))
						: this.Gr || ((this.Gr = this.hs.bind(this)), b0(E, "visibilitychange", this.Gr)))
			}
			debug(a) {
				!1 === a
					? (null == y || y.console.log("You've disabled debug mode."), this.set_config({ debug: !1 }))
					: (null == y ||
							y.console.log(
								"You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`.",
							),
						this.set_config({ debug: !0 }))
			}
			O() {
				var a,
					b,
					c,
					d,
					e,
					f,
					g,
					h = this.Yr || {}
				return "advanced_disable_flags" in h
					? !!h.advanced_disable_flags
					: !1 !== this.config.advanced_disable_flags
						? !!this.config.advanced_disable_flags
						: !0 === this.config.advanced_disable_decide
							? (bL.warn(
									"Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version.",
								),
								!0)
							: ((c = "advanced_disable_decide"),
								(d = !1),
								(e = bL),
								(f = (b = "advanced_disable_flags") in (a = h) && !ag(a[b])),
								(g = c in a && !ag(a[c])),
								f
									? a[b]
									: g
										? (e &&
												e.warn(
													"Config field '" +
														c +
														"' is deprecated. Please use '" +
														b +
														"' instead. The old field will be removed in a future major version.",
												),
											a[c])
										: d)
			}
			cs(a) {
				if (ag(this.config.before_send)) return a
				var b = $(this.config.before_send) ? this.config.before_send : [this.config.before_send],
					c = a
				for (var d of b) {
					if (ag((c = d(c)))) {
						var e = "Event '" + a.event + "' was rejected in beforeSend function"
						return al(a.event) ? bL.warn(e + ". This can cause unexpected behavior.") : bL.info(e), null
					}
					;(c.properties && !ab(c.properties)) ||
						bL.warn(
							"Event '" +
								a.event +
								"' has no properties after beforeSend function, this is likely an error.",
						)
				}
				return c
			}
			getPageViewId() {
				var a
				return null == (a = this.pageViewManager.Kt) ? void 0 : a.pageViewId
			}
			captureTraceFeedback(a, b) {
				this.capture("$ai_feedback", { $ai_trace_id: String(a), $ai_feedback_text: b })
			}
			captureTraceMetric(a, b, c) {
				this.capture("$ai_metric", { $ai_trace_id: String(a), $ai_metric_name: b, $ai_metric_value: String(c) })
			}
			Kr(a) {
				var b = aj(a) && !a,
					c = ds.H() && "true" === ds.q("ph_debug")
				return !b && (!!c || a)
			}
		}
		!(function (a, b) {
			for (var c = 0; c < b.length; c++) a.prototype[b[c]] = bW(a.prototype[b[c]])
		})(f6, ["identify"]),
			(b = f_[f1] = new f6()),
			(function () {
				function a() {
					a.done ||
						((a.done = !0),
						(f2 = !1),
						bR(f_, function (a) {
							a._dom_loaded()
						}))
				}
				null != E && E.addEventListener
					? "complete" === E.readyState
						? a()
						: b0(E, "DOMContentLoaded", a, { capture: !1 })
					: y &&
						bL.error(
							"Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized",
						)
			})(),
			a.s([], 2213)
	},
	3484,
	(a) => {
		"use strict"
		a.s(["BlogIndexAnalytics", () => c, "BlogPostAnalytics", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call BlogIndexAnalytics() from the server but BlogIndexAnalytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogAnalytics.tsx <module evaluation>",
				"BlogIndexAnalytics",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call BlogPostAnalytics() from the server but BlogPostAnalytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogAnalytics.tsx <module evaluation>",
				"BlogPostAnalytics",
			)
	},
	37179,
	(a) => {
		"use strict"
		a.s(["BlogIndexAnalytics", () => c, "BlogPostAnalytics", () => d])
		var b = a.i(57689)
		let c = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call BlogIndexAnalytics() from the server but BlogIndexAnalytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogAnalytics.tsx",
				"BlogIndexAnalytics",
			),
			d = (0, b.registerClientReference)(
				function () {
					throw Error(
						"Attempted to call BlogPostAnalytics() from the server but BlogPostAnalytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
					)
				},
				"[project]/apps/web-roo-code/src/components/blog/BlogAnalytics.tsx",
				"BlogPostAnalytics",
			)
	},
	8196,
	(a) => {
		"use strict"
		a.i(3484)
		var b = a.i(37179)
		a.n(b)
	},
	95522,
	87576,
	(a) => {
		"use strict"
		var b = a.i(1152)
		let c = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
			d = (0, b.default)("chevron-left", c)
		a.s(["ChevronLeft", () => d], 95522)
		let e = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
			f = (0, b.default)("chevron-right", e)
		a.s(["ChevronRight", () => f], 87576)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__74c245ad._.js.map
