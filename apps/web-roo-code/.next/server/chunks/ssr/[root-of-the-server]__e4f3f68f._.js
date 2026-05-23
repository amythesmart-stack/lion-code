module.exports = [
	87,
	(a, b, c) => {
		"use strict"
		Object.defineProperty(c, "__esModule", { value: !0 }),
			Object.defineProperty(c, "registerServerReference", {
				enumerable: !0,
				get: function () {
					return d.registerServerReference
				},
			})
		let d = a.r(57689)
	},
	46786,
	(a, b, c) => {
		b.exports = a.x("os", () => require("os"))
	},
	4446,
	(a, b, c) => {
		b.exports = a.x("net", () => require("net"))
	},
	55004,
	(a, b, c) => {
		b.exports = a.x("tls", () => require("tls"))
	},
	54799,
	(a, b, c) => {
		b.exports = a.x("crypto", () => require("crypto"))
	},
	88947,
	(a, b, c) => {
		b.exports = a.x("stream", () => require("stream"))
	},
	60438,
	(a, b, c) => {
		b.exports = a.x("perf_hooks", () => require("perf_hooks"))
	},
	24868,
	(a, b, c) => {
		b.exports = a.x("fs/promises", () => require("fs/promises"))
	},
	92509,
	(a, b, c) => {
		b.exports = a.x("url", () => require("url"))
	},
	71518,
	(a, b, c) => {
		"use strict"
		function d(a) {
			for (let b = 0; b < a.length; b++) {
				let c = a[b]
				if ("function" != typeof c)
					throw Object.defineProperty(
						Error(`A "use server" file can only export async functions, found ${typeof c}.
Read more: https://nextjs.org/docs/messages/invalid-use-server-value`),
						"__NEXT_ERROR_CODE",
						{ value: "E352", enumerable: !1, configurable: !0 },
					)
			}
		}
		Object.defineProperty(c, "__esModule", { value: !0 }),
			Object.defineProperty(c, "ensureServerEntryExports", {
				enumerable: !0,
				get: function () {
					return d
				},
			})
	},
	64735,
	(a) => {
		"use strict"
		let b, c
		var d,
			e,
			f,
			g,
			h,
			i,
			j,
			k,
			l,
			m,
			n,
			o,
			p,
			q = a.i(87),
			r = a.i(26418)
		let s = Object.freeze({ status: "aborted" })
		function t(a, b, c) {
			function d(c, d) {
				var e
				for (let f in (Object.defineProperty(c, "_zod", { value: c._zod ?? {}, enumerable: !1 }),
				(e = c._zod).traits ?? (e.traits = new Set()),
				c._zod.traits.add(a),
				b(c, d),
				g.prototype))
					f in c || Object.defineProperty(c, f, { value: g.prototype[f].bind(c) })
				;(c._zod.constr = g), (c._zod.def = d)
			}
			let e = c?.Parent ?? Object
			class f extends e {}
			function g(a) {
				var b
				let e = c?.Parent ? new f() : this
				for (let c of (d(e, a), (b = e._zod).deferred ?? (b.deferred = []), e._zod.deferred)) c()
				return e
			}
			return (
				Object.defineProperty(f, "name", { value: a }),
				Object.defineProperty(g, "init", { value: d }),
				Object.defineProperty(g, Symbol.hasInstance, {
					value: (b) => (!!c?.Parent && b instanceof c.Parent) || b?._zod?.traits?.has(a),
				}),
				Object.defineProperty(g, "name", { value: a }),
				g
			)
		}
		let u = Symbol("zod_brand")
		class v extends Error {
			constructor() {
				super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
			}
		}
		let w = {}
		function x(a) {
			return a && Object.assign(w, a), w
		}
		function y(a) {
			return a
		}
		function z(a) {
			return a
		}
		function A(a) {}
		function B(a) {
			throw Error()
		}
		function C(a) {}
		function D(a) {
			let b = Object.values(a).filter((a) => "number" == typeof a)
			return Object.entries(a)
				.filter(([a, c]) => -1 === b.indexOf(+a))
				.map(([a, b]) => b)
		}
		function E(a, b = "|") {
			return a.map((a) => _(a)).join(b)
		}
		function F(a, b) {
			return "bigint" == typeof b ? b.toString() : b
		}
		function G(a) {
			return {
				get value() {
					{
						let b = a()
						return Object.defineProperty(this, "value", { value: b }), b
					}
				},
			}
		}
		function H(a) {
			return null == a
		}
		function I(a) {
			let b = +!!a.startsWith("^"),
				c = a.endsWith("$") ? a.length - 1 : a.length
			return a.slice(b, c)
		}
		function J(a, b) {
			let c = (a.toString().split(".")[1] || "").length,
				d = (b.toString().split(".")[1] || "").length,
				e = c > d ? c : d
			return (
				(Number.parseInt(a.toFixed(e).replace(".", "")) % Number.parseInt(b.toFixed(e).replace(".", ""))) /
				10 ** e
			)
		}
		function K(a, b, c) {
			Object.defineProperty(a, b, {
				get() {
					{
						let d = c()
						return (a[b] = d), d
					}
				},
				set(c) {
					Object.defineProperty(a, b, { value: c })
				},
				configurable: !0,
			})
		}
		function L(a, b, c) {
			Object.defineProperty(a, b, { value: c, writable: !0, enumerable: !0, configurable: !0 })
		}
		function M(a, b) {
			return b ? b.reduce((a, b) => a?.[b], a) : a
		}
		function N(a) {
			let b = Object.keys(a)
			return Promise.all(b.map((b) => a[b])).then((a) => {
				let c = {}
				for (let d = 0; d < b.length; d++) c[b[d]] = a[d]
				return c
			})
		}
		function O(a = 10) {
			let b = "abcdefghijklmnopqrstuvwxyz",
				c = ""
			for (let d = 0; d < a; d++) c += b[Math.floor(Math.random() * b.length)]
			return c
		}
		function P(a) {
			return JSON.stringify(a)
		}
		a.s(
			[
				"$ZodAsyncError",
				() => v,
				"$brand",
				0,
				u,
				"$constructor",
				() => t,
				"NEVER",
				0,
				s,
				"config",
				() => x,
				"globalConfig",
				0,
				w,
			],
			13936,
		)
		let Q = Error.captureStackTrace ? Error.captureStackTrace : (...a) => {}
		function R(a) {
			return "object" == typeof a && null !== a && !Array.isArray(a)
		}
		let S = G(() => {
			if ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1
			try {
				return Function(""), !0
			} catch (a) {
				return !1
			}
		})
		function T(a) {
			if (!1 === R(a)) return !1
			let b = a.constructor
			if (void 0 === b) return !0
			let c = b.prototype
			return !1 !== R(c) && !1 !== Object.prototype.hasOwnProperty.call(c, "isPrototypeOf")
		}
		function U(a) {
			let b = 0
			for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b++
			return b
		}
		let V = new Set(["string", "number", "symbol"]),
			W = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"])
		function X(a) {
			return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
		}
		function Y(a, b, c) {
			let d = new a._zod.constr(b ?? a._zod.def)
			return (!b || c?.parent) && (d._zod.parent = a), d
		}
		function Z(a) {
			if (!a) return {}
			if ("string" == typeof a) return { error: () => a }
			if (a?.message !== void 0) {
				if (a?.error !== void 0) throw Error("Cannot specify both `message` and `error` params")
				a.error = a.message
			}
			return (delete a.message, "string" == typeof a.error) ? { ...a, error: () => a.error } : a
		}
		function $(a) {
			let b
			return new Proxy(
				{},
				{
					get: (c, d, e) => (b ?? (b = a()), Reflect.get(b, d, e)),
					set: (c, d, e, f) => (b ?? (b = a()), Reflect.set(b, d, e, f)),
					has: (c, d) => (b ?? (b = a()), Reflect.has(b, d)),
					deleteProperty: (c, d) => (b ?? (b = a()), Reflect.deleteProperty(b, d)),
					ownKeys: (c) => (b ?? (b = a()), Reflect.ownKeys(b)),
					getOwnPropertyDescriptor: (c, d) => (b ?? (b = a()), Reflect.getOwnPropertyDescriptor(b, d)),
					defineProperty: (c, d, e) => (b ?? (b = a()), Reflect.defineProperty(b, d, e)),
				},
			)
		}
		function _(a) {
			return "bigint" == typeof a ? a.toString() + "n" : "string" == typeof a ? `"${a}"` : `${a}`
		}
		function aa(a) {
			return Object.keys(a).filter((b) => "optional" === a[b]._zod.optin && "optional" === a[b]._zod.optout)
		}
		let ab = {
				safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
				int32: [-0x80000000, 0x7fffffff],
				uint32: [0, 0xffffffff],
				float32: [-34028234663852886e22, 34028234663852886e22],
				float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
			},
			ac = {
				int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
				uint64: [BigInt(0), BigInt("18446744073709551615")],
			}
		function ad(a, b) {
			let c = {},
				d = a._zod.def
			for (let a in b) {
				if (!(a in d.shape)) throw Error(`Unrecognized key: "${a}"`)
				b[a] && (c[a] = d.shape[a])
			}
			return Y(a, { ...a._zod.def, shape: c, checks: [] })
		}
		function ae(a, b) {
			let c = { ...a._zod.def.shape },
				d = a._zod.def
			for (let a in b) {
				if (!(a in d.shape)) throw Error(`Unrecognized key: "${a}"`)
				b[a] && delete c[a]
			}
			return Y(a, { ...a._zod.def, shape: c, checks: [] })
		}
		function af(a, b) {
			if (!T(b)) throw Error("Invalid input to extend: expected a plain object")
			let c = {
				...a._zod.def,
				get shape() {
					let c = { ...a._zod.def.shape, ...b }
					return L(this, "shape", c), c
				},
				checks: [],
			}
			return Y(a, c)
		}
		function ag(a, b) {
			return Y(a, {
				...a._zod.def,
				get shape() {
					let c = { ...a._zod.def.shape, ...b._zod.def.shape }
					return L(this, "shape", c), c
				},
				catchall: b._zod.def.catchall,
				checks: [],
			})
		}
		function ah(a, b, c) {
			let d = b._zod.def.shape,
				e = { ...d }
			if (c)
				for (let b in c) {
					if (!(b in d)) throw Error(`Unrecognized key: "${b}"`)
					c[b] && (e[b] = a ? new a({ type: "optional", innerType: d[b] }) : d[b])
				}
			else for (let b in d) e[b] = a ? new a({ type: "optional", innerType: d[b] }) : d[b]
			return Y(b, { ...b._zod.def, shape: e, checks: [] })
		}
		function ai(a, b, c) {
			let d = b._zod.def.shape,
				e = { ...d }
			if (c)
				for (let b in c) {
					if (!(b in e)) throw Error(`Unrecognized key: "${b}"`)
					c[b] && (e[b] = new a({ type: "nonoptional", innerType: d[b] }))
				}
			else for (let b in d) e[b] = new a({ type: "nonoptional", innerType: d[b] })
			return Y(b, { ...b._zod.def, shape: e, checks: [] })
		}
		function aj(a, b = 0) {
			for (let c = b; c < a.issues.length; c++) if (a.issues[c]?.continue !== !0) return !0
			return !1
		}
		function ak(a, b) {
			return b.map((b) => (b.path ?? (b.path = []), b.path.unshift(a), b))
		}
		function al(a) {
			return "string" == typeof a ? a : a?.message
		}
		function am(a, b, c) {
			let d = { ...a, path: a.path ?? [] }
			return (
				a.message ||
					(d.message =
						al(a.inst?._zod.def?.error?.(a)) ??
						al(b?.error?.(a)) ??
						al(c.customError?.(a)) ??
						al(c.localeError?.(a)) ??
						"Invalid input"),
				delete d.inst,
				delete d.continue,
				b?.reportInput || delete d.input,
				d
			)
		}
		function an(a) {
			return a instanceof Set ? "set" : a instanceof Map ? "map" : a instanceof File ? "file" : "unknown"
		}
		function ao(a) {
			return Array.isArray(a) ? "array" : "string" == typeof a ? "string" : "unknown"
		}
		function ap(...a) {
			let [b, c, d] = a
			return "string" == typeof b ? { message: b, code: "custom", input: c, inst: d } : { ...b }
		}
		function aq(a) {
			return Object.entries(a)
				.filter(([a, b]) => Number.isNaN(Number.parseInt(a, 10)))
				.map((a) => a[1])
		}
		class ar {
			constructor(...a) {}
		}
		function as() {
			let a, b
			return {
				localeError:
					((a = {
						string: { unit: "characters", verb: "to have" },
						file: { unit: "bytes", verb: "to have" },
						array: { unit: "items", verb: "to have" },
						set: { unit: "items", verb: "to have" },
					}),
					(b = {
						regex: "input",
						email: "email address",
						url: "URL",
						emoji: "emoji",
						uuid: "UUID",
						uuidv4: "UUIDv4",
						uuidv6: "UUIDv6",
						nanoid: "nanoid",
						guid: "GUID",
						cuid: "cuid",
						cuid2: "cuid2",
						ulid: "ULID",
						xid: "XID",
						ksuid: "KSUID",
						datetime: "ISO datetime",
						date: "ISO date",
						time: "ISO time",
						duration: "ISO duration",
						ipv4: "IPv4 address",
						ipv6: "IPv6 address",
						cidrv4: "IPv4 range",
						cidrv6: "IPv6 range",
						base64: "base64-encoded string",
						base64url: "base64url-encoded string",
						json_string: "JSON string",
						e164: "E.164 number",
						jwt: "JWT",
						template_literal: "input",
					}),
					(c) => {
						switch (c.code) {
							case "invalid_type":
								return `Invalid input: expected ${c.expected}, received ${((a) => {
									let b = typeof a
									switch (b) {
										case "number":
											return Number.isNaN(a) ? "NaN" : "number"
										case "object":
											if (Array.isArray(a)) return "array"
											if (null === a) return "null"
											if (Object.getPrototypeOf(a) !== Object.prototype && a.constructor)
												return a.constructor.name
									}
									return b
								})(c.input)}`
							case "invalid_value":
								if (1 === c.values.length) return `Invalid input: expected ${_(c.values[0])}`
								return `Invalid option: expected one of ${E(c.values, "|")}`
							case "too_big": {
								let b = c.inclusive ? "<=" : "<",
									d = a[c.origin] ?? null
								if (d)
									return `Too big: expected ${c.origin ?? "value"} to have ${b}${c.maximum.toString()} ${d.unit ?? "elements"}`
								return `Too big: expected ${c.origin ?? "value"} to be ${b}${c.maximum.toString()}`
							}
							case "too_small": {
								let b = c.inclusive ? ">=" : ">",
									d = a[c.origin] ?? null
								if (d)
									return `Too small: expected ${c.origin} to have ${b}${c.minimum.toString()} ${d.unit}`
								return `Too small: expected ${c.origin} to be ${b}${c.minimum.toString()}`
							}
							case "invalid_format":
								if ("starts_with" === c.format) return `Invalid string: must start with "${c.prefix}"`
								if ("ends_with" === c.format) return `Invalid string: must end with "${c.suffix}"`
								if ("includes" === c.format) return `Invalid string: must include "${c.includes}"`
								if ("regex" === c.format) return `Invalid string: must match pattern ${c.pattern}`
								return `Invalid ${b[c.format] ?? c.format}`
							case "not_multiple_of":
								return `Invalid number: must be a multiple of ${c.divisor}`
							case "unrecognized_keys":
								return `Unrecognized key${c.keys.length > 1 ? "s" : ""}: ${E(c.keys, ", ")}`
							case "invalid_key":
								return `Invalid key in ${c.origin}`
							case "invalid_union":
							default:
								return "Invalid input"
							case "invalid_element":
								return `Invalid value in ${c.origin}`
						}
					}),
			}
		}
		a.s(
			[
				"BIGINT_FORMAT_RANGES",
				0,
				ac,
				"Class",
				() => ar,
				"NUMBER_FORMAT_RANGES",
				0,
				ab,
				"aborted",
				() => aj,
				"allowsEval",
				0,
				S,
				"assert",
				() => C,
				"assertEqual",
				() => y,
				"assertIs",
				() => A,
				"assertNever",
				() => B,
				"assertNotEqual",
				() => z,
				"assignProp",
				() => L,
				"cached",
				() => G,
				"captureStackTrace",
				0,
				Q,
				"cleanEnum",
				() => aq,
				"cleanRegex",
				() => I,
				"clone",
				() => Y,
				"createTransparentProxy",
				() => $,
				"defineLazy",
				() => K,
				"esc",
				() => P,
				"escapeRegex",
				() => X,
				"extend",
				() => af,
				"finalizeIssue",
				() => am,
				"floatSafeRemainder",
				() => J,
				"getElementAtPath",
				() => M,
				"getEnumValues",
				() => D,
				"getLengthableOrigin",
				() => ao,
				"getParsedType",
				0,
				(a) => {
					let b = typeof a
					switch (b) {
						case "undefined":
							return "undefined"
						case "string":
							return "string"
						case "number":
							return Number.isNaN(a) ? "nan" : "number"
						case "boolean":
							return "boolean"
						case "function":
							return "function"
						case "bigint":
							return "bigint"
						case "symbol":
							return "symbol"
						case "object":
							if (Array.isArray(a)) return "array"
							if (null === a) return "null"
							if (a.then && "function" == typeof a.then && a.catch && "function" == typeof a.catch)
								return "promise"
							if ("u" > typeof Map && a instanceof Map) return "map"
							if ("u" > typeof Set && a instanceof Set) return "set"
							if ("u" > typeof Date && a instanceof Date) return "date"
							if ("u" > typeof File && a instanceof File) return "file"
							return "object"
						default:
							throw Error(`Unknown data type: ${b}`)
					}
				},
				"getSizableOrigin",
				() => an,
				"isObject",
				() => R,
				"isPlainObject",
				() => T,
				"issue",
				() => ap,
				"joinValues",
				() => E,
				"jsonStringifyReplacer",
				() => F,
				"merge",
				() => ag,
				"normalizeParams",
				() => Z,
				"nullish",
				() => H,
				"numKeys",
				() => U,
				"omit",
				() => ae,
				"optionalKeys",
				() => aa,
				"partial",
				() => ah,
				"pick",
				() => ad,
				"prefixIssues",
				() => ak,
				"primitiveTypes",
				0,
				W,
				"promiseAllObject",
				() => N,
				"propertyKeyTypes",
				0,
				V,
				"randomString",
				() => O,
				"required",
				() => ai,
				"stringifyPrimitive",
				() => _,
				"unwrapMessage",
				() => al,
			],
			50042,
		),
			x(as()),
			a.s([], 38084),
			a.i(38084),
			a.s([], 41790),
			a.i(41790),
			a.i(13936)
		let at = (a, b) => {
				;(a.name = "$ZodError"),
					Object.defineProperty(a, "_zod", { value: a._zod, enumerable: !1 }),
					Object.defineProperty(a, "issues", { value: b, enumerable: !1 }),
					Object.defineProperty(a, "message", { get: () => JSON.stringify(b, F, 2), enumerable: !0 }),
					Object.defineProperty(a, "toString", { value: () => a.message, enumerable: !1 })
			},
			au = t("$ZodError", at),
			av = t("$ZodError", at, { Parent: Error })
		function aw(a, b = (a) => a.message) {
			let c = {},
				d = []
			for (let e of a.issues)
				e.path.length > 0 ? ((c[e.path[0]] = c[e.path[0]] || []), c[e.path[0]].push(b(e))) : d.push(b(e))
			return { formErrors: d, fieldErrors: c }
		}
		function ax(a, b) {
			let c =
					b ||
					function (a) {
						return a.message
					},
				d = { _errors: [] },
				e = (a) => {
					for (let b of a.issues)
						if ("invalid_union" === b.code && b.errors.length) b.errors.map((a) => e({ issues: a }))
						else if ("invalid_key" === b.code) e({ issues: b.issues })
						else if ("invalid_element" === b.code) e({ issues: b.issues })
						else if (0 === b.path.length) d._errors.push(c(b))
						else {
							let a = d,
								e = 0
							for (; e < b.path.length; ) {
								let d = b.path[e]
								e === b.path.length - 1
									? ((a[d] = a[d] || { _errors: [] }), a[d]._errors.push(c(b)))
									: (a[d] = a[d] || { _errors: [] }),
									(a = a[d]),
									e++
							}
						}
				}
			return e(a), d
		}
		function ay(a, b) {
			let c =
					b ||
					function (a) {
						return a.message
					},
				d = { errors: [] },
				e = (a, b = []) => {
					var f, g
					for (let h of a.issues)
						if ("invalid_union" === h.code && h.errors.length) h.errors.map((a) => e({ issues: a }, h.path))
						else if ("invalid_key" === h.code) e({ issues: h.issues }, h.path)
						else if ("invalid_element" === h.code) e({ issues: h.issues }, h.path)
						else {
							let a = [...b, ...h.path]
							if (0 === a.length) {
								d.errors.push(c(h))
								continue
							}
							let e = d,
								i = 0
							for (; i < a.length; ) {
								let b = a[i],
									d = i === a.length - 1
								"string" == typeof b
									? (e.properties ?? (e.properties = {}),
										(f = e.properties)[b] ?? (f[b] = { errors: [] }),
										(e = e.properties[b]))
									: (e.items ?? (e.items = []),
										(g = e.items)[b] ?? (g[b] = { errors: [] }),
										(e = e.items[b])),
									d && e.errors.push(c(h)),
									i++
							}
						}
				}
			return e(a), d
		}
		function az(a) {
			let b = []
			for (let c of a)
				"number" == typeof c
					? b.push(`[${c}]`)
					: "symbol" == typeof c
						? b.push(`[${JSON.stringify(String(c))}]`)
						: /[^\w$]/.test(c)
							? b.push(`[${JSON.stringify(c)}]`)
							: (b.length && b.push("."), b.push(c))
			return b.join("")
		}
		function aA(a) {
			let b = []
			for (let c of [...a.issues].sort((a, b) => a.path.length - b.path.length))
				b.push(`✖ ${c.message}`), c.path?.length && b.push(`  → at ${az(c.path)}`)
			return b.join("\n")
		}
		a.s(
			[
				"$ZodError",
				0,
				au,
				"$ZodRealError",
				0,
				av,
				"flattenError",
				() => aw,
				"formatError",
				() => ax,
				"prettifyError",
				() => aA,
				"toDotPath",
				() => az,
				"treeifyError",
				() => ay,
			],
			53327,
		)
		let aB = (a) => (b, c, d, e) => {
				let f = d ? Object.assign(d, { async: !1 }) : { async: !1 },
					g = b._zod.run({ value: c, issues: [] }, f)
				if (g instanceof Promise) throw new v()
				if (g.issues.length) {
					let b = new (e?.Err ?? a)(g.issues.map((a) => am(a, f, x())))
					throw (Q(b, e?.callee), b)
				}
				return g.value
			},
			aC = aB(av),
			aD = (a) => async (b, c, d, e) => {
				let f = d ? Object.assign(d, { async: !0 }) : { async: !0 },
					g = b._zod.run({ value: c, issues: [] }, f)
				if ((g instanceof Promise && (g = await g), g.issues.length)) {
					let b = new (e?.Err ?? a)(g.issues.map((a) => am(a, f, x())))
					throw (Q(b, e?.callee), b)
				}
				return g.value
			},
			aE = aD(av),
			aF = (a) => (b, c, d) => {
				let e = d ? { ...d, async: !1 } : { async: !1 },
					f = b._zod.run({ value: c, issues: [] }, e)
				if (f instanceof Promise) throw new v()
				return f.issues.length
					? { success: !1, error: new (a ?? au)(f.issues.map((a) => am(a, e, x()))) }
					: { success: !0, data: f.value }
			},
			aG = aF(av),
			aH = (a) => async (b, c, d) => {
				let e = d ? Object.assign(d, { async: !0 }) : { async: !0 },
					f = b._zod.run({ value: c, issues: [] }, e)
				return (
					f instanceof Promise && (f = await f),
					f.issues.length
						? { success: !1, error: new a(f.issues.map((a) => am(a, e, x()))) }
						: { success: !0, data: f.value }
				)
			},
			aI = aH(av)
		a.s(
			[
				"_parse",
				0,
				aB,
				"_parseAsync",
				0,
				aD,
				"_safeParse",
				0,
				aF,
				"_safeParseAsync",
				0,
				aH,
				"parse",
				0,
				aC,
				"parseAsync",
				0,
				aE,
				"safeParse",
				0,
				aG,
				"safeParseAsync",
				0,
				aI,
			],
			71122,
		),
			a.i(71122),
			a.i(53327)
		let aJ = /^[cC][^\s-]{8,}$/,
			aK = /^[0-9a-z]+$/,
			aL = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
			aM = /^[0-9a-vA-V]{20}$/,
			aN = /^[A-Za-z0-9]{27}$/,
			aO = /^[a-zA-Z0-9_-]{21}$/,
			aP = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
			aQ = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
			aR = (a) =>
				a
					? RegExp(
							`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${a}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
						)
					: /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
			aS = aR(4),
			aT = aR(6),
			aU = aR(7),
			aV = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
			aW = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$"
		function aX() {
			return RegExp(aW, "u")
		}
		let aY =
				/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
			aZ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
			a$ =
				/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
			a_ =
				/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
			a0 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
			a1 = /^[A-Za-z0-9_-]*$/,
			a2 = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
			a3 = /^\+(?:[0-9]){6,14}[0-9]$/,
			a4 =
				"(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
			a5 = RegExp(`^${a4}$`)
		function a6(a) {
			let b = "(?:[01]\\d|2[0-3]):[0-5]\\d"
			return "number" == typeof a.precision
				? -1 === a.precision
					? `${b}`
					: 0 === a.precision
						? `${b}:[0-5]\\d`
						: `${b}:[0-5]\\d\\.\\d{${a.precision}}`
				: `${b}(?::[0-5]\\d(?:\\.\\d+)?)?`
		}
		function a7(a) {
			return RegExp(`^${a6(a)}$`)
		}
		function a8(a) {
			let b = a6({ precision: a.precision }),
				c = ["Z"]
			a.local && c.push(""), a.offset && c.push("([+-]\\d{2}:\\d{2})")
			let d = `${b}(?:${c.join("|")})`
			return RegExp(`^${a4}T(?:${d})$`)
		}
		let a9 = (a) => {
				let b = a ? `[\\s\\S]{${a?.minimum ?? 0},${a?.maximum ?? ""}}` : "[\\s\\S]*"
				return RegExp(`^${b}$`)
			},
			ba = /^\d+n?$/,
			bb = /^\d+$/,
			bc = /^-?\d+(?:\.\d+)?/i,
			bd = /true|false/i,
			be = /null/i,
			bf = /undefined/i,
			bg = /^[^A-Z]*$/,
			bh = /^[^a-z]*$/
		a.s(
			[
				"_emoji",
				0,
				aW,
				"base64",
				0,
				a0,
				"base64url",
				0,
				a1,
				"bigint",
				0,
				ba,
				"boolean",
				0,
				bd,
				"browserEmail",
				0,
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				"cidrv4",
				0,
				a$,
				"cidrv6",
				0,
				a_,
				"cuid",
				0,
				aJ,
				"cuid2",
				0,
				aK,
				"date",
				0,
				a5,
				"datetime",
				() => a8,
				"domain",
				0,
				/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
				"duration",
				0,
				aP,
				"e164",
				0,
				a3,
				"email",
				0,
				aV,
				"emoji",
				() => aX,
				"extendedDuration",
				0,
				/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
				"guid",
				0,
				aQ,
				"hostname",
				0,
				a2,
				"html5Email",
				0,
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				"integer",
				0,
				bb,
				"ipv4",
				0,
				aY,
				"ipv6",
				0,
				aZ,
				"ksuid",
				0,
				aN,
				"lowercase",
				0,
				bg,
				"nanoid",
				0,
				aO,
				"null",
				() => be,
				"number",
				0,
				bc,
				"rfc5322Email",
				0,
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"string",
				0,
				a9,
				"time",
				() => a7,
				"ulid",
				0,
				aL,
				"undefined",
				() => bf,
				"unicodeEmail",
				0,
				/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
				"uppercase",
				0,
				bh,
				"uuid",
				0,
				aR,
				"uuid4",
				0,
				aS,
				"uuid6",
				0,
				aT,
				"uuid7",
				0,
				aU,
				"xid",
				0,
				aM,
			],
			97934,
		)
		let bi = t("$ZodCheck", (a, b) => {
				var c
				a._zod ?? (a._zod = {}), (a._zod.def = b), (c = a._zod).onattach ?? (c.onattach = [])
			}),
			bj = { number: "number", bigint: "bigint", object: "date" },
			bk = t("$ZodCheckLessThan", (a, b) => {
				bi.init(a, b)
				let c = bj[typeof b.value]
				a._zod.onattach.push((a) => {
					let c = a._zod.bag,
						d = (b.inclusive ? c.maximum : c.exclusiveMaximum) ?? 1 / 0
					b.value < d && (b.inclusive ? (c.maximum = b.value) : (c.exclusiveMaximum = b.value))
				}),
					(a._zod.check = (d) => {
						;(b.inclusive ? d.value <= b.value : d.value < b.value) ||
							d.issues.push({
								origin: c,
								code: "too_big",
								maximum: b.value,
								input: d.value,
								inclusive: b.inclusive,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bl = t("$ZodCheckGreaterThan", (a, b) => {
				bi.init(a, b)
				let c = bj[typeof b.value]
				a._zod.onattach.push((a) => {
					let c = a._zod.bag,
						d = (b.inclusive ? c.minimum : c.exclusiveMinimum) ?? -1 / 0
					b.value > d && (b.inclusive ? (c.minimum = b.value) : (c.exclusiveMinimum = b.value))
				}),
					(a._zod.check = (d) => {
						;(b.inclusive ? d.value >= b.value : d.value > b.value) ||
							d.issues.push({
								origin: c,
								code: "too_small",
								minimum: b.value,
								input: d.value,
								inclusive: b.inclusive,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bm = t("$ZodCheckMultipleOf", (a, b) => {
				bi.init(a, b),
					a._zod.onattach.push((a) => {
						var c
						;(c = a._zod.bag).multipleOf ?? (c.multipleOf = b.value)
					}),
					(a._zod.check = (c) => {
						if (typeof c.value != typeof b.value)
							throw Error("Cannot mix number and bigint in multiple_of check.")
						;("bigint" == typeof c.value ? c.value % b.value === BigInt(0) : 0 === J(c.value, b.value)) ||
							c.issues.push({
								origin: typeof c.value,
								code: "not_multiple_of",
								divisor: b.value,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bn = t("$ZodCheckNumberFormat", (a, b) => {
				bi.init(a, b), (b.format = b.format || "float64")
				let c = b.format?.includes("int"),
					d = c ? "int" : "number",
					[e, f] = ab[b.format]
				a._zod.onattach.push((a) => {
					let d = a._zod.bag
					;(d.format = b.format), (d.minimum = e), (d.maximum = f), c && (d.pattern = bb)
				}),
					(a._zod.check = (g) => {
						let h = g.value
						if (c) {
							if (!Number.isInteger(h))
								return void g.issues.push({
									expected: d,
									format: b.format,
									code: "invalid_type",
									input: h,
									inst: a,
								})
							if (!Number.isSafeInteger(h))
								return void (h > 0
									? g.issues.push({
											input: h,
											code: "too_big",
											maximum: Number.MAX_SAFE_INTEGER,
											note: "Integers must be within the safe integer range.",
											inst: a,
											origin: d,
											continue: !b.abort,
										})
									: g.issues.push({
											input: h,
											code: "too_small",
											minimum: Number.MIN_SAFE_INTEGER,
											note: "Integers must be within the safe integer range.",
											inst: a,
											origin: d,
											continue: !b.abort,
										}))
						}
						h < e &&
							g.issues.push({
								origin: "number",
								input: h,
								code: "too_small",
								minimum: e,
								inclusive: !0,
								inst: a,
								continue: !b.abort,
							}),
							h > f && g.issues.push({ origin: "number", input: h, code: "too_big", maximum: f, inst: a })
					})
			}),
			bo = t("$ZodCheckBigIntFormat", (a, b) => {
				bi.init(a, b)
				let [c, d] = ac[b.format]
				a._zod.onattach.push((a) => {
					let e = a._zod.bag
					;(e.format = b.format), (e.minimum = c), (e.maximum = d)
				}),
					(a._zod.check = (e) => {
						let f = e.value
						f < c &&
							e.issues.push({
								origin: "bigint",
								input: f,
								code: "too_small",
								minimum: c,
								inclusive: !0,
								inst: a,
								continue: !b.abort,
							}),
							f > d && e.issues.push({ origin: "bigint", input: f, code: "too_big", maximum: d, inst: a })
					})
			}),
			bp = t("$ZodCheckMaxSize", (a, b) => {
				var c
				bi.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !H(b) && void 0 !== b.size
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag.maximum ?? 1 / 0
						b.maximum < c && (a._zod.bag.maximum = b.maximum)
					}),
					(a._zod.check = (c) => {
						let d = c.value
						d.size <= b.maximum ||
							c.issues.push({
								origin: an(d),
								code: "too_big",
								maximum: b.maximum,
								input: d,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bq = t("$ZodCheckMinSize", (a, b) => {
				var c
				bi.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !H(b) && void 0 !== b.size
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag.minimum ?? -1 / 0
						b.minimum > c && (a._zod.bag.minimum = b.minimum)
					}),
					(a._zod.check = (c) => {
						let d = c.value
						d.size >= b.minimum ||
							c.issues.push({
								origin: an(d),
								code: "too_small",
								minimum: b.minimum,
								input: d,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			br = t("$ZodCheckSizeEquals", (a, b) => {
				var c
				bi.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !H(b) && void 0 !== b.size
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag
						;(c.minimum = b.size), (c.maximum = b.size), (c.size = b.size)
					}),
					(a._zod.check = (c) => {
						let d = c.value,
							e = d.size
						if (e === b.size) return
						let f = e > b.size
						c.issues.push({
							origin: an(d),
							...(f ? { code: "too_big", maximum: b.size } : { code: "too_small", minimum: b.size }),
							inclusive: !0,
							exact: !0,
							input: c.value,
							inst: a,
							continue: !b.abort,
						})
					})
			}),
			bs = t("$ZodCheckMaxLength", (a, b) => {
				var c
				bi.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !H(b) && void 0 !== b.length
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag.maximum ?? 1 / 0
						b.maximum < c && (a._zod.bag.maximum = b.maximum)
					}),
					(a._zod.check = (c) => {
						let d = c.value
						if (d.length <= b.maximum) return
						let e = ao(d)
						c.issues.push({
							origin: e,
							code: "too_big",
							maximum: b.maximum,
							inclusive: !0,
							input: d,
							inst: a,
							continue: !b.abort,
						})
					})
			}),
			bt = t("$ZodCheckMinLength", (a, b) => {
				var c
				bi.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !H(b) && void 0 !== b.length
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag.minimum ?? -1 / 0
						b.minimum > c && (a._zod.bag.minimum = b.minimum)
					}),
					(a._zod.check = (c) => {
						let d = c.value
						if (d.length >= b.minimum) return
						let e = ao(d)
						c.issues.push({
							origin: e,
							code: "too_small",
							minimum: b.minimum,
							inclusive: !0,
							input: d,
							inst: a,
							continue: !b.abort,
						})
					})
			}),
			bu = t("$ZodCheckLengthEquals", (a, b) => {
				var c
				bi.init(a, b),
					(c = a._zod.def).when ??
						(c.when = (a) => {
							let b = a.value
							return !H(b) && void 0 !== b.length
						}),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag
						;(c.minimum = b.length), (c.maximum = b.length), (c.length = b.length)
					}),
					(a._zod.check = (c) => {
						let d = c.value,
							e = d.length
						if (e === b.length) return
						let f = ao(d),
							g = e > b.length
						c.issues.push({
							origin: f,
							...(g ? { code: "too_big", maximum: b.length } : { code: "too_small", minimum: b.length }),
							inclusive: !0,
							exact: !0,
							input: c.value,
							inst: a,
							continue: !b.abort,
						})
					})
			}),
			bv = t("$ZodCheckStringFormat", (a, b) => {
				var c, d
				bi.init(a, b),
					a._zod.onattach.push((a) => {
						let c = a._zod.bag
						;(c.format = b.format),
							b.pattern && (c.patterns ?? (c.patterns = new Set()), c.patterns.add(b.pattern))
					}),
					b.pattern
						? ((c = a._zod).check ??
							(c.check = (c) => {
								;(b.pattern.lastIndex = 0),
									b.pattern.test(c.value) ||
										c.issues.push({
											origin: "string",
											code: "invalid_format",
											format: b.format,
											input: c.value,
											...(b.pattern ? { pattern: b.pattern.toString() } : {}),
											inst: a,
											continue: !b.abort,
										})
							}))
						: ((d = a._zod).check ?? (d.check = () => {}))
			}),
			bw = t("$ZodCheckRegex", (a, b) => {
				bv.init(a, b),
					(a._zod.check = (c) => {
						;(b.pattern.lastIndex = 0),
							b.pattern.test(c.value) ||
								c.issues.push({
									origin: "string",
									code: "invalid_format",
									format: "regex",
									input: c.value,
									pattern: b.pattern.toString(),
									inst: a,
									continue: !b.abort,
								})
					})
			}),
			bx = t("$ZodCheckLowerCase", (a, b) => {
				b.pattern ?? (b.pattern = bg), bv.init(a, b)
			}),
			by = t("$ZodCheckUpperCase", (a, b) => {
				b.pattern ?? (b.pattern = bh), bv.init(a, b)
			}),
			bz = t("$ZodCheckIncludes", (a, b) => {
				bi.init(a, b)
				let c = X(b.includes),
					d = new RegExp("number" == typeof b.position ? `^.{${b.position}}${c}` : c)
				;(b.pattern = d),
					a._zod.onattach.push((a) => {
						let b = a._zod.bag
						b.patterns ?? (b.patterns = new Set()), b.patterns.add(d)
					}),
					(a._zod.check = (c) => {
						c.value.includes(b.includes, b.position) ||
							c.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "includes",
								includes: b.includes,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bA = t("$ZodCheckStartsWith", (a, b) => {
				bi.init(a, b)
				let c = RegExp(`^${X(b.prefix)}.*`)
				b.pattern ?? (b.pattern = c),
					a._zod.onattach.push((a) => {
						let b = a._zod.bag
						b.patterns ?? (b.patterns = new Set()), b.patterns.add(c)
					}),
					(a._zod.check = (c) => {
						c.value.startsWith(b.prefix) ||
							c.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "starts_with",
								prefix: b.prefix,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			bB = t("$ZodCheckEndsWith", (a, b) => {
				bi.init(a, b)
				let c = RegExp(`.*${X(b.suffix)}$`)
				b.pattern ?? (b.pattern = c),
					a._zod.onattach.push((a) => {
						let b = a._zod.bag
						b.patterns ?? (b.patterns = new Set()), b.patterns.add(c)
					}),
					(a._zod.check = (c) => {
						c.value.endsWith(b.suffix) ||
							c.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "ends_with",
								suffix: b.suffix,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			})
		function bC(a, b, c) {
			a.issues.length && b.issues.push(...ak(c, a.issues))
		}
		let bD = t("$ZodCheckProperty", (a, b) => {
				bi.init(a, b),
					(a._zod.check = (a) => {
						let c = b.schema._zod.run({ value: a.value[b.property], issues: [] }, {})
						if (c instanceof Promise) return c.then((c) => bC(c, a, b.property))
						bC(c, a, b.property)
					})
			}),
			bE = t("$ZodCheckMimeType", (a, b) => {
				bi.init(a, b)
				let c = new Set(b.mime)
				a._zod.onattach.push((a) => {
					a._zod.bag.mime = b.mime
				}),
					(a._zod.check = (d) => {
						c.has(d.value.type) ||
							d.issues.push({ code: "invalid_value", values: b.mime, input: d.value.type, inst: a })
					})
			}),
			bF = t("$ZodCheckOverwrite", (a, b) => {
				bi.init(a, b),
					(a._zod.check = (a) => {
						a.value = b.tx(a.value)
					})
			})
		a.s(
			[
				"$ZodCheck",
				0,
				bi,
				"$ZodCheckBigIntFormat",
				0,
				bo,
				"$ZodCheckEndsWith",
				0,
				bB,
				"$ZodCheckGreaterThan",
				0,
				bl,
				"$ZodCheckIncludes",
				0,
				bz,
				"$ZodCheckLengthEquals",
				0,
				bu,
				"$ZodCheckLessThan",
				0,
				bk,
				"$ZodCheckLowerCase",
				0,
				bx,
				"$ZodCheckMaxLength",
				0,
				bs,
				"$ZodCheckMaxSize",
				0,
				bp,
				"$ZodCheckMimeType",
				0,
				bE,
				"$ZodCheckMinLength",
				0,
				bt,
				"$ZodCheckMinSize",
				0,
				bq,
				"$ZodCheckMultipleOf",
				0,
				bm,
				"$ZodCheckNumberFormat",
				0,
				bn,
				"$ZodCheckOverwrite",
				0,
				bF,
				"$ZodCheckProperty",
				0,
				bD,
				"$ZodCheckRegex",
				0,
				bw,
				"$ZodCheckSizeEquals",
				0,
				br,
				"$ZodCheckStartsWith",
				0,
				bA,
				"$ZodCheckStringFormat",
				0,
				bv,
				"$ZodCheckUpperCase",
				0,
				by,
			],
			62342,
		)
		class bG {
			constructor(a = []) {
				;(this.content = []), (this.indent = 0), this && (this.args = a)
			}
			indented(a) {
				;(this.indent += 1), a(this), (this.indent -= 1)
			}
			write(a) {
				if ("function" == typeof a) {
					a(this, { execution: "sync" }), a(this, { execution: "async" })
					return
				}
				let b = a.split("\n").filter((a) => a),
					c = Math.min(...b.map((a) => a.length - a.trimStart().length))
				for (let a of b.map((a) => a.slice(c)).map((a) => " ".repeat(2 * this.indent) + a)) this.content.push(a)
			}
			compile() {
				return Function(...this?.args, [...(this?.content ?? [""]).map((a) => `  ${a}`)].join("\n"))
			}
		}
		a.s(["Doc", () => bG], 26315)
		let bH = { major: 4, minor: 0, patch: 0 }
		a.s(["version", 0, bH], 44119)
		let bI = t("$ZodType", (a, b) => {
				var c
				a ?? (a = {}), (a._zod.def = b), (a._zod.bag = a._zod.bag || {}), (a._zod.version = bH)
				let d = [...(a._zod.def.checks ?? [])]
				for (let b of (a._zod.traits.has("$ZodCheck") && d.unshift(a), d)) for (let c of b._zod.onattach) c(a)
				if (0 === d.length)
					(c = a._zod).deferred ?? (c.deferred = []),
						a._zod.deferred?.push(() => {
							a._zod.run = a._zod.parse
						})
				else {
					let b = (a, b, c) => {
						let d,
							e = aj(a)
						for (let f of b) {
							if (f._zod.def.when) {
								if (!f._zod.def.when(a)) continue
							} else if (e) continue
							let b = a.issues.length,
								g = f._zod.check(a)
							if (g instanceof Promise && c?.async === !1) throw new v()
							if (d || g instanceof Promise)
								d = (d ?? Promise.resolve()).then(async () => {
									await g, a.issues.length !== b && (e || (e = aj(a, b)))
								})
							else {
								if (a.issues.length === b) continue
								e || (e = aj(a, b))
							}
						}
						return d ? d.then(() => a) : a
					}
					a._zod.run = (c, e) => {
						let f = a._zod.parse(c, e)
						if (f instanceof Promise) {
							if (!1 === e.async) throw new v()
							return f.then((a) => b(a, d, e))
						}
						return b(f, d, e)
					}
				}
				a["~standard"] = {
					validate: (b) => {
						try {
							let c = aG(a, b)
							return c.success ? { value: c.data } : { issues: c.error?.issues }
						} catch (c) {
							return aI(a, b).then((a) => (a.success ? { value: a.data } : { issues: a.error?.issues }))
						}
					},
					vendor: "zod",
					version: 1,
				}
			}),
			bJ = t("$ZodString", (a, b) => {
				bI.init(a, b),
					(a._zod.pattern = [...(a?._zod.bag?.patterns ?? [])].pop() ?? a9(a._zod.bag)),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = String(c.value)
							} catch (a) {}
						return (
							"string" == typeof c.value ||
								c.issues.push({ expected: "string", code: "invalid_type", input: c.value, inst: a }),
							c
						)
					})
			}),
			bK = t("$ZodStringFormat", (a, b) => {
				bv.init(a, b), bJ.init(a, b)
			}),
			bL = t("$ZodGUID", (a, b) => {
				b.pattern ?? (b.pattern = aQ), bK.init(a, b)
			}),
			bM = t("$ZodUUID", (a, b) => {
				if (b.version) {
					let a = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[b.version]
					if (void 0 === a) throw Error(`Invalid UUID version: "${b.version}"`)
					b.pattern ?? (b.pattern = aR(a))
				} else b.pattern ?? (b.pattern = aR())
				bK.init(a, b)
			}),
			bN = t("$ZodEmail", (a, b) => {
				b.pattern ?? (b.pattern = aV), bK.init(a, b)
			}),
			bO = t("$ZodURL", (a, b) => {
				bK.init(a, b),
					(a._zod.check = (c) => {
						try {
							let d = c.value,
								e = new URL(d),
								f = e.href
							b.hostname &&
								((b.hostname.lastIndex = 0),
								b.hostname.test(e.hostname) ||
									c.issues.push({
										code: "invalid_format",
										format: "url",
										note: "Invalid hostname",
										pattern: a2.source,
										input: c.value,
										inst: a,
										continue: !b.abort,
									})),
								b.protocol &&
									((b.protocol.lastIndex = 0),
									b.protocol.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol) ||
										c.issues.push({
											code: "invalid_format",
											format: "url",
											note: "Invalid protocol",
											pattern: b.protocol.source,
											input: c.value,
											inst: a,
											continue: !b.abort,
										})),
								!d.endsWith("/") && f.endsWith("/") ? (c.value = f.slice(0, -1)) : (c.value = f)
							return
						} catch (d) {
							c.issues.push({
								code: "invalid_format",
								format: "url",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
						}
					})
			}),
			bP = t("$ZodEmoji", (a, b) => {
				b.pattern ?? (b.pattern = aX()), bK.init(a, b)
			}),
			bQ = t("$ZodNanoID", (a, b) => {
				b.pattern ?? (b.pattern = aO), bK.init(a, b)
			}),
			bR = t("$ZodCUID", (a, b) => {
				b.pattern ?? (b.pattern = aJ), bK.init(a, b)
			}),
			bS = t("$ZodCUID2", (a, b) => {
				b.pattern ?? (b.pattern = aK), bK.init(a, b)
			}),
			bT = t("$ZodULID", (a, b) => {
				b.pattern ?? (b.pattern = aL), bK.init(a, b)
			}),
			bU = t("$ZodXID", (a, b) => {
				b.pattern ?? (b.pattern = aM), bK.init(a, b)
			}),
			bV = t("$ZodKSUID", (a, b) => {
				b.pattern ?? (b.pattern = aN), bK.init(a, b)
			}),
			bW = t("$ZodISODateTime", (a, b) => {
				b.pattern ?? (b.pattern = a8(b)), bK.init(a, b)
			}),
			bX = t("$ZodISODate", (a, b) => {
				b.pattern ?? (b.pattern = a5), bK.init(a, b)
			}),
			bY = t("$ZodISOTime", (a, b) => {
				b.pattern ?? (b.pattern = a7(b)), bK.init(a, b)
			}),
			bZ = t("$ZodISODuration", (a, b) => {
				b.pattern ?? (b.pattern = aP), bK.init(a, b)
			}),
			b$ = t("$ZodIPv4", (a, b) => {
				b.pattern ?? (b.pattern = aY),
					bK.init(a, b),
					a._zod.onattach.push((a) => {
						a._zod.bag.format = "ipv4"
					})
			}),
			b_ = t("$ZodIPv6", (a, b) => {
				b.pattern ?? (b.pattern = aZ),
					bK.init(a, b),
					a._zod.onattach.push((a) => {
						a._zod.bag.format = "ipv6"
					}),
					(a._zod.check = (c) => {
						try {
							new URL(`http://[${c.value}]`)
						} catch {
							c.issues.push({
								code: "invalid_format",
								format: "ipv6",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
						}
					})
			}),
			b0 = t("$ZodCIDRv4", (a, b) => {
				b.pattern ?? (b.pattern = a$), bK.init(a, b)
			}),
			b1 = t("$ZodCIDRv6", (a, b) => {
				b.pattern ?? (b.pattern = a_),
					bK.init(a, b),
					(a._zod.check = (c) => {
						let [d, e] = c.value.split("/")
						try {
							if (!e) throw Error()
							let a = Number(e)
							if (`${a}` !== e || a < 0 || a > 128) throw Error()
							new URL(`http://[${d}]`)
						} catch {
							c.issues.push({
								code: "invalid_format",
								format: "cidrv6",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
						}
					})
			})
		function b2(a) {
			if ("" === a) return !0
			if (a.length % 4 != 0) return !1
			try {
				return atob(a), !0
			} catch {
				return !1
			}
		}
		let b3 = t("$ZodBase64", (a, b) => {
			b.pattern ?? (b.pattern = a0),
				bK.init(a, b),
				a._zod.onattach.push((a) => {
					a._zod.bag.contentEncoding = "base64"
				}),
				(a._zod.check = (c) => {
					b2(c.value) ||
						c.issues.push({
							code: "invalid_format",
							format: "base64",
							input: c.value,
							inst: a,
							continue: !b.abort,
						})
				})
		})
		function b4(a) {
			if (!a1.test(a)) return !1
			let b = a.replace(/[-_]/g, (a) => ("-" === a ? "+" : "/"))
			return b2(b.padEnd(4 * Math.ceil(b.length / 4), "="))
		}
		let b5 = t("$ZodBase64URL", (a, b) => {
				b.pattern ?? (b.pattern = a1),
					bK.init(a, b),
					a._zod.onattach.push((a) => {
						a._zod.bag.contentEncoding = "base64url"
					}),
					(a._zod.check = (c) => {
						b4(c.value) ||
							c.issues.push({
								code: "invalid_format",
								format: "base64url",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			b6 = t("$ZodE164", (a, b) => {
				b.pattern ?? (b.pattern = a3), bK.init(a, b)
			})
		function b7(a, b = null) {
			try {
				let c = a.split(".")
				if (3 !== c.length) return !1
				let [d] = c
				if (!d) return !1
				let e = JSON.parse(atob(d))
				if (("typ" in e && e?.typ !== "JWT") || !e.alg || (b && (!("alg" in e) || e.alg !== b))) return !1
				return !0
			} catch {
				return !1
			}
		}
		let b8 = t("$ZodJWT", (a, b) => {
				bK.init(a, b),
					(a._zod.check = (c) => {
						b7(c.value, b.alg) ||
							c.issues.push({
								code: "invalid_format",
								format: "jwt",
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			b9 = t("$ZodCustomStringFormat", (a, b) => {
				bK.init(a, b),
					(a._zod.check = (c) => {
						b.fn(c.value) ||
							c.issues.push({
								code: "invalid_format",
								format: b.format,
								input: c.value,
								inst: a,
								continue: !b.abort,
							})
					})
			}),
			ca = t("$ZodNumber", (a, b) => {
				bI.init(a, b),
					(a._zod.pattern = a._zod.bag.pattern ?? bc),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = Number(c.value)
							} catch (a) {}
						let e = c.value
						if ("number" == typeof e && !Number.isNaN(e) && Number.isFinite(e)) return c
						let f =
							"number" == typeof e
								? Number.isNaN(e)
									? "NaN"
									: Number.isFinite(e)
										? void 0
										: "Infinity"
								: void 0
						return (
							c.issues.push({
								expected: "number",
								code: "invalid_type",
								input: e,
								inst: a,
								...(f ? { received: f } : {}),
							}),
							c
						)
					})
			}),
			cb = t("$ZodNumber", (a, b) => {
				bn.init(a, b), ca.init(a, b)
			}),
			cc = t("$ZodBoolean", (a, b) => {
				bI.init(a, b),
					(a._zod.pattern = bd),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = !!c.value
							} catch (a) {}
						let e = c.value
						return (
							"boolean" == typeof e ||
								c.issues.push({ expected: "boolean", code: "invalid_type", input: e, inst: a }),
							c
						)
					})
			}),
			cd = t("$ZodBigInt", (a, b) => {
				bI.init(a, b),
					(a._zod.pattern = ba),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = BigInt(c.value)
							} catch (a) {}
						return (
							"bigint" == typeof c.value ||
								c.issues.push({ expected: "bigint", code: "invalid_type", input: c.value, inst: a }),
							c
						)
					})
			}),
			ce = t("$ZodBigInt", (a, b) => {
				bo.init(a, b), cd.init(a, b)
			}),
			cf = t("$ZodSymbol", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							"symbol" == typeof d ||
								b.issues.push({ expected: "symbol", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			cg = t("$ZodUndefined", (a, b) => {
				bI.init(a, b),
					(a._zod.pattern = bf),
					(a._zod.values = new Set([void 0])),
					(a._zod.optin = "optional"),
					(a._zod.optout = "optional"),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							void 0 === d ||
								b.issues.push({ expected: "undefined", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			ch = t("$ZodNull", (a, b) => {
				bI.init(a, b),
					(a._zod.pattern = be),
					(a._zod.values = new Set([null])),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							null === d || b.issues.push({ expected: "null", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			ci = t("$ZodAny", (a, b) => {
				bI.init(a, b), (a._zod.parse = (a) => a)
			}),
			cj = t("$ZodUnknown", (a, b) => {
				bI.init(a, b), (a._zod.parse = (a) => a)
			}),
			ck = t("$ZodNever", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (b, c) => (
						b.issues.push({ expected: "never", code: "invalid_type", input: b.value, inst: a }), b
					))
			}),
			cl = t("$ZodVoid", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							void 0 === d ||
								b.issues.push({ expected: "void", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			cm = t("$ZodDate", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (c, d) => {
						if (b.coerce)
							try {
								c.value = new Date(c.value)
							} catch (a) {}
						let e = c.value,
							f = e instanceof Date
						return (
							(f && !Number.isNaN(e.getTime())) ||
								c.issues.push({
									expected: "date",
									code: "invalid_type",
									input: e,
									...(f ? { received: "Invalid Date" } : {}),
									inst: a,
								}),
							c
						)
					})
			})
		function cn(a, b, c) {
			a.issues.length && b.issues.push(...ak(c, a.issues)), (b.value[c] = a.value)
		}
		let co = t("$ZodArray", (a, b) => {
			bI.init(a, b),
				(a._zod.parse = (c, d) => {
					let e = c.value
					if (!Array.isArray(e))
						return c.issues.push({ expected: "array", code: "invalid_type", input: e, inst: a }), c
					c.value = Array(e.length)
					let f = []
					for (let a = 0; a < e.length; a++) {
						let g = e[a],
							h = b.element._zod.run({ value: g, issues: [] }, d)
						h instanceof Promise ? f.push(h.then((b) => cn(b, c, a))) : cn(h, c, a)
					}
					return f.length ? Promise.all(f).then(() => c) : c
				})
		})
		function cp(a, b, c) {
			a.issues.length && b.issues.push(...ak(c, a.issues)), (b.value[c] = a.value)
		}
		function cq(a, b, c, d) {
			a.issues.length
				? void 0 === d[c]
					? c in d
						? (b.value[c] = void 0)
						: (b.value[c] = a.value)
					: b.issues.push(...ak(c, a.issues))
				: void 0 === a.value
					? c in d && (b.value[c] = void 0)
					: (b.value[c] = a.value)
		}
		let cr = t("$ZodObject", (a, b) => {
			let c, d
			bI.init(a, b)
			let e = G(() => {
				let a = Object.keys(b.shape)
				for (let c of a)
					if (!(b.shape[c] instanceof bI)) throw Error(`Invalid element at key "${c}": expected a Zod schema`)
				let c = aa(b.shape)
				return { shape: b.shape, keys: a, keySet: new Set(a), numKeys: a.length, optionalKeys: new Set(c) }
			})
			K(a._zod, "propValues", () => {
				let a = b.shape,
					c = {}
				for (let b in a) {
					let d = a[b]._zod
					if (d.values) for (let a of (c[b] ?? (c[b] = new Set()), d.values)) c[b].add(a)
				}
				return c
			})
			let f = !w.jitless,
				g = f && S.value,
				h = b.catchall
			a._zod.parse = (i, j) => {
				d ?? (d = e.value)
				let k = i.value
				if (!R(k)) return i.issues.push({ expected: "object", code: "invalid_type", input: k, inst: a }), i
				let l = []
				if (f && g && j?.async === !1 && !0 !== j.jitless)
					c ||
						(c = ((a) => {
							let b = new bG(["shape", "payload", "ctx"]),
								c = e.value,
								d = (a) => {
									let b = P(a)
									return `shape[${b}]._zod.run({ value: input[${b}], issues: [] }, ctx)`
								}
							b.write("const input = payload.value;")
							let f = Object.create(null),
								g = 0
							for (let a of c.keys) f[a] = `key_${g++}`
							for (let a of (b.write("const newResult = {}"), c.keys))
								if (c.optionalKeys.has(a)) {
									let c = f[a]
									b.write(`const ${c} = ${d(a)};`)
									let e = P(a)
									b.write(`
        if (${c}.issues.length) {
          if (input[${e}] === undefined) {
            if (${e} in input) {
              newResult[${e}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${c}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${e}, ...iss.path] : [${e}],
              }))
            );
          }
        } else if (${c}.value === undefined) {
          if (${e} in input) newResult[${e}] = undefined;
        } else {
          newResult[${e}] = ${c}.value;
        }
        `)
								} else {
									let c = f[a]
									b.write(`const ${c} = ${d(a)};`),
										b.write(`
          if (${c}.issues.length) payload.issues = payload.issues.concat(${c}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${P(a)}, ...iss.path] : [${P(a)}]
          })));`),
										b.write(`newResult[${P(a)}] = ${c}.value`)
								}
							b.write("payload.value = newResult;"), b.write("return payload;")
							let h = b.compile()
							return (b, c) => h(a, b, c)
						})(b.shape)),
						(i = c(i, j))
				else {
					i.value = {}
					let a = d.shape
					for (let b of d.keys) {
						let c = a[b],
							d = c._zod.run({ value: k[b], issues: [] }, j),
							e = "optional" === c._zod.optin && "optional" === c._zod.optout
						d instanceof Promise
							? l.push(d.then((a) => (e ? cq(a, i, b, k) : cp(a, i, b))))
							: e
								? cq(d, i, b, k)
								: cp(d, i, b)
					}
				}
				if (!h) return l.length ? Promise.all(l).then(() => i) : i
				let m = [],
					n = d.keySet,
					o = h._zod,
					p = o.def.type
				for (let a of Object.keys(k)) {
					if (n.has(a)) continue
					if ("never" === p) {
						m.push(a)
						continue
					}
					let b = o.run({ value: k[a], issues: [] }, j)
					b instanceof Promise ? l.push(b.then((b) => cp(b, i, a))) : cp(b, i, a)
				}
				return (m.length && i.issues.push({ code: "unrecognized_keys", keys: m, input: k, inst: a }), l.length)
					? Promise.all(l).then(() => i)
					: i
			}
		})
		function cs(a, b, c, d) {
			for (let c of a) if (0 === c.issues.length) return (b.value = c.value), b
			return (
				b.issues.push({
					code: "invalid_union",
					input: b.value,
					inst: c,
					errors: a.map((a) => a.issues.map((a) => am(a, d, x()))),
				}),
				b
			)
		}
		let ct = t("$ZodUnion", (a, b) => {
				bI.init(a, b),
					K(a._zod, "optin", () =>
						b.options.some((a) => "optional" === a._zod.optin) ? "optional" : void 0,
					),
					K(a._zod, "optout", () =>
						b.options.some((a) => "optional" === a._zod.optout) ? "optional" : void 0,
					),
					K(a._zod, "values", () => {
						if (b.options.every((a) => a._zod.values))
							return new Set(b.options.flatMap((a) => Array.from(a._zod.values)))
					}),
					K(a._zod, "pattern", () => {
						if (b.options.every((a) => a._zod.pattern)) {
							let a = b.options.map((a) => a._zod.pattern)
							return RegExp(`^(${a.map((a) => I(a.source)).join("|")})$`)
						}
					}),
					(a._zod.parse = (c, d) => {
						let e = !1,
							f = []
						for (let a of b.options) {
							let b = a._zod.run({ value: c.value, issues: [] }, d)
							if (b instanceof Promise) f.push(b), (e = !0)
							else {
								if (0 === b.issues.length) return b
								f.push(b)
							}
						}
						return e ? Promise.all(f).then((b) => cs(b, c, a, d)) : cs(f, c, a, d)
					})
			}),
			cu = t("$ZodDiscriminatedUnion", (a, b) => {
				ct.init(a, b)
				let c = a._zod.parse
				K(a._zod, "propValues", () => {
					let a = {}
					for (let c of b.options) {
						let d = c._zod.propValues
						if (!d || 0 === Object.keys(d).length)
							throw Error(`Invalid discriminated union option at index "${b.options.indexOf(c)}"`)
						for (let [b, c] of Object.entries(d)) for (let d of (a[b] || (a[b] = new Set()), c)) a[b].add(d)
					}
					return a
				})
				let d = G(() => {
					let a = b.options,
						c = new Map()
					for (let d of a) {
						let a = d._zod.propValues[b.discriminator]
						if (!a || 0 === a.size)
							throw Error(`Invalid discriminated union option at index "${b.options.indexOf(d)}"`)
						for (let b of a) {
							if (c.has(b)) throw Error(`Duplicate discriminator value "${String(b)}"`)
							c.set(b, d)
						}
					}
					return c
				})
				a._zod.parse = (e, f) => {
					let g = e.value
					if (!R(g)) return e.issues.push({ code: "invalid_type", expected: "object", input: g, inst: a }), e
					let h = d.value.get(g?.[b.discriminator])
					return h
						? h._zod.run(e, f)
						: b.unionFallback
							? c(e, f)
							: (e.issues.push({
									code: "invalid_union",
									errors: [],
									note: "No matching discriminator",
									input: g,
									path: [b.discriminator],
									inst: a,
								}),
								e)
				}
			}),
			cv = t("$ZodIntersection", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (a, c) => {
						let d = a.value,
							e = b.left._zod.run({ value: d, issues: [] }, c),
							f = b.right._zod.run({ value: d, issues: [] }, c)
						return e instanceof Promise || f instanceof Promise
							? Promise.all([e, f]).then(([b, c]) => cw(a, b, c))
							: cw(a, e, f)
					})
			})
		function cw(a, b, c) {
			if ((b.issues.length && a.issues.push(...b.issues), c.issues.length && a.issues.push(...c.issues), aj(a)))
				return a
			let d = (function a(b, c) {
				if (b === c || (b instanceof Date && c instanceof Date && +b == +c)) return { valid: !0, data: b }
				if (T(b) && T(c)) {
					let d = Object.keys(c),
						e = Object.keys(b).filter((a) => -1 !== d.indexOf(a)),
						f = { ...b, ...c }
					for (let d of e) {
						let e = a(b[d], c[d])
						if (!e.valid) return { valid: !1, mergeErrorPath: [d, ...e.mergeErrorPath] }
						f[d] = e.data
					}
					return { valid: !0, data: f }
				}
				if (Array.isArray(b) && Array.isArray(c)) {
					if (b.length !== c.length) return { valid: !1, mergeErrorPath: [] }
					let d = []
					for (let e = 0; e < b.length; e++) {
						let f = a(b[e], c[e])
						if (!f.valid) return { valid: !1, mergeErrorPath: [e, ...f.mergeErrorPath] }
						d.push(f.data)
					}
					return { valid: !0, data: d }
				}
				return { valid: !1, mergeErrorPath: [] }
			})(b.value, c.value)
			if (!d.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`)
			return (a.value = d.data), a
		}
		let cx = t("$ZodTuple", (a, b) => {
			bI.init(a, b)
			let c = b.items,
				d = c.length - [...c].reverse().findIndex((a) => "optional" !== a._zod.optin)
			a._zod.parse = (e, f) => {
				let g = e.value
				if (!Array.isArray(g))
					return e.issues.push({ input: g, inst: a, expected: "tuple", code: "invalid_type" }), e
				e.value = []
				let h = []
				if (!b.rest) {
					let b = g.length > c.length,
						f = g.length < d - 1
					if (b || f)
						return (
							e.issues.push({
								input: g,
								inst: a,
								origin: "array",
								...(b
									? { code: "too_big", maximum: c.length }
									: { code: "too_small", minimum: c.length }),
							}),
							e
						)
				}
				let i = -1
				for (let a of c) {
					if (++i >= g.length && i >= d) continue
					let b = a._zod.run({ value: g[i], issues: [] }, f)
					b instanceof Promise ? h.push(b.then((a) => cy(a, e, i))) : cy(b, e, i)
				}
				if (b.rest)
					for (let a of g.slice(c.length)) {
						i++
						let c = b.rest._zod.run({ value: a, issues: [] }, f)
						c instanceof Promise ? h.push(c.then((a) => cy(a, e, i))) : cy(c, e, i)
					}
				return h.length ? Promise.all(h).then(() => e) : e
			}
		})
		function cy(a, b, c) {
			a.issues.length && b.issues.push(...ak(c, a.issues)), (b.value[c] = a.value)
		}
		let cz = t("$ZodRecord", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (c, d) => {
						let e = c.value
						if (!T(e))
							return c.issues.push({ expected: "record", code: "invalid_type", input: e, inst: a }), c
						let f = []
						if (b.keyType._zod.values) {
							let g,
								h = b.keyType._zod.values
							for (let a of ((c.value = {}), h))
								if ("string" == typeof a || "number" == typeof a || "symbol" == typeof a) {
									let g = b.valueType._zod.run({ value: e[a], issues: [] }, d)
									g instanceof Promise
										? f.push(
												g.then((b) => {
													b.issues.length && c.issues.push(...ak(a, b.issues)),
														(c.value[a] = b.value)
												}),
											)
										: (g.issues.length && c.issues.push(...ak(a, g.issues)), (c.value[a] = g.value))
								}
							for (let a in e) h.has(a) || (g = g ?? []).push(a)
							g &&
								g.length > 0 &&
								c.issues.push({ code: "unrecognized_keys", input: e, inst: a, keys: g })
						} else
							for (let g of ((c.value = {}), Reflect.ownKeys(e))) {
								if ("__proto__" === g) continue
								let h = b.keyType._zod.run({ value: g, issues: [] }, d)
								if (h instanceof Promise)
									throw Error("Async schemas not supported in object keys currently")
								if (h.issues.length) {
									c.issues.push({
										origin: "record",
										code: "invalid_key",
										issues: h.issues.map((a) => am(a, d, x())),
										input: g,
										path: [g],
										inst: a,
									}),
										(c.value[h.value] = h.value)
									continue
								}
								let i = b.valueType._zod.run({ value: e[g], issues: [] }, d)
								i instanceof Promise
									? f.push(
											i.then((a) => {
												a.issues.length && c.issues.push(...ak(g, a.issues)),
													(c.value[h.value] = a.value)
											}),
										)
									: (i.issues.length && c.issues.push(...ak(g, i.issues)),
										(c.value[h.value] = i.value))
							}
						return f.length ? Promise.all(f).then(() => c) : c
					})
			}),
			cA = t("$ZodMap", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (c, d) => {
						let e = c.value
						if (!(e instanceof Map))
							return c.issues.push({ expected: "map", code: "invalid_type", input: e, inst: a }), c
						let f = []
						for (let [g, h] of ((c.value = new Map()), e)) {
							let i = b.keyType._zod.run({ value: g, issues: [] }, d),
								j = b.valueType._zod.run({ value: h, issues: [] }, d)
							i instanceof Promise || j instanceof Promise
								? f.push(
										Promise.all([i, j]).then(([b, f]) => {
											cB(b, f, c, g, e, a, d)
										}),
									)
								: cB(i, j, c, g, e, a, d)
						}
						return f.length ? Promise.all(f).then(() => c) : c
					})
			})
		function cB(a, b, c, d, e, f, g) {
			a.issues.length &&
				(V.has(typeof d)
					? c.issues.push(...ak(d, a.issues))
					: c.issues.push({
							origin: "map",
							code: "invalid_key",
							input: e,
							inst: f,
							issues: a.issues.map((a) => am(a, g, x())),
						})),
				b.issues.length &&
					(V.has(typeof d)
						? c.issues.push(...ak(d, b.issues))
						: c.issues.push({
								origin: "map",
								code: "invalid_element",
								input: e,
								inst: f,
								key: d,
								issues: b.issues.map((a) => am(a, g, x())),
							})),
				c.value.set(a.value, b.value)
		}
		let cC = t("$ZodSet", (a, b) => {
			bI.init(a, b),
				(a._zod.parse = (c, d) => {
					let e = c.value
					if (!(e instanceof Set))
						return c.issues.push({ input: e, inst: a, expected: "set", code: "invalid_type" }), c
					let f = []
					for (let a of ((c.value = new Set()), e)) {
						let e = b.valueType._zod.run({ value: a, issues: [] }, d)
						e instanceof Promise ? f.push(e.then((a) => cD(a, c))) : cD(e, c)
					}
					return f.length ? Promise.all(f).then(() => c) : c
				})
		})
		function cD(a, b) {
			a.issues.length && b.issues.push(...a.issues), b.value.add(a.value)
		}
		let cE = t("$ZodEnum", (a, b) => {
				bI.init(a, b)
				let c = D(b.entries)
				;(a._zod.values = new Set(c)),
					(a._zod.pattern = RegExp(
						`^(${c
							.filter((a) => V.has(typeof a))
							.map((a) => ("string" == typeof a ? X(a) : a.toString()))
							.join("|")})$`,
					)),
					(a._zod.parse = (b, d) => {
						let e = b.value
						return (
							a._zod.values.has(e) ||
								b.issues.push({ code: "invalid_value", values: c, input: e, inst: a }),
							b
						)
					})
			}),
			cF = t("$ZodLiteral", (a, b) => {
				bI.init(a, b),
					(a._zod.values = new Set(b.values)),
					(a._zod.pattern = RegExp(
						`^(${b.values.map((a) => ("string" == typeof a ? X(a) : a ? a.toString() : String(a))).join("|")})$`,
					)),
					(a._zod.parse = (c, d) => {
						let e = c.value
						return (
							a._zod.values.has(e) ||
								c.issues.push({ code: "invalid_value", values: b.values, input: e, inst: a }),
							c
						)
					})
			}),
			cG = t("$ZodFile", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (b, c) => {
						let d = b.value
						return (
							d instanceof File ||
								b.issues.push({ expected: "file", code: "invalid_type", input: d, inst: a }),
							b
						)
					})
			}),
			cH = t("$ZodTransform", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (a, c) => {
						let d = b.transform(a.value, a)
						if (c.async)
							return (d instanceof Promise ? d : Promise.resolve(d)).then((b) => ((a.value = b), a))
						if (d instanceof Promise) throw new v()
						return (a.value = d), a
					})
			}),
			cI = t("$ZodOptional", (a, b) => {
				bI.init(a, b),
					(a._zod.optin = "optional"),
					(a._zod.optout = "optional"),
					K(a._zod, "values", () =>
						b.innerType._zod.values ? new Set([...b.innerType._zod.values, void 0]) : void 0,
					),
					K(a._zod, "pattern", () => {
						let a = b.innerType._zod.pattern
						return a ? RegExp(`^(${I(a.source)})?$`) : void 0
					}),
					(a._zod.parse = (a, c) =>
						"optional" === b.innerType._zod.optin
							? b.innerType._zod.run(a, c)
							: void 0 === a.value
								? a
								: b.innerType._zod.run(a, c))
			}),
			cJ = t("$ZodNullable", (a, b) => {
				bI.init(a, b),
					K(a._zod, "optin", () => b.innerType._zod.optin),
					K(a._zod, "optout", () => b.innerType._zod.optout),
					K(a._zod, "pattern", () => {
						let a = b.innerType._zod.pattern
						return a ? RegExp(`^(${I(a.source)}|null)$`) : void 0
					}),
					K(a._zod, "values", () =>
						b.innerType._zod.values ? new Set([...b.innerType._zod.values, null]) : void 0,
					),
					(a._zod.parse = (a, c) => (null === a.value ? a : b.innerType._zod.run(a, c)))
			}),
			cK = t("$ZodDefault", (a, b) => {
				bI.init(a, b),
					(a._zod.optin = "optional"),
					K(a._zod, "values", () => b.innerType._zod.values),
					(a._zod.parse = (a, c) => {
						if (void 0 === a.value) return (a.value = b.defaultValue), a
						let d = b.innerType._zod.run(a, c)
						return d instanceof Promise ? d.then((a) => cL(a, b)) : cL(d, b)
					})
			})
		function cL(a, b) {
			return void 0 === a.value && (a.value = b.defaultValue), a
		}
		let cM = t("$ZodPrefault", (a, b) => {
				bI.init(a, b),
					(a._zod.optin = "optional"),
					K(a._zod, "values", () => b.innerType._zod.values),
					(a._zod.parse = (a, c) => (
						void 0 === a.value && (a.value = b.defaultValue), b.innerType._zod.run(a, c)
					))
			}),
			cN = t("$ZodNonOptional", (a, b) => {
				bI.init(a, b),
					K(a._zod, "values", () => {
						let a = b.innerType._zod.values
						return a ? new Set([...a].filter((a) => void 0 !== a)) : void 0
					}),
					(a._zod.parse = (c, d) => {
						let e = b.innerType._zod.run(c, d)
						return e instanceof Promise ? e.then((b) => cO(b, a)) : cO(e, a)
					})
			})
		function cO(a, b) {
			return (
				a.issues.length ||
					void 0 !== a.value ||
					a.issues.push({ code: "invalid_type", expected: "nonoptional", input: a.value, inst: b }),
				a
			)
		}
		let cP = t("$ZodSuccess", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (a, c) => {
						let d = b.innerType._zod.run(a, c)
						return d instanceof Promise
							? d.then((b) => ((a.value = 0 === b.issues.length), a))
							: ((a.value = 0 === d.issues.length), a)
					})
			}),
			cQ = t("$ZodCatch", (a, b) => {
				bI.init(a, b),
					(a._zod.optin = "optional"),
					K(a._zod, "optout", () => b.innerType._zod.optout),
					K(a._zod, "values", () => b.innerType._zod.values),
					(a._zod.parse = (a, c) => {
						let d = b.innerType._zod.run(a, c)
						return d instanceof Promise
							? d.then(
									(d) => (
										(a.value = d.value),
										d.issues.length &&
											((a.value = b.catchValue({
												...a,
												error: { issues: d.issues.map((a) => am(a, c, x())) },
												input: a.value,
											})),
											(a.issues = [])),
										a
									),
								)
							: ((a.value = d.value),
								d.issues.length &&
									((a.value = b.catchValue({
										...a,
										error: { issues: d.issues.map((a) => am(a, c, x())) },
										input: a.value,
									})),
									(a.issues = [])),
								a)
					})
			}),
			cR = t("$ZodNaN", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (b, c) => (
						("number" == typeof b.value && Number.isNaN(b.value)) ||
							b.issues.push({ input: b.value, inst: a, expected: "nan", code: "invalid_type" }),
						b
					))
			}),
			cS = t("$ZodPipe", (a, b) => {
				bI.init(a, b),
					K(a._zod, "values", () => b.in._zod.values),
					K(a._zod, "optin", () => b.in._zod.optin),
					K(a._zod, "optout", () => b.out._zod.optout),
					(a._zod.parse = (a, c) => {
						let d = b.in._zod.run(a, c)
						return d instanceof Promise ? d.then((a) => cT(a, b, c)) : cT(d, b, c)
					})
			})
		function cT(a, b, c) {
			return aj(a) ? a : b.out._zod.run({ value: a.value, issues: a.issues }, c)
		}
		let cU = t("$ZodReadonly", (a, b) => {
			bI.init(a, b),
				K(a._zod, "propValues", () => b.innerType._zod.propValues),
				K(a._zod, "values", () => b.innerType._zod.values),
				K(a._zod, "optin", () => b.innerType._zod.optin),
				K(a._zod, "optout", () => b.innerType._zod.optout),
				(a._zod.parse = (a, c) => {
					let d = b.innerType._zod.run(a, c)
					return d instanceof Promise ? d.then(cV) : cV(d)
				})
		})
		function cV(a) {
			return (a.value = Object.freeze(a.value)), a
		}
		let cW = t("$ZodTemplateLiteral", (a, b) => {
				bI.init(a, b)
				let c = []
				for (let a of b.parts)
					if (a instanceof bI) {
						if (!a._zod.pattern)
							throw Error(
								`Invalid template literal part, no pattern found: ${[...a._zod.traits].shift()}`,
							)
						let b = a._zod.pattern instanceof RegExp ? a._zod.pattern.source : a._zod.pattern
						if (!b) throw Error(`Invalid template literal part: ${a._zod.traits}`)
						let d = +!!b.startsWith("^"),
							e = b.endsWith("$") ? b.length - 1 : b.length
						c.push(b.slice(d, e))
					} else if (null === a || W.has(typeof a)) c.push(X(`${a}`))
					else throw Error(`Invalid template literal part: ${a}`)
				;(a._zod.pattern = RegExp(`^${c.join("")}$`)),
					(a._zod.parse = (b, c) => (
						"string" != typeof b.value
							? b.issues.push({
									input: b.value,
									inst: a,
									expected: "template_literal",
									code: "invalid_type",
								})
							: ((a._zod.pattern.lastIndex = 0),
								a._zod.pattern.test(b.value) ||
									b.issues.push({
										input: b.value,
										inst: a,
										code: "invalid_format",
										format: "template_literal",
										pattern: a._zod.pattern.source,
									})),
						b
					))
			}),
			cX = t("$ZodPromise", (a, b) => {
				bI.init(a, b),
					(a._zod.parse = (a, c) =>
						Promise.resolve(a.value).then((a) => b.innerType._zod.run({ value: a, issues: [] }, c)))
			}),
			cY = t("$ZodLazy", (a, b) => {
				bI.init(a, b),
					K(a._zod, "innerType", () => b.getter()),
					K(a._zod, "pattern", () => a._zod.innerType._zod.pattern),
					K(a._zod, "propValues", () => a._zod.innerType._zod.propValues),
					K(a._zod, "optin", () => a._zod.innerType._zod.optin),
					K(a._zod, "optout", () => a._zod.innerType._zod.optout),
					(a._zod.parse = (b, c) => a._zod.innerType._zod.run(b, c))
			}),
			cZ = t("$ZodCustom", (a, b) => {
				bi.init(a, b),
					bI.init(a, b),
					(a._zod.parse = (a, b) => a),
					(a._zod.check = (c) => {
						let d = c.value,
							e = b.fn(d)
						if (e instanceof Promise) return e.then((b) => c$(b, c, d, a))
						c$(e, c, d, a)
					})
			})
		function c$(a, b, c, d) {
			if (!a) {
				let a = {
					code: "custom",
					input: c,
					inst: d,
					path: [...(d._zod.def.path ?? [])],
					continue: !d._zod.def.abort,
				}
				d._zod.def.params && (a.params = d._zod.def.params), b.issues.push(ap(a))
			}
		}
		a.s(
			[
				"$ZodAny",
				0,
				ci,
				"$ZodArray",
				0,
				co,
				"$ZodBase64",
				0,
				b3,
				"$ZodBase64URL",
				0,
				b5,
				"$ZodBigInt",
				0,
				cd,
				"$ZodBigIntFormat",
				0,
				ce,
				"$ZodBoolean",
				0,
				cc,
				"$ZodCIDRv4",
				0,
				b0,
				"$ZodCIDRv6",
				0,
				b1,
				"$ZodCUID",
				0,
				bR,
				"$ZodCUID2",
				0,
				bS,
				"$ZodCatch",
				0,
				cQ,
				"$ZodCustom",
				0,
				cZ,
				"$ZodCustomStringFormat",
				0,
				b9,
				"$ZodDate",
				0,
				cm,
				"$ZodDefault",
				0,
				cK,
				"$ZodDiscriminatedUnion",
				0,
				cu,
				"$ZodE164",
				0,
				b6,
				"$ZodEmail",
				0,
				bN,
				"$ZodEmoji",
				0,
				bP,
				"$ZodEnum",
				0,
				cE,
				"$ZodFile",
				0,
				cG,
				"$ZodGUID",
				0,
				bL,
				"$ZodIPv4",
				0,
				b$,
				"$ZodIPv6",
				0,
				b_,
				"$ZodISODate",
				0,
				bX,
				"$ZodISODateTime",
				0,
				bW,
				"$ZodISODuration",
				0,
				bZ,
				"$ZodISOTime",
				0,
				bY,
				"$ZodIntersection",
				0,
				cv,
				"$ZodJWT",
				0,
				b8,
				"$ZodKSUID",
				0,
				bV,
				"$ZodLazy",
				0,
				cY,
				"$ZodLiteral",
				0,
				cF,
				"$ZodMap",
				0,
				cA,
				"$ZodNaN",
				0,
				cR,
				"$ZodNanoID",
				0,
				bQ,
				"$ZodNever",
				0,
				ck,
				"$ZodNonOptional",
				0,
				cN,
				"$ZodNull",
				0,
				ch,
				"$ZodNullable",
				0,
				cJ,
				"$ZodNumber",
				0,
				ca,
				"$ZodNumberFormat",
				0,
				cb,
				"$ZodObject",
				0,
				cr,
				"$ZodOptional",
				0,
				cI,
				"$ZodPipe",
				0,
				cS,
				"$ZodPrefault",
				0,
				cM,
				"$ZodPromise",
				0,
				cX,
				"$ZodReadonly",
				0,
				cU,
				"$ZodRecord",
				0,
				cz,
				"$ZodSet",
				0,
				cC,
				"$ZodString",
				0,
				bJ,
				"$ZodStringFormat",
				0,
				bK,
				"$ZodSuccess",
				0,
				cP,
				"$ZodSymbol",
				0,
				cf,
				"$ZodTemplateLiteral",
				0,
				cW,
				"$ZodTransform",
				0,
				cH,
				"$ZodTuple",
				0,
				cx,
				"$ZodType",
				0,
				bI,
				"$ZodULID",
				0,
				bT,
				"$ZodURL",
				0,
				bO,
				"$ZodUUID",
				0,
				bM,
				"$ZodUndefined",
				0,
				cg,
				"$ZodUnion",
				0,
				ct,
				"$ZodUnknown",
				0,
				cj,
				"$ZodVoid",
				0,
				cl,
				"$ZodXID",
				0,
				bU,
				"isValidBase64",
				() => b2,
				"isValidBase64URL",
				() => b4,
				"isValidJWT",
				() => b7,
			],
			72986,
		),
			a.i(72986),
			a.s(
				[
					"$ZodAny",
					0,
					ci,
					"$ZodArray",
					0,
					co,
					"$ZodBase64",
					0,
					b3,
					"$ZodBase64URL",
					0,
					b5,
					"$ZodBigInt",
					0,
					cd,
					"$ZodBigIntFormat",
					0,
					ce,
					"$ZodBoolean",
					0,
					cc,
					"$ZodCIDRv4",
					0,
					b0,
					"$ZodCIDRv6",
					0,
					b1,
					"$ZodCUID",
					0,
					bR,
					"$ZodCUID2",
					0,
					bS,
					"$ZodCatch",
					0,
					cQ,
					"$ZodCustom",
					0,
					cZ,
					"$ZodCustomStringFormat",
					0,
					b9,
					"$ZodDate",
					0,
					cm,
					"$ZodDefault",
					0,
					cK,
					"$ZodDiscriminatedUnion",
					0,
					cu,
					"$ZodE164",
					0,
					b6,
					"$ZodEmail",
					0,
					bN,
					"$ZodEmoji",
					0,
					bP,
					"$ZodEnum",
					0,
					cE,
					"$ZodFile",
					0,
					cG,
					"$ZodGUID",
					0,
					bL,
					"$ZodIPv4",
					0,
					b$,
					"$ZodIPv6",
					0,
					b_,
					"$ZodISODate",
					0,
					bX,
					"$ZodISODateTime",
					0,
					bW,
					"$ZodISODuration",
					0,
					bZ,
					"$ZodISOTime",
					0,
					bY,
					"$ZodIntersection",
					0,
					cv,
					"$ZodJWT",
					0,
					b8,
					"$ZodKSUID",
					0,
					bV,
					"$ZodLazy",
					0,
					cY,
					"$ZodLiteral",
					0,
					cF,
					"$ZodMap",
					0,
					cA,
					"$ZodNaN",
					0,
					cR,
					"$ZodNanoID",
					0,
					bQ,
					"$ZodNever",
					0,
					ck,
					"$ZodNonOptional",
					0,
					cN,
					"$ZodNull",
					0,
					ch,
					"$ZodNullable",
					0,
					cJ,
					"$ZodNumber",
					0,
					ca,
					"$ZodNumberFormat",
					0,
					cb,
					"$ZodObject",
					0,
					cr,
					"$ZodOptional",
					0,
					cI,
					"$ZodPipe",
					0,
					cS,
					"$ZodPrefault",
					0,
					cM,
					"$ZodPromise",
					0,
					cX,
					"$ZodReadonly",
					0,
					cU,
					"$ZodRecord",
					0,
					cz,
					"$ZodSet",
					0,
					cC,
					"$ZodString",
					0,
					bJ,
					"$ZodStringFormat",
					0,
					bK,
					"$ZodSuccess",
					0,
					cP,
					"$ZodSymbol",
					0,
					cf,
					"$ZodTemplateLiteral",
					0,
					cW,
					"$ZodTransform",
					0,
					cH,
					"$ZodTuple",
					0,
					cx,
					"$ZodType",
					0,
					bI,
					"$ZodULID",
					0,
					bT,
					"$ZodURL",
					0,
					bO,
					"$ZodUUID",
					0,
					bM,
					"$ZodUndefined",
					0,
					cg,
					"$ZodUnion",
					0,
					ct,
					"$ZodUnknown",
					0,
					cj,
					"$ZodVoid",
					0,
					cl,
					"$ZodXID",
					0,
					bU,
					"clone",
					() => Y,
					"isValidBase64",
					() => b2,
					"isValidBase64URL",
					() => b4,
					"isValidJWT",
					() => b7,
				],
				31904,
			),
			a.i(31904),
			a.i(62342),
			a.i(44119)
		var c_ = a.i(50042),
			c0 = a.i(97934)
		function c1(a, b, c, d) {
			let e = Math.abs(a),
				f = e % 10,
				g = e % 100
			return g >= 11 && g <= 19 ? d : 1 === f ? b : f >= 2 && f <= 4 ? c : d
		}
		function c2(a, b, c, d) {
			let e = Math.abs(a),
				f = e % 10,
				g = e % 100
			return g >= 11 && g <= 19 ? d : 1 === f ? b : f >= 2 && f <= 4 ? c : d
		}
		a.s([], 86294),
			a.i(86294),
			a.s(
				[
					"ar",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "حرف", verb: "أن يحوي" },
									file: { unit: "بايت", verb: "أن يحوي" },
									array: { unit: "عنصر", verb: "أن يحوي" },
									set: { unit: "عنصر", verb: "أن يحوي" },
								}),
								(b = {
									regex: "مدخل",
									email: "بريد إلكتروني",
									url: "رابط",
									emoji: "إيموجي",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "تاريخ ووقت بمعيار ISO",
									date: "تاريخ بمعيار ISO",
									time: "وقت بمعيار ISO",
									duration: "مدة بمعيار ISO",
									ipv4: "عنوان IPv4",
									ipv6: "عنوان IPv6",
									cidrv4: "مدى عناوين بصيغة IPv4",
									cidrv6: "مدى عناوين بصيغة IPv6",
									base64: "نَص بترميز base64-encoded",
									base64url: "نَص بترميز base64url-encoded",
									json_string: "نَص على هيئة JSON",
									e164: "رقم هاتف بمعيار E.164",
									jwt: "JWT",
									template_literal: "مدخل",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `مدخلات غير مقبولة: يفترض إدخال ${c.expected}، ولكن تم إدخال ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `مدخلات غير مقبولة: يفترض إدخال ${_(c.values[0])}`
											return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return ` أكبر من اللازم: يفترض أن تكون ${c.origin ?? "القيمة"} ${b} ${c.maximum.toString()} ${d.unit ?? "عنصر"}`
											return `أكبر من اللازم: يفترض أن تكون ${c.origin ?? "القيمة"} ${b} ${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `أصغر من اللازم: يفترض لـ ${c.origin} أن يكون ${b} ${c.minimum.toString()} ${d.unit}`
											return `أصغر من اللازم: يفترض لـ ${c.origin} أن يكون ${b} ${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `نَص غير مقبول: يجب أن يبدأ بـ "${c.prefix}"`
											if ("ends_with" === c.format)
												return `نَص غير مقبول: يجب أن ينتهي بـ "${c.suffix}"`
											if ("includes" === c.format)
												return `نَص غير مقبول: يجب أن يتضمَّن "${c.includes}"`
											if ("regex" === c.format)
												return `نَص غير مقبول: يجب أن يطابق النمط ${c.pattern}`
											return `${b[c.format] ?? c.format} غير مقبول`
										case "not_multiple_of":
											return `رقم غير مقبول: يجب أن يكون من مضاعفات ${c.divisor}`
										case "unrecognized_keys":
											return `معرف${c.keys.length > 1 ? "ات" : ""} غريب${c.keys.length > 1 ? "ة" : ""}: ${E(c.keys, "، ")}`
										case "invalid_key":
											return `معرف غير مقبول في ${c.origin}`
										case "invalid_union":
										default:
											return "مدخل غير مقبول"
										case "invalid_element":
											return `مدخل غير مقبول في ${c.origin}`
									}
								}),
						}
					},
					"az",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "simvol", verb: "olmalıdır" },
									file: { unit: "bayt", verb: "olmalıdır" },
									array: { unit: "element", verb: "olmalıdır" },
									set: { unit: "element", verb: "olmalıdır" },
								}),
								(b = {
									regex: "input",
									email: "email address",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO datetime",
									date: "ISO date",
									time: "ISO time",
									duration: "ISO duration",
									ipv4: "IPv4 address",
									ipv6: "IPv6 address",
									cidrv4: "IPv4 range",
									cidrv6: "IPv6 range",
									base64: "base64-encoded string",
									base64url: "base64url-encoded string",
									json_string: "JSON string",
									e164: "E.164 number",
									jwt: "JWT",
									template_literal: "input",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Yanlış dəyər: g\xf6zlənilən ${c.expected}, daxil olan ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Yanlış dəyər: g\xf6zlənilən ${_(c.values[0])}`
											return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${c.origin ?? "dəyər"} ${b}${c.maximum.toString()} ${d.unit ?? "element"}`
											return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${c.origin ?? "dəyər"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `\xc7ox ki\xe7ik: g\xf6zlənilən ${c.origin} ${b}${c.minimum.toString()} ${d.unit}`
											return `\xc7ox ki\xe7ik: g\xf6zlənilən ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Yanlış mətn: "${c.prefix}" ilə başlamalıdır`
											if ("ends_with" === c.format)
												return `Yanlış mətn: "${c.suffix}" ilə bitməlidir`
											if ("includes" === c.format)
												return `Yanlış mətn: "${c.includes}" daxil olmalıdır`
											if ("regex" === c.format)
												return `Yanlış mətn: ${c.pattern} şablonuna uyğun olmalıdır`
											return `Yanlış ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Yanlış ədəd: ${c.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`
										case "unrecognized_keys":
											return `Tanınmayan a\xe7ar${c.keys.length > 1 ? "lar" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} daxilində yanlış a\xe7ar`
										case "invalid_union":
											return "Yanlış dəyər"
										case "invalid_element":
											return `${c.origin} daxilində yanlış dəyər`
										default:
											return `Yanlış dəyər`
									}
								}),
						}
					},
					"be",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" }, verb: "мець" },
									array: {
										unit: { one: "элемент", few: "элементы", many: "элементаў" },
										verb: "мець",
									},
									set: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" },
									file: { unit: { one: "байт", few: "байты", many: "байтаў" }, verb: "мець" },
								}),
								(b = {
									regex: "увод",
									email: "email адрас",
									url: "URL",
									emoji: "эмодзі",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO дата і час",
									date: "ISO дата",
									time: "ISO час",
									duration: "ISO працягласць",
									ipv4: "IPv4 адрас",
									ipv6: "IPv6 адрас",
									cidrv4: "IPv4 дыяпазон",
									cidrv6: "IPv6 дыяпазон",
									base64: "радок у фармаце base64",
									base64url: "радок у фармаце base64url",
									json_string: "JSON радок",
									e164: "нумар E.164",
									jwt: "JWT",
									template_literal: "увод",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Няправільны ўвод: чакаўся ${c.expected}, атрымана ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "лік"
													case "object":
														if (Array.isArray(a)) return "масіў"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Няправільны ўвод: чакалася ${_(c.values[0])}`
											return `Няправільны варыянт: чакаўся адзін з ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d) {
												let a = c1(Number(c.maximum), d.unit.one, d.unit.few, d.unit.many)
												return `Занадта вялікі: чакалася, што ${c.origin ?? "значэнне"} павінна ${d.verb} ${b}${c.maximum.toString()} ${a}`
											}
											return `Занадта вялікі: чакалася, што ${c.origin ?? "значэнне"} павінна быць ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d) {
												let a = c1(Number(c.minimum), d.unit.one, d.unit.few, d.unit.many)
												return `Занадта малы: чакалася, што ${c.origin} павінна ${d.verb} ${b}${c.minimum.toString()} ${a}`
											}
											return `Занадта малы: чакалася, што ${c.origin} павінна быць ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Няправільны радок: павінен пачынацца з "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Няправільны радок: павінен заканчвацца на "${c.suffix}"`
											if ("includes" === c.format)
												return `Няправільны радок: павінен змяшчаць "${c.includes}"`
											if ("regex" === c.format)
												return `Няправільны радок: павінен адпавядаць шаблону ${c.pattern}`
											return `Няправільны ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Няправільны лік: павінен быць кратным ${c.divisor}`
										case "unrecognized_keys":
											return `Нераспазнаны ${c.keys.length > 1 ? "ключы" : "ключ"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Няправільны ключ у ${c.origin}`
										case "invalid_union":
											return "Няправільны ўвод"
										case "invalid_element":
											return `Няправільнае значэнне ў ${c.origin}`
										default:
											return `Няправільны ўвод`
									}
								}),
						}
					},
					"ca",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caràcters", verb: "contenir" },
									file: { unit: "bytes", verb: "contenir" },
									array: { unit: "elements", verb: "contenir" },
									set: { unit: "elements", verb: "contenir" },
								}),
								(b = {
									regex: "entrada",
									email: "adreça electrònica",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "data i hora ISO",
									date: "data ISO",
									time: "hora ISO",
									duration: "durada ISO",
									ipv4: "adreça IPv4",
									ipv6: "adreça IPv6",
									cidrv4: "rang IPv4",
									cidrv6: "rang IPv6",
									base64: "cadena codificada en base64",
									base64url: "cadena codificada en base64url",
									json_string: "cadena JSON",
									e164: "número E.164",
									jwt: "JWT",
									template_literal: "entrada",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Tipus inv\xe0lid: s'esperava ${c.expected}, s'ha rebut ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Valor inv\xe0lid: s'esperava ${_(c.values[0])}`
											return `Opci\xf3 inv\xe0lida: s'esperava una de ${E(c.values, " o ")}`
										case "too_big": {
											let b = c.inclusive ? "com a màxim" : "menys de",
												d = a[c.origin] ?? null
											if (d)
												return `Massa gran: s'esperava que ${c.origin ?? "el valor"} contingu\xe9s ${b} ${c.maximum.toString()} ${d.unit ?? "elements"}`
											return `Massa gran: s'esperava que ${c.origin ?? "el valor"} fos ${b} ${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? "com a mínim" : "més de",
												d = a[c.origin] ?? null
											if (d)
												return `Massa petit: s'esperava que ${c.origin} contingu\xe9s ${b} ${c.minimum.toString()} ${d.unit}`
											return `Massa petit: s'esperava que ${c.origin} fos ${b} ${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Format inv\xe0lid: ha de comen\xe7ar amb "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Format inv\xe0lid: ha d'acabar amb "${c.suffix}"`
											if ("includes" === c.format)
												return `Format inv\xe0lid: ha d'incloure "${c.includes}"`
											if ("regex" === c.format)
												return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${c.pattern}`
											return `Format inv\xe0lid per a ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${c.divisor}`
										case "unrecognized_keys":
											return `Clau${c.keys.length > 1 ? "s" : ""} no reconeguda${c.keys.length > 1 ? "s" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Clau inv\xe0lida a ${c.origin}`
										case "invalid_union":
											return "Entrada invàlida"
										case "invalid_element":
											return `Element inv\xe0lid a ${c.origin}`
										default:
											return `Entrada inv\xe0lida`
									}
								}),
						}
					},
					"cs",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "znaků", verb: "mít" },
									file: { unit: "bajtů", verb: "mít" },
									array: { unit: "prvků", verb: "mít" },
									set: { unit: "prvků", verb: "mít" },
								}),
								(b = {
									regex: "regulární výraz",
									email: "e-mailová adresa",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "datum a čas ve formátu ISO",
									date: "datum ve formátu ISO",
									time: "čas ve formátu ISO",
									duration: "doba trvání ISO",
									ipv4: "IPv4 adresa",
									ipv6: "IPv6 adresa",
									cidrv4: "rozsah IPv4",
									cidrv6: "rozsah IPv6",
									base64: "řetězec zakódovaný ve formátu base64",
									base64url: "řetězec zakódovaný ve formátu base64url",
									json_string: "řetězec ve formátu JSON",
									e164: "číslo E.164",
									jwt: "JWT",
									template_literal: "vstup",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Neplatn\xfd vstup: oček\xe1v\xe1no ${c.expected}, obdrženo ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "číslo"
													case "string":
														return "řetězec"
													case "boolean":
														return "boolean"
													case "bigint":
														return "bigint"
													case "function":
														return "funkce"
													case "symbol":
														return "symbol"
													case "undefined":
														return "undefined"
													case "object":
														if (Array.isArray(a)) return "pole"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Neplatn\xfd vstup: oček\xe1v\xe1no ${_(c.values[0])}`
											return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Hodnota je př\xedliš velk\xe1: ${c.origin ?? "hodnota"} mus\xed m\xedt ${b}${c.maximum.toString()} ${d.unit ?? "prvků"}`
											return `Hodnota je př\xedliš velk\xe1: ${c.origin ?? "hodnota"} mus\xed b\xfdt ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Hodnota je př\xedliš mal\xe1: ${c.origin ?? "hodnota"} mus\xed m\xedt ${b}${c.minimum.toString()} ${d.unit ?? "prvků"}`
											return `Hodnota je př\xedliš mal\xe1: ${c.origin ?? "hodnota"} mus\xed b\xfdt ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Neplatn\xfd řetězec: mus\xed končit na "${c.suffix}"`
											if ("includes" === c.format)
												return `Neplatn\xfd řetězec: mus\xed obsahovat "${c.includes}"`
											if ("regex" === c.format)
												return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${c.pattern}`
											return `Neplatn\xfd form\xe1t ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${c.divisor}`
										case "unrecognized_keys":
											return `Nezn\xe1m\xe9 kl\xedče: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Neplatn\xfd kl\xedč v ${c.origin}`
										case "invalid_union":
											return "Neplatný vstup"
										case "invalid_element":
											return `Neplatn\xe1 hodnota v ${c.origin}`
										default:
											return `Neplatn\xfd vstup`
									}
								}),
						}
					},
					"de",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "Zeichen", verb: "zu haben" },
									file: { unit: "Bytes", verb: "zu haben" },
									array: { unit: "Elemente", verb: "zu haben" },
									set: { unit: "Elemente", verb: "zu haben" },
								}),
								(b = {
									regex: "Eingabe",
									email: "E-Mail-Adresse",
									url: "URL",
									emoji: "Emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO-Datum und -Uhrzeit",
									date: "ISO-Datum",
									time: "ISO-Uhrzeit",
									duration: "ISO-Dauer",
									ipv4: "IPv4-Adresse",
									ipv6: "IPv6-Adresse",
									cidrv4: "IPv4-Bereich",
									cidrv6: "IPv6-Bereich",
									base64: "Base64-codierter String",
									base64url: "Base64-URL-codierter String",
									json_string: "JSON-String",
									e164: "E.164-Nummer",
									jwt: "JWT",
									template_literal: "Eingabe",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ung\xfcltige Eingabe: erwartet ${c.expected}, erhalten ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "Zahl"
													case "object":
														if (Array.isArray(a)) return "Array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ung\xfcltige Eingabe: erwartet ${_(c.values[0])}`
											return `Ung\xfcltige Option: erwartet eine von ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Zu gro\xdf: erwartet, dass ${c.origin ?? "Wert"} ${b}${c.maximum.toString()} ${d.unit ?? "Elemente"} hat`
											return `Zu gro\xdf: erwartet, dass ${c.origin ?? "Wert"} ${b}${c.maximum.toString()} ist`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Zu klein: erwartet, dass ${c.origin} ${b}${c.minimum.toString()} ${d.unit} hat`
											return `Zu klein: erwartet, dass ${c.origin} ${b}${c.minimum.toString()} ist`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ung\xfcltiger String: muss mit "${c.prefix}" beginnen`
											if ("ends_with" === c.format)
												return `Ung\xfcltiger String: muss mit "${c.suffix}" enden`
											if ("includes" === c.format)
												return `Ung\xfcltiger String: muss "${c.includes}" enthalten`
											if ("regex" === c.format)
												return `Ung\xfcltiger String: muss dem Muster ${c.pattern} entsprechen`
											return `Ung\xfcltig: ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ung\xfcltige Zahl: muss ein Vielfaches von ${c.divisor} sein`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Ung\xfcltiger Schl\xfcssel in ${c.origin}`
										case "invalid_union":
											return "Ungültige Eingabe"
										case "invalid_element":
											return `Ung\xfcltiger Wert in ${c.origin}`
										default:
											return `Ung\xfcltige Eingabe`
									}
								}),
						}
					},
					"en",
					0,
					as,
					"eo",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "karaktrojn", verb: "havi" },
									file: { unit: "bajtojn", verb: "havi" },
									array: { unit: "elementojn", verb: "havi" },
									set: { unit: "elementojn", verb: "havi" },
								}),
								(b = {
									regex: "enigo",
									email: "retadreso",
									url: "URL",
									emoji: "emoĝio",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO-datotempo",
									date: "ISO-dato",
									time: "ISO-tempo",
									duration: "ISO-daŭro",
									ipv4: "IPv4-adreso",
									ipv6: "IPv6-adreso",
									cidrv4: "IPv4-rango",
									cidrv6: "IPv6-rango",
									base64: "64-ume kodita karaktraro",
									base64url: "URL-64-ume kodita karaktraro",
									json_string: "JSON-karaktraro",
									e164: "E.164-nombro",
									jwt: "JWT",
									template_literal: "enigo",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Nevalida enigo: atendiĝis ${c.expected}, riceviĝis ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "nombro"
													case "object":
														if (Array.isArray(a)) return "tabelo"
														if (null === a) return "senvalora"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Nevalida enigo: atendiĝis ${_(c.values[0])}`
											return `Nevalida opcio: atendiĝis unu el ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Tro granda: atendiĝis ke ${c.origin ?? "valoro"} havu ${b}${c.maximum.toString()} ${d.unit ?? "elementojn"}`
											return `Tro granda: atendiĝis ke ${c.origin ?? "valoro"} havu ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Tro malgranda: atendiĝis ke ${c.origin} havu ${b}${c.minimum.toString()} ${d.unit}`
											return `Tro malgranda: atendiĝis ke ${c.origin} estu ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Nevalida karaktraro: devas komenciĝi per "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Nevalida karaktraro: devas finiĝi per "${c.suffix}"`
											if ("includes" === c.format)
												return `Nevalida karaktraro: devas inkluzivi "${c.includes}"`
											if ("regex" === c.format)
												return `Nevalida karaktraro: devas kongrui kun la modelo ${c.pattern}`
											return `Nevalida ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Nevalida nombro: devas esti oblo de ${c.divisor}`
										case "unrecognized_keys":
											return `Nekonata${c.keys.length > 1 ? "j" : ""} ŝlosilo${c.keys.length > 1 ? "j" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Nevalida ŝlosilo en ${c.origin}`
										case "invalid_union":
										default:
											return "Nevalida enigo"
										case "invalid_element":
											return `Nevalida valoro en ${c.origin}`
									}
								}),
						}
					},
					"es",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caracteres", verb: "tener" },
									file: { unit: "bytes", verb: "tener" },
									array: { unit: "elementos", verb: "tener" },
									set: { unit: "elementos", verb: "tener" },
								}),
								(b = {
									regex: "entrada",
									email: "dirección de correo electrónico",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "fecha y hora ISO",
									date: "fecha ISO",
									time: "hora ISO",
									duration: "duración ISO",
									ipv4: "dirección IPv4",
									ipv6: "dirección IPv6",
									cidrv4: "rango IPv4",
									cidrv6: "rango IPv6",
									base64: "cadena codificada en base64",
									base64url: "URL codificada en base64",
									json_string: "cadena JSON",
									e164: "número E.164",
									jwt: "JWT",
									template_literal: "entrada",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Entrada inv\xe1lida: se esperaba ${c.expected}, recibido ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "número"
													case "object":
														if (Array.isArray(a)) return "arreglo"
														if (null === a) return "nulo"
														if (Object.getPrototypeOf(a) !== Object.prototype)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Entrada inv\xe1lida: se esperaba ${_(c.values[0])}`
											return `Opci\xf3n inv\xe1lida: se esperaba una de ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Demasiado grande: se esperaba que ${c.origin ?? "valor"} tuviera ${b}${c.maximum.toString()} ${d.unit ?? "elementos"}`
											return `Demasiado grande: se esperaba que ${c.origin ?? "valor"} fuera ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Demasiado peque\xf1o: se esperaba que ${c.origin} tuviera ${b}${c.minimum.toString()} ${d.unit}`
											return `Demasiado peque\xf1o: se esperaba que ${c.origin} fuera ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Cadena inv\xe1lida: debe comenzar con "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Cadena inv\xe1lida: debe terminar en "${c.suffix}"`
											if ("includes" === c.format)
												return `Cadena inv\xe1lida: debe incluir "${c.includes}"`
											if ("regex" === c.format)
												return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${c.pattern}`
											return `Inv\xe1lido ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${c.divisor}`
										case "unrecognized_keys":
											return `Llave${c.keys.length > 1 ? "s" : ""} desconocida${c.keys.length > 1 ? "s" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Llave inv\xe1lida en ${c.origin}`
										case "invalid_union":
											return "Entrada inválida"
										case "invalid_element":
											return `Valor inv\xe1lido en ${c.origin}`
										default:
											return `Entrada inv\xe1lida`
									}
								}),
						}
					},
					"fa",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "کاراکتر", verb: "داشته باشد" },
									file: { unit: "بایت", verb: "داشته باشد" },
									array: { unit: "آیتم", verb: "داشته باشد" },
									set: { unit: "آیتم", verb: "داشته باشد" },
								}),
								(b = {
									regex: "ورودی",
									email: "آدرس ایمیل",
									url: "URL",
									emoji: "ایموجی",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "تاریخ و زمان ایزو",
									date: "تاریخ ایزو",
									time: "زمان ایزو",
									duration: "مدت زمان ایزو",
									ipv4: "IPv4 آدرس",
									ipv6: "IPv6 آدرس",
									cidrv4: "IPv4 دامنه",
									cidrv6: "IPv6 دامنه",
									base64: "base64-encoded رشته",
									base64url: "base64url-encoded رشته",
									json_string: "JSON رشته",
									e164: "E.164 عدد",
									jwt: "JWT",
									template_literal: "ورودی",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `ورودی نامعتبر: می‌بایست ${c.expected} می‌بود، ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "عدد"
													case "object":
														if (Array.isArray(a)) return "آرایه"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)} دریافت شد`
										case "invalid_value":
											if (1 === c.values.length)
												return `ورودی نامعتبر: می‌بایست ${_(c.values[0])} می‌بود`
											return `گزینه نامعتبر: می‌بایست یکی از ${E(c.values, "|")} می‌بود`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `خیلی بزرگ: ${c.origin ?? "مقدار"} باید ${b}${c.maximum.toString()} ${d.unit ?? "عنصر"} باشد`
											return `خیلی بزرگ: ${c.origin ?? "مقدار"} باید ${b}${c.maximum.toString()} باشد`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `خیلی کوچک: ${c.origin} باید ${b}${c.minimum.toString()} ${d.unit} باشد`
											return `خیلی کوچک: ${c.origin} باید ${b}${c.minimum.toString()} باشد`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `رشته نامعتبر: باید با "${c.prefix}" شروع شود`
											if ("ends_with" === c.format)
												return `رشته نامعتبر: باید با "${c.suffix}" تمام شود`
											if ("includes" === c.format)
												return `رشته نامعتبر: باید شامل "${c.includes}" باشد`
											if ("regex" === c.format)
												return `رشته نامعتبر: باید با الگوی ${c.pattern} مطابقت داشته باشد`
											return `${b[c.format] ?? c.format} نامعتبر`
										case "not_multiple_of":
											return `عدد نامعتبر: باید مضرب ${c.divisor} باشد`
										case "unrecognized_keys":
											return `کلید${c.keys.length > 1 ? "های" : ""} ناشناس: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `کلید ناشناس در ${c.origin}`
										case "invalid_union":
										default:
											return `ورودی نامعتبر`
										case "invalid_element":
											return `مقدار نامعتبر در ${c.origin}`
									}
								}),
						}
					},
					"fi",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "merkkiä", subject: "merkkijonon" },
									file: { unit: "tavua", subject: "tiedoston" },
									array: { unit: "alkiota", subject: "listan" },
									set: { unit: "alkiota", subject: "joukon" },
									number: { unit: "", subject: "luvun" },
									bigint: { unit: "", subject: "suuren kokonaisluvun" },
									int: { unit: "", subject: "kokonaisluvun" },
									date: { unit: "", subject: "päivämäärän" },
								}),
								(b = {
									regex: "säännöllinen lauseke",
									email: "sähköpostiosoite",
									url: "URL-osoite",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO-aikaleima",
									date: "ISO-päivämäärä",
									time: "ISO-aika",
									duration: "ISO-kesto",
									ipv4: "IPv4-osoite",
									ipv6: "IPv6-osoite",
									cidrv4: "IPv4-alue",
									cidrv6: "IPv6-alue",
									base64: "base64-koodattu merkkijono",
									base64url: "base64url-koodattu merkkijono",
									json_string: "JSON-merkkijono",
									e164: "E.164-luku",
									jwt: "JWT",
									template_literal: "templaattimerkkijono",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Virheellinen tyyppi: odotettiin ${c.expected}, oli ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Virheellinen sy\xf6te: t\xe4ytyy olla ${_(c.values[0])}`
											return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Liian suuri: ${d.subject} t\xe4ytyy olla ${b}${c.maximum.toString()} ${d.unit}`.trim()
											return `Liian suuri: arvon t\xe4ytyy olla ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Liian pieni: ${d.subject} t\xe4ytyy olla ${b}${c.minimum.toString()} ${d.unit}`.trim()
											return `Liian pieni: arvon t\xe4ytyy olla ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${c.suffix}"`
											if ("includes" === c.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${c.includes}"`
											if ("regex" === c.format)
												return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${c.pattern}`
											return `Virheellinen ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Virheellinen luku: t\xe4ytyy olla luvun ${c.divisor} monikerta`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return "Virheellinen avain tietueessa"
										case "invalid_union":
											return "Virheellinen unioni"
										case "invalid_element":
											return "Virheellinen arvo joukossa"
										default:
											return `Virheellinen sy\xf6te`
									}
								}),
						}
					},
					"fr",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caractères", verb: "avoir" },
									file: { unit: "octets", verb: "avoir" },
									array: { unit: "éléments", verb: "avoir" },
									set: { unit: "éléments", verb: "avoir" },
								}),
								(b = {
									regex: "entrée",
									email: "adresse e-mail",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "date et heure ISO",
									date: "date ISO",
									time: "heure ISO",
									duration: "durée ISO",
									ipv4: "adresse IPv4",
									ipv6: "adresse IPv6",
									cidrv4: "plage IPv4",
									cidrv6: "plage IPv6",
									base64: "chaîne encodée en base64",
									base64url: "chaîne encodée en base64url",
									json_string: "chaîne JSON",
									e164: "numéro E.164",
									jwt: "JWT",
									template_literal: "entrée",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Entr\xe9e invalide : ${c.expected} attendu, ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "nombre"
													case "object":
														if (Array.isArray(a)) return "tableau"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)} re\xe7u`
										case "invalid_value":
											if (1 === c.values.length)
												return `Entr\xe9e invalide : ${_(c.values[0])} attendu`
											return `Option invalide : une valeur parmi ${E(c.values, "|")} attendue`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Trop grand : ${c.origin ?? "valeur"} doit ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? "élément(s)"}`
											return `Trop grand : ${c.origin ?? "valeur"} doit \xeatre ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Trop petit : ${c.origin} doit ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`
											return `Trop petit : ${c.origin} doit \xeatre ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Cha\xeene invalide : doit commencer par "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Cha\xeene invalide : doit se terminer par "${c.suffix}"`
											if ("includes" === c.format)
												return `Cha\xeene invalide : doit inclure "${c.includes}"`
											if ("regex" === c.format)
												return `Cha\xeene invalide : doit correspondre au mod\xe8le ${c.pattern}`
											return `${b[c.format] ?? c.format} invalide`
										case "not_multiple_of":
											return `Nombre invalide : doit \xeatre un multiple de ${c.divisor}`
										case "unrecognized_keys":
											return `Cl\xe9${c.keys.length > 1 ? "s" : ""} non reconnue${c.keys.length > 1 ? "s" : ""} : ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Cl\xe9 invalide dans ${c.origin}`
										case "invalid_union":
											return "Entrée invalide"
										case "invalid_element":
											return `Valeur invalide dans ${c.origin}`
										default:
											return `Entr\xe9e invalide`
									}
								}),
						}
					},
					"frCA",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caractères", verb: "avoir" },
									file: { unit: "octets", verb: "avoir" },
									array: { unit: "éléments", verb: "avoir" },
									set: { unit: "éléments", verb: "avoir" },
								}),
								(b = {
									regex: "entrée",
									email: "adresse courriel",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "date-heure ISO",
									date: "date ISO",
									time: "heure ISO",
									duration: "durée ISO",
									ipv4: "adresse IPv4",
									ipv6: "adresse IPv6",
									cidrv4: "plage IPv4",
									cidrv6: "plage IPv6",
									base64: "chaîne encodée en base64",
									base64url: "chaîne encodée en base64url",
									json_string: "chaîne JSON",
									e164: "numéro E.164",
									jwt: "JWT",
									template_literal: "entrée",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Entr\xe9e invalide : attendu ${c.expected}, re\xe7u ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Entr\xe9e invalide : attendu ${_(c.values[0])}`
											return `Option invalide : attendu l'une des valeurs suivantes ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "≤" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Trop grand : attendu que ${c.origin ?? "la valeur"} ait ${b}${c.maximum.toString()} ${d.unit}`
											return `Trop grand : attendu que ${c.origin ?? "la valeur"} soit ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? "≥" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Trop petit : attendu que ${c.origin} ait ${b}${c.minimum.toString()} ${d.unit}`
											return `Trop petit : attendu que ${c.origin} soit ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Cha\xeene invalide : doit commencer par "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Cha\xeene invalide : doit se terminer par "${c.suffix}"`
											if ("includes" === c.format)
												return `Cha\xeene invalide : doit inclure "${c.includes}"`
											if ("regex" === c.format)
												return `Cha\xeene invalide : doit correspondre au motif ${c.pattern}`
											return `${b[c.format] ?? c.format} invalide`
										case "not_multiple_of":
											return `Nombre invalide : doit \xeatre un multiple de ${c.divisor}`
										case "unrecognized_keys":
											return `Cl\xe9${c.keys.length > 1 ? "s" : ""} non reconnue${c.keys.length > 1 ? "s" : ""} : ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Cl\xe9 invalide dans ${c.origin}`
										case "invalid_union":
											return "Entrée invalide"
										case "invalid_element":
											return `Valeur invalide dans ${c.origin}`
										default:
											return `Entr\xe9e invalide`
									}
								}),
						}
					},
					"he",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "אותיות", verb: "לכלול" },
									file: { unit: "בייטים", verb: "לכלול" },
									array: { unit: "פריטים", verb: "לכלול" },
									set: { unit: "פריטים", verb: "לכלול" },
								}),
								(b = {
									regex: "קלט",
									email: "כתובת אימייל",
									url: "כתובת רשת",
									emoji: "אימוג'י",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "תאריך וזמן ISO",
									date: "תאריך ISO",
									time: "זמן ISO",
									duration: "משך זמן ISO",
									ipv4: "כתובת IPv4",
									ipv6: "כתובת IPv6",
									cidrv4: "טווח IPv4",
									cidrv6: "טווח IPv6",
									base64: "מחרוזת בבסיס 64",
									base64url: "מחרוזת בבסיס 64 לכתובות רשת",
									json_string: "מחרוזת JSON",
									e164: "מספר E.164",
									jwt: "JWT",
									template_literal: "קלט",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `קלט לא תקין: צריך ${c.expected}, התקבל ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length) return `קלט לא תקין: צריך ${_(c.values[0])}`
											return `קלט לא תקין: צריך אחת מהאפשרויות  ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `גדול מדי: ${c.origin ?? "value"} צריך להיות ${b}${c.maximum.toString()} ${d.unit ?? "elements"}`
											return `גדול מדי: ${c.origin ?? "value"} צריך להיות ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `קטן מדי: ${c.origin} צריך להיות ${b}${c.minimum.toString()} ${d.unit}`
											return `קטן מדי: ${c.origin} צריך להיות ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `מחרוזת לא תקינה: חייבת להתחיל ב"${c.prefix}"`
											if ("ends_with" === c.format)
												return `מחרוזת לא תקינה: חייבת להסתיים ב "${c.suffix}"`
											if ("includes" === c.format)
												return `מחרוזת לא תקינה: חייבת לכלול "${c.includes}"`
											if ("regex" === c.format)
												return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${c.pattern}`
											return `${b[c.format] ?? c.format} לא תקין`
										case "not_multiple_of":
											return `מספר לא תקין: חייב להיות מכפלה של ${c.divisor}`
										case "unrecognized_keys":
											return `מפתח${c.keys.length > 1 ? "ות" : ""} לא מזוה${c.keys.length > 1 ? "ים" : "ה"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `מפתח לא תקין ב${c.origin}`
										case "invalid_union":
											return "קלט לא תקין"
										case "invalid_element":
											return `ערך לא תקין ב${c.origin}`
										default:
											return `קלט לא תקין`
									}
								}),
						}
					},
					"hu",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "karakter", verb: "legyen" },
									file: { unit: "byte", verb: "legyen" },
									array: { unit: "elem", verb: "legyen" },
									set: { unit: "elem", verb: "legyen" },
								}),
								(b = {
									regex: "bemenet",
									email: "email cím",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO időbélyeg",
									date: "ISO dátum",
									time: "ISO idő",
									duration: "ISO időintervallum",
									ipv4: "IPv4 cím",
									ipv6: "IPv6 cím",
									cidrv4: "IPv4 tartomány",
									cidrv6: "IPv6 tartomány",
									base64: "base64-kódolt string",
									base64url: "base64url-kódolt string",
									json_string: "JSON string",
									e164: "E.164 szám",
									jwt: "JWT",
									template_literal: "bemenet",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${c.expected}, a kapott \xe9rt\xe9k ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "szám"
													case "object":
														if (Array.isArray(a)) return "tömb"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${_(c.values[0])}`
											return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `T\xfal nagy: ${c.origin ?? "érték"} m\xe9rete t\xfal nagy ${b}${c.maximum.toString()} ${d.unit ?? "elem"}`
											return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${c.origin ?? "érték"} t\xfal nagy: ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${c.origin} m\xe9rete t\xfal kicsi ${b}${c.minimum.toString()} ${d.unit}`
											return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${c.origin} t\xfal kicsi ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `\xc9rv\xe9nytelen string: "${c.prefix}" \xe9rt\xe9kkel kell kezdődnie`
											if ("ends_with" === c.format)
												return `\xc9rv\xe9nytelen string: "${c.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`
											if ("includes" === c.format)
												return `\xc9rv\xe9nytelen string: "${c.includes}" \xe9rt\xe9ket kell tartalmaznia`
											if ("regex" === c.format)
												return `\xc9rv\xe9nytelen string: ${c.pattern} mint\xe1nak kell megfelelnie`
											return `\xc9rv\xe9nytelen ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `\xc9rv\xe9nytelen sz\xe1m: ${c.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`
										case "unrecognized_keys":
											return `Ismeretlen kulcs${c.keys.length > 1 ? "s" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `\xc9rv\xe9nytelen kulcs ${c.origin}`
										case "invalid_union":
											return "Érvénytelen bemenet"
										case "invalid_element":
											return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${c.origin}`
										default:
											return `\xc9rv\xe9nytelen bemenet`
									}
								}),
						}
					},
					"id",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "karakter", verb: "memiliki" },
									file: { unit: "byte", verb: "memiliki" },
									array: { unit: "item", verb: "memiliki" },
									set: { unit: "item", verb: "memiliki" },
								}),
								(b = {
									regex: "input",
									email: "alamat email",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "tanggal dan waktu format ISO",
									date: "tanggal format ISO",
									time: "jam format ISO",
									duration: "durasi format ISO",
									ipv4: "alamat IPv4",
									ipv6: "alamat IPv6",
									cidrv4: "rentang alamat IPv4",
									cidrv6: "rentang alamat IPv6",
									base64: "string dengan enkode base64",
									base64url: "string dengan enkode base64url",
									json_string: "string JSON",
									e164: "angka E.164",
									jwt: "JWT",
									template_literal: "input",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Input tidak valid: diharapkan ${c.expected}, diterima ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Input tidak valid: diharapkan ${_(c.values[0])}`
											return `Pilihan tidak valid: diharapkan salah satu dari ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Terlalu besar: diharapkan ${c.origin ?? "value"} memiliki ${b}${c.maximum.toString()} ${d.unit ?? "elemen"}`
											return `Terlalu besar: diharapkan ${c.origin ?? "value"} menjadi ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Terlalu kecil: diharapkan ${c.origin} memiliki ${b}${c.minimum.toString()} ${d.unit}`
											return `Terlalu kecil: diharapkan ${c.origin} menjadi ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `String tidak valid: harus dimulai dengan "${c.prefix}"`
											if ("ends_with" === c.format)
												return `String tidak valid: harus berakhir dengan "${c.suffix}"`
											if ("includes" === c.format)
												return `String tidak valid: harus menyertakan "${c.includes}"`
											if ("regex" === c.format)
												return `String tidak valid: harus sesuai pola ${c.pattern}`
											return `${b[c.format] ?? c.format} tidak valid`
										case "not_multiple_of":
											return `Angka tidak valid: harus kelipatan dari ${c.divisor}`
										case "unrecognized_keys":
											return `Kunci tidak dikenali ${c.keys.length > 1 ? "s" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Kunci tidak valid di ${c.origin}`
										case "invalid_union":
										default:
											return "Input tidak valid"
										case "invalid_element":
											return `Nilai tidak valid di ${c.origin}`
									}
								}),
						}
					},
					"it",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caratteri", verb: "avere" },
									file: { unit: "byte", verb: "avere" },
									array: { unit: "elementi", verb: "avere" },
									set: { unit: "elementi", verb: "avere" },
								}),
								(b = {
									regex: "input",
									email: "indirizzo email",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "data e ora ISO",
									date: "data ISO",
									time: "ora ISO",
									duration: "durata ISO",
									ipv4: "indirizzo IPv4",
									ipv6: "indirizzo IPv6",
									cidrv4: "intervallo IPv4",
									cidrv6: "intervallo IPv6",
									base64: "stringa codificata in base64",
									base64url: "URL codificata in base64",
									json_string: "stringa JSON",
									e164: "numero E.164",
									jwt: "JWT",
									template_literal: "input",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Input non valido: atteso ${c.expected}, ricevuto ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "numero"
													case "object":
														if (Array.isArray(a)) return "vettore"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Input non valido: atteso ${_(c.values[0])}`
											return `Opzione non valida: atteso uno tra ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Troppo grande: ${c.origin ?? "valore"} deve avere ${b}${c.maximum.toString()} ${d.unit ?? "elementi"}`
											return `Troppo grande: ${c.origin ?? "valore"} deve essere ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Troppo piccolo: ${c.origin} deve avere ${b}${c.minimum.toString()} ${d.unit}`
											return `Troppo piccolo: ${c.origin} deve essere ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Stringa non valida: deve iniziare con "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Stringa non valida: deve terminare con "${c.suffix}"`
											if ("includes" === c.format)
												return `Stringa non valida: deve includere "${c.includes}"`
											if ("regex" === c.format)
												return `Stringa non valida: deve corrispondere al pattern ${c.pattern}`
											return `Invalid ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Numero non valido: deve essere un multiplo di ${c.divisor}`
										case "unrecognized_keys":
											return `Chiav${c.keys.length > 1 ? "i" : "e"} non riconosciut${c.keys.length > 1 ? "e" : "a"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Chiave non valida in ${c.origin}`
										case "invalid_union":
										default:
											return "Input non valido"
										case "invalid_element":
											return `Valore non valido in ${c.origin}`
									}
								}),
						}
					},
					"ja",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "文字", verb: "である" },
									file: { unit: "バイト", verb: "である" },
									array: { unit: "要素", verb: "である" },
									set: { unit: "要素", verb: "である" },
								}),
								(b = {
									regex: "入力値",
									email: "メールアドレス",
									url: "URL",
									emoji: "絵文字",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO日時",
									date: "ISO日付",
									time: "ISO時刻",
									duration: "ISO期間",
									ipv4: "IPv4アドレス",
									ipv6: "IPv6アドレス",
									cidrv4: "IPv4範囲",
									cidrv6: "IPv6範囲",
									base64: "base64エンコード文字列",
									base64url: "base64urlエンコード文字列",
									json_string: "JSON文字列",
									e164: "E.164番号",
									jwt: "JWT",
									template_literal: "入力値",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `無効な入力: ${c.expected}が期待されましたが、${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "数値"
													case "object":
														if (Array.isArray(a)) return "配列"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}が入力されました`
										case "invalid_value":
											if (1 === c.values.length)
												return `無効な入力: ${_(c.values[0])}が期待されました`
											return `無効な選択: ${E(c.values, "、")}のいずれかである必要があります`
										case "too_big": {
											let b = c.inclusive ? "以下である" : "より小さい",
												d = a[c.origin] ?? null
											if (d)
												return `大きすぎる値: ${c.origin ?? "値"}は${c.maximum.toString()}${d.unit ?? "要素"}${b}必要があります`
											return `大きすぎる値: ${c.origin ?? "値"}は${c.maximum.toString()}${b}必要があります`
										}
										case "too_small": {
											let b = c.inclusive ? "以上である" : "より大きい",
												d = a[c.origin] ?? null
											if (d)
												return `小さすぎる値: ${c.origin}は${c.minimum.toString()}${d.unit}${b}必要があります`
											return `小さすぎる値: ${c.origin}は${c.minimum.toString()}${b}必要があります`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `無効な文字列: "${c.prefix}"で始まる必要があります`
											if ("ends_with" === c.format)
												return `無効な文字列: "${c.suffix}"で終わる必要があります`
											if ("includes" === c.format)
												return `無効な文字列: "${c.includes}"を含む必要があります`
											if ("regex" === c.format)
												return `無効な文字列: パターン${c.pattern}に一致する必要があります`
											return `無効な${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `無効な数値: ${c.divisor}の倍数である必要があります`
										case "unrecognized_keys":
											return `認識されていないキー${c.keys.length > 1 ? "群" : ""}: ${E(c.keys, "、")}`
										case "invalid_key":
											return `${c.origin}内の無効なキー`
										case "invalid_union":
											return "無効な入力"
										case "invalid_element":
											return `${c.origin}内の無効な値`
										default:
											return `無効な入力`
									}
								}),
						}
					},
					"kh",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "តួអក្សរ", verb: "គួរមាន" },
									file: { unit: "បៃ", verb: "គួរមាន" },
									array: { unit: "ធាតុ", verb: "គួរមាន" },
									set: { unit: "ធាតុ", verb: "គួរមាន" },
								}),
								(b = {
									regex: "ទិន្នន័យបញ្ចូល",
									email: "អាសយដ្ឋានអ៊ីមែល",
									url: "URL",
									emoji: "សញ្ញាអារម្មណ៍",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
									date: "កាលបរិច្ឆេទ ISO",
									time: "ម៉ោង ISO",
									duration: "រយៈពេល ISO",
									ipv4: "អាសយដ្ឋាន IPv4",
									ipv6: "អាសយដ្ឋាន IPv6",
									cidrv4: "ដែនអាសយដ្ឋាន IPv4",
									cidrv6: "ដែនអាសយដ្ឋាន IPv6",
									base64: "ខ្សែអក្សរអ៊ិកូដ base64",
									base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
									json_string: "ខ្សែអក្សរ JSON",
									e164: "លេខ E.164",
									jwt: "JWT",
									template_literal: "ទិន្នន័យបញ្ចូល",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${c.expected} ប៉ុន្តែទទួលបាន ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "មិនមែនជាលេខ (NaN)" : "លេខ"
													case "object":
														if (Array.isArray(a)) return "អារេ (Array)"
														if (null === a) return "គ្មានតម្លៃ (null)"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${_(c.values[0])}`
											return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `ធំពេក៖ ត្រូវការ ${c.origin ?? "តម្លៃ"} ${b} ${c.maximum.toString()} ${d.unit ?? "ធាតុ"}`
											return `ធំពេក៖ ត្រូវការ ${c.origin ?? "តម្លៃ"} ${b} ${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `តូចពេក៖ ត្រូវការ ${c.origin} ${b} ${c.minimum.toString()} ${d.unit}`
											return `តូចពេក៖ ត្រូវការ ${c.origin} ${b} ${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${c.prefix}"`
											if ("ends_with" === c.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${c.suffix}"`
											if ("includes" === c.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${c.includes}"`
											if ("regex" === c.format)
												return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${c.pattern}`
											return `មិនត្រឹមត្រូវ៖ ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${c.divisor}`
										case "unrecognized_keys":
											return `រកឃើញសោមិនស្គាល់៖ ${E(c.keys, ", ")}`
										case "invalid_key":
											return `សោមិនត្រឹមត្រូវនៅក្នុង ${c.origin}`
										case "invalid_union":
										default:
											return `ទិន្នន័យមិនត្រឹមត្រូវ`
										case "invalid_element":
											return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${c.origin}`
									}
								}),
						}
					},
					"ko",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "문자", verb: "to have" },
									file: { unit: "바이트", verb: "to have" },
									array: { unit: "개", verb: "to have" },
									set: { unit: "개", verb: "to have" },
								}),
								(b = {
									regex: "입력",
									email: "이메일 주소",
									url: "URL",
									emoji: "이모지",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO 날짜시간",
									date: "ISO 날짜",
									time: "ISO 시간",
									duration: "ISO 기간",
									ipv4: "IPv4 주소",
									ipv6: "IPv6 주소",
									cidrv4: "IPv4 범위",
									cidrv6: "IPv6 범위",
									base64: "base64 인코딩 문자열",
									base64url: "base64url 인코딩 문자열",
									json_string: "JSON 문자열",
									e164: "E.164 번호",
									jwt: "JWT",
									template_literal: "입력",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `잘못된 입력: 예상 타입은 ${c.expected}, 받은 타입은 ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}입니다`
										case "invalid_value":
											if (1 === c.values.length)
												return `잘못된 입력: 값은 ${_(c.values[0])} 이어야 합니다`
											return `잘못된 옵션: ${E(c.values, "또는 ")} 중 하나여야 합니다`
										case "too_big": {
											let b = c.inclusive ? "이하" : "미만",
												d = "미만" === b ? "이어야 합니다" : "여야 합니다",
												e = a[c.origin] ?? null,
												f = e?.unit ?? "요소"
											if (e)
												return `${c.origin ?? "값"}이 너무 큽니다: ${c.maximum.toString()}${f} ${b}${d}`
											return `${c.origin ?? "값"}이 너무 큽니다: ${c.maximum.toString()} ${b}${d}`
										}
										case "too_small": {
											let b = c.inclusive ? "이상" : "초과",
												d = "이상" === b ? "이어야 합니다" : "여야 합니다",
												e = a[c.origin] ?? null,
												f = e?.unit ?? "요소"
											if (e)
												return `${c.origin ?? "값"}이 너무 작습니다: ${c.minimum.toString()}${f} ${b}${d}`
											return `${c.origin ?? "값"}이 너무 작습니다: ${c.minimum.toString()} ${b}${d}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `잘못된 문자열: "${c.prefix}"(으)로 시작해야 합니다`
											if ("ends_with" === c.format)
												return `잘못된 문자열: "${c.suffix}"(으)로 끝나야 합니다`
											if ("includes" === c.format)
												return `잘못된 문자열: "${c.includes}"을(를) 포함해야 합니다`
											if ("regex" === c.format)
												return `잘못된 문자열: 정규식 ${c.pattern} 패턴과 일치해야 합니다`
											return `잘못된 ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `잘못된 숫자: ${c.divisor}의 배수여야 합니다`
										case "unrecognized_keys":
											return `인식할 수 없는 키: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `잘못된 키: ${c.origin}`
										case "invalid_union":
										default:
											return `잘못된 입력`
										case "invalid_element":
											return `잘못된 값: ${c.origin}`
									}
								}),
						}
					},
					"mk",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "знаци", verb: "да имаат" },
									file: { unit: "бајти", verb: "да имаат" },
									array: { unit: "ставки", verb: "да имаат" },
									set: { unit: "ставки", verb: "да имаат" },
								}),
								(b = {
									regex: "внес",
									email: "адреса на е-пошта",
									url: "URL",
									emoji: "емоџи",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO датум и време",
									date: "ISO датум",
									time: "ISO време",
									duration: "ISO времетраење",
									ipv4: "IPv4 адреса",
									ipv6: "IPv6 адреса",
									cidrv4: "IPv4 опсег",
									cidrv6: "IPv6 опсег",
									base64: "base64-енкодирана низа",
									base64url: "base64url-енкодирана низа",
									json_string: "JSON низа",
									e164: "E.164 број",
									jwt: "JWT",
									template_literal: "внес",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Грешен внес: се очекува ${c.expected}, примено ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "број"
													case "object":
														if (Array.isArray(a)) return "низа"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Invalid input: expected ${_(c.values[0])}`
											return `Грешана опција: се очекува една ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Премногу голем: се очекува ${c.origin ?? "вредноста"} да има ${b}${c.maximum.toString()} ${d.unit ?? "елементи"}`
											return `Премногу голем: се очекува ${c.origin ?? "вредноста"} да биде ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Премногу мал: се очекува ${c.origin} да има ${b}${c.minimum.toString()} ${d.unit}`
											return `Премногу мал: се очекува ${c.origin} да биде ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Неважечка низа: мора да започнува со "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Неважечка низа: мора да завршува со "${c.suffix}"`
											if ("includes" === c.format)
												return `Неважечка низа: мора да вклучува "${c.includes}"`
											if ("regex" === c.format)
												return `Неважечка низа: мора да одгоара на патернот ${c.pattern}`
											return `Invalid ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Грешен број: мора да биде делив со ${c.divisor}`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Грешен клуч во ${c.origin}`
										case "invalid_union":
											return "Грешен внес"
										case "invalid_element":
											return `Грешна вредност во ${c.origin}`
										default:
											return `Грешен внес`
									}
								}),
						}
					},
					"ms",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "aksara", verb: "mempunyai" },
									file: { unit: "bait", verb: "mempunyai" },
									array: { unit: "elemen", verb: "mempunyai" },
									set: { unit: "elemen", verb: "mempunyai" },
								}),
								(b = {
									regex: "input",
									email: "alamat e-mel",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "tarikh masa ISO",
									date: "tarikh ISO",
									time: "masa ISO",
									duration: "tempoh ISO",
									ipv4: "alamat IPv4",
									ipv6: "alamat IPv6",
									cidrv4: "julat IPv4",
									cidrv6: "julat IPv6",
									base64: "string dikodkan base64",
									base64url: "string dikodkan base64url",
									json_string: "string JSON",
									e164: "nombor E.164",
									jwt: "JWT",
									template_literal: "input",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Input tidak sah: dijangka ${c.expected}, diterima ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "nombor"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Input tidak sah: dijangka ${_(c.values[0])}`
											return `Pilihan tidak sah: dijangka salah satu daripada ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Terlalu besar: dijangka ${c.origin ?? "nilai"} ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? "elemen"}`
											return `Terlalu besar: dijangka ${c.origin ?? "nilai"} adalah ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Terlalu kecil: dijangka ${c.origin} ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`
											return `Terlalu kecil: dijangka ${c.origin} adalah ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `String tidak sah: mesti bermula dengan "${c.prefix}"`
											if ("ends_with" === c.format)
												return `String tidak sah: mesti berakhir dengan "${c.suffix}"`
											if ("includes" === c.format)
												return `String tidak sah: mesti mengandungi "${c.includes}"`
											if ("regex" === c.format)
												return `String tidak sah: mesti sepadan dengan corak ${c.pattern}`
											return `${b[c.format] ?? c.format} tidak sah`
										case "not_multiple_of":
											return `Nombor tidak sah: perlu gandaan ${c.divisor}`
										case "unrecognized_keys":
											return `Kunci tidak dikenali: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Kunci tidak sah dalam ${c.origin}`
										case "invalid_union":
										default:
											return "Input tidak sah"
										case "invalid_element":
											return `Nilai tidak sah dalam ${c.origin}`
									}
								}),
						}
					},
					"nl",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "tekens" },
									file: { unit: "bytes" },
									array: { unit: "elementen" },
									set: { unit: "elementen" },
								}),
								(b = {
									regex: "invoer",
									email: "emailadres",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO datum en tijd",
									date: "ISO datum",
									time: "ISO tijd",
									duration: "ISO duur",
									ipv4: "IPv4-adres",
									ipv6: "IPv6-adres",
									cidrv4: "IPv4-bereik",
									cidrv6: "IPv6-bereik",
									base64: "base64-gecodeerde tekst",
									base64url: "base64 URL-gecodeerde tekst",
									json_string: "JSON string",
									e164: "E.164-nummer",
									jwt: "JWT",
									template_literal: "invoer",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ongeldige invoer: verwacht ${c.expected}, ontving ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "getal"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ongeldige invoer: verwacht ${_(c.values[0])}`
											return `Ongeldige optie: verwacht \xe9\xe9n van ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Te lang: verwacht dat ${c.origin ?? "waarde"} ${b}${c.maximum.toString()} ${d.unit ?? "elementen"} bevat`
											return `Te lang: verwacht dat ${c.origin ?? "waarde"} ${b}${c.maximum.toString()} is`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Te kort: verwacht dat ${c.origin} ${b}${c.minimum.toString()} ${d.unit} bevat`
											return `Te kort: verwacht dat ${c.origin} ${b}${c.minimum.toString()} is`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ongeldige tekst: moet met "${c.prefix}" beginnen`
											if ("ends_with" === c.format)
												return `Ongeldige tekst: moet op "${c.suffix}" eindigen`
											if ("includes" === c.format)
												return `Ongeldige tekst: moet "${c.includes}" bevatten`
											if ("regex" === c.format)
												return `Ongeldige tekst: moet overeenkomen met patroon ${c.pattern}`
											return `Ongeldig: ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ongeldig getal: moet een veelvoud van ${c.divisor} zijn`
										case "unrecognized_keys":
											return `Onbekende key${c.keys.length > 1 ? "s" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Ongeldige key in ${c.origin}`
										case "invalid_union":
										default:
											return "Ongeldige invoer"
										case "invalid_element":
											return `Ongeldige waarde in ${c.origin}`
									}
								}),
						}
					},
					"no",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "tegn", verb: "å ha" },
									file: { unit: "bytes", verb: "å ha" },
									array: { unit: "elementer", verb: "å inneholde" },
									set: { unit: "elementer", verb: "å inneholde" },
								}),
								(b = {
									regex: "input",
									email: "e-postadresse",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO dato- og klokkeslett",
									date: "ISO-dato",
									time: "ISO-klokkeslett",
									duration: "ISO-varighet",
									ipv4: "IPv4-område",
									ipv6: "IPv6-område",
									cidrv4: "IPv4-spekter",
									cidrv6: "IPv6-spekter",
									base64: "base64-enkodet streng",
									base64url: "base64url-enkodet streng",
									json_string: "JSON-streng",
									e164: "E.164-nummer",
									jwt: "JWT",
									template_literal: "input",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ugyldig input: forventet ${c.expected}, fikk ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "tall"
													case "object":
														if (Array.isArray(a)) return "liste"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ugyldig verdi: forventet ${_(c.values[0])}`
											return `Ugyldig valg: forventet en av ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `For stor(t): forventet ${c.origin ?? "value"} til \xe5 ha ${b}${c.maximum.toString()} ${d.unit ?? "elementer"}`
											return `For stor(t): forventet ${c.origin ?? "value"} til \xe5 ha ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `For lite(n): forventet ${c.origin} til \xe5 ha ${b}${c.minimum.toString()} ${d.unit}`
											return `For lite(n): forventet ${c.origin} til \xe5 ha ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ugyldig streng: m\xe5 starte med "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Ugyldig streng: m\xe5 ende med "${c.suffix}"`
											if ("includes" === c.format)
												return `Ugyldig streng: m\xe5 inneholde "${c.includes}"`
											if ("regex" === c.format)
												return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${c.pattern}`
											return `Ugyldig ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${c.divisor}`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Ugyldig n\xf8kkel i ${c.origin}`
										case "invalid_union":
										default:
											return "Ugyldig input"
										case "invalid_element":
											return `Ugyldig verdi i ${c.origin}`
									}
								}),
						}
					},
					"ota",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "harf", verb: "olmalıdır" },
									file: { unit: "bayt", verb: "olmalıdır" },
									array: { unit: "unsur", verb: "olmalıdır" },
									set: { unit: "unsur", verb: "olmalıdır" },
								}),
								(b = {
									regex: "giren",
									email: "epostagâh",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO hengâmı",
									date: "ISO tarihi",
									time: "ISO zamanı",
									duration: "ISO müddeti",
									ipv4: "IPv4 nişânı",
									ipv6: "IPv6 nişânı",
									cidrv4: "IPv4 menzili",
									cidrv6: "IPv6 menzili",
									base64: "base64-şifreli metin",
									base64url: "base64url-şifreli metin",
									json_string: "JSON metin",
									e164: "E.164 sayısı",
									jwt: "JWT",
									template_literal: "giren",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `F\xe2sit giren: umulan ${c.expected}, alınan ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "numara"
													case "object":
														if (Array.isArray(a)) return "saf"
														if (null === a) return "gayb"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length) return `F\xe2sit giren: umulan ${_(c.values[0])}`
											return `F\xe2sit tercih: m\xfbteberler ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Fazla b\xfcy\xfck: ${c.origin ?? "value"}, ${b}${c.maximum.toString()} ${d.unit ?? "elements"} sahip olmalıydı.`
											return `Fazla b\xfcy\xfck: ${c.origin ?? "value"}, ${b}${c.maximum.toString()} olmalıydı.`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Fazla k\xfc\xe7\xfck: ${c.origin}, ${b}${c.minimum.toString()} ${d.unit} sahip olmalıydı.`
											return `Fazla k\xfc\xe7\xfck: ${c.origin}, ${b}${c.minimum.toString()} olmalıydı.`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `F\xe2sit metin: "${c.prefix}" ile başlamalı.`
											if ("ends_with" === c.format)
												return `F\xe2sit metin: "${c.suffix}" ile bitmeli.`
											if ("includes" === c.format)
												return `F\xe2sit metin: "${c.includes}" ihtiv\xe2 etmeli.`
											if ("regex" === c.format)
												return `F\xe2sit metin: ${c.pattern} nakşına uymalı.`
											return `F\xe2sit ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `F\xe2sit sayı: ${c.divisor} katı olmalıydı.`
										case "unrecognized_keys":
											return `Tanınmayan anahtar ${c.keys.length > 1 ? "s" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} i\xe7in tanınmayan anahtar var.`
										case "invalid_union":
											return "Giren tanınamadı."
										case "invalid_element":
											return `${c.origin} i\xe7in tanınmayan kıymet var.`
										default:
											return `Kıymet tanınamadı.`
									}
								}),
						}
					},
					"pl",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "znaków", verb: "mieć" },
									file: { unit: "bajtów", verb: "mieć" },
									array: { unit: "elementów", verb: "mieć" },
									set: { unit: "elementów", verb: "mieć" },
								}),
								(b = {
									regex: "wyrażenie",
									email: "adres email",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "data i godzina w formacie ISO",
									date: "data w formacie ISO",
									time: "godzina w formacie ISO",
									duration: "czas trwania ISO",
									ipv4: "adres IPv4",
									ipv6: "adres IPv6",
									cidrv4: "zakres IPv4",
									cidrv6: "zakres IPv6",
									base64: "ciąg znaków zakodowany w formacie base64",
									base64url: "ciąg znaków zakodowany w formacie base64url",
									json_string: "ciąg znaków w formacie JSON",
									e164: "liczba E.164",
									jwt: "JWT",
									template_literal: "wejście",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Nieprawidłowe dane wejściowe: oczekiwano ${c.expected}, otrzymano ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "liczba"
													case "object":
														if (Array.isArray(a)) return "tablica"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Nieprawidłowe dane wejściowe: oczekiwano ${_(c.values[0])}`
											return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Za duża wartość: oczekiwano, że ${c.origin ?? "wartość"} będzie mieć ${b}${c.maximum.toString()} ${d.unit ?? "elementów"}`
											return `Zbyt duż(y/a/e): oczekiwano, że ${c.origin ?? "wartość"} będzie wynosić ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Za mała wartość: oczekiwano, że ${c.origin ?? "wartość"} będzie mieć ${b}${c.minimum.toString()} ${d.unit ?? "elementów"}`
											return `Zbyt mał(y/a/e): oczekiwano, że ${c.origin ?? "wartość"} będzie wynosić ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${c.suffix}"`
											if ("includes" === c.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${c.includes}"`
											if ("regex" === c.format)
												return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${c.pattern}`
											return `Nieprawidłow(y/a/e) ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Nieprawidłowa liczba: musi być wielokrotnością ${c.divisor}`
										case "unrecognized_keys":
											return `Nierozpoznane klucze${c.keys.length > 1 ? "s" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Nieprawidłowy klucz w ${c.origin}`
										case "invalid_union":
											return "Nieprawidłowe dane wejściowe"
										case "invalid_element":
											return `Nieprawidłowa wartość w ${c.origin}`
										default:
											return `Nieprawidłowe dane wejściowe`
									}
								}),
						}
					},
					"ps",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "توکي", verb: "ولري" },
									file: { unit: "بایټس", verb: "ولري" },
									array: { unit: "توکي", verb: "ولري" },
									set: { unit: "توکي", verb: "ولري" },
								}),
								(b = {
									regex: "ورودي",
									email: "بریښنالیک",
									url: "یو آر ال",
									emoji: "ایموجي",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "نیټه او وخت",
									date: "نېټه",
									time: "وخت",
									duration: "موده",
									ipv4: "د IPv4 پته",
									ipv6: "د IPv6 پته",
									cidrv4: "د IPv4 ساحه",
									cidrv6: "د IPv6 ساحه",
									base64: "base64-encoded متن",
									base64url: "base64url-encoded متن",
									json_string: "JSON متن",
									e164: "د E.164 شمېره",
									jwt: "JWT",
									template_literal: "ورودي",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `ناسم ورودي: باید ${c.expected} وای, مګر ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "عدد"
													case "object":
														if (Array.isArray(a)) return "ارې"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)} ترلاسه شو`
										case "invalid_value":
											if (1 === c.values.length) return `ناسم ورودي: باید ${_(c.values[0])} وای`
											return `ناسم انتخاب: باید یو له ${E(c.values, "|")} څخه وای`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `ډیر لوی: ${c.origin ?? "ارزښت"} باید ${b}${c.maximum.toString()} ${d.unit ?? "عنصرونه"} ولري`
											return `ډیر لوی: ${c.origin ?? "ارزښت"} باید ${b}${c.maximum.toString()} وي`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `ډیر کوچنی: ${c.origin} باید ${b}${c.minimum.toString()} ${d.unit} ولري`
											return `ډیر کوچنی: ${c.origin} باید ${b}${c.minimum.toString()} وي`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `ناسم متن: باید د "${c.prefix}" سره پیل شي`
											if ("ends_with" === c.format)
												return `ناسم متن: باید د "${c.suffix}" سره پای ته ورسيږي`
											if ("includes" === c.format) return `ناسم متن: باید "${c.includes}" ولري`
											if ("regex" === c.format)
												return `ناسم متن: باید د ${c.pattern} سره مطابقت ولري`
											return `${b[c.format] ?? c.format} ناسم دی`
										case "not_multiple_of":
											return `ناسم عدد: باید د ${c.divisor} مضرب وي`
										case "unrecognized_keys":
											return `ناسم ${c.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `ناسم کلیډ په ${c.origin} کې`
										case "invalid_union":
										default:
											return `ناسمه ورودي`
										case "invalid_element":
											return `ناسم عنصر په ${c.origin} کې`
									}
								}),
						}
					},
					"pt",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "caracteres", verb: "ter" },
									file: { unit: "bytes", verb: "ter" },
									array: { unit: "itens", verb: "ter" },
									set: { unit: "itens", verb: "ter" },
								}),
								(b = {
									regex: "padrão",
									email: "endereço de e-mail",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "data e hora ISO",
									date: "data ISO",
									time: "hora ISO",
									duration: "duração ISO",
									ipv4: "endereço IPv4",
									ipv6: "endereço IPv6",
									cidrv4: "faixa de IPv4",
									cidrv6: "faixa de IPv6",
									base64: "texto codificado em base64",
									base64url: "URL codificada em base64",
									json_string: "texto JSON",
									e164: "número E.164",
									jwt: "JWT",
									template_literal: "entrada",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Tipo inv\xe1lido: esperado ${c.expected}, recebido ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "número"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "nulo"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Entrada inv\xe1lida: esperado ${_(c.values[0])}`
											return `Op\xe7\xe3o inv\xe1lida: esperada uma das ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Muito grande: esperado que ${c.origin ?? "valor"} tivesse ${b}${c.maximum.toString()} ${d.unit ?? "elementos"}`
											return `Muito grande: esperado que ${c.origin ?? "valor"} fosse ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Muito pequeno: esperado que ${c.origin} tivesse ${b}${c.minimum.toString()} ${d.unit}`
											return `Muito pequeno: esperado que ${c.origin} fosse ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Texto inv\xe1lido: deve come\xe7ar com "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Texto inv\xe1lido: deve terminar com "${c.suffix}"`
											if ("includes" === c.format)
												return `Texto inv\xe1lido: deve incluir "${c.includes}"`
											if ("regex" === c.format)
												return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${c.pattern}`
											return `${b[c.format] ?? c.format} inv\xe1lido`
										case "not_multiple_of":
											return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${c.divisor}`
										case "unrecognized_keys":
											return `Chave${c.keys.length > 1 ? "s" : ""} desconhecida${c.keys.length > 1 ? "s" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Chave inv\xe1lida em ${c.origin}`
										case "invalid_union":
											return "Entrada inválida"
										case "invalid_element":
											return `Valor inv\xe1lido em ${c.origin}`
										default:
											return `Campo inv\xe1lido`
									}
								}),
						}
					},
					"ru",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: {
										unit: { one: "символ", few: "символа", many: "символов" },
										verb: "иметь",
									},
									file: { unit: { one: "байт", few: "байта", many: "байт" }, verb: "иметь" },
									array: {
										unit: { one: "элемент", few: "элемента", many: "элементов" },
										verb: "иметь",
									},
									set: {
										unit: { one: "элемент", few: "элемента", many: "элементов" },
										verb: "иметь",
									},
								}),
								(b = {
									regex: "ввод",
									email: "email адрес",
									url: "URL",
									emoji: "эмодзи",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO дата и время",
									date: "ISO дата",
									time: "ISO время",
									duration: "ISO длительность",
									ipv4: "IPv4 адрес",
									ipv6: "IPv6 адрес",
									cidrv4: "IPv4 диапазон",
									cidrv6: "IPv6 диапазон",
									base64: "строка в формате base64",
									base64url: "строка в формате base64url",
									json_string: "JSON строка",
									e164: "номер E.164",
									jwt: "JWT",
									template_literal: "ввод",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Неверный ввод: ожидалось ${c.expected}, получено ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "число"
													case "object":
														if (Array.isArray(a)) return "массив"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Неверный ввод: ожидалось ${_(c.values[0])}`
											return `Неверный вариант: ожидалось одно из ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d) {
												let a = c2(Number(c.maximum), d.unit.one, d.unit.few, d.unit.many)
												return `Слишком большое значение: ожидалось, что ${c.origin ?? "значение"} будет иметь ${b}${c.maximum.toString()} ${a}`
											}
											return `Слишком большое значение: ожидалось, что ${c.origin ?? "значение"} будет ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d) {
												let a = c2(Number(c.minimum), d.unit.one, d.unit.few, d.unit.many)
												return `Слишком маленькое значение: ожидалось, что ${c.origin} будет иметь ${b}${c.minimum.toString()} ${a}`
											}
											return `Слишком маленькое значение: ожидалось, что ${c.origin} будет ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Неверная строка: должна начинаться с "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Неверная строка: должна заканчиваться на "${c.suffix}"`
											if ("includes" === c.format)
												return `Неверная строка: должна содержать "${c.includes}"`
											if ("regex" === c.format)
												return `Неверная строка: должна соответствовать шаблону ${c.pattern}`
											return `Неверный ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Неверное число: должно быть кратным ${c.divisor}`
										case "unrecognized_keys":
											return `Нераспознанн${c.keys.length > 1 ? "ые" : "ый"} ключ${c.keys.length > 1 ? "и" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Неверный ключ в ${c.origin}`
										case "invalid_union":
											return "Неверные входные данные"
										case "invalid_element":
											return `Неверное значение в ${c.origin}`
										default:
											return `Неверные входные данные`
									}
								}),
						}
					},
					"sl",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "znakov", verb: "imeti" },
									file: { unit: "bajtov", verb: "imeti" },
									array: { unit: "elementov", verb: "imeti" },
									set: { unit: "elementov", verb: "imeti" },
								}),
								(b = {
									regex: "vnos",
									email: "e-poštni naslov",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO datum in čas",
									date: "ISO datum",
									time: "ISO čas",
									duration: "ISO trajanje",
									ipv4: "IPv4 naslov",
									ipv6: "IPv6 naslov",
									cidrv4: "obseg IPv4",
									cidrv6: "obseg IPv6",
									base64: "base64 kodiran niz",
									base64url: "base64url kodiran niz",
									json_string: "JSON niz",
									e164: "E.164 številka",
									jwt: "JWT",
									template_literal: "vnos",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Neveljaven vnos: pričakovano ${c.expected}, prejeto ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "število"
													case "object":
														if (Array.isArray(a)) return "tabela"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Neveljaven vnos: pričakovano ${_(c.values[0])}`
											return `Neveljavna možnost: pričakovano eno izmed ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Preveliko: pričakovano, da bo ${c.origin ?? "vrednost"} imelo ${b}${c.maximum.toString()} ${d.unit ?? "elementov"}`
											return `Preveliko: pričakovano, da bo ${c.origin ?? "vrednost"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Premajhno: pričakovano, da bo ${c.origin} imelo ${b}${c.minimum.toString()} ${d.unit}`
											return `Premajhno: pričakovano, da bo ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Neveljaven niz: mora se začeti z "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Neveljaven niz: mora se končati z "${c.suffix}"`
											if ("includes" === c.format)
												return `Neveljaven niz: mora vsebovati "${c.includes}"`
											if ("regex" === c.format)
												return `Neveljaven niz: mora ustrezati vzorcu ${c.pattern}`
											return `Neveljaven ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Neveljavno število: mora biti večkratnik ${c.divisor}`
										case "unrecognized_keys":
											return `Neprepoznan${c.keys.length > 1 ? "i ključi" : " ključ"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Neveljaven ključ v ${c.origin}`
										case "invalid_union":
										default:
											return "Neveljaven vnos"
										case "invalid_element":
											return `Neveljavna vrednost v ${c.origin}`
									}
								}),
						}
					},
					"sv",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "tecken", verb: "att ha" },
									file: { unit: "bytes", verb: "att ha" },
									array: { unit: "objekt", verb: "att innehålla" },
									set: { unit: "objekt", verb: "att innehålla" },
								}),
								(b = {
									regex: "reguljärt uttryck",
									email: "e-postadress",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO-datum och tid",
									date: "ISO-datum",
									time: "ISO-tid",
									duration: "ISO-varaktighet",
									ipv4: "IPv4-intervall",
									ipv6: "IPv6-intervall",
									cidrv4: "IPv4-spektrum",
									cidrv6: "IPv6-spektrum",
									base64: "base64-kodad sträng",
									base64url: "base64url-kodad sträng",
									json_string: "JSON-sträng",
									e164: "E.164-nummer",
									jwt: "JWT",
									template_literal: "mall-literal",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ogiltig inmatning: f\xf6rv\xe4ntat ${c.expected}, fick ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "antal"
													case "object":
														if (Array.isArray(a)) return "lista"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ogiltig inmatning: f\xf6rv\xe4ntat ${_(c.values[0])}`
											return `Ogiltigt val: f\xf6rv\xe4ntade en av ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `F\xf6r stor(t): f\xf6rv\xe4ntade ${c.origin ?? "värdet"} att ha ${b}${c.maximum.toString()} ${d.unit ?? "element"}`
											return `F\xf6r stor(t): f\xf6rv\xe4ntat ${c.origin ?? "värdet"} att ha ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `F\xf6r lite(t): f\xf6rv\xe4ntade ${c.origin ?? "värdet"} att ha ${b}${c.minimum.toString()} ${d.unit}`
											return `F\xf6r lite(t): f\xf6rv\xe4ntade ${c.origin ?? "värdet"} att ha ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Ogiltig str\xe4ng: m\xe5ste sluta med "${c.suffix}"`
											if ("includes" === c.format)
												return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${c.includes}"`
											if ("regex" === c.format)
												return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${c.pattern}"`
											return `Ogiltig(t) ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ogiltigt tal: m\xe5ste vara en multipel av ${c.divisor}`
										case "unrecognized_keys":
											return `${c.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Ogiltig nyckel i ${c.origin ?? "värdet"}`
										case "invalid_union":
										default:
											return "Ogiltig input"
										case "invalid_element":
											return `Ogiltigt v\xe4rde i ${c.origin ?? "värdet"}`
									}
								}),
						}
					},
					"ta",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
									file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
									array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
									set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
								}),
								(b = {
									regex: "உள்ளீடு",
									email: "மின்னஞ்சல் முகவரி",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO தேதி நேரம்",
									date: "ISO தேதி",
									time: "ISO நேரம்",
									duration: "ISO கால அளவு",
									ipv4: "IPv4 முகவரி",
									ipv6: "IPv6 முகவரி",
									cidrv4: "IPv4 வரம்பு",
									cidrv6: "IPv6 வரம்பு",
									base64: "base64-encoded சரம்",
									base64url: "base64url-encoded சரம்",
									json_string: "JSON சரம்",
									e164: "E.164 எண்",
									jwt: "JWT",
									template_literal: "input",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${c.expected}, பெறப்பட்டது ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "எண் அல்லாதது" : "எண்"
													case "object":
														if (Array.isArray(a)) return "அணி"
														if (null === a) return "வெறுமை"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${_(c.values[0])}`
											return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${E(c.values, "|")} இல் ஒன்று`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${c.origin ?? "மதிப்பு"} ${b}${c.maximum.toString()} ${d.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`
											return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${c.origin ?? "மதிப்பு"} ${b}${c.maximum.toString()} ஆக இருக்க வேண்டும்`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${c.origin} ${b}${c.minimum.toString()} ${d.unit} ஆக இருக்க வேண்டும்`
											return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${c.origin} ${b}${c.minimum.toString()} ஆக இருக்க வேண்டும்`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `தவறான சரம்: "${c.prefix}" இல் தொடங்க வேண்டும்`
											if ("ends_with" === c.format)
												return `தவறான சரம்: "${c.suffix}" இல் முடிவடைய வேண்டும்`
											if ("includes" === c.format)
												return `தவறான சரம்: "${c.includes}" ஐ உள்ளடக்க வேண்டும்`
											if ("regex" === c.format)
												return `தவறான சரம்: ${c.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
											return `தவறான ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `தவறான எண்: ${c.divisor} இன் பலமாக இருக்க வேண்டும்`
										case "unrecognized_keys":
											return `அடையாளம் தெரியாத விசை${c.keys.length > 1 ? "கள்" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} இல் தவறான விசை`
										case "invalid_union":
											return "தவறான உள்ளீடு"
										case "invalid_element":
											return `${c.origin} இல் தவறான மதிப்பு`
										default:
											return `தவறான உள்ளீடு`
									}
								}),
						}
					},
					"th",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "ตัวอักษร", verb: "ควรมี" },
									file: { unit: "ไบต์", verb: "ควรมี" },
									array: { unit: "รายการ", verb: "ควรมี" },
									set: { unit: "รายการ", verb: "ควรมี" },
								}),
								(b = {
									regex: "ข้อมูลที่ป้อน",
									email: "ที่อยู่อีเมล",
									url: "URL",
									emoji: "อิโมจิ",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "วันที่เวลาแบบ ISO",
									date: "วันที่แบบ ISO",
									time: "เวลาแบบ ISO",
									duration: "ช่วงเวลาแบบ ISO",
									ipv4: "ที่อยู่ IPv4",
									ipv6: "ที่อยู่ IPv6",
									cidrv4: "ช่วง IP แบบ IPv4",
									cidrv6: "ช่วง IP แบบ IPv6",
									base64: "ข้อความแบบ Base64",
									base64url: "ข้อความแบบ Base64 สำหรับ URL",
									json_string: "ข้อความแบบ JSON",
									e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
									jwt: "โทเคน JWT",
									template_literal: "ข้อมูลที่ป้อน",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${c.expected} แต่ได้รับ ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข"
													case "object":
														if (Array.isArray(a)) return "อาร์เรย์ (Array)"
														if (null === a) return "ไม่มีค่า (null)"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length) return `ค่าไม่ถูกต้อง: ควรเป็น ${_(c.values[0])}`
											return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "ไม่เกิน" : "น้อยกว่า",
												d = a[c.origin] ?? null
											if (d)
												return `เกินกำหนด: ${c.origin ?? "ค่า"} ควรมี${b} ${c.maximum.toString()} ${d.unit ?? "รายการ"}`
											return `เกินกำหนด: ${c.origin ?? "ค่า"} ควรมี${b} ${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? "อย่างน้อย" : "มากกว่า",
												d = a[c.origin] ?? null
											if (d)
												return `น้อยกว่ากำหนด: ${c.origin} ควรมี${b} ${c.minimum.toString()} ${d.unit}`
											return `น้อยกว่ากำหนด: ${c.origin} ควรมี${b} ${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${c.prefix}"`
											if ("ends_with" === c.format)
												return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${c.suffix}"`
											if ("includes" === c.format)
												return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${c.includes}" อยู่ในข้อความ`
											if ("regex" === c.format)
												return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${c.pattern}`
											return `รูปแบบไม่ถูกต้อง: ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${c.divisor} ได้ลงตัว`
										case "unrecognized_keys":
											return `พบคีย์ที่ไม่รู้จัก: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `คีย์ไม่ถูกต้องใน ${c.origin}`
										case "invalid_union":
											return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้"
										case "invalid_element":
											return `ข้อมูลไม่ถูกต้องใน ${c.origin}`
										default:
											return `ข้อมูลไม่ถูกต้อง`
									}
								}),
						}
					},
					"tr",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "karakter", verb: "olmalı" },
									file: { unit: "bayt", verb: "olmalı" },
									array: { unit: "öğe", verb: "olmalı" },
									set: { unit: "öğe", verb: "olmalı" },
								}),
								(b = {
									regex: "girdi",
									email: "e-posta adresi",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO tarih ve saat",
									date: "ISO tarih",
									time: "ISO saat",
									duration: "ISO süre",
									ipv4: "IPv4 adresi",
									ipv6: "IPv6 adresi",
									cidrv4: "IPv4 aralığı",
									cidrv6: "IPv6 aralığı",
									base64: "base64 ile şifrelenmiş metin",
									base64url: "base64url ile şifrelenmiş metin",
									json_string: "JSON dizesi",
									e164: "E.164 sayısı",
									jwt: "JWT",
									template_literal: "Şablon dizesi",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Ge\xe7ersiz değer: beklenen ${c.expected}, alınan ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Ge\xe7ersiz değer: beklenen ${_(c.values[0])}`
											return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `\xc7ok b\xfcy\xfck: beklenen ${c.origin ?? "değer"} ${b}${c.maximum.toString()} ${d.unit ?? "öğe"}`
											return `\xc7ok b\xfcy\xfck: beklenen ${c.origin ?? "değer"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `\xc7ok k\xfc\xe7\xfck: beklenen ${c.origin} ${b}${c.minimum.toString()} ${d.unit}`
											return `\xc7ok k\xfc\xe7\xfck: beklenen ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Ge\xe7ersiz metin: "${c.prefix}" ile başlamalı`
											if ("ends_with" === c.format)
												return `Ge\xe7ersiz metin: "${c.suffix}" ile bitmeli`
											if ("includes" === c.format)
												return `Ge\xe7ersiz metin: "${c.includes}" i\xe7ermeli`
											if ("regex" === c.format)
												return `Ge\xe7ersiz metin: ${c.pattern} desenine uymalı`
											return `Ge\xe7ersiz ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Ge\xe7ersiz sayı: ${c.divisor} ile tam b\xf6l\xfcnebilmeli`
										case "unrecognized_keys":
											return `Tanınmayan anahtar${c.keys.length > 1 ? "lar" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} i\xe7inde ge\xe7ersiz anahtar`
										case "invalid_union":
											return "Geçersiz değer"
										case "invalid_element":
											return `${c.origin} i\xe7inde ge\xe7ersiz değer`
										default:
											return `Ge\xe7ersiz değer`
									}
								}),
						}
					},
					"ua",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "символів", verb: "матиме" },
									file: { unit: "байтів", verb: "матиме" },
									array: { unit: "елементів", verb: "матиме" },
									set: { unit: "елементів", verb: "матиме" },
								}),
								(b = {
									regex: "вхідні дані",
									email: "адреса електронної пошти",
									url: "URL",
									emoji: "емодзі",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "дата та час ISO",
									date: "дата ISO",
									time: "час ISO",
									duration: "тривалість ISO",
									ipv4: "адреса IPv4",
									ipv6: "адреса IPv6",
									cidrv4: "діапазон IPv4",
									cidrv6: "діапазон IPv6",
									base64: "рядок у кодуванні base64",
									base64url: "рядок у кодуванні base64url",
									json_string: "рядок JSON",
									e164: "номер E.164",
									jwt: "JWT",
									template_literal: "вхідні дані",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Неправильні вхідні дані: очікується ${c.expected}, отримано ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "число"
													case "object":
														if (Array.isArray(a)) return "масив"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Неправильні вхідні дані: очікується ${_(c.values[0])}`
											return `Неправильна опція: очікується одне з ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Занадто велике: очікується, що ${c.origin ?? "значення"} ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? "елементів"}`
											return `Занадто велике: очікується, що ${c.origin ?? "значення"} буде ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Занадто мале: очікується, що ${c.origin} ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`
											return `Занадто мале: очікується, що ${c.origin} буде ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Неправильний рядок: повинен починатися з "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Неправильний рядок: повинен закінчуватися на "${c.suffix}"`
											if ("includes" === c.format)
												return `Неправильний рядок: повинен містити "${c.includes}"`
											if ("regex" === c.format)
												return `Неправильний рядок: повинен відповідати шаблону ${c.pattern}`
											return `Неправильний ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `Неправильне число: повинно бути кратним ${c.divisor}`
										case "unrecognized_keys":
											return `Нерозпізнаний ключ${c.keys.length > 1 ? "і" : ""}: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Неправильний ключ у ${c.origin}`
										case "invalid_union":
											return "Неправильні вхідні дані"
										case "invalid_element":
											return `Неправильне значення у ${c.origin}`
										default:
											return `Неправильні вхідні дані`
									}
								}),
						}
					},
					"ur",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "حروف", verb: "ہونا" },
									file: { unit: "بائٹس", verb: "ہونا" },
									array: { unit: "آئٹمز", verb: "ہونا" },
									set: { unit: "آئٹمز", verb: "ہونا" },
								}),
								(b = {
									regex: "ان پٹ",
									email: "ای میل ایڈریس",
									url: "یو آر ایل",
									emoji: "ایموجی",
									uuid: "یو یو آئی ڈی",
									uuidv4: "یو یو آئی ڈی وی 4",
									uuidv6: "یو یو آئی ڈی وی 6",
									nanoid: "نینو آئی ڈی",
									guid: "جی یو آئی ڈی",
									cuid: "سی یو آئی ڈی",
									cuid2: "سی یو آئی ڈی 2",
									ulid: "یو ایل آئی ڈی",
									xid: "ایکس آئی ڈی",
									ksuid: "کے ایس یو آئی ڈی",
									datetime: "آئی ایس او ڈیٹ ٹائم",
									date: "آئی ایس او تاریخ",
									time: "آئی ایس او وقت",
									duration: "آئی ایس او مدت",
									ipv4: "آئی پی وی 4 ایڈریس",
									ipv6: "آئی پی وی 6 ایڈریس",
									cidrv4: "آئی پی وی 4 رینج",
									cidrv6: "آئی پی وی 6 رینج",
									base64: "بیس 64 ان کوڈڈ سٹرنگ",
									base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
									json_string: "جے ایس او این سٹرنگ",
									e164: "ای 164 نمبر",
									jwt: "جے ڈبلیو ٹی",
									template_literal: "ان پٹ",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `غلط ان پٹ: ${c.expected} متوقع تھا، ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "نمبر"
													case "object":
														if (Array.isArray(a)) return "آرے"
														if (null === a) return "نل"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)} موصول ہوا`
										case "invalid_value":
											if (1 === c.values.length) return `غلط ان پٹ: ${_(c.values[0])} متوقع تھا`
											return `غلط آپشن: ${E(c.values, "|")} میں سے ایک متوقع تھا`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `بہت بڑا: ${c.origin ?? "ویلیو"} کے ${b}${c.maximum.toString()} ${d.unit ?? "عناصر"} ہونے متوقع تھے`
											return `بہت بڑا: ${c.origin ?? "ویلیو"} کا ${b}${c.maximum.toString()} ہونا متوقع تھا`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `بہت چھوٹا: ${c.origin} کے ${b}${c.minimum.toString()} ${d.unit} ہونے متوقع تھے`
											return `بہت چھوٹا: ${c.origin} کا ${b}${c.minimum.toString()} ہونا متوقع تھا`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `غلط سٹرنگ: "${c.prefix}" سے شروع ہونا چاہیے`
											if ("ends_with" === c.format)
												return `غلط سٹرنگ: "${c.suffix}" پر ختم ہونا چاہیے`
											if ("includes" === c.format)
												return `غلط سٹرنگ: "${c.includes}" شامل ہونا چاہیے`
											if ("regex" === c.format)
												return `غلط سٹرنگ: پیٹرن ${c.pattern} سے میچ ہونا چاہیے`
											return `غلط ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `غلط نمبر: ${c.divisor} کا مضاعف ہونا چاہیے`
										case "unrecognized_keys":
											return `غیر تسلیم شدہ کی${c.keys.length > 1 ? "ز" : ""}: ${E(c.keys, "، ")}`
										case "invalid_key":
											return `${c.origin} میں غلط کی`
										case "invalid_union":
											return "غلط ان پٹ"
										case "invalid_element":
											return `${c.origin} میں غلط ویلیو`
										default:
											return `غلط ان پٹ`
									}
								}),
						}
					},
					"vi",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "ký tự", verb: "có" },
									file: { unit: "byte", verb: "có" },
									array: { unit: "phần tử", verb: "có" },
									set: { unit: "phần tử", verb: "có" },
								}),
								(b = {
									regex: "đầu vào",
									email: "địa chỉ email",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ngày giờ ISO",
									date: "ngày ISO",
									time: "giờ ISO",
									duration: "khoảng thời gian ISO",
									ipv4: "địa chỉ IPv4",
									ipv6: "địa chỉ IPv6",
									cidrv4: "dải IPv4",
									cidrv6: "dải IPv6",
									base64: "chuỗi mã hóa base64",
									base64url: "chuỗi mã hóa base64url",
									json_string: "chuỗi JSON",
									e164: "số E.164",
									jwt: "JWT",
									template_literal: "đầu vào",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${c.expected}, nhận được ${((
												a,
											) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "số"
													case "object":
														if (Array.isArray(a)) return "mảng"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length)
												return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${_(c.values[0])}`
											return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `Qu\xe1 lớn: mong đợi ${c.origin ?? "giá trị"} ${d.verb} ${b}${c.maximum.toString()} ${d.unit ?? "phần tử"}`
											return `Qu\xe1 lớn: mong đợi ${c.origin ?? "giá trị"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `Qu\xe1 nhỏ: mong đợi ${c.origin} ${d.verb} ${b}${c.minimum.toString()} ${d.unit}`
											return `Qu\xe1 nhỏ: mong đợi ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${c.prefix}"`
											if ("ends_with" === c.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${c.suffix}"`
											if ("includes" === c.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${c.includes}"`
											if ("regex" === c.format)
												return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${c.pattern}`
											return `${b[c.format] ?? c.format} kh\xf4ng hợp lệ`
										case "not_multiple_of":
											return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${c.divisor}`
										case "unrecognized_keys":
											return `Kh\xf3a kh\xf4ng được nhận dạng: ${E(c.keys, ", ")}`
										case "invalid_key":
											return `Kh\xf3a kh\xf4ng hợp lệ trong ${c.origin}`
										case "invalid_union":
											return "Đầu vào không hợp lệ"
										case "invalid_element":
											return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${c.origin}`
										default:
											return `Đầu v\xe0o kh\xf4ng hợp lệ`
									}
								}),
						}
					},
					"zhCN",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "字符", verb: "包含" },
									file: { unit: "字节", verb: "包含" },
									array: { unit: "项", verb: "包含" },
									set: { unit: "项", verb: "包含" },
								}),
								(b = {
									regex: "输入",
									email: "电子邮件",
									url: "URL",
									emoji: "表情符号",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO日期时间",
									date: "ISO日期",
									time: "ISO时间",
									duration: "ISO时长",
									ipv4: "IPv4地址",
									ipv6: "IPv6地址",
									cidrv4: "IPv4网段",
									cidrv6: "IPv6网段",
									base64: "base64编码字符串",
									base64url: "base64url编码字符串",
									json_string: "JSON字符串",
									e164: "E.164号码",
									jwt: "JWT",
									template_literal: "输入",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `无效输入：期望 ${c.expected}，实际接收 ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "非数字(NaN)" : "数字"
													case "object":
														if (Array.isArray(a)) return "数组"
														if (null === a) return "空值(null)"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length) return `无效输入：期望 ${_(c.values[0])}`
											return `无效选项：期望以下之一 ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `数值过大：期望 ${c.origin ?? "值"} ${b}${c.maximum.toString()} ${d.unit ?? "个元素"}`
											return `数值过大：期望 ${c.origin ?? "值"} ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `数值过小：期望 ${c.origin} ${b}${c.minimum.toString()} ${d.unit}`
											return `数值过小：期望 ${c.origin} ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `无效字符串：必须以 "${c.prefix}" 开头`
											if ("ends_with" === c.format) return `无效字符串：必须以 "${c.suffix}" 结尾`
											if ("includes" === c.format) return `无效字符串：必须包含 "${c.includes}"`
											if ("regex" === c.format)
												return `无效字符串：必须满足正则表达式 ${c.pattern}`
											return `无效${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `无效数字：必须是 ${c.divisor} 的倍数`
										case "unrecognized_keys":
											return `出现未知的键(key): ${E(c.keys, ", ")}`
										case "invalid_key":
											return `${c.origin} 中的键(key)无效`
										case "invalid_union":
											return "无效输入"
										case "invalid_element":
											return `${c.origin} 中包含无效值(value)`
										default:
											return `无效输入`
									}
								}),
						}
					},
					"zhTW",
					0,
					function () {
						let a, b
						return {
							localeError:
								((a = {
									string: { unit: "字元", verb: "擁有" },
									file: { unit: "位元組", verb: "擁有" },
									array: { unit: "項目", verb: "擁有" },
									set: { unit: "項目", verb: "擁有" },
								}),
								(b = {
									regex: "輸入",
									email: "郵件地址",
									url: "URL",
									emoji: "emoji",
									uuid: "UUID",
									uuidv4: "UUIDv4",
									uuidv6: "UUIDv6",
									nanoid: "nanoid",
									guid: "GUID",
									cuid: "cuid",
									cuid2: "cuid2",
									ulid: "ULID",
									xid: "XID",
									ksuid: "KSUID",
									datetime: "ISO 日期時間",
									date: "ISO 日期",
									time: "ISO 時間",
									duration: "ISO 期間",
									ipv4: "IPv4 位址",
									ipv6: "IPv6 位址",
									cidrv4: "IPv4 範圍",
									cidrv6: "IPv6 範圍",
									base64: "base64 編碼字串",
									base64url: "base64url 編碼字串",
									json_string: "JSON 字串",
									e164: "E.164 數值",
									jwt: "JWT",
									template_literal: "輸入",
								}),
								(c) => {
									switch (c.code) {
										case "invalid_type":
											return `無效的輸入值：預期為 ${c.expected}，但收到 ${((a) => {
												let b = typeof a
												switch (b) {
													case "number":
														return Number.isNaN(a) ? "NaN" : "number"
													case "object":
														if (Array.isArray(a)) return "array"
														if (null === a) return "null"
														if (
															Object.getPrototypeOf(a) !== Object.prototype &&
															a.constructor
														)
															return a.constructor.name
												}
												return b
											})(c.input)}`
										case "invalid_value":
											if (1 === c.values.length) return `無效的輸入值：預期為 ${_(c.values[0])}`
											return `無效的選項：預期為以下其中之一 ${E(c.values, "|")}`
										case "too_big": {
											let b = c.inclusive ? "<=" : "<",
												d = a[c.origin] ?? null
											if (d)
												return `數值過大：預期 ${c.origin ?? "值"} 應為 ${b}${c.maximum.toString()} ${d.unit ?? "個元素"}`
											return `數值過大：預期 ${c.origin ?? "值"} 應為 ${b}${c.maximum.toString()}`
										}
										case "too_small": {
											let b = c.inclusive ? ">=" : ">",
												d = a[c.origin] ?? null
											if (d)
												return `數值過小：預期 ${c.origin} 應為 ${b}${c.minimum.toString()} ${d.unit}`
											return `數值過小：預期 ${c.origin} 應為 ${b}${c.minimum.toString()}`
										}
										case "invalid_format":
											if ("starts_with" === c.format)
												return `無效的字串：必須以 "${c.prefix}" 開頭`
											if ("ends_with" === c.format) return `無效的字串：必須以 "${c.suffix}" 結尾`
											if ("includes" === c.format) return `無效的字串：必須包含 "${c.includes}"`
											if ("regex" === c.format) return `無效的字串：必須符合格式 ${c.pattern}`
											return `無效的 ${b[c.format] ?? c.format}`
										case "not_multiple_of":
											return `無效的數字：必須為 ${c.divisor} 的倍數`
										case "unrecognized_keys":
											return `無法識別的鍵值${c.keys.length > 1 ? "們" : ""}：${E(c.keys, "、")}`
										case "invalid_key":
											return `${c.origin} 中有無效的鍵值`
										case "invalid_union":
											return "無效的輸入值"
										case "invalid_element":
											return `${c.origin} 中有無效的值`
										default:
											return `無效的輸入值`
									}
								}),
						}
					},
				],
				97406,
			)
		var c3 = a.i(97406)
		let c4 = Symbol("ZodOutput"),
			c5 = Symbol("ZodInput")
		class c6 {
			constructor() {
				;(this._map = new Map()), (this._idmap = new Map())
			}
			add(a, ...b) {
				let c = b[0]
				if ((this._map.set(a, c), c && "object" == typeof c && "id" in c)) {
					if (this._idmap.has(c.id)) throw Error(`ID ${c.id} already exists in the registry`)
					this._idmap.set(c.id, a)
				}
				return this
			}
			clear() {
				return (this._map = new Map()), (this._idmap = new Map()), this
			}
			remove(a) {
				let b = this._map.get(a)
				return b && "object" == typeof b && "id" in b && this._idmap.delete(b.id), this._map.delete(a), this
			}
			get(a) {
				let b = a._zod.parent
				if (b) {
					let c = { ...(this.get(b) ?? {}) }
					return delete c.id, { ...c, ...this._map.get(a) }
				}
				return this._map.get(a)
			}
			has(a) {
				return this._map.has(a)
			}
		}
		function c7() {
			return new c6()
		}
		let c8 = c7()
		function c9(a, b) {
			return new a({ type: "string", ...Z(b) })
		}
		function da(a, b) {
			return new a({ type: "string", coerce: !0, ...Z(b) })
		}
		function db(a, b) {
			return new a({ type: "string", format: "email", check: "string_format", abort: !1, ...Z(b) })
		}
		function dc(a, b) {
			return new a({ type: "string", format: "guid", check: "string_format", abort: !1, ...Z(b) })
		}
		function dd(a, b) {
			return new a({ type: "string", format: "uuid", check: "string_format", abort: !1, ...Z(b) })
		}
		function de(a, b) {
			return new a({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...Z(b) })
		}
		function df(a, b) {
			return new a({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...Z(b) })
		}
		function dg(a, b) {
			return new a({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...Z(b) })
		}
		function dh(a, b) {
			return new a({ type: "string", format: "url", check: "string_format", abort: !1, ...Z(b) })
		}
		function di(a, b) {
			return new a({ type: "string", format: "emoji", check: "string_format", abort: !1, ...Z(b) })
		}
		function dj(a, b) {
			return new a({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...Z(b) })
		}
		function dk(a, b) {
			return new a({ type: "string", format: "cuid", check: "string_format", abort: !1, ...Z(b) })
		}
		function dl(a, b) {
			return new a({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...Z(b) })
		}
		function dm(a, b) {
			return new a({ type: "string", format: "ulid", check: "string_format", abort: !1, ...Z(b) })
		}
		function dn(a, b) {
			return new a({ type: "string", format: "xid", check: "string_format", abort: !1, ...Z(b) })
		}
		function dp(a, b) {
			return new a({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...Z(b) })
		}
		function dq(a, b) {
			return new a({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...Z(b) })
		}
		function dr(a, b) {
			return new a({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...Z(b) })
		}
		function ds(a, b) {
			return new a({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...Z(b) })
		}
		function dt(a, b) {
			return new a({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...Z(b) })
		}
		function du(a, b) {
			return new a({ type: "string", format: "base64", check: "string_format", abort: !1, ...Z(b) })
		}
		function dv(a, b) {
			return new a({ type: "string", format: "base64url", check: "string_format", abort: !1, ...Z(b) })
		}
		function dw(a, b) {
			return new a({ type: "string", format: "e164", check: "string_format", abort: !1, ...Z(b) })
		}
		function dx(a, b) {
			return new a({ type: "string", format: "jwt", check: "string_format", abort: !1, ...Z(b) })
		}
		a.s(
			[
				"$ZodRegistry",
				() => c6,
				"$input",
				0,
				c5,
				"$output",
				0,
				c4,
				"globalRegistry",
				0,
				c8,
				"registry",
				() => c7,
			],
			98248,
		),
			a.i(98248),
			a.i(26315)
		let dy = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 }
		function dz(a, b) {
			return new a({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...Z(b),
			})
		}
		function dA(a, b) {
			return new a({ type: "string", format: "date", check: "string_format", ...Z(b) })
		}
		function dB(a, b) {
			return new a({ type: "string", format: "time", check: "string_format", precision: null, ...Z(b) })
		}
		function dC(a, b) {
			return new a({ type: "string", format: "duration", check: "string_format", ...Z(b) })
		}
		function dD(a, b) {
			return new a({ type: "number", checks: [], ...Z(b) })
		}
		function dE(a, b) {
			return new a({ type: "number", coerce: !0, checks: [], ...Z(b) })
		}
		function dF(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "safeint", ...Z(b) })
		}
		function dG(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "float32", ...Z(b) })
		}
		function dH(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "float64", ...Z(b) })
		}
		function dI(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "int32", ...Z(b) })
		}
		function dJ(a, b) {
			return new a({ type: "number", check: "number_format", abort: !1, format: "uint32", ...Z(b) })
		}
		function dK(a, b) {
			return new a({ type: "boolean", ...Z(b) })
		}
		function dL(a, b) {
			return new a({ type: "boolean", coerce: !0, ...Z(b) })
		}
		function dM(a, b) {
			return new a({ type: "bigint", ...Z(b) })
		}
		function dN(a, b) {
			return new a({ type: "bigint", coerce: !0, ...Z(b) })
		}
		function dO(a, b) {
			return new a({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...Z(b) })
		}
		function dP(a, b) {
			return new a({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...Z(b) })
		}
		function dQ(a, b) {
			return new a({ type: "symbol", ...Z(b) })
		}
		function dR(a, b) {
			return new a({ type: "undefined", ...Z(b) })
		}
		function dS(a, b) {
			return new a({ type: "null", ...Z(b) })
		}
		function dT(a) {
			return new a({ type: "any" })
		}
		function dU(a) {
			return new a({ type: "unknown" })
		}
		function dV(a, b) {
			return new a({ type: "never", ...Z(b) })
		}
		function dW(a, b) {
			return new a({ type: "void", ...Z(b) })
		}
		function dX(a, b) {
			return new a({ type: "date", ...Z(b) })
		}
		function dY(a, b) {
			return new a({ type: "date", coerce: !0, ...Z(b) })
		}
		function dZ(a, b) {
			return new a({ type: "nan", ...Z(b) })
		}
		function d$(a, b) {
			return new bk({ check: "less_than", ...Z(b), value: a, inclusive: !1 })
		}
		function d_(a, b) {
			return new bk({ check: "less_than", ...Z(b), value: a, inclusive: !0 })
		}
		function d0(a, b) {
			return new bl({ check: "greater_than", ...Z(b), value: a, inclusive: !1 })
		}
		function d1(a, b) {
			return new bl({ check: "greater_than", ...Z(b), value: a, inclusive: !0 })
		}
		function d2(a) {
			return d0(0, a)
		}
		function d3(a) {
			return d$(0, a)
		}
		function d4(a) {
			return d_(0, a)
		}
		function d5(a) {
			return d1(0, a)
		}
		function d6(a, b) {
			return new bm({ check: "multiple_of", ...Z(b), value: a })
		}
		function d7(a, b) {
			return new bp({ check: "max_size", ...Z(b), maximum: a })
		}
		function d8(a, b) {
			return new bq({ check: "min_size", ...Z(b), minimum: a })
		}
		function d9(a, b) {
			return new br({ check: "size_equals", ...Z(b), size: a })
		}
		function ea(a, b) {
			return new bs({ check: "max_length", ...Z(b), maximum: a })
		}
		function eb(a, b) {
			return new bt({ check: "min_length", ...Z(b), minimum: a })
		}
		function ec(a, b) {
			return new bu({ check: "length_equals", ...Z(b), length: a })
		}
		function ed(a, b) {
			return new bw({ check: "string_format", format: "regex", ...Z(b), pattern: a })
		}
		function ee(a) {
			return new bx({ check: "string_format", format: "lowercase", ...Z(a) })
		}
		function ef(a) {
			return new by({ check: "string_format", format: "uppercase", ...Z(a) })
		}
		function eg(a, b) {
			return new bz({ check: "string_format", format: "includes", ...Z(b), includes: a })
		}
		function eh(a, b) {
			return new bA({ check: "string_format", format: "starts_with", ...Z(b), prefix: a })
		}
		function ei(a, b) {
			return new bB({ check: "string_format", format: "ends_with", ...Z(b), suffix: a })
		}
		function ej(a, b, c) {
			return new bD({ check: "property", property: a, schema: b, ...Z(c) })
		}
		function ek(a, b) {
			return new bE({ check: "mime_type", mime: a, ...Z(b) })
		}
		function el(a) {
			return new bF({ check: "overwrite", tx: a })
		}
		function em(a) {
			return el((b) => b.normalize(a))
		}
		function en() {
			return el((a) => a.trim())
		}
		function eo() {
			return el((a) => a.toLowerCase())
		}
		function ep() {
			return el((a) => a.toUpperCase())
		}
		function eq(a, b, c) {
			return new a({ type: "array", element: b, ...Z(c) })
		}
		function er(a, b, c) {
			return new a({ type: "union", options: b, ...Z(c) })
		}
		function es(a, b, c, d) {
			return new a({ type: "union", options: c, discriminator: b, ...Z(d) })
		}
		function et(a, b, c) {
			return new a({ type: "intersection", left: b, right: c })
		}
		function eu(a, b, c, d) {
			let e = c instanceof bI,
				f = e ? d : c
			return new a({ type: "tuple", items: b, rest: e ? c : null, ...Z(f) })
		}
		function ev(a, b, c, d) {
			return new a({ type: "record", keyType: b, valueType: c, ...Z(d) })
		}
		function ew(a, b, c, d) {
			return new a({ type: "map", keyType: b, valueType: c, ...Z(d) })
		}
		function ex(a, b, c) {
			return new a({ type: "set", valueType: b, ...Z(c) })
		}
		function ey(a, b, c) {
			return new a({
				type: "enum",
				entries: Array.isArray(b) ? Object.fromEntries(b.map((a) => [a, a])) : b,
				...Z(c),
			})
		}
		function ez(a, b, c) {
			return new a({ type: "enum", entries: b, ...Z(c) })
		}
		function eA(a, b, c) {
			return new a({ type: "literal", values: Array.isArray(b) ? b : [b], ...Z(c) })
		}
		function eB(a, b) {
			return new a({ type: "file", ...Z(b) })
		}
		function eC(a, b) {
			return new a({ type: "transform", transform: b })
		}
		function eD(a, b) {
			return new a({ type: "optional", innerType: b })
		}
		function eE(a, b) {
			return new a({ type: "nullable", innerType: b })
		}
		function eF(a, b, c) {
			return new a({
				type: "default",
				innerType: b,
				get defaultValue() {
					return "function" == typeof c ? c() : c
				},
			})
		}
		function eG(a, b, c) {
			return new a({ type: "nonoptional", innerType: b, ...Z(c) })
		}
		function eH(a, b) {
			return new a({ type: "success", innerType: b })
		}
		function eI(a, b, c) {
			return new a({ type: "catch", innerType: b, catchValue: "function" == typeof c ? c : () => c })
		}
		function eJ(a, b, c) {
			return new a({ type: "pipe", in: b, out: c })
		}
		function eK(a, b) {
			return new a({ type: "readonly", innerType: b })
		}
		function eL(a, b, c) {
			return new a({ type: "template_literal", parts: b, ...Z(c) })
		}
		function eM(a, b) {
			return new a({ type: "lazy", getter: b })
		}
		function eN(a, b) {
			return new a({ type: "promise", innerType: b })
		}
		function eO(a, b, c) {
			let d = Z(c)
			return d.abort ?? (d.abort = !0), new a({ type: "custom", check: "custom", fn: b, ...d })
		}
		function eP(a, b, c) {
			return new a({ type: "custom", check: "custom", fn: b, ...Z(c) })
		}
		function eQ(a, b) {
			let c = Z(b),
				d = c.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
				e = c.falsy ?? ["false", "0", "no", "off", "n", "disabled"]
			"sensitive" !== c.case &&
				((d = d.map((a) => ("string" == typeof a ? a.toLowerCase() : a))),
				(e = e.map((a) => ("string" == typeof a ? a.toLowerCase() : a))))
			let f = new Set(d),
				g = new Set(e),
				h = a.Pipe ?? cS,
				i = a.Boolean ?? cc,
				j = a.String ?? bJ,
				k = new (a.Transform ?? cH)({
					type: "transform",
					transform: (a, b) => {
						let d = a
						return (
							"sensitive" !== c.case && (d = d.toLowerCase()),
							!!f.has(d) ||
								(!g.has(d) &&
									(b.issues.push({
										code: "invalid_value",
										expected: "stringbool",
										values: [...f, ...g],
										input: b.value,
										inst: k,
									}),
									{}))
						)
					},
					error: c.error,
				}),
				l = new h({ type: "pipe", in: new j({ type: "string", error: c.error }), out: k, error: c.error })
			return new h({ type: "pipe", in: l, out: new i({ type: "boolean", error: c.error }), error: c.error })
		}
		function eR(a, b, c, d = {}) {
			let e = Z(d),
				f = {
					...Z(d),
					check: "string_format",
					type: "string",
					format: b,
					fn: "function" == typeof c ? c : (a) => c.test(a),
					...e,
				}
			return c instanceof RegExp && (f.pattern = c), new a(f)
		}
		a.s(
			[
				"TimePrecision",
				0,
				dy,
				"_any",
				() => dT,
				"_array",
				() => eq,
				"_base64",
				() => du,
				"_base64url",
				() => dv,
				"_bigint",
				() => dM,
				"_boolean",
				() => dK,
				"_catch",
				() => eI,
				"_cidrv4",
				() => ds,
				"_cidrv6",
				() => dt,
				"_coercedBigint",
				() => dN,
				"_coercedBoolean",
				() => dL,
				"_coercedDate",
				() => dY,
				"_coercedNumber",
				() => dE,
				"_coercedString",
				() => da,
				"_cuid",
				() => dk,
				"_cuid2",
				() => dl,
				"_custom",
				() => eO,
				"_date",
				() => dX,
				"_default",
				() => eF,
				"_discriminatedUnion",
				() => es,
				"_e164",
				() => dw,
				"_email",
				() => db,
				"_emoji",
				() => di,
				"_endsWith",
				() => ei,
				"_enum",
				() => ey,
				"_file",
				() => eB,
				"_float32",
				() => dG,
				"_float64",
				() => dH,
				"_gt",
				() => d0,
				"_gte",
				() => d1,
				"_guid",
				() => dc,
				"_includes",
				() => eg,
				"_int",
				() => dF,
				"_int32",
				() => dI,
				"_int64",
				() => dO,
				"_intersection",
				() => et,
				"_ipv4",
				() => dq,
				"_ipv6",
				() => dr,
				"_isoDate",
				() => dA,
				"_isoDateTime",
				() => dz,
				"_isoDuration",
				() => dC,
				"_isoTime",
				() => dB,
				"_jwt",
				() => dx,
				"_ksuid",
				() => dp,
				"_lazy",
				() => eM,
				"_length",
				() => ec,
				"_literal",
				() => eA,
				"_lowercase",
				() => ee,
				"_lt",
				() => d$,
				"_lte",
				() => d_,
				"_map",
				() => ew,
				"_max",
				() => d_,
				"_maxLength",
				() => ea,
				"_maxSize",
				() => d7,
				"_mime",
				() => ek,
				"_min",
				() => d1,
				"_minLength",
				() => eb,
				"_minSize",
				() => d8,
				"_multipleOf",
				() => d6,
				"_nan",
				() => dZ,
				"_nanoid",
				() => dj,
				"_nativeEnum",
				() => ez,
				"_negative",
				() => d3,
				"_never",
				() => dV,
				"_nonnegative",
				() => d5,
				"_nonoptional",
				() => eG,
				"_nonpositive",
				() => d4,
				"_normalize",
				() => em,
				"_null",
				() => dS,
				"_nullable",
				() => eE,
				"_number",
				() => dD,
				"_optional",
				() => eD,
				"_overwrite",
				() => el,
				"_pipe",
				() => eJ,
				"_positive",
				() => d2,
				"_promise",
				() => eN,
				"_property",
				() => ej,
				"_readonly",
				() => eK,
				"_record",
				() => ev,
				"_refine",
				() => eP,
				"_regex",
				() => ed,
				"_set",
				() => ex,
				"_size",
				() => d9,
				"_startsWith",
				() => eh,
				"_string",
				() => c9,
				"_stringFormat",
				() => eR,
				"_stringbool",
				() => eQ,
				"_success",
				() => eH,
				"_symbol",
				() => dQ,
				"_templateLiteral",
				() => eL,
				"_toLowerCase",
				() => eo,
				"_toUpperCase",
				() => ep,
				"_transform",
				() => eC,
				"_trim",
				() => en,
				"_tuple",
				() => eu,
				"_uint32",
				() => dJ,
				"_uint64",
				() => dP,
				"_ulid",
				() => dm,
				"_undefined",
				() => dR,
				"_union",
				() => er,
				"_unknown",
				() => dU,
				"_uppercase",
				() => ef,
				"_url",
				() => dh,
				"_uuid",
				() => dd,
				"_uuidv4",
				() => de,
				"_uuidv6",
				() => df,
				"_uuidv7",
				() => dg,
				"_void",
				() => dW,
				"_xid",
				() => dn,
			],
			11881,
		)
		class eS {
			constructor(a) {
				;(this._def = a), (this.def = a)
			}
			implement(a) {
				if ("function" != typeof a) throw Error("implement() must be called with a function")
				let b = (...c) => {
					let d = this._def.input ? aC(this._def.input, c, void 0, { callee: b }) : c
					if (!Array.isArray(d)) throw Error("Invalid arguments schema: not an array or tuple schema.")
					let e = a(...d)
					return this._def.output ? aC(this._def.output, e, void 0, { callee: b }) : e
				}
				return b
			}
			implementAsync(a) {
				if ("function" != typeof a) throw Error("implement() must be called with a function")
				let b = async (...c) => {
					let d = this._def.input ? await aE(this._def.input, c, void 0, { callee: b }) : c
					if (!Array.isArray(d)) throw Error("Invalid arguments schema: not an array or tuple schema.")
					let e = await a(...d)
					return this._def.output ? aE(this._def.output, e, void 0, { callee: b }) : e
				}
				return b
			}
			input(...a) {
				let b = this.constructor
				return new b(
					Array.isArray(a[0])
						? {
								type: "function",
								input: new cx({ type: "tuple", items: a[0], rest: a[1] }),
								output: this._def.output,
							}
						: { type: "function", input: a[0], output: this._def.output },
				)
			}
			output(a) {
				return new this.constructor({ type: "function", input: this._def.input, output: a })
			}
		}
		function eT(a) {
			return new eS({
				type: "function",
				input: Array.isArray(a?.input) ? eu(cx, a?.input) : (a?.input ?? eq(co, dU(cj))),
				output: a?.output ?? dU(cj),
			})
		}
		a.s(["$ZodFunction", () => eS, "function", () => eT], 21155), a.i(21155), a.i(11881)
		class eU {
			constructor(a) {
				;(this.counter = 0),
					(this.metadataRegistry = a?.metadata ?? c8),
					(this.target = a?.target ?? "draft-2020-12"),
					(this.unrepresentable = a?.unrepresentable ?? "throw"),
					(this.override = a?.override ?? (() => {})),
					(this.io = a?.io ?? "output"),
					(this.seen = new Map())
			}
			process(a, b = { path: [], schemaPath: [] }) {
				var c
				let d = a._zod.def,
					e = this.seen.get(a)
				if (e) return e.count++, b.schemaPath.includes(a) && (e.cycle = b.path), e.schema
				let f = { schema: {}, count: 1, cycle: void 0, path: b.path }
				this.seen.set(a, f)
				let g = a._zod.toJSONSchema?.()
				if (g) f.schema = g
				else {
					let c = { ...b, schemaPath: [...b.schemaPath, a], path: b.path },
						e = a._zod.parent
					if (e) (f.ref = e), this.process(e, c), (this.seen.get(e).isParent = !0)
					else {
						let b = f.schema
						switch (d.type) {
							case "string": {
								b.type = "string"
								let { minimum: c, maximum: d, format: e, patterns: g, contentEncoding: h } = a._zod.bag
								if (
									("number" == typeof c && (b.minLength = c),
									"number" == typeof d && (b.maxLength = d),
									e &&
										((b.format =
											{
												guid: "uuid",
												url: "uri",
												datetime: "date-time",
												json_string: "json-string",
												regex: "",
											}[e] ?? e),
										"" === b.format && delete b.format),
									h && (b.contentEncoding = h),
									g && g.size > 0)
								) {
									let a = [...g]
									1 === a.length
										? (b.pattern = a[0].source)
										: a.length > 1 &&
											(f.schema.allOf = [
												...a.map((a) => ({
													...("draft-7" === this.target ? { type: "string" } : {}),
													pattern: a.source,
												})),
											])
								}
								break
							}
							case "number": {
								let {
									minimum: c,
									maximum: d,
									format: e,
									multipleOf: f,
									exclusiveMaximum: g,
									exclusiveMinimum: h,
								} = a._zod.bag
								"string" == typeof e && e.includes("int") ? (b.type = "integer") : (b.type = "number"),
									"number" == typeof h && (b.exclusiveMinimum = h),
									"number" == typeof c &&
										((b.minimum = c),
										"number" == typeof h &&
											(h >= c ? delete b.minimum : delete b.exclusiveMinimum)),
									"number" == typeof g && (b.exclusiveMaximum = g),
									"number" == typeof d &&
										((b.maximum = d),
										"number" == typeof g &&
											(g <= d ? delete b.maximum : delete b.exclusiveMaximum)),
									"number" == typeof f && (b.multipleOf = f)
								break
							}
							case "boolean":
							case "success":
								b.type = "boolean"
								break
							case "bigint":
								if ("throw" === this.unrepresentable)
									throw Error("BigInt cannot be represented in JSON Schema")
								break
							case "symbol":
								if ("throw" === this.unrepresentable)
									throw Error("Symbols cannot be represented in JSON Schema")
								break
							case "null":
								b.type = "null"
								break
							case "any":
							case "unknown":
								break
							case "undefined":
								if ("throw" === this.unrepresentable)
									throw Error("Undefined cannot be represented in JSON Schema")
								break
							case "void":
								if ("throw" === this.unrepresentable)
									throw Error("Void cannot be represented in JSON Schema")
								break
							case "never":
								b.not = {}
								break
							case "date":
								if ("throw" === this.unrepresentable)
									throw Error("Date cannot be represented in JSON Schema")
								break
							case "array": {
								let { minimum: e, maximum: f } = a._zod.bag
								"number" == typeof e && (b.minItems = e),
									"number" == typeof f && (b.maxItems = f),
									(b.type = "array"),
									(b.items = this.process(d.element, { ...c, path: [...c.path, "items"] }))
								break
							}
							case "object": {
								;(b.type = "object"), (b.properties = {})
								let a = d.shape
								for (let d in a)
									b.properties[d] = this.process(a[d], { ...c, path: [...c.path, "properties", d] })
								let e = new Set(
									[...new Set(Object.keys(a))].filter((a) => {
										let b = d.shape[a]._zod
										return "input" === this.io ? void 0 === b.optin : void 0 === b.optout
									}),
								)
								e.size > 0 && (b.required = Array.from(e)),
									d.catchall?._zod.def.type === "never"
										? (b.additionalProperties = !1)
										: d.catchall
											? d.catchall &&
												(b.additionalProperties = this.process(d.catchall, {
													...c,
													path: [...c.path, "additionalProperties"],
												}))
											: "output" === this.io && (b.additionalProperties = !1)
								break
							}
							case "union":
								b.anyOf = d.options.map((a, b) =>
									this.process(a, { ...c, path: [...c.path, "anyOf", b] }),
								)
								break
							case "intersection": {
								let a = this.process(d.left, { ...c, path: [...c.path, "allOf", 0] }),
									e = this.process(d.right, { ...c, path: [...c.path, "allOf", 1] }),
									f = (a) => "allOf" in a && 1 === Object.keys(a).length
								b.allOf = [...(f(a) ? a.allOf : [a]), ...(f(e) ? e.allOf : [e])]
								break
							}
							case "tuple": {
								b.type = "array"
								let e = d.items.map((a, b) =>
									this.process(a, { ...c, path: [...c.path, "prefixItems", b] }),
								)
								if (("draft-2020-12" === this.target ? (b.prefixItems = e) : (b.items = e), d.rest)) {
									let a = this.process(d.rest, { ...c, path: [...c.path, "items"] })
									"draft-2020-12" === this.target ? (b.items = a) : (b.additionalItems = a)
								}
								d.rest && (b.items = this.process(d.rest, { ...c, path: [...c.path, "items"] }))
								let { minimum: f, maximum: g } = a._zod.bag
								"number" == typeof f && (b.minItems = f), "number" == typeof g && (b.maxItems = g)
								break
							}
							case "record":
								;(b.type = "object"),
									(b.propertyNames = this.process(d.keyType, {
										...c,
										path: [...c.path, "propertyNames"],
									})),
									(b.additionalProperties = this.process(d.valueType, {
										...c,
										path: [...c.path, "additionalProperties"],
									}))
								break
							case "map":
								if ("throw" === this.unrepresentable)
									throw Error("Map cannot be represented in JSON Schema")
								break
							case "set":
								if ("throw" === this.unrepresentable)
									throw Error("Set cannot be represented in JSON Schema")
								break
							case "enum": {
								let a = D(d.entries)
								a.every((a) => "number" == typeof a) && (b.type = "number"),
									a.every((a) => "string" == typeof a) && (b.type = "string"),
									(b.enum = a)
								break
							}
							case "literal": {
								let a = []
								for (let b of d.values)
									if (void 0 === b) {
										if ("throw" === this.unrepresentable)
											throw Error("Literal `undefined` cannot be represented in JSON Schema")
									} else if ("bigint" == typeof b)
										if ("throw" === this.unrepresentable)
											throw Error("BigInt literals cannot be represented in JSON Schema")
										else a.push(Number(b))
									else a.push(b)
								if (0 === a.length);
								else if (1 === a.length) {
									let c = a[0]
									;(b.type = null === c ? "null" : typeof c), (b.const = c)
								} else
									a.every((a) => "number" == typeof a) && (b.type = "number"),
										a.every((a) => "string" == typeof a) && (b.type = "string"),
										a.every((a) => "boolean" == typeof a) && (b.type = "string"),
										a.every((a) => null === a) && (b.type = "null"),
										(b.enum = a)
								break
							}
							case "file": {
								let c = { type: "string", format: "binary", contentEncoding: "binary" },
									{ minimum: d, maximum: e, mime: f } = a._zod.bag
								void 0 !== d && (c.minLength = d),
									void 0 !== e && (c.maxLength = e),
									f
										? 1 === f.length
											? ((c.contentMediaType = f[0]), Object.assign(b, c))
											: (b.anyOf = f.map((a) => ({ ...c, contentMediaType: a })))
										: Object.assign(b, c)
								break
							}
							case "transform":
								if ("throw" === this.unrepresentable)
									throw Error("Transforms cannot be represented in JSON Schema")
								break
							case "nullable":
								b.anyOf = [this.process(d.innerType, c), { type: "null" }]
								break
							case "nonoptional":
							case "promise":
							case "optional":
								this.process(d.innerType, c), (f.ref = d.innerType)
								break
							case "default":
								this.process(d.innerType, c),
									(f.ref = d.innerType),
									(b.default = JSON.parse(JSON.stringify(d.defaultValue)))
								break
							case "prefault":
								this.process(d.innerType, c),
									(f.ref = d.innerType),
									"input" === this.io && (b._prefault = JSON.parse(JSON.stringify(d.defaultValue)))
								break
							case "catch": {
								let a
								this.process(d.innerType, c), (f.ref = d.innerType)
								try {
									a = d.catchValue(void 0)
								} catch {
									throw Error("Dynamic catch values are not supported in JSON Schema")
								}
								b.default = a
								break
							}
							case "nan":
								if ("throw" === this.unrepresentable)
									throw Error("NaN cannot be represented in JSON Schema")
								break
							case "template_literal": {
								let c = a._zod.pattern
								if (!c) throw Error("Pattern not found in template literal")
								;(b.type = "string"), (b.pattern = c.source)
								break
							}
							case "pipe": {
								let a =
									"input" === this.io ? ("transform" === d.in._zod.def.type ? d.out : d.in) : d.out
								this.process(a, c), (f.ref = a)
								break
							}
							case "readonly":
								this.process(d.innerType, c), (f.ref = d.innerType), (b.readOnly = !0)
								break
							case "lazy": {
								let b = a._zod.innerType
								this.process(b, c), (f.ref = b)
								break
							}
							case "custom":
								if ("throw" === this.unrepresentable)
									throw Error("Custom types cannot be represented in JSON Schema")
						}
					}
				}
				let h = this.metadataRegistry.get(a)
				return (
					h && Object.assign(f.schema, h),
					"input" === this.io &&
						(function a(b, c) {
							let d = c ?? { seen: new Set() }
							if (d.seen.has(b)) return !1
							d.seen.add(b)
							let e = b._zod.def
							switch (e.type) {
								case "string":
								case "number":
								case "bigint":
								case "boolean":
								case "date":
								case "symbol":
								case "undefined":
								case "null":
								case "any":
								case "unknown":
								case "never":
								case "void":
								case "literal":
								case "enum":
								case "nan":
								case "file":
								case "template_literal":
								case "custom":
								case "success":
								case "catch":
									return !1
								case "array":
									return a(e.element, d)
								case "object":
									for (let b in e.shape) if (a(e.shape[b], d)) return !0
									return !1
								case "union":
									for (let b of e.options) if (a(b, d)) return !0
									return !1
								case "intersection":
									return a(e.left, d) || a(e.right, d)
								case "tuple":
									for (let b of e.items) if (a(b, d)) return !0
									if (e.rest && a(e.rest, d)) return !0
									return !1
								case "record":
								case "map":
									return a(e.keyType, d) || a(e.valueType, d)
								case "set":
									return a(e.valueType, d)
								case "promise":
								case "optional":
								case "nonoptional":
								case "nullable":
								case "readonly":
								case "default":
								case "prefault":
									return a(e.innerType, d)
								case "lazy":
									return a(e.getter(), d)
								case "transform":
									return !0
								case "pipe":
									return a(e.in, d) || a(e.out, d)
							}
							throw Error(`Unknown schema type: ${e.type}`)
						})(a) &&
						(delete f.schema.examples, delete f.schema.default),
					"input" === this.io &&
						f.schema._prefault &&
						((c = f.schema).default ?? (c.default = f.schema._prefault)),
					delete f.schema._prefault,
					this.seen.get(a).schema
				)
			}
			emit(a, b) {
				let c = { cycles: b?.cycles ?? "ref", reused: b?.reused ?? "inline", external: b?.external ?? void 0 },
					d = this.seen.get(a)
				if (!d) throw Error("Unprocessed schema. This is a bug in Zod.")
				let e = (a) => {
						let b = "draft-2020-12" === this.target ? "$defs" : "definitions"
						if (c.external) {
							let d = c.external.registry.get(a[0])?.id,
								e = c.external.uri ?? ((a) => a)
							if (d) return { ref: e(d) }
							let f = a[1].defId ?? a[1].schema.id ?? `schema${this.counter++}`
							return (a[1].defId = f), { defId: f, ref: `${e("__shared")}#/${b}/${f}` }
						}
						if (a[1] === d) return { ref: "#" }
						let e = `#/${b}/`,
							f = a[1].schema.id ?? `__schema${this.counter++}`
						return { defId: f, ref: e + f }
					},
					f = (a) => {
						if (a[1].schema.$ref) return
						let b = a[1],
							{ ref: c, defId: d } = e(a)
						;(b.def = { ...b.schema }), d && (b.defId = d)
						let f = b.schema
						for (let a in f) delete f[a]
						f.$ref = c
					}
				if ("throw" === c.cycles)
					for (let a of this.seen.entries()) {
						let b = a[1]
						if (b.cycle)
							throw Error(`Cycle detected: #/${b.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)
					}
				for (let b of this.seen.entries()) {
					let d = b[1]
					if (a === b[0]) {
						f(b)
						continue
					}
					if (c.external) {
						let d = c.external.registry.get(b[0])?.id
						if (a !== b[0] && d) {
							f(b)
							continue
						}
					}
					if (this.metadataRegistry.get(b[0])?.id || d.cycle || (d.count > 1 && "ref" === c.reused)) {
						f(b)
						continue
					}
				}
				let g = (a, b) => {
					let c = this.seen.get(a),
						d = c.def ?? c.schema,
						e = { ...d }
					if (null === c.ref) return
					let f = c.ref
					if (((c.ref = null), f)) {
						g(f, b)
						let a = this.seen.get(f).schema
						a.$ref && "draft-7" === b.target
							? ((d.allOf = d.allOf ?? []), d.allOf.push(a))
							: (Object.assign(d, a), Object.assign(d, e))
					}
					c.isParent || this.override({ zodSchema: a, jsonSchema: d, path: c.path ?? [] })
				}
				for (let a of [...this.seen.entries()].reverse()) g(a[0], { target: this.target })
				let h = {}
				if (
					("draft-2020-12" === this.target
						? (h.$schema = "https://json-schema.org/draft/2020-12/schema")
						: "draft-7" === this.target
							? (h.$schema = "http://json-schema.org/draft-07/schema#")
							: console.warn(`Invalid target: ${this.target}`),
					c.external?.uri)
				) {
					let b = c.external.registry.get(a)?.id
					if (!b) throw Error("Schema is missing an `id` property")
					h.$id = c.external.uri(b)
				}
				Object.assign(h, d.def)
				let i = c.external?.defs ?? {}
				for (let a of this.seen.entries()) {
					let b = a[1]
					b.def && b.defId && (i[b.defId] = b.def)
				}
				c.external ||
					(Object.keys(i).length > 0 &&
						("draft-2020-12" === this.target ? (h.$defs = i) : (h.definitions = i)))
				try {
					return JSON.parse(JSON.stringify(h))
				} catch (a) {
					throw Error("Error converting schema to JSON.")
				}
			}
		}
		function eV(a, b) {
			if (a instanceof c6) {
				let c = new eU(b),
					d = {}
				for (let b of a._idmap.entries()) {
					let [a, d] = b
					c.process(d)
				}
				let e = {},
					f = { registry: a, uri: b?.uri, defs: d }
				for (let d of a._idmap.entries()) {
					let [a, g] = d
					e[a] = c.emit(g, { ...b, external: f })
				}
				return (
					Object.keys(d).length > 0 &&
						(e.__shared = { ["draft-2020-12" === c.target ? "$defs" : "definitions"]: d }),
					{ schemas: e }
				)
			}
			let c = new eU(b)
			return c.process(a), c.emit(a, b)
		}
		a.s(["JSONSchemaGenerator", () => eU, "toJSONSchema", () => eV], 69832), a.i(69832), a.s([], 11192)
		var eW = a.i(11192)
		a.s(
			[
				"$ZodAny",
				0,
				ci,
				"$ZodArray",
				0,
				co,
				"$ZodAsyncError",
				() => v,
				"$ZodBase64",
				0,
				b3,
				"$ZodBase64URL",
				0,
				b5,
				"$ZodBigInt",
				0,
				cd,
				"$ZodBigIntFormat",
				0,
				ce,
				"$ZodBoolean",
				0,
				cc,
				"$ZodCIDRv4",
				0,
				b0,
				"$ZodCIDRv6",
				0,
				b1,
				"$ZodCUID",
				0,
				bR,
				"$ZodCUID2",
				0,
				bS,
				"$ZodCatch",
				0,
				cQ,
				"$ZodCheck",
				0,
				bi,
				"$ZodCheckBigIntFormat",
				0,
				bo,
				"$ZodCheckEndsWith",
				0,
				bB,
				"$ZodCheckGreaterThan",
				0,
				bl,
				"$ZodCheckIncludes",
				0,
				bz,
				"$ZodCheckLengthEquals",
				0,
				bu,
				"$ZodCheckLessThan",
				0,
				bk,
				"$ZodCheckLowerCase",
				0,
				bx,
				"$ZodCheckMaxLength",
				0,
				bs,
				"$ZodCheckMaxSize",
				0,
				bp,
				"$ZodCheckMimeType",
				0,
				bE,
				"$ZodCheckMinLength",
				0,
				bt,
				"$ZodCheckMinSize",
				0,
				bq,
				"$ZodCheckMultipleOf",
				0,
				bm,
				"$ZodCheckNumberFormat",
				0,
				bn,
				"$ZodCheckOverwrite",
				0,
				bF,
				"$ZodCheckProperty",
				0,
				bD,
				"$ZodCheckRegex",
				0,
				bw,
				"$ZodCheckSizeEquals",
				0,
				br,
				"$ZodCheckStartsWith",
				0,
				bA,
				"$ZodCheckStringFormat",
				0,
				bv,
				"$ZodCheckUpperCase",
				0,
				by,
				"$ZodCustom",
				0,
				cZ,
				"$ZodCustomStringFormat",
				0,
				b9,
				"$ZodDate",
				0,
				cm,
				"$ZodDefault",
				0,
				cK,
				"$ZodDiscriminatedUnion",
				0,
				cu,
				"$ZodE164",
				0,
				b6,
				"$ZodEmail",
				0,
				bN,
				"$ZodEmoji",
				0,
				bP,
				"$ZodEnum",
				0,
				cE,
				"$ZodError",
				0,
				au,
				"$ZodFile",
				0,
				cG,
				"$ZodFunction",
				() => eS,
				"$ZodGUID",
				0,
				bL,
				"$ZodIPv4",
				0,
				b$,
				"$ZodIPv6",
				0,
				b_,
				"$ZodISODate",
				0,
				bX,
				"$ZodISODateTime",
				0,
				bW,
				"$ZodISODuration",
				0,
				bZ,
				"$ZodISOTime",
				0,
				bY,
				"$ZodIntersection",
				0,
				cv,
				"$ZodJWT",
				0,
				b8,
				"$ZodKSUID",
				0,
				bV,
				"$ZodLazy",
				0,
				cY,
				"$ZodLiteral",
				0,
				cF,
				"$ZodMap",
				0,
				cA,
				"$ZodNaN",
				0,
				cR,
				"$ZodNanoID",
				0,
				bQ,
				"$ZodNever",
				0,
				ck,
				"$ZodNonOptional",
				0,
				cN,
				"$ZodNull",
				0,
				ch,
				"$ZodNullable",
				0,
				cJ,
				"$ZodNumber",
				0,
				ca,
				"$ZodNumberFormat",
				0,
				cb,
				"$ZodObject",
				0,
				cr,
				"$ZodOptional",
				0,
				cI,
				"$ZodPipe",
				0,
				cS,
				"$ZodPrefault",
				0,
				cM,
				"$ZodPromise",
				0,
				cX,
				"$ZodReadonly",
				0,
				cU,
				"$ZodRealError",
				0,
				av,
				"$ZodRecord",
				0,
				cz,
				"$ZodRegistry",
				() => c6,
				"$ZodSet",
				0,
				cC,
				"$ZodString",
				0,
				bJ,
				"$ZodStringFormat",
				0,
				bK,
				"$ZodSuccess",
				0,
				cP,
				"$ZodSymbol",
				0,
				cf,
				"$ZodTemplateLiteral",
				0,
				cW,
				"$ZodTransform",
				0,
				cH,
				"$ZodTuple",
				0,
				cx,
				"$ZodType",
				0,
				bI,
				"$ZodULID",
				0,
				bT,
				"$ZodURL",
				0,
				bO,
				"$ZodUUID",
				0,
				bM,
				"$ZodUndefined",
				0,
				cg,
				"$ZodUnion",
				0,
				ct,
				"$ZodUnknown",
				0,
				cj,
				"$ZodVoid",
				0,
				cl,
				"$ZodXID",
				0,
				bU,
				"$brand",
				0,
				u,
				"$constructor",
				() => t,
				"$input",
				0,
				c5,
				"$output",
				0,
				c4,
				"Doc",
				() => bG,
				"JSONSchema",
				0,
				eW,
				"JSONSchemaGenerator",
				() => eU,
				"NEVER",
				0,
				s,
				"TimePrecision",
				0,
				dy,
				"_any",
				() => dT,
				"_array",
				() => eq,
				"_base64",
				() => du,
				"_base64url",
				() => dv,
				"_bigint",
				() => dM,
				"_boolean",
				() => dK,
				"_catch",
				() => eI,
				"_cidrv4",
				() => ds,
				"_cidrv6",
				() => dt,
				"_coercedBigint",
				() => dN,
				"_coercedBoolean",
				() => dL,
				"_coercedDate",
				() => dY,
				"_coercedNumber",
				() => dE,
				"_coercedString",
				() => da,
				"_cuid",
				() => dk,
				"_cuid2",
				() => dl,
				"_custom",
				() => eO,
				"_date",
				() => dX,
				"_default",
				() => eF,
				"_discriminatedUnion",
				() => es,
				"_e164",
				() => dw,
				"_email",
				() => db,
				"_emoji",
				() => di,
				"_endsWith",
				() => ei,
				"_enum",
				() => ey,
				"_file",
				() => eB,
				"_float32",
				() => dG,
				"_float64",
				() => dH,
				"_gt",
				() => d0,
				"_gte",
				() => d1,
				"_guid",
				() => dc,
				"_includes",
				() => eg,
				"_int",
				() => dF,
				"_int32",
				() => dI,
				"_int64",
				() => dO,
				"_intersection",
				() => et,
				"_ipv4",
				() => dq,
				"_ipv6",
				() => dr,
				"_isoDate",
				() => dA,
				"_isoDateTime",
				() => dz,
				"_isoDuration",
				() => dC,
				"_isoTime",
				() => dB,
				"_jwt",
				() => dx,
				"_ksuid",
				() => dp,
				"_lazy",
				() => eM,
				"_length",
				() => ec,
				"_literal",
				() => eA,
				"_lowercase",
				() => ee,
				"_lt",
				() => d$,
				"_lte",
				() => d_,
				"_map",
				() => ew,
				"_max",
				() => d_,
				"_maxLength",
				() => ea,
				"_maxSize",
				() => d7,
				"_mime",
				() => ek,
				"_min",
				() => d1,
				"_minLength",
				() => eb,
				"_minSize",
				() => d8,
				"_multipleOf",
				() => d6,
				"_nan",
				() => dZ,
				"_nanoid",
				() => dj,
				"_nativeEnum",
				() => ez,
				"_negative",
				() => d3,
				"_never",
				() => dV,
				"_nonnegative",
				() => d5,
				"_nonoptional",
				() => eG,
				"_nonpositive",
				() => d4,
				"_normalize",
				() => em,
				"_null",
				() => dS,
				"_nullable",
				() => eE,
				"_number",
				() => dD,
				"_optional",
				() => eD,
				"_overwrite",
				() => el,
				"_parse",
				0,
				aB,
				"_parseAsync",
				0,
				aD,
				"_pipe",
				() => eJ,
				"_positive",
				() => d2,
				"_promise",
				() => eN,
				"_property",
				() => ej,
				"_readonly",
				() => eK,
				"_record",
				() => ev,
				"_refine",
				() => eP,
				"_regex",
				() => ed,
				"_safeParse",
				0,
				aF,
				"_safeParseAsync",
				0,
				aH,
				"_set",
				() => ex,
				"_size",
				() => d9,
				"_startsWith",
				() => eh,
				"_string",
				() => c9,
				"_stringFormat",
				() => eR,
				"_stringbool",
				() => eQ,
				"_success",
				() => eH,
				"_symbol",
				() => dQ,
				"_templateLiteral",
				() => eL,
				"_toLowerCase",
				() => eo,
				"_toUpperCase",
				() => ep,
				"_transform",
				() => eC,
				"_trim",
				() => en,
				"_tuple",
				() => eu,
				"_uint32",
				() => dJ,
				"_uint64",
				() => dP,
				"_ulid",
				() => dm,
				"_undefined",
				() => dR,
				"_union",
				() => er,
				"_unknown",
				() => dU,
				"_uppercase",
				() => ef,
				"_url",
				() => dh,
				"_uuid",
				() => dd,
				"_uuidv4",
				() => de,
				"_uuidv6",
				() => df,
				"_uuidv7",
				() => dg,
				"_void",
				() => dW,
				"_xid",
				() => dn,
				"clone",
				() => Y,
				"config",
				() => x,
				"flattenError",
				() => aw,
				"formatError",
				() => ax,
				"function",
				() => eT,
				"globalConfig",
				0,
				w,
				"globalRegistry",
				0,
				c8,
				"isValidBase64",
				() => b2,
				"isValidBase64URL",
				() => b4,
				"isValidJWT",
				() => b7,
				"locales",
				0,
				c3,
				"parse",
				0,
				aC,
				"parseAsync",
				0,
				aE,
				"prettifyError",
				() => aA,
				"regexes",
				0,
				c0,
				"registry",
				() => c7,
				"safeParse",
				0,
				aG,
				"safeParseAsync",
				0,
				aI,
				"toDotPath",
				() => az,
				"toJSONSchema",
				() => eV,
				"treeifyError",
				() => ay,
				"util",
				0,
				c_,
				"version",
				0,
				bH,
			],
			96366,
		)
		var eX = a.i(96366)
		a.s(
			[
				"ZodAny",
				() => gg,
				"ZodArray",
				() => gq,
				"ZodBase64",
				() => fN,
				"ZodBase64URL",
				() => fP,
				"ZodBigInt",
				() => f5,
				"ZodBigIntFormat",
				() => f7,
				"ZodBoolean",
				() => f3,
				"ZodCIDRv4",
				() => fJ,
				"ZodCIDRv6",
				() => fL,
				"ZodCUID",
				() => fv,
				"ZodCUID2",
				() => fx,
				"ZodCatch",
				() => g6,
				"ZodCustom",
				() => hk,
				"ZodCustomStringFormat",
				() => fV,
				"ZodDate",
				() => go,
				"ZodDefault",
				() => g$,
				"ZodDiscriminatedUnion",
				() => gz,
				"ZodE164",
				() => fR,
				"ZodEmail",
				() => fg,
				"ZodEmoji",
				() => fr,
				"ZodEnum",
				() => gM,
				"ZodFile",
				() => gR,
				"ZodGUID",
				() => fi,
				"ZodIPv4",
				() => fF,
				"ZodIPv6",
				() => fH,
				"ZodIntersection",
				() => gB,
				"ZodJWT",
				() => fT,
				"ZodKSUID",
				() => fD,
				"ZodLazy",
				() => hg,
				"ZodLiteral",
				() => gP,
				"ZodMap",
				() => gI,
				"ZodNaN",
				() => g8,
				"ZodNanoID",
				() => ft,
				"ZodNever",
				() => gk,
				"ZodNonOptional",
				() => g2,
				"ZodNull",
				() => ge,
				"ZodNullable",
				() => gX,
				"ZodNumber",
				() => fX,
				"ZodNumberFormat",
				() => fZ,
				"ZodObject",
				() => gt,
				"ZodOptional",
				() => gV,
				"ZodPipe",
				() => ha,
				"ZodPrefault",
				() => g0,
				"ZodPromise",
				() => hi,
				"ZodReadonly",
				() => hc,
				"ZodRecord",
				() => gF,
				"ZodSet",
				() => gK,
				"ZodString",
				() => fd,
				"ZodStringFormat",
				() => ff,
				"ZodSuccess",
				() => g4,
				"ZodSymbol",
				() => ga,
				"ZodTemplateLiteral",
				() => he,
				"ZodTransform",
				() => gT,
				"ZodTuple",
				() => gD,
				"ZodType",
				() => fb,
				"ZodULID",
				() => fz,
				"ZodURL",
				() => fp,
				"ZodUUID",
				() => fk,
				"ZodUndefined",
				() => gc,
				"ZodUnion",
				() => gx,
				"ZodUnknown",
				() => gi,
				"ZodVoid",
				() => gm,
				"ZodXID",
				() => fB,
				"_ZodString",
				() => fc,
				"_default",
				() => g_,
				"any",
				() => gh,
				"array",
				() => gr,
				"base64",
				() => fO,
				"base64url",
				() => fQ,
				"bigint",
				() => f6,
				"boolean",
				() => f4,
				"catch",
				() => g7,
				"check",
				() => hl,
				"cidrv4",
				() => fK,
				"cidrv6",
				() => fM,
				"cuid",
				() => fw,
				"cuid2",
				() => fy,
				"custom",
				() => hm,
				"date",
				() => gp,
				"discriminatedUnion",
				() => gA,
				"e164",
				() => fS,
				"email",
				() => fh,
				"emoji",
				() => fs,
				"enum",
				() => gN,
				"file",
				() => gS,
				"float32",
				() => f_,
				"float64",
				() => f0,
				"guid",
				() => fj,
				"instanceof",
				() => hp,
				"int",
				() => f$,
				"int32",
				() => f1,
				"int64",
				() => f8,
				"intersection",
				() => gC,
				"ipv4",
				() => fG,
				"ipv6",
				() => fI,
				"json",
				() => hr,
				"jwt",
				() => fU,
				"keyof",
				() => gs,
				"ksuid",
				() => fE,
				"lazy",
				() => hh,
				"literal",
				() => gQ,
				"looseObject",
				() => gw,
				"map",
				() => gJ,
				"nan",
				() => g9,
				"nanoid",
				() => fu,
				"nativeEnum",
				() => gO,
				"never",
				() => gl,
				"nonoptional",
				() => g3,
				"null",
				() => gf,
				"nullable",
				() => gY,
				"nullish",
				() => gZ,
				"number",
				() => fY,
				"object",
				() => gu,
				"optional",
				() => gW,
				"partialRecord",
				() => gH,
				"pipe",
				() => hb,
				"prefault",
				() => g1,
				"preprocess",
				() => hs,
				"promise",
				() => hj,
				"readonly",
				() => hd,
				"record",
				() => gG,
				"refine",
				() => hn,
				"set",
				() => gL,
				"strictObject",
				() => gv,
				"string",
				() => fe,
				"stringFormat",
				() => fW,
				"stringbool",
				() => hq,
				"success",
				() => g5,
				"superRefine",
				() => ho,
				"symbol",
				() => gb,
				"templateLiteral",
				() => hf,
				"transform",
				() => gU,
				"tuple",
				() => gE,
				"uint32",
				() => f2,
				"uint64",
				() => f9,
				"ulid",
				() => fA,
				"undefined",
				() => gd,
				"union",
				() => gy,
				"unknown",
				() => gj,
				"url",
				() => fq,
				"uuid",
				() => fl,
				"uuidv4",
				() => fm,
				"uuidv6",
				() => fn,
				"uuidv7",
				() => fo,
				"void",
				() => gn,
				"xid",
				() => fC,
			],
			17398,
		)
		a.s(
			[
				"ZodISODate",
				() => e$,
				"ZodISODateTime",
				() => eY,
				"ZodISODuration",
				() => e2,
				"ZodISOTime",
				() => e0,
				"date",
				() => e_,
				"datetime",
				() => eZ,
				"duration",
				() => e3,
				"time",
				() => e1,
			],
			27947,
		)
		let eY = t("ZodISODateTime", (a, b) => {
			bW.init(a, b), ff.init(a, b)
		})
		function eZ(a) {
			return dz(eY, a)
		}
		let e$ = t("ZodISODate", (a, b) => {
			bX.init(a, b), ff.init(a, b)
		})
		function e_(a) {
			return dA(e$, a)
		}
		let e0 = t("ZodISOTime", (a, b) => {
			bY.init(a, b), ff.init(a, b)
		})
		function e1(a) {
			return dB(e0, a)
		}
		let e2 = t("ZodISODuration", (a, b) => {
			bZ.init(a, b), ff.init(a, b)
		})
		function e3(a) {
			return dC(e2, a)
		}
		let e4 = (a, b) => {
				au.init(a, b),
					(a.name = "ZodError"),
					Object.defineProperties(a, {
						format: { value: (b) => ax(a, b) },
						flatten: { value: (b) => aw(a, b) },
						addIssue: { value: (b) => a.issues.push(b) },
						addIssues: { value: (b) => a.issues.push(...b) },
						isEmpty: { get: () => 0 === a.issues.length },
					})
			},
			e5 = t("ZodError", e4),
			e6 = t("ZodError", e4, { Parent: Error })
		a.s(["ZodError", 0, e5, "ZodRealError", 0, e6], 52971)
		let e7 = aB(e6),
			e8 = aD(e6),
			e9 = aF(e6),
			fa = aH(e6)
		a.s(["parse", 0, e7, "parseAsync", 0, e8, "safeParse", 0, e9, "safeParseAsync", 0, fa], 63374)
		let fb = t(
				"ZodType",
				(a, b) => (
					bI.init(a, b),
					(a.def = b),
					Object.defineProperty(a, "_def", { value: b }),
					(a.check = (...c) =>
						a.clone({
							...b,
							checks: [
								...(b.checks ?? []),
								...c.map((a) =>
									"function" == typeof a
										? { _zod: { check: a, def: { check: "custom" }, onattach: [] } }
										: a,
								),
							],
						})),
					(a.clone = (b, c) => Y(a, b, c)),
					(a.brand = () => a),
					(a.register = (b, c) => (b.add(a, c), a)),
					(a.parse = (b, c) => e7(a, b, c, { callee: a.parse })),
					(a.safeParse = (b, c) => e9(a, b, c)),
					(a.parseAsync = async (b, c) => e8(a, b, c, { callee: a.parseAsync })),
					(a.safeParseAsync = async (b, c) => fa(a, b, c)),
					(a.spa = a.safeParseAsync),
					(a.refine = (b, c) => a.check(hn(b, c))),
					(a.superRefine = (b) => a.check(ho(b))),
					(a.overwrite = (b) => a.check(el(b))),
					(a.optional = () => gW(a)),
					(a.nullable = () => gY(a)),
					(a.nullish = () => gW(gY(a))),
					(a.nonoptional = (b) => g3(a, b)),
					(a.array = () => gr(a)),
					(a.or = (b) => gy([a, b])),
					(a.and = (b) => gC(a, b)),
					(a.transform = (b) => hb(a, gU(b))),
					(a.default = (b) => g_(a, b)),
					(a.prefault = (b) => g1(a, b)),
					(a.catch = (b) => g7(a, b)),
					(a.pipe = (b) => hb(a, b)),
					(a.readonly = () => hd(a)),
					(a.describe = (b) => {
						let c = a.clone()
						return c8.add(c, { description: b }), c
					}),
					Object.defineProperty(a, "description", { get: () => c8.get(a)?.description, configurable: !0 }),
					(a.meta = (...b) => {
						if (0 === b.length) return c8.get(a)
						let c = a.clone()
						return c8.add(c, b[0]), c
					}),
					(a.isOptional = () => a.safeParse(void 0).success),
					(a.isNullable = () => a.safeParse(null).success),
					a
				),
			),
			fc = t("_ZodString", (a, b) => {
				bJ.init(a, b), fb.init(a, b)
				let c = a._zod.bag
				;(a.format = c.format ?? null),
					(a.minLength = c.minimum ?? null),
					(a.maxLength = c.maximum ?? null),
					(a.regex = (...b) => a.check(ed(...b))),
					(a.includes = (...b) => a.check(eg(...b))),
					(a.startsWith = (...b) => a.check(eh(...b))),
					(a.endsWith = (...b) => a.check(ei(...b))),
					(a.min = (...b) => a.check(eb(...b))),
					(a.max = (...b) => a.check(ea(...b))),
					(a.length = (...b) => a.check(ec(...b))),
					(a.nonempty = (...b) => a.check(eb(1, ...b))),
					(a.lowercase = (b) => a.check(ee(b))),
					(a.uppercase = (b) => a.check(ef(b))),
					(a.trim = () => a.check(en())),
					(a.normalize = (...b) => a.check(em(...b))),
					(a.toLowerCase = () => a.check(eo())),
					(a.toUpperCase = () => a.check(ep()))
			}),
			fd = t("ZodString", (a, b) => {
				bJ.init(a, b),
					fc.init(a, b),
					(a.email = (b) => a.check(db(fg, b))),
					(a.url = (b) => a.check(dh(fp, b))),
					(a.jwt = (b) => a.check(dx(fT, b))),
					(a.emoji = (b) => a.check(di(fr, b))),
					(a.guid = (b) => a.check(dc(fi, b))),
					(a.uuid = (b) => a.check(dd(fk, b))),
					(a.uuidv4 = (b) => a.check(de(fk, b))),
					(a.uuidv6 = (b) => a.check(df(fk, b))),
					(a.uuidv7 = (b) => a.check(dg(fk, b))),
					(a.nanoid = (b) => a.check(dj(ft, b))),
					(a.guid = (b) => a.check(dc(fi, b))),
					(a.cuid = (b) => a.check(dk(fv, b))),
					(a.cuid2 = (b) => a.check(dl(fx, b))),
					(a.ulid = (b) => a.check(dm(fz, b))),
					(a.base64 = (b) => a.check(du(fN, b))),
					(a.base64url = (b) => a.check(dv(fP, b))),
					(a.xid = (b) => a.check(dn(fB, b))),
					(a.ksuid = (b) => a.check(dp(fD, b))),
					(a.ipv4 = (b) => a.check(dq(fF, b))),
					(a.ipv6 = (b) => a.check(dr(fH, b))),
					(a.cidrv4 = (b) => a.check(ds(fJ, b))),
					(a.cidrv6 = (b) => a.check(dt(fL, b))),
					(a.e164 = (b) => a.check(dw(fR, b))),
					(a.datetime = (b) => a.check(eZ(b))),
					(a.date = (b) => a.check(e_(b))),
					(a.time = (b) => a.check(e1(b))),
					(a.duration = (b) => a.check(e3(b)))
			})
		function fe(a) {
			return c9(fd, a)
		}
		let ff = t("ZodStringFormat", (a, b) => {
				bK.init(a, b), fc.init(a, b)
			}),
			fg = t("ZodEmail", (a, b) => {
				bN.init(a, b), ff.init(a, b)
			})
		function fh(a) {
			return db(fg, a)
		}
		let fi = t("ZodGUID", (a, b) => {
			bL.init(a, b), ff.init(a, b)
		})
		function fj(a) {
			return dc(fi, a)
		}
		let fk = t("ZodUUID", (a, b) => {
			bM.init(a, b), ff.init(a, b)
		})
		function fl(a) {
			return dd(fk, a)
		}
		function fm(a) {
			return de(fk, a)
		}
		function fn(a) {
			return df(fk, a)
		}
		function fo(a) {
			return dg(fk, a)
		}
		let fp = t("ZodURL", (a, b) => {
			bO.init(a, b), ff.init(a, b)
		})
		function fq(a) {
			return dh(fp, a)
		}
		let fr = t("ZodEmoji", (a, b) => {
			bP.init(a, b), ff.init(a, b)
		})
		function fs(a) {
			return di(fr, a)
		}
		let ft = t("ZodNanoID", (a, b) => {
			bQ.init(a, b), ff.init(a, b)
		})
		function fu(a) {
			return dj(ft, a)
		}
		let fv = t("ZodCUID", (a, b) => {
			bR.init(a, b), ff.init(a, b)
		})
		function fw(a) {
			return dk(fv, a)
		}
		let fx = t("ZodCUID2", (a, b) => {
			bS.init(a, b), ff.init(a, b)
		})
		function fy(a) {
			return dl(fx, a)
		}
		let fz = t("ZodULID", (a, b) => {
			bT.init(a, b), ff.init(a, b)
		})
		function fA(a) {
			return dm(fz, a)
		}
		let fB = t("ZodXID", (a, b) => {
			bU.init(a, b), ff.init(a, b)
		})
		function fC(a) {
			return dn(fB, a)
		}
		let fD = t("ZodKSUID", (a, b) => {
			bV.init(a, b), ff.init(a, b)
		})
		function fE(a) {
			return dp(fD, a)
		}
		let fF = t("ZodIPv4", (a, b) => {
			b$.init(a, b), ff.init(a, b)
		})
		function fG(a) {
			return dq(fF, a)
		}
		let fH = t("ZodIPv6", (a, b) => {
			b_.init(a, b), ff.init(a, b)
		})
		function fI(a) {
			return dr(fH, a)
		}
		let fJ = t("ZodCIDRv4", (a, b) => {
			b0.init(a, b), ff.init(a, b)
		})
		function fK(a) {
			return ds(fJ, a)
		}
		let fL = t("ZodCIDRv6", (a, b) => {
			b1.init(a, b), ff.init(a, b)
		})
		function fM(a) {
			return dt(fL, a)
		}
		let fN = t("ZodBase64", (a, b) => {
			b3.init(a, b), ff.init(a, b)
		})
		function fO(a) {
			return du(fN, a)
		}
		let fP = t("ZodBase64URL", (a, b) => {
			b5.init(a, b), ff.init(a, b)
		})
		function fQ(a) {
			return dv(fP, a)
		}
		let fR = t("ZodE164", (a, b) => {
			b6.init(a, b), ff.init(a, b)
		})
		function fS(a) {
			return dw(fR, a)
		}
		let fT = t("ZodJWT", (a, b) => {
			b8.init(a, b), ff.init(a, b)
		})
		function fU(a) {
			return dx(fT, a)
		}
		let fV = t("ZodCustomStringFormat", (a, b) => {
			b9.init(a, b), ff.init(a, b)
		})
		function fW(a, b, c = {}) {
			return eR(fV, a, b, c)
		}
		let fX = t("ZodNumber", (a, b) => {
			ca.init(a, b),
				fb.init(a, b),
				(a.gt = (b, c) => a.check(d0(b, c))),
				(a.gte = (b, c) => a.check(d1(b, c))),
				(a.min = (b, c) => a.check(d1(b, c))),
				(a.lt = (b, c) => a.check(d$(b, c))),
				(a.lte = (b, c) => a.check(d_(b, c))),
				(a.max = (b, c) => a.check(d_(b, c))),
				(a.int = (b) => a.check(f$(b))),
				(a.safe = (b) => a.check(f$(b))),
				(a.positive = (b) => a.check(d0(0, b))),
				(a.nonnegative = (b) => a.check(d1(0, b))),
				(a.negative = (b) => a.check(d$(0, b))),
				(a.nonpositive = (b) => a.check(d_(0, b))),
				(a.multipleOf = (b, c) => a.check(d6(b, c))),
				(a.step = (b, c) => a.check(d6(b, c))),
				(a.finite = () => a)
			let c = a._zod.bag
			;(a.minValue = Math.max(c.minimum ?? -1 / 0, c.exclusiveMinimum ?? -1 / 0) ?? null),
				(a.maxValue = Math.min(c.maximum ?? 1 / 0, c.exclusiveMaximum ?? 1 / 0) ?? null),
				(a.isInt = (c.format ?? "").includes("int") || Number.isSafeInteger(c.multipleOf ?? 0.5)),
				(a.isFinite = !0),
				(a.format = c.format ?? null)
		})
		function fY(a) {
			return dD(fX, a)
		}
		let fZ = t("ZodNumberFormat", (a, b) => {
			cb.init(a, b), fX.init(a, b)
		})
		function f$(a) {
			return dF(fZ, a)
		}
		function f_(a) {
			return dG(fZ, a)
		}
		function f0(a) {
			return dH(fZ, a)
		}
		function f1(a) {
			return dI(fZ, a)
		}
		function f2(a) {
			return dJ(fZ, a)
		}
		let f3 = t("ZodBoolean", (a, b) => {
			cc.init(a, b), fb.init(a, b)
		})
		function f4(a) {
			return dK(f3, a)
		}
		let f5 = t("ZodBigInt", (a, b) => {
			cd.init(a, b),
				fb.init(a, b),
				(a.gte = (b, c) => a.check(d1(b, c))),
				(a.min = (b, c) => a.check(d1(b, c))),
				(a.gt = (b, c) => a.check(d0(b, c))),
				(a.gte = (b, c) => a.check(d1(b, c))),
				(a.min = (b, c) => a.check(d1(b, c))),
				(a.lt = (b, c) => a.check(d$(b, c))),
				(a.lte = (b, c) => a.check(d_(b, c))),
				(a.max = (b, c) => a.check(d_(b, c))),
				(a.positive = (b) => a.check(d0(BigInt(0), b))),
				(a.negative = (b) => a.check(d$(BigInt(0), b))),
				(a.nonpositive = (b) => a.check(d_(BigInt(0), b))),
				(a.nonnegative = (b) => a.check(d1(BigInt(0), b))),
				(a.multipleOf = (b, c) => a.check(d6(b, c)))
			let c = a._zod.bag
			;(a.minValue = c.minimum ?? null), (a.maxValue = c.maximum ?? null), (a.format = c.format ?? null)
		})
		function f6(a) {
			return dM(f5, a)
		}
		let f7 = t("ZodBigIntFormat", (a, b) => {
			ce.init(a, b), f5.init(a, b)
		})
		function f8(a) {
			return dO(f7, a)
		}
		function f9(a) {
			return dP(f7, a)
		}
		let ga = t("ZodSymbol", (a, b) => {
			cf.init(a, b), fb.init(a, b)
		})
		function gb(a) {
			return dQ(ga, a)
		}
		let gc = t("ZodUndefined", (a, b) => {
			cg.init(a, b), fb.init(a, b)
		})
		function gd(a) {
			return dR(gc, a)
		}
		let ge = t("ZodNull", (a, b) => {
			ch.init(a, b), fb.init(a, b)
		})
		function gf(a) {
			return dS(ge, a)
		}
		let gg = t("ZodAny", (a, b) => {
			ci.init(a, b), fb.init(a, b)
		})
		function gh() {
			return dT(gg)
		}
		let gi = t("ZodUnknown", (a, b) => {
			cj.init(a, b), fb.init(a, b)
		})
		function gj() {
			return dU(gi)
		}
		let gk = t("ZodNever", (a, b) => {
			ck.init(a, b), fb.init(a, b)
		})
		function gl(a) {
			return dV(gk, a)
		}
		let gm = t("ZodVoid", (a, b) => {
			cl.init(a, b), fb.init(a, b)
		})
		function gn(a) {
			return dW(gm, a)
		}
		let go = t("ZodDate", (a, b) => {
			cm.init(a, b), fb.init(a, b), (a.min = (b, c) => a.check(d1(b, c))), (a.max = (b, c) => a.check(d_(b, c)))
			let c = a._zod.bag
			;(a.minDate = c.minimum ? new Date(c.minimum) : null), (a.maxDate = c.maximum ? new Date(c.maximum) : null)
		})
		function gp(a) {
			return dX(go, a)
		}
		let gq = t("ZodArray", (a, b) => {
			co.init(a, b),
				fb.init(a, b),
				(a.element = b.element),
				(a.min = (b, c) => a.check(eb(b, c))),
				(a.nonempty = (b) => a.check(eb(1, b))),
				(a.max = (b, c) => a.check(ea(b, c))),
				(a.length = (b, c) => a.check(ec(b, c))),
				(a.unwrap = () => a.element)
		})
		function gr(a, b) {
			return eq(gq, a, b)
		}
		function gs(a) {
			return gQ(Object.keys(a._zod.def.shape))
		}
		let gt = t("ZodObject", (a, b) => {
			cr.init(a, b),
				fb.init(a, b),
				c_.defineLazy(a, "shape", () => b.shape),
				(a.keyof = () => gN(Object.keys(a._zod.def.shape))),
				(a.catchall = (b) => a.clone({ ...a._zod.def, catchall: b })),
				(a.passthrough = () => a.clone({ ...a._zod.def, catchall: gj() })),
				(a.loose = () => a.clone({ ...a._zod.def, catchall: gj() })),
				(a.strict = () => a.clone({ ...a._zod.def, catchall: gl() })),
				(a.strip = () => a.clone({ ...a._zod.def, catchall: void 0 })),
				(a.extend = (b) => c_.extend(a, b)),
				(a.merge = (b) => c_.merge(a, b)),
				(a.pick = (b) => c_.pick(a, b)),
				(a.omit = (b) => c_.omit(a, b)),
				(a.partial = (...b) => c_.partial(gV, a, b[0])),
				(a.required = (...b) => c_.required(g2, a, b[0]))
		})
		function gu(a, b) {
			return new gt({
				type: "object",
				get shape() {
					return c_.assignProp(this, "shape", { ...a }), this.shape
				},
				...c_.normalizeParams(b),
			})
		}
		function gv(a, b) {
			return new gt({
				type: "object",
				get shape() {
					return c_.assignProp(this, "shape", { ...a }), this.shape
				},
				catchall: gl(),
				...c_.normalizeParams(b),
			})
		}
		function gw(a, b) {
			return new gt({
				type: "object",
				get shape() {
					return c_.assignProp(this, "shape", { ...a }), this.shape
				},
				catchall: gj(),
				...c_.normalizeParams(b),
			})
		}
		let gx = t("ZodUnion", (a, b) => {
			ct.init(a, b), fb.init(a, b), (a.options = b.options)
		})
		function gy(a, b) {
			return new gx({ type: "union", options: a, ...c_.normalizeParams(b) })
		}
		let gz = t("ZodDiscriminatedUnion", (a, b) => {
			gx.init(a, b), cu.init(a, b)
		})
		function gA(a, b, c) {
			return new gz({ type: "union", options: b, discriminator: a, ...c_.normalizeParams(c) })
		}
		let gB = t("ZodIntersection", (a, b) => {
			cv.init(a, b), fb.init(a, b)
		})
		function gC(a, b) {
			return new gB({ type: "intersection", left: a, right: b })
		}
		let gD = t("ZodTuple", (a, b) => {
			cx.init(a, b), fb.init(a, b), (a.rest = (b) => a.clone({ ...a._zod.def, rest: b }))
		})
		function gE(a, b, c) {
			let d = b instanceof bI,
				e = d ? c : b
			return new gD({ type: "tuple", items: a, rest: d ? b : null, ...c_.normalizeParams(e) })
		}
		let gF = t("ZodRecord", (a, b) => {
			cz.init(a, b), fb.init(a, b), (a.keyType = b.keyType), (a.valueType = b.valueType)
		})
		function gG(a, b, c) {
			return new gF({ type: "record", keyType: a, valueType: b, ...c_.normalizeParams(c) })
		}
		function gH(a, b, c) {
			return new gF({ type: "record", keyType: gy([a, gl()]), valueType: b, ...c_.normalizeParams(c) })
		}
		let gI = t("ZodMap", (a, b) => {
			cA.init(a, b), fb.init(a, b), (a.keyType = b.keyType), (a.valueType = b.valueType)
		})
		function gJ(a, b, c) {
			return new gI({ type: "map", keyType: a, valueType: b, ...c_.normalizeParams(c) })
		}
		let gK = t("ZodSet", (a, b) => {
			cC.init(a, b),
				fb.init(a, b),
				(a.min = (...b) => a.check(d8(...b))),
				(a.nonempty = (b) => a.check(d8(1, b))),
				(a.max = (...b) => a.check(d7(...b))),
				(a.size = (...b) => a.check(d9(...b)))
		})
		function gL(a, b) {
			return new gK({ type: "set", valueType: a, ...c_.normalizeParams(b) })
		}
		let gM = t("ZodEnum", (a, b) => {
			cE.init(a, b), fb.init(a, b), (a.enum = b.entries), (a.options = Object.values(b.entries))
			let c = new Set(Object.keys(b.entries))
			;(a.extract = (a, d) => {
				let e = {}
				for (let d of a)
					if (c.has(d)) e[d] = b.entries[d]
					else throw Error(`Key ${d} not found in enum`)
				return new gM({ ...b, checks: [], ...c_.normalizeParams(d), entries: e })
			}),
				(a.exclude = (a, d) => {
					let e = { ...b.entries }
					for (let b of a)
						if (c.has(b)) delete e[b]
						else throw Error(`Key ${b} not found in enum`)
					return new gM({ ...b, checks: [], ...c_.normalizeParams(d), entries: e })
				})
		})
		function gN(a, b) {
			return new gM({
				type: "enum",
				entries: Array.isArray(a) ? Object.fromEntries(a.map((a) => [a, a])) : a,
				...c_.normalizeParams(b),
			})
		}
		function gO(a, b) {
			return new gM({ type: "enum", entries: a, ...c_.normalizeParams(b) })
		}
		let gP = t("ZodLiteral", (a, b) => {
			cF.init(a, b),
				fb.init(a, b),
				(a.values = new Set(b.values)),
				Object.defineProperty(a, "value", {
					get() {
						if (b.values.length > 1)
							throw Error("This schema contains multiple valid literal values. Use `.values` instead.")
						return b.values[0]
					},
				})
		})
		function gQ(a, b) {
			return new gP({ type: "literal", values: Array.isArray(a) ? a : [a], ...c_.normalizeParams(b) })
		}
		let gR = t("ZodFile", (a, b) => {
			cG.init(a, b),
				fb.init(a, b),
				(a.min = (b, c) => a.check(d8(b, c))),
				(a.max = (b, c) => a.check(d7(b, c))),
				(a.mime = (b, c) => a.check(ek(Array.isArray(b) ? b : [b], c)))
		})
		function gS(a) {
			return eB(gR, a)
		}
		let gT = t("ZodTransform", (a, b) => {
			cH.init(a, b),
				fb.init(a, b),
				(a._zod.parse = (c, d) => {
					c.addIssue = (d) => {
						"string" == typeof d
							? c.issues.push(c_.issue(d, c.value, b))
							: (d.fatal && (d.continue = !1),
								d.code ?? (d.code = "custom"),
								d.input ?? (d.input = c.value),
								d.inst ?? (d.inst = a),
								d.continue ?? (d.continue = !0),
								c.issues.push(c_.issue(d)))
					}
					let e = b.transform(c.value, c)
					return e instanceof Promise ? e.then((a) => ((c.value = a), c)) : ((c.value = e), c)
				})
		})
		function gU(a) {
			return new gT({ type: "transform", transform: a })
		}
		let gV = t("ZodOptional", (a, b) => {
			cI.init(a, b), fb.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function gW(a) {
			return new gV({ type: "optional", innerType: a })
		}
		let gX = t("ZodNullable", (a, b) => {
			cJ.init(a, b), fb.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function gY(a) {
			return new gX({ type: "nullable", innerType: a })
		}
		function gZ(a) {
			return gW(gY(a))
		}
		let g$ = t("ZodDefault", (a, b) => {
			cK.init(a, b), fb.init(a, b), (a.unwrap = () => a._zod.def.innerType), (a.removeDefault = a.unwrap)
		})
		function g_(a, b) {
			return new g$({
				type: "default",
				innerType: a,
				get defaultValue() {
					return "function" == typeof b ? b() : b
				},
			})
		}
		let g0 = t("ZodPrefault", (a, b) => {
			cM.init(a, b), fb.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function g1(a, b) {
			return new g0({
				type: "prefault",
				innerType: a,
				get defaultValue() {
					return "function" == typeof b ? b() : b
				},
			})
		}
		let g2 = t("ZodNonOptional", (a, b) => {
			cN.init(a, b), fb.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function g3(a, b) {
			return new g2({ type: "nonoptional", innerType: a, ...c_.normalizeParams(b) })
		}
		let g4 = t("ZodSuccess", (a, b) => {
			cP.init(a, b), fb.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function g5(a) {
			return new g4({ type: "success", innerType: a })
		}
		let g6 = t("ZodCatch", (a, b) => {
			cQ.init(a, b), fb.init(a, b), (a.unwrap = () => a._zod.def.innerType), (a.removeCatch = a.unwrap)
		})
		function g7(a, b) {
			return new g6({ type: "catch", innerType: a, catchValue: "function" == typeof b ? b : () => b })
		}
		let g8 = t("ZodNaN", (a, b) => {
			cR.init(a, b), fb.init(a, b)
		})
		function g9(a) {
			return dZ(g8, a)
		}
		let ha = t("ZodPipe", (a, b) => {
			cS.init(a, b), fb.init(a, b), (a.in = b.in), (a.out = b.out)
		})
		function hb(a, b) {
			return new ha({ type: "pipe", in: a, out: b })
		}
		let hc = t("ZodReadonly", (a, b) => {
			cU.init(a, b), fb.init(a, b)
		})
		function hd(a) {
			return new hc({ type: "readonly", innerType: a })
		}
		let he = t("ZodTemplateLiteral", (a, b) => {
			cW.init(a, b), fb.init(a, b)
		})
		function hf(a, b) {
			return new he({ type: "template_literal", parts: a, ...c_.normalizeParams(b) })
		}
		let hg = t("ZodLazy", (a, b) => {
			cY.init(a, b), fb.init(a, b), (a.unwrap = () => a._zod.def.getter())
		})
		function hh(a) {
			return new hg({ type: "lazy", getter: a })
		}
		let hi = t("ZodPromise", (a, b) => {
			cX.init(a, b), fb.init(a, b), (a.unwrap = () => a._zod.def.innerType)
		})
		function hj(a) {
			return new hi({ type: "promise", innerType: a })
		}
		let hk = t("ZodCustom", (a, b) => {
			cZ.init(a, b), fb.init(a, b)
		})
		function hl(a) {
			let b = new bi({ check: "custom" })
			return (b._zod.check = a), b
		}
		function hm(a, b) {
			return eO(hk, a ?? (() => !0), b)
		}
		function hn(a, b = {}) {
			return eP(hk, a, b)
		}
		function ho(a) {
			let b = hl(
				(c) => (
					(c.addIssue = (a) => {
						"string" == typeof a
							? c.issues.push(c_.issue(a, c.value, b._zod.def))
							: (a.fatal && (a.continue = !1),
								a.code ?? (a.code = "custom"),
								a.input ?? (a.input = c.value),
								a.inst ?? (a.inst = b),
								a.continue ?? (a.continue = !b._zod.def.abort),
								c.issues.push(c_.issue(a)))
					}),
					a(c.value, c)
				),
			)
			return b
		}
		function hp(a, b = { error: `Input not instance of ${a.name}` }) {
			let c = new hk({
				type: "custom",
				check: "custom",
				fn: (b) => b instanceof a,
				abort: !0,
				...c_.normalizeParams(b),
			})
			return (c._zod.bag.Class = a), c
		}
		let hq = (...a) => eQ({ Pipe: ha, Boolean: f3, String: fd, Transform: gT }, ...a)
		function hr(a) {
			let b = hh(() => gy([fe(a), fY(), f4(), gf(), gr(b), gG(fe(), b)]))
			return b
		}
		function hs(a, b) {
			return hb(gU(a), b)
		}
		a.i(17398),
			a.s([], 43274),
			a.i(43274),
			a.s(
				[
					"endsWith",
					() => ei,
					"gt",
					() => d0,
					"gte",
					() => d1,
					"includes",
					() => eg,
					"length",
					() => ec,
					"lowercase",
					() => ee,
					"lt",
					() => d$,
					"lte",
					() => d_,
					"maxLength",
					() => ea,
					"maxSize",
					() => d7,
					"mime",
					() => ek,
					"minLength",
					() => eb,
					"minSize",
					() => d8,
					"multipleOf",
					() => d6,
					"negative",
					() => d3,
					"nonnegative",
					() => d5,
					"nonpositive",
					() => d4,
					"normalize",
					() => em,
					"overwrite",
					() => el,
					"positive",
					() => d2,
					"property",
					() => ej,
					"regex",
					() => ed,
					"size",
					() => d9,
					"startsWith",
					() => eh,
					"toLowerCase",
					() => eo,
					"toUpperCase",
					() => ep,
					"trim",
					() => en,
					"uppercase",
					() => ef,
				],
				85315,
			),
			a.i(85315),
			a.i(52971),
			a.i(63374)
		let ht = {
			invalid_type: "invalid_type",
			too_big: "too_big",
			too_small: "too_small",
			invalid_format: "invalid_format",
			not_multiple_of: "not_multiple_of",
			unrecognized_keys: "unrecognized_keys",
			invalid_union: "invalid_union",
			invalid_key: "invalid_key",
			invalid_element: "invalid_element",
			invalid_value: "invalid_value",
			custom: "custom",
		}
		function hu(a) {
			x({ customError: a })
		}
		function hv() {
			return x().customError
		}
		a.s(["ZodIssueCode", 0, ht, "getErrorMap", () => hv, "setErrorMap", () => hu], 9211),
			a.i(9211),
			a.s(
				[
					"$brand",
					0,
					u,
					"ZodIssueCode",
					0,
					ht,
					"config",
					() => x,
					"getErrorMap",
					() => hv,
					"setErrorMap",
					() => hu,
				],
				58462,
			),
			a.i(58462)
		var hw = a.i(27947)
		function hx(a) {
			return da(fd, a)
		}
		function hy(a) {
			return dE(fX, a)
		}
		function hz(a) {
			return dL(f3, a)
		}
		function hA(a) {
			return dN(f5, a)
		}
		function hB(a) {
			return dY(go, a)
		}
		a.s(["bigint", () => hA, "boolean", () => hz, "date", () => hB, "number", () => hy, "string", () => hx], 89828)
		var hC = a.i(89828)
		a.s(
			[
				"$brand",
				0,
				u,
				"$input",
				0,
				c5,
				"$output",
				0,
				c4,
				"NEVER",
				0,
				s,
				"TimePrecision",
				0,
				dy,
				"ZodAny",
				0,
				gg,
				"ZodArray",
				0,
				gq,
				"ZodBase64",
				0,
				fN,
				"ZodBase64URL",
				0,
				fP,
				"ZodBigInt",
				0,
				f5,
				"ZodBigIntFormat",
				0,
				f7,
				"ZodBoolean",
				0,
				f3,
				"ZodCIDRv4",
				0,
				fJ,
				"ZodCIDRv6",
				0,
				fL,
				"ZodCUID",
				0,
				fv,
				"ZodCUID2",
				0,
				fx,
				"ZodCatch",
				0,
				g6,
				"ZodCustom",
				0,
				hk,
				"ZodCustomStringFormat",
				0,
				fV,
				"ZodDate",
				0,
				go,
				"ZodDefault",
				0,
				g$,
				"ZodDiscriminatedUnion",
				0,
				gz,
				"ZodE164",
				0,
				fR,
				"ZodEmail",
				0,
				fg,
				"ZodEmoji",
				0,
				fr,
				"ZodEnum",
				0,
				gM,
				"ZodError",
				0,
				e5,
				"ZodFile",
				0,
				gR,
				"ZodGUID",
				0,
				fi,
				"ZodIPv4",
				0,
				fF,
				"ZodIPv6",
				0,
				fH,
				"ZodISODate",
				0,
				e$,
				"ZodISODateTime",
				0,
				eY,
				"ZodISODuration",
				0,
				e2,
				"ZodISOTime",
				0,
				e0,
				"ZodIntersection",
				0,
				gB,
				"ZodIssueCode",
				0,
				ht,
				"ZodJWT",
				0,
				fT,
				"ZodKSUID",
				0,
				fD,
				"ZodLazy",
				0,
				hg,
				"ZodLiteral",
				0,
				gP,
				"ZodMap",
				0,
				gI,
				"ZodNaN",
				0,
				g8,
				"ZodNanoID",
				0,
				ft,
				"ZodNever",
				0,
				gk,
				"ZodNonOptional",
				0,
				g2,
				"ZodNull",
				0,
				ge,
				"ZodNullable",
				0,
				gX,
				"ZodNumber",
				0,
				fX,
				"ZodNumberFormat",
				0,
				fZ,
				"ZodObject",
				0,
				gt,
				"ZodOptional",
				0,
				gV,
				"ZodPipe",
				0,
				ha,
				"ZodPrefault",
				0,
				g0,
				"ZodPromise",
				0,
				hi,
				"ZodReadonly",
				0,
				hc,
				"ZodRealError",
				0,
				e6,
				"ZodRecord",
				0,
				gF,
				"ZodSet",
				0,
				gK,
				"ZodString",
				0,
				fd,
				"ZodStringFormat",
				0,
				ff,
				"ZodSuccess",
				0,
				g4,
				"ZodSymbol",
				0,
				ga,
				"ZodTemplateLiteral",
				0,
				he,
				"ZodTransform",
				0,
				gT,
				"ZodTuple",
				0,
				gD,
				"ZodType",
				0,
				fb,
				"ZodULID",
				0,
				fz,
				"ZodURL",
				0,
				fp,
				"ZodUUID",
				0,
				fk,
				"ZodUndefined",
				0,
				gc,
				"ZodUnion",
				0,
				gx,
				"ZodUnknown",
				0,
				gi,
				"ZodVoid",
				0,
				gm,
				"ZodXID",
				0,
				fB,
				"_ZodString",
				0,
				fc,
				"_default",
				() => g_,
				"any",
				() => gh,
				"array",
				() => gr,
				"base64",
				() => fO,
				"base64url",
				() => fQ,
				"bigint",
				() => f6,
				"boolean",
				() => f4,
				"catch",
				() => g7,
				"check",
				() => hl,
				"cidrv4",
				() => fK,
				"cidrv6",
				() => fM,
				"clone",
				() => Y,
				"coerce",
				0,
				hC,
				"config",
				() => x,
				"core",
				0,
				eX,
				"cuid",
				() => fw,
				"cuid2",
				() => fy,
				"custom",
				() => hm,
				"date",
				() => gp,
				"discriminatedUnion",
				() => gA,
				"e164",
				() => fS,
				"email",
				() => fh,
				"emoji",
				() => fs,
				"endsWith",
				() => ei,
				"enum",
				() => gN,
				"file",
				() => gS,
				"flattenError",
				() => aw,
				"float32",
				() => f_,
				"float64",
				() => f0,
				"formatError",
				() => ax,
				"function",
				() => eT,
				"getErrorMap",
				() => hv,
				"globalRegistry",
				0,
				c8,
				"gt",
				() => d0,
				"gte",
				() => d1,
				"guid",
				() => fj,
				"includes",
				() => eg,
				"instanceof",
				() => hp,
				"int",
				() => f$,
				"int32",
				() => f1,
				"int64",
				() => f8,
				"intersection",
				() => gC,
				"ipv4",
				() => fG,
				"ipv6",
				() => fI,
				"iso",
				0,
				hw,
				"json",
				() => hr,
				"jwt",
				() => fU,
				"keyof",
				() => gs,
				"ksuid",
				() => fE,
				"lazy",
				() => hh,
				"length",
				() => ec,
				"literal",
				() => gQ,
				"locales",
				0,
				c3,
				"looseObject",
				() => gw,
				"lowercase",
				() => ee,
				"lt",
				() => d$,
				"lte",
				() => d_,
				"map",
				() => gJ,
				"maxLength",
				() => ea,
				"maxSize",
				() => d7,
				"mime",
				() => ek,
				"minLength",
				() => eb,
				"minSize",
				() => d8,
				"multipleOf",
				() => d6,
				"nan",
				() => g9,
				"nanoid",
				() => fu,
				"nativeEnum",
				() => gO,
				"negative",
				() => d3,
				"never",
				() => gl,
				"nonnegative",
				() => d5,
				"nonoptional",
				() => g3,
				"nonpositive",
				() => d4,
				"normalize",
				() => em,
				"null",
				() => gf,
				"nullable",
				() => gY,
				"nullish",
				() => gZ,
				"number",
				() => fY,
				"object",
				() => gu,
				"optional",
				() => gW,
				"overwrite",
				() => el,
				"parse",
				0,
				e7,
				"parseAsync",
				0,
				e8,
				"partialRecord",
				() => gH,
				"pipe",
				() => hb,
				"positive",
				() => d2,
				"prefault",
				() => g1,
				"preprocess",
				() => hs,
				"prettifyError",
				() => aA,
				"promise",
				() => hj,
				"property",
				() => ej,
				"readonly",
				() => hd,
				"record",
				() => gG,
				"refine",
				() => hn,
				"regex",
				() => ed,
				"regexes",
				() => c0,
				"registry",
				() => c7,
				"safeParse",
				0,
				e9,
				"safeParseAsync",
				0,
				fa,
				"set",
				() => gL,
				"setErrorMap",
				() => hu,
				"size",
				() => d9,
				"startsWith",
				() => eh,
				"strictObject",
				() => gv,
				"string",
				() => fe,
				"stringFormat",
				() => fW,
				"stringbool",
				0,
				hq,
				"success",
				() => g5,
				"superRefine",
				() => ho,
				"symbol",
				() => gb,
				"templateLiteral",
				() => hf,
				"toJSONSchema",
				() => eV,
				"toLowerCase",
				() => eo,
				"toUpperCase",
				() => ep,
				"transform",
				() => gU,
				"treeifyError",
				() => ay,
				"trim",
				() => en,
				"tuple",
				() => gE,
				"uint32",
				() => f2,
				"uint64",
				() => f9,
				"ulid",
				() => fA,
				"undefined",
				() => gd,
				"union",
				() => gy,
				"unknown",
				() => gj,
				"uppercase",
				() => ef,
				"url",
				() => fq,
				"uuid",
				() => fl,
				"uuidv4",
				() => fm,
				"uuidv6",
				() => fn,
				"uuidv7",
				() => fo,
				"void",
				() => gn,
				"xid",
				() => fC,
			],
			10742,
		),
			a.i(10742)
		var hD = r.z.enum(["low", "medium", "high"])
		r.z.union([hD, r.z.literal("minimal")])
		var hE = r.z.enum(["none", "minimal", "low", "medium", "high", "xhigh"]),
			hF = r.z.enum(["disable", "none", "minimal", "low", "medium", "high", "xhigh"]),
			hG = r.z.enum(["low", "medium", "high"]),
			hH = r.z.enum(["default", "flex", "priority"]),
			hI = r.z.enum(["max_tokens", "temperature", "reasoning", "include_reasoning"]),
			hJ = r.z.object({
				maxTokens: r.z.number().nullish(),
				maxThinkingTokens: r.z.number().nullish(),
				contextWindow: r.z.number(),
				supportsImages: r.z.boolean().optional(),
				supportsPromptCache: r.z.boolean(),
				promptCacheRetention: r.z.enum(["in_memory", "24h"]).optional(),
				supportsVerbosity: r.z.boolean().optional(),
				supportsReasoningBudget: r.z.boolean().optional(),
				supportsReasoningBinary: r.z.boolean().optional(),
				supportsTemperature: r.z.boolean().optional(),
				defaultTemperature: r.z.number().optional(),
				requiredReasoningBudget: r.z.boolean().optional(),
				supportsReasoningEffort: r.z
					.union([
						r.z.boolean(),
						r.z.array(r.z.enum(["disable", "none", "minimal", "low", "medium", "high", "xhigh"])),
					])
					.optional(),
				requiredReasoningEffort: r.z.boolean().optional(),
				preserveReasoning: r.z.boolean().optional(),
				supportedParameters: r.z.array(hI).optional(),
				inputPrice: r.z.number().optional(),
				outputPrice: r.z.number().optional(),
				cacheWritesPrice: r.z.number().optional(),
				cacheReadsPrice: r.z.number().optional(),
				description: r.z.string().optional(),
				reasoningEffort: hE.optional(),
				minTokensPerCachePoint: r.z.number().optional(),
				maxCachePoints: r.z.number().optional(),
				cachableFields: r.z.array(r.z.string()).optional(),
				deprecated: r.z.boolean().optional(),
				isStealthModel: r.z.boolean().optional(),
				isFree: r.z.boolean().optional(),
				excludedTools: r.z.array(r.z.string()).optional(),
				includedTools: r.z.array(r.z.string()).optional(),
				tiers: r.z
					.array(
						r.z.object({
							name: hH.optional(),
							contextWindow: r.z.number(),
							inputPrice: r.z.number().optional(),
							outputPrice: r.z.number().optional(),
							cacheWritesPrice: r.z.number().optional(),
							cacheReadsPrice: r.z.number().optional(),
						}),
					)
					.optional(),
			}),
			hK = r.z.object({
				codebaseIndexEnabled: r.z.boolean().optional(),
				codebaseIndexQdrantUrl: r.z.string().optional(),
				codebaseIndexEmbedderProvider: r.z
					.enum([
						"openai",
						"ollama",
						"openai-compatible",
						"gemini",
						"mistral",
						"vercel-ai-gateway",
						"bedrock",
						"openrouter",
					])
					.optional(),
				codebaseIndexEmbedderBaseUrl: r.z.string().optional(),
				codebaseIndexEmbedderModelId: r.z.string().optional(),
				codebaseIndexEmbedderModelDimension: r.z.number().optional(),
				codebaseIndexSearchMinScore: r.z.number().min(0).max(1).optional(),
				codebaseIndexSearchMaxResults: r.z.number().min(10).max(200).optional(),
				codebaseIndexOpenAiCompatibleBaseUrl: r.z.string().optional(),
				codebaseIndexOpenAiCompatibleModelDimension: r.z.number().optional(),
				codebaseIndexBedrockRegion: r.z.string().optional(),
				codebaseIndexBedrockProfile: r.z.string().optional(),
				codebaseIndexOpenRouterSpecificProvider: r.z.string().optional(),
			}),
			hL = r.z.object({
				openai: r.z.record(r.z.string(), r.z.object({ dimension: r.z.number() })).optional(),
				ollama: r.z.record(r.z.string(), r.z.object({ dimension: r.z.number() })).optional(),
				"openai-compatible": r.z.record(r.z.string(), r.z.object({ dimension: r.z.number() })).optional(),
				gemini: r.z.record(r.z.string(), r.z.object({ dimension: r.z.number() })).optional(),
				mistral: r.z.record(r.z.string(), r.z.object({ dimension: r.z.number() })).optional(),
				"vercel-ai-gateway": r.z.record(r.z.string(), r.z.object({ dimension: r.z.number() })).optional(),
				openrouter: r.z.record(r.z.string(), r.z.object({ dimension: r.z.number() })).optional(),
				bedrock: r.z.record(r.z.string(), r.z.object({ dimension: r.z.number() })).optional(),
			}),
			hM = r.z.object({
				codeIndexOpenAiKey: r.z.string().optional(),
				codeIndexQdrantApiKey: r.z.string().optional(),
				codebaseIndexOpenAiCompatibleBaseUrl: r.z.string().optional(),
				codebaseIndexOpenAiCompatibleApiKey: r.z.string().optional(),
				codebaseIndexOpenAiCompatibleModelDimension: r.z.number().optional(),
				codebaseIndexGeminiApiKey: r.z.string().optional(),
				codebaseIndexMistralApiKey: r.z.string().optional(),
				codebaseIndexVercelAiGatewayApiKey: r.z.string().optional(),
				codebaseIndexOpenRouterApiKey: r.z.string().optional(),
			})
		;[
			{ value: "us-east-1", label: "us-east-1" },
			{ value: "us-east-2", label: "us-east-2" },
			{ value: "us-west-1", label: "us-west-1" },
			{ value: "us-west-2", label: "us-west-2" },
			{ value: "ap-northeast-1", label: "ap-northeast-1" },
			{ value: "ap-northeast-2", label: "ap-northeast-2" },
			{ value: "ap-northeast-3", label: "ap-northeast-3" },
			{ value: "ap-south-1", label: "ap-south-1" },
			{ value: "ap-south-2", label: "ap-south-2" },
			{ value: "ap-southeast-1", label: "ap-southeast-1" },
			{ value: "ap-southeast-2", label: "ap-southeast-2" },
			{ value: "ap-east-1", label: "ap-east-1" },
			{ value: "eu-central-1", label: "eu-central-1" },
			{ value: "eu-central-2", label: "eu-central-2" },
			{ value: "eu-west-1", label: "eu-west-1" },
			{ value: "eu-west-2", label: "eu-west-2" },
			{ value: "eu-west-3", label: "eu-west-3" },
			{ value: "eu-north-1", label: "eu-north-1" },
			{ value: "eu-south-1", label: "eu-south-1" },
			{ value: "eu-south-2", label: "eu-south-2" },
			{ value: "ca-central-1", label: "ca-central-1" },
			{ value: "sa-east-1", label: "sa-east-1" },
			{ value: "us-gov-east-1", label: "us-gov-east-1" },
			{ value: "us-gov-west-1", label: "us-gov-west-1" },
		].sort((a, b) => a.value.localeCompare(b.value))
		var hN = r.z.object({
				input: r.z.string(),
				output: r.z.string(),
				input_cache_read: r.z.string().optional(),
				input_cache_write: r.z.string().optional(),
			}),
			hO = r.z.object({
				id: r.z.string(),
				object: r.z.literal("model"),
				created: r.z.number(),
				owned_by: r.z.string(),
				name: r.z.string(),
				description: r.z.string(),
				context_window: r.z.number(),
				max_tokens: r.z.number(),
				type: r.z.literal("language"),
				tags: r.z.array(r.z.string()).optional(),
				pricing: hN,
				deprecated: r.z.boolean().optional(),
				default_temperature: r.z.number().optional(),
				settings: r.z.record(r.z.string(), r.z.unknown()).optional(),
				versionedSettings: r.z.record(r.z.string(), r.z.record(r.z.string(), r.z.unknown())).optional(),
			})
		r.z.object({ object: r.z.literal("list"), data: r.z.array(hO) })
		var hP = {
			"MiniMax-M2.5": {
				maxTokens: 16384,
				contextWindow: 204800,
				supportsImages: !1,
				supportsPromptCache: !0,
				includedTools: ["search_and_replace"],
				excludedTools: ["apply_diff"],
				preserveReasoning: !0,
				inputPrice: 0.3,
				outputPrice: 1.2,
				cacheWritesPrice: 0.375,
				cacheReadsPrice: 0.03,
				description:
					"MiniMax M2.5, the latest MiniMax model with enhanced coding and agentic capabilities, building on the strengths of the M2 series.",
			},
			"MiniMax-M2": {
				maxTokens: 16384,
				contextWindow: 192e3,
				supportsImages: !1,
				supportsPromptCache: !0,
				includedTools: ["search_and_replace"],
				excludedTools: ["apply_diff"],
				preserveReasoning: !0,
				inputPrice: 0.3,
				outputPrice: 1.2,
				cacheWritesPrice: 0.375,
				cacheReadsPrice: 0.03,
				description:
					"MiniMax M2, a model born for Agents and code, featuring Top-tier Coding Capabilities, Powerful Agentic Performance, and Ultimate Cost-Effectiveness & Speed.",
			},
			"MiniMax-M2-Stable": {
				maxTokens: 16384,
				contextWindow: 192e3,
				supportsImages: !1,
				supportsPromptCache: !0,
				includedTools: ["search_and_replace"],
				excludedTools: ["apply_diff"],
				preserveReasoning: !0,
				inputPrice: 0.3,
				outputPrice: 1.2,
				cacheWritesPrice: 0.375,
				cacheReadsPrice: 0.03,
				description:
					"MiniMax M2 Stable (High Concurrency, Commercial Use), a model born for Agents and code, featuring Top-tier Coding Capabilities, Powerful Agentic Performance, and Ultimate Cost-Effectiveness & Speed.",
			},
			"MiniMax-M2.1": {
				maxTokens: 16384,
				contextWindow: 192e3,
				supportsImages: !1,
				supportsPromptCache: !0,
				includedTools: ["search_and_replace"],
				excludedTools: ["apply_diff"],
				preserveReasoning: !0,
				inputPrice: 0.3,
				outputPrice: 1.2,
				cacheWritesPrice: 0.375,
				cacheReadsPrice: 0.03,
				description:
					"MiniMax M2.1 builds on M2 with improved overall performance for agentic coding tasks and significantly faster response times.",
			},
		}
		hP["MiniMax-M2.5"]
		var hQ = [
				"openrouter",
				"vercel-ai-gateway",
				"litellm",
				"requesty",
				"roo",
				"unbound",
				"ollama",
				"lmstudio",
				"vscode-lm",
				"openai",
				"fake-ai",
				"anthropic",
				"bedrock",
				"baseten",
				"deepseek",
				"fireworks",
				"gemini",
				"gemini-cli",
				"mistral",
				"moonshot",
				"minimax",
				"openai-codex",
				"openai-native",
				"qwen-code",
				"roo",
				"sambanova",
				"vertex",
				"xai",
				"zai",
			],
			hR = r.z.enum(hQ),
			hS = r.z.enum([
				"cerebras",
				"chutes",
				"deepinfra",
				"doubao",
				"featherless",
				"groq",
				"huggingface",
				"io-intelligence",
			]),
			hT = r.z.union([hR, hS]),
			hU = r.z.object({
				id: r.z.string(),
				name: r.z.string(),
				apiProvider: hT.optional(),
				modelId: r.z.string().optional(),
			}),
			hV = r.z.object({
				includeMaxTokens: r.z.boolean().optional(),
				todoListEnabled: r.z.boolean().optional(),
				modelTemperature: r.z.number().nullish(),
				rateLimitSeconds: r.z.number().optional(),
				consecutiveMistakeLimit: r.z.number().min(0).optional(),
				enableReasoningEffort: r.z.boolean().optional(),
				reasoningEffort: hF.optional(),
				modelMaxTokens: r.z.number().optional(),
				modelMaxThinkingTokens: r.z.number().optional(),
				verbosity: hG.optional(),
			}),
			hW = hV.extend({ apiModelId: r.z.string().optional() }),
			hX = hW.extend({
				apiKey: r.z.string().optional(),
				anthropicBaseUrl: r.z.string().optional(),
				anthropicUseAuthToken: r.z.boolean().optional(),
				anthropicBeta1MContext: r.z.boolean().optional(),
			}),
			hY = hV.extend({
				openRouterApiKey: r.z.string().optional(),
				openRouterModelId: r.z.string().optional(),
				openRouterBaseUrl: r.z.string().optional(),
				openRouterSpecificProvider: r.z.string().optional(),
			}),
			hZ = hW.extend({
				awsAccessKey: r.z.string().optional(),
				awsSecretKey: r.z.string().optional(),
				awsSessionToken: r.z.string().optional(),
				awsRegion: r.z.string().optional(),
				awsUseCrossRegionInference: r.z.boolean().optional(),
				awsUseGlobalInference: r.z.boolean().optional(),
				awsUsePromptCache: r.z.boolean().optional(),
				awsProfile: r.z.string().optional(),
				awsUseProfile: r.z.boolean().optional(),
				awsApiKey: r.z.string().optional(),
				awsUseApiKey: r.z.boolean().optional(),
				awsCustomArn: r.z.string().optional(),
				awsModelContextWindow: r.z.number().optional(),
				awsBedrockEndpointEnabled: r.z.boolean().optional(),
				awsBedrockEndpoint: r.z.string().optional(),
				awsBedrock1MContext: r.z.boolean().optional(),
				awsBedrockServiceTier: r.z.enum(["STANDARD", "FLEX", "PRIORITY"]).optional(),
			}),
			h$ = hW.extend({
				vertexKeyFile: r.z.string().optional(),
				vertexJsonCredentials: r.z.string().optional(),
				vertexProjectId: r.z.string().optional(),
				vertexRegion: r.z.string().optional(),
				vertex1MContext: r.z.boolean().optional(),
			}),
			h_ = hV.extend({
				openAiBaseUrl: r.z.string().optional(),
				openAiApiKey: r.z.string().optional(),
				openAiR1FormatEnabled: r.z.boolean().optional(),
				openAiModelId: r.z.string().optional(),
				openAiCustomModelInfo: hJ.nullish(),
				openAiUseAzure: r.z.boolean().optional(),
				azureApiVersion: r.z.string().optional(),
				openAiStreamingEnabled: r.z.boolean().optional(),
				openAiHostHeader: r.z.string().optional(),
				openAiHeaders: r.z.record(r.z.string(), r.z.string()).optional(),
			}),
			h0 = hV.extend({
				ollamaModelId: r.z.string().optional(),
				ollamaBaseUrl: r.z.string().optional(),
				ollamaApiKey: r.z.string().optional(),
				ollamaNumCtx: r.z.number().int().min(128).optional(),
			}),
			h1 = hV.extend({
				vsCodeLmModelSelector: r.z
					.object({
						vendor: r.z.string().optional(),
						family: r.z.string().optional(),
						version: r.z.string().optional(),
						id: r.z.string().optional(),
					})
					.optional(),
			}),
			h2 = hV.extend({
				lmStudioModelId: r.z.string().optional(),
				lmStudioBaseUrl: r.z.string().optional(),
				lmStudioDraftModelId: r.z.string().optional(),
				lmStudioSpeculativeDecodingEnabled: r.z.boolean().optional(),
			}),
			h3 = hW.extend({ geminiApiKey: r.z.string().optional(), googleGeminiBaseUrl: r.z.string().optional() }),
			h4 = hW.extend({
				geminiCliOAuthPath: r.z.string().optional(),
				geminiCliProjectId: r.z.string().optional(),
			}),
			h5 = hW.extend({}),
			h6 = hW.extend({
				openAiNativeApiKey: r.z.string().optional(),
				openAiNativeBaseUrl: r.z.string().optional(),
				openAiNativeServiceTier: hH.optional(),
			}),
			h7 = hW.extend({ mistralApiKey: r.z.string().optional(), mistralCodestralUrl: r.z.string().optional() }),
			h8 = hW.extend({ deepSeekBaseUrl: r.z.string().optional(), deepSeekApiKey: r.z.string().optional() }),
			h9 = hW.extend({
				moonshotBaseUrl: r.z
					.union([r.z.literal("https://api.moonshot.ai/v1"), r.z.literal("https://api.moonshot.cn/v1")])
					.optional(),
				moonshotApiKey: r.z.string().optional(),
			}),
			ia = hW.extend({
				minimaxBaseUrl: r.z
					.union([r.z.literal("https://api.minimax.io/v1"), r.z.literal("https://api.minimaxi.com/v1")])
					.optional(),
				minimaxApiKey: r.z.string().optional(),
			}),
			ib = hV.extend({
				requestyBaseUrl: r.z.string().optional(),
				requestyApiKey: r.z.string().optional(),
				requestyModelId: r.z.string().optional(),
			}),
			ic = hV.extend({ unboundApiKey: r.z.string().optional(), unboundModelId: r.z.string().optional() }),
			id = hV.extend({ fakeAi: r.z.unknown().optional() }),
			ie = hW.extend({ xaiApiKey: r.z.string().optional() }),
			ig = hV.extend({
				litellmBaseUrl: r.z.string().optional(),
				litellmApiKey: r.z.string().optional(),
				litellmModelId: r.z.string().optional(),
				litellmUsePromptCache: r.z.boolean().optional(),
			}),
			ih = hW.extend({ sambaNovaApiKey: r.z.string().optional() }),
			ii = r.z.enum(["international_coding", "china_coding", "international_api", "china_api"]),
			ij = hW.extend({ zaiApiKey: r.z.string().optional(), zaiApiLine: ii.optional() }),
			ik = hW.extend({ fireworksApiKey: r.z.string().optional() }),
			il = hW.extend({ qwenCodeOauthPath: r.z.string().optional() }),
			im = hW.extend({ rooApiKey: r.z.string().optional() }),
			io = hV.extend({
				vercelAiGatewayApiKey: r.z.string().optional(),
				vercelAiGatewayModelId: r.z.string().optional(),
			}),
			ip = hW.extend({ basetenApiKey: r.z.string().optional() }),
			iq = r.z.object({ apiProvider: r.z.undefined() }),
			ir = r.z.discriminatedUnion("apiProvider", [
				hX.merge(r.z.object({ apiProvider: r.z.literal("anthropic") })),
				hY.merge(r.z.object({ apiProvider: r.z.literal("openrouter") })),
				hZ.merge(r.z.object({ apiProvider: r.z.literal("bedrock") })),
				h$.merge(r.z.object({ apiProvider: r.z.literal("vertex") })),
				h_.merge(r.z.object({ apiProvider: r.z.literal("openai") })),
				h0.merge(r.z.object({ apiProvider: r.z.literal("ollama") })),
				h1.merge(r.z.object({ apiProvider: r.z.literal("vscode-lm") })),
				h2.merge(r.z.object({ apiProvider: r.z.literal("lmstudio") })),
				h3.merge(r.z.object({ apiProvider: r.z.literal("gemini") })),
				h4.merge(r.z.object({ apiProvider: r.z.literal("gemini-cli") })),
				h5.merge(r.z.object({ apiProvider: r.z.literal("openai-codex") })),
				h6.merge(r.z.object({ apiProvider: r.z.literal("openai-native") })),
				h7.merge(r.z.object({ apiProvider: r.z.literal("mistral") })),
				h8.merge(r.z.object({ apiProvider: r.z.literal("deepseek") })),
				h9.merge(r.z.object({ apiProvider: r.z.literal("moonshot") })),
				ia.merge(r.z.object({ apiProvider: r.z.literal("minimax") })),
				ib.merge(r.z.object({ apiProvider: r.z.literal("requesty") })),
				ic.merge(r.z.object({ apiProvider: r.z.literal("unbound") })),
				id.merge(r.z.object({ apiProvider: r.z.literal("fake-ai") })),
				ie.merge(r.z.object({ apiProvider: r.z.literal("xai") })),
				ip.merge(r.z.object({ apiProvider: r.z.literal("baseten") })),
				ig.merge(r.z.object({ apiProvider: r.z.literal("litellm") })),
				ih.merge(r.z.object({ apiProvider: r.z.literal("sambanova") })),
				ij.merge(r.z.object({ apiProvider: r.z.literal("zai") })),
				ik.merge(r.z.object({ apiProvider: r.z.literal("fireworks") })),
				il.merge(r.z.object({ apiProvider: r.z.literal("qwen-code") })),
				im.merge(r.z.object({ apiProvider: r.z.literal("roo") })),
				io.merge(r.z.object({ apiProvider: r.z.literal("vercel-ai-gateway") })),
				iq,
			]),
			is = r.z.object({
				apiProvider: hT.optional(),
				...hX.shape,
				...hY.shape,
				...hZ.shape,
				...h$.shape,
				...h_.shape,
				...h0.shape,
				...h1.shape,
				...h2.shape,
				...h3.shape,
				...h4.shape,
				...h5.shape,
				...h6.shape,
				...h7.shape,
				...h8.shape,
				...h9.shape,
				...ia.shape,
				...ib.shape,
				...ic.shape,
				...id.shape,
				...ie.shape,
				...ip.shape,
				...ig.shape,
				...ih.shape,
				...ij.shape,
				...ik.shape,
				...il.shape,
				...im.shape,
				...io.shape,
				...hM.shape,
			}),
			it = is.extend({ id: r.z.string().optional() })
		ir.and(r.z.object({ id: r.z.string().optional() }))
		var iu = is.keyof().options,
			iv = [
				"apiModelId",
				"openRouterModelId",
				"openAiModelId",
				"ollamaModelId",
				"lmStudioModelId",
				"lmStudioDraftModelId",
				"requestyModelId",
				"unboundModelId",
				"litellmModelId",
				"vercelAiGatewayModelId",
			]
		Object.keys(hP)
		var iw = r.z.object({
			id: r.z.string(),
			rootTaskId: r.z.string().optional(),
			parentTaskId: r.z.string().optional(),
			number: r.z.number(),
			ts: r.z.number(),
			task: r.z.string(),
			tokensIn: r.z.number(),
			tokensOut: r.z.number(),
			cacheWrites: r.z.number().optional(),
			cacheReads: r.z.number().optional(),
			totalCost: r.z.number(),
			size: r.z.number().optional(),
			workspace: r.z.string().optional(),
			mode: r.z.string().optional(),
			apiConfigName: r.z.string().optional(),
			status: r.z.enum(["active", "completed", "delegated"]).optional(),
			delegatedToId: r.z.string().optional(),
			childIds: r.z.array(r.z.string()).optional(),
			awaitingChildId: r.z.string().optional(),
			completedByChildId: r.z.string().optional(),
			completionResultSummary: r.z.string().optional(),
		})
		r.z.enum(["preventFocusDisruption", "imageGeneration", "runSlashCommand", "customTools"])
		var ix = r.z.object({
				preventFocusDisruption: r.z.boolean().optional(),
				imageGeneration: r.z.boolean().optional(),
				runSlashCommand: r.z.boolean().optional(),
				customTools: r.z.boolean().optional(),
			}),
			iy = r.z.enum([
				"followup",
				"command",
				"command_output",
				"completion_result",
				"tool",
				"api_req_failed",
				"resume_task",
				"resume_completed_task",
				"mistake_limit_reached",
				"use_mcp_server",
				"auto_approval_max_req_reached",
			]),
			iz = r.z.enum([
				"error",
				"api_req_started",
				"api_req_finished",
				"api_req_retried",
				"api_req_retry_delayed",
				"api_req_rate_limit_wait",
				"api_req_deleted",
				"text",
				"image",
				"reasoning",
				"completion_result",
				"user_feedback",
				"user_feedback_diff",
				"command_output",
				"shell_integration_warning",
				"mcp_server_request_started",
				"mcp_server_response",
				"subtask_result",
				"checkpoint_saved",
				"rooignore_error",
				"diff_error",
				"condense_context",
				"condense_context_error",
				"sliding_window_truncation",
				"codebase_search_result",
				"user_edit_todos",
				"too_many_tools_warning",
				"tool",
			]),
			iA = r.z.object({ icon: r.z.string().optional(), text: r.z.string().optional() }),
			iB = r.z.object({
				cost: r.z.number(),
				prevContextTokens: r.z.number(),
				newContextTokens: r.z.number(),
				summary: r.z.string(),
				condenseId: r.z.string().optional(),
			}),
			iC = r.z.object({
				truncationId: r.z.string(),
				messagesRemoved: r.z.number(),
				prevContextTokens: r.z.number(),
				newContextTokens: r.z.number(),
			}),
			iD = r.z.object({
				ts: r.z.number(),
				type: r.z.union([r.z.literal("ask"), r.z.literal("say")]),
				ask: iy.optional(),
				say: iz.optional(),
				text: r.z.string().optional(),
				images: r.z.array(r.z.string()).optional(),
				partial: r.z.boolean().optional(),
				reasoning: r.z.string().optional(),
				conversationHistoryIndex: r.z.number().optional(),
				checkpoint: r.z.record(r.z.string(), r.z.unknown()).optional(),
				progressStatus: iA.optional(),
				contextCondense: iB.optional(),
				contextTruncation: iC.optional(),
				isProtected: r.z.boolean().optional(),
				apiProtocol: r.z.union([r.z.literal("openai"), r.z.literal("anthropic")]).optional(),
				isAnswered: r.z.boolean().optional(),
			}),
			iE = r.z.object({
				totalTokensIn: r.z.number(),
				totalTokensOut: r.z.number(),
				totalCacheWrites: r.z.number().optional(),
				totalCacheReads: r.z.number().optional(),
				totalCost: r.z.number(),
				contextTokens: r.z.number(),
			}),
			iF = r.z.object({
				timestamp: r.z.number(),
				id: r.z.string(),
				text: r.z.string(),
				images: r.z.array(r.z.string()).optional(),
			}),
			iG = r.z.enum(["unset", "enabled", "disabled"]),
			iH =
				(((d = iH || {}).TASK_CREATED = "Task Created"),
				(d.TASK_RESTARTED = "Task Reopened"),
				(d.TASK_COMPLETED = "Task Completed"),
				(d.TASK_MESSAGE = "Task Message"),
				(d.TASK_CONVERSATION_MESSAGE = "Conversation Message"),
				(d.LLM_COMPLETION = "LLM Completion"),
				(d.MODE_SWITCH = "Mode Switched"),
				(d.MODE_SELECTOR_OPENED = "Mode Selector Opened"),
				(d.TOOL_USED = "Tool Used"),
				(d.CHECKPOINT_CREATED = "Checkpoint Created"),
				(d.CHECKPOINT_RESTORED = "Checkpoint Restored"),
				(d.CHECKPOINT_DIFFED = "Checkpoint Diffed"),
				(d.TAB_SHOWN = "Tab Shown"),
				(d.MODE_SETTINGS_CHANGED = "Mode Setting Changed"),
				(d.CUSTOM_MODE_CREATED = "Custom Mode Created"),
				(d.CONTEXT_CONDENSED = "Context Condensed"),
				(d.SLIDING_WINDOW_TRUNCATION = "Sliding Window Truncation"),
				(d.CODE_ACTION_USED = "Code Action Used"),
				(d.PROMPT_ENHANCED = "Prompt Enhanced"),
				(d.TITLE_BUTTON_CLICKED = "Title Button Clicked"),
				(d.AUTHENTICATION_INITIATED = "Authentication Initiated"),
				(d.MARKETPLACE_ITEM_INSTALLED = "Marketplace Item Installed"),
				(d.MARKETPLACE_ITEM_REMOVED = "Marketplace Item Removed"),
				(d.MARKETPLACE_TAB_VIEWED = "Marketplace Tab Viewed"),
				(d.MARKETPLACE_INSTALL_BUTTON_CLICKED = "Marketplace Install Button Clicked"),
				(d.SHARE_BUTTON_CLICKED = "Share Button Clicked"),
				(d.SHARE_ORGANIZATION_CLICKED = "Share Organization Clicked"),
				(d.SHARE_PUBLIC_CLICKED = "Share Public Clicked"),
				(d.SHARE_CONNECT_TO_CLOUD_CLICKED = "Share Connect To Cloud Clicked"),
				(d.ACCOUNT_CONNECT_CLICKED = "Account Connect Clicked"),
				(d.ACCOUNT_CONNECT_SUCCESS = "Account Connect Success"),
				(d.ACCOUNT_LOGOUT_CLICKED = "Account Logout Clicked"),
				(d.ACCOUNT_LOGOUT_SUCCESS = "Account Logout Success"),
				(d.FEATURED_PROVIDER_CLICKED = "Featured Provider Clicked"),
				(d.UPSELL_DISMISSED = "Upsell Dismissed"),
				(d.UPSELL_CLICKED = "Upsell Clicked"),
				(d.SCHEMA_VALIDATION_ERROR = "Schema Validation Error"),
				(d.DIFF_APPLICATION_ERROR = "Diff Application Error"),
				(d.SHELL_INTEGRATION_ERROR = "Shell Integration Error"),
				(d.CONSECUTIVE_MISTAKE_ERROR = "Consecutive Mistake Error"),
				(d.CODE_INDEX_ERROR = "Code Index Error"),
				(d.TELEMETRY_SETTINGS_CHANGED = "Telemetry Settings Changed"),
				(d.MODEL_CACHE_EMPTY_RESPONSE = "Model Cache Empty Response"),
				(d.READ_FILE_LEGACY_FORMAT_USED = "Read File Legacy Format Used"),
				d),
			iI = r.z.object({
				appName: r.z.string(),
				appVersion: r.z.string(),
				vscodeVersion: r.z.string(),
				platform: r.z.string(),
				editorName: r.z.string(),
				hostname: r.z.string().optional(),
			}),
			iJ = r.z.object({ language: r.z.string(), mode: r.z.string() }),
			iK = r.z.object({ cloudIsAuthenticated: r.z.boolean().optional() }),
			iL = r.z.object({ ...iI.shape, ...iJ.shape, ...iK.shape }),
			iM = r.z.object({
				taskId: r.z.string().optional(),
				parentTaskId: r.z.string().optional(),
				apiProvider: r.z.enum(hQ).optional(),
				modelId: r.z.string().optional(),
				diffStrategy: r.z.string().optional(),
				isSubtask: r.z.boolean().optional(),
				todos: r.z
					.object({
						total: r.z.number(),
						completed: r.z.number(),
						inProgress: r.z.number(),
						pending: r.z.number(),
					})
					.optional(),
			}),
			iN = r.z.object({
				repositoryUrl: r.z.string().optional(),
				repositoryName: r.z.string().optional(),
				defaultBranch: r.z.string().optional(),
			}),
			iO = r.z.object({ ...iL.shape, ...iM.shape, ...iN.shape })
		r.z.discriminatedUnion("type", [
			r.z.object({
				type: r.z.enum([
					"Task Created",
					"Task Reopened",
					"Task Completed",
					"Conversation Message",
					"Mode Switched",
					"Mode Selector Opened",
					"Tool Used",
					"Checkpoint Created",
					"Checkpoint Restored",
					"Checkpoint Diffed",
					"Code Action Used",
					"Prompt Enhanced",
					"Title Button Clicked",
					"Authentication Initiated",
					"Marketplace Item Installed",
					"Marketplace Item Removed",
					"Marketplace Tab Viewed",
					"Marketplace Install Button Clicked",
					"Share Button Clicked",
					"Share Organization Clicked",
					"Share Public Clicked",
					"Share Connect To Cloud Clicked",
					"Account Connect Clicked",
					"Account Connect Success",
					"Account Logout Clicked",
					"Account Logout Success",
					"Featured Provider Clicked",
					"Upsell Dismissed",
					"Upsell Clicked",
					"Schema Validation Error",
					"Diff Application Error",
					"Shell Integration Error",
					"Consecutive Mistake Error",
					"Code Index Error",
					"Model Cache Empty Response",
					"Context Condensed",
					"Sliding Window Truncation",
					"Tab Shown",
					"Mode Setting Changed",
					"Custom Mode Created",
					"Read File Legacy Format Used",
				]),
				properties: iO,
			}),
			r.z.object({
				type: r.z.literal("Telemetry Settings Changed"),
				properties: r.z.object({ ...iO.shape, previousSetting: iG, newSetting: iG }),
			}),
			r.z.object({
				type: r.z.literal("Task Message"),
				properties: r.z.object({ ...iO.shape, taskId: r.z.string(), message: iD }),
			}),
			r.z.object({
				type: r.z.literal("LLM Completion"),
				properties: r.z.object({
					...iO.shape,
					inputTokens: r.z.number(),
					outputTokens: r.z.number(),
					cacheReadTokens: r.z.number().optional(),
					cacheWriteTokens: r.z.number().optional(),
					cost: r.z.number().optional(),
				}),
			}),
		])
		var iP = r.z.enum(["read", "edit", "command", "mcp", "modes"]),
			iQ = ["browser"],
			iR = r.z.enum([
				"execute_command",
				"read_file",
				"read_command_output",
				"write_to_file",
				"apply_diff",
				"edit",
				"search_and_replace",
				"search_replace",
				"edit_file",
				"apply_patch",
				"search_files",
				"list_files",
				"use_mcp_tool",
				"access_mcp_resource",
				"ask_followup_question",
				"attempt_completion",
				"switch_mode",
				"new_task",
				"codebase_search",
				"update_todo_list",
				"run_slash_command",
				"skill",
				"generate_image",
				"custom_tool",
			]),
			iS = r.z.record(iR, r.z.object({ attempts: r.z.number(), failures: r.z.number() })),
			iT = r.z.object({
				fileRegex: r.z
					.string()
					.optional()
					.refine(
						(a) => {
							if (!a) return !0
							try {
								return new RegExp(a), !0
							} catch {
								return !1
							}
						},
						{ message: "Invalid regular expression pattern" },
					),
				description: r.z.string().optional(),
			}),
			iU = r.z.union([iP, r.z.tuple([iP, iT])]),
			iV = r.z.array(iU).refine(
				(a) => {
					let b = new Set()
					return a.every((a) => {
						let c = Array.isArray(a) ? a[0] : a
						return !b.has(c) && (b.add(c), !0)
					})
				},
				{ message: "Duplicate groups are not allowed" },
			),
			iW = r.z.preprocess(
				(a) =>
					Array.isArray(a)
						? a.filter(
								(a) =>
									!("string" == typeof a
										? iQ.includes(a)
										: !!Array.isArray(a) &&
											a.length >= 1 &&
											"string" == typeof a[0] &&
											iQ.includes(a[0])),
							)
						: a,
				iV,
			),
			iX = r.z.object({
				slug: r.z.string().regex(/^[a-zA-Z0-9-]+$/, "Slug must contain only letters numbers and dashes"),
				name: r.z.string().min(1, "Name is required"),
				roleDefinition: r.z.string().min(1, "Role definition is required"),
				whenToUse: r.z.string().optional(),
				description: r.z.string().optional(),
				customInstructions: r.z.string().optional(),
				groups: iW,
				source: r.z.enum(["global", "project"]).optional(),
			})
		r.z.object({
			customModes: r.z.array(iX).refine(
				(a) => {
					let b = new Set()
					return a.every((a) => !b.has(a.slug) && (b.add(a.slug), !0))
				},
				{ message: "Duplicate mode slugs are not allowed" },
			),
		})
		var iY = r.z.object({
				roleDefinition: r.z.string().optional(),
				whenToUse: r.z.string().optional(),
				description: r.z.string().optional(),
				customInstructions: r.z.string().optional(),
			}),
			iZ = r.z.record(r.z.string(), iY.optional()),
			i$ = r.z.record(r.z.string(), r.z.string().optional()),
			i_ = r.z.enum([
				"ca",
				"de",
				"en",
				"es",
				"fr",
				"hi",
				"id",
				"it",
				"ja",
				"ko",
				"nl",
				"pl",
				"pt-BR",
				"ru",
				"tr",
				"vi",
				"zh-CN",
				"zh-TW",
			]),
			i0 = r.z.object({
				currentApiConfigName: r.z.string().optional(),
				listApiConfigMeta: r.z.array(hU).optional(),
				pinnedApiConfigs: r.z.record(r.z.string(), r.z.boolean()).optional(),
				lastShownAnnouncementId: r.z.string().optional(),
				customInstructions: r.z.string().optional(),
				taskHistory: r.z.array(iw).optional(),
				dismissedUpsells: r.z.array(r.z.string()).optional(),
				imageGenerationProvider: r.z.enum(["openrouter", "roo"]).optional(),
				openRouterImageApiKey: r.z.string().optional(),
				openRouterImageGenerationSelectedModel: r.z.string().optional(),
				customCondensingPrompt: r.z.string().optional(),
				autoApprovalEnabled: r.z.boolean().optional(),
				alwaysAllowReadOnly: r.z.boolean().optional(),
				alwaysAllowReadOnlyOutsideWorkspace: r.z.boolean().optional(),
				alwaysAllowWrite: r.z.boolean().optional(),
				alwaysAllowWriteOutsideWorkspace: r.z.boolean().optional(),
				alwaysAllowWriteProtected: r.z.boolean().optional(),
				writeDelayMs: r.z.number().min(0).optional(),
				requestDelaySeconds: r.z.number().optional(),
				alwaysAllowMcp: r.z.boolean().optional(),
				alwaysAllowModeSwitch: r.z.boolean().optional(),
				alwaysAllowSubtasks: r.z.boolean().optional(),
				alwaysAllowExecute: r.z.boolean().optional(),
				alwaysAllowFollowupQuestions: r.z.boolean().optional(),
				followupAutoApproveTimeoutMs: r.z.number().optional(),
				allowedCommands: r.z.array(r.z.string()).optional(),
				deniedCommands: r.z.array(r.z.string()).optional(),
				commandExecutionTimeout: r.z.number().optional(),
				commandTimeoutAllowlist: r.z.array(r.z.string()).optional(),
				preventCompletionWithOpenTodos: r.z.boolean().optional(),
				allowedMaxRequests: r.z.number().nullish(),
				allowedMaxCost: r.z.number().nullish(),
				autoCondenseContext: r.z.boolean().optional(),
				autoCondenseContextPercent: r.z.number().optional(),
				includeCurrentTime: r.z.boolean().optional(),
				includeCurrentCost: r.z.boolean().optional(),
				maxGitStatusFiles: r.z.number().optional(),
				includeDiagnosticMessages: r.z.boolean().optional(),
				maxDiagnosticMessages: r.z.number().optional(),
				enableCheckpoints: r.z.boolean().optional(),
				checkpointTimeout: r.z.number().int().min(10).max(60).optional(),
				ttsEnabled: r.z.boolean().optional(),
				ttsSpeed: r.z.number().optional(),
				soundEnabled: r.z.boolean().optional(),
				soundVolume: r.z.number().optional(),
				maxOpenTabsContext: r.z.number().optional(),
				maxWorkspaceFiles: r.z.number().optional(),
				showRooIgnoredFiles: r.z.boolean().optional(),
				enableSubfolderRules: r.z.boolean().optional(),
				maxImageFileSize: r.z.number().optional(),
				maxTotalImageSize: r.z.number().optional(),
				terminalOutputPreviewSize: r.z.enum(["small", "medium", "large"]).optional(),
				terminalShellIntegrationTimeout: r.z.number().optional(),
				terminalShellIntegrationDisabled: r.z.boolean().optional(),
				terminalCommandDelay: r.z.number().optional(),
				terminalPowershellCounter: r.z.boolean().optional(),
				terminalZshClearEolMark: r.z.boolean().optional(),
				terminalZshOhMy: r.z.boolean().optional(),
				terminalZshP10k: r.z.boolean().optional(),
				terminalZdotdir: r.z.boolean().optional(),
				diagnosticsEnabled: r.z.boolean().optional(),
				rateLimitSeconds: r.z.number().optional(),
				experiments: ix.optional(),
				codebaseIndexModels: hL.optional(),
				codebaseIndexConfig: hK.optional(),
				language: i_.optional(),
				telemetrySetting: iG.optional(),
				mcpEnabled: r.z.boolean().optional(),
				mode: r.z.string().optional(),
				modeApiConfigs: r.z.record(r.z.string(), r.z.string()).optional(),
				customModes: r.z.array(iX).optional(),
				customModePrompts: iZ.optional(),
				customSupportPrompts: i$.optional(),
				enhancementApiConfigId: r.z.string().optional(),
				includeTaskHistoryInEnhance: r.z.boolean().optional(),
				historyPreviewCollapsed: r.z.boolean().optional(),
				reasoningBlockCollapsed: r.z.boolean().optional(),
				enterBehavior: r.z.enum(["send", "newline"]).optional(),
				profileThresholds: r.z.record(r.z.string(), r.z.number()).optional(),
				hasOpenedModeSelector: r.z.boolean().optional(),
				lastModeExportPath: r.z.string().optional(),
				lastModeImportPath: r.z.string().optional(),
				lastSettingsExportPath: r.z.string().optional(),
				lastTaskExportPath: r.z.string().optional(),
				lastImageSavePath: r.z.string().optional(),
				worktreeAutoOpenPath: r.z.string().optional(),
				showWorktreesInHomeScreen: r.z.boolean().optional(),
				disabledTools: r.z.array(iR).optional(),
			}),
			i1 = i0.keyof().options,
			i2 = is.merge(i0),
			i3 = [
				"apiKey",
				"openRouterApiKey",
				"awsAccessKey",
				"awsApiKey",
				"awsSecretKey",
				"awsSessionToken",
				"openAiApiKey",
				"ollamaApiKey",
				"geminiApiKey",
				"openAiNativeApiKey",
				"deepSeekApiKey",
				"moonshotApiKey",
				"mistralApiKey",
				"minimaxApiKey",
				"requestyApiKey",
				"unboundApiKey",
				"xaiApiKey",
				"litellmApiKey",
				"codeIndexOpenAiKey",
				"codeIndexQdrantApiKey",
				"codebaseIndexOpenAiCompatibleApiKey",
				"codebaseIndexGeminiApiKey",
				"codebaseIndexMistralApiKey",
				"codebaseIndexVercelAiGatewayApiKey",
				"codebaseIndexOpenRouterApiKey",
				"sambaNovaApiKey",
				"zaiApiKey",
				"fireworksApiKey",
				"vercelAiGatewayApiKey",
				"basetenApiKey",
			],
			i4 = ["openRouterImageApiKey"]
		;[...i1, ...iu].filter((a) => !(i3.includes(a) || i4.includes(a)))
		var i5 = r.z.enum(["start", "message", "cancel", "ping", "shutdown"]),
			i6 = r.z.object({ command: i5, requestId: r.z.string().min(1) }),
			i7 = i6.extend({
				command: r.z.literal("start"),
				prompt: r.z.string(),
				images: r.z.array(r.z.string()).optional(),
				configuration: i2.optional(),
			}),
			i8 = i6.extend({
				command: r.z.literal("message"),
				prompt: r.z.string(),
				images: r.z.array(r.z.string()).optional(),
			}),
			i9 = i6.extend({ command: r.z.literal("cancel") }),
			ja = i6.extend({ command: r.z.literal("ping") }),
			jb = i6.extend({ command: r.z.literal("shutdown") })
		r.z.discriminatedUnion("command", [i7, i8, i9, ja, jb]), r.z.enum(["text", "json", "stream-json"])
		var jc = r.z.enum([
				"system",
				"control",
				"queue",
				"assistant",
				"user",
				"tool_use",
				"tool_result",
				"thinking",
				"error",
				"result",
			]),
			jd = r.z.enum(["ack", "done", "error"]),
			je = r.z.object({
				id: r.z.string().min(1),
				text: r.z.string().optional(),
				imageCount: r.z.number().optional(),
				timestamp: r.z.number().optional(),
			}),
			jf = r.z.object({ name: r.z.string(), input: r.z.record(r.z.unknown()).optional() }),
			jg = r.z.object({
				name: r.z.string(),
				output: r.z.string().optional(),
				error: r.z.string().optional(),
				exitCode: r.z.number().optional(),
			}),
			jh = r.z.object({
				totalCost: r.z.number().optional(),
				inputTokens: r.z.number().optional(),
				outputTokens: r.z.number().optional(),
				cacheWrites: r.z.number().optional(),
				cacheReads: r.z.number().optional(),
			}),
			ji = r.z
				.object({
					type: jc.optional(),
					subtype: r.z.string().optional(),
					requestId: r.z.string().optional(),
					command: i5.optional(),
					taskId: r.z.string().optional(),
					code: r.z.string().optional(),
					content: r.z.string().optional(),
					success: r.z.boolean().optional(),
					id: r.z.number().optional(),
					done: r.z.boolean().optional(),
					queueDepth: r.z.number().optional(),
					queue: r.z.array(je).optional(),
					schemaVersion: r.z.number().optional(),
					protocol: r.z.string().optional(),
					capabilities: r.z.array(r.z.string()).optional(),
					tool_use: jf.optional(),
					tool_result: jg.optional(),
					cost: jh.optional(),
				})
				.passthrough()
		ji.extend({ type: r.z.literal("control"), subtype: jd, requestId: r.z.string().min(1) }),
			r.z.object({
				type: r.z.literal("result"),
				success: r.z.boolean(),
				content: r.z.string().optional(),
				cost: jh.optional(),
				events: r.z.array(ji),
			})
		var jj =
				(((e = jj || {}).TaskCreated = "taskCreated"),
				(e.TaskStarted = "taskStarted"),
				(e.TaskCompleted = "taskCompleted"),
				(e.TaskAborted = "taskAborted"),
				(e.TaskFocused = "taskFocused"),
				(e.TaskUnfocused = "taskUnfocused"),
				(e.TaskActive = "taskActive"),
				(e.TaskInteractive = "taskInteractive"),
				(e.TaskResumable = "taskResumable"),
				(e.TaskIdle = "taskIdle"),
				(e.TaskPaused = "taskPaused"),
				(e.TaskUnpaused = "taskUnpaused"),
				(e.TaskSpawned = "taskSpawned"),
				(e.TaskDelegated = "taskDelegated"),
				(e.TaskDelegationCompleted = "taskDelegationCompleted"),
				(e.TaskDelegationResumed = "taskDelegationResumed"),
				(e.Message = "message"),
				(e.TaskModeSwitched = "taskModeSwitched"),
				(e.TaskAskResponded = "taskAskResponded"),
				(e.TaskUserMessage = "taskUserMessage"),
				(e.QueuedMessagesUpdated = "queuedMessagesUpdated"),
				(e.TaskTokenUsageUpdated = "taskTokenUsageUpdated"),
				(e.TaskToolFailed = "taskToolFailed"),
				(e.ModeChanged = "modeChanged"),
				(e.ProviderProfileChanged = "providerProfileChanged"),
				(e.CommandsResponse = "commandsResponse"),
				(e.ModesResponse = "modesResponse"),
				(e.ModelsResponse = "modelsResponse"),
				(e.EvalPass = "evalPass"),
				(e.EvalFail = "evalFail"),
				e),
			jk = r.z.object({
				taskCreated: r.z.tuple([r.z.string()]),
				taskStarted: r.z.tuple([r.z.string()]),
				taskCompleted: r.z.tuple([r.z.string(), iE, iS, r.z.object({ isSubtask: r.z.boolean() })]),
				taskAborted: r.z.tuple([r.z.string()]),
				taskFocused: r.z.tuple([r.z.string()]),
				taskUnfocused: r.z.tuple([r.z.string()]),
				taskActive: r.z.tuple([r.z.string()]),
				taskInteractive: r.z.tuple([r.z.string()]),
				taskResumable: r.z.tuple([r.z.string()]),
				taskIdle: r.z.tuple([r.z.string()]),
				taskPaused: r.z.tuple([r.z.string()]),
				taskUnpaused: r.z.tuple([r.z.string()]),
				taskSpawned: r.z.tuple([r.z.string(), r.z.string()]),
				taskDelegated: r.z.tuple([r.z.string(), r.z.string()]),
				taskDelegationCompleted: r.z.tuple([r.z.string(), r.z.string(), r.z.string()]),
				taskDelegationResumed: r.z.tuple([r.z.string(), r.z.string()]),
				message: r.z.tuple([
					r.z.object({
						taskId: r.z.string(),
						action: r.z.union([r.z.literal("created"), r.z.literal("updated")]),
						message: iD,
					}),
				]),
				taskModeSwitched: r.z.tuple([r.z.string(), r.z.string()]),
				taskAskResponded: r.z.tuple([r.z.string()]),
				taskUserMessage: r.z.tuple([r.z.string()]),
				queuedMessagesUpdated: r.z.tuple([r.z.string(), r.z.array(iF)]),
				taskToolFailed: r.z.tuple([r.z.string(), iR, r.z.string()]),
				taskTokenUsageUpdated: r.z.tuple([r.z.string(), iE, iS]),
				modeChanged: r.z.tuple([r.z.string()]),
				providerProfileChanged: r.z.tuple([r.z.object({ name: r.z.string(), provider: r.z.string() })]),
				commandsResponse: r.z.tuple([
					r.z.array(
						r.z.object({
							name: r.z.string(),
							source: r.z.enum(["global", "project", "built-in"]),
							filePath: r.z.string().optional(),
							description: r.z.string().optional(),
							argumentHint: r.z.string().optional(),
						}),
					),
				]),
				modesResponse: r.z.tuple([r.z.array(r.z.object({ slug: r.z.string(), name: r.z.string() }))]),
				modelsResponse: r.z.tuple([r.z.record(r.z.string(), hJ)]),
			}),
			jl = r.z.discriminatedUnion("eventName", [
				r.z.object({
					eventName: r.z.literal("taskCreated"),
					payload: jk.shape.taskCreated,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskStarted"),
					payload: jk.shape.taskStarted,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskCompleted"),
					payload: jk.shape.taskCompleted,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskAborted"),
					payload: jk.shape.taskAborted,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskFocused"),
					payload: jk.shape.taskFocused,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskUnfocused"),
					payload: jk.shape.taskUnfocused,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskActive"),
					payload: jk.shape.taskActive,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskInteractive"),
					payload: jk.shape.taskInteractive,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskResumable"),
					payload: jk.shape.taskResumable,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskIdle"),
					payload: jk.shape.taskIdle,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskPaused"),
					payload: jk.shape.taskPaused,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskUnpaused"),
					payload: jk.shape.taskUnpaused,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskSpawned"),
					payload: jk.shape.taskSpawned,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskDelegated"),
					payload: jk.shape.taskDelegated,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskDelegationCompleted"),
					payload: jk.shape.taskDelegationCompleted,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskDelegationResumed"),
					payload: jk.shape.taskDelegationResumed,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("message"),
					payload: jk.shape.message,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskModeSwitched"),
					payload: jk.shape.taskModeSwitched,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskAskResponded"),
					payload: jk.shape.taskAskResponded,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("queuedMessagesUpdated"),
					payload: jk.shape.queuedMessagesUpdated,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskToolFailed"),
					payload: jk.shape.taskToolFailed,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("taskTokenUsageUpdated"),
					payload: jk.shape.taskTokenUsageUpdated,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("commandsResponse"),
					payload: jk.shape.commandsResponse,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("modesResponse"),
					payload: jk.shape.modesResponse,
					taskId: r.z.number().optional(),
				}),
				r.z.object({
					eventName: r.z.literal("modelsResponse"),
					payload: jk.shape.modelsResponse,
					taskId: r.z.number().optional(),
				}),
				r.z.object({ eventName: r.z.literal("evalPass"), payload: r.z.undefined(), taskId: r.z.number() }),
				r.z.object({ eventName: r.z.literal("evalFail"), payload: r.z.undefined(), taskId: r.z.number() }),
			]),
			jm =
				(((f = jm || {}).Running = "running"),
				(f.Interactive = "interactive"),
				(f.Resumable = "resumable"),
				(f.Idle = "idle"),
				(f.None = "none"),
				f),
			jn = r.z.object({ task: r.z.string().optional(), images: r.z.array(r.z.string()).optional() }),
			jo = r.z.object({
				name: r.z.string().min(1),
				key: r.z.string().min(1),
				placeholder: r.z.string().optional(),
				optional: r.z.boolean().optional().default(!1),
			}),
			jp = r.z.object({
				name: r.z.string().min(1),
				content: r.z.string().min(1),
				parameters: r.z.array(jo).optional(),
				prerequisites: r.z.array(r.z.string()).optional(),
			})
		r.z.enum(["mode", "mcp"])
		var jq = r.z.object({
				id: r.z.string().min(1),
				name: r.z.string().min(1, "Name is required"),
				description: r.z.string(),
				author: r.z.string().optional(),
				authorUrl: r.z.string().url("Author URL must be a valid URL").optional(),
				tags: r.z.array(r.z.string()).optional(),
				prerequisites: r.z.array(r.z.string()).optional(),
			}),
			jr = jq.extend({ content: r.z.string().min(1) }),
			js = jq.extend({
				url: r.z.string().url(),
				content: r.z.union([r.z.string().min(1), r.z.array(jp)]),
				parameters: r.z.array(jo).optional(),
			}),
			jt = r.z.discriminatedUnion("type", [
				jr.extend({ type: r.z.literal("mode") }),
				js.extend({ type: r.z.literal("mcp") }),
			])
		r.z.object({
			target: r.z.enum(["global", "project"]).optional().default("project"),
			parameters: r.z.record(r.z.string(), r.z.any()).optional(),
		})
		var ju = r.z.object({
				allowAll: r.z.boolean(),
				providers: r.z.record(
					r.z.object({ allowAll: r.z.boolean(), models: r.z.array(r.z.string()).optional() }),
				),
			}),
			jv = i0
				.pick({
					enableCheckpoints: !0,
					maxOpenTabsContext: !0,
					maxWorkspaceFiles: !0,
					showRooIgnoredFiles: !0,
					terminalCommandDelay: !0,
					terminalShellIntegrationDisabled: !0,
					terminalShellIntegrationTimeout: !0,
					terminalZshClearEolMark: !0,
					disabledTools: !0,
				})
				.merge(
					r.z.object({
						maxOpenTabsContext: r.z.number().int().nonnegative().optional(),
						maxWorkspaceFiles: r.z.number().int().nonnegative().optional(),
						terminalCommandDelay: r.z.number().int().nonnegative().optional(),
						terminalShellIntegrationTimeout: r.z.number().int().nonnegative().optional(),
					}),
				),
			jw = r.z.enum(["all", "list-only", "admins-and-creator", "creator", "full-lockdown"]),
			jx = r.z.object({
				recordTaskMessages: r.z.boolean().optional(),
				enableTaskSharing: r.z.boolean().optional(),
				allowPublicTaskSharing: r.z.boolean().optional(),
				taskShareExpirationDays: r.z.number().int().positive().optional(),
				allowMembersViewAllTasks: r.z.boolean().optional(),
				workspaceTaskVisibility: jw.optional(),
				llmEnhancedFeaturesEnabled: r.z.boolean().optional(),
			}),
			jy = r.z.object({})
		r.z.object({
			version: r.z.number(),
			cloudSettings: jx.optional(),
			defaultSettings: jv,
			allowList: ju,
			features: jy.optional(),
			hiddenMcps: r.z.array(r.z.string()).optional(),
			hideMarketplaceMcps: r.z.boolean().optional(),
			mcps: r.z.array(js).optional(),
			providerProfiles: r.z.record(r.z.string(), it).optional(),
		})
		var jz = r.z.object({}),
			jA = r.z.object({
				taskSyncEnabled: r.z.boolean().optional(),
				llmEnhancedFeaturesEnabled: r.z.boolean().optional(),
			})
		r.z.object({ features: jz, settings: jA, version: r.z.number() }),
			r.z.object({
				success: r.z.boolean(),
				shareUrl: r.z.string().optional(),
				error: r.z.string().optional(),
				isNewShare: r.z.boolean().optional(),
				manageUrl: r.z.string().optional(),
			})
		var jB =
				(((g = jB || {}).DISCONNECTED = "disconnected"),
				(g.CONNECTING = "connecting"),
				(g.CONNECTED = "connected"),
				(g.RETRYING = "retrying"),
				(g.FAILED = "failed"),
				g),
			jC = r.z.object({
				taskId: r.z.string(),
				taskStatus: r.z.nativeEnum(jm),
				taskAsk: iD.optional(),
				queuedMessages: r.z.array(iF).optional(),
				parentTaskId: r.z.string().optional(),
				childTaskId: r.z.string().optional(),
				tokenUsage: iE.optional(),
				...jn.shape,
			})
		r.z.object({
			instanceId: r.z.string(),
			userId: r.z.string(),
			workspacePath: r.z.string(),
			appProperties: iI,
			gitProperties: iN.optional(),
			lastHeartbeat: r.z.coerce.number(),
			task: jC,
			taskAsk: iD.optional(),
			taskHistory: r.z.array(r.z.string()),
			mode: r.z.string().optional(),
			modes: r.z.array(r.z.object({ slug: r.z.string(), name: r.z.string() })).optional(),
			providerProfile: r.z.string().optional(),
			providerProfiles: r.z
				.array(r.z.object({ name: r.z.string(), provider: r.z.string().optional() }))
				.optional(),
			isCloudAgent: r.z.boolean().optional(),
		})
		var jD =
			(((h = jD || {})[(h.Message = "message")] = "Message"),
			(h[(h.TaskModeSwitched = "taskModeSwitched")] = "TaskModeSwitched"),
			(h[(h.TaskInteractive = "taskInteractive")] = "TaskInteractive"),
			h)
		r.z.discriminatedUnion("type", [
			r.z.object({ type: r.z.literal(jD.Message), taskId: r.z.string(), action: r.z.string(), message: iD }),
			r.z.object({ type: r.z.literal(jD.TaskModeSwitched), taskId: r.z.string(), mode: r.z.string() }),
			r.z.object({ type: r.z.literal(jD.TaskInteractive), taskId: r.z.string() }),
		])
		var jE = (((i = jE || {}).Message = "message"), (i.ApproveAsk = "approve_ask"), (i.DenyAsk = "deny_ask"), i)
		r.z.discriminatedUnion("type", [
			r.z.object({
				type: r.z.literal("message"),
				taskId: r.z.string(),
				payload: r.z.object({
					text: r.z.string(),
					images: r.z.array(r.z.string()).optional(),
					mode: r.z.string().optional(),
					providerProfile: r.z.string().optional(),
				}),
				timestamp: r.z.number(),
			}),
			r.z.object({
				type: r.z.literal("approve_ask"),
				taskId: r.z.string(),
				payload: r.z.object({ text: r.z.string().optional(), images: r.z.array(r.z.string()).optional() }),
				timestamp: r.z.number(),
			}),
			r.z.object({
				type: r.z.literal("deny_ask"),
				taskId: r.z.string(),
				payload: r.z.object({ text: r.z.string().optional(), images: r.z.array(r.z.string()).optional() }),
				timestamp: r.z.number(),
			}),
		])
		var jF =
				(((j = jF || {}).CONNECTED = "extension:connected"),
				(j.REGISTER = "extension:register"),
				(j.UNREGISTER = "extension:unregister"),
				(j.HEARTBEAT = "extension:heartbeat"),
				(j.EVENT = "extension:event"),
				(j.RELAYED_EVENT = "extension:relayed_event"),
				(j.COMMAND = "extension:command"),
				(j.RELAYED_COMMAND = "extension:relayed_command"),
				j),
			jG =
				(((k = jG || {}).JOIN = "task:join"),
				(k.LEAVE = "task:leave"),
				(k.EVENT = "task:event"),
				(k.RELAYED_EVENT = "task:relayed_event"),
				(k.COMMAND = "task:command"),
				(k.RELAYED_COMMAND = "task:relayed_command"),
				k)
		r.z.object({
			success: r.z.boolean(),
			data: r.z.object({
				dates: r.z.array(r.z.string()),
				tasks: r.z.array(r.z.number()),
				tokens: r.z.array(r.z.number()),
				costs: r.z.array(r.z.number()),
				totals: r.z.object({ tasks: r.z.number(), tokens: r.z.number(), cost: r.z.number() }),
			}),
			period: r.z.number(),
		})
		var jH = r.z.object({ answer: r.z.string(), mode: r.z.string().optional() })
		r.z.object({ question: r.z.string().optional(), suggest: r.z.array(jH).optional() }),
			[
				{ value: "google/gemini-2.5-flash-image", label: "Gemini 2.5 Flash Image", provider: "openrouter" },
				{
					value: "google/gemini-3-pro-image-preview",
					label: "Gemini 3 Pro Image Preview",
					provider: "openrouter",
				},
				{ value: "openai/gpt-5-image", label: "GPT-5 Image", provider: "openrouter" },
				{ value: "openai/gpt-5-image-mini", label: "GPT-5 Image Mini", provider: "openrouter" },
				{
					value: "black-forest-labs/flux.2-flex",
					label: "Black Forest Labs FLUX.2 Flex",
					provider: "openrouter",
				},
				{
					value: "black-forest-labs/flux.2-pro",
					label: "Black Forest Labs FLUX.2 Pro",
					provider: "openrouter",
				},
				{ value: "google/gemini-2.5-flash-image", label: "Gemini 2.5 Flash Image", provider: "roo" },
				{ value: "google/gemini-3-pro-image", label: "Gemini 3 Pro Image", provider: "roo" },
				{
					value: "bfl/flux-2-pro:free",
					label: "Black Forest Labs FLUX.2 Pro (Free)",
					provider: "roo",
					apiMethod: "images_api",
				},
			].map((a) => a.value)
		var jI =
				(((l = jI || {}).Connect = "Connect"),
				(l.Disconnect = "Disconnect"),
				(l.Ack = "Ack"),
				(l.TaskCommand = "TaskCommand"),
				(l.TaskEvent = "TaskEvent"),
				l),
			jJ = (((m = jJ || {}).Client = "client"), (m.Server = "server"), m),
			jK = r.z.object({ clientId: r.z.string(), pid: r.z.number(), ppid: r.z.number() }),
			jL =
				(((n = jL || {}).StartNewTask = "StartNewTask"),
				(n.CancelTask = "CancelTask"),
				(n.CloseTask = "CloseTask"),
				(n.ResumeTask = "ResumeTask"),
				(n.SendMessage = "SendMessage"),
				(n.GetCommands = "GetCommands"),
				(n.GetModes = "GetModes"),
				(n.GetModels = "GetModels"),
				(n.DeleteQueuedMessage = "DeleteQueuedMessage"),
				n),
			jM = r.z.discriminatedUnion("commandName", [
				r.z.object({
					commandName: r.z.literal("StartNewTask"),
					data: r.z.object({
						configuration: i2,
						text: r.z.string(),
						images: r.z.array(r.z.string()).optional(),
						newTab: r.z.boolean().optional(),
					}),
				}),
				r.z.object({ commandName: r.z.literal("CancelTask") }),
				r.z.object({ commandName: r.z.literal("CloseTask") }),
				r.z.object({ commandName: r.z.literal("ResumeTask"), data: r.z.string() }),
				r.z.object({
					commandName: r.z.literal("SendMessage"),
					data: r.z.object({ text: r.z.string().optional(), images: r.z.array(r.z.string()).optional() }),
				}),
				r.z.object({ commandName: r.z.literal("GetCommands") }),
				r.z.object({ commandName: r.z.literal("GetModes") }),
				r.z.object({ commandName: r.z.literal("GetModels") }),
				r.z.object({ commandName: r.z.literal("DeleteQueuedMessage"), data: r.z.string() }),
			])
		r.z.discriminatedUnion("type", [
			r.z.object({ type: r.z.literal("Ack"), origin: r.z.literal("server"), data: jK }),
			r.z.object({
				type: r.z.literal("TaskCommand"),
				origin: r.z.literal("client"),
				clientId: r.z.string(),
				data: jM,
			}),
			r.z.object({
				type: r.z.literal("TaskEvent"),
				origin: r.z.literal("server"),
				relayClientId: r.z.string().optional(),
				data: jl,
			}),
		]),
			r.z.discriminatedUnion("status", [
				r.z.object({
					executionId: r.z.string(),
					status: r.z.literal("started"),
					serverName: r.z.string(),
					toolName: r.z.string(),
				}),
				r.z.object({ executionId: r.z.string(), status: r.z.literal("output"), response: r.z.string() }),
				r.z.object({
					executionId: r.z.string(),
					status: r.z.literal("completed"),
					response: r.z.string().optional(),
				}),
				r.z.object({ executionId: r.z.string(), status: r.z.literal("error"), error: r.z.string().optional() }),
			])
		var jN = r.z.enum(["pending", "in_progress", "completed"])
		r.z.object({ id: r.z.string(), content: r.z.string(), status: jN })
		var jO = (((o = jO || {}).Empty = "empty"), (o.TooLong = "too_long"), (o.InvalidFormat = "invalid_format"), o)
		r.z.discriminatedUnion("status", [
			r.z.object({
				executionId: r.z.string(),
				status: r.z.literal("started"),
				pid: r.z.number().optional(),
				command: r.z.string(),
			}),
			r.z.object({ executionId: r.z.string(), status: r.z.literal("output"), output: r.z.string() }),
			r.z.object({ executionId: r.z.string(), status: r.z.literal("exited"), exitCode: r.z.number().optional() }),
			r.z.object({ executionId: r.z.string(), status: r.z.literal("fallback") }),
			r.z.object({ executionId: r.z.string(), status: r.z.literal("timeout") }),
		]),
			r.z.object({
				ts: r.z.number().optional(),
				previousCommitHash: r.z.string().optional(),
				commitHash: r.z.string(),
				mode: r.z.enum(["full", "checkpoint", "from-init", "to-current"]),
			}),
			r.z.object({ ts: r.z.number(), commitHash: r.z.string(), mode: r.z.enum(["preview", "restore"]) }),
			r.z.object({ item: jt, parameters: r.z.record(r.z.string(), r.z.any()) })
		let jP = Symbol.for("drizzle:entityKind")
		function jQ(a, b) {
			if (!a || "object" != typeof a) return !1
			if (a instanceof b) return !0
			if (!Object.prototype.hasOwnProperty.call(b, jP))
				throw Error(
					`Class "${b.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`,
				)
			let c = Object.getPrototypeOf(a).constructor
			if (c)
				for (; c; ) {
					if (jP in c && c[jP] === b[jP]) return !0
					c = Object.getPrototypeOf(c)
				}
			return !1
		}
		Symbol.for("drizzle:hasOwnEntityKind")
		let jR = Symbol.for("drizzle:Name"),
			jS = Symbol.for("drizzle:Schema"),
			jT = Symbol.for("drizzle:Columns"),
			jU = Symbol.for("drizzle:ExtraConfigColumns"),
			jV = Symbol.for("drizzle:OriginalName"),
			jW = Symbol.for("drizzle:BaseName"),
			jX = Symbol.for("drizzle:IsAlias"),
			jY = Symbol.for("drizzle:ExtraConfigBuilder"),
			jZ = Symbol.for("drizzle:IsDrizzleTable")
		class j$ {
			static [jP] = "Table"
			static Symbol = {
				Name: jR,
				Schema: jS,
				OriginalName: jV,
				Columns: jT,
				ExtraConfigColumns: jU,
				BaseName: jW,
				IsAlias: jX,
				ExtraConfigBuilder: jY,
			};
			[jR];
			[jV];
			[jS];
			[jT];
			[jU];
			[jW];
			[jX] = !1;
			[jZ] = !0;
			[jY] = void 0
			constructor(a, b, c) {
				;(this[jR] = this[jV] = a), (this[jS] = b), (this[jW] = c)
			}
		}
		function j_(a) {
			return `${a[jS] ?? "public"}.${a[jR]}`
		}
		class j0 {
			constructor(a, b) {
				;(this.table = a),
					(this.config = b),
					(this.name = b.name),
					(this.keyAsName = b.keyAsName),
					(this.notNull = b.notNull),
					(this.default = b.default),
					(this.defaultFn = b.defaultFn),
					(this.onUpdateFn = b.onUpdateFn),
					(this.hasDefault = b.hasDefault),
					(this.primary = b.primaryKey),
					(this.isUnique = b.isUnique),
					(this.uniqueName = b.uniqueName),
					(this.uniqueType = b.uniqueType),
					(this.dataType = b.dataType),
					(this.columnType = b.columnType),
					(this.generated = b.generated),
					(this.generatedIdentity = b.generatedIdentity)
			}
			static [jP] = "Column"
			name
			keyAsName
			primary
			notNull
			default
			defaultFn
			onUpdateFn
			hasDefault
			isUnique
			uniqueName
			uniqueType
			dataType
			columnType
			enumValues = void 0
			generated = void 0
			generatedIdentity = void 0
			config
			mapFromDriverValue(a) {
				return a
			}
			mapToDriverValue(a) {
				return a
			}
			shouldDisableInsert() {
				return void 0 !== this.config.generated && "byDefault" !== this.config.generated.type
			}
		}
		class j1 {
			static [jP] = "ColumnBuilder"
			config
			constructor(a, b, c) {
				this.config = {
					name: a,
					keyAsName: "" === a,
					notNull: !1,
					default: void 0,
					hasDefault: !1,
					primaryKey: !1,
					isUnique: !1,
					uniqueName: void 0,
					uniqueType: void 0,
					dataType: b,
					columnType: c,
					generated: void 0,
				}
			}
			$type() {
				return this
			}
			notNull() {
				return (this.config.notNull = !0), this
			}
			default(a) {
				return (this.config.default = a), (this.config.hasDefault = !0), this
			}
			$defaultFn(a) {
				return (this.config.defaultFn = a), (this.config.hasDefault = !0), this
			}
			$default = this.$defaultFn
			$onUpdateFn(a) {
				return (this.config.onUpdateFn = a), (this.config.hasDefault = !0), this
			}
			$onUpdate = this.$onUpdateFn
			primaryKey() {
				return (this.config.primaryKey = !0), (this.config.notNull = !0), this
			}
			setName(a) {
				"" === this.config.name && (this.config.name = a)
			}
		}
		class j2 {
			static [jP] = "PgForeignKeyBuilder"
			reference
			_onUpdate = "no action"
			_onDelete = "no action"
			constructor(a, b) {
				;(this.reference = () => {
					let { name: b, columns: c, foreignColumns: d } = a()
					return { name: b, columns: c, foreignTable: d[0].table, foreignColumns: d }
				}),
					b && ((this._onUpdate = b.onUpdate), (this._onDelete = b.onDelete))
			}
			onUpdate(a) {
				return (this._onUpdate = void 0 === a ? "no action" : a), this
			}
			onDelete(a) {
				return (this._onDelete = void 0 === a ? "no action" : a), this
			}
			build(a) {
				return new j3(a, this)
			}
		}
		class j3 {
			constructor(a, b) {
				;(this.table = a),
					(this.reference = b.reference),
					(this.onUpdate = b._onUpdate),
					(this.onDelete = b._onDelete)
			}
			static [jP] = "PgForeignKey"
			reference
			onUpdate
			onDelete
			getName() {
				let { name: a, columns: b, foreignColumns: c } = this.reference(),
					d = b.map((a) => a.name),
					e = c.map((a) => a.name),
					f = [this.table[jR], ...d, c[0].table[jR], ...e]
				return a ?? `${f.join("_")}_fk`
			}
		}
		function j4(a, ...b) {
			return a(...b)
		}
		function j5(a, b) {
			return `${a[jR]}_${b.join("_")}_unique`
		}
		class j6 {
			constructor(a, b) {
				;(this.name = b), (this.columns = a)
			}
			static [jP] = "PgUniqueConstraintBuilder"
			columns
			nullsNotDistinctConfig = !1
			nullsNotDistinct() {
				return (this.nullsNotDistinctConfig = !0), this
			}
			build(a) {
				return new j8(a, this.columns, this.nullsNotDistinctConfig, this.name)
			}
		}
		class j7 {
			static [jP] = "PgUniqueOnConstraintBuilder"
			name
			constructor(a) {
				this.name = a
			}
			on(...a) {
				return new j6(a, this.name)
			}
		}
		class j8 {
			constructor(a, b, c, d) {
				;(this.table = a),
					(this.columns = b),
					(this.name =
						d ??
						j5(
							this.table,
							this.columns.map((a) => a.name),
						)),
					(this.nullsNotDistinct = c)
			}
			static [jP] = "PgUniqueConstraint"
			columns
			name
			nullsNotDistinct = !1
			getName() {
				return this.name
			}
		}
		function j9(a, b, c) {
			for (let d = b; d < a.length; d++) {
				let e = a[d]
				if ("\\" === e) {
					d++
					continue
				}
				if ('"' === e) return [a.slice(b, d).replace(/\\/g, ""), d + 1]
				if (!c && ("," === e || "}" === e)) return [a.slice(b, d).replace(/\\/g, ""), d]
			}
			return [a.slice(b).replace(/\\/g, ""), a.length]
		}
		class ka extends j1 {
			foreignKeyConfigs = []
			static [jP] = "PgColumnBuilder"
			array(a) {
				return new ke(this.config.name, this, a)
			}
			references(a, b = {}) {
				return this.foreignKeyConfigs.push({ ref: a, actions: b }), this
			}
			unique(a, b) {
				return (
					(this.config.isUnique = !0), (this.config.uniqueName = a), (this.config.uniqueType = b?.nulls), this
				)
			}
			generatedAlwaysAs(a) {
				return (this.config.generated = { as: a, type: "always", mode: "stored" }), this
			}
			buildForeignKeys(a, b) {
				return this.foreignKeyConfigs.map(({ ref: c, actions: d }) =>
					j4(
						(c, d) => {
							let e = new j2(() => ({ columns: [a], foreignColumns: [c()] }))
							return (
								d.onUpdate && e.onUpdate(d.onUpdate), d.onDelete && e.onDelete(d.onDelete), e.build(b)
							)
						},
						c,
						d,
					),
				)
			}
			buildExtraConfigColumn(a) {
				return new kc(a, this.config)
			}
		}
		class kb extends j0 {
			constructor(a, b) {
				b.uniqueName || (b.uniqueName = j5(a, [b.name])), super(a, b), (this.table = a)
			}
			static [jP] = "PgColumn"
		}
		class kc extends kb {
			static [jP] = "ExtraConfigColumn"
			getSQLType() {
				return this.getSQLType()
			}
			indexConfig = {
				order: this.config.order ?? "asc",
				nulls: this.config.nulls ?? "last",
				opClass: this.config.opClass,
			}
			defaultConfig = { order: "asc", nulls: "last", opClass: void 0 }
			asc() {
				return (this.indexConfig.order = "asc"), this
			}
			desc() {
				return (this.indexConfig.order = "desc"), this
			}
			nullsFirst() {
				return (this.indexConfig.nulls = "first"), this
			}
			nullsLast() {
				return (this.indexConfig.nulls = "last"), this
			}
			op(a) {
				return (this.indexConfig.opClass = a), this
			}
		}
		class kd {
			static [jP] = "IndexedColumn"
			constructor(a, b, c, d) {
				;(this.name = a), (this.keyAsName = b), (this.type = c), (this.indexConfig = d)
			}
			name
			keyAsName
			type
			indexConfig
		}
		class ke extends ka {
			static [jP] = "PgArrayBuilder"
			constructor(a, b, c) {
				super(a, "array", "PgArray"), (this.config.baseBuilder = b), (this.config.size = c)
			}
			build(a) {
				let b = this.config.baseBuilder.build(a)
				return new kf(a, this.config, b)
			}
		}
		class kf extends kb {
			constructor(a, b, c, d) {
				super(a, b), (this.baseColumn = c), (this.range = d), (this.size = b.size)
			}
			size
			static [jP] = "PgArray"
			getSQLType() {
				return `${this.baseColumn.getSQLType()}[${"number" == typeof this.size ? this.size : ""}]`
			}
			mapFromDriverValue(a) {
				return (
					"string" == typeof a &&
						(a = (function (a) {
							let [b] = (function a(b, c = 0) {
								let d = [],
									e = c,
									f = !1
								for (; e < b.length; ) {
									let g = b[e]
									if ("," === g) {
										;(f || e === c) && d.push(""), (f = !0), e++
										continue
									}
									if (((f = !1), "\\" === g)) {
										e += 2
										continue
									}
									if ('"' === g) {
										let [a, c] = j9(b, e + 1, !0)
										d.push(a), (e = c)
										continue
									}
									if ("}" === g) return [d, e + 1]
									if ("{" === g) {
										let [c, f] = a(b, e + 1)
										d.push(c), (e = f)
										continue
									}
									let [h, i] = j9(b, e, !1)
									d.push(h), (e = i)
								}
								return [d, e]
							})(a, 1)
							return b
						})(a)),
					a.map((a) => this.baseColumn.mapFromDriverValue(a))
				)
			}
			mapToDriverValue(a, b = !1) {
				let c = a.map((a) =>
					null === a
						? null
						: jQ(this.baseColumn, kf)
							? this.baseColumn.mapToDriverValue(a, !0)
							: this.baseColumn.mapToDriverValue(a),
				)
				return b
					? c
					: (function a(b) {
							return `{${b.map((b) => (Array.isArray(b) ? a(b) : "string" == typeof b ? `"${b.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${b}`)).join(",")}}`
						})(c)
			}
		}
		class kg extends ka {
			static [jP] = "PgEnumObjectColumnBuilder"
			constructor(a, b) {
				super(a, "string", "PgEnumObjectColumn"), (this.config.enum = b)
			}
			build(a) {
				return new kh(a, this.config)
			}
		}
		class kh extends kb {
			static [jP] = "PgEnumObjectColumn"
			enum
			enumValues = this.config.enum.enumValues
			constructor(a, b) {
				super(a, b), (this.enum = b.enum)
			}
			getSQLType() {
				return this.enum.enumName
			}
		}
		let ki = Symbol.for("drizzle:isPgEnum")
		class kj extends ka {
			static [jP] = "PgEnumColumnBuilder"
			constructor(a, b) {
				super(a, "string", "PgEnumColumn"), (this.config.enum = b)
			}
			build(a) {
				return new kk(a, this.config)
			}
		}
		class kk extends kb {
			static [jP] = "PgEnumColumn"
			enum = this.config.enum
			enumValues = this.config.enum.enumValues
			constructor(a, b) {
				super(a, b), (this.enum = b.enum)
			}
			getSQLType() {
				return this.enum.enumName
			}
		}
		class kl {
			static [jP] = "Subquery"
			constructor(a, b, c, d = !1, e = []) {
				this._ = { brand: "Subquery", sql: a, selectedFields: b, alias: c, isWith: d, usedTables: e }
			}
		}
		class km extends kl {
			static [jP] = "WithSubquery"
		}
		let kn = (a, d) =>
				b
					? (c || (c = b.trace.getTracer("drizzle-orm", "0.44.1")),
						j4(
							(b, c) =>
								c.startActiveSpan(a, (a) => {
									try {
										return d(a)
									} catch (c) {
										throw (
											(a.setStatus({
												code: b.SpanStatusCode.ERROR,
												message: c instanceof Error ? c.message : "Unknown error",
											}),
											c)
										)
									} finally {
										a.end()
									}
								}),
							b,
							c,
						))
					: d(),
			ko = Symbol.for("drizzle:ViewBaseConfig")
		class kp {
			static [jP] = "FakePrimitiveParam"
		}
		function kq(a) {
			return null != a && "function" == typeof a.getSQL
		}
		class kr {
			static [jP] = "StringChunk"
			value
			constructor(a) {
				this.value = Array.isArray(a) ? a : [a]
			}
			getSQL() {
				return new ks([this])
			}
		}
		class ks {
			constructor(a) {
				for (const b of ((this.queryChunks = a), a))
					if (jQ(b, j$)) {
						const a = b[j$.Symbol.Schema]
						this.usedTables.push(void 0 === a ? b[j$.Symbol.Name] : a + "." + b[j$.Symbol.Name])
					}
			}
			static [jP] = "SQL"
			decoder = ku
			shouldInlineParams = !1
			usedTables = []
			append(a) {
				return this.queryChunks.push(...a.queryChunks), this
			}
			toQuery(a) {
				return kn("drizzle.buildSQL", (b) => {
					let c = this.buildQueryFromSourceParams(this.queryChunks, a)
					return (
						b?.setAttributes({
							"drizzle.query.text": c.sql,
							"drizzle.query.params": JSON.stringify(c.params),
						}),
						c
					)
				})
			}
			buildQueryFromSourceParams(a, b) {
				let c = Object.assign({}, b, {
						inlineParams: b.inlineParams || this.shouldInlineParams,
						paramStartIndex: b.paramStartIndex || { value: 0 },
					}),
					{
						casing: d,
						escapeName: e,
						escapeParam: f,
						prepareTyping: g,
						inlineParams: h,
						paramStartIndex: i,
					} = c
				var j = a.map((a) => {
					if (jQ(a, kr)) return { sql: a.value.join(""), params: [] }
					if (jQ(a, kt)) return { sql: e(a.value), params: [] }
					if (void 0 === a) return { sql: "", params: [] }
					if (Array.isArray(a)) {
						let b = [new kr("(")]
						for (let [c, d] of a.entries()) b.push(d), c < a.length - 1 && b.push(new kr(", "))
						return b.push(new kr(")")), this.buildQueryFromSourceParams(b, c)
					}
					if (jQ(a, ks))
						return this.buildQueryFromSourceParams(a.queryChunks, {
							...c,
							inlineParams: h || a.shouldInlineParams,
						})
					if (jQ(a, j$)) {
						let b = a[j$.Symbol.Schema],
							c = a[j$.Symbol.Name]
						return { sql: void 0 === b || a[jX] ? e(c) : e(b) + "." + e(c), params: [] }
					}
					if (jQ(a, j0)) {
						let c = d.getColumnCasing(a)
						if ("indexes" === b.invokeSource) return { sql: e(c), params: [] }
						let f = a.table[j$.Symbol.Schema]
						return {
							sql:
								a.table[jX] || void 0 === f
									? e(a.table[j$.Symbol.Name]) + "." + e(c)
									: e(f) + "." + e(a.table[j$.Symbol.Name]) + "." + e(c),
							params: [],
						}
					}
					if (jQ(a, kD)) {
						let b = a[ko].schema,
							c = a[ko].name
						return { sql: void 0 === b || a[ko].isAlias ? e(c) : e(b) + "." + e(c), params: [] }
					}
					if (jQ(a, kw)) {
						if (jQ(a.value, kA)) return { sql: f(i.value++, a), params: [a], typings: ["none"] }
						let b = null === a.value ? null : a.encoder.mapToDriverValue(a.value)
						if (jQ(b, ks)) return this.buildQueryFromSourceParams([b], c)
						if (h) return { sql: this.mapInlineParam(b, c), params: [] }
						let d = ["none"]
						return g && (d = [g(a.encoder)]), { sql: f(i.value++, b), params: [b], typings: d }
					}
					return jQ(a, kA)
						? { sql: f(i.value++, a), params: [a], typings: ["none"] }
						: jQ(a, ks.Aliased) && void 0 !== a.fieldAlias
							? { sql: e(a.fieldAlias), params: [] }
							: jQ(a, kl)
								? a._.isWith
									? { sql: e(a._.alias), params: [] }
									: this.buildQueryFromSourceParams(
											[new kr("("), a._.sql, new kr(") "), new kt(a._.alias)],
											c,
										)
								: a && "function" == typeof a && ki in a && !0 === a[ki]
									? a.schema
										? { sql: e(a.schema) + "." + e(a.enumName), params: [] }
										: { sql: e(a.enumName), params: [] }
									: kq(a)
										? a.shouldOmitSQLParens?.()
											? this.buildQueryFromSourceParams([a.getSQL()], c)
											: this.buildQueryFromSourceParams([new kr("("), a.getSQL(), new kr(")")], c)
										: h
											? { sql: this.mapInlineParam(a, c), params: [] }
											: { sql: f(i.value++, a), params: [a], typings: ["none"] }
				})
				let k = { sql: "", params: [] }
				for (let a of j)
					(k.sql += a.sql),
						k.params.push(...a.params),
						a.typings?.length && (k.typings || (k.typings = []), k.typings.push(...a.typings))
				return k
			}
			mapInlineParam(a, { escapeString: b }) {
				if (null === a) return "null"
				if ("number" == typeof a || "boolean" == typeof a) return a.toString()
				if ("string" == typeof a) return b(a)
				if ("object" == typeof a) {
					let c = a.toString()
					return "[object Object]" === c ? b(JSON.stringify(a)) : b(c)
				}
				throw Error("Unexpected param value: " + a)
			}
			getSQL() {
				return this
			}
			as(a) {
				return void 0 === a ? this : new ks.Aliased(this, a)
			}
			mapWith(a) {
				return (this.decoder = "function" == typeof a ? { mapFromDriverValue: a } : a), this
			}
			inlineParams() {
				return (this.shouldInlineParams = !0), this
			}
			if(a) {
				return a ? this : void 0
			}
		}
		class kt {
			constructor(a) {
				this.value = a
			}
			static [jP] = "Name"
			brand
			getSQL() {
				return new ks([this])
			}
		}
		let ku = { mapFromDriverValue: (a) => a },
			kv = { mapToDriverValue: (a) => a }
		;({ ...ku, ...kv })
		class kw {
			constructor(a, b = kv) {
				;(this.value = a), (this.encoder = b)
			}
			static [jP] = "Param"
			brand
			getSQL() {
				return new ks([this])
			}
		}
		function kx(a, ...b) {
			let c = []
			for (let [d, e] of ((b.length > 0 || (a.length > 0 && "" !== a[0])) && c.push(new kr(a[0])), b.entries()))
				c.push(e, new kr(a[d + 1]))
			return new ks(c)
		}
		;((p = kx || (kx = {})).empty = function () {
			return new ks([])
		}),
			(p.fromList = function (a) {
				return new ks(a)
			}),
			(p.raw = function (a) {
				return new ks([new kr(a)])
			}),
			(p.join = function (a, b) {
				let c = []
				for (let [d, e] of a.entries()) d > 0 && void 0 !== b && c.push(b), c.push(e)
				return new ks(c)
			}),
			(p.identifier = function (a) {
				return new kt(a)
			}),
			(p.placeholder = function (a) {
				return new kA(a)
			}),
			(p.param = function (a, b) {
				return new kw(a, b)
			})
		var ky = ks || (ks = {})
		class kz {
			constructor(a, b) {
				;(this.sql = a), (this.fieldAlias = b)
			}
			static [jP] = "SQL.Aliased"
			isSelectionField = !1
			getSQL() {
				return this.sql
			}
			clone() {
				return new kz(this.sql, this.fieldAlias)
			}
		}
		ky.Aliased = kz
		class kA {
			constructor(a) {
				this.name = a
			}
			static [jP] = "Placeholder"
			getSQL() {
				return new ks([this])
			}
		}
		function kB(a, b) {
			return a.map((a) => {
				if (jQ(a, kA)) {
					if (!(a.name in b)) throw Error(`No value for placeholder "${a.name}" was provided`)
					return b[a.name]
				}
				if (jQ(a, kw) && jQ(a.value, kA)) {
					if (!(a.value.name in b)) throw Error(`No value for placeholder "${a.value.name}" was provided`)
					return a.encoder.mapToDriverValue(b[a.value.name])
				}
				return a
			})
		}
		let kC = Symbol.for("drizzle:IsDrizzleView")
		class kD {
			static [jP] = "View";
			[ko];
			[kC] = !0
			constructor({ name: a, schema: b, selectedFields: c, query: d }) {
				this[ko] = {
					name: a,
					originalName: a,
					schema: b,
					selectedFields: c,
					query: d,
					isExisting: !d,
					isAlias: !1,
				}
			}
			getSQL() {
				return new ks([this])
			}
		}
		function kE(a, b) {
			return Object.entries(a).reduce((a, [c, d]) => {
				if ("string" != typeof c) return a
				let e = b ? [...b, c] : [c]
				return (
					jQ(d, j0) || jQ(d, ks) || jQ(d, ks.Aliased)
						? a.push({ path: e, field: d })
						: jQ(d, j$)
							? a.push(...kE(d[j$.Symbol.Columns], e))
							: a.push(...kE(d, e)),
					a
				)
			}, [])
		}
		function kF(a, b) {
			let c = Object.keys(a),
				d = Object.keys(b)
			if (c.length !== d.length) return !1
			for (let [a, b] of c.entries()) if (b !== d[a]) return !1
			return !0
		}
		function kG(a, b) {
			let c = Object.entries(b)
				.filter(([, a]) => void 0 !== a)
				.map(([b, c]) => (jQ(c, ks) || jQ(c, j0) ? [b, c] : [b, new kw(c, a[j$.Symbol.Columns][b])]))
			if (0 === c.length) throw Error("No values to set")
			return Object.fromEntries(c)
		}
		function kH(a) {
			return a[j$.Symbol.Columns]
		}
		function kI(a) {
			return jQ(a, kl)
				? a._.alias
				: jQ(a, kD)
					? a[ko].name
					: jQ(a, ks)
						? void 0
						: a[j$.Symbol.IsAlias]
							? a[j$.Symbol.Name]
							: a[j$.Symbol.BaseName]
		}
		function kJ(a, b) {
			return { name: "string" == typeof a && a.length > 0 ? a : "", config: "object" == typeof a ? a : b }
		}
		;(j0.prototype.getSQL = function () {
			return new ks([this])
		}),
			(j$.prototype.getSQL = function () {
				return new ks([this])
			}),
			(kl.prototype.getSQL = function () {
				return new ks([this])
			})
		class kK extends ka {
			static [jP] = "PgIntColumnBaseBuilder"
			generatedAlwaysAsIdentity(a) {
				if (a) {
					let { name: b, ...c } = a
					this.config.generatedIdentity = { type: "always", sequenceName: b, sequenceOptions: c }
				} else this.config.generatedIdentity = { type: "always" }
				return (this.config.hasDefault = !0), (this.config.notNull = !0), this
			}
			generatedByDefaultAsIdentity(a) {
				if (a) {
					let { name: b, ...c } = a
					this.config.generatedIdentity = { type: "byDefault", sequenceName: b, sequenceOptions: c }
				} else this.config.generatedIdentity = { type: "byDefault" }
				return (this.config.hasDefault = !0), (this.config.notNull = !0), this
			}
		}
		class kL extends kK {
			static [jP] = "PgBigInt53Builder"
			constructor(a) {
				super(a, "number", "PgBigInt53")
			}
			build(a) {
				return new kM(a, this.config)
			}
		}
		class kM extends kb {
			static [jP] = "PgBigInt53"
			getSQLType() {
				return "bigint"
			}
			mapFromDriverValue(a) {
				return "number" == typeof a ? a : Number(a)
			}
		}
		class kN extends kK {
			static [jP] = "PgBigInt64Builder"
			constructor(a) {
				super(a, "bigint", "PgBigInt64")
			}
			build(a) {
				return new kO(a, this.config)
			}
		}
		class kO extends kb {
			static [jP] = "PgBigInt64"
			getSQLType() {
				return "bigint"
			}
			mapFromDriverValue(a) {
				return BigInt(a)
			}
		}
		function kP(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return "number" === d.mode ? new kL(c) : new kN(c)
		}
		class kQ extends ka {
			static [jP] = "PgBigSerial53Builder"
			constructor(a) {
				super(a, "number", "PgBigSerial53"), (this.config.hasDefault = !0), (this.config.notNull = !0)
			}
			build(a) {
				return new kR(a, this.config)
			}
		}
		class kR extends kb {
			static [jP] = "PgBigSerial53"
			getSQLType() {
				return "bigserial"
			}
			mapFromDriverValue(a) {
				return "number" == typeof a ? a : Number(a)
			}
		}
		class kS extends ka {
			static [jP] = "PgBigSerial64Builder"
			constructor(a) {
				super(a, "bigint", "PgBigSerial64"), (this.config.hasDefault = !0)
			}
			build(a) {
				return new kT(a, this.config)
			}
		}
		class kT extends kb {
			static [jP] = "PgBigSerial64"
			getSQLType() {
				return "bigserial"
			}
			mapFromDriverValue(a) {
				return BigInt(a)
			}
		}
		function kU(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return "number" === d.mode ? new kQ(c) : new kS(c)
		}
		class kV extends ka {
			static [jP] = "PgBooleanBuilder"
			constructor(a) {
				super(a, "boolean", "PgBoolean")
			}
			build(a) {
				return new kW(a, this.config)
			}
		}
		class kW extends kb {
			static [jP] = "PgBoolean"
			getSQLType() {
				return "boolean"
			}
		}
		function kX(a) {
			return new kV(a ?? "")
		}
		class kY extends ka {
			static [jP] = "PgCharBuilder"
			constructor(a, b) {
				super(a, "string", "PgChar"), (this.config.length = b.length), (this.config.enumValues = b.enum)
			}
			build(a) {
				return new kZ(a, this.config)
			}
		}
		class kZ extends kb {
			static [jP] = "PgChar"
			length = this.config.length
			enumValues = this.config.enumValues
			getSQLType() {
				return void 0 === this.length ? "char" : `char(${this.length})`
			}
		}
		function k$(a, b = {}) {
			let { name: c, config: d } = kJ(a, b)
			return new kY(c, d)
		}
		class k_ extends ka {
			static [jP] = "PgCidrBuilder"
			constructor(a) {
				super(a, "string", "PgCidr")
			}
			build(a) {
				return new k0(a, this.config)
			}
		}
		class k0 extends kb {
			static [jP] = "PgCidr"
			getSQLType() {
				return "cidr"
			}
		}
		function k1(a) {
			return new k_(a ?? "")
		}
		class k2 extends ka {
			static [jP] = "PgCustomColumnBuilder"
			constructor(a, b, c) {
				super(a, "custom", "PgCustomColumn"), (this.config.fieldConfig = b), (this.config.customTypeParams = c)
			}
			build(a) {
				return new k3(a, this.config)
			}
		}
		class k3 extends kb {
			static [jP] = "PgCustomColumn"
			sqlName
			mapTo
			mapFrom
			constructor(a, b) {
				super(a, b),
					(this.sqlName = b.customTypeParams.dataType(b.fieldConfig)),
					(this.mapTo = b.customTypeParams.toDriver),
					(this.mapFrom = b.customTypeParams.fromDriver)
			}
			getSQLType() {
				return this.sqlName
			}
			mapFromDriverValue(a) {
				return "function" == typeof this.mapFrom ? this.mapFrom(a) : a
			}
			mapToDriverValue(a) {
				return "function" == typeof this.mapTo ? this.mapTo(a) : a
			}
		}
		function k4(a) {
			return (b, c) => {
				let { name: d, config: e } = kJ(b, c)
				return new k2(d, e, a)
			}
		}
		class k5 extends ka {
			static [jP] = "PgDateColumnBaseBuilder"
			defaultNow() {
				return this.default(kx`now()`)
			}
		}
		class k6 extends k5 {
			static [jP] = "PgDateBuilder"
			constructor(a) {
				super(a, "date", "PgDate")
			}
			build(a) {
				return new k7(a, this.config)
			}
		}
		class k7 extends kb {
			static [jP] = "PgDate"
			getSQLType() {
				return "date"
			}
			mapFromDriverValue(a) {
				return new Date(a)
			}
			mapToDriverValue(a) {
				return a.toISOString()
			}
		}
		class k8 extends k5 {
			static [jP] = "PgDateStringBuilder"
			constructor(a) {
				super(a, "string", "PgDateString")
			}
			build(a) {
				return new k9(a, this.config)
			}
		}
		class k9 extends kb {
			static [jP] = "PgDateString"
			getSQLType() {
				return "date"
			}
		}
		function la(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return d?.mode === "date" ? new k6(c) : new k8(c)
		}
		class lb extends ka {
			static [jP] = "PgDoublePrecisionBuilder"
			constructor(a) {
				super(a, "number", "PgDoublePrecision")
			}
			build(a) {
				return new lc(a, this.config)
			}
		}
		class lc extends kb {
			static [jP] = "PgDoublePrecision"
			getSQLType() {
				return "double precision"
			}
			mapFromDriverValue(a) {
				return "string" == typeof a ? Number.parseFloat(a) : a
			}
		}
		function ld(a) {
			return new lb(a ?? "")
		}
		class le extends ka {
			static [jP] = "PgInetBuilder"
			constructor(a) {
				super(a, "string", "PgInet")
			}
			build(a) {
				return new lf(a, this.config)
			}
		}
		class lf extends kb {
			static [jP] = "PgInet"
			getSQLType() {
				return "inet"
			}
		}
		function lg(a) {
			return new le(a ?? "")
		}
		class lh extends kK {
			static [jP] = "PgIntegerBuilder"
			constructor(a) {
				super(a, "number", "PgInteger")
			}
			build(a) {
				return new li(a, this.config)
			}
		}
		class li extends kb {
			static [jP] = "PgInteger"
			getSQLType() {
				return "integer"
			}
			mapFromDriverValue(a) {
				return "string" == typeof a ? Number.parseInt(a) : a
			}
		}
		function lj(a) {
			return new lh(a ?? "")
		}
		class lk extends ka {
			static [jP] = "PgIntervalBuilder"
			constructor(a, b) {
				super(a, "string", "PgInterval"), (this.config.intervalConfig = b)
			}
			build(a) {
				return new ll(a, this.config)
			}
		}
		class ll extends kb {
			static [jP] = "PgInterval"
			fields = this.config.intervalConfig.fields
			precision = this.config.intervalConfig.precision
			getSQLType() {
				let a = this.fields ? ` ${this.fields}` : "",
					b = this.precision ? `(${this.precision})` : ""
				return `interval${a}${b}`
			}
		}
		function lm(a, b = {}) {
			let { name: c, config: d } = kJ(a, b)
			return new lk(c, d)
		}
		class ln extends ka {
			static [jP] = "PgJsonBuilder"
			constructor(a) {
				super(a, "json", "PgJson")
			}
			build(a) {
				return new lo(a, this.config)
			}
		}
		class lo extends kb {
			static [jP] = "PgJson"
			constructor(a, b) {
				super(a, b)
			}
			getSQLType() {
				return "json"
			}
			mapToDriverValue(a) {
				return JSON.stringify(a)
			}
			mapFromDriverValue(a) {
				if ("string" == typeof a)
					try {
						return JSON.parse(a)
					} catch {}
				return a
			}
		}
		function lp(a) {
			return new ln(a ?? "")
		}
		class lq extends ka {
			static [jP] = "PgJsonbBuilder"
			constructor(a) {
				super(a, "json", "PgJsonb")
			}
			build(a) {
				return new lr(a, this.config)
			}
		}
		class lr extends kb {
			static [jP] = "PgJsonb"
			constructor(a, b) {
				super(a, b)
			}
			getSQLType() {
				return "jsonb"
			}
			mapToDriverValue(a) {
				return JSON.stringify(a)
			}
			mapFromDriverValue(a) {
				if ("string" == typeof a)
					try {
						return JSON.parse(a)
					} catch {}
				return a
			}
		}
		function ls(a) {
			return new lq(a ?? "")
		}
		class lt extends ka {
			static [jP] = "PgLineBuilder"
			constructor(a) {
				super(a, "array", "PgLine")
			}
			build(a) {
				return new lu(a, this.config)
			}
		}
		class lu extends kb {
			static [jP] = "PgLine"
			getSQLType() {
				return "line"
			}
			mapFromDriverValue(a) {
				let [b, c, d] = a.slice(1, -1).split(",")
				return [Number.parseFloat(b), Number.parseFloat(c), Number.parseFloat(d)]
			}
			mapToDriverValue(a) {
				return `{${a[0]},${a[1]},${a[2]}}`
			}
		}
		class lv extends ka {
			static [jP] = "PgLineABCBuilder"
			constructor(a) {
				super(a, "json", "PgLineABC")
			}
			build(a) {
				return new lw(a, this.config)
			}
		}
		class lw extends kb {
			static [jP] = "PgLineABC"
			getSQLType() {
				return "line"
			}
			mapFromDriverValue(a) {
				let [b, c, d] = a.slice(1, -1).split(",")
				return { a: Number.parseFloat(b), b: Number.parseFloat(c), c: Number.parseFloat(d) }
			}
			mapToDriverValue(a) {
				return `{${a.a},${a.b},${a.c}}`
			}
		}
		function lx(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return d?.mode && "tuple" !== d.mode ? new lv(c) : new lt(c)
		}
		class ly extends ka {
			static [jP] = "PgMacaddrBuilder"
			constructor(a) {
				super(a, "string", "PgMacaddr")
			}
			build(a) {
				return new lz(a, this.config)
			}
		}
		class lz extends kb {
			static [jP] = "PgMacaddr"
			getSQLType() {
				return "macaddr"
			}
		}
		function lA(a) {
			return new ly(a ?? "")
		}
		class lB extends ka {
			static [jP] = "PgMacaddr8Builder"
			constructor(a) {
				super(a, "string", "PgMacaddr8")
			}
			build(a) {
				return new lC(a, this.config)
			}
		}
		class lC extends kb {
			static [jP] = "PgMacaddr8"
			getSQLType() {
				return "macaddr8"
			}
		}
		function lD(a) {
			return new lB(a ?? "")
		}
		class lE extends ka {
			static [jP] = "PgNumericBuilder"
			constructor(a, b, c) {
				super(a, "string", "PgNumeric"), (this.config.precision = b), (this.config.scale = c)
			}
			build(a) {
				return new lF(a, this.config)
			}
		}
		class lF extends kb {
			static [jP] = "PgNumeric"
			precision
			scale
			constructor(a, b) {
				super(a, b), (this.precision = b.precision), (this.scale = b.scale)
			}
			mapFromDriverValue(a) {
				return "string" == typeof a ? a : String(a)
			}
			getSQLType() {
				return void 0 !== this.precision && void 0 !== this.scale
					? `numeric(${this.precision}, ${this.scale})`
					: void 0 === this.precision
						? "numeric"
						: `numeric(${this.precision})`
			}
		}
		class lG extends ka {
			static [jP] = "PgNumericNumberBuilder"
			constructor(a, b, c) {
				super(a, "number", "PgNumericNumber"), (this.config.precision = b), (this.config.scale = c)
			}
			build(a) {
				return new lH(a, this.config)
			}
		}
		class lH extends kb {
			static [jP] = "PgNumericNumber"
			precision
			scale
			constructor(a, b) {
				super(a, b), (this.precision = b.precision), (this.scale = b.scale)
			}
			mapFromDriverValue(a) {
				return "number" == typeof a ? a : Number(a)
			}
			mapToDriverValue = String
			getSQLType() {
				return void 0 !== this.precision && void 0 !== this.scale
					? `numeric(${this.precision}, ${this.scale})`
					: void 0 === this.precision
						? "numeric"
						: `numeric(${this.precision})`
			}
		}
		class lI extends ka {
			static [jP] = "PgNumericBigIntBuilder"
			constructor(a, b, c) {
				super(a, "bigint", "PgNumericBigInt"), (this.config.precision = b), (this.config.scale = c)
			}
			build(a) {
				return new lJ(a, this.config)
			}
		}
		class lJ extends kb {
			static [jP] = "PgNumericBigInt"
			precision
			scale
			constructor(a, b) {
				super(a, b), (this.precision = b.precision), (this.scale = b.scale)
			}
			mapFromDriverValue = BigInt
			mapToDriverValue = String
			getSQLType() {
				return void 0 !== this.precision && void 0 !== this.scale
					? `numeric(${this.precision}, ${this.scale})`
					: void 0 === this.precision
						? "numeric"
						: `numeric(${this.precision})`
			}
		}
		function lK(a, b) {
			let { name: c, config: d } = kJ(a, b),
				e = d?.mode
			return "number" === e
				? new lG(c, d?.precision, d?.scale)
				: "bigint" === e
					? new lI(c, d?.precision, d?.scale)
					: new lE(c, d?.precision, d?.scale)
		}
		class lL extends ka {
			static [jP] = "PgPointTupleBuilder"
			constructor(a) {
				super(a, "array", "PgPointTuple")
			}
			build(a) {
				return new lM(a, this.config)
			}
		}
		class lM extends kb {
			static [jP] = "PgPointTuple"
			getSQLType() {
				return "point"
			}
			mapFromDriverValue(a) {
				if ("string" == typeof a) {
					let [b, c] = a.slice(1, -1).split(",")
					return [Number.parseFloat(b), Number.parseFloat(c)]
				}
				return [a.x, a.y]
			}
			mapToDriverValue(a) {
				return `(${a[0]},${a[1]})`
			}
		}
		class lN extends ka {
			static [jP] = "PgPointObjectBuilder"
			constructor(a) {
				super(a, "json", "PgPointObject")
			}
			build(a) {
				return new lO(a, this.config)
			}
		}
		class lO extends kb {
			static [jP] = "PgPointObject"
			getSQLType() {
				return "point"
			}
			mapFromDriverValue(a) {
				if ("string" == typeof a) {
					let [b, c] = a.slice(1, -1).split(",")
					return { x: Number.parseFloat(b), y: Number.parseFloat(c) }
				}
				return a
			}
			mapToDriverValue(a) {
				return `(${a.x},${a.y})`
			}
		}
		function lP(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return d?.mode && "tuple" !== d.mode ? new lN(c) : new lL(c)
		}
		function lQ(a, b) {
			let c = new DataView(new ArrayBuffer(8))
			for (let d = 0; d < 8; d++) c.setUint8(d, a[b + d])
			return c.getFloat64(0, !0)
		}
		function lR(a) {
			let b = (function (a) {
					let b = []
					for (let c = 0; c < a.length; c += 2) b.push(Number.parseInt(a.slice(c, c + 2), 16))
					return new Uint8Array(b)
				})(a),
				c = 0,
				d = b[0]
			c += 1
			let e = new DataView(b.buffer),
				f = e.getUint32(c, 1 === d)
			if (((c += 4), 0x20000000 & f && (e.getUint32(c, 1 === d), (c += 4)), (65535 & f) == 1)) {
				let a = lQ(b, c),
					d = lQ(b, (c += 8))
				return (c += 8), [a, d]
			}
			throw Error("Unsupported geometry type")
		}
		class lS extends ka {
			static [jP] = "PgGeometryBuilder"
			constructor(a) {
				super(a, "array", "PgGeometry")
			}
			build(a) {
				return new lT(a, this.config)
			}
		}
		class lT extends kb {
			static [jP] = "PgGeometry"
			getSQLType() {
				return "geometry(point)"
			}
			mapFromDriverValue(a) {
				return lR(a)
			}
			mapToDriverValue(a) {
				return `point(${a[0]} ${a[1]})`
			}
		}
		class lU extends ka {
			static [jP] = "PgGeometryObjectBuilder"
			constructor(a) {
				super(a, "json", "PgGeometryObject")
			}
			build(a) {
				return new lV(a, this.config)
			}
		}
		class lV extends kb {
			static [jP] = "PgGeometryObject"
			getSQLType() {
				return "geometry(point)"
			}
			mapFromDriverValue(a) {
				let b = lR(a)
				return { x: b[0], y: b[1] }
			}
			mapToDriverValue(a) {
				return `point(${a.x} ${a.y})`
			}
		}
		function lW(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return d?.mode && "tuple" !== d.mode ? new lU(c) : new lS(c)
		}
		class lX extends ka {
			static [jP] = "PgRealBuilder"
			constructor(a, b) {
				super(a, "number", "PgReal"), (this.config.length = b)
			}
			build(a) {
				return new lY(a, this.config)
			}
		}
		class lY extends kb {
			static [jP] = "PgReal"
			constructor(a, b) {
				super(a, b)
			}
			getSQLType() {
				return "real"
			}
			mapFromDriverValue = (a) => ("string" == typeof a ? Number.parseFloat(a) : a)
		}
		function lZ(a) {
			return new lX(a ?? "")
		}
		class l$ extends ka {
			static [jP] = "PgSerialBuilder"
			constructor(a) {
				super(a, "number", "PgSerial"), (this.config.hasDefault = !0), (this.config.notNull = !0)
			}
			build(a) {
				return new l_(a, this.config)
			}
		}
		class l_ extends kb {
			static [jP] = "PgSerial"
			getSQLType() {
				return "serial"
			}
		}
		function l0(a) {
			return new l$(a ?? "")
		}
		class l1 extends kK {
			static [jP] = "PgSmallIntBuilder"
			constructor(a) {
				super(a, "number", "PgSmallInt")
			}
			build(a) {
				return new l2(a, this.config)
			}
		}
		class l2 extends kb {
			static [jP] = "PgSmallInt"
			getSQLType() {
				return "smallint"
			}
			mapFromDriverValue = (a) => ("string" == typeof a ? Number(a) : a)
		}
		function l3(a) {
			return new l1(a ?? "")
		}
		class l4 extends ka {
			static [jP] = "PgSmallSerialBuilder"
			constructor(a) {
				super(a, "number", "PgSmallSerial"), (this.config.hasDefault = !0), (this.config.notNull = !0)
			}
			build(a) {
				return new l5(a, this.config)
			}
		}
		class l5 extends kb {
			static [jP] = "PgSmallSerial"
			getSQLType() {
				return "smallserial"
			}
		}
		function l6(a) {
			return new l4(a ?? "")
		}
		class l7 extends ka {
			static [jP] = "PgTextBuilder"
			constructor(a, b) {
				super(a, "string", "PgText"), (this.config.enumValues = b.enum)
			}
			build(a) {
				return new l8(a, this.config)
			}
		}
		class l8 extends kb {
			static [jP] = "PgText"
			enumValues = this.config.enumValues
			getSQLType() {
				return "text"
			}
		}
		function l9(a, b = {}) {
			let { name: c, config: d } = kJ(a, b)
			return new l7(c, d)
		}
		class ma extends k5 {
			constructor(a, b, c) {
				super(a, "string", "PgTime"),
					(this.withTimezone = b),
					(this.precision = c),
					(this.config.withTimezone = b),
					(this.config.precision = c)
			}
			static [jP] = "PgTimeBuilder"
			build(a) {
				return new mb(a, this.config)
			}
		}
		class mb extends kb {
			static [jP] = "PgTime"
			withTimezone
			precision
			constructor(a, b) {
				super(a, b), (this.withTimezone = b.withTimezone), (this.precision = b.precision)
			}
			getSQLType() {
				let a = void 0 === this.precision ? "" : `(${this.precision})`
				return `time${a}${this.withTimezone ? " with time zone" : ""}`
			}
		}
		function mc(a, b = {}) {
			let { name: c, config: d } = kJ(a, b)
			return new ma(c, d.withTimezone ?? !1, d.precision)
		}
		class md extends k5 {
			static [jP] = "PgTimestampBuilder"
			constructor(a, b, c) {
				super(a, "date", "PgTimestamp"), (this.config.withTimezone = b), (this.config.precision = c)
			}
			build(a) {
				return new me(a, this.config)
			}
		}
		class me extends kb {
			static [jP] = "PgTimestamp"
			withTimezone
			precision
			constructor(a, b) {
				super(a, b), (this.withTimezone = b.withTimezone), (this.precision = b.precision)
			}
			getSQLType() {
				let a = void 0 === this.precision ? "" : ` (${this.precision})`
				return `timestamp${a}${this.withTimezone ? " with time zone" : ""}`
			}
			mapFromDriverValue = (a) => new Date(this.withTimezone ? a : a + "+0000")
			mapToDriverValue = (a) => a.toISOString()
		}
		class mf extends k5 {
			static [jP] = "PgTimestampStringBuilder"
			constructor(a, b, c) {
				super(a, "string", "PgTimestampString"), (this.config.withTimezone = b), (this.config.precision = c)
			}
			build(a) {
				return new mg(a, this.config)
			}
		}
		class mg extends kb {
			static [jP] = "PgTimestampString"
			withTimezone
			precision
			constructor(a, b) {
				super(a, b), (this.withTimezone = b.withTimezone), (this.precision = b.precision)
			}
			getSQLType() {
				let a = void 0 === this.precision ? "" : `(${this.precision})`
				return `timestamp${a}${this.withTimezone ? " with time zone" : ""}`
			}
		}
		function mh(a, b = {}) {
			let { name: c, config: d } = kJ(a, b)
			return d?.mode === "string"
				? new mf(c, d.withTimezone ?? !1, d.precision)
				: new md(c, d?.withTimezone ?? !1, d?.precision)
		}
		class mi extends ka {
			static [jP] = "PgUUIDBuilder"
			constructor(a) {
				super(a, "string", "PgUUID")
			}
			defaultRandom() {
				return this.default(kx`gen_random_uuid()`)
			}
			build(a) {
				return new mj(a, this.config)
			}
		}
		class mj extends kb {
			static [jP] = "PgUUID"
			getSQLType() {
				return "uuid"
			}
		}
		function mk(a) {
			return new mi(a ?? "")
		}
		class ml extends ka {
			static [jP] = "PgVarcharBuilder"
			constructor(a, b) {
				super(a, "string", "PgVarchar"), (this.config.length = b.length), (this.config.enumValues = b.enum)
			}
			build(a) {
				return new mm(a, this.config)
			}
		}
		class mm extends kb {
			static [jP] = "PgVarchar"
			length = this.config.length
			enumValues = this.config.enumValues
			getSQLType() {
				return void 0 === this.length ? "varchar" : `varchar(${this.length})`
			}
		}
		function mn(a, b = {}) {
			let { name: c, config: d } = kJ(a, b)
			return new ml(c, d)
		}
		class mo extends ka {
			static [jP] = "PgBinaryVectorBuilder"
			constructor(a, b) {
				super(a, "string", "PgBinaryVector"), (this.config.dimensions = b.dimensions)
			}
			build(a) {
				return new mp(a, this.config)
			}
		}
		class mp extends kb {
			static [jP] = "PgBinaryVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `bit(${this.dimensions})`
			}
		}
		function mq(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return new mo(c, d)
		}
		class mr extends ka {
			static [jP] = "PgHalfVectorBuilder"
			constructor(a, b) {
				super(a, "array", "PgHalfVector"), (this.config.dimensions = b.dimensions)
			}
			build(a) {
				return new ms(a, this.config)
			}
		}
		class ms extends kb {
			static [jP] = "PgHalfVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `halfvec(${this.dimensions})`
			}
			mapToDriverValue(a) {
				return JSON.stringify(a)
			}
			mapFromDriverValue(a) {
				return a
					.slice(1, -1)
					.split(",")
					.map((a) => Number.parseFloat(a))
			}
		}
		function mt(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return new mr(c, d)
		}
		class mu extends ka {
			static [jP] = "PgSparseVectorBuilder"
			constructor(a, b) {
				super(a, "string", "PgSparseVector"), (this.config.dimensions = b.dimensions)
			}
			build(a) {
				return new mv(a, this.config)
			}
		}
		class mv extends kb {
			static [jP] = "PgSparseVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `sparsevec(${this.dimensions})`
			}
		}
		function mw(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return new mu(c, d)
		}
		class mx extends ka {
			static [jP] = "PgVectorBuilder"
			constructor(a, b) {
				super(a, "array", "PgVector"), (this.config.dimensions = b.dimensions)
			}
			build(a) {
				return new my(a, this.config)
			}
		}
		class my extends kb {
			static [jP] = "PgVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `vector(${this.dimensions})`
			}
			mapToDriverValue(a) {
				return JSON.stringify(a)
			}
			mapFromDriverValue(a) {
				return a
					.slice(1, -1)
					.split(",")
					.map((a) => Number.parseFloat(a))
			}
		}
		function mz(a, b) {
			let { name: c, config: d } = kJ(a, b)
			return new mx(c, d)
		}
		let mA = Symbol.for("drizzle:PgInlineForeignKeys"),
			mB = Symbol.for("drizzle:EnableRLS")
		class mC extends j$ {
			static [jP] = "PgTable"
			static Symbol = Object.assign({}, j$.Symbol, { InlineForeignKeys: mA, EnableRLS: mB });
			[mA] = [];
			[mB] = !1;
			[j$.Symbol.ExtraConfigBuilder] = void 0;
			[j$.Symbol.ExtraConfigColumns] = {}
		}
		let mD = (a, b, c) =>
			(function (a, b, c, d, e = a) {
				let f = new mC(a, d, e),
					g =
						"function" == typeof b
							? b({
									bigint: kP,
									bigserial: kU,
									boolean: kX,
									char: k$,
									cidr: k1,
									customType: k4,
									date: la,
									doublePrecision: ld,
									inet: lg,
									integer: lj,
									interval: lm,
									json: lp,
									jsonb: ls,
									line: lx,
									macaddr: lA,
									macaddr8: lD,
									numeric: lK,
									point: lP,
									geometry: lW,
									real: lZ,
									serial: l0,
									smallint: l3,
									smallserial: l6,
									text: l9,
									time: mc,
									timestamp: mh,
									uuid: mk,
									varchar: mn,
									bit: mq,
									halfvec: mt,
									sparsevec: mw,
									vector: mz,
								})
							: b,
					h = Object.fromEntries(
						Object.entries(g).map(([a, b]) => {
							b.setName(a)
							let c = b.build(f)
							return f[mA].push(...b.buildForeignKeys(c, f)), [a, c]
						}),
					),
					i = Object.fromEntries(
						Object.entries(g).map(([a, b]) => (b.setName(a), [a, b.buildExtraConfigColumn(f)])),
					),
					j = Object.assign(f, h)
				return (
					(j[j$.Symbol.Columns] = h),
					(j[j$.Symbol.ExtraConfigColumns] = i),
					c && (j[mC.Symbol.ExtraConfigBuilder] = c),
					Object.assign(j, { enableRLS: () => ((j[mC.Symbol.EnableRLS] = !0), j) })
				)
			})(a, b, c, void 0)
		class mE {
			constructor(a, b) {
				;(this.unique = a), (this.name = b)
			}
			static [jP] = "PgIndexBuilderOn"
			on(...a) {
				return new mF(
					a.map((a) => {
						if (jQ(a, ks)) return a
						let b = new kd(a.name, !!a.keyAsName, a.columnType, a.indexConfig)
						return (a.indexConfig = JSON.parse(JSON.stringify(a.defaultConfig))), b
					}),
					this.unique,
					!1,
					this.name,
				)
			}
			onOnly(...a) {
				return new mF(
					a.map((a) => {
						if (jQ(a, ks)) return a
						let b = new kd(a.name, !!a.keyAsName, a.columnType, a.indexConfig)
						return (a.indexConfig = a.defaultConfig), b
					}),
					this.unique,
					!0,
					this.name,
				)
			}
			using(a, ...b) {
				return new mF(
					b.map((a) => {
						if (jQ(a, ks)) return a
						let b = new kd(a.name, !!a.keyAsName, a.columnType, a.indexConfig)
						return (a.indexConfig = JSON.parse(JSON.stringify(a.defaultConfig))), b
					}),
					this.unique,
					!0,
					this.name,
					a,
				)
			}
		}
		class mF {
			static [jP] = "PgIndexBuilder"
			config
			constructor(a, b, c, d, e = "btree") {
				this.config = { name: d, columns: a, unique: b, only: c, method: e }
			}
			concurrently() {
				return (this.config.concurrently = !0), this
			}
			with(a) {
				return (this.config.with = a), this
			}
			where(a) {
				return (this.config.where = a), this
			}
			build(a) {
				return new mG(this.config, a)
			}
		}
		class mG {
			static [jP] = "PgIndex"
			config
			constructor(a, b) {
				this.config = { ...a, table: b }
			}
		}
		class mH {
			static [jP] = "PgPrimaryKeyBuilder"
			columns
			name
			constructor(a, b) {
				;(this.columns = a), (this.name = b)
			}
			build(a) {
				return new mI(a, this.columns, this.name)
			}
		}
		class mI {
			constructor(a, b, c) {
				;(this.table = a), (this.columns = b), (this.name = c)
			}
			static [jP] = "PgPrimaryKey"
			columns
			name
			getName() {
				return this.name ?? `${this.table[mC.Symbol.Name]}_${this.columns.map((a) => a.name).join("_")}_pk`
			}
		}
		function mJ(a, b) {
			return "object" != typeof b ||
				null === b ||
				!("mapToDriverValue" in b) ||
				"function" != typeof b.mapToDriverValue ||
				kq(a) ||
				jQ(a, kw) ||
				jQ(a, kA) ||
				jQ(a, j0) ||
				jQ(a, j$) ||
				jQ(a, kD)
				? a
				: new kw(a, b)
		}
		let mK = (a, b) => kx`${a} = ${mJ(b, a)}`,
			mL = (a, b) => kx`${a} <> ${mJ(b, a)}`
		function mM(...a) {
			let b = a.filter((a) => void 0 !== a)
			if (0 !== b.length)
				return new ks(1 === b.length ? b : [new kr("("), kx.join(b, new kr(" and ")), new kr(")")])
		}
		function mN(...a) {
			let b = a.filter((a) => void 0 !== a)
			if (0 !== b.length)
				return new ks(1 === b.length ? b : [new kr("("), kx.join(b, new kr(" or ")), new kr(")")])
		}
		function mO(a) {
			return kx`not ${a}`
		}
		let mP = (a, b) => kx`${a} > ${mJ(b, a)}`,
			mQ = (a, b) => kx`${a} >= ${mJ(b, a)}`,
			mR = (a, b) => kx`${a} < ${mJ(b, a)}`,
			mS = (a, b) => kx`${a} <= ${mJ(b, a)}`
		function mT(a, b) {
			return Array.isArray(b)
				? 0 === b.length
					? kx`false`
					: kx`${a} in ${b.map((b) => mJ(b, a))}`
				: kx`${a} in ${mJ(b, a)}`
		}
		function mU(a, b) {
			return Array.isArray(b)
				? 0 === b.length
					? kx`true`
					: kx`${a} not in ${b.map((b) => mJ(b, a))}`
				: kx`${a} not in ${mJ(b, a)}`
		}
		function mV(a) {
			return kx`${a} is null`
		}
		function mW(a) {
			return kx`${a} is not null`
		}
		function mX(a) {
			return kx`exists ${a}`
		}
		function mY(a) {
			return kx`not exists ${a}`
		}
		function mZ(a, b, c) {
			return kx`${a} between ${mJ(b, a)} and ${mJ(c, a)}`
		}
		function m$(a, b, c) {
			return kx`${a} not between ${mJ(b, a)} and ${mJ(c, a)}`
		}
		function m_(a, b) {
			return kx`${a} like ${b}`
		}
		function m0(a, b) {
			return kx`${a} not like ${b}`
		}
		function m1(a, b) {
			return kx`${a} ilike ${b}`
		}
		function m2(a, b) {
			return kx`${a} not ilike ${b}`
		}
		function m3(a) {
			return kx`${a} asc`
		}
		function m4(a) {
			return kx`${a} desc`
		}
		class m5 {
			constructor(a, b, c) {
				;(this.sourceTable = a),
					(this.referencedTable = b),
					(this.relationName = c),
					(this.referencedTableName = b[j$.Symbol.Name])
			}
			static [jP] = "Relation"
			referencedTableName
			fieldName
		}
		class m6 {
			constructor(a, b) {
				;(this.table = a), (this.config = b)
			}
			static [jP] = "Relations"
		}
		class m7 extends m5 {
			constructor(a, b, c, d) {
				super(a, b, c?.relationName), (this.config = c), (this.isNullable = d)
			}
			static [jP] = "One"
			withFieldName(a) {
				let b = new m7(this.sourceTable, this.referencedTable, this.config, this.isNullable)
				return (b.fieldName = a), b
			}
		}
		class m8 extends m5 {
			constructor(a, b, c) {
				super(a, b, c?.relationName), (this.config = c)
			}
			static [jP] = "Many"
			withFieldName(a) {
				let b = new m8(this.sourceTable, this.referencedTable, this.config)
				return (b.fieldName = a), b
			}
		}
		function m9(a, b) {
			return new m6(a, (a) => Object.fromEntries(Object.entries(b(a)).map(([a, b]) => [a, b.withFieldName(a)])))
		}
		function na(a) {
			return {
				one: function (b, c) {
					return new m7(a, b, c, c?.fields.reduce((a, b) => a && b.notNull, !0) ?? !1)
				},
				many: function (b, c) {
					return new m8(a, b, c)
				},
			}
		}
		let nb = mD("runs", {
				id: lj().primaryKey().generatedAlwaysAsIdentity(),
				taskMetricsId: lj("task_metrics_id").references(() => nf.id),
				model: l9().notNull(),
				name: l9(),
				description: l9(),
				contextWindow: lj(),
				inputPrice: lZ(),
				outputPrice: lZ(),
				cacheWritesPrice: lZ(),
				cacheReadsPrice: lZ(),
				settings: ls().$type(),
				jobToken: l9(),
				pid: lj(),
				socketPath: l9("socket_path").notNull(),
				executionMethod: l9("execution_method").default("vscode").notNull().$type(),
				concurrency: lj().default(2).notNull(),
				timeout: lj().default(5).notNull(),
				passed: lj().default(0).notNull(),
				failed: lj().default(0).notNull(),
				createdAt: mh("created_at").notNull(),
			}),
			nc = m9(nb, ({ one: a }) => ({ taskMetrics: a(nf, { fields: [nb.taskMetricsId], references: [nf.id] }) })),
			nd = mD(
				"tasks",
				{
					id: lj().primaryKey().generatedAlwaysAsIdentity(),
					runId: lj("run_id")
						.references(() => nb.id, { onDelete: "cascade" })
						.notNull(),
					taskMetricsId: lj("task_metrics_id").references(() => nf.id, { onDelete: "set null" }),
					language: l9().notNull().$type(),
					exercise: l9().notNull(),
					iteration: lj().default(1).notNull(),
					passed: kX(),
					startedAt: mh("started_at"),
					finishedAt: mh("finished_at"),
					createdAt: mh("created_at").notNull(),
				},
				(a) => [
					new mE(!0, "tasks_language_exercise_iteration_idx").on(
						a.runId,
						a.language,
						a.exercise,
						a.iteration,
					),
				],
			),
			ne = m9(nd, ({ one: a }) => ({
				run: a(nb, { fields: [nd.runId], references: [nb.id] }),
				taskMetrics: a(nf, { fields: [nd.taskMetricsId], references: [nf.id] }),
			})),
			nf = mD("taskMetrics", {
				id: lj().primaryKey().generatedAlwaysAsIdentity(),
				tokensIn: lj("tokens_in").notNull(),
				tokensOut: lj("tokens_out").notNull(),
				tokensContext: lj("tokens_context").notNull(),
				cacheWrites: lj("cache_writes").notNull(),
				cacheReads: lj("cache_reads").notNull(),
				cost: lZ().notNull(),
				duration: lj().notNull(),
				toolUsage: ls("tool_usage").$type(),
				createdAt: mh("created_at").notNull(),
			}),
			ng = mD("toolErrors", {
				id: lj().primaryKey().generatedAlwaysAsIdentity(),
				runId: lj("run_id").references(() => nb.id, { onDelete: "cascade" }),
				taskId: lj("task_id").references(() => nd.id, { onDelete: "cascade" }),
				toolName: l9("tool_name").notNull().$type(),
				error: l9().notNull(),
				createdAt: mh("created_at").notNull(),
			}),
			nh = m9(ng, ({ one: a }) => ({
				run: a(nb, { fields: [ng.runId], references: [nb.id] }),
				task: a(nd, { fields: [ng.taskId], references: [nd.id] }),
			})),
			ni = {
				runs: nb,
				runsRelations: nc,
				tasks: nd,
				tasksRelations: ne,
				taskMetrics: nf,
				toolErrors: ng,
				toolErrorsRelations: nh,
			}
		a.s(
			[
				"runs",
				0,
				nb,
				"runsRelations",
				0,
				nc,
				"schema",
				0,
				ni,
				"taskMetrics",
				0,
				nf,
				"tasks",
				0,
				nd,
				"tasksRelations",
				0,
				ne,
				"toolErrors",
				0,
				ng,
				"toolErrorsRelations",
				0,
				nh,
			],
			76314,
		)
		var nj = a.i(46786),
			nk = a.i(22734)
		let nl = new Map(),
			nm = new Map(),
			nn = Symbol("OriginError"),
			no = {}
		class np extends Promise {
			constructor(a, b, c, d, e = {}) {
				let f, g
				super((a, b) => {
					;(f = a), (g = b)
				}),
					(this.tagged = Array.isArray(a.raw)),
					(this.strings = a),
					(this.args = b),
					(this.handler = c),
					(this.canceller = d),
					(this.options = e),
					(this.state = null),
					(this.statement = null),
					(this.resolve = (a) => ((this.active = !1), f(a))),
					(this.reject = (a) => ((this.active = !1), g(a))),
					(this.active = !1),
					(this.cancelled = null),
					(this.executed = !1),
					(this.signature = ""),
					(this[nn] = this.handler.debug
						? Error()
						: this.tagged &&
							(function (a) {
								if (nl.has(a)) return nl.get(a)
								let b = Error.stackTraceLimit
								return (
									(Error.stackTraceLimit = 4),
									nl.set(a, Error()),
									(Error.stackTraceLimit = b),
									nl.get(a)
								)
							})(this.strings))
			}
			get origin() {
				return (
					(this.handler.debug
						? this[nn].stack
						: this.tagged && nm.has(this.strings)
							? nm.get(this.strings)
							: nm.set(this.strings, this[nn].stack).get(this.strings)) || ""
				)
			}
			static get [Symbol.species]() {
				return Promise
			}
			cancel() {
				return this.canceller && (this.canceller(this), (this.canceller = null))
			}
			simple() {
				return (this.options.simple = !0), (this.options.prepare = !1), this
			}
			async readable() {
				return this.simple(), (this.streaming = !0), this
			}
			async writable() {
				return this.simple(), (this.streaming = !0), this
			}
			cursor(a = 1, b) {
				let c
				return ((this.options.simple = !1),
				"function" == typeof a && ((b = a), (a = 1)),
				(this.cursorRows = a),
				"function" == typeof b)
					? ((this.cursorFn = b), this)
					: {
							[Symbol.asyncIterator]: () => ({
								next: () => {
									if (this.executed && !this.active) return { done: !0 }
									c && c()
									let a = new Promise((a, b) => {
										;(this.cursorFn = (b) => (
											a({ value: b, done: !1 }), new Promise((a) => (c = a))
										)),
											(this.resolve = () => ((this.active = !1), a({ done: !0 }))),
											(this.reject = (a) => ((this.active = !1), b(a)))
									})
									return this.execute(), a
								},
								return: () => (c && c(no), { done: !0 }),
							}),
						}
			}
			describe() {
				return (this.options.simple = !1), (this.onlyDescribe = this.options.prepare = !0), this
			}
			stream() {
				throw Error(".stream has been renamed to .forEach")
			}
			forEach(a) {
				return (this.forEachFn = a), this.handle(), this
			}
			raw() {
				return (this.isRaw = !0), this
			}
			values() {
				return (this.isRaw = "values"), this
			}
			async handle() {
				!this.executed && (this.executed = !0) && (await 1) && this.handler(this)
			}
			execute() {
				return this.handle(), this
			}
			then() {
				return this.handle(), super.then.apply(this, arguments)
			}
			catch() {
				return this.handle(), super.catch.apply(this, arguments)
			}
			finally() {
				return this.handle(), super.finally.apply(this, arguments)
			}
		}
		class nq extends Error {
			constructor(a) {
				super(a.message), (this.name = this.constructor.name), Object.assign(this, a)
			}
		}
		let nr = function a(b, c, d) {
				let { host: e, port: f } = d || c,
					g = Object.assign(
						Error("write " + b + " " + (c.path || e + ":" + f)),
						{ code: b, errno: b, address: c.path || e },
						c.path ? {} : { port: f },
					)
				return Error.captureStackTrace(g, a), g
			},
			ns = function a(b) {
				let c = new nq(b)
				return Error.captureStackTrace(c, a), c
			},
			nt = function a(b, c) {
				let d = Object.assign(Error(b + ": " + c), { code: b })
				return Error.captureStackTrace(d, a), d
			},
			nu = function a(b) {
				let c = Object.assign(Error(b + " (B) is not supported"), { code: "MESSAGE_NOT_SUPPORTED", name: b })
				return Error.captureStackTrace(c, a), c
			}
		class nv {
			then() {
				nI()
			}
			catch() {
				nI()
			}
			finally() {
				nI()
			}
		}
		class nw extends nv {
			constructor(a) {
				super(), (this.value = nO(a))
			}
		}
		class nx extends nv {
			constructor(a, b, c) {
				super(), (this.value = a), (this.type = b), (this.array = c)
			}
		}
		class ny extends nv {
			constructor(a, b) {
				super(), (this.first = a), (this.rest = b)
			}
			build(a, b, c, d) {
				let e = nH
					.map(([b, c]) => ({ fn: c, i: a.search(b) }))
					.sort((a, b) => a.i - b.i)
					.pop()
				return -1 === e.i ? nN(this.first, d) : e.fn(this.first, this.rest, b, c, d)
			}
		}
		function nz(a, b, c, d) {
			let e = a instanceof nx ? a.value : a
			if (
				void 0 === e &&
				(a instanceof nx ? (a.value = d.transform.undefined) : (e = a = d.transform.undefined), void 0 === e)
			)
				throw nt("UNDEFINED_VALUE", "Undefined values are not allowed")
			return (
				"$" +
				c.push(
					a instanceof nx
						? (b.push(a.value),
							a.array
								? a.array[a.type || nP(a.value)] ||
									a.type ||
									(function a(b) {
										return Array.isArray(b) ? a(b[0]) : 1009 * ("string" == typeof b)
									})(a.value)
								: a.type)
						: (b.push(a), nP(a)),
				)
			)
		}
		let nA = nM({
			string: { to: 25, from: null, serialize: (a) => "" + a },
			number: { to: 0, from: [21, 23, 26, 700, 701], serialize: (a) => "" + a, parse: (a) => +a },
			json: { to: 114, from: [114, 3802], serialize: (a) => JSON.stringify(a), parse: (a) => JSON.parse(a) },
			boolean: { to: 16, from: 16, serialize: (a) => (!0 === a ? "t" : "f"), parse: (a) => "t" === a },
			date: {
				to: 1184,
				from: [1082, 1114, 1184],
				serialize: (a) => (a instanceof Date ? a : new Date(a)).toISOString(),
				parse: (a) => new Date(a),
			},
			bytea: {
				to: 17,
				from: 17,
				serialize: (a) => "\\x" + Buffer.from(a).toString("hex"),
				parse: (a) => Buffer.from(a.slice(2), "hex"),
			},
		})
		function nB(a, b, c, d, e, f) {
			for (let g = 1; g < a.strings.length; g++) (b += nC(b, c, d, e, f) + a.strings[g]), (c = a.args[g])
			return b
		}
		function nC(a, b, c, d, e) {
			return b instanceof ny
				? b.build(a, c, d, e)
				: b instanceof np
					? nD(b, c, d, e)
					: b instanceof nw
						? b.value
						: b && b[0] instanceof np
							? b.reduce((a, b) => a + " " + nD(b, c, d, e), "")
							: nz(b, c, d, e)
		}
		function nD(a, b, c, d) {
			return (a.fragment = !0), nB(a, a.strings[0], a.args[0], b, c, d)
		}
		function nE(a, b, c, d, e) {
			return a.map((a) => "(" + d.map((d) => nC("values", a[d], b, c, e)).join(",") + ")").join(",")
		}
		function nF(a, b, c, d, e) {
			let f = Array.isArray(a[0]),
				g = b.length ? b.flat() : Object.keys(f ? a[0] : a)
			return nE(f ? a : [a], c, d, g, e)
		}
		function nG(a, b, c, d, e) {
			let f
			return ("string" == typeof a && (a = [a].concat(b)), Array.isArray(a))
				? nN(a, e)
				: (b.length ? b.flat() : Object.keys(a))
						.map(
							(b) =>
								((f = a[b]) instanceof np
									? nD(f, c, d, e)
									: f instanceof nw
										? f.value
										: nz(f, c, d, e)) +
								" as " +
								nO(e.transform.column.to ? e.transform.column.to(b) : b),
						)
						.join(",")
		}
		let nH = Object.entries({
			values: nF,
			in: (...a) => {
				let b = nF(...a)
				return "()" === b ? "(null)" : b
			},
			select: nG,
			as: nG,
			returning: nG,
			"\\(": nG,
			update: (a, b, c, d, e) =>
				(b.length ? b.flat() : Object.keys(a)).map(
					(b) => nO(e.transform.column.to ? e.transform.column.to(b) : b) + "=" + nC("values", a[b], c, d, e),
				),
			insert(a, b, c, d, e) {
				let f = b.length ? b.flat() : Object.keys(Array.isArray(a) ? a[0] : a)
				return "(" + nN(f, e) + ")values" + nE(Array.isArray(a) ? a : [a], c, d, f, e)
			},
		}).map(([a, b]) => [RegExp("((?:^|[\\s(])" + a + "(?:$|[\\s(]))(?![\\s\\S]*\\1)", "i"), b])
		function nI() {
			throw nt("NOT_TAGGED_CALL", "Query not called as a tagged template literal")
		}
		let nJ = nA.serializers,
			nK = nA.parsers,
			nL = function (a) {
				let b = nM(a || {})
				return { serializers: Object.assign({}, nJ, b.serializers), parsers: Object.assign({}, nK, b.parsers) }
			}
		function nM(a) {
			return Object.keys(a).reduce(
				(b, c) => (
					a[c].from && [].concat(a[c].from).forEach((d) => (b.parsers[d] = a[c].parse)),
					a[c].serialize &&
						((b.serializers[a[c].to] = a[c].serialize),
						a[c].from && [].concat(a[c].from).forEach((d) => (b.serializers[d] = a[c].serialize))),
					b
				),
				{ parsers: {}, serializers: {} },
			)
		}
		function nN(a, { transform: { column: b } }) {
			return a.map((a) => nO(b.to ? b.to(a) : a)).join(",")
		}
		let nO = function (a) {
				return '"' + a.replace(/"/g, '""').replace(/\./g, '"."') + '"'
			},
			nP = function a(b) {
				return b instanceof nx
					? b.type
					: b instanceof Date
						? 1184
						: b instanceof Uint8Array
							? 17
							: !0 === b || !1 === b
								? 16
								: "bigint" == typeof b
									? 20
									: Array.isArray(b)
										? a(b[0])
										: 0
			},
			nQ = /\\/g,
			nR = /"/g,
			nS = function a(b, c, d, e) {
				if (!1 === Array.isArray(b)) return b
				if (!b.length) return "{}"
				let f = b[0],
					g = 1020 === e ? ";" : ","
				return Array.isArray(f) && !f.type
					? "{" + b.map((b) => a(b, c, d, e)).join(g) + "}"
					: "{" +
							b
								.map((a) => {
									if (void 0 === a && void 0 === (a = d.transform.undefined))
										throw nt("UNDEFINED_VALUE", "Undefined values are not allowed")
									return null === a
										? "null"
										: '"' +
												(c ? c(a.type ? a.value : a) : "" + a)
													.replace(nQ, "\\\\")
													.replace(nR, '\\"') +
												'"'
								})
								.join(g) +
							"}"
			},
			nT = { i: 0, char: null, str: "", quoted: !1, last: 0 },
			nU = (a) => {
				let b = a[0]
				for (let c = 1; c < a.length; c++) b += "_" === a[c] ? a[++c].toUpperCase() : a[c]
				return b
			},
			nV = (a) => {
				let b = a[0].toUpperCase()
				for (let c = 1; c < a.length; c++) b += "_" === a[c] ? a[++c].toUpperCase() : a[c]
				return b
			},
			nW = (a) => a.replace(/_/g, "-"),
			nX = (a) => a.replace(/([A-Z])/g, "_$1").toLowerCase(),
			nY = (a) => (a.slice(0, 1) + a.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase(),
			nZ = (a) => a.replace(/-/g, "_")
		function n$(a) {
			return function b(c, d) {
				return "object" == typeof c && null !== c && (114 === d.type || 3802 === d.type)
					? Array.isArray(c)
						? c.map((a) => b(a, d))
						: Object.entries(c).reduce((c, [e, f]) => Object.assign(c, { [a(e)]: b(f, d) }), {})
					: c
			}
		}
		;(nU.column = { from: nU }), (nU.value = { from: n$(nU) }), (nX.column = { to: nX })
		let n_ = { ...nU }
		;(n_.column.to = nX), (nV.column = { from: nV }), (nV.value = { from: n$(nV) }), (nY.column = { to: nY })
		let n0 = { ...nV }
		;(n0.column.to = nY), (nW.column = { from: nW }), (nW.value = { from: n$(nW) }), (nZ.column = { to: nZ })
		let n1 = { ...nW }
		n1.column.to = nZ
		var n2 = a.i(4446),
			n3 = a.i(55004),
			n4 = a.i(54799),
			n5 = a.i(88947),
			n6 = a.i(60438)
		class n7 extends Array {
			constructor() {
				super(),
					Object.defineProperties(this, {
						count: { value: null, writable: !0 },
						state: { value: null, writable: !0 },
						command: { value: null, writable: !0 },
						columns: { value: null, writable: !0 },
						statement: { value: null, writable: !0 },
					})
			}
			static get [Symbol.species]() {
				return Array
			}
		}
		let n8 = function (a = []) {
				let b = a.slice(),
					c = 0
				return {
					get length() {
						return b.length - c
					},
					remove: (a) => {
						let c = b.indexOf(a)
						return -1 === c ? null : (b.splice(c, 1), a)
					},
					push: (a) => (b.push(a), a),
					shift: () => {
						let a = b[c++]
						return c === b.length ? ((c = 0), (b = [])) : (b[c - 1] = void 0), a
					},
				}
			},
			n9 = Buffer.allocUnsafe(256),
			oa = Object.assign(
				function () {
					return (oa.i = 0), oa
				},
				"BCcDdEFfHPpQSX".split("").reduce((a, b) => {
					let c = b.charCodeAt(0)
					return (a[b] = () => ((n9[0] = c), (oa.i = 5), oa)), a
				}, {}),
				{
					N: "\0",
					i: 0,
					inc: (a) => ((oa.i += a), oa),
					str(a) {
						let b = Buffer.byteLength(a)
						return ob(b), (oa.i += n9.write(a, oa.i, b, "utf8")), oa
					},
					i16: (a) => (ob(2), n9.writeUInt16BE(a, oa.i), (oa.i += 2), oa),
					i32: (a, b) => (
						b || 0 === b ? n9.writeUInt32BE(a, b) : (ob(4), n9.writeUInt32BE(a, oa.i), (oa.i += 4)), oa
					),
					z: (a) => (ob(a), n9.fill(0, oa.i, oa.i + a), (oa.i += a), oa),
					raw: (a) => ((n9 = Buffer.concat([n9.subarray(0, oa.i), a])), (oa.i = n9.length), oa),
					end(a = 1) {
						n9.writeUInt32BE(oa.i - a, a)
						let b = n9.subarray(0, oa.i)
						return (oa.i = 0), (n9 = Buffer.allocUnsafe(256)), b
					},
				},
			)
		function ob(a) {
			if (n9.length - oa.i < a) {
				let b = n9,
					c = b.length
				;(n9 = Buffer.allocUnsafe(c + (c >> 1) + a)), b.copy(n9)
			}
		}
		let oc = function a(b, c = {}, { onopen: d = oj, onend: e = oj, onclose: f = oj } = {}) {
				let {
						ssl: g,
						max: h,
						user: i,
						host: j,
						port: k,
						database: l,
						parsers: m,
						transform: n,
						onnotice: o,
						onnotify: p,
						onparameter: q,
						max_pipeline: r,
						keep_alive: s,
						backoff: t,
						target_session_attrs: u,
					} = b,
					v = n8(),
					w = od++,
					x = { pid: null, secret: null },
					y = op(at, b.idle_timeout),
					z = op(at, b.max_lifetime),
					A = op(function () {
						ar(nr("CONNECT_TIMEOUT", b, B)), B.destroy()
					}, b.connect_timeout),
					B = null,
					C,
					D = new n7(),
					E = Buffer.alloc(0),
					F = b.fetch_types,
					G = {},
					H = {},
					I = Math.random().toString(36).slice(2),
					J = 1,
					K = 0,
					L = 0,
					M = 0,
					N = 0,
					O = 0,
					P = 0,
					Q = 0,
					R = null,
					S = null,
					T = !1,
					U = null,
					V = null,
					W = null,
					X = null,
					Y = null,
					Z = null,
					$ = null,
					_ = null,
					aa = null,
					ab = null,
					ac = {
						queue: c.closed,
						idleTimer: y,
						connect(a) {
							;(W = a), ao()
						},
						terminate: au,
						execute: af,
						cancel: ae,
						end: at,
						count: 0,
						id: w,
					}
				return c.closed && c.closed.push(ac), ac
				async function ad() {
					let a
					try {
						a = b.socket ? await Promise.resolve(b.socket(b)) : new n2.default.Socket()
					} catch (a) {
						aq(a)
						return
					}
					return a.on("error", aq), a.on("close", av), a.on("drain", al), a
				}
				async function ae({ pid: a, secret: b }, c, d) {
					try {
						;(C = oa().i32(16).i32(0x4d2162e).i32(a).i32(b).end(16)),
							await an(),
							B.once("error", d),
							B.once("close", c)
					} catch (a) {
						d(a)
					}
				}
				function af(a) {
					if (T) return as(a, nr("CONNECTION_DESTROYED", b))
					if (!a.cancelled)
						try {
							var c
							let d, e, f
							return (
								(a.state = x),
								aa ? v.push(a) : ((aa = a).active = !0),
								(c = a),
								(d = []),
								(e = []),
								(f = nB(c, c.strings[0], c.args[0], d, e, b)),
								c.tagged || c.args.forEach((a) => nz(a, d, e, b)),
								(c.prepare = b.prepare && (!("prepare" in c.options) || c.options.prepare)),
								(c.string = f),
								(c.signature = c.prepare && e + f),
								c.onlyDescribe && delete H[c.signature],
								(c.parameters = c.parameters || d),
								(c.prepared = c.prepare && c.signature in H),
								(c.describeFirst = c.onlyDescribe || (d.length && !c.prepared)),
								(c.statement = c.prepared
									? H[c.signature]
									: { string: f, types: e, name: c.prepare ? I + J++ : "" }),
								"function" == typeof b.debug && b.debug(w, f, d, e),
								ai(
									(function (a) {
										var b
										if (a.parameters.length >= 65534)
											throw nt(
												"MAX_PARAMETERS_EXCEEDED",
												"Max number of parameters (65534) exceeded",
											)
										return a.options.simple
											? oa()
													.Q()
													.str(a.statement.string + oa.N)
													.end()
											: a.describeFirst
												? Buffer.concat([ag(a), of])
												: a.prepare
													? a.prepared
														? ah(a)
														: Buffer.concat([ag(a), ah(a)])
													: ((b = a),
														Buffer.concat([
															aF(b.statement.string, b.parameters, b.statement.types),
															oi,
															ah(b),
														]))
									})(a),
								) &&
									!a.describeFirst &&
									!a.cursorFn &&
									v.length < r &&
									(!a.options.onexecute || a.options.onexecute(ac))
							)
						} catch (a) {
							return 0 === v.length && ai(oe), ar(a), !0
						}
				}
				function ag(a) {
					return Buffer.concat([
						aF(a.statement.string, a.parameters, a.statement.types, a.statement.name),
						(function (a, b = "") {
							return oa()
								.D()
								.str("S")
								.str(b + oa.N)
								.end()
						})("S", a.statement.name),
					])
				}
				function ah(a) {
					return Buffer.concat([
						(function (a, c, d = "", e = "") {
							let f, g
							return (
								oa()
									.B()
									.str(e + oa.N)
									.str(d + oa.N)
									.i16(0)
									.i16(a.length),
								a.forEach((d, e) => {
									if (null === d) return oa.i32(0xffffffff)
									;(g = c[e]),
										(a[e] = d = g in b.serializers ? b.serializers[g](d) : "" + d),
										(f = oa.i),
										oa
											.inc(4)
											.str(d)
											.i32(oa.i - f - 4, f)
								}),
								oa.i16(0),
								oa.end()
							)
						})(a.parameters, a.statement.types, a.statement.name, a.cursorName),
						a.cursorFn ? aG("", a.cursorRows) : oh,
					])
				}
				function ai(a, b) {
					return ((Z = Z ? Buffer.concat([Z, a]) : Buffer.from(a)), b || Z.length >= 1024)
						? aj(b)
						: (null === S && (S = setImmediate(aj)), !0)
				}
				function aj(a) {
					let b = B.write(Z, a)
					return null !== S && clearImmediate(S), (Z = S = null), b
				}
				async function ak() {
					if ((ai(og), !(await new Promise((a) => B.once("data", (b) => a(83 === b[0])))) && "prefer" === g))
						return ap()
					B.removeAllListeners(),
						(B = n3.default.connect({
							socket: B,
							servername: n2.default.isIP(B.host) ? void 0 : B.host,
							...("require" === g || "allow" === g || "prefer" === g
								? { rejectUnauthorized: !1 }
								: "verify-full" === g
									? {}
									: "object" == typeof g
										? g
										: {}),
						})).on("secureConnect", ap),
						B.on("error", aq),
						B.on("close", av),
						B.on("drain", al)
				}
				function al() {
					aa || d(ac)
				}
				function am(c) {
					if (!U || (U.push(c), !((L -= c.length) > 0)))
						for (
							E = U
								? Buffer.concat(U, O - L)
								: 0 === E.length
									? c
									: Buffer.concat([E, c], E.length + c.length);
							E.length > 4;

						) {
							if ((O = E.readUInt32BE(1)) >= E.length) {
								;(L = O - E.length), (U = [E])
								break
							}
							try {
								!(function (c, e = c[0]) {
									;(68 === e
										? function (a) {
												let b,
													c,
													d,
													e = 7,
													f = aa.isRaw ? Array(aa.statement.columns.length) : {}
												for (let g = 0; g < aa.statement.columns.length; g++)
													(c = aa.statement.columns[g]),
														(b = a.readInt32BE(e)),
														(e += 4),
														(d =
															-1 === b
																? null
																: !0 === aa.isRaw
																	? a.subarray(e, (e += b))
																	: void 0 === c.parser
																		? a.toString("utf8", e, (e += b))
																		: !0 === c.parser.array
																			? c.parser(
																					a.toString("utf8", e + 1, (e += b)),
																				)
																			: c.parser(
																					a.toString("utf8", e, (e += b)),
																				)),
														aa.isRaw
															? (f[g] =
																	!0 === aa.isRaw
																		? d
																		: n.value.from
																			? n.value.from(d, c)
																			: d)
															: (f[c.name] = n.value.from ? n.value.from(d, c) : d)
												aa.forEachFn
													? aa.forEachFn(n.row.from ? n.row.from(f) : f, D)
													: (D[Q++] = n.row.from ? n.row.from(f) : f)
											}
										: 100 === e
											? function (a) {
													Y && (Y.push(a.subarray(5)) || B.pause())
												}
											: 65 === e
												? function (a) {
														if (!p) return
														let b = 9
														for (; 0 !== a[b++]; );
														p(
															a.toString("utf8", 9, b - 1),
															a.toString("utf8", b, a.length - 1),
														)
													}
												: 83 === e
													? function (a) {
															let [c, d] = a.toString("utf8", 5, a.length - 1).split(oa.N)
															;(G[c] = d),
																b.parameters[c] !== d &&
																	((b.parameters[c] = d), q && q(c, d))
														}
													: 90 === e
														? function (c) {
																if (
																	(aa && aa.options.simple && aa.resolve(V || D),
																	(aa = V = null),
																	(D = new n7()),
																	A.cancel(),
																	W)
																) {
																	if (u)
																		if (
																			!G.in_hot_standby ||
																			!G.default_transaction_read_only
																		)
																			return (function () {
																				let a = new np(
																					[
																						`
      show transaction_read_only;
      select pg_catalog.pg_is_in_recovery()
    `,
																					],
																					[],
																					af,
																					null,
																					{ simple: !0 },
																				)
																				;(a.resolve = ([[a], [b]]) => {
																					;(G.default_transaction_read_only =
																						a.transaction_read_only),
																						(G.in_hot_standby =
																							b.pg_is_in_recovery
																								? "on"
																								: "off")
																				}),
																					a.execute()
																			})()
																		else {
																			var e, f
																			if (
																				((e = u),
																				(f = G),
																				("read-write" === e &&
																					"on" ===
																						f.default_transaction_read_only) ||
																					("read-only" === e &&
																						"off" ===
																							f.default_transaction_read_only) ||
																					("primary" === e &&
																						"on" === f.in_hot_standby) ||
																					("standby" === e &&
																						"off" === f.in_hot_standby) ||
																					("prefer-standby" === e &&
																						"off" === f.in_hot_standby &&
																						b.host[N]))
																			)
																				return au()
																		}
																	return F
																		? (W.reserve && (W = null), aD())
																		: (W && !W.reserve && af(W),
																			(b.shared.retries = N = 0),
																			void (W = null))
																}
																for (
																	;
																	v.length &&
																	(aa = v.shift()) &&
																	((aa.active = !0), aa.cancelled);

																)
																	a(b).cancel(
																		aa.state,
																		aa.cancelled.resolve,
																		aa.cancelled.reject,
																	)
																aa ||
																	(ac.reserved
																		? ac.reserved.release || 73 !== c[5]
																			? ac.reserved()
																			: X
																				? au()
																				: ((ac.reserved = null), d(ac))
																		: X
																			? au()
																			: d(ac))
															}
														: 67 === e
															? function (a) {
																	Q = 0
																	for (let b = a.length - 1; b > 0; b--)
																		if (
																			(32 === a[b] &&
																				a[b + 1] < 58 &&
																				null === D.count &&
																				(D.count = +a.toString(
																					"utf8",
																					b + 1,
																					a.length - 1,
																				)),
																			a[b - 1] >= 65)
																		) {
																			;(D.command = a.toString("utf8", 5, b)),
																				(D.state = x)
																			break
																		}
																	return (ab && (ab(), (ab = null)),
																	"BEGIN" !== D.command || 1 === h || ac.reserved)
																		? aa.options.simple
																			? aw()
																			: void (aa.cursorFn &&
																					(D.count && aa.cursorFn(D), ai(oe)),
																				aa.resolve(D))
																		: ar(
																				nt(
																					"UNSAFE_TRANSACTION",
																					"Only use sql.begin, sql.reserved or max: 1",
																				),
																			)
																}
															: 50 === e
																? aw
																: 49 === e
																	? function () {
																			aa.parsing = !1
																		}
																	: 116 === e
																		? function (a) {
																				let b = a.readUInt16BE(5)
																				for (let c = 0; c < b; ++c)
																					aa.statement.types[c] ||
																						(aa.statement.types[c] =
																							a.readUInt32BE(7 + 4 * c))
																				aa.prepare &&
																					(H[aa.signature] = aa.statement),
																					aa.describeFirst &&
																						!aa.onlyDescribe &&
																						(ai(ah(aa)),
																						(aa.describeFirst = !1))
																			}
																		: 84 === e
																			? function (a) {
																					let b
																					D.command &&
																						((V = V || [D]).push(
																							(D = new n7()),
																						),
																						(D.count = null),
																						(aa.statement.columns = null))
																					let c = a.readUInt16BE(5),
																						d = 7
																					aa.statement.columns = Array(c)
																					for (let e = 0; e < c; ++e) {
																						for (b = d; 0 !== a[d++]; );
																						let c = a.readUInt32BE(d),
																							f = a.readUInt16BE(d + 4),
																							g = a.readUInt32BE(d + 6)
																						;(aa.statement.columns[e] = {
																							name: n.column.from
																								? n.column.from(
																										a.toString(
																											"utf8",
																											b,
																											d - 1,
																										),
																									)
																								: a.toString(
																										"utf8",
																										b,
																										d - 1,
																									),
																							parser: m[g],
																							table: c,
																							number: f,
																							type: g,
																						}),
																							(d += 18)
																					}
																					if (
																						((D.statement = aa.statement),
																						aa.onlyDescribe)
																					)
																						return (
																							aa.resolve(aa.statement),
																							ai(oe)
																						)
																				}
																			: 82 === e
																				? ax
																				: 110 === e
																					? function () {
																							if (
																								((D.statement =
																									aa.statement),
																								(D.statement.columns =
																									[]),
																								aa.onlyDescribe)
																							)
																								return (
																									aa.resolve(
																										aa.statement,
																									),
																									ai(oe)
																								)
																						}
																					: 75 === e
																						? function (a) {
																								;(x.pid =
																									a.readUInt32BE(5)),
																									(x.secret =
																										a.readUInt32BE(
																											9,
																										))
																							}
																						: 69 === e
																							? function (a) {
																									var b, c
																									aa &&
																										(aa.cursorFn ||
																											aa.describeFirst) &&
																										ai(oe)
																									let d = ns(om(a))
																									aa && aa.retried
																										? ar(aa.retried)
																										: aa &&
																											  aa.prepared &&
																											  ok.has(
																													d.routine,
																											  )
																											? ((b = aa),
																												(c = d),
																												delete H[
																													b
																														.signature
																												],
																												(b.retried =
																													c),
																												af(b))
																											: ar(d)
																								}
																							: 115 === e
																								? aE
																								: 51 === e
																									? function () {
																											D.count &&
																												aa.cursorFn(
																													D,
																												),
																												aa.resolve(
																													D,
																												)
																										}
																									: 71 === e
																										? function () {
																												;(Y =
																													new n5.default.Writable(
																														{
																															autoDestroy:
																																!0,
																															write(
																																a,
																																b,
																																c,
																															) {
																																B.write(
																																	oa()
																																		.d()
																																		.raw(
																																			a,
																																		)
																																		.end(),
																																	c,
																																)
																															},
																															destroy(
																																a,
																																b,
																															) {
																																b(
																																	a,
																																),
																																	B.write(
																																		oa()
																																			.f()
																																			.str(
																																				a +
																																					oa.N,
																																			)
																																			.end(),
																																	),
																																	(Y =
																																		null)
																															},
																															final(
																																a,
																															) {
																																B.write(
																																	oa()
																																		.c()
																																		.end(),
																																),
																																	(ab =
																																		a)
																															},
																														},
																													)),
																													aa.resolve(
																														Y,
																													)
																											}
																										: 78 === e
																											? function (
																													a,
																												) {
																													o
																														? o(
																																om(
																																	a,
																																),
																															)
																														: console.log(
																																om(
																																	a,
																																),
																															)
																												}
																											: 72 === e
																												? function () {
																														;(Y =
																															new n5.default.Readable(
																																{
																																	read() {
																																		B.resume()
																																	},
																																},
																															)),
																															aa.resolve(
																																Y,
																															)
																													}
																												: 99 ===
																													  e
																													? function () {
																															Y &&
																																Y.push(
																																	null,
																																),
																																(Y =
																																	null)
																														}
																													: 73 ===
																														  e
																														? function () {}
																														: 86 ===
																															  e
																															? function () {
																																	ar(
																																		nu(
																																			"FunctionCallResponse",
																																		),
																																	)
																																}
																															: 118 ===
																																  e
																																? function () {
																																		ar(
																																			nu(
																																				"NegotiateProtocolVersion",
																																			),
																																		)
																																	}
																																: 87 ===
																																	  e
																																	? function () {
																																			;(Y =
																																				new n5.default.Duplex(
																																					{
																																						autoDestroy:
																																							!0,
																																						read() {
																																							B.resume()
																																						},
																																						write(
																																							a,
																																							b,
																																							c,
																																						) {
																																							B.write(
																																								oa()
																																									.d()
																																									.raw(
																																										a,
																																									)
																																									.end(),
																																								c,
																																							)
																																						},
																																						destroy(
																																							a,
																																							b,
																																						) {
																																							b(
																																								a,
																																							),
																																								B.write(
																																									oa()
																																										.f()
																																										.str(
																																											a +
																																												oa.N,
																																										)
																																										.end(),
																																								),
																																								(Y =
																																									null)
																																						},
																																						final(
																																							a,
																																						) {
																																							B.write(
																																								oa()
																																									.c()
																																									.end(),
																																							),
																																								(ab =
																																									a)
																																						},
																																					},
																																				)),
																																				aa.resolve(
																																					Y,
																																				)
																																		}
																																	: function (
																																			a,
																																		) {
																																			console.error(
																																				"Postgres.js : Unknown Message:",
																																				a[0],
																																			)
																																		})(
										c,
									)
								})(E.subarray(0, O + 1))
							} catch (a) {
								aa && (aa.cursorFn || aa.describeFirst) && ai(oe), ar(a)
							}
							;(E = E.subarray(O + 1)), (L = 0), (U = null)
						}
				}
				async function an() {
					if (((T = !1), (G = {}), B || (B = await ad()), B)) {
						if ((A.start(), b.socket)) return g ? ak() : ap()
						if ((B.on("connect", g ? ak : ap), b.path)) return B.connect(b.path)
						;(B.ssl = g), B.connect(k[M], j[M]), (B.host = j[M]), (B.port = k[M]), (M = (M + 1) % k.length)
					}
				}
				function ao() {
					setTimeout(an, K ? K + P - n6.performance.now() : 0)
				}
				function ap() {
					try {
						;(H = {}),
							(F = b.fetch_types),
							(I = Math.random().toString(36).slice(2)),
							(J = 1),
							z.start(),
							B.on("data", am),
							s && B.setKeepAlive && B.setKeepAlive(!0, 1e3 * s)
						let a =
							C ||
							oa()
								.inc(4)
								.i16(3)
								.z(2)
								.str(
									Object.entries(
										Object.assign({ user: i, database: l, client_encoding: "UTF8" }, b.connection),
									)
										.filter(([, a]) => a)
										.map(([a, b]) => a + oa.N + b)
										.join(oa.N),
								)
								.z(2)
								.end(0)
						ai(a)
					} catch (a) {
						aq(a)
					}
				}
				function aq(a) {
					if (ac.queue !== c.connecting || !b.host[N + 1]) for (ar(a); v.length; ) as(v.shift(), a)
				}
				function ar(a) {
					Y && (Y.destroy(a), (Y = null)), aa && as(aa, a), W && (as(W, a), (W = null))
				}
				function as(a, c) {
					if (a.reserve) return a.reject(c)
					;(c && "object" == typeof c) || (c = Error(c)),
						"query" in c ||
							"parameters" in c ||
							Object.defineProperties(c, {
								stack: { value: c.stack + a.origin.replace(/.*\n/, "\n"), enumerable: b.debug },
								query: { value: a.string, enumerable: b.debug },
								parameters: { value: a.parameters, enumerable: b.debug },
								args: { value: a.args, enumerable: b.debug },
								types: { value: a.statement && a.statement.types, enumerable: b.debug },
							}),
						a.reject(c)
				}
				function at() {
					return (
						X ||
						(ac.reserved || e(ac),
						ac.reserved || W || aa || 0 !== v.length
							? (X = new Promise((a) => ($ = a)))
							: (au(), new Promise((a) => (B && "closed" !== B.readyState ? B.once("close", a) : a()))))
					)
				}
				function au() {
					;(T = !0),
						(Y || aa || W || v.length) && aq(nr("CONNECTION_DESTROYED", b)),
						clearImmediate(S),
						B &&
							(B.removeListener("data", am),
							B.removeListener("connect", ap),
							"open" === B.readyState && B.end(oa().X().end())),
						$ && ($(), (X = $ = null))
				}
				async function av(a) {
					if (
						((E = Buffer.alloc(0)),
						(L = 0),
						(U = null),
						clearImmediate(S),
						B.removeListener("data", am),
						B.removeListener("connect", ap),
						y.cancel(),
						z.cancel(),
						A.cancel(),
						B.removeAllListeners(),
						(B = null),
						W)
					)
						return ao()
					!a && (aa || v.length) && aq(nr("CONNECTION_CLOSED", b, B)),
						(K = n6.performance.now()),
						a && b.shared.retries++,
						(P = ("function" == typeof t ? t(b.shared.retries) : t) * 1e3),
						f(ac, nr("CONNECTION_CLOSED", b, B))
				}
				function aw() {
					D.statement || (D.statement = aa.statement), (D.columns = aa.statement.columns)
				}
				async function ax(a, b = a.readUInt32BE(5)) {
					;(3 === b
						? ay
						: 5 === b
							? az
							: 10 === b
								? aA
								: 11 === b
									? aB
									: 12 === b
										? function (a) {
												a.toString("utf8", 9).split(oa.N, 1)[0].slice(2) !== R &&
													(ar(
														nt(
															"SASL_SIGNATURE_MISMATCH",
															"The server did not return the correct signature",
														),
													),
													B.destroy())
											}
										: 0 !== b
											? function (a, b) {
													console.error("Postgres.js : Unknown Auth:", b)
												}
											: oj)(a, b)
				}
				async function ay() {
					let a = await aC()
					ai(oa().p().str(a).z(1).end())
				}
				async function az(a) {
					let b = "md5" + (await on(Buffer.concat([Buffer.from(await on((await aC()) + i)), a.subarray(9)])))
					ai(oa().p().str(b).z(1).end())
				}
				async function aA() {
					;(_ = (await n4.default.randomBytes(18)).toString("base64")),
						oa()
							.p()
							.str("SCRAM-SHA-256" + oa.N)
					let a = oa.i
					ai(
						oa
							.inc(4)
							.str("n,,n=*,r=" + _)
							.i32(oa.i - a - 4, a)
							.end(),
					)
				}
				async function aB(a) {
					var b
					let c = a
							.toString("utf8", 9)
							.split(",")
							.reduce((a, b) => ((a[b[0]] = b.slice(2)), a), {}),
						d = await n4.default.pbkdf2Sync(
							await aC(),
							Buffer.from(c.s, "base64"),
							parseInt(c.i),
							32,
							"sha256",
						),
						e = await oo(d, "Client Key"),
						f = "n=*,r=" + _ + ",r=" + c.r + ",s=" + c.s + ",i=" + c.i + ",c=biws,r=" + c.r
					R = (await oo(await oo(d, "Server Key"), f)).toString("base64")
					let g =
						"c=biws,r=" +
						c.r +
						",p=" +
						(function (a, b) {
							let c = Math.max(a.length, b.length),
								d = Buffer.allocUnsafe(c)
							for (let e = 0; e < c; e++) d[e] = a[e] ^ b[e]
							return d
						})(
							e,
							Buffer.from(
								await oo(await ((b = e), n4.default.createHash("sha256").update(b).digest()), f),
							),
						).toString("base64")
					ai(oa().p().str(g).end())
				}
				function aC() {
					return Promise.resolve("function" == typeof b.pass ? b.pass() : b.pass)
				}
				async function aD() {
					;(F = !1),
						(
							await new np(
								[
									`
      select b.oid, b.typarray
      from pg_catalog.pg_type a
      left join pg_catalog.pg_type b on b.oid = a.typelem
      where a.typcategory = 'A'
      group by b.oid, b.typarray
      order by b.oid
    `,
								],
								[],
								af,
							)
						).forEach(({ oid: a, typarray: c }) =>
							(function (a, c) {
								if (b.parsers[c] && b.serializers[c]) return
								let d = b.parsers[a]
								;(b.shared.typeArrayMap[a] = c),
									(b.parsers[c] = (a) => (
										(nT.i = nT.last = 0),
										(function a(b, c, d, e) {
											let f = [],
												g = 1020 === e ? ";" : ","
											for (; b.i < c.length; b.i++) {
												if (((b.char = c[b.i]), b.quoted))
													"\\" === b.char
														? (b.str += c[++b.i])
														: '"' === b.char
															? (f.push(d ? d(b.str) : b.str),
																(b.str = ""),
																(b.quoted = '"' === c[b.i + 1]),
																(b.last = b.i + 2))
															: (b.str += b.char)
												else if ('"' === b.char) b.quoted = !0
												else if ("{" === b.char) (b.last = ++b.i), f.push(a(b, c, d, e))
												else if ("}" === b.char) {
													;(b.quoted = !1),
														b.last < b.i &&
															f.push(d ? d(c.slice(b.last, b.i)) : c.slice(b.last, b.i)),
														(b.last = b.i + 1)
													break
												} else
													b.char === g &&
														"}" !== b.p &&
														'"' !== b.p &&
														(f.push(d ? d(c.slice(b.last, b.i)) : c.slice(b.last, b.i)),
														(b.last = b.i + 1))
												b.p = b.char
											}
											return (
												b.last < b.i &&
													f.push(d ? d(c.slice(b.last, b.i + 1)) : c.slice(b.last, b.i + 1)),
												f
											)
										})(nT, a, d, c)
									)),
									(b.parsers[c].array = !0),
									(b.serializers[c] = (d) => nS(d, b.serializers[a], b, c))
							})(a, c),
						)
				}
				async function aE() {
					try {
						let a = await Promise.resolve(aa.cursorFn(D))
						;(Q = 0),
							a === no
								? ai(
										(function (a = "") {
											return Buffer.concat([
												oa()
													.C()
													.str("P")
													.str(a + oa.N)
													.end(),
												oa().S().end(),
											])
										})(aa.portal),
									)
								: ((D = new n7()), ai(aG("", aa.cursorRows)))
					} catch (a) {
						ai(oe), aa.reject(a)
					}
				}
				function aF(a, b, c, d = "") {
					return (
						oa()
							.P()
							.str(d + oa.N)
							.str(a + oa.N)
							.i16(b.length),
						b.forEach((a, b) => oa.i32(c[b] || 0)),
						oa.end()
					)
				}
				function aG(a = "", b = 0) {
					return Buffer.concat([
						oa()
							.E()
							.str(a + oa.N)
							.i32(b)
							.end(),
						of,
					])
				}
			},
			od = 1,
			oe = oa().S().end(),
			of = oa().H().end(),
			og = oa().i32(8).i32(0x4d2162f).end(8),
			oh = Buffer.concat([oa().E().str(oa.N).i32(0).end(), oe]),
			oi = oa().D().str("S").str(oa.N).end(),
			oj = () => {},
			ok = new Set(["FetchPreparedStatement", "RevalidateCachedQuery", "transformAssignedExpr"]),
			ol = {
				83: "severity_local",
				86: "severity",
				67: "code",
				77: "message",
				68: "detail",
				72: "hint",
				80: "position",
				112: "internal_position",
				113: "internal_query",
				87: "where",
				115: "schema_name",
				116: "table_name",
				99: "column_name",
				100: "data type_name",
				110: "constraint_name",
				70: "file",
				76: "line",
				82: "routine",
			}
		function om(a) {
			let b = {},
				c = 5
			for (let d = 5; d < a.length - 1; d++)
				0 === a[d] && ((b[ol[a[c]]] = a.toString("utf8", c + 1, d)), (c = d + 1))
			return b
		}
		function on(a) {
			return n4.default.createHash("md5").update(a).digest("hex")
		}
		function oo(a, b) {
			return n4.default.createHmac("sha256", a).update(b).digest()
		}
		function op(a, b) {
			let c
			if (!(b = "function" == typeof b ? b() : b)) return { cancel: oj, start: oj }
			return {
				cancel() {
					c && (clearTimeout(c), (c = null))
				},
				start() {
					c && clearTimeout(c), (c = setTimeout(d, 1e3 * b, arguments))
				},
			}
			function d(b) {
				a.apply(null, b), (c = null)
			}
		}
		let oq = () => {}
		function or(a, b, c, d) {
			let e,
				f,
				g,
				h = d.raw ? Array(b.length) : {}
			for (let i = 0; i < b.length; i++)
				(e = a[c++]),
					(f = b[i]),
					(g =
						110 === e
							? null
							: 117 === e
								? void 0
								: void 0 === f.parser
									? a.toString("utf8", c + 4, (c += 4 + a.readUInt32BE(c)))
									: !0 === f.parser.array
										? f.parser(a.toString("utf8", c + 5, (c += 4 + a.readUInt32BE(c))))
										: f.parser(a.toString("utf8", c + 4, (c += 4 + a.readUInt32BE(c))))),
					d.raw
						? (h[i] = !0 === d.raw ? g : d.value.from ? d.value.from(g, f) : g)
						: (h[f.name] = d.value.from ? d.value.from(g, f) : g)
			return { i: c, row: d.row.from ? d.row.from(h) : h }
		}
		function os(a, b, c = 393216) {
			return new Promise(async (d, e) => {
				await a
					.begin(async (a) => {
						let e
						b || ([{ oid: b }] = await a`select lo_creat(-1) as oid`)
						let [{ fd: f }] = await a`select lo_open(${b}, ${c}) as fd`,
							g = {
								writable: i,
								readable: h,
								close: () => a`select lo_close(${f})`.then(e),
								tell: () => a`select lo_tell64(${f})`,
								read: (b) => a`select loread(${f}, ${b}) as data`,
								write: (b) => a`select lowrite(${f}, ${b})`,
								truncate: (b) => a`select lo_truncate64(${f}, ${b})`,
								seek: (b, c = 0) => a`select lo_lseek64(${f}, ${b}, ${c})`,
								size: () => a`
          select
            lo_lseek64(${f}, location, 0) as position,
            seek.size
          from (
            select
              lo_lseek64($1, 0, 2) as size,
              tell.location
            from (select lo_tell64($1) as location) tell
          ) seek
        `,
							}
						return d(g), new Promise(async (a) => (e = a))
						async function h({ highWaterMark: a = 16384, start: b = 0, end: c = 1 / 0 } = {}) {
							let d = c - b
							return (
								b && (await g.seek(b)),
								new n5.default.Readable({
									highWaterMark: a,
									async read(a) {
										let b = a > d ? a - d : a
										d -= a
										let [{ data: c }] = await g.read(b)
										this.push(c), c.length < a && this.push(null)
									},
								})
							)
						}
						async function i({ highWaterMark: a = 16384, start: b = 0 } = {}) {
							return (
								b && (await g.seek(b)),
								new n5.default.Writable({
									highWaterMark: a,
									write(a, b, c) {
										g.write(a).then(() => c(), c)
									},
								})
							)
						}
					})
					.catch(e)
			})
		}
		Object.assign(ou, {
			PostgresError: nq,
			toPascal: nV,
			pascal: n0,
			toCamel: nU,
			camel: n_,
			toKebab: nW,
			kebab: n1,
			fromPascal: nY,
			fromCamel: nX,
			fromKebab: nZ,
			BigInt: { to: 20, from: [20], parse: (a) => BigInt(a), serialize: (a) => a.toString() },
		})
		let ot = ou
		function ou(a, b) {
			let c = (function (a, b) {
					var c
					if (a && a.shared) return a
					let d = process.env,
						e = (a && "string" != typeof a ? a : b) || {},
						{ url: f, multihost: g } = (function (a) {
							if (!a || "string" != typeof a) return { url: { searchParams: new Map() } }
							let b = a
							b = decodeURIComponent(
								(b = b.slice(b.indexOf("://") + 3).split(/[?/]/)[0]).slice(b.indexOf("@") + 1),
							)
							let c = new URL(a.replace(b, b.split(",")[0]))
							return {
								url: {
									username: decodeURIComponent(c.username),
									password: decodeURIComponent(c.password),
									host: c.host,
									hostname: c.hostname,
									port: c.port,
									pathname: c.pathname,
									searchParams: c.searchParams,
								},
								multihost: b.indexOf(",") > -1 && b,
							}
						})(a),
						h = [...f.searchParams].reduce((a, [b, c]) => ((a[b] = c), a), {}),
						i = e.hostname || e.host || g || f.hostname || d.PGHOST || "localhost",
						j = e.port || f.port || d.PGPORT || 5432,
						k =
							e.user ||
							e.username ||
							f.username ||
							d.PGUSERNAME ||
							d.PGUSER ||
							(function () {
								try {
									return nj.default.userInfo().username
								} catch (a) {
									return process.env.USERNAME || process.env.USER || process.env.LOGNAME
								}
							})()
					e.no_prepare && (e.prepare = !1),
						h.sslmode && ((h.ssl = h.sslmode), delete h.sslmode),
						"timeout" in e &&
							(console.log("The timeout option is deprecated, use idle_timeout instead"),
							(e.idle_timeout = e.timeout)),
						"system" === h.sslrootcert && (h.ssl = "verify-full")
					let l = [
							"idle_timeout",
							"connect_timeout",
							"max_lifetime",
							"max_pipeline",
							"backoff",
							"keep_alive",
						],
						m = {
							max: 10,
							ssl: !1,
							idle_timeout: null,
							connect_timeout: 30,
							max_lifetime: ow,
							max_pipeline: 100,
							backoff: ov,
							keep_alive: 60,
							prepare: !0,
							debug: !1,
							fetch_types: !0,
							publications: "alltables",
							target_session_attrs: null,
						}
					return {
						host: Array.isArray(i) ? i : i.split(",").map((a) => a.split(":")[0]),
						port: Array.isArray(j) ? j : i.split(",").map((a) => parseInt(a.split(":")[1] || j)),
						path: e.path || (i.indexOf("/") > -1 && i + "/.s.PGSQL." + j),
						database: e.database || e.db || (f.pathname || "").slice(1) || d.PGDATABASE || k,
						user: k,
						pass: e.pass || e.password || f.password || d.PGPASSWORD || "",
						...Object.entries(m).reduce((a, [b, c]) => {
							let f =
								b in e
									? e[b]
									: b in h
										? "disable" !== h[b] && "false" !== h[b] && h[b]
										: d["PG" + b.toUpperCase()] || c
							return (a[b] = "string" == typeof f && l.includes(b) ? +f : f), a
						}, {}),
						connection: {
							application_name: d.PGAPPNAME || "postgres.js",
							...e.connection,
							...Object.entries(h).reduce((a, [b, c]) => (b in m || (a[b] = c), a), {}),
						},
						types: e.types || {},
						target_session_attrs: (function (a, b, c) {
							let d =
								a.target_session_attrs ||
								b.searchParams.get("target_session_attrs") ||
								c.PGTARGETSESSIONATTRS
							if (!d || ["read-write", "read-only", "primary", "standby", "prefer-standby"].includes(d))
								return d
							throw Error("target_session_attrs " + d + " is not supported")
						})(e, f, d),
						onnotice: e.onnotice,
						onnotify: e.onnotify,
						onclose: e.onclose,
						onparameter: e.onparameter,
						socket: e.socket,
						transform: {
							undefined: (c = e.transform || { undefined: void 0 }).undefined,
							column: {
								from: "function" == typeof c.column ? c.column : c.column && c.column.from,
								to: c.column && c.column.to,
							},
							value: {
								from: "function" == typeof c.value ? c.value : c.value && c.value.from,
								to: c.value && c.value.to,
							},
							row: {
								from: "function" == typeof c.row ? c.row : c.row && c.row.from,
								to: c.row && c.row.to,
							},
						},
						parameters: {},
						shared: { retries: 0, typeArrayMap: {} },
						...nL(e.types),
					}
				})(a, b),
				d =
					c.no_subscribe ||
					(function (a, b) {
						let c = new Map(),
							d = "postgresjs_" + Math.random().toString(36).slice(2),
							e = {},
							f,
							g,
							h = !1,
							i = (l.sql = a({
								...b,
								transform: { column: {}, value: {}, row: {} },
								max: 1,
								fetch_types: !1,
								idle_timeout: null,
								max_lifetime: null,
								connection: { ...b.connection, replication: "database" },
								onclose: async function () {
									h ||
										((g = null),
										(e.pid = e.secret = void 0),
										m(await n(i, d, b.publications)),
										c.forEach((a) => a.forEach(({ onsubscribe: a }) => a())))
								},
								no_subscribe: !0,
							})),
							j = i.end,
							k = i.close
						return (
							(i.end = async () => (
								(h = !0), g && (await new Promise((a) => (g.once("close", a), g.end()))), j()
							)),
							(i.close = async () => (
								g && (await new Promise((a) => (g.once("close", a), g.end()))), k()
							)),
							l
						)
						async function l(a, h, j = oq, k = oq) {
							;(a = (function (a) {
								let [, b, c, d] =
									a.match(/^(\*|insert|update|delete)?:?([^.]+?\.?[^=]+)?=?(.+)?/i) || []
								return (
									(b || "*") +
									(c ? ":" + (-1 === c.indexOf(".") ? "public." + c : c) : "") +
									(d ? "=" + d : "")
								)
							})(a)),
								f || (f = n(i, d, b.publications))
							let o = { fn: h, onsubscribe: j },
								p = c.has(a) ? c.get(a).add(o) : c.set(a, new Set([o])).get(a),
								q = () => {
									p.delete(o), 0 === p.size && c.delete(a)
								}
							return f.then(
								(a) => (m(a), j(), g && g.on("error", k), { unsubscribe: q, state: e, sql: i }),
							)
						}
						function m(a) {
							;(g = a.stream), (e.pid = a.state.pid), (e.secret = a.state.secret)
						}
						async function n(a, c, d) {
							if (!d) throw Error("Missing publication names")
							let e = await a.unsafe(
									`CREATE_REPLICATION_SLOT ${c} TEMPORARY LOGICAL pgoutput NOEXPORT_SNAPSHOT`,
								),
								[f] = e,
								g = await a
									.unsafe(
										`START_REPLICATION SLOT ${c} LOGICAL ${f.consistent_point} (proto_version '1', publication_names '${d}')`,
									)
									.writable(),
								h = {
									lsn: Buffer.concat(
										f.consistent_point
											.split("/")
											.map((a) => Buffer.from(("00000000" + a).slice(-8), "hex")),
									),
								}
							return (
								g.on("data", function (c) {
									var d, e, f, j, k
									let l
									119 === c[0]
										? ((d = c.subarray(25)),
											(e = h),
											(f = a.options.parsers),
											(j = i),
											(k = b.transform),
											Object.entries({
												R: (a) => {
													let b = 1,
														c = (e[a.readUInt32BE(b)] = {
															schema:
																a.toString("utf8", (b += 4), (b = a.indexOf(0, b))) ||
																"pg_catalog",
															table: a.toString("utf8", b + 1, (b = a.indexOf(0, b + 1))),
															columns: Array(a.readUInt16BE((b += 2))),
															keys: [],
														})
													b += 2
													let d = 0,
														g
													for (; b < a.length; )
														(g = c.columns[d++] =
															{
																key: a[b++],
																name: k.column.from
																	? k.column.from(
																			a.toString(
																				"utf8",
																				b,
																				(b = a.indexOf(0, b)),
																			),
																		)
																	: a.toString("utf8", b, (b = a.indexOf(0, b))),
																type: a.readUInt32BE((b += 1)),
																parser: f[a.readUInt32BE(b)],
																atttypmod: a.readUInt32BE((b += 4)),
															}).key && c.keys.push(g),
															(b += 4)
												},
												Y: () => {},
												O: () => {},
												B: (a) => {
													var b
													;(b = a.readBigInt64BE(9)),
														(e.date = new Date(
															Date.UTC(2e3, 0, 1) + Number(b / BigInt(1e3)),
														)),
														(e.lsn = a.subarray(1, 9))
												},
												I: (a) => {
													let b = 1,
														c = e[a.readUInt32BE(b)],
														{ row: d } = or(a, c.columns, (b += 7), k)
													j(d, { command: "insert", relation: c })
												},
												D: (a) => {
													let b = 1,
														c = e[a.readUInt32BE(b)],
														d = 75 === a[(b += 4)]
													j(d || 79 === a[b] ? or(a, c.columns, (b += 3), k).row : null, {
														command: "delete",
														relation: c,
														key: d,
													})
												},
												U: (a) => {
													let b = 1,
														c = e[a.readUInt32BE(b)],
														d = 75 === a[(b += 4)],
														f = d || 79 === a[b] ? or(a, c.columns, (b += 3), k) : null
													f && (b = f.i)
													let { row: g } = or(a, c.columns, b + 3, k)
													j(g, { command: "update", relation: c, key: d, old: f && f.row })
												},
												T: () => {},
												C: () => {},
											})
												.reduce((a, [b, c]) => ((a[b.charCodeAt(0)] = c), a), {})
												[d[0]](d))
										: 107 === c[0] &&
											c[17] &&
											((h.lsn = c.subarray(1, 9)),
											((l = Buffer.alloc(34))[0] = 114),
											l.fill(h.lsn, 1),
											l.writeBigInt64BE(
												BigInt(Date.now() - Date.UTC(2e3, 0, 1)) * BigInt(1e3),
												25,
											),
											g.write(l))
								}),
								g.on("error", function (a) {
									console.error("Unexpected error during logical streaming - reconnecting", a)
								}),
								g.on("close", a.close),
								{ stream: g, state: e.state }
							)
							function i(a, b) {
								let c = b.relation.schema + "." + b.relation.table
								o("*", a, b),
									o("*:" + c, a, b),
									b.relation.keys.length &&
										o("*:" + c + "=" + b.relation.keys.map((b) => a[b.name]), a, b),
									o(b.command, a, b),
									o(b.command + ":" + c, a, b),
									b.relation.keys.length &&
										o(b.command + ":" + c + "=" + b.relation.keys.map((b) => a[b.name]), a, b)
							}
						}
						function o(a, b, d) {
							c.has(a) && c.get(a).forEach(({ fn: c }) => c(b, d, a))
						}
					})(ou, { ...c }),
				e = !1,
				f = n8(),
				g = n8(),
				h = n8(),
				i = n8(),
				j = n8(),
				k = n8(),
				l = n8(),
				m = n8(),
				n = { connecting: g, reserved: h, closed: i, ended: j, open: k, busy: l, full: m },
				o = [...Array(c.max)].map(() => oc(c, n, { onopen: E, onend: D, onclose: F })),
				p = q(function (a) {
					return e
						? a.reject(nr("CONNECTION_ENDED", c, c))
						: k.length
							? x(k.shift(), a)
							: i.length
								? C(i.shift(), a)
								: void (l.length ? x(l.shift(), a) : f.push(a))
				})
			return (
				Object.assign(p, {
					get parameters() {
						return c.parameters
					},
					largeObject: os.bind(null, p),
					subscribe: d,
					CLOSE: no,
					END: no,
					PostgresError: nq,
					options: c,
					reserve: t,
					listen: r,
					begin: u,
					close: A,
					end: z,
				}),
				p
			)
			function q(a) {
				return (
					(a.debug = c.debug),
					Object.entries(c.types).reduce((a, [b, c]) => ((a[b] = (a) => new nx(a, c.to)), a), b),
					Object.assign(d, {
						types: b,
						typed: b,
						unsafe: function (b, c = [], d = {}) {
							return (
								2 != arguments.length || Array.isArray(c) || ((d = c), (c = [])),
								new np([b], c, a, y, {
									prepare: !1,
									...d,
									simple: "simple" in d ? d.simple : 0 === c.length,
								})
							)
						},
						notify: s,
						array: function a(b, d) {
							return Array.isArray(b)
								? new nx(b, d || (b.length ? nP(b) || 25 : 0), c.shared.typeArrayMap)
								: a(Array.from(arguments))
						},
						json: w,
						file: function (b, c = [], d = {}) {
							return (
								2 != arguments.length || Array.isArray(c) || ((d = c), (c = [])),
								new np(
									[],
									c,
									(c) => {
										nk.default.readFile(b, "utf8", (b, d) => {
											if (b) return c.reject(b)
											;(c.strings = [d]), a(c)
										})
									},
									y,
									{ ...d, simple: "simple" in d ? d.simple : 0 === c.length },
								)
							)
						},
					}),
					d
				)
				function b(a, b) {
					return new nx(a, b)
				}
				function d(b, ...e) {
					return b && Array.isArray(b.raw)
						? new np(b, e, a, y)
						: "string" != typeof b || e.length
							? new ny(b, e)
							: new nw(c.transform.column.to ? c.transform.column.to(b) : b)
				}
			}
			async function r(a, b, d) {
				let e = { fn: b, onlisten: d },
					f =
						r.sql ||
						(r.sql = ou({
							...c,
							max: 1,
							idle_timeout: null,
							max_lifetime: null,
							fetch_types: !1,
							onclose() {
								Object.entries(r.channels).forEach(([a, { listeners: b }]) => {
									delete r.channels[a],
										Promise.all(b.map((b) => r(a, b.fn, b.onlisten).catch(() => {})))
								})
							},
							onnotify(a, b) {
								a in r.channels && r.channels[a].listeners.forEach((a) => a.fn(b))
							},
						})),
					g = r.channels || (r.channels = {})
				if (a in g) {
					g[a].listeners.push(e)
					let b = await g[a].result
					return e.onlisten && e.onlisten(), { state: b.state, unlisten: i }
				}
				g[a] = { result: f`listen ${f.unsafe('"' + a.replace(/"/g, '""') + '"')}`, listeners: [e] }
				let h = await g[a].result
				return e.onlisten && e.onlisten(), { state: h.state, unlisten: i }
				async function i() {
					if (
						a in g != !1 &&
						((g[a].listeners = g[a].listeners.filter((a) => a !== e)), !g[a].listeners.length)
					)
						return delete g[a], f`unlisten ${f.unsafe('"' + a.replace(/"/g, '""') + '"')}`
				}
			}
			async function s(a, b) {
				return await p`select pg_notify(${a}, ${"" + b})`
			}
			async function t() {
				let a = n8(),
					b = k.length
						? k.shift()
						: await new Promise((a, b) => {
								let c = { reserve: a, reject: b }
								f.push(c), i.length && C(i.shift(), c)
							})
				v(b, h), (b.reserved = () => (a.length ? b.execute(a.shift()) : v(b, h))), (b.reserved.release = !0)
				let c = q(function (c) {
					b.queue === m ? a.push(c) : b.execute(c) || v(b, m)
				})
				return (
					(c.release = () => {
						;(b.reserved = null), E(b)
					}),
					c
				)
			}
			async function u(a, b) {
				b || ((b = a), (a = ""))
				let c = n8(),
					d = 0,
					e,
					f = null
				try {
					return (
						await p
							.unsafe("begin " + a.replace(/[^a-z ]/gi, ""), [], {
								onexecute: function (a) {
									;(e = a), v(a, h), (a.reserved = () => (c.length ? a.execute(c.shift()) : v(a, h)))
								},
							})
							.execute(),
						await Promise.race([g(e, b), new Promise((a, b) => (e.onclose = b))])
					)
				} catch (a) {
					throw a
				}
				async function g(a, b, e) {
					let h,
						i,
						j = q(function (b) {
							b.catch((a) => h || (h = a)), a.queue === m ? c.push(b) : a.execute(b) || v(a, m)
						})
					;(j.savepoint = function b(c, e) {
						return c && Array.isArray(c.raw)
							? b((a) => a.apply(a, arguments))
							: (1 == arguments.length && ((e = c), (c = null)), g(a, e, "s" + d++ + (c ? "_" + c : "")))
					}),
						(j.prepare = (a) => (f = a.replace(/[^a-z0-9$-_. ]/gi))),
						e && (await j`savepoint ${j(e)}`)
					try {
						if (
							((i = await new Promise((a, c) => {
								let d = b(j)
								Promise.resolve(Array.isArray(d) ? Promise.all(d) : d).then(a, c)
							})),
							h)
						)
							throw h
					} catch (a) {
						throw (
							(await (e ? j`rollback to ${j(e)}` : j`rollback`),
							(a instanceof nq && "25P02" === a.code && h) || a)
						)
					}
					return e || (f ? await j`prepare transaction '${j.unsafe(f)}'` : await j`commit`), i
				}
			}
			function v(a, b) {
				return (
					a.queue.remove(a), b.push(a), (a.queue = b), b === k ? a.idleTimer.start() : a.idleTimer.cancel(), a
				)
			}
			function w(a) {
				return new nx(a, 3802)
			}
			function x(a, b) {
				return a.execute(b) ? v(a, l) : v(a, m)
			}
			function y(a) {
				return new Promise((b, d) => {
					a.state
						? a.active
							? oc(c).cancel(a.state, b, d)
							: (a.cancelled = { resolve: b, reject: d })
						: (f.remove(a),
							(a.cancelled = !0),
							a.reject(nt("57014", "canceling statement due to user request")),
							b())
				})
			}
			async function z({ timeout: a = null } = {}) {
				let b
				return (
					e ||
					(await 1,
					(e = Promise.race([
						new Promise((c) => null !== a && (b = setTimeout(B, 1e3 * a, c))),
						Promise.all(
							o
								.map((a) => a.end())
								.concat(r.sql ? r.sql.end({ timeout: 0 }) : [], d.sql ? d.sql.end({ timeout: 0 }) : []),
						),
					]).then(() => clearTimeout(b))))
				)
			}
			async function A() {
				await Promise.all(o.map((a) => a.end()))
			}
			async function B(a) {
				for (await Promise.all(o.map((a) => a.terminate())); f.length; )
					f.shift().reject(nr("CONNECTION_DESTROYED", c))
				a()
			}
			function C(a, b) {
				return v(a, g), a.connect(b), a
			}
			function D(a) {
				v(a, j)
			}
			function E(a) {
				if (0 === f.length) return v(a, k)
				let b = Math.ceil(f.length / (g.length + 1)),
					c = !0
				for (; c && f.length && b-- > 0; ) {
					let b = f.shift()
					if (b.reserve) return b.reserve(a)
					c = a.execute(b)
				}
				c ? v(a, l) : v(a, m)
			}
			function F(a, b) {
				v(a, i),
					(a.reserved = null),
					a.onclose && (a.onclose(b), (a.onclose = null)),
					c.onclose && c.onclose(a.id),
					f.length && C(a, f.shift())
			}
		}
		function ov(a) {
			return (0.5 + Math.random() / 2) * Math.min(3 ** a / 100, 20)
		}
		function ow() {
			return 60 * (30 + 30 * Math.random())
		}
		class ox {
			static [jP] = "ConsoleLogWriter"
			write(a) {
				console.log(a)
			}
		}
		class oy {
			static [jP] = "DefaultLogger"
			writer
			constructor(a) {
				this.writer = a?.writer ?? new ox()
			}
			logQuery(a, b) {
				let c = b.map((a) => {
						try {
							return JSON.stringify(a)
						} catch {
							return String(a)
						}
					}),
					d = c.length ? ` -- params: [${c.join(", ")}]` : ""
				this.writer.write(`Query: ${a}${d}`)
			}
		}
		class oz {
			static [jP] = "NoopLogger"
			logQuery() {}
		}
		class oA {
			static [jP] = "QueryPromise";
			[Symbol.toStringTag] = "QueryPromise"
			catch(a) {
				return this.then(void 0, a)
			}
			finally(a) {
				return this.then(
					(b) => (a?.(), b),
					(b) => {
						throw (a?.(), b)
					},
				)
			}
			then(a, b) {
				return this.execute().then(a, b)
			}
		}
		class oB {
			constructor(a) {
				this.table = a
			}
			static [jP] = "ColumnAliasProxyHandler"
			get(a, b) {
				return "table" === b ? this.table : a[b]
			}
		}
		class oC {
			constructor(a, b) {
				;(this.alias = a), (this.replaceOriginalName = b)
			}
			static [jP] = "TableAliasProxyHandler"
			get(a, b) {
				if (b === j$.Symbol.IsAlias) return !0
				if (b === j$.Symbol.Name || (this.replaceOriginalName && b === j$.Symbol.OriginalName))
					return this.alias
				if (b === ko) return { ...a[ko], name: this.alias, isAlias: !0 }
				if (b === j$.Symbol.Columns) {
					let b = a[j$.Symbol.Columns]
					if (!b) return b
					let c = {}
					return (
						Object.keys(b).map((d) => {
							c[d] = new Proxy(b[d], new oB(new Proxy(a, this)))
						}),
						c
					)
				}
				let c = a[b]
				return jQ(c, j0) ? new Proxy(c, new oB(new Proxy(a, this))) : c
			}
		}
		class oD {
			constructor(a) {
				this.alias = a
			}
			static [jP] = "RelationTableAliasProxyHandler"
			get(a, b) {
				return "sourceTable" === b ? oE(a.sourceTable, this.alias) : a[b]
			}
		}
		function oE(a, b) {
			return new Proxy(a, new oC(b, !1))
		}
		function oF(a, b) {
			return new Proxy(a, new oB(new Proxy(a.table, new oC(b, !1))))
		}
		function oG(a, b) {
			return new ks.Aliased(oH(a.sql, b), a.fieldAlias)
		}
		function oH(a, b) {
			return kx.join(
				a.queryChunks.map((a) =>
					jQ(a, j0) ? oF(a, b) : jQ(a, ks) ? oH(a, b) : jQ(a, ks.Aliased) ? oG(a, b) : a,
				),
			)
		}
		class oI {
			static [jP] = "SelectionProxyHandler"
			config
			constructor(a) {
				this.config = { ...a }
			}
			get(a, b) {
				if ("_" === b) return { ...a._, selectedFields: new Proxy(a._.selectedFields, this) }
				if (b === ko) return { ...a[ko], selectedFields: new Proxy(a[ko].selectedFields, this) }
				if ("symbol" == typeof b) return a[b]
				let c = (jQ(a, kl) ? a._.selectedFields : jQ(a, kD) ? a[ko].selectedFields : a)[b]
				if (jQ(c, ks.Aliased)) {
					if ("sql" === this.config.sqlAliasedBehavior && !c.isSelectionField) return c.sql
					let a = c.clone()
					return (a.isSelectionField = !0), a
				}
				if (jQ(c, ks)) {
					if ("sql" === this.config.sqlBehavior) return c
					throw Error(
						`You tried to reference "${b}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`,
					)
				}
				return jQ(c, j0)
					? this.config.alias
						? new Proxy(
								c,
								new oB(
									new Proxy(
										c.table,
										new oC(this.config.alias, this.config.replaceOriginalName ?? !1),
									),
								),
							)
						: c
					: "object" != typeof c || null === c
						? c
						: new Proxy(c, new oI(this.config))
			}
		}
		class oJ {
			constructor(a, b) {
				;(this.name = a), (this.value = b)
			}
			static [jP] = "PgCheckBuilder"
			brand
			build(a) {
				return new oK(a, this)
			}
		}
		class oK {
			constructor(a, b) {
				;(this.table = a), (this.name = b.name), (this.value = b.value)
			}
			static [jP] = "PgCheck"
			name
			value
		}
		class oL {
			constructor(a, b) {
				;(this.name = a),
					b &&
						((this.as = b.as),
						(this.for = b.for),
						(this.to = b.to),
						(this.using = b.using),
						(this.withCheck = b.withCheck))
			}
			static [jP] = "PgPolicy"
			as
			for
			to
			using
			withCheck
			_linkedTable
			link(a) {
				return (this._linkedTable = a), this
			}
		}
		let oM = Symbol.for("drizzle:PgViewConfig")
		function oN(a) {
			return (a.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? [])
				.map((a) => a.toLowerCase())
				.join("_")
		}
		function oO(a) {
			return (a.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []).reduce(
				(a, b, c) => a + (0 === c ? b.toLowerCase() : `${b[0].toUpperCase()}${b.slice(1)}`),
				"",
			)
		}
		function oP(a) {
			return a
		}
		class oQ {
			static [jP] = "CasingCache"
			cache = {}
			cachedTables = {}
			convert
			constructor(a) {
				this.convert = "snake_case" === a ? oN : "camelCase" === a ? oO : oP
			}
			getColumnCasing(a) {
				if (!a.keyAsName) return a.name
				let b = a.table[j$.Symbol.Schema] ?? "public",
					c = a.table[j$.Symbol.OriginalName],
					d = `${b}.${c}.${a.name}`
				return this.cache[d] || this.cacheTable(a.table), this.cache[d]
			}
			cacheTable(a) {
				let b = a[j$.Symbol.Schema] ?? "public",
					c = a[j$.Symbol.OriginalName],
					d = `${b}.${c}`
				if (!this.cachedTables[d]) {
					for (let b of Object.values(a[j$.Symbol.Columns])) {
						let a = `${d}.${b.name}`
						this.cache[a] = this.convert(b.name)
					}
					this.cachedTables[d] = !0
				}
			}
			clearCache() {
				;(this.cache = {}), (this.cachedTables = {})
			}
		}
		class oR extends Error {
			static [jP] = "DrizzleError"
			constructor({ message: a, cause: b }) {
				super(a), (this.name = "DrizzleError"), (this.cause = b)
			}
		}
		class oS extends oR {
			static [jP] = "TransactionRollbackError"
			constructor() {
				super({ message: "Rollback" })
			}
		}
		class oT extends kD {
			static [jP] = "PgViewBase"
		}
		class oU {
			static [jP] = "PgDialect"
			casing
			constructor(a) {
				this.casing = new oQ(a?.casing)
			}
			async migrate(a, b, c) {
				let d = "string" == typeof c ? "__drizzle_migrations" : (c.migrationsTable ?? "__drizzle_migrations"),
					e = "string" == typeof c ? "drizzle" : (c.migrationsSchema ?? "drizzle"),
					f = kx`
			CREATE TABLE IF NOT EXISTS ${kx.identifier(e)}.${kx.identifier(d)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`
				await b.execute(kx`CREATE SCHEMA IF NOT EXISTS ${kx.identifier(e)}`), await b.execute(f)
				let g = (
					await b.all(
						kx`select id, hash, created_at from ${kx.identifier(e)}.${kx.identifier(d)} order by created_at desc limit 1`,
					)
				)[0]
				await b.transaction(async (b) => {
					for await (let c of a)
						if (!g || Number(g.created_at) < c.folderMillis) {
							for (let a of c.sql) await b.execute(kx.raw(a))
							await b.execute(
								kx`insert into ${kx.identifier(e)}.${kx.identifier(d)} ("hash", "created_at") values(${c.hash}, ${c.folderMillis})`,
							)
						}
				})
			}
			escapeName(a) {
				return `"${a}"`
			}
			escapeParam(a) {
				return `$${a + 1}`
			}
			escapeString(a) {
				return `'${a.replace(/'/g, "''")}'`
			}
			buildWithCTE(a) {
				if (!a?.length) return
				let b = [kx`with `]
				for (let [c, d] of a.entries())
					b.push(kx`${kx.identifier(d._.alias)} as (${d._.sql})`), c < a.length - 1 && b.push(kx`, `)
				return b.push(kx` `), kx.join(b)
			}
			buildDeleteQuery({ table: a, where: b, returning: c, withList: d }) {
				let e = this.buildWithCTE(d),
					f = c ? kx` returning ${this.buildSelection(c, { isSingleTable: !0 })}` : void 0,
					g = b ? kx` where ${b}` : void 0
				return kx`${e}delete from ${a}${g}${f}`
			}
			buildUpdateSet(a, b) {
				let c = a[j$.Symbol.Columns],
					d = Object.keys(c).filter((a) => void 0 !== b[a] || c[a]?.onUpdateFn !== void 0),
					e = d.length
				return kx.join(
					d.flatMap((a, d) => {
						let f = c[a],
							g = b[a] ?? kx.param(f.onUpdateFn(), f),
							h = kx`${kx.identifier(this.casing.getColumnCasing(f))} = ${g}`
						return d < e - 1 ? [h, kx.raw(", ")] : [h]
					}),
				)
			}
			buildUpdateQuery({ table: a, set: b, where: c, returning: d, withList: e, from: f, joins: g }) {
				let h = this.buildWithCTE(e),
					i = a[mC.Symbol.Name],
					j = a[mC.Symbol.Schema],
					k = a[mC.Symbol.OriginalName],
					l = i === k ? void 0 : i,
					m = kx`${j ? kx`${kx.identifier(j)}.` : void 0}${kx.identifier(k)}${l && kx` ${kx.identifier(l)}`}`,
					n = this.buildUpdateSet(a, b),
					o = f && kx.join([kx.raw(" from "), this.buildFromTable(f)]),
					p = this.buildJoins(g),
					q = d ? kx` returning ${this.buildSelection(d, { isSingleTable: !f })}` : void 0,
					r = c ? kx` where ${c}` : void 0
				return kx`${h}update ${m} set ${n}${o}${p}${r}${q}`
			}
			buildSelection(a, { isSingleTable: b = !1 } = {}) {
				let c = a.length,
					d = a.flatMap(({ field: a }, d) => {
						let e = []
						if (jQ(a, ks.Aliased) && a.isSelectionField) e.push(kx.identifier(a.fieldAlias))
						else if (jQ(a, ks.Aliased) || jQ(a, ks)) {
							let c = jQ(a, ks.Aliased) ? a.sql : a
							b
								? e.push(
										new ks(
											c.queryChunks.map((a) =>
												jQ(a, kb) ? kx.identifier(this.casing.getColumnCasing(a)) : a,
											),
										),
									)
								: e.push(c),
								jQ(a, ks.Aliased) && e.push(kx` as ${kx.identifier(a.fieldAlias)}`)
						} else jQ(a, j0) && (b ? e.push(kx.identifier(this.casing.getColumnCasing(a))) : e.push(a))
						return d < c - 1 && e.push(kx`, `), e
					})
				return kx.join(d)
			}
			buildJoins(a) {
				if (!a || 0 === a.length) return
				let b = []
				for (let [c, d] of a.entries()) {
					0 === c && b.push(kx` `)
					let e = d.table,
						f = d.lateral ? kx` lateral` : void 0,
						g = d.on ? kx` on ${d.on}` : void 0
					if (jQ(e, mC)) {
						let a = e[mC.Symbol.Name],
							c = e[mC.Symbol.Schema],
							h = e[mC.Symbol.OriginalName],
							i = a === h ? void 0 : d.alias
						b.push(
							kx`${kx.raw(d.joinType)} join${f} ${c ? kx`${kx.identifier(c)}.` : void 0}${kx.identifier(h)}${i && kx` ${kx.identifier(i)}`}${g}`,
						)
					} else if (jQ(e, kD)) {
						let a = e[ko].name,
							c = e[ko].schema,
							h = e[ko].originalName,
							i = a === h ? void 0 : d.alias
						b.push(
							kx`${kx.raw(d.joinType)} join${f} ${c ? kx`${kx.identifier(c)}.` : void 0}${kx.identifier(h)}${i && kx` ${kx.identifier(i)}`}${g}`,
						)
					} else b.push(kx`${kx.raw(d.joinType)} join${f} ${e}${g}`)
					c < a.length - 1 && b.push(kx` `)
				}
				return kx.join(b)
			}
			buildFromTable(a) {
				if (jQ(a, j$) && a[j$.Symbol.IsAlias]) {
					let b = kx`${kx.identifier(a[j$.Symbol.OriginalName])}`
					return (
						a[j$.Symbol.Schema] && (b = kx`${kx.identifier(a[j$.Symbol.Schema])}.${b}`),
						kx`${b} ${kx.identifier(a[j$.Symbol.Name])}`
					)
				}
				return a
			}
			buildSelectQuery({
				withList: a,
				fields: b,
				fieldsFlat: c,
				where: d,
				having: e,
				table: f,
				joins: g,
				orderBy: h,
				groupBy: i,
				limit: j,
				offset: k,
				lockingClause: l,
				distinct: m,
				setOperators: n,
			}) {
				let o,
					p,
					q,
					r = c ?? kE(b)
				for (let a of r) {
					let b
					if (
						jQ(a.field, j0) &&
						a.field.table[jR] !==
							(jQ(f, kl) ? f._.alias : jQ(f, oT) ? f[ko].name : jQ(f, ks) ? void 0 : f[jR]) &&
						((b = a.field.table),
						!g?.some(({ alias: a }) => a === (b[j$.Symbol.IsAlias] ? b[jR] : b[j$.Symbol.BaseName])))
					) {
						let b = a.field.table[jR]
						throw Error(
							`Your "${a.path.join("->")}" field references a column "${b}"."${a.field.name}", but the table "${b}" is not part of the query! Did you forget to join it?`,
						)
					}
				}
				let s = !g || 0 === g.length,
					t = this.buildWithCTE(a)
				m && (o = !0 === m ? kx` distinct` : kx` distinct on (${kx.join(m.on, kx`, `)})`)
				let u = this.buildSelection(r, { isSingleTable: s }),
					v = this.buildFromTable(f),
					w = this.buildJoins(g),
					x = d ? kx` where ${d}` : void 0,
					y = e ? kx` having ${e}` : void 0
				h && h.length > 0 && (p = kx` order by ${kx.join(h, kx`, `)}`),
					i && i.length > 0 && (q = kx` group by ${kx.join(i, kx`, `)}`)
				let z = "object" == typeof j || ("number" == typeof j && j >= 0) ? kx` limit ${j}` : void 0,
					A = k ? kx` offset ${k}` : void 0,
					B = kx.empty()
				if (l) {
					let a = kx` for ${kx.raw(l.strength)}`
					l.config.of &&
						a.append(kx` of ${kx.join(Array.isArray(l.config.of) ? l.config.of : [l.config.of], kx`, `)}`),
						l.config.noWait ? a.append(kx` nowait`) : l.config.skipLocked && a.append(kx` skip locked`),
						B.append(a)
				}
				let C = kx`${t}select${o} ${u} from ${v}${w}${x}${q}${y}${p}${z}${A}${B}`
				return n.length > 0 ? this.buildSetOperations(C, n) : C
			}
			buildSetOperations(a, b) {
				let [c, ...d] = b
				if (!c) throw Error("Cannot pass undefined values to any set operator")
				return 0 === d.length
					? this.buildSetOperationQuery({ leftSelect: a, setOperator: c })
					: this.buildSetOperations(this.buildSetOperationQuery({ leftSelect: a, setOperator: c }), d)
			}
			buildSetOperationQuery({
				leftSelect: a,
				setOperator: { type: b, isAll: c, rightSelect: d, limit: e, orderBy: f, offset: g },
			}) {
				let h,
					i = kx`(${a.getSQL()}) `,
					j = kx`(${d.getSQL()})`
				if (f && f.length > 0) {
					let a = []
					for (let b of f)
						if (jQ(b, kb)) a.push(kx.identifier(b.name))
						else if (jQ(b, ks)) {
							for (let a = 0; a < b.queryChunks.length; a++) {
								let c = b.queryChunks[a]
								jQ(c, kb) && (b.queryChunks[a] = kx.identifier(c.name))
							}
							a.push(kx`${b}`)
						} else a.push(kx`${b}`)
					h = kx` order by ${kx.join(a, kx`, `)} `
				}
				let k = "object" == typeof e || ("number" == typeof e && e >= 0) ? kx` limit ${e}` : void 0,
					l = kx.raw(`${b} ${c ? "all " : ""}`),
					m = g ? kx` offset ${g}` : void 0
				return kx`${i}${l}${j}${h}${k}${m}`
			}
			buildInsertQuery({
				table: a,
				values: b,
				onConflict: c,
				returning: d,
				withList: e,
				select: f,
				overridingSystemValue_: g,
			}) {
				let h = [],
					i = Object.entries(a[j$.Symbol.Columns]).filter(([a, b]) => !b.shouldDisableInsert()),
					j = i.map(([, a]) => kx.identifier(this.casing.getColumnCasing(a)))
				if (f) jQ(b, ks) ? h.push(b) : h.push(b.getSQL())
				else
					for (let [a, c] of (h.push(kx.raw("values ")), b.entries())) {
						let d = []
						for (let [a, b] of i) {
							let e = c[a]
							if (void 0 === e || (jQ(e, kw) && void 0 === e.value))
								if (void 0 !== b.defaultFn) {
									let a = b.defaultFn(),
										c = jQ(a, ks) ? a : kx.param(a, b)
									d.push(c)
								} else if (b.default || void 0 === b.onUpdateFn) d.push(kx`default`)
								else {
									let a = b.onUpdateFn(),
										c = jQ(a, ks) ? a : kx.param(a, b)
									d.push(c)
								}
							else d.push(e)
						}
						h.push(d), a < b.length - 1 && h.push(kx`, `)
					}
				let k = this.buildWithCTE(e),
					l = kx.join(h),
					m = d ? kx` returning ${this.buildSelection(d, { isSingleTable: !0 })}` : void 0,
					n = c ? kx` on conflict ${c}` : void 0,
					o = !0 === g ? kx`overriding system value ` : void 0
				return kx`${k}insert into ${a} ${j} ${o}${l}${n}${m}`
			}
			buildRefreshMaterializedViewQuery({ view: a, concurrently: b, withNoData: c }) {
				let d = b ? kx` concurrently` : void 0,
					e = c ? kx` with no data` : void 0
				return kx`refresh materialized view${d} ${a}${e}`
			}
			prepareTyping(a) {
				if (jQ(a, lr) || jQ(a, lo)) return "json"
				if (jQ(a, lF)) return "decimal"
				if (jQ(a, mb)) return "time"
				if (jQ(a, me) || jQ(a, mg)) return "timestamp"
				if (jQ(a, k7) || jQ(a, k9)) return "date"
				else if (jQ(a, mj)) return "uuid"
				else return "none"
			}
			sqlToQuery(a, b) {
				return a.toQuery({
					casing: this.casing,
					escapeName: this.escapeName,
					escapeParam: this.escapeParam,
					escapeString: this.escapeString,
					prepareTyping: this.prepareTyping,
					invokeSource: b,
				})
			}
			buildRelationalQueryWithoutPK({
				fullSchema: a,
				schema: b,
				tableNamesMap: c,
				table: d,
				tableConfig: e,
				queryConfig: f,
				tableAlias: g,
				nestedQueryRelation: h,
				joinOn: i,
			}) {
				let j,
					k = [],
					l,
					m,
					n = [],
					o,
					p = []
				if (!0 === f)
					k = Object.entries(e.columns).map(([a, b]) => ({
						dbKey: b.name,
						tsKey: a,
						field: oF(b, g),
						relationTableTsKey: void 0,
						isJson: !1,
						selection: [],
					}))
				else {
					let d = Object.fromEntries(Object.entries(e.columns).map(([a, b]) => [a, oF(b, g)]))
					if (f.where) {
						let a =
							"function" == typeof f.where
								? f.where(d, {
										and: mM,
										between: mZ,
										eq: mK,
										exists: mX,
										gt: mP,
										gte: mQ,
										ilike: m1,
										inArray: mT,
										isNull: mV,
										isNotNull: mW,
										like: m_,
										lt: mR,
										lte: mS,
										ne: mL,
										not: mO,
										notBetween: m$,
										notExists: mY,
										notLike: m0,
										notIlike: m2,
										notInArray: mU,
										or: mN,
										sql: kx,
									})
								: f.where
						o = a && oH(a, g)
					}
					let h = [],
						i = []
					if (f.columns) {
						let a = !1
						for (let [b, c] of Object.entries(f.columns))
							void 0 !== c && b in e.columns && (a || !0 !== c || (a = !0), i.push(b))
						i.length > 0 &&
							(i = a
								? i.filter((a) => f.columns?.[a] === !0)
								: Object.keys(e.columns).filter((a) => !i.includes(a)))
					} else i = Object.keys(e.columns)
					for (let a of i) {
						let b = e.columns[a]
						h.push({ tsKey: a, value: b })
					}
					let j = []
					if (
						(f.with &&
							(j = Object.entries(f.with)
								.filter((a) => !!a[1])
								.map(([a, b]) => ({ tsKey: a, queryConfig: b, relation: e.relations[a] }))),
						f.extras)
					)
						for (let [a, b] of Object.entries(
							"function" == typeof f.extras ? f.extras(d, { sql: kx }) : f.extras,
						))
							h.push({ tsKey: a, value: oG(b, g) })
					for (let { tsKey: a, value: b } of h)
						k.push({
							dbKey: jQ(b, ks.Aliased) ? b.fieldAlias : e.columns[a].name,
							tsKey: a,
							field: jQ(b, j0) ? oF(b, g) : b,
							relationTableTsKey: void 0,
							isJson: !1,
							selection: [],
						})
					let q =
						"function" == typeof f.orderBy
							? f.orderBy(d, { sql: kx, asc: m3, desc: m4 })
							: (f.orderBy ?? [])
					for (let { tsKey: d, queryConfig: e, relation: h } of (Array.isArray(q) || (q = [q]),
					(n = q.map((a) => (jQ(a, j0) ? oF(a, g) : oH(a, g)))),
					(l = f.limit),
					(m = f.offset),
					j)) {
						let f = (function (a, b, c) {
								if (jQ(c, m7) && c.config)
									return { fields: c.config.fields, references: c.config.references }
								let d = b[j_(c.referencedTable)]
								if (!d) throw Error(`Table "${c.referencedTable[j$.Symbol.Name]}" not found in schema`)
								let e = a[d]
								if (!e) throw Error(`Table "${d}" not found in schema`)
								let f = c.sourceTable,
									g = b[j_(f)]
								if (!g) throw Error(`Table "${f[j$.Symbol.Name]}" not found in schema`)
								let h = []
								for (let a of Object.values(e.relations))
									((c.relationName && c !== a && a.relationName === c.relationName) ||
										(!c.relationName && a.referencedTable === c.sourceTable)) &&
										h.push(a)
								if (h.length > 1)
									throw c.relationName
										? Error(
												`There are multiple relations with name "${c.relationName}" in table "${d}"`,
											)
										: Error(
												`There are multiple relations between "${d}" and "${c.sourceTable[j$.Symbol.Name]}". Please specify relation name`,
											)
								if (h[0] && jQ(h[0], m7) && h[0].config)
									return { fields: h[0].config.references, references: h[0].config.fields }
								throw Error(`There is not enough information to infer relation "${g}.${c.fieldName}"`)
							})(b, c, h),
							i = c[j_(h.referencedTable)],
							j = `${g}_${d}`,
							l = mM(...f.fields.map((a, b) => mK(oF(f.references[b], j), oF(a, g)))),
							m = this.buildRelationalQueryWithoutPK({
								fullSchema: a,
								schema: b,
								tableNamesMap: c,
								table: a[i],
								tableConfig: b[i],
								queryConfig: jQ(h, m7) ? (!0 === e ? { limit: 1 } : { ...e, limit: 1 }) : e,
								tableAlias: j,
								joinOn: l,
								nestedQueryRelation: h,
							}),
							n = kx`${kx.identifier(j)}.${kx.identifier("data")}`.as(d)
						p.push({ on: kx`true`, table: new kl(m.sql, {}, j), alias: j, joinType: "left", lateral: !0 }),
							k.push({
								dbKey: d,
								tsKey: d,
								field: n,
								relationTableTsKey: i,
								isJson: !0,
								selection: m.selection,
							})
					}
				}
				if (0 === k.length) throw new oR({ message: `No fields selected for table "${e.tsName}" ("${g}")` })
				if (((o = mM(i, o)), h)) {
					let a = kx`json_build_array(${kx.join(
						k.map(({ field: a, tsKey: b, isJson: c }) =>
							c
								? kx`${kx.identifier(`${g}_${b}`)}.${kx.identifier("data")}`
								: jQ(a, ks.Aliased)
									? a.sql
									: a,
						),
						kx`, `,
					)})`
					jQ(h, m8) &&
						(a = kx`coalesce(json_agg(${a}${n.length > 0 ? kx` order by ${kx.join(n, kx`, `)}` : void 0}), '[]'::json)`)
					let b = [
						{
							dbKey: "data",
							tsKey: "data",
							field: a.as("data"),
							isJson: !0,
							relationTableTsKey: e.tsName,
							selection: k,
						},
					]
					void 0 !== l || void 0 !== m || n.length > 0
						? ((j = this.buildSelectQuery({
								table: oE(d, g),
								fields: {},
								fieldsFlat: [{ path: [], field: kx.raw("*") }],
								where: o,
								limit: l,
								offset: m,
								orderBy: n,
								setOperators: [],
							})),
							(o = void 0),
							(l = void 0),
							(m = void 0),
							(n = []))
						: (j = oE(d, g)),
						(j = this.buildSelectQuery({
							table: jQ(j, mC) ? j : new kl(j, {}, g),
							fields: {},
							fieldsFlat: b.map(({ field: a }) => ({ path: [], field: jQ(a, j0) ? oF(a, g) : a })),
							joins: p,
							where: o,
							limit: l,
							offset: m,
							orderBy: n,
							setOperators: [],
						}))
				} else
					j = this.buildSelectQuery({
						table: oE(d, g),
						fields: {},
						fieldsFlat: k.map(({ field: a }) => ({ path: [], field: jQ(a, j0) ? oF(a, g) : a })),
						joins: p,
						where: o,
						limit: l,
						offset: m,
						orderBy: n,
						setOperators: [],
					})
				return { tableTsKey: e.tsName, sql: j, selection: k }
			}
		}
		class oV {
			static [jP] = "TypedQueryBuilder"
			getSelectedFields() {
				return this._.selectedFields
			}
		}
		class oW {
			static [jP] = "PgSelectBuilder"
			fields
			session
			dialect
			withList = []
			distinct
			constructor(a) {
				;(this.fields = a.fields),
					(this.session = a.session),
					(this.dialect = a.dialect),
					a.withList && (this.withList = a.withList),
					(this.distinct = a.distinct)
			}
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			from(a) {
				let b,
					c = !!this.fields
				return (
					(b = this.fields
						? this.fields
						: jQ(a, kl)
							? Object.fromEntries(Object.keys(a._.selectedFields).map((b) => [b, a[b]]))
							: jQ(a, oT)
								? a[ko].selectedFields
								: jQ(a, ks)
									? {}
									: kH(a)),
					new oY({
						table: a,
						fields: b,
						isPartialSelect: c,
						session: this.session,
						dialect: this.dialect,
						withList: this.withList,
						distinct: this.distinct,
					}).setToken(this.authToken)
				)
			}
		}
		class oX extends oV {
			static [jP] = "PgSelectQueryBuilder"
			_
			config
			joinsNotNullableMap
			tableName
			isPartialSelect
			session
			dialect
			cacheConfig = void 0
			usedTables = new Set()
			constructor({ table: a, fields: b, isPartialSelect: c, session: d, dialect: e, withList: f, distinct: g }) {
				for (const h of (super(),
				(this.config = { withList: f, table: a, fields: { ...b }, distinct: g, setOperators: [] }),
				(this.isPartialSelect = c),
				(this.session = d),
				(this.dialect = e),
				(this._ = { selectedFields: b, config: this.config }),
				(this.tableName = kI(a)),
				(this.joinsNotNullableMap = "string" == typeof this.tableName ? { [this.tableName]: !0 } : {}),
				pf(a)))
					this.usedTables.add(h)
			}
			getUsedTables() {
				return [...this.usedTables]
			}
			createJoin(a, b) {
				return (c, d) => {
					let e = this.tableName,
						f = kI(c)
					for (let a of pf(c)) this.usedTables.add(a)
					if ("string" == typeof f && this.config.joins?.some((a) => a.alias === f))
						throw Error(`Alias "${f}" is already used in this query`)
					if (
						!this.isPartialSelect &&
						(1 === Object.keys(this.joinsNotNullableMap).length &&
							"string" == typeof e &&
							(this.config.fields = { [e]: this.config.fields }),
						"string" == typeof f && !jQ(c, ks))
					) {
						let a = jQ(c, kl) ? c._.selectedFields : jQ(c, kD) ? c[ko].selectedFields : c[j$.Symbol.Columns]
						this.config.fields[f] = a
					}
					if (
						("function" == typeof d &&
							(d = d(
								new Proxy(
									this.config.fields,
									new oI({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
								),
							)),
						this.config.joins || (this.config.joins = []),
						this.config.joins.push({ on: d, table: c, joinType: a, alias: f, lateral: b }),
						"string" == typeof f)
					)
						switch (a) {
							case "left":
								this.joinsNotNullableMap[f] = !1
								break
							case "right":
								;(this.joinsNotNullableMap = Object.fromEntries(
									Object.entries(this.joinsNotNullableMap).map(([a]) => [a, !1]),
								)),
									(this.joinsNotNullableMap[f] = !0)
								break
							case "cross":
							case "inner":
								this.joinsNotNullableMap[f] = !0
								break
							case "full":
								;(this.joinsNotNullableMap = Object.fromEntries(
									Object.entries(this.joinsNotNullableMap).map(([a]) => [a, !1]),
								)),
									(this.joinsNotNullableMap[f] = !1)
						}
					return this
				}
			}
			leftJoin = this.createJoin("left", !1)
			leftJoinLateral = this.createJoin("left", !0)
			rightJoin = this.createJoin("right", !1)
			innerJoin = this.createJoin("inner", !1)
			innerJoinLateral = this.createJoin("inner", !0)
			fullJoin = this.createJoin("full", !1)
			crossJoin = this.createJoin("cross", !1)
			crossJoinLateral = this.createJoin("cross", !0)
			createSetOperator(a, b) {
				return (c) => {
					let d = "function" == typeof c ? c(o$()) : c
					if (!kF(this.getSelectedFields(), d.getSelectedFields()))
						throw Error(
							"Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
						)
					return this.config.setOperators.push({ type: a, isAll: b, rightSelect: d }), this
				}
			}
			union = this.createSetOperator("union", !1)
			unionAll = this.createSetOperator("union", !0)
			intersect = this.createSetOperator("intersect", !1)
			intersectAll = this.createSetOperator("intersect", !0)
			except = this.createSetOperator("except", !1)
			exceptAll = this.createSetOperator("except", !0)
			addSetOperators(a) {
				return this.config.setOperators.push(...a), this
			}
			where(a) {
				return (
					"function" == typeof a &&
						(a = a(
							new Proxy(this.config.fields, new oI({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })),
						)),
					(this.config.where = a),
					this
				)
			}
			having(a) {
				return (
					"function" == typeof a &&
						(a = a(
							new Proxy(this.config.fields, new oI({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })),
						)),
					(this.config.having = a),
					this
				)
			}
			groupBy(...a) {
				if ("function" == typeof a[0]) {
					let b = a[0](
						new Proxy(this.config.fields, new oI({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })),
					)
					this.config.groupBy = Array.isArray(b) ? b : [b]
				} else this.config.groupBy = a
				return this
			}
			orderBy(...a) {
				if ("function" == typeof a[0]) {
					let b = a[0](
							new Proxy(this.config.fields, new oI({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })),
						),
						c = Array.isArray(b) ? b : [b]
					this.config.setOperators.length > 0
						? (this.config.setOperators.at(-1).orderBy = c)
						: (this.config.orderBy = c)
				} else
					this.config.setOperators.length > 0
						? (this.config.setOperators.at(-1).orderBy = a)
						: (this.config.orderBy = a)
				return this
			}
			limit(a) {
				return (
					this.config.setOperators.length > 0
						? (this.config.setOperators.at(-1).limit = a)
						: (this.config.limit = a),
					this
				)
			}
			offset(a) {
				return (
					this.config.setOperators.length > 0
						? (this.config.setOperators.at(-1).offset = a)
						: (this.config.offset = a),
					this
				)
			}
			for(a, b = {}) {
				return (this.config.lockingClause = { strength: a, config: b }), this
			}
			getSQL() {
				return this.dialect.buildSelectQuery(this.config)
			}
			toSQL() {
				let { typings: a, ...b } = this.dialect.sqlToQuery(this.getSQL())
				return b
			}
			as(a) {
				let b = []
				if ((b.push(...pf(this.config.table)), this.config.joins))
					for (let a of this.config.joins) b.push(...pf(a.table))
				return new Proxy(
					new kl(this.getSQL(), this.config.fields, a, !1, [...new Set(b)]),
					new oI({ alias: a, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
				)
			}
			getSelectedFields() {
				return new Proxy(
					this.config.fields,
					new oI({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
				)
			}
			$dynamic() {
				return this
			}
			$withCache(a) {
				return (
					(this.cacheConfig =
						void 0 === a
							? { config: {}, enable: !0, autoInvalidate: !0 }
							: !1 === a
								? { enable: !1 }
								: { enable: !0, autoInvalidate: !0, ...a }),
					this
				)
			}
		}
		class oY extends oX {
			static [jP] = "PgSelect"
			_prepare(a) {
				let {
					session: b,
					config: c,
					dialect: d,
					joinsNotNullableMap: e,
					authToken: f,
					cacheConfig: g,
					usedTables: h,
				} = this
				if (!b)
					throw Error("Cannot execute a query on a query builder. Please use a database instance instead.")
				let { fields: i } = c
				return kn("drizzle.prepareQuery", () => {
					let c = kE(i),
						j = b.prepareQuery(
							d.sqlToQuery(this.getSQL()),
							c,
							a,
							!0,
							void 0,
							{ type: "select", tables: [...h] },
							g,
						)
					return (j.joinsNotNullableMap = e), j.setToken(f)
				})
			}
			prepare(a) {
				return this._prepare(a)
			}
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			execute = (a) => kn("drizzle.operation", () => this._prepare().execute(a, this.authToken))
		}
		for (let a of [oA])
			for (let b of Object.getOwnPropertyNames(a.prototype))
				"constructor" !== b &&
					Object.defineProperty(
						oY.prototype,
						b,
						Object.getOwnPropertyDescriptor(a.prototype, b) || Object.create(null),
					)
		function oZ(a, b) {
			return (c, d, ...e) => {
				let f = [d, ...e].map((c) => ({ type: a, isAll: b, rightSelect: c }))
				for (let a of f)
					if (!kF(c.getSelectedFields(), a.rightSelect.getSelectedFields()))
						throw Error(
							"Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
						)
				return c.addSetOperators(f)
			}
		}
		let o$ = () => ({ union: o_, unionAll: o0, intersect: o1, intersectAll: o2, except: o3, exceptAll: o4 }),
			o_ = oZ("union", !1),
			o0 = oZ("union", !0),
			o1 = oZ("intersect", !1),
			o2 = oZ("intersect", !0),
			o3 = oZ("except", !1),
			o4 = oZ("except", !0)
		class o5 {
			static [jP] = "PgQueryBuilder"
			dialect
			dialectConfig
			constructor(a) {
				;(this.dialect = jQ(a, oU) ? a : void 0), (this.dialectConfig = jQ(a, oU) ? void 0 : a)
			}
			$with = (a, b) => {
				let c = this
				return {
					as: (d) => (
						"function" == typeof d && (d = d(c)),
						new Proxy(
							new km(
								d.getSQL(),
								b ?? ("getSelectedFields" in d ? (d.getSelectedFields() ?? {}) : {}),
								a,
								!0,
							),
							new oI({ alias: a, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					),
				}
			}
			with(...a) {
				let b = this
				return {
					select: function (c) {
						return new oW({ fields: c ?? void 0, session: void 0, dialect: b.getDialect(), withList: a })
					},
					selectDistinct: function (a) {
						return new oW({ fields: a ?? void 0, session: void 0, dialect: b.getDialect(), distinct: !0 })
					},
					selectDistinctOn: function (a, c) {
						return new oW({
							fields: c ?? void 0,
							session: void 0,
							dialect: b.getDialect(),
							distinct: { on: a },
						})
					},
				}
			}
			select(a) {
				return new oW({ fields: a ?? void 0, session: void 0, dialect: this.getDialect() })
			}
			selectDistinct(a) {
				return new oW({ fields: a ?? void 0, session: void 0, dialect: this.getDialect(), distinct: !0 })
			}
			selectDistinctOn(a, b) {
				return new oW({ fields: b ?? void 0, session: void 0, dialect: this.getDialect(), distinct: { on: a } })
			}
			getDialect() {
				return this.dialect || (this.dialect = new oU(this.dialectConfig)), this.dialect
			}
		}
		class o6 {
			constructor(a, b) {
				;(this.name = a), (this.schema = b)
			}
			static [jP] = "PgDefaultViewBuilderCore"
			config = {}
			with(a) {
				return (this.config.with = a), this
			}
		}
		class o7 extends o6 {
			static [jP] = "PgViewBuilder"
			as(a) {
				"function" == typeof a && (a = a(new o5()))
				let b = new oI({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
					c = new Proxy(a.getSelectedFields(), b)
				return new Proxy(
					new pc({
						pgConfig: this.config,
						config: {
							name: this.name,
							schema: this.schema,
							selectedFields: c,
							query: a.getSQL().inlineParams(),
						},
					}),
					b,
				)
			}
		}
		class o8 extends o6 {
			static [jP] = "PgManualViewBuilder"
			columns
			constructor(a, b, c) {
				super(a, c), (this.columns = kH(mD(a, b)))
			}
			existing() {
				return new Proxy(
					new pc({
						pgConfig: void 0,
						config: { name: this.name, schema: this.schema, selectedFields: this.columns, query: void 0 },
					}),
					new oI({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
			as(a) {
				return new Proxy(
					new pc({
						pgConfig: this.config,
						config: {
							name: this.name,
							schema: this.schema,
							selectedFields: this.columns,
							query: a.inlineParams(),
						},
					}),
					new oI({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
		}
		class o9 {
			constructor(a, b) {
				;(this.name = a), (this.schema = b)
			}
			static [jP] = "PgMaterializedViewBuilderCore"
			config = {}
			using(a) {
				return (this.config.using = a), this
			}
			with(a) {
				return (this.config.with = a), this
			}
			tablespace(a) {
				return (this.config.tablespace = a), this
			}
			withNoData() {
				return (this.config.withNoData = !0), this
			}
		}
		class pa extends o9 {
			static [jP] = "PgMaterializedViewBuilder"
			as(a) {
				"function" == typeof a && (a = a(new o5()))
				let b = new oI({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
					c = new Proxy(a.getSelectedFields(), b)
				return new Proxy(
					new pe({
						pgConfig: {
							with: this.config.with,
							using: this.config.using,
							tablespace: this.config.tablespace,
							withNoData: this.config.withNoData,
						},
						config: {
							name: this.name,
							schema: this.schema,
							selectedFields: c,
							query: a.getSQL().inlineParams(),
						},
					}),
					b,
				)
			}
		}
		class pb extends o9 {
			static [jP] = "PgManualMaterializedViewBuilder"
			columns
			constructor(a, b, c) {
				super(a, c), (this.columns = kH(mD(a, b)))
			}
			existing() {
				return new Proxy(
					new pe({
						pgConfig: {
							tablespace: this.config.tablespace,
							using: this.config.using,
							with: this.config.with,
							withNoData: this.config.withNoData,
						},
						config: { name: this.name, schema: this.schema, selectedFields: this.columns, query: void 0 },
					}),
					new oI({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
			as(a) {
				return new Proxy(
					new pe({
						pgConfig: {
							tablespace: this.config.tablespace,
							using: this.config.using,
							with: this.config.with,
							withNoData: this.config.withNoData,
						},
						config: {
							name: this.name,
							schema: this.schema,
							selectedFields: this.columns,
							query: a.inlineParams(),
						},
					}),
					new oI({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
		}
		class pc extends oT {
			static [jP] = "PgView";
			[oM]
			constructor({ pgConfig: a, config: b }) {
				super(b), a && (this[oM] = { with: a.with })
			}
		}
		let pd = Symbol.for("drizzle:PgMaterializedViewConfig")
		class pe extends oT {
			static [jP] = "PgMaterializedView";
			[pd]
			constructor({ pgConfig: a, config: b }) {
				super(b),
					(this[pd] = {
						with: a?.with,
						using: a?.using,
						tablespace: a?.tablespace,
						withNoData: a?.withNoData,
					})
			}
		}
		function pf(a) {
			return jQ(a, mC)
				? [a[jS] ? `${a[jS]}.${a[j$.Symbol.BaseName]}` : a[j$.Symbol.BaseName]]
				: jQ(a, kl)
					? (a._.usedTables ?? [])
					: jQ(a, ks)
						? (a.usedTables ?? [])
						: []
		}
		class pg extends oA {
			constructor(a, b, c, d) {
				super(), (this.session = b), (this.dialect = c), (this.config = { table: a, withList: d })
			}
			static [jP] = "PgDelete"
			config
			cacheConfig
			where(a) {
				return (this.config.where = a), this
			}
			returning(a = this.config.table[j$.Symbol.Columns]) {
				return (this.config.returningFields = a), (this.config.returning = kE(a)), this
			}
			getSQL() {
				return this.dialect.buildDeleteQuery(this.config)
			}
			toSQL() {
				let { typings: a, ...b } = this.dialect.sqlToQuery(this.getSQL())
				return b
			}
			_prepare(a) {
				return kn("drizzle.prepareQuery", () =>
					this.session.prepareQuery(
						this.dialect.sqlToQuery(this.getSQL()),
						this.config.returning,
						a,
						!0,
						void 0,
						{ type: "delete", tables: pf(this.config.table) },
						this.cacheConfig,
					),
				)
			}
			prepare(a) {
				return this._prepare(a)
			}
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			execute = (a) => kn("drizzle.operation", () => this._prepare().execute(a, this.authToken))
			getSelectedFields() {
				return this.config.returningFields
					? new Proxy(
							this.config.returningFields,
							new oI({ alias: this.config.table[jR], sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					: void 0
			}
			$dynamic() {
				return this
			}
		}
		class ph {
			constructor(a, b, c, d, e) {
				;(this.table = a),
					(this.session = b),
					(this.dialect = c),
					(this.withList = d),
					(this.overridingSystemValue_ = e)
			}
			static [jP] = "PgInsertBuilder"
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			overridingSystemValue() {
				return (this.overridingSystemValue_ = !0), this
			}
			values(a) {
				if (0 === (a = Array.isArray(a) ? a : [a]).length)
					throw Error("values() must be called with at least one value")
				let b = a.map((a) => {
					let b = {},
						c = this.table[j$.Symbol.Columns]
					for (let d of Object.keys(a)) {
						let e = a[d]
						b[d] = jQ(e, ks) ? e : new kw(e, c[d])
					}
					return b
				})
				return new pi(
					this.table,
					b,
					this.session,
					this.dialect,
					this.withList,
					!1,
					this.overridingSystemValue_,
				).setToken(this.authToken)
			}
			select(a) {
				let b = "function" == typeof a ? a(new o5()) : a
				if (!jQ(b, ks) && !kF(this.table[jT], b._.selectedFields))
					throw Error(
						"Insert select error: selected fields are not the same or are in a different order compared to the table definition",
					)
				return new pi(this.table, b, this.session, this.dialect, this.withList, !0)
			}
		}
		class pi extends oA {
			constructor(a, b, c, d, e, f, g) {
				super(),
					(this.session = c),
					(this.dialect = d),
					(this.config = { table: a, values: b, withList: e, select: f, overridingSystemValue_: g })
			}
			static [jP] = "PgInsert"
			config
			cacheConfig
			returning(a = this.config.table[j$.Symbol.Columns]) {
				return (this.config.returningFields = a), (this.config.returning = kE(a)), this
			}
			onConflictDoNothing(a = {}) {
				if (void 0 === a.target) this.config.onConflict = kx`do nothing`
				else {
					let b = ""
					b = Array.isArray(a.target)
						? a.target.map((a) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(a))).join(",")
						: this.dialect.escapeName(this.dialect.casing.getColumnCasing(a.target))
					let c = a.where ? kx` where ${a.where}` : void 0
					this.config.onConflict = kx`(${kx.raw(b)})${c} do nothing`
				}
				return this
			}
			onConflictDoUpdate(a) {
				if (a.where && (a.targetWhere || a.setWhere))
					throw Error(
						'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.',
					)
				let b = a.where ? kx` where ${a.where}` : void 0,
					c = a.targetWhere ? kx` where ${a.targetWhere}` : void 0,
					d = a.setWhere ? kx` where ${a.setWhere}` : void 0,
					e = this.dialect.buildUpdateSet(this.config.table, kG(this.config.table, a.set)),
					f = ""
				return (
					(f = Array.isArray(a.target)
						? a.target.map((a) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(a))).join(",")
						: this.dialect.escapeName(this.dialect.casing.getColumnCasing(a.target))),
					(this.config.onConflict = kx`(${kx.raw(f)})${c} do update set ${e}${b}${d}`),
					this
				)
			}
			getSQL() {
				return this.dialect.buildInsertQuery(this.config)
			}
			toSQL() {
				let { typings: a, ...b } = this.dialect.sqlToQuery(this.getSQL())
				return b
			}
			_prepare(a) {
				return kn("drizzle.prepareQuery", () =>
					this.session.prepareQuery(
						this.dialect.sqlToQuery(this.getSQL()),
						this.config.returning,
						a,
						!0,
						void 0,
						{ type: "insert", tables: pf(this.config.table) },
						this.cacheConfig,
					),
				)
			}
			prepare(a) {
				return this._prepare(a)
			}
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			execute = (a) => kn("drizzle.operation", () => this._prepare().execute(a, this.authToken))
			getSelectedFields() {
				return this.config.returningFields
					? new Proxy(
							this.config.returningFields,
							new oI({ alias: this.config.table[jR], sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					: void 0
			}
			$dynamic() {
				return this
			}
		}
		class pj {
			constructor(a, b, c, d) {
				;(this.table = a), (this.session = b), (this.dialect = c), (this.withList = d)
			}
			static [jP] = "PgUpdateBuilder"
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			set(a) {
				return new pk(this.table, kG(this.table, a), this.session, this.dialect, this.withList).setToken(
					this.authToken,
				)
			}
		}
		class pk extends oA {
			constructor(a, b, c, d, e) {
				super(),
					(this.session = c),
					(this.dialect = d),
					(this.config = { set: b, table: a, withList: e, joins: [] }),
					(this.tableName = kI(a)),
					(this.joinsNotNullableMap = "string" == typeof this.tableName ? { [this.tableName]: !0 } : {})
			}
			static [jP] = "PgUpdate"
			config
			tableName
			joinsNotNullableMap
			cacheConfig
			from(a) {
				let b = kI(a)
				return "string" == typeof b && (this.joinsNotNullableMap[b] = !0), (this.config.from = a), this
			}
			getTableLikeFields(a) {
				return jQ(a, mC) ? a[j$.Symbol.Columns] : jQ(a, kl) ? a._.selectedFields : a[ko].selectedFields
			}
			createJoin(a) {
				return (b, c) => {
					let d = kI(b)
					if ("string" == typeof d && this.config.joins.some((a) => a.alias === d))
						throw Error(`Alias "${d}" is already used in this query`)
					if ("function" == typeof c) {
						let a =
							this.config.from && !jQ(this.config.from, ks)
								? this.getTableLikeFields(this.config.from)
								: void 0
						c = c(
							new Proxy(
								this.config.table[j$.Symbol.Columns],
								new oI({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
							),
							a && new Proxy(a, new oI({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })),
						)
					}
					if ((this.config.joins.push({ on: c, table: b, joinType: a, alias: d }), "string" == typeof d))
						switch (a) {
							case "left":
								this.joinsNotNullableMap[d] = !1
								break
							case "right":
								;(this.joinsNotNullableMap = Object.fromEntries(
									Object.entries(this.joinsNotNullableMap).map(([a]) => [a, !1]),
								)),
									(this.joinsNotNullableMap[d] = !0)
								break
							case "inner":
								this.joinsNotNullableMap[d] = !0
								break
							case "full":
								;(this.joinsNotNullableMap = Object.fromEntries(
									Object.entries(this.joinsNotNullableMap).map(([a]) => [a, !1]),
								)),
									(this.joinsNotNullableMap[d] = !1)
						}
					return this
				}
			}
			leftJoin = this.createJoin("left")
			rightJoin = this.createJoin("right")
			innerJoin = this.createJoin("inner")
			fullJoin = this.createJoin("full")
			where(a) {
				return (this.config.where = a), this
			}
			returning(a) {
				if (!a && ((a = Object.assign({}, this.config.table[j$.Symbol.Columns])), this.config.from)) {
					let b = kI(this.config.from)
					if ("string" == typeof b && this.config.from && !jQ(this.config.from, ks)) {
						let c = this.getTableLikeFields(this.config.from)
						a[b] = c
					}
					for (let b of this.config.joins) {
						let c = kI(b.table)
						if ("string" == typeof c && !jQ(b.table, ks)) {
							let d = this.getTableLikeFields(b.table)
							a[c] = d
						}
					}
				}
				return (this.config.returningFields = a), (this.config.returning = kE(a)), this
			}
			getSQL() {
				return this.dialect.buildUpdateQuery(this.config)
			}
			toSQL() {
				let { typings: a, ...b } = this.dialect.sqlToQuery(this.getSQL())
				return b
			}
			_prepare(a) {
				let b = this.session.prepareQuery(
					this.dialect.sqlToQuery(this.getSQL()),
					this.config.returning,
					a,
					!0,
					void 0,
					{ type: "insert", tables: pf(this.config.table) },
					this.cacheConfig,
				)
				return (b.joinsNotNullableMap = this.joinsNotNullableMap), b
			}
			prepare(a) {
				return this._prepare(a)
			}
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			execute = (a) => this._prepare().execute(a, this.authToken)
			getSelectedFields() {
				return this.config.returningFields
					? new Proxy(
							this.config.returningFields,
							new oI({ alias: this.config.table[jR], sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					: void 0
			}
			$dynamic() {
				return this
			}
		}
		class pl extends ks {
			constructor(a) {
				super(pl.buildEmbeddedCount(a.source, a.filters).queryChunks),
					(this.params = a),
					this.mapWith(Number),
					(this.session = a.session),
					(this.sql = pl.buildCount(a.source, a.filters))
			}
			sql
			token
			static [jP] = "PgCountBuilder";
			[Symbol.toStringTag] = "PgCountBuilder"
			session
			static buildEmbeddedCount(a, b) {
				return kx`(select count(*) from ${a}${kx.raw(" where ").if(b)}${b})`
			}
			static buildCount(a, b) {
				return kx`select count(*) as count from ${a}${kx.raw(" where ").if(b)}${b};`
			}
			setToken(a) {
				return (this.token = a), this
			}
			then(a, b) {
				return Promise.resolve(this.session.count(this.sql, this.token)).then(a, b)
			}
			catch(a) {
				return this.then(void 0, a)
			}
			finally(a) {
				return this.then(
					(b) => (a?.(), b),
					(b) => {
						throw (a?.(), b)
					},
				)
			}
		}
		class pm {
			constructor(a, b, c, d, e, f, g) {
				;(this.fullSchema = a),
					(this.schema = b),
					(this.tableNamesMap = c),
					(this.table = d),
					(this.tableConfig = e),
					(this.dialect = f),
					(this.session = g)
			}
			static [jP] = "PgRelationalQueryBuilder"
			findMany(a) {
				return new pn(
					this.fullSchema,
					this.schema,
					this.tableNamesMap,
					this.table,
					this.tableConfig,
					this.dialect,
					this.session,
					a || {},
					"many",
				)
			}
			findFirst(a) {
				return new pn(
					this.fullSchema,
					this.schema,
					this.tableNamesMap,
					this.table,
					this.tableConfig,
					this.dialect,
					this.session,
					a ? { ...a, limit: 1 } : { limit: 1 },
					"first",
				)
			}
		}
		class pn extends oA {
			constructor(a, b, c, d, e, f, g, h, i) {
				super(),
					(this.fullSchema = a),
					(this.schema = b),
					(this.tableNamesMap = c),
					(this.table = d),
					(this.tableConfig = e),
					(this.dialect = f),
					(this.session = g),
					(this.config = h),
					(this.mode = i)
			}
			static [jP] = "PgRelationalQuery"
			_prepare(a) {
				return kn("drizzle.prepareQuery", () => {
					let { query: b, builtQuery: c } = this._toSQL()
					return this.session.prepareQuery(c, void 0, a, !0, (a, c) => {
						let d = a.map((a) =>
							(function a(b, c, d, e, f = (a) => a) {
								let g = {}
								for (let [h, i] of e.entries())
									if (i.isJson) {
										let e = c.relations[i.tsKey],
											j = d[h],
											k = "string" == typeof j ? JSON.parse(j) : j
										g[i.tsKey] = jQ(e, m7)
											? k && a(b, b[i.relationTableTsKey], k, i.selection, f)
											: k.map((c) => a(b, b[i.relationTableTsKey], c, i.selection, f))
									} else {
										let a,
											b = f(d[h]),
											c = i.field
										;(a = jQ(c, j0) ? c : jQ(c, ks) ? c.decoder : c.sql.decoder),
											(g[i.tsKey] = null === b ? null : a.mapFromDriverValue(b))
									}
								return g
							})(this.schema, this.tableConfig, a, b.selection, c),
						)
						return "first" === this.mode ? d[0] : d
					})
				})
			}
			prepare(a) {
				return this._prepare(a)
			}
			_getQuery() {
				return this.dialect.buildRelationalQueryWithoutPK({
					fullSchema: this.fullSchema,
					schema: this.schema,
					tableNamesMap: this.tableNamesMap,
					table: this.table,
					tableConfig: this.tableConfig,
					queryConfig: this.config,
					tableAlias: this.tableConfig.tsName,
				})
			}
			getSQL() {
				return this._getQuery().sql
			}
			_toSQL() {
				let a = this._getQuery(),
					b = this.dialect.sqlToQuery(a.sql)
				return { query: a, builtQuery: b }
			}
			toSQL() {
				return this._toSQL().builtQuery
			}
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			execute() {
				return kn("drizzle.operation", () => this._prepare().execute(void 0, this.authToken))
			}
		}
		class po extends oA {
			constructor(a, b, c, d) {
				super(), (this.execute = a), (this.sql = b), (this.query = c), (this.mapBatchResult = d)
			}
			static [jP] = "PgRaw"
			getSQL() {
				return this.sql
			}
			getQuery() {
				return this.query
			}
			mapResult(a, b) {
				return b ? this.mapBatchResult(a) : a
			}
			_prepare() {
				return this
			}
			isResponseInArrayMode() {
				return !1
			}
		}
		class pp extends oA {
			constructor(a, b, c) {
				super(), (this.session = b), (this.dialect = c), (this.config = { view: a })
			}
			static [jP] = "PgRefreshMaterializedView"
			config
			concurrently() {
				if (void 0 !== this.config.withNoData) throw Error("Cannot use concurrently and withNoData together")
				return (this.config.concurrently = !0), this
			}
			withNoData() {
				if (void 0 !== this.config.concurrently) throw Error("Cannot use concurrently and withNoData together")
				return (this.config.withNoData = !0), this
			}
			getSQL() {
				return this.dialect.buildRefreshMaterializedViewQuery(this.config)
			}
			toSQL() {
				let { typings: a, ...b } = this.dialect.sqlToQuery(this.getSQL())
				return b
			}
			_prepare(a) {
				return kn("drizzle.prepareQuery", () =>
					this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), void 0, a, !0),
				)
			}
			prepare(a) {
				return this._prepare(a)
			}
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			execute = (a) => kn("drizzle.operation", () => this._prepare().execute(a, this.authToken))
		}
		class pq {
			constructor(a, b, c) {
				if (
					((this.dialect = a),
					(this.session = b),
					(this._ = c
						? { schema: c.schema, fullSchema: c.fullSchema, tableNamesMap: c.tableNamesMap, session: b }
						: { schema: void 0, fullSchema: {}, tableNamesMap: {}, session: b }),
					(this.query = {}),
					this._.schema)
				)
					for (const [d, e] of Object.entries(this._.schema))
						this.query[d] = new pm(
							c.fullSchema,
							this._.schema,
							this._.tableNamesMap,
							c.fullSchema[d],
							e,
							a,
							b,
						)
				this.$cache = { invalidate: async (a) => {} }
			}
			static [jP] = "PgDatabase"
			query
			$with = (a, b) => {
				let c = this
				return {
					as: (d) => (
						"function" == typeof d && (d = d(new o5(c.dialect))),
						new Proxy(
							new km(
								d.getSQL(),
								b ?? ("getSelectedFields" in d ? (d.getSelectedFields() ?? {}) : {}),
								a,
								!0,
							),
							new oI({ alias: a, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					),
				}
			}
			$count(a, b) {
				return new pl({ source: a, filters: b, session: this.session })
			}
			$cache
			with(...a) {
				let b = this
				return {
					select: function (c) {
						return new oW({ fields: c ?? void 0, session: b.session, dialect: b.dialect, withList: a })
					},
					selectDistinct: function (c) {
						return new oW({
							fields: c ?? void 0,
							session: b.session,
							dialect: b.dialect,
							withList: a,
							distinct: !0,
						})
					},
					selectDistinctOn: function (c, d) {
						return new oW({
							fields: d ?? void 0,
							session: b.session,
							dialect: b.dialect,
							withList: a,
							distinct: { on: c },
						})
					},
					update: function (c) {
						return new pj(c, b.session, b.dialect, a)
					},
					insert: function (c) {
						return new ph(c, b.session, b.dialect, a)
					},
					delete: function (c) {
						return new pg(c, b.session, b.dialect, a)
					},
				}
			}
			select(a) {
				return new oW({ fields: a ?? void 0, session: this.session, dialect: this.dialect })
			}
			selectDistinct(a) {
				return new oW({ fields: a ?? void 0, session: this.session, dialect: this.dialect, distinct: !0 })
			}
			selectDistinctOn(a, b) {
				return new oW({
					fields: b ?? void 0,
					session: this.session,
					dialect: this.dialect,
					distinct: { on: a },
				})
			}
			update(a) {
				return new pj(a, this.session, this.dialect)
			}
			insert(a) {
				return new ph(a, this.session, this.dialect)
			}
			delete(a) {
				return new pg(a, this.session, this.dialect)
			}
			refreshMaterializedView(a) {
				return new pp(a, this.session, this.dialect)
			}
			authToken
			execute(a) {
				let b = "string" == typeof a ? kx.raw(a) : a.getSQL(),
					c = this.dialect.sqlToQuery(b),
					d = this.session.prepareQuery(c, void 0, void 0, !1)
				return new po(
					() => d.execute(void 0, this.authToken),
					b,
					c,
					(a) => d.mapResult(a, !0),
				)
			}
			transaction(a, b) {
				return this.session.transaction(a, b)
			}
		}
		class pr {
			static [jP] = "Cache"
		}
		class ps extends pr {
			strategy() {
				return "all"
			}
			static [jP] = "NoopCache"
			async get(a) {}
			async put(a, b, c, d) {}
			async onMutate(a) {}
		}
		async function pt(a, b) {
			let c = `${a}-${JSON.stringify(b)}`,
				d = new TextEncoder().encode(c)
			return [...new Uint8Array(await crypto.subtle.digest("SHA-256", d))]
				.map((a) => a.toString(16).padStart(2, "0"))
				.join("")
		}
		class pu extends Error {
			constructor(a, b, c) {
				super(`Failed query: ${a}
params: ${b}`),
					(this.query = a),
					(this.params = b),
					(this.cause = c),
					Error.captureStackTrace(this, pu),
					c && (this.cause = c)
			}
		}
		class pv {
			constructor(a, b, c, d) {
				;(this.query = a),
					(this.cache = b),
					(this.queryMetadata = c),
					(this.cacheConfig = d),
					b &&
						"all" === b.strategy() &&
						void 0 === d &&
						(this.cacheConfig = { enable: !0, autoInvalidate: !0 }),
					this.cacheConfig?.enable || (this.cacheConfig = void 0)
			}
			authToken
			getQuery() {
				return this.query
			}
			mapResult(a, b) {
				return a
			}
			setToken(a) {
				return (this.authToken = a), this
			}
			static [jP] = "PgPreparedQuery"
			joinsNotNullableMap
			async queryWithCache(a, b, c) {
				if (
					void 0 === this.cache ||
					jQ(this.cache, ps) ||
					void 0 === this.queryMetadata ||
					(this.cacheConfig && !this.cacheConfig.enable)
				)
					try {
						return await c()
					} catch (c) {
						throw new pu(a, b, c)
					}
				if (
					("insert" === this.queryMetadata.type ||
						"update" === this.queryMetadata.type ||
						"delete" === this.queryMetadata.type) &&
					this.queryMetadata.tables.length > 0
				)
					try {
						let [a] = await Promise.all([c(), this.cache.onMutate({ tables: this.queryMetadata.tables })])
						return a
					} catch (c) {
						throw new pu(a, b, c)
					}
				if (!this.cacheConfig)
					try {
						return await c()
					} catch (c) {
						throw new pu(a, b, c)
					}
				if ("select" === this.queryMetadata.type) {
					let d = await this.cache.get(
						this.cacheConfig.tag ?? (await pt(a, b)),
						this.queryMetadata.tables,
						void 0 !== this.cacheConfig.tag,
						this.cacheConfig.autoInvalidate,
					)
					if (void 0 === d) {
						let d
						try {
							d = await c()
						} catch (c) {
							throw new pu(a, b, c)
						}
						return (
							await this.cache.put(
								this.cacheConfig.tag ?? (await pt(a, b)),
								d,
								this.cacheConfig.autoInvalidate ? this.queryMetadata.tables : [],
								void 0 !== this.cacheConfig.tag,
								this.cacheConfig.config,
							),
							d
						)
					}
					return d
				}
				try {
					return await c()
				} catch (c) {
					throw new pu(a, b, c)
				}
			}
		}
		class pw {
			constructor(a) {
				this.dialect = a
			}
			static [jP] = "PgSession"
			execute(a, b) {
				return kn("drizzle.operation", () =>
					kn("drizzle.prepareQuery", () => this.prepareQuery(this.dialect.sqlToQuery(a), void 0, void 0, !1))
						.setToken(b)
						.execute(void 0, b),
				)
			}
			all(a) {
				return this.prepareQuery(this.dialect.sqlToQuery(a), void 0, void 0, !1).all()
			}
			async count(a, b) {
				return Number((await this.execute(a, b))[0].count)
			}
		}
		class px extends pq {
			constructor(a, b, c, d = 0) {
				super(a, b, c), (this.schema = c), (this.nestedIndex = d)
			}
			static [jP] = "PgTransaction"
			rollback() {
				throw new oS()
			}
			getTransactionConfigSQL(a) {
				let b = []
				return (
					a.isolationLevel && b.push(`isolation level ${a.isolationLevel}`),
					a.accessMode && b.push(a.accessMode),
					"boolean" == typeof a.deferrable && b.push(a.deferrable ? "deferrable" : "not deferrable"),
					kx.raw(b.join(" "))
				)
			}
			setTransaction(a) {
				return this.session.execute(kx`set transaction ${this.getTransactionConfigSQL(a)}`)
			}
		}
		class py extends pv {
			constructor(a, b, c, d, e, f, g, h, i, j) {
				super({ sql: b, params: c }, e, f, g),
					(this.client = a),
					(this.queryString = b),
					(this.params = c),
					(this.logger = d),
					(this.fields = h),
					(this._isResponseInArrayMode = i),
					(this.customResultMapper = j)
			}
			static [jP] = "PostgresJsPreparedQuery"
			async execute(a = {}) {
				return kn("drizzle.execute", async (b) => {
					let c = kB(this.params, a)
					b?.setAttributes({
						"drizzle.query.text": this.queryString,
						"drizzle.query.params": JSON.stringify(c),
					}),
						this.logger.logQuery(this.queryString, c)
					let { fields: d, queryString: e, client: f, joinsNotNullableMap: g, customResultMapper: h } = this
					if (!d && !h)
						return kn("drizzle.driver.execute", () =>
							this.queryWithCache(e, c, async () => await f.unsafe(e, c)),
						)
					let i = await kn(
						"drizzle.driver.execute",
						() => (
							b?.setAttributes({ "drizzle.query.text": e, "drizzle.query.params": JSON.stringify(c) }),
							this.queryWithCache(e, c, async () => await f.unsafe(e, c).values())
						),
					)
					return kn("drizzle.mapResponse", () =>
						h
							? h(i)
							: i.map((a) =>
									(function (a, b, c) {
										let d = {},
											e = a.reduce((a, { path: e, field: f }, g) => {
												let h
												h = jQ(f, j0) ? f : jQ(f, ks) ? f.decoder : f.sql.decoder
												let i = a
												for (let [a, j] of e.entries())
													if (a < e.length - 1) j in i || (i[j] = {}), (i = i[j])
													else {
														let a = b[g],
															k = (i[j] = null === a ? null : h.mapFromDriverValue(a))
														if (c && jQ(f, j0) && 2 === e.length) {
															let a = e[0]
															a in d
																? "string" == typeof d[a] &&
																	d[a] !== f.table[jR] &&
																	(d[a] = !1)
																: (d[a] = null === k && f.table[jR])
														}
													}
												return a
											}, {})
										if (c && Object.keys(d).length > 0)
											for (let [a, b] of Object.entries(d))
												"string" != typeof b || c[b] || (e[a] = null)
										return e
									})(d, a, g),
								),
					)
				})
			}
			all(a = {}) {
				return kn("drizzle.execute", async (b) => {
					let c = kB(this.params, a)
					return (
						b?.setAttributes({
							"drizzle.query.text": this.queryString,
							"drizzle.query.params": JSON.stringify(c),
						}),
						this.logger.logQuery(this.queryString, c),
						kn(
							"drizzle.driver.execute",
							() => (
								b?.setAttributes({
									"drizzle.query.text": this.queryString,
									"drizzle.query.params": JSON.stringify(c),
								}),
								this.queryWithCache(this.queryString, c, async () =>
									this.client.unsafe(this.queryString, c),
								)
							),
						)
					)
				})
			}
			isResponseInArrayMode() {
				return this._isResponseInArrayMode
			}
		}
		class pz extends pw {
			constructor(a, b, c, d = {}) {
				super(b),
					(this.client = a),
					(this.schema = c),
					(this.options = d),
					(this.logger = d.logger ?? new oz()),
					(this.cache = d.cache ?? new ps())
			}
			static [jP] = "PostgresJsSession"
			logger
			cache
			prepareQuery(a, b, c, d, e, f, g) {
				return new py(this.client, a.sql, a.params, this.logger, this.cache, f, g, b, d, e)
			}
			query(a, b) {
				return this.logger.logQuery(a, b), this.client.unsafe(a, b).values()
			}
			queryObjects(a, b) {
				return this.client.unsafe(a, b)
			}
			transaction(a, b) {
				return this.client.begin(async (c) => {
					let d = new pz(c, this.dialect, this.schema, this.options),
						e = new pA(this.dialect, d, this.schema)
					return b && (await e.setTransaction(b)), a(e)
				})
			}
		}
		class pA extends px {
			constructor(a, b, c, d = 0) {
				super(a, b, c, d), (this.session = b)
			}
			static [jP] = "PostgresJsTransaction"
			transaction(a) {
				return this.session.client.savepoint((b) => {
					let c = new pz(b, this.dialect, this.schema, this.session.options)
					return a(new pA(this.dialect, c, this.schema))
				})
			}
		}
		class pB extends pq {
			static [jP] = "PostgresJsDatabase"
		}
		function pC(a, b = {}) {
			let c,
				d,
				e = (a) => a
			for (let b of ["1184", "1082", "1083", "1114", "1182", "1185", "1115", "1231"])
				(a.options.parsers[b] = e), (a.options.serializers[b] = e)
			;(a.options.serializers["114"] = e), (a.options.serializers["3802"] = e)
			let f = new oU({ casing: b.casing })
			if ((!0 === b.logger ? (c = new oy()) : !1 !== b.logger && (c = b.logger), b.schema)) {
				let a = (function (a, b) {
					1 === Object.keys(a).length && "default" in a && !jQ(a.default, j$) && (a = a.default)
					let c = {},
						d = {},
						e = {}
					for (let [f, g] of Object.entries(a))
						if (jQ(g, j$)) {
							let a = j_(g),
								b = d[a]
							for (let d of ((c[a] = f),
							(e[f] = {
								tsName: f,
								dbName: g[j$.Symbol.Name],
								schema: g[j$.Symbol.Schema],
								columns: g[j$.Symbol.Columns],
								relations: b?.relations ?? {},
								primaryKey: b?.primaryKey ?? [],
							}),
							Object.values(g[j$.Symbol.Columns])))
								d.primary && e[f].primaryKey.push(d)
							let h = g[j$.Symbol.ExtraConfigBuilder]?.(g[j$.Symbol.ExtraConfigColumns])
							if (h) for (let a of Object.values(h)) jQ(a, mH) && e[f].primaryKey.push(...a.columns)
						} else if (jQ(g, m6)) {
							let a,
								f = j_(g.table),
								h = c[f]
							for (let [c, i] of Object.entries(g.config(b(g.table))))
								if (h) {
									let b = e[h]
									;(b.relations[c] = i), a && b.primaryKey.push(...a)
								} else f in d || (d[f] = { relations: {}, primaryKey: a }), (d[f].relations[c] = i)
						}
					return { tables: e, tableNamesMap: c }
				})(b.schema, na)
				d = { fullSchema: b.schema, schema: a.tables, tableNamesMap: a.tableNamesMap }
			}
			let g = new pz(a, f, d, { logger: c, cache: b.cache }),
				h = new pB(f, g, d)
			return (h.$client = a), (h.$cache = b.cache), h.$cache && (h.$cache.invalidate = b.cache?.onMutate), h
		}
		function pD(...a) {
			if ("string" == typeof a[0]) return pC(ot(a[0]), a[1])
			if (
				(function (a) {
					if ("object" != typeof a || null === a || "Object" !== a.constructor.name) return !1
					if ("logger" in a) {
						let b = typeof a.logger
						return (
							"boolean" === b ||
							("object" === b && "function" == typeof a.logger.logQuery) ||
							"undefined" === b
						)
					}
					if ("schema" in a) {
						let b = typeof a.schema
						return "object" === b || "undefined" === b
					}
					if ("casing" in a) {
						let b = typeof a.casing
						return "string" === b || "undefined" === b
					}
					if ("mode" in a) return "default" === a.mode && "planetscale" === a.mode && void 0 === a.mode
					if ("connection" in a) {
						let b = typeof a.connection
						return "string" === b || "object" === b || "undefined" === b
					}
					if ("client" in a) {
						let b = typeof a.client
						return "object" === b || "function" === b || "undefined" === b
					}
					return 0 === Object.keys(a).length
				})(a[0])
			) {
				let { connection: b, client: c, ...d } = a[0]
				if (c) return pC(c, d)
				if ("object" == typeof b && void 0 !== b.url) {
					let { url: a, ...c } = b
					return pC(ot(a, c), d)
				}
				return pC(ot(b), d)
			}
			return pC(a[0], a[1])
		}
		;(pD || (pD = {})).mock = function (a) {
			return pC({ options: { parsers: {}, serializers: {} } }, a)
		}
		var pE = a.i(76314)
		let pF = pD({ client: ot(process.env.DATABASE_URL, { prepare: !1 }), schema: pE }),
			pG = async () => {
				let a = await pF
						.select({
							runId: nd.runId,
							language: nd.language,
							score: kx`cast(sum(case when ${nd.passed} = true then 1 else 0 end) as float) / count(*)`,
						})
						.from(nd)
						.groupBy(nd.runId, nd.language),
					b = {}
				for (let { runId: c, language: d, score: e } of a)
					b[c] || (b[c] = { go: 0, java: 0, javascript: 0, python: 0, rust: 0 }), (b[c][d] = e)
				return b
			},
			pH = async () => pF.query.runs.findMany({ orderBy: m4(ni.runs.id), with: { taskMetrics: !0 } })
		var pI = a.i(14747)
		a.i(24868)
		var pJ = a.i(92509)
		let pK = pI.dirname(
			(0, pJ.fileURLToPath)(
				{
					get url() {
						return `file://${a.P("packages/evals/src/exercises/index.ts")}`
					},
				}.url,
			),
		)
		async function pL() {
			let a = await pG()
			return (await pH())
				.filter((a) => !!a.taskMetrics)
				.filter(({ settings: a }) => i2.safeParse(a).success)
				.sort((a, b) => b.passed - a.passed)
				.map((b) => {
					let c,
						d = i2.parse(b.settings)
					return {
						...b,
						label: b.description || b.model,
						score: Math.round(100 * (b.passed / (b.passed + b.failed))),
						languageScores: a[b.id],
						taskMetrics: b.taskMetrics,
						modelId: (c = iv.find((a) => d[a])) ? d[c] : void 0,
					}
				})
		}
		pI.resolve(pK, "..", "..", "..", "..", "..", "evals"),
			new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
			(0, a.i(71518).ensureServerEntryExports)([pL]),
			(0, q.registerServerReference)(pL, "00b9e645197685f75cedcdd9cb13755a2761ce10bd", null),
			a.s(["getEvalRuns", () => pL], 64735)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__e4f3f68f._.js.map
