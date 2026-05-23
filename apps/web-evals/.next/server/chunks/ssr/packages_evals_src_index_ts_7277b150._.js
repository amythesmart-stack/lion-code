module.exports = [
	52824,
	76314,
	14777,
	67792,
	89768,
	67361,
	21406,
	31930,
	12966,
	16008,
	(a) => {
		"use strict"
		let b,
			c,
			d,
			e,
			f,
			g = Symbol.for("drizzle:entityKind")
		function h(a, b) {
			if (!a || "object" != typeof a) return !1
			if (a instanceof b) return !0
			if (!Object.prototype.hasOwnProperty.call(b, g))
				throw Error(
					`Class "${b.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`,
				)
			let c = Object.getPrototypeOf(a).constructor
			if (c)
				for (; c; ) {
					if (g in c && c[g] === b[g]) return !0
					c = Object.getPrototypeOf(c)
				}
			return !1
		}
		Symbol.for("drizzle:hasOwnEntityKind")
		let i = Symbol.for("drizzle:Name"),
			j = Symbol.for("drizzle:Schema"),
			k = Symbol.for("drizzle:Columns"),
			l = Symbol.for("drizzle:ExtraConfigColumns"),
			m = Symbol.for("drizzle:OriginalName"),
			n = Symbol.for("drizzle:BaseName"),
			o = Symbol.for("drizzle:IsAlias"),
			p = Symbol.for("drizzle:ExtraConfigBuilder"),
			q = Symbol.for("drizzle:IsDrizzleTable")
		class r {
			static [g] = "Table"
			static Symbol = {
				Name: i,
				Schema: j,
				OriginalName: m,
				Columns: k,
				ExtraConfigColumns: l,
				BaseName: n,
				IsAlias: o,
				ExtraConfigBuilder: p,
			};
			[i];
			[m];
			[j];
			[k];
			[l];
			[n];
			[o] = !1;
			[q] = !0;
			[p] = void 0
			constructor(a, b, c) {
				;(this[i] = this[m] = a), (this[j] = b), (this[n] = c)
			}
		}
		function s(a) {
			return `${a[j] ?? "public"}.${a[i]}`
		}
		class t {
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
			static [g] = "Column"
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
		class u {
			static [g] = "ColumnBuilder"
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
		class v {
			static [g] = "PgForeignKeyBuilder"
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
				return new w(a, this)
			}
		}
		class w {
			constructor(a, b) {
				;(this.table = a),
					(this.reference = b.reference),
					(this.onUpdate = b._onUpdate),
					(this.onDelete = b._onDelete)
			}
			static [g] = "PgForeignKey"
			reference
			onUpdate
			onDelete
			getName() {
				let { name: a, columns: b, foreignColumns: c } = this.reference(),
					d = b.map((a) => a.name),
					e = c.map((a) => a.name),
					f = [this.table[i], ...d, c[0].table[i], ...e]
				return a ?? `${f.join("_")}_fk`
			}
		}
		function x(a, ...b) {
			return a(...b)
		}
		function y(a, b) {
			return `${a[i]}_${b.join("_")}_unique`
		}
		class z {
			constructor(a, b) {
				;(this.name = b), (this.columns = a)
			}
			static [g] = "PgUniqueConstraintBuilder"
			columns
			nullsNotDistinctConfig = !1
			nullsNotDistinct() {
				return (this.nullsNotDistinctConfig = !0), this
			}
			build(a) {
				return new B(a, this.columns, this.nullsNotDistinctConfig, this.name)
			}
		}
		class A {
			static [g] = "PgUniqueOnConstraintBuilder"
			name
			constructor(a) {
				this.name = a
			}
			on(...a) {
				return new z(a, this.name)
			}
		}
		class B {
			constructor(a, b, c, d) {
				;(this.table = a),
					(this.columns = b),
					(this.name =
						d ??
						y(
							this.table,
							this.columns.map((a) => a.name),
						)),
					(this.nullsNotDistinct = c)
			}
			static [g] = "PgUniqueConstraint"
			columns
			name
			nullsNotDistinct = !1
			getName() {
				return this.name
			}
		}
		function C(a, b, c) {
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
		class D extends u {
			foreignKeyConfigs = []
			static [g] = "PgColumnBuilder"
			array(a) {
				return new H(this.config.name, this, a)
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
					x(
						(c, d) => {
							let e = new v(() => ({ columns: [a], foreignColumns: [c()] }))
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
				return new F(a, this.config)
			}
		}
		class E extends t {
			constructor(a, b) {
				b.uniqueName || (b.uniqueName = y(a, [b.name])), super(a, b), (this.table = a)
			}
			static [g] = "PgColumn"
		}
		class F extends E {
			static [g] = "ExtraConfigColumn"
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
		class G {
			static [g] = "IndexedColumn"
			constructor(a, b, c, d) {
				;(this.name = a), (this.keyAsName = b), (this.type = c), (this.indexConfig = d)
			}
			name
			keyAsName
			type
			indexConfig
		}
		class H extends D {
			static [g] = "PgArrayBuilder"
			constructor(a, b, c) {
				super(a, "array", "PgArray"), (this.config.baseBuilder = b), (this.config.size = c)
			}
			build(a) {
				let b = this.config.baseBuilder.build(a)
				return new I(a, this.config, b)
			}
		}
		class I extends E {
			constructor(a, b, c, d) {
				super(a, b), (this.baseColumn = c), (this.range = d), (this.size = b.size)
			}
			size
			static [g] = "PgArray"
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
										let [a, c] = C(b, e + 1, !0)
										d.push(a), (e = c)
										continue
									}
									if ("}" === g) return [d, e + 1]
									if ("{" === g) {
										let [c, f] = a(b, e + 1)
										d.push(c), (e = f)
										continue
									}
									let [h, i] = C(b, e, !1)
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
						: h(this.baseColumn, I)
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
		class J extends D {
			static [g] = "PgEnumObjectColumnBuilder"
			constructor(a, b) {
				super(a, "string", "PgEnumObjectColumn"), (this.config.enum = b)
			}
			build(a) {
				return new K(a, this.config)
			}
		}
		class K extends E {
			static [g] = "PgEnumObjectColumn"
			enum
			enumValues = this.config.enum.enumValues
			constructor(a, b) {
				super(a, b), (this.enum = b.enum)
			}
			getSQLType() {
				return this.enum.enumName
			}
		}
		let L = Symbol.for("drizzle:isPgEnum")
		class M extends D {
			static [g] = "PgEnumColumnBuilder"
			constructor(a, b) {
				super(a, "string", "PgEnumColumn"), (this.config.enum = b)
			}
			build(a) {
				return new N(a, this.config)
			}
		}
		class N extends E {
			static [g] = "PgEnumColumn"
			enum = this.config.enum
			enumValues = this.config.enum.enumValues
			constructor(a, b) {
				super(a, b), (this.enum = b.enum)
			}
			getSQLType() {
				return this.enum.enumName
			}
		}
		class O {
			static [g] = "Subquery"
			constructor(a, b, c, d = !1, e = []) {
				this._ = { brand: "Subquery", sql: a, selectedFields: b, alias: c, isWith: d, usedTables: e }
			}
		}
		class P extends O {
			static [g] = "WithSubquery"
		}
		let Q = (a, d) =>
				b
					? (c || (c = b.trace.getTracer("drizzle-orm", "0.44.1")),
						x(
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
			R = Symbol.for("drizzle:ViewBaseConfig")
		class S {
			static [g] = "FakePrimitiveParam"
		}
		function T(a) {
			return null != a && "function" == typeof a.getSQL
		}
		class U {
			static [g] = "StringChunk"
			value
			constructor(a) {
				this.value = Array.isArray(a) ? a : [a]
			}
			getSQL() {
				return new V([this])
			}
		}
		class V {
			constructor(a) {
				for (const b of ((this.queryChunks = a), a))
					if (h(b, r)) {
						const a = b[r.Symbol.Schema]
						this.usedTables.push(void 0 === a ? b[r.Symbol.Name] : a + "." + b[r.Symbol.Name])
					}
			}
			static [g] = "SQL"
			decoder = X
			shouldInlineParams = !1
			usedTables = []
			append(a) {
				return this.queryChunks.push(...a.queryChunks), this
			}
			toQuery(a) {
				return Q("drizzle.buildSQL", (b) => {
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
						inlineParams: i,
						paramStartIndex: j,
					} = c
				var k = a.map((a) => {
					if (h(a, U)) return { sql: a.value.join(""), params: [] }
					if (h(a, W)) return { sql: e(a.value), params: [] }
					if (void 0 === a) return { sql: "", params: [] }
					if (Array.isArray(a)) {
						let b = [new U("(")]
						for (let [c, d] of a.entries()) b.push(d), c < a.length - 1 && b.push(new U(", "))
						return b.push(new U(")")), this.buildQueryFromSourceParams(b, c)
					}
					if (h(a, V))
						return this.buildQueryFromSourceParams(a.queryChunks, {
							...c,
							inlineParams: i || a.shouldInlineParams,
						})
					if (h(a, r)) {
						let b = a[r.Symbol.Schema],
							c = a[r.Symbol.Name]
						return { sql: void 0 === b || a[o] ? e(c) : e(b) + "." + e(c), params: [] }
					}
					if (h(a, t)) {
						let c = d.getColumnCasing(a)
						if ("indexes" === b.invokeSource) return { sql: e(c), params: [] }
						let f = a.table[r.Symbol.Schema]
						return {
							sql:
								a.table[o] || void 0 === f
									? e(a.table[r.Symbol.Name]) + "." + e(c)
									: e(f) + "." + e(a.table[r.Symbol.Name]) + "." + e(c),
							params: [],
						}
					}
					if (h(a, af)) {
						let b = a[R].schema,
							c = a[R].name
						return { sql: void 0 === b || a[R].isAlias ? e(c) : e(b) + "." + e(c), params: [] }
					}
					if (h(a, Z)) {
						if (h(a.value, ac)) return { sql: f(j.value++, a), params: [a], typings: ["none"] }
						let b = null === a.value ? null : a.encoder.mapToDriverValue(a.value)
						if (h(b, V)) return this.buildQueryFromSourceParams([b], c)
						if (i) return { sql: this.mapInlineParam(b, c), params: [] }
						let d = ["none"]
						return g && (d = [g(a.encoder)]), { sql: f(j.value++, b), params: [b], typings: d }
					}
					return h(a, ac)
						? { sql: f(j.value++, a), params: [a], typings: ["none"] }
						: h(a, V.Aliased) && void 0 !== a.fieldAlias
							? { sql: e(a.fieldAlias), params: [] }
							: h(a, O)
								? a._.isWith
									? { sql: e(a._.alias), params: [] }
									: this.buildQueryFromSourceParams(
											[new U("("), a._.sql, new U(") "), new W(a._.alias)],
											c,
										)
								: a && "function" == typeof a && L in a && !0 === a[L]
									? a.schema
										? { sql: e(a.schema) + "." + e(a.enumName), params: [] }
										: { sql: e(a.enumName), params: [] }
									: T(a)
										? a.shouldOmitSQLParens?.()
											? this.buildQueryFromSourceParams([a.getSQL()], c)
											: this.buildQueryFromSourceParams([new U("("), a.getSQL(), new U(")")], c)
										: i
											? { sql: this.mapInlineParam(a, c), params: [] }
											: { sql: f(j.value++, a), params: [a], typings: ["none"] }
				})
				let l = { sql: "", params: [] }
				for (let a of k)
					(l.sql += a.sql),
						l.params.push(...a.params),
						a.typings?.length && (l.typings || (l.typings = []), l.typings.push(...a.typings))
				return l
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
				return void 0 === a ? this : new V.Aliased(this, a)
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
		class W {
			constructor(a) {
				this.value = a
			}
			static [g] = "Name"
			brand
			getSQL() {
				return new V([this])
			}
		}
		let X = { mapFromDriverValue: (a) => a },
			Y = { mapToDriverValue: (a) => a }
		;({ ...X, ...Y })
		class Z {
			constructor(a, b = Y) {
				;(this.value = a), (this.encoder = b)
			}
			static [g] = "Param"
			brand
			getSQL() {
				return new V([this])
			}
		}
		function $(a, ...b) {
			let c = []
			for (let [d, e] of ((b.length > 0 || (a.length > 0 && "" !== a[0])) && c.push(new U(a[0])), b.entries()))
				c.push(e, new U(a[d + 1]))
			return new V(c)
		}
		;((_ = $ || ($ = {})).empty = function () {
			return new V([])
		}),
			(_.fromList = function (a) {
				return new V(a)
			}),
			(_.raw = function (a) {
				return new V([new U(a)])
			}),
			(_.join = function (a, b) {
				let c = []
				for (let [d, e] of a.entries()) d > 0 && void 0 !== b && c.push(b), c.push(e)
				return new V(c)
			}),
			(_.identifier = function (a) {
				return new W(a)
			}),
			(_.placeholder = function (a) {
				return new ac(a)
			}),
			(_.param = function (a, b) {
				return new Z(a, b)
			})
		var _,
			aa = V || (V = {})
		class ab {
			constructor(a, b) {
				;(this.sql = a), (this.fieldAlias = b)
			}
			static [g] = "SQL.Aliased"
			isSelectionField = !1
			getSQL() {
				return this.sql
			}
			clone() {
				return new ab(this.sql, this.fieldAlias)
			}
		}
		aa.Aliased = ab
		class ac {
			constructor(a) {
				this.name = a
			}
			static [g] = "Placeholder"
			getSQL() {
				return new V([this])
			}
		}
		function ad(a, b) {
			return a.map((a) => {
				if (h(a, ac)) {
					if (!(a.name in b)) throw Error(`No value for placeholder "${a.name}" was provided`)
					return b[a.name]
				}
				if (h(a, Z) && h(a.value, ac)) {
					if (!(a.value.name in b)) throw Error(`No value for placeholder "${a.value.name}" was provided`)
					return a.encoder.mapToDriverValue(b[a.value.name])
				}
				return a
			})
		}
		let ae = Symbol.for("drizzle:IsDrizzleView")
		class af {
			static [g] = "View";
			[R];
			[ae] = !0
			constructor({ name: a, schema: b, selectedFields: c, query: d }) {
				this[R] = {
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
				return new V([this])
			}
		}
		function ag(a, b) {
			return Object.entries(a).reduce((a, [c, d]) => {
				if ("string" != typeof c) return a
				let e = b ? [...b, c] : [c]
				return (
					h(d, t) || h(d, V) || h(d, V.Aliased)
						? a.push({ path: e, field: d })
						: h(d, r)
							? a.push(...ag(d[r.Symbol.Columns], e))
							: a.push(...ag(d, e)),
					a
				)
			}, [])
		}
		function ah(a, b) {
			let c = Object.keys(a),
				d = Object.keys(b)
			if (c.length !== d.length) return !1
			for (let [a, b] of c.entries()) if (b !== d[a]) return !1
			return !0
		}
		function ai(a, b) {
			let c = Object.entries(b)
				.filter(([, a]) => void 0 !== a)
				.map(([b, c]) => (h(c, V) || h(c, t) ? [b, c] : [b, new Z(c, a[r.Symbol.Columns][b])]))
			if (0 === c.length) throw Error("No values to set")
			return Object.fromEntries(c)
		}
		function aj(a) {
			return a[r.Symbol.Columns]
		}
		function ak(a) {
			return h(a, O)
				? a._.alias
				: h(a, af)
					? a[R].name
					: h(a, V)
						? void 0
						: a[r.Symbol.IsAlias]
							? a[r.Symbol.Name]
							: a[r.Symbol.BaseName]
		}
		function al(a, b) {
			return { name: "string" == typeof a && a.length > 0 ? a : "", config: "object" == typeof a ? a : b }
		}
		;(t.prototype.getSQL = function () {
			return new V([this])
		}),
			(r.prototype.getSQL = function () {
				return new V([this])
			}),
			(O.prototype.getSQL = function () {
				return new V([this])
			})
		class am extends D {
			static [g] = "PgIntColumnBaseBuilder"
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
		class an extends am {
			static [g] = "PgBigInt53Builder"
			constructor(a) {
				super(a, "number", "PgBigInt53")
			}
			build(a) {
				return new ao(a, this.config)
			}
		}
		class ao extends E {
			static [g] = "PgBigInt53"
			getSQLType() {
				return "bigint"
			}
			mapFromDriverValue(a) {
				return "number" == typeof a ? a : Number(a)
			}
		}
		class ap extends am {
			static [g] = "PgBigInt64Builder"
			constructor(a) {
				super(a, "bigint", "PgBigInt64")
			}
			build(a) {
				return new aq(a, this.config)
			}
		}
		class aq extends E {
			static [g] = "PgBigInt64"
			getSQLType() {
				return "bigint"
			}
			mapFromDriverValue(a) {
				return BigInt(a)
			}
		}
		function ar(a, b) {
			let { name: c, config: d } = al(a, b)
			return "number" === d.mode ? new an(c) : new ap(c)
		}
		class as extends D {
			static [g] = "PgBigSerial53Builder"
			constructor(a) {
				super(a, "number", "PgBigSerial53"), (this.config.hasDefault = !0), (this.config.notNull = !0)
			}
			build(a) {
				return new at(a, this.config)
			}
		}
		class at extends E {
			static [g] = "PgBigSerial53"
			getSQLType() {
				return "bigserial"
			}
			mapFromDriverValue(a) {
				return "number" == typeof a ? a : Number(a)
			}
		}
		class au extends D {
			static [g] = "PgBigSerial64Builder"
			constructor(a) {
				super(a, "bigint", "PgBigSerial64"), (this.config.hasDefault = !0)
			}
			build(a) {
				return new av(a, this.config)
			}
		}
		class av extends E {
			static [g] = "PgBigSerial64"
			getSQLType() {
				return "bigserial"
			}
			mapFromDriverValue(a) {
				return BigInt(a)
			}
		}
		function aw(a, b) {
			let { name: c, config: d } = al(a, b)
			return "number" === d.mode ? new as(c) : new au(c)
		}
		class ax extends D {
			static [g] = "PgBooleanBuilder"
			constructor(a) {
				super(a, "boolean", "PgBoolean")
			}
			build(a) {
				return new ay(a, this.config)
			}
		}
		class ay extends E {
			static [g] = "PgBoolean"
			getSQLType() {
				return "boolean"
			}
		}
		function az(a) {
			return new ax(a ?? "")
		}
		class aA extends D {
			static [g] = "PgCharBuilder"
			constructor(a, b) {
				super(a, "string", "PgChar"), (this.config.length = b.length), (this.config.enumValues = b.enum)
			}
			build(a) {
				return new aB(a, this.config)
			}
		}
		class aB extends E {
			static [g] = "PgChar"
			length = this.config.length
			enumValues = this.config.enumValues
			getSQLType() {
				return void 0 === this.length ? "char" : `char(${this.length})`
			}
		}
		function aC(a, b = {}) {
			let { name: c, config: d } = al(a, b)
			return new aA(c, d)
		}
		class aD extends D {
			static [g] = "PgCidrBuilder"
			constructor(a) {
				super(a, "string", "PgCidr")
			}
			build(a) {
				return new aE(a, this.config)
			}
		}
		class aE extends E {
			static [g] = "PgCidr"
			getSQLType() {
				return "cidr"
			}
		}
		function aF(a) {
			return new aD(a ?? "")
		}
		class aG extends D {
			static [g] = "PgCustomColumnBuilder"
			constructor(a, b, c) {
				super(a, "custom", "PgCustomColumn"), (this.config.fieldConfig = b), (this.config.customTypeParams = c)
			}
			build(a) {
				return new aH(a, this.config)
			}
		}
		class aH extends E {
			static [g] = "PgCustomColumn"
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
		function aI(a) {
			return (b, c) => {
				let { name: d, config: e } = al(b, c)
				return new aG(d, e, a)
			}
		}
		class aJ extends D {
			static [g] = "PgDateColumnBaseBuilder"
			defaultNow() {
				return this.default($`now()`)
			}
		}
		class aK extends aJ {
			static [g] = "PgDateBuilder"
			constructor(a) {
				super(a, "date", "PgDate")
			}
			build(a) {
				return new aL(a, this.config)
			}
		}
		class aL extends E {
			static [g] = "PgDate"
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
		class aM extends aJ {
			static [g] = "PgDateStringBuilder"
			constructor(a) {
				super(a, "string", "PgDateString")
			}
			build(a) {
				return new aN(a, this.config)
			}
		}
		class aN extends E {
			static [g] = "PgDateString"
			getSQLType() {
				return "date"
			}
		}
		function aO(a, b) {
			let { name: c, config: d } = al(a, b)
			return d?.mode === "date" ? new aK(c) : new aM(c)
		}
		class aP extends D {
			static [g] = "PgDoublePrecisionBuilder"
			constructor(a) {
				super(a, "number", "PgDoublePrecision")
			}
			build(a) {
				return new aQ(a, this.config)
			}
		}
		class aQ extends E {
			static [g] = "PgDoublePrecision"
			getSQLType() {
				return "double precision"
			}
			mapFromDriverValue(a) {
				return "string" == typeof a ? Number.parseFloat(a) : a
			}
		}
		function aR(a) {
			return new aP(a ?? "")
		}
		class aS extends D {
			static [g] = "PgInetBuilder"
			constructor(a) {
				super(a, "string", "PgInet")
			}
			build(a) {
				return new aT(a, this.config)
			}
		}
		class aT extends E {
			static [g] = "PgInet"
			getSQLType() {
				return "inet"
			}
		}
		function aU(a) {
			return new aS(a ?? "")
		}
		class aV extends am {
			static [g] = "PgIntegerBuilder"
			constructor(a) {
				super(a, "number", "PgInteger")
			}
			build(a) {
				return new aW(a, this.config)
			}
		}
		class aW extends E {
			static [g] = "PgInteger"
			getSQLType() {
				return "integer"
			}
			mapFromDriverValue(a) {
				return "string" == typeof a ? Number.parseInt(a) : a
			}
		}
		function aX(a) {
			return new aV(a ?? "")
		}
		class aY extends D {
			static [g] = "PgIntervalBuilder"
			constructor(a, b) {
				super(a, "string", "PgInterval"), (this.config.intervalConfig = b)
			}
			build(a) {
				return new aZ(a, this.config)
			}
		}
		class aZ extends E {
			static [g] = "PgInterval"
			fields = this.config.intervalConfig.fields
			precision = this.config.intervalConfig.precision
			getSQLType() {
				let a = this.fields ? ` ${this.fields}` : "",
					b = this.precision ? `(${this.precision})` : ""
				return `interval${a}${b}`
			}
		}
		function a$(a, b = {}) {
			let { name: c, config: d } = al(a, b)
			return new aY(c, d)
		}
		class a_ extends D {
			static [g] = "PgJsonBuilder"
			constructor(a) {
				super(a, "json", "PgJson")
			}
			build(a) {
				return new a0(a, this.config)
			}
		}
		class a0 extends E {
			static [g] = "PgJson"
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
		function a1(a) {
			return new a_(a ?? "")
		}
		class a2 extends D {
			static [g] = "PgJsonbBuilder"
			constructor(a) {
				super(a, "json", "PgJsonb")
			}
			build(a) {
				return new a3(a, this.config)
			}
		}
		class a3 extends E {
			static [g] = "PgJsonb"
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
		function a4(a) {
			return new a2(a ?? "")
		}
		class a5 extends D {
			static [g] = "PgLineBuilder"
			constructor(a) {
				super(a, "array", "PgLine")
			}
			build(a) {
				return new a6(a, this.config)
			}
		}
		class a6 extends E {
			static [g] = "PgLine"
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
		class a7 extends D {
			static [g] = "PgLineABCBuilder"
			constructor(a) {
				super(a, "json", "PgLineABC")
			}
			build(a) {
				return new a8(a, this.config)
			}
		}
		class a8 extends E {
			static [g] = "PgLineABC"
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
		function a9(a, b) {
			let { name: c, config: d } = al(a, b)
			return d?.mode && "tuple" !== d.mode ? new a7(c) : new a5(c)
		}
		class ba extends D {
			static [g] = "PgMacaddrBuilder"
			constructor(a) {
				super(a, "string", "PgMacaddr")
			}
			build(a) {
				return new bb(a, this.config)
			}
		}
		class bb extends E {
			static [g] = "PgMacaddr"
			getSQLType() {
				return "macaddr"
			}
		}
		function bc(a) {
			return new ba(a ?? "")
		}
		class bd extends D {
			static [g] = "PgMacaddr8Builder"
			constructor(a) {
				super(a, "string", "PgMacaddr8")
			}
			build(a) {
				return new be(a, this.config)
			}
		}
		class be extends E {
			static [g] = "PgMacaddr8"
			getSQLType() {
				return "macaddr8"
			}
		}
		function bf(a) {
			return new bd(a ?? "")
		}
		class bg extends D {
			static [g] = "PgNumericBuilder"
			constructor(a, b, c) {
				super(a, "string", "PgNumeric"), (this.config.precision = b), (this.config.scale = c)
			}
			build(a) {
				return new bh(a, this.config)
			}
		}
		class bh extends E {
			static [g] = "PgNumeric"
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
		class bi extends D {
			static [g] = "PgNumericNumberBuilder"
			constructor(a, b, c) {
				super(a, "number", "PgNumericNumber"), (this.config.precision = b), (this.config.scale = c)
			}
			build(a) {
				return new bj(a, this.config)
			}
		}
		class bj extends E {
			static [g] = "PgNumericNumber"
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
		class bk extends D {
			static [g] = "PgNumericBigIntBuilder"
			constructor(a, b, c) {
				super(a, "bigint", "PgNumericBigInt"), (this.config.precision = b), (this.config.scale = c)
			}
			build(a) {
				return new bl(a, this.config)
			}
		}
		class bl extends E {
			static [g] = "PgNumericBigInt"
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
		function bm(a, b) {
			let { name: c, config: d } = al(a, b),
				e = d?.mode
			return "number" === e
				? new bi(c, d?.precision, d?.scale)
				: "bigint" === e
					? new bk(c, d?.precision, d?.scale)
					: new bg(c, d?.precision, d?.scale)
		}
		class bn extends D {
			static [g] = "PgPointTupleBuilder"
			constructor(a) {
				super(a, "array", "PgPointTuple")
			}
			build(a) {
				return new bo(a, this.config)
			}
		}
		class bo extends E {
			static [g] = "PgPointTuple"
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
		class bp extends D {
			static [g] = "PgPointObjectBuilder"
			constructor(a) {
				super(a, "json", "PgPointObject")
			}
			build(a) {
				return new bq(a, this.config)
			}
		}
		class bq extends E {
			static [g] = "PgPointObject"
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
		function br(a, b) {
			let { name: c, config: d } = al(a, b)
			return d?.mode && "tuple" !== d.mode ? new bp(c) : new bn(c)
		}
		function bs(a, b) {
			let c = new DataView(new ArrayBuffer(8))
			for (let d = 0; d < 8; d++) c.setUint8(d, a[b + d])
			return c.getFloat64(0, !0)
		}
		function bt(a) {
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
				let a = bs(b, c),
					d = bs(b, (c += 8))
				return (c += 8), [a, d]
			}
			throw Error("Unsupported geometry type")
		}
		class bu extends D {
			static [g] = "PgGeometryBuilder"
			constructor(a) {
				super(a, "array", "PgGeometry")
			}
			build(a) {
				return new bv(a, this.config)
			}
		}
		class bv extends E {
			static [g] = "PgGeometry"
			getSQLType() {
				return "geometry(point)"
			}
			mapFromDriverValue(a) {
				return bt(a)
			}
			mapToDriverValue(a) {
				return `point(${a[0]} ${a[1]})`
			}
		}
		class bw extends D {
			static [g] = "PgGeometryObjectBuilder"
			constructor(a) {
				super(a, "json", "PgGeometryObject")
			}
			build(a) {
				return new bx(a, this.config)
			}
		}
		class bx extends E {
			static [g] = "PgGeometryObject"
			getSQLType() {
				return "geometry(point)"
			}
			mapFromDriverValue(a) {
				let b = bt(a)
				return { x: b[0], y: b[1] }
			}
			mapToDriverValue(a) {
				return `point(${a.x} ${a.y})`
			}
		}
		function by(a, b) {
			let { name: c, config: d } = al(a, b)
			return d?.mode && "tuple" !== d.mode ? new bw(c) : new bu(c)
		}
		class bz extends D {
			static [g] = "PgRealBuilder"
			constructor(a, b) {
				super(a, "number", "PgReal"), (this.config.length = b)
			}
			build(a) {
				return new bA(a, this.config)
			}
		}
		class bA extends E {
			static [g] = "PgReal"
			constructor(a, b) {
				super(a, b)
			}
			getSQLType() {
				return "real"
			}
			mapFromDriverValue = (a) => ("string" == typeof a ? Number.parseFloat(a) : a)
		}
		function bB(a) {
			return new bz(a ?? "")
		}
		class bC extends D {
			static [g] = "PgSerialBuilder"
			constructor(a) {
				super(a, "number", "PgSerial"), (this.config.hasDefault = !0), (this.config.notNull = !0)
			}
			build(a) {
				return new bD(a, this.config)
			}
		}
		class bD extends E {
			static [g] = "PgSerial"
			getSQLType() {
				return "serial"
			}
		}
		function bE(a) {
			return new bC(a ?? "")
		}
		class bF extends am {
			static [g] = "PgSmallIntBuilder"
			constructor(a) {
				super(a, "number", "PgSmallInt")
			}
			build(a) {
				return new bG(a, this.config)
			}
		}
		class bG extends E {
			static [g] = "PgSmallInt"
			getSQLType() {
				return "smallint"
			}
			mapFromDriverValue = (a) => ("string" == typeof a ? Number(a) : a)
		}
		function bH(a) {
			return new bF(a ?? "")
		}
		class bI extends D {
			static [g] = "PgSmallSerialBuilder"
			constructor(a) {
				super(a, "number", "PgSmallSerial"), (this.config.hasDefault = !0), (this.config.notNull = !0)
			}
			build(a) {
				return new bJ(a, this.config)
			}
		}
		class bJ extends E {
			static [g] = "PgSmallSerial"
			getSQLType() {
				return "smallserial"
			}
		}
		function bK(a) {
			return new bI(a ?? "")
		}
		class bL extends D {
			static [g] = "PgTextBuilder"
			constructor(a, b) {
				super(a, "string", "PgText"), (this.config.enumValues = b.enum)
			}
			build(a) {
				return new bM(a, this.config)
			}
		}
		class bM extends E {
			static [g] = "PgText"
			enumValues = this.config.enumValues
			getSQLType() {
				return "text"
			}
		}
		function bN(a, b = {}) {
			let { name: c, config: d } = al(a, b)
			return new bL(c, d)
		}
		class bO extends aJ {
			constructor(a, b, c) {
				super(a, "string", "PgTime"),
					(this.withTimezone = b),
					(this.precision = c),
					(this.config.withTimezone = b),
					(this.config.precision = c)
			}
			static [g] = "PgTimeBuilder"
			build(a) {
				return new bP(a, this.config)
			}
		}
		class bP extends E {
			static [g] = "PgTime"
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
		function bQ(a, b = {}) {
			let { name: c, config: d } = al(a, b)
			return new bO(c, d.withTimezone ?? !1, d.precision)
		}
		class bR extends aJ {
			static [g] = "PgTimestampBuilder"
			constructor(a, b, c) {
				super(a, "date", "PgTimestamp"), (this.config.withTimezone = b), (this.config.precision = c)
			}
			build(a) {
				return new bS(a, this.config)
			}
		}
		class bS extends E {
			static [g] = "PgTimestamp"
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
		class bT extends aJ {
			static [g] = "PgTimestampStringBuilder"
			constructor(a, b, c) {
				super(a, "string", "PgTimestampString"), (this.config.withTimezone = b), (this.config.precision = c)
			}
			build(a) {
				return new bU(a, this.config)
			}
		}
		class bU extends E {
			static [g] = "PgTimestampString"
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
		function bV(a, b = {}) {
			let { name: c, config: d } = al(a, b)
			return d?.mode === "string"
				? new bT(c, d.withTimezone ?? !1, d.precision)
				: new bR(c, d?.withTimezone ?? !1, d?.precision)
		}
		class bW extends D {
			static [g] = "PgUUIDBuilder"
			constructor(a) {
				super(a, "string", "PgUUID")
			}
			defaultRandom() {
				return this.default($`gen_random_uuid()`)
			}
			build(a) {
				return new bX(a, this.config)
			}
		}
		class bX extends E {
			static [g] = "PgUUID"
			getSQLType() {
				return "uuid"
			}
		}
		function bY(a) {
			return new bW(a ?? "")
		}
		class bZ extends D {
			static [g] = "PgVarcharBuilder"
			constructor(a, b) {
				super(a, "string", "PgVarchar"), (this.config.length = b.length), (this.config.enumValues = b.enum)
			}
			build(a) {
				return new b$(a, this.config)
			}
		}
		class b$ extends E {
			static [g] = "PgVarchar"
			length = this.config.length
			enumValues = this.config.enumValues
			getSQLType() {
				return void 0 === this.length ? "varchar" : `varchar(${this.length})`
			}
		}
		function b_(a, b = {}) {
			let { name: c, config: d } = al(a, b)
			return new bZ(c, d)
		}
		class b0 extends D {
			static [g] = "PgBinaryVectorBuilder"
			constructor(a, b) {
				super(a, "string", "PgBinaryVector"), (this.config.dimensions = b.dimensions)
			}
			build(a) {
				return new b1(a, this.config)
			}
		}
		class b1 extends E {
			static [g] = "PgBinaryVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `bit(${this.dimensions})`
			}
		}
		function b2(a, b) {
			let { name: c, config: d } = al(a, b)
			return new b0(c, d)
		}
		class b3 extends D {
			static [g] = "PgHalfVectorBuilder"
			constructor(a, b) {
				super(a, "array", "PgHalfVector"), (this.config.dimensions = b.dimensions)
			}
			build(a) {
				return new b4(a, this.config)
			}
		}
		class b4 extends E {
			static [g] = "PgHalfVector"
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
		function b5(a, b) {
			let { name: c, config: d } = al(a, b)
			return new b3(c, d)
		}
		class b6 extends D {
			static [g] = "PgSparseVectorBuilder"
			constructor(a, b) {
				super(a, "string", "PgSparseVector"), (this.config.dimensions = b.dimensions)
			}
			build(a) {
				return new b7(a, this.config)
			}
		}
		class b7 extends E {
			static [g] = "PgSparseVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `sparsevec(${this.dimensions})`
			}
		}
		function b8(a, b) {
			let { name: c, config: d } = al(a, b)
			return new b6(c, d)
		}
		class b9 extends D {
			static [g] = "PgVectorBuilder"
			constructor(a, b) {
				super(a, "array", "PgVector"), (this.config.dimensions = b.dimensions)
			}
			build(a) {
				return new ca(a, this.config)
			}
		}
		class ca extends E {
			static [g] = "PgVector"
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
		function cb(a, b) {
			let { name: c, config: d } = al(a, b)
			return new b9(c, d)
		}
		let cc = Symbol.for("drizzle:PgInlineForeignKeys"),
			cd = Symbol.for("drizzle:EnableRLS")
		class ce extends r {
			static [g] = "PgTable"
			static Symbol = Object.assign({}, r.Symbol, { InlineForeignKeys: cc, EnableRLS: cd });
			[cc] = [];
			[cd] = !1;
			[r.Symbol.ExtraConfigBuilder] = void 0;
			[r.Symbol.ExtraConfigColumns] = {}
		}
		let cf = (a, b, c) =>
			(function (a, b, c, d, e = a) {
				let f = new ce(a, d, e),
					g =
						"function" == typeof b
							? b({
									bigint: ar,
									bigserial: aw,
									boolean: az,
									char: aC,
									cidr: aF,
									customType: aI,
									date: aO,
									doublePrecision: aR,
									inet: aU,
									integer: aX,
									interval: a$,
									json: a1,
									jsonb: a4,
									line: a9,
									macaddr: bc,
									macaddr8: bf,
									numeric: bm,
									point: br,
									geometry: by,
									real: bB,
									serial: bE,
									smallint: bH,
									smallserial: bK,
									text: bN,
									time: bQ,
									timestamp: bV,
									uuid: bY,
									varchar: b_,
									bit: b2,
									halfvec: b5,
									sparsevec: b8,
									vector: cb,
								})
							: b,
					h = Object.fromEntries(
						Object.entries(g).map(([a, b]) => {
							b.setName(a)
							let c = b.build(f)
							return f[cc].push(...b.buildForeignKeys(c, f)), [a, c]
						}),
					),
					i = Object.fromEntries(
						Object.entries(g).map(([a, b]) => (b.setName(a), [a, b.buildExtraConfigColumn(f)])),
					),
					j = Object.assign(f, h)
				return (
					(j[r.Symbol.Columns] = h),
					(j[r.Symbol.ExtraConfigColumns] = i),
					c && (j[ce.Symbol.ExtraConfigBuilder] = c),
					Object.assign(j, { enableRLS: () => ((j[ce.Symbol.EnableRLS] = !0), j) })
				)
			})(a, b, c, void 0)
		class cg {
			constructor(a, b) {
				;(this.unique = a), (this.name = b)
			}
			static [g] = "PgIndexBuilderOn"
			on(...a) {
				return new ch(
					a.map((a) => {
						if (h(a, V)) return a
						let b = new G(a.name, !!a.keyAsName, a.columnType, a.indexConfig)
						return (a.indexConfig = JSON.parse(JSON.stringify(a.defaultConfig))), b
					}),
					this.unique,
					!1,
					this.name,
				)
			}
			onOnly(...a) {
				return new ch(
					a.map((a) => {
						if (h(a, V)) return a
						let b = new G(a.name, !!a.keyAsName, a.columnType, a.indexConfig)
						return (a.indexConfig = a.defaultConfig), b
					}),
					this.unique,
					!0,
					this.name,
				)
			}
			using(a, ...b) {
				return new ch(
					b.map((a) => {
						if (h(a, V)) return a
						let b = new G(a.name, !!a.keyAsName, a.columnType, a.indexConfig)
						return (a.indexConfig = JSON.parse(JSON.stringify(a.defaultConfig))), b
					}),
					this.unique,
					!0,
					this.name,
					a,
				)
			}
		}
		class ch {
			static [g] = "PgIndexBuilder"
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
				return new ci(this.config, a)
			}
		}
		class ci {
			static [g] = "PgIndex"
			config
			constructor(a, b) {
				this.config = { ...a, table: b }
			}
		}
		class cj {
			static [g] = "PgPrimaryKeyBuilder"
			columns
			name
			constructor(a, b) {
				;(this.columns = a), (this.name = b)
			}
			build(a) {
				return new ck(a, this.columns, this.name)
			}
		}
		class ck {
			constructor(a, b, c) {
				;(this.table = a), (this.columns = b), (this.name = c)
			}
			static [g] = "PgPrimaryKey"
			columns
			name
			getName() {
				return this.name ?? `${this.table[ce.Symbol.Name]}_${this.columns.map((a) => a.name).join("_")}_pk`
			}
		}
		function cl(a, b) {
			return "object" != typeof b ||
				null === b ||
				!("mapToDriverValue" in b) ||
				"function" != typeof b.mapToDriverValue ||
				T(a) ||
				h(a, Z) ||
				h(a, ac) ||
				h(a, t) ||
				h(a, r) ||
				h(a, af)
				? a
				: new Z(a, b)
		}
		let cm = (a, b) => $`${a} = ${cl(b, a)}`,
			cn = (a, b) => $`${a} <> ${cl(b, a)}`
		function co(...a) {
			let b = a.filter((a) => void 0 !== a)
			if (0 !== b.length) return new V(1 === b.length ? b : [new U("("), $.join(b, new U(" and ")), new U(")")])
		}
		function cp(...a) {
			let b = a.filter((a) => void 0 !== a)
			if (0 !== b.length) return new V(1 === b.length ? b : [new U("("), $.join(b, new U(" or ")), new U(")")])
		}
		function cq(a) {
			return $`not ${a}`
		}
		let cr = (a, b) => $`${a} > ${cl(b, a)}`,
			cs = (a, b) => $`${a} >= ${cl(b, a)}`,
			ct = (a, b) => $`${a} < ${cl(b, a)}`,
			cu = (a, b) => $`${a} <= ${cl(b, a)}`
		function cv(a, b) {
			return Array.isArray(b)
				? 0 === b.length
					? $`false`
					: $`${a} in ${b.map((b) => cl(b, a))}`
				: $`${a} in ${cl(b, a)}`
		}
		function cw(a, b) {
			return Array.isArray(b)
				? 0 === b.length
					? $`true`
					: $`${a} not in ${b.map((b) => cl(b, a))}`
				: $`${a} not in ${cl(b, a)}`
		}
		function cx(a) {
			return $`${a} is null`
		}
		function cy(a) {
			return $`${a} is not null`
		}
		function cz(a) {
			return $`exists ${a}`
		}
		function cA(a) {
			return $`not exists ${a}`
		}
		function cB(a, b, c) {
			return $`${a} between ${cl(b, a)} and ${cl(c, a)}`
		}
		function cC(a, b, c) {
			return $`${a} not between ${cl(b, a)} and ${cl(c, a)}`
		}
		function cD(a, b) {
			return $`${a} like ${b}`
		}
		function cE(a, b) {
			return $`${a} not like ${b}`
		}
		function cF(a, b) {
			return $`${a} ilike ${b}`
		}
		function cG(a, b) {
			return $`${a} not ilike ${b}`
		}
		function cH(a) {
			return $`${a} asc`
		}
		function cI(a) {
			return $`${a} desc`
		}
		class cJ {
			constructor(a, b, c) {
				;(this.sourceTable = a),
					(this.referencedTable = b),
					(this.relationName = c),
					(this.referencedTableName = b[r.Symbol.Name])
			}
			static [g] = "Relation"
			referencedTableName
			fieldName
		}
		class cK {
			constructor(a, b) {
				;(this.table = a), (this.config = b)
			}
			static [g] = "Relations"
		}
		class cL extends cJ {
			constructor(a, b, c, d) {
				super(a, b, c?.relationName), (this.config = c), (this.isNullable = d)
			}
			static [g] = "One"
			withFieldName(a) {
				let b = new cL(this.sourceTable, this.referencedTable, this.config, this.isNullable)
				return (b.fieldName = a), b
			}
		}
		class cM extends cJ {
			constructor(a, b, c) {
				super(a, b, c?.relationName), (this.config = c)
			}
			static [g] = "Many"
			withFieldName(a) {
				let b = new cM(this.sourceTable, this.referencedTable, this.config)
				return (b.fieldName = a), b
			}
		}
		function cN(a, b) {
			return new cK(a, (a) => Object.fromEntries(Object.entries(b(a)).map(([a, b]) => [a, b.withFieldName(a)])))
		}
		function cO(a) {
			return {
				one: function (b, c) {
					return new cL(a, b, c, c?.fields.reduce((a, b) => a && b.notNull, !0) ?? !1)
				},
				many: function (b, c) {
					return new cM(a, b, c)
				},
			}
		}
		let cP = cf("runs", {
				id: aX().primaryKey().generatedAlwaysAsIdentity(),
				taskMetricsId: aX("task_metrics_id").references(() => cT.id),
				model: bN().notNull(),
				name: bN(),
				description: bN(),
				contextWindow: aX(),
				inputPrice: bB(),
				outputPrice: bB(),
				cacheWritesPrice: bB(),
				cacheReadsPrice: bB(),
				settings: a4().$type(),
				jobToken: bN(),
				pid: aX(),
				socketPath: bN("socket_path").notNull(),
				executionMethod: bN("execution_method").default("vscode").notNull().$type(),
				concurrency: aX().default(2).notNull(),
				timeout: aX().default(5).notNull(),
				passed: aX().default(0).notNull(),
				failed: aX().default(0).notNull(),
				createdAt: bV("created_at").notNull(),
			}),
			cQ = cN(cP, ({ one: a }) => ({ taskMetrics: a(cT, { fields: [cP.taskMetricsId], references: [cT.id] }) })),
			cR = cf(
				"tasks",
				{
					id: aX().primaryKey().generatedAlwaysAsIdentity(),
					runId: aX("run_id")
						.references(() => cP.id, { onDelete: "cascade" })
						.notNull(),
					taskMetricsId: aX("task_metrics_id").references(() => cT.id, { onDelete: "set null" }),
					language: bN().notNull().$type(),
					exercise: bN().notNull(),
					iteration: aX().default(1).notNull(),
					passed: az(),
					startedAt: bV("started_at"),
					finishedAt: bV("finished_at"),
					createdAt: bV("created_at").notNull(),
				},
				(a) => [
					new cg(!0, "tasks_language_exercise_iteration_idx").on(
						a.runId,
						a.language,
						a.exercise,
						a.iteration,
					),
				],
			),
			cS = cN(cR, ({ one: a }) => ({
				run: a(cP, { fields: [cR.runId], references: [cP.id] }),
				taskMetrics: a(cT, { fields: [cR.taskMetricsId], references: [cT.id] }),
			})),
			cT = cf("taskMetrics", {
				id: aX().primaryKey().generatedAlwaysAsIdentity(),
				tokensIn: aX("tokens_in").notNull(),
				tokensOut: aX("tokens_out").notNull(),
				tokensContext: aX("tokens_context").notNull(),
				cacheWrites: aX("cache_writes").notNull(),
				cacheReads: aX("cache_reads").notNull(),
				cost: bB().notNull(),
				duration: aX().notNull(),
				toolUsage: a4("tool_usage").$type(),
				createdAt: bV("created_at").notNull(),
			}),
			cU = cf("toolErrors", {
				id: aX().primaryKey().generatedAlwaysAsIdentity(),
				runId: aX("run_id").references(() => cP.id, { onDelete: "cascade" }),
				taskId: aX("task_id").references(() => cR.id, { onDelete: "cascade" }),
				toolName: bN("tool_name").notNull().$type(),
				error: bN().notNull(),
				createdAt: bV("created_at").notNull(),
			}),
			cV = cN(cU, ({ one: a }) => ({
				run: a(cP, { fields: [cU.runId], references: [cP.id] }),
				task: a(cR, { fields: [cU.taskId], references: [cR.id] }),
			})),
			cW = {
				runs: cP,
				runsRelations: cQ,
				tasks: cR,
				tasksRelations: cS,
				taskMetrics: cT,
				toolErrors: cU,
				toolErrorsRelations: cV,
			}
		function cX(a) {
			return $`sum(${a})`.mapWith(String)
		}
		a.s(
			[
				"runs",
				0,
				cP,
				"runsRelations",
				0,
				cQ,
				"schema",
				0,
				cW,
				"taskMetrics",
				0,
				cT,
				"tasks",
				0,
				cR,
				"tasksRelations",
				0,
				cS,
				"toolErrors",
				0,
				cU,
				"toolErrorsRelations",
				0,
				cV,
			],
			76314,
		)
		class cY extends Error {}
		class cZ extends Error {}
		var c$ = a.i(46786),
			c_ = a.i(22734)
		let c0 = new Map(),
			c1 = new Map(),
			c2 = Symbol("OriginError"),
			c3 = {}
		class c4 extends Promise {
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
					(this[c2] = this.handler.debug
						? Error()
						: this.tagged &&
							(function (a) {
								if (c0.has(a)) return c0.get(a)
								let b = Error.stackTraceLimit
								return (
									(Error.stackTraceLimit = 4),
									c0.set(a, Error()),
									(Error.stackTraceLimit = b),
									c0.get(a)
								)
							})(this.strings))
			}
			get origin() {
				return (
					(this.handler.debug
						? this[c2].stack
						: this.tagged && c1.has(this.strings)
							? c1.get(this.strings)
							: c1.set(this.strings, this[c2].stack).get(this.strings)) || ""
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
								return: () => (c && c(c3), { done: !0 }),
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
		class c5 extends Error {
			constructor(a) {
				super(a.message), (this.name = this.constructor.name), Object.assign(this, a)
			}
		}
		let c6 = function a(b, c, d) {
				let { host: e, port: f } = d || c,
					g = Object.assign(
						Error("write " + b + " " + (c.path || e + ":" + f)),
						{ code: b, errno: b, address: c.path || e },
						c.path ? {} : { port: f },
					)
				return Error.captureStackTrace(g, a), g
			},
			c7 = function a(b) {
				let c = new c5(b)
				return Error.captureStackTrace(c, a), c
			},
			c8 = function a(b, c) {
				let d = Object.assign(Error(b + ": " + c), { code: b })
				return Error.captureStackTrace(d, a), d
			},
			c9 = function a(b) {
				let c = Object.assign(Error(b + " (B) is not supported"), { code: "MESSAGE_NOT_SUPPORTED", name: b })
				return Error.captureStackTrace(c, a), c
			}
		class da {
			then() {
				dn()
			}
			catch() {
				dn()
			}
			finally() {
				dn()
			}
		}
		class db extends da {
			constructor(a) {
				super(), (this.value = du(a))
			}
		}
		class dc extends da {
			constructor(a, b, c) {
				super(), (this.value = a), (this.type = b), (this.array = c)
			}
		}
		class dd extends da {
			constructor(a, b) {
				super(), (this.first = a), (this.rest = b)
			}
			build(a, b, c, d) {
				let e = dm
					.map(([b, c]) => ({ fn: c, i: a.search(b) }))
					.sort((a, b) => a.i - b.i)
					.pop()
				return -1 === e.i ? dt(this.first, d) : e.fn(this.first, this.rest, b, c, d)
			}
		}
		function de(a, b, c, d) {
			let e = a instanceof dc ? a.value : a
			if (
				void 0 === e &&
				(a instanceof dc ? (a.value = d.transform.undefined) : (e = a = d.transform.undefined), void 0 === e)
			)
				throw c8("UNDEFINED_VALUE", "Undefined values are not allowed")
			return (
				"$" +
				c.push(
					a instanceof dc
						? (b.push(a.value),
							a.array
								? a.array[a.type || dv(a.value)] ||
									a.type ||
									(function a(b) {
										return Array.isArray(b) ? a(b[0]) : 1009 * ("string" == typeof b)
									})(a.value)
								: a.type)
						: (b.push(a), dv(a)),
				)
			)
		}
		let df = ds({
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
		function dg(a, b, c, d, e, f) {
			for (let g = 1; g < a.strings.length; g++) (b += dh(b, c, d, e, f) + a.strings[g]), (c = a.args[g])
			return b
		}
		function dh(a, b, c, d, e) {
			return b instanceof dd
				? b.build(a, c, d, e)
				: b instanceof c4
					? di(b, c, d, e)
					: b instanceof db
						? b.value
						: b && b[0] instanceof c4
							? b.reduce((a, b) => a + " " + di(b, c, d, e), "")
							: de(b, c, d, e)
		}
		function di(a, b, c, d) {
			return (a.fragment = !0), dg(a, a.strings[0], a.args[0], b, c, d)
		}
		function dj(a, b, c, d, e) {
			return a.map((a) => "(" + d.map((d) => dh("values", a[d], b, c, e)).join(",") + ")").join(",")
		}
		function dk(a, b, c, d, e) {
			let f = Array.isArray(a[0]),
				g = b.length ? b.flat() : Object.keys(f ? a[0] : a)
			return dj(f ? a : [a], c, d, g, e)
		}
		function dl(a, b, c, d, e) {
			let f
			return ("string" == typeof a && (a = [a].concat(b)), Array.isArray(a))
				? dt(a, e)
				: (b.length ? b.flat() : Object.keys(a))
						.map(
							(b) =>
								((f = a[b]) instanceof c4
									? di(f, c, d, e)
									: f instanceof db
										? f.value
										: de(f, c, d, e)) +
								" as " +
								du(e.transform.column.to ? e.transform.column.to(b) : b),
						)
						.join(",")
		}
		let dm = Object.entries({
			values: dk,
			in: (...a) => {
				let b = dk(...a)
				return "()" === b ? "(null)" : b
			},
			select: dl,
			as: dl,
			returning: dl,
			"\\(": dl,
			update: (a, b, c, d, e) =>
				(b.length ? b.flat() : Object.keys(a)).map(
					(b) => du(e.transform.column.to ? e.transform.column.to(b) : b) + "=" + dh("values", a[b], c, d, e),
				),
			insert(a, b, c, d, e) {
				let f = b.length ? b.flat() : Object.keys(Array.isArray(a) ? a[0] : a)
				return "(" + dt(f, e) + ")values" + dj(Array.isArray(a) ? a : [a], c, d, f, e)
			},
		}).map(([a, b]) => [RegExp("((?:^|[\\s(])" + a + "(?:$|[\\s(]))(?![\\s\\S]*\\1)", "i"), b])
		function dn() {
			throw c8("NOT_TAGGED_CALL", "Query not called as a tagged template literal")
		}
		let dp = df.serializers,
			dq = df.parsers,
			dr = function (a) {
				let b = ds(a || {})
				return { serializers: Object.assign({}, dp, b.serializers), parsers: Object.assign({}, dq, b.parsers) }
			}
		function ds(a) {
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
		function dt(a, { transform: { column: b } }) {
			return a.map((a) => du(b.to ? b.to(a) : a)).join(",")
		}
		let du = function (a) {
				return '"' + a.replace(/"/g, '""').replace(/\./g, '"."') + '"'
			},
			dv = function a(b) {
				return b instanceof dc
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
			dw = /\\/g,
			dx = /"/g,
			dy = function a(b, c, d, e) {
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
										throw c8("UNDEFINED_VALUE", "Undefined values are not allowed")
									return null === a
										? "null"
										: '"' +
												(c ? c(a.type ? a.value : a) : "" + a)
													.replace(dw, "\\\\")
													.replace(dx, '\\"') +
												'"'
								})
								.join(g) +
							"}"
			},
			dz = { i: 0, char: null, str: "", quoted: !1, last: 0 },
			dA = (a) => {
				let b = a[0]
				for (let c = 1; c < a.length; c++) b += "_" === a[c] ? a[++c].toUpperCase() : a[c]
				return b
			},
			dB = (a) => {
				let b = a[0].toUpperCase()
				for (let c = 1; c < a.length; c++) b += "_" === a[c] ? a[++c].toUpperCase() : a[c]
				return b
			},
			dC = (a) => a.replace(/_/g, "-"),
			dD = (a) => a.replace(/([A-Z])/g, "_$1").toLowerCase(),
			dE = (a) => (a.slice(0, 1) + a.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase(),
			dF = (a) => a.replace(/-/g, "_")
		function dG(a) {
			return function b(c, d) {
				return "object" == typeof c && null !== c && (114 === d.type || 3802 === d.type)
					? Array.isArray(c)
						? c.map((a) => b(a, d))
						: Object.entries(c).reduce((c, [e, f]) => Object.assign(c, { [a(e)]: b(f, d) }), {})
					: c
			}
		}
		;(dA.column = { from: dA }), (dA.value = { from: dG(dA) }), (dD.column = { to: dD })
		let dH = { ...dA }
		;(dH.column.to = dD), (dB.column = { from: dB }), (dB.value = { from: dG(dB) }), (dE.column = { to: dE })
		let dI = { ...dB }
		;(dI.column.to = dE), (dC.column = { from: dC }), (dC.value = { from: dG(dC) }), (dF.column = { to: dF })
		let dJ = { ...dC }
		dJ.column.to = dF
		var dK = a.i(4446),
			dL = a.i(55004),
			dM = a.i(54799),
			dN = a.i(88947),
			dO = a.i(60438)
		class dP extends Array {
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
		let dQ = function (a = []) {
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
			dR = Buffer.allocUnsafe(256),
			dS = Object.assign(
				function () {
					return (dS.i = 0), dS
				},
				"BCcDdEFfHPpQSX".split("").reduce((a, b) => {
					let c = b.charCodeAt(0)
					return (a[b] = () => ((dR[0] = c), (dS.i = 5), dS)), a
				}, {}),
				{
					N: "\0",
					i: 0,
					inc: (a) => ((dS.i += a), dS),
					str(a) {
						let b = Buffer.byteLength(a)
						return dT(b), (dS.i += dR.write(a, dS.i, b, "utf8")), dS
					},
					i16: (a) => (dT(2), dR.writeUInt16BE(a, dS.i), (dS.i += 2), dS),
					i32: (a, b) => (
						b || 0 === b ? dR.writeUInt32BE(a, b) : (dT(4), dR.writeUInt32BE(a, dS.i), (dS.i += 4)), dS
					),
					z: (a) => (dT(a), dR.fill(0, dS.i, dS.i + a), (dS.i += a), dS),
					raw: (a) => ((dR = Buffer.concat([dR.subarray(0, dS.i), a])), (dS.i = dR.length), dS),
					end(a = 1) {
						dR.writeUInt32BE(dS.i - a, a)
						let b = dR.subarray(0, dS.i)
						return (dS.i = 0), (dR = Buffer.allocUnsafe(256)), b
					},
				},
			)
		function dT(a) {
			if (dR.length - dS.i < a) {
				let b = dR,
					c = b.length
				;(dR = Buffer.allocUnsafe(c + (c >> 1) + a)), b.copy(dR)
			}
		}
		let dU = function a(b, c = {}, { onopen: d = d_, onend: e = d_, onclose: f = d_ } = {}) {
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
					v = dQ(),
					w = dV++,
					x = { pid: null, secret: null },
					y = d5(at, b.idle_timeout),
					z = d5(at, b.max_lifetime),
					A = d5(function () {
						ar(c6("CONNECT_TIMEOUT", b, B)), B.destroy()
					}, b.connect_timeout),
					B = null,
					C,
					D = new dP(),
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
						a = b.socket ? await Promise.resolve(b.socket(b)) : new dK.default.Socket()
					} catch (a) {
						aq(a)
						return
					}
					return a.on("error", aq), a.on("close", av), a.on("drain", al), a
				}
				async function ae({ pid: a, secret: b }, c, d) {
					try {
						;(C = dS().i32(16).i32(0x4d2162e).i32(a).i32(b).end(16)),
							await an(),
							B.once("error", d),
							B.once("close", c)
					} catch (a) {
						d(a)
					}
				}
				function af(a) {
					if (T) return as(a, c6("CONNECTION_DESTROYED", b))
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
								(f = dg(c, c.strings[0], c.args[0], d, e, b)),
								c.tagged || c.args.forEach((a) => de(a, d, e, b)),
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
											throw c8(
												"MAX_PARAMETERS_EXCEEDED",
												"Max number of parameters (65534) exceeded",
											)
										return a.options.simple
											? dS()
													.Q()
													.str(a.statement.string + dS.N)
													.end()
											: a.describeFirst
												? Buffer.concat([ag(a), dX])
												: a.prepare
													? a.prepared
														? ah(a)
														: Buffer.concat([ag(a), ah(a)])
													: ((b = a),
														Buffer.concat([
															aF(b.statement.string, b.parameters, b.statement.types),
															d$,
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
							return 0 === v.length && ai(dW), ar(a), !0
						}
				}
				function ag(a) {
					return Buffer.concat([
						aF(a.statement.string, a.parameters, a.statement.types, a.statement.name),
						(function (a, b = "") {
							return dS()
								.D()
								.str("S")
								.str(b + dS.N)
								.end()
						})("S", a.statement.name),
					])
				}
				function ah(a) {
					return Buffer.concat([
						(function (a, c, d = "", e = "") {
							let f, g
							return (
								dS()
									.B()
									.str(e + dS.N)
									.str(d + dS.N)
									.i16(0)
									.i16(a.length),
								a.forEach((d, e) => {
									if (null === d) return dS.i32(0xffffffff)
									;(g = c[e]),
										(a[e] = d = g in b.serializers ? b.serializers[g](d) : "" + d),
										(f = dS.i),
										dS
											.inc(4)
											.str(d)
											.i32(dS.i - f - 4, f)
								}),
								dS.i16(0),
								dS.end()
							)
						})(a.parameters, a.statement.types, a.statement.name, a.cursorName),
						a.cursorFn ? aG("", a.cursorRows) : dZ,
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
					if ((ai(dY), !(await new Promise((a) => B.once("data", (b) => a(83 === b[0])))) && "prefer" === g))
						return ap()
					B.removeAllListeners(),
						(B = dL.default.connect({
							socket: B,
							servername: dK.default.isIP(B.host) ? void 0 : B.host,
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
															let [c, d] = a.toString("utf8", 5, a.length - 1).split(dS.N)
															;(G[c] = d),
																b.parameters[c] !== d &&
																	((b.parameters[c] = d), q && q(c, d))
														}
													: 90 === e
														? function (c) {
																if (
																	(aa && aa.options.simple && aa.resolve(V || D),
																	(aa = V = null),
																	(D = new dP()),
																	A.cancel(),
																	W)
																) {
																	if (u)
																		if (
																			!G.in_hot_standby ||
																			!G.default_transaction_read_only
																		)
																			return (function () {
																				let a = new c4(
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
																					(D.count && aa.cursorFn(D), ai(dW)),
																				aa.resolve(D))
																		: ar(
																				c8(
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
																							(D = new dP()),
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
																							ai(dW)
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
																									ai(dW)
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
																										ai(dW)
																									let d = c7(d2(a))
																									aa && aa.retried
																										? ar(aa.retried)
																										: aa &&
																											  aa.prepared &&
																											  d0.has(
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
																													new dN.default.Writable(
																														{
																															autoDestroy:
																																!0,
																															write(
																																a,
																																b,
																																c,
																															) {
																																B.write(
																																	dS()
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
																																		dS()
																																			.f()
																																			.str(
																																				a +
																																					dS.N,
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
																																	dS()
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
																																d2(
																																	a,
																																),
																															)
																														: console.log(
																																d2(
																																	a,
																																),
																															)
																												}
																											: 72 === e
																												? function () {
																														;(Y =
																															new dN.default.Readable(
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
																																		c9(
																																			"FunctionCallResponse",
																																		),
																																	)
																																}
																															: 118 ===
																																  e
																																? function () {
																																		ar(
																																			c9(
																																				"NegotiateProtocolVersion",
																																			),
																																		)
																																	}
																																: 87 ===
																																	  e
																																	? function () {
																																			;(Y =
																																				new dN.default.Duplex(
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
																																								dS()
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
																																									dS()
																																										.f()
																																										.str(
																																											a +
																																												dS.N,
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
																																								dS()
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
								aa && (aa.cursorFn || aa.describeFirst) && ai(dW), ar(a)
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
					setTimeout(an, K ? K + P - dO.performance.now() : 0)
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
							dS()
								.inc(4)
								.i16(3)
								.z(2)
								.str(
									Object.entries(
										Object.assign({ user: i, database: l, client_encoding: "UTF8" }, b.connection),
									)
										.filter(([, a]) => a)
										.map(([a, b]) => a + dS.N + b)
										.join(dS.N),
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
						(Y || aa || W || v.length) && aq(c6("CONNECTION_DESTROYED", b)),
						clearImmediate(S),
						B &&
							(B.removeListener("data", am),
							B.removeListener("connect", ap),
							"open" === B.readyState && B.end(dS().X().end())),
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
					!a && (aa || v.length) && aq(c6("CONNECTION_CLOSED", b, B)),
						(K = dO.performance.now()),
						a && b.shared.retries++,
						(P = ("function" == typeof t ? t(b.shared.retries) : t) * 1e3),
						f(ac, c6("CONNECTION_CLOSED", b, B))
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
												a.toString("utf8", 9).split(dS.N, 1)[0].slice(2) !== R &&
													(ar(
														c8(
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
											: d_)(a, b)
				}
				async function ay() {
					let a = await aC()
					ai(dS().p().str(a).z(1).end())
				}
				async function az(a) {
					let b = "md5" + (await d3(Buffer.concat([Buffer.from(await d3((await aC()) + i)), a.subarray(9)])))
					ai(dS().p().str(b).z(1).end())
				}
				async function aA() {
					;(_ = (await dM.default.randomBytes(18)).toString("base64")),
						dS()
							.p()
							.str("SCRAM-SHA-256" + dS.N)
					let a = dS.i
					ai(
						dS
							.inc(4)
							.str("n,,n=*,r=" + _)
							.i32(dS.i - a - 4, a)
							.end(),
					)
				}
				async function aB(a) {
					var b
					let c = a
							.toString("utf8", 9)
							.split(",")
							.reduce((a, b) => ((a[b[0]] = b.slice(2)), a), {}),
						d = await dM.default.pbkdf2Sync(
							await aC(),
							Buffer.from(c.s, "base64"),
							parseInt(c.i),
							32,
							"sha256",
						),
						e = await d4(d, "Client Key"),
						f = "n=*,r=" + _ + ",r=" + c.r + ",s=" + c.s + ",i=" + c.i + ",c=biws,r=" + c.r
					R = (await d4(await d4(d, "Server Key"), f)).toString("base64")
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
								await d4(await ((b = e), dM.default.createHash("sha256").update(b).digest()), f),
							),
						).toString("base64")
					ai(dS().p().str(g).end())
				}
				function aC() {
					return Promise.resolve("function" == typeof b.pass ? b.pass() : b.pass)
				}
				async function aD() {
					;(F = !1),
						(
							await new c4(
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
										(dz.i = dz.last = 0),
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
										})(dz, a, d, c)
									)),
									(b.parsers[c].array = !0),
									(b.serializers[c] = (d) => dy(d, b.serializers[a], b, c))
							})(a, c),
						)
				}
				async function aE() {
					try {
						let a = await Promise.resolve(aa.cursorFn(D))
						;(Q = 0),
							a === c3
								? ai(
										(function (a = "") {
											return Buffer.concat([
												dS()
													.C()
													.str("P")
													.str(a + dS.N)
													.end(),
												dS().S().end(),
											])
										})(aa.portal),
									)
								: ((D = new dP()), ai(aG("", aa.cursorRows)))
					} catch (a) {
						ai(dW), aa.reject(a)
					}
				}
				function aF(a, b, c, d = "") {
					return (
						dS()
							.P()
							.str(d + dS.N)
							.str(a + dS.N)
							.i16(b.length),
						b.forEach((a, b) => dS.i32(c[b] || 0)),
						dS.end()
					)
				}
				function aG(a = "", b = 0) {
					return Buffer.concat([
						dS()
							.E()
							.str(a + dS.N)
							.i32(b)
							.end(),
						dX,
					])
				}
			},
			dV = 1,
			dW = dS().S().end(),
			dX = dS().H().end(),
			dY = dS().i32(8).i32(0x4d2162f).end(8),
			dZ = Buffer.concat([dS().E().str(dS.N).i32(0).end(), dW]),
			d$ = dS().D().str("S").str(dS.N).end(),
			d_ = () => {},
			d0 = new Set(["FetchPreparedStatement", "RevalidateCachedQuery", "transformAssignedExpr"]),
			d1 = {
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
		function d2(a) {
			let b = {},
				c = 5
			for (let d = 5; d < a.length - 1; d++)
				0 === a[d] && ((b[d1[a[c]]] = a.toString("utf8", c + 1, d)), (c = d + 1))
			return b
		}
		function d3(a) {
			return dM.default.createHash("md5").update(a).digest("hex")
		}
		function d4(a, b) {
			return dM.default.createHmac("sha256", a).update(b).digest()
		}
		function d5(a, b) {
			let c
			if (!(b = "function" == typeof b ? b() : b)) return { cancel: d_, start: d_ }
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
		let d6 = () => {}
		function d7(a, b, c, d) {
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
		function d8(a, b, c = 393216) {
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
								new dN.default.Readable({
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
								new dN.default.Writable({
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
		Object.assign(ea, {
			PostgresError: c5,
			toPascal: dB,
			pascal: dI,
			toCamel: dA,
			camel: dH,
			toKebab: dC,
			kebab: dJ,
			fromPascal: dE,
			fromCamel: dD,
			fromKebab: dF,
			BigInt: { to: 20, from: [20], parse: (a) => BigInt(a), serialize: (a) => a.toString() },
		})
		let d9 = ea
		function ea(a, b) {
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
									return c$.default.userInfo().username
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
							max_lifetime: ec,
							max_pipeline: 100,
							backoff: eb,
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
						...dr(e.types),
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
						async function l(a, h, j = d6, k = d6) {
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
														{ row: d } = d7(a, c.columns, (b += 7), k)
													j(d, { command: "insert", relation: c })
												},
												D: (a) => {
													let b = 1,
														c = e[a.readUInt32BE(b)],
														d = 75 === a[(b += 4)]
													j(d || 79 === a[b] ? d7(a, c.columns, (b += 3), k).row : null, {
														command: "delete",
														relation: c,
														key: d,
													})
												},
												U: (a) => {
													let b = 1,
														c = e[a.readUInt32BE(b)],
														d = 75 === a[(b += 4)],
														f = d || 79 === a[b] ? d7(a, c.columns, (b += 3), k) : null
													f && (b = f.i)
													let { row: g } = d7(a, c.columns, b + 3, k)
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
					})(ea, { ...c }),
				e = !1,
				f = dQ(),
				g = dQ(),
				h = dQ(),
				i = dQ(),
				j = dQ(),
				k = dQ(),
				l = dQ(),
				m = dQ(),
				n = { connecting: g, reserved: h, closed: i, ended: j, open: k, busy: l, full: m },
				o = [...Array(c.max)].map(() => dU(c, n, { onopen: E, onend: D, onclose: F })),
				p = q(function (a) {
					return e
						? a.reject(c6("CONNECTION_ENDED", c, c))
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
					largeObject: d8.bind(null, p),
					subscribe: d,
					CLOSE: c3,
					END: c3,
					PostgresError: c5,
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
					Object.entries(c.types).reduce((a, [b, c]) => ((a[b] = (a) => new dc(a, c.to)), a), b),
					Object.assign(d, {
						types: b,
						typed: b,
						unsafe: function (b, c = [], d = {}) {
							return (
								2 != arguments.length || Array.isArray(c) || ((d = c), (c = [])),
								new c4([b], c, a, y, {
									prepare: !1,
									...d,
									simple: "simple" in d ? d.simple : 0 === c.length,
								})
							)
						},
						notify: s,
						array: function a(b, d) {
							return Array.isArray(b)
								? new dc(b, d || (b.length ? dv(b) || 25 : 0), c.shared.typeArrayMap)
								: a(Array.from(arguments))
						},
						json: w,
						file: function (b, c = [], d = {}) {
							return (
								2 != arguments.length || Array.isArray(c) || ((d = c), (c = [])),
								new c4(
									[],
									c,
									(c) => {
										c_.default.readFile(b, "utf8", (b, d) => {
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
					return new dc(a, b)
				}
				function d(b, ...e) {
					return b && Array.isArray(b.raw)
						? new c4(b, e, a, y)
						: "string" != typeof b || e.length
							? new dd(b, e)
							: new db(c.transform.column.to ? c.transform.column.to(b) : b)
				}
			}
			async function r(a, b, d) {
				let e = { fn: b, onlisten: d },
					f =
						r.sql ||
						(r.sql = ea({
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
				let a = dQ(),
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
				let c = dQ(),
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
							(a instanceof c5 && "25P02" === a.code && h) || a)
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
				return new dc(a, 3802)
			}
			function x(a, b) {
				return a.execute(b) ? v(a, l) : v(a, m)
			}
			function y(a) {
				return new Promise((b, d) => {
					a.state
						? a.active
							? dU(c).cancel(a.state, b, d)
							: (a.cancelled = { resolve: b, reject: d })
						: (f.remove(a),
							(a.cancelled = !0),
							a.reject(c8("57014", "canceling statement due to user request")),
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
					f.shift().reject(c6("CONNECTION_DESTROYED", c))
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
		function eb(a) {
			return (0.5 + Math.random() / 2) * Math.min(3 ** a / 100, 20)
		}
		function ec() {
			return 60 * (30 + 30 * Math.random())
		}
		class ed {
			static [g] = "ConsoleLogWriter"
			write(a) {
				console.log(a)
			}
		}
		class ee {
			static [g] = "DefaultLogger"
			writer
			constructor(a) {
				this.writer = a?.writer ?? new ed()
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
		class ef {
			static [g] = "NoopLogger"
			logQuery() {}
		}
		class eg {
			static [g] = "QueryPromise";
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
		class eh {
			constructor(a) {
				this.table = a
			}
			static [g] = "ColumnAliasProxyHandler"
			get(a, b) {
				return "table" === b ? this.table : a[b]
			}
		}
		class ei {
			constructor(a, b) {
				;(this.alias = a), (this.replaceOriginalName = b)
			}
			static [g] = "TableAliasProxyHandler"
			get(a, b) {
				if (b === r.Symbol.IsAlias) return !0
				if (b === r.Symbol.Name || (this.replaceOriginalName && b === r.Symbol.OriginalName)) return this.alias
				if (b === R) return { ...a[R], name: this.alias, isAlias: !0 }
				if (b === r.Symbol.Columns) {
					let b = a[r.Symbol.Columns]
					if (!b) return b
					let c = {}
					return (
						Object.keys(b).map((d) => {
							c[d] = new Proxy(b[d], new eh(new Proxy(a, this)))
						}),
						c
					)
				}
				let c = a[b]
				return h(c, t) ? new Proxy(c, new eh(new Proxy(a, this))) : c
			}
		}
		class ej {
			constructor(a) {
				this.alias = a
			}
			static [g] = "RelationTableAliasProxyHandler"
			get(a, b) {
				return "sourceTable" === b ? ek(a.sourceTable, this.alias) : a[b]
			}
		}
		function ek(a, b) {
			return new Proxy(a, new ei(b, !1))
		}
		function el(a, b) {
			return new Proxy(a, new eh(new Proxy(a.table, new ei(b, !1))))
		}
		function em(a, b) {
			return new V.Aliased(en(a.sql, b), a.fieldAlias)
		}
		function en(a, b) {
			return $.join(
				a.queryChunks.map((a) => (h(a, t) ? el(a, b) : h(a, V) ? en(a, b) : h(a, V.Aliased) ? em(a, b) : a)),
			)
		}
		class eo {
			static [g] = "SelectionProxyHandler"
			config
			constructor(a) {
				this.config = { ...a }
			}
			get(a, b) {
				if ("_" === b) return { ...a._, selectedFields: new Proxy(a._.selectedFields, this) }
				if (b === R) return { ...a[R], selectedFields: new Proxy(a[R].selectedFields, this) }
				if ("symbol" == typeof b) return a[b]
				let c = (h(a, O) ? a._.selectedFields : h(a, af) ? a[R].selectedFields : a)[b]
				if (h(c, V.Aliased)) {
					if ("sql" === this.config.sqlAliasedBehavior && !c.isSelectionField) return c.sql
					let a = c.clone()
					return (a.isSelectionField = !0), a
				}
				if (h(c, V)) {
					if ("sql" === this.config.sqlBehavior) return c
					throw Error(
						`You tried to reference "${b}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`,
					)
				}
				return h(c, t)
					? this.config.alias
						? new Proxy(
								c,
								new eh(
									new Proxy(
										c.table,
										new ei(this.config.alias, this.config.replaceOriginalName ?? !1),
									),
								),
							)
						: c
					: "object" != typeof c || null === c
						? c
						: new Proxy(c, new eo(this.config))
			}
		}
		class ep {
			constructor(a, b) {
				;(this.name = a), (this.value = b)
			}
			static [g] = "PgCheckBuilder"
			brand
			build(a) {
				return new eq(a, this)
			}
		}
		class eq {
			constructor(a, b) {
				;(this.table = a), (this.name = b.name), (this.value = b.value)
			}
			static [g] = "PgCheck"
			name
			value
		}
		class er {
			constructor(a, b) {
				;(this.name = a),
					b &&
						((this.as = b.as),
						(this.for = b.for),
						(this.to = b.to),
						(this.using = b.using),
						(this.withCheck = b.withCheck))
			}
			static [g] = "PgPolicy"
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
		let es = Symbol.for("drizzle:PgViewConfig")
		function et(a) {
			return (a.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? [])
				.map((a) => a.toLowerCase())
				.join("_")
		}
		function eu(a) {
			return (a.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []).reduce(
				(a, b, c) => a + (0 === c ? b.toLowerCase() : `${b[0].toUpperCase()}${b.slice(1)}`),
				"",
			)
		}
		function ev(a) {
			return a
		}
		class ew {
			static [g] = "CasingCache"
			cache = {}
			cachedTables = {}
			convert
			constructor(a) {
				this.convert = "snake_case" === a ? et : "camelCase" === a ? eu : ev
			}
			getColumnCasing(a) {
				if (!a.keyAsName) return a.name
				let b = a.table[r.Symbol.Schema] ?? "public",
					c = a.table[r.Symbol.OriginalName],
					d = `${b}.${c}.${a.name}`
				return this.cache[d] || this.cacheTable(a.table), this.cache[d]
			}
			cacheTable(a) {
				let b = a[r.Symbol.Schema] ?? "public",
					c = a[r.Symbol.OriginalName],
					d = `${b}.${c}`
				if (!this.cachedTables[d]) {
					for (let b of Object.values(a[r.Symbol.Columns])) {
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
		class ex extends Error {
			static [g] = "DrizzleError"
			constructor({ message: a, cause: b }) {
				super(a), (this.name = "DrizzleError"), (this.cause = b)
			}
		}
		class ey extends ex {
			static [g] = "TransactionRollbackError"
			constructor() {
				super({ message: "Rollback" })
			}
		}
		class ez extends af {
			static [g] = "PgViewBase"
		}
		class eA {
			static [g] = "PgDialect"
			casing
			constructor(a) {
				this.casing = new ew(a?.casing)
			}
			async migrate(a, b, c) {
				let d = "string" == typeof c ? "__drizzle_migrations" : (c.migrationsTable ?? "__drizzle_migrations"),
					e = "string" == typeof c ? "drizzle" : (c.migrationsSchema ?? "drizzle"),
					f = $`
			CREATE TABLE IF NOT EXISTS ${$.identifier(e)}.${$.identifier(d)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`
				await b.execute($`CREATE SCHEMA IF NOT EXISTS ${$.identifier(e)}`), await b.execute(f)
				let g = (
					await b.all(
						$`select id, hash, created_at from ${$.identifier(e)}.${$.identifier(d)} order by created_at desc limit 1`,
					)
				)[0]
				await b.transaction(async (b) => {
					for await (let c of a)
						if (!g || Number(g.created_at) < c.folderMillis) {
							for (let a of c.sql) await b.execute($.raw(a))
							await b.execute(
								$`insert into ${$.identifier(e)}.${$.identifier(d)} ("hash", "created_at") values(${c.hash}, ${c.folderMillis})`,
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
				let b = [$`with `]
				for (let [c, d] of a.entries())
					b.push($`${$.identifier(d._.alias)} as (${d._.sql})`), c < a.length - 1 && b.push($`, `)
				return b.push($` `), $.join(b)
			}
			buildDeleteQuery({ table: a, where: b, returning: c, withList: d }) {
				let e = this.buildWithCTE(d),
					f = c ? $` returning ${this.buildSelection(c, { isSingleTable: !0 })}` : void 0,
					g = b ? $` where ${b}` : void 0
				return $`${e}delete from ${a}${g}${f}`
			}
			buildUpdateSet(a, b) {
				let c = a[r.Symbol.Columns],
					d = Object.keys(c).filter((a) => void 0 !== b[a] || c[a]?.onUpdateFn !== void 0),
					e = d.length
				return $.join(
					d.flatMap((a, d) => {
						let f = c[a],
							g = b[a] ?? $.param(f.onUpdateFn(), f),
							h = $`${$.identifier(this.casing.getColumnCasing(f))} = ${g}`
						return d < e - 1 ? [h, $.raw(", ")] : [h]
					}),
				)
			}
			buildUpdateQuery({ table: a, set: b, where: c, returning: d, withList: e, from: f, joins: g }) {
				let h = this.buildWithCTE(e),
					i = a[ce.Symbol.Name],
					j = a[ce.Symbol.Schema],
					k = a[ce.Symbol.OriginalName],
					l = i === k ? void 0 : i,
					m = $`${j ? $`${$.identifier(j)}.` : void 0}${$.identifier(k)}${l && $` ${$.identifier(l)}`}`,
					n = this.buildUpdateSet(a, b),
					o = f && $.join([$.raw(" from "), this.buildFromTable(f)]),
					p = this.buildJoins(g),
					q = d ? $` returning ${this.buildSelection(d, { isSingleTable: !f })}` : void 0,
					r = c ? $` where ${c}` : void 0
				return $`${h}update ${m} set ${n}${o}${p}${r}${q}`
			}
			buildSelection(a, { isSingleTable: b = !1 } = {}) {
				let c = a.length,
					d = a.flatMap(({ field: a }, d) => {
						let e = []
						if (h(a, V.Aliased) && a.isSelectionField) e.push($.identifier(a.fieldAlias))
						else if (h(a, V.Aliased) || h(a, V)) {
							let c = h(a, V.Aliased) ? a.sql : a
							b
								? e.push(
										new V(
											c.queryChunks.map((a) =>
												h(a, E) ? $.identifier(this.casing.getColumnCasing(a)) : a,
											),
										),
									)
								: e.push(c),
								h(a, V.Aliased) && e.push($` as ${$.identifier(a.fieldAlias)}`)
						} else h(a, t) && (b ? e.push($.identifier(this.casing.getColumnCasing(a))) : e.push(a))
						return d < c - 1 && e.push($`, `), e
					})
				return $.join(d)
			}
			buildJoins(a) {
				if (!a || 0 === a.length) return
				let b = []
				for (let [c, d] of a.entries()) {
					0 === c && b.push($` `)
					let e = d.table,
						f = d.lateral ? $` lateral` : void 0,
						g = d.on ? $` on ${d.on}` : void 0
					if (h(e, ce)) {
						let a = e[ce.Symbol.Name],
							c = e[ce.Symbol.Schema],
							h = e[ce.Symbol.OriginalName],
							i = a === h ? void 0 : d.alias
						b.push(
							$`${$.raw(d.joinType)} join${f} ${c ? $`${$.identifier(c)}.` : void 0}${$.identifier(h)}${i && $` ${$.identifier(i)}`}${g}`,
						)
					} else if (h(e, af)) {
						let a = e[R].name,
							c = e[R].schema,
							h = e[R].originalName,
							i = a === h ? void 0 : d.alias
						b.push(
							$`${$.raw(d.joinType)} join${f} ${c ? $`${$.identifier(c)}.` : void 0}${$.identifier(h)}${i && $` ${$.identifier(i)}`}${g}`,
						)
					} else b.push($`${$.raw(d.joinType)} join${f} ${e}${g}`)
					c < a.length - 1 && b.push($` `)
				}
				return $.join(b)
			}
			buildFromTable(a) {
				if (h(a, r) && a[r.Symbol.IsAlias]) {
					let b = $`${$.identifier(a[r.Symbol.OriginalName])}`
					return (
						a[r.Symbol.Schema] && (b = $`${$.identifier(a[r.Symbol.Schema])}.${b}`),
						$`${b} ${$.identifier(a[r.Symbol.Name])}`
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
				orderBy: j,
				groupBy: k,
				limit: l,
				offset: m,
				lockingClause: n,
				distinct: o,
				setOperators: p,
			}) {
				let q,
					s,
					u,
					v = c ?? ag(b)
				for (let a of v) {
					let b
					if (
						h(a.field, t) &&
						a.field.table[i] !== (h(f, O) ? f._.alias : h(f, ez) ? f[R].name : h(f, V) ? void 0 : f[i]) &&
						((b = a.field.table),
						!g?.some(({ alias: a }) => a === (b[r.Symbol.IsAlias] ? b[i] : b[r.Symbol.BaseName])))
					) {
						let b = a.field.table[i]
						throw Error(
							`Your "${a.path.join("->")}" field references a column "${b}"."${a.field.name}", but the table "${b}" is not part of the query! Did you forget to join it?`,
						)
					}
				}
				let w = !g || 0 === g.length,
					x = this.buildWithCTE(a)
				o && (q = !0 === o ? $` distinct` : $` distinct on (${$.join(o.on, $`, `)})`)
				let y = this.buildSelection(v, { isSingleTable: w }),
					z = this.buildFromTable(f),
					A = this.buildJoins(g),
					B = d ? $` where ${d}` : void 0,
					C = e ? $` having ${e}` : void 0
				j && j.length > 0 && (s = $` order by ${$.join(j, $`, `)}`),
					k && k.length > 0 && (u = $` group by ${$.join(k, $`, `)}`)
				let D = "object" == typeof l || ("number" == typeof l && l >= 0) ? $` limit ${l}` : void 0,
					E = m ? $` offset ${m}` : void 0,
					F = $.empty()
				if (n) {
					let a = $` for ${$.raw(n.strength)}`
					n.config.of &&
						a.append($` of ${$.join(Array.isArray(n.config.of) ? n.config.of : [n.config.of], $`, `)}`),
						n.config.noWait ? a.append($` nowait`) : n.config.skipLocked && a.append($` skip locked`),
						F.append(a)
				}
				let G = $`${x}select${q} ${y} from ${z}${A}${B}${u}${C}${s}${D}${E}${F}`
				return p.length > 0 ? this.buildSetOperations(G, p) : G
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
				let i,
					j = $`(${a.getSQL()}) `,
					k = $`(${d.getSQL()})`
				if (f && f.length > 0) {
					let a = []
					for (let b of f)
						if (h(b, E)) a.push($.identifier(b.name))
						else if (h(b, V)) {
							for (let a = 0; a < b.queryChunks.length; a++) {
								let c = b.queryChunks[a]
								h(c, E) && (b.queryChunks[a] = $.identifier(c.name))
							}
							a.push($`${b}`)
						} else a.push($`${b}`)
					i = $` order by ${$.join(a, $`, `)} `
				}
				let l = "object" == typeof e || ("number" == typeof e && e >= 0) ? $` limit ${e}` : void 0,
					m = $.raw(`${b} ${c ? "all " : ""}`),
					n = g ? $` offset ${g}` : void 0
				return $`${j}${m}${k}${i}${l}${n}`
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
				let i = [],
					j = Object.entries(a[r.Symbol.Columns]).filter(([a, b]) => !b.shouldDisableInsert()),
					k = j.map(([, a]) => $.identifier(this.casing.getColumnCasing(a)))
				if (f) h(b, V) ? i.push(b) : i.push(b.getSQL())
				else
					for (let [a, c] of (i.push($.raw("values ")), b.entries())) {
						let d = []
						for (let [a, b] of j) {
							let e = c[a]
							if (void 0 === e || (h(e, Z) && void 0 === e.value))
								if (void 0 !== b.defaultFn) {
									let a = b.defaultFn(),
										c = h(a, V) ? a : $.param(a, b)
									d.push(c)
								} else if (b.default || void 0 === b.onUpdateFn) d.push($`default`)
								else {
									let a = b.onUpdateFn(),
										c = h(a, V) ? a : $.param(a, b)
									d.push(c)
								}
							else d.push(e)
						}
						i.push(d), a < b.length - 1 && i.push($`, `)
					}
				let l = this.buildWithCTE(e),
					m = $.join(i),
					n = d ? $` returning ${this.buildSelection(d, { isSingleTable: !0 })}` : void 0,
					o = c ? $` on conflict ${c}` : void 0,
					p = !0 === g ? $`overriding system value ` : void 0
				return $`${l}insert into ${a} ${k} ${p}${m}${o}${n}`
			}
			buildRefreshMaterializedViewQuery({ view: a, concurrently: b, withNoData: c }) {
				let d = b ? $` concurrently` : void 0,
					e = c ? $` with no data` : void 0
				return $`refresh materialized view${d} ${a}${e}`
			}
			prepareTyping(a) {
				if (h(a, a3) || h(a, a0)) return "json"
				if (h(a, bh)) return "decimal"
				if (h(a, bP)) return "time"
				if (h(a, bS) || h(a, bU)) return "timestamp"
				if (h(a, aL) || h(a, aN)) return "date"
				else if (h(a, bX)) return "uuid"
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
				nestedQueryRelation: i,
				joinOn: j,
			}) {
				let k,
					l = [],
					m,
					n,
					o = [],
					p,
					q = []
				if (!0 === f)
					l = Object.entries(e.columns).map(([a, b]) => ({
						dbKey: b.name,
						tsKey: a,
						field: el(b, g),
						relationTableTsKey: void 0,
						isJson: !1,
						selection: [],
					}))
				else {
					let d = Object.fromEntries(Object.entries(e.columns).map(([a, b]) => [a, el(b, g)]))
					if (f.where) {
						let a =
							"function" == typeof f.where
								? f.where(d, {
										and: co,
										between: cB,
										eq: cm,
										exists: cz,
										gt: cr,
										gte: cs,
										ilike: cF,
										inArray: cv,
										isNull: cx,
										isNotNull: cy,
										like: cD,
										lt: ct,
										lte: cu,
										ne: cn,
										not: cq,
										notBetween: cC,
										notExists: cA,
										notLike: cE,
										notIlike: cG,
										notInArray: cw,
										or: cp,
										sql: $,
									})
								: f.where
						p = a && en(a, g)
					}
					let i = [],
						j = []
					if (f.columns) {
						let a = !1
						for (let [b, c] of Object.entries(f.columns))
							void 0 !== c && b in e.columns && (a || !0 !== c || (a = !0), j.push(b))
						j.length > 0 &&
							(j = a
								? j.filter((a) => f.columns?.[a] === !0)
								: Object.keys(e.columns).filter((a) => !j.includes(a)))
					} else j = Object.keys(e.columns)
					for (let a of j) {
						let b = e.columns[a]
						i.push({ tsKey: a, value: b })
					}
					let k = []
					if (
						(f.with &&
							(k = Object.entries(f.with)
								.filter((a) => !!a[1])
								.map(([a, b]) => ({ tsKey: a, queryConfig: b, relation: e.relations[a] }))),
						f.extras)
					)
						for (let [a, b] of Object.entries(
							"function" == typeof f.extras ? f.extras(d, { sql: $ }) : f.extras,
						))
							i.push({ tsKey: a, value: em(b, g) })
					for (let { tsKey: a, value: b } of i)
						l.push({
							dbKey: h(b, V.Aliased) ? b.fieldAlias : e.columns[a].name,
							tsKey: a,
							field: h(b, t) ? el(b, g) : b,
							relationTableTsKey: void 0,
							isJson: !1,
							selection: [],
						})
					let u =
						"function" == typeof f.orderBy ? f.orderBy(d, { sql: $, asc: cH, desc: cI }) : (f.orderBy ?? [])
					for (let { tsKey: d, queryConfig: e, relation: i } of (Array.isArray(u) || (u = [u]),
					(o = u.map((a) => (h(a, t) ? el(a, g) : en(a, g)))),
					(m = f.limit),
					(n = f.offset),
					k)) {
						let f = (function (a, b, c) {
								if (h(c, cL) && c.config)
									return { fields: c.config.fields, references: c.config.references }
								let d = b[s(c.referencedTable)]
								if (!d) throw Error(`Table "${c.referencedTable[r.Symbol.Name]}" not found in schema`)
								let e = a[d]
								if (!e) throw Error(`Table "${d}" not found in schema`)
								let f = c.sourceTable,
									g = b[s(f)]
								if (!g) throw Error(`Table "${f[r.Symbol.Name]}" not found in schema`)
								let i = []
								for (let a of Object.values(e.relations))
									((c.relationName && c !== a && a.relationName === c.relationName) ||
										(!c.relationName && a.referencedTable === c.sourceTable)) &&
										i.push(a)
								if (i.length > 1)
									throw c.relationName
										? Error(
												`There are multiple relations with name "${c.relationName}" in table "${d}"`,
											)
										: Error(
												`There are multiple relations between "${d}" and "${c.sourceTable[r.Symbol.Name]}". Please specify relation name`,
											)
								if (i[0] && h(i[0], cL) && i[0].config)
									return { fields: i[0].config.references, references: i[0].config.fields }
								throw Error(`There is not enough information to infer relation "${g}.${c.fieldName}"`)
							})(b, c, i),
							j = c[s(i.referencedTable)],
							k = `${g}_${d}`,
							m = co(...f.fields.map((a, b) => cm(el(f.references[b], k), el(a, g)))),
							n = this.buildRelationalQueryWithoutPK({
								fullSchema: a,
								schema: b,
								tableNamesMap: c,
								table: a[j],
								tableConfig: b[j],
								queryConfig: h(i, cL) ? (!0 === e ? { limit: 1 } : { ...e, limit: 1 }) : e,
								tableAlias: k,
								joinOn: m,
								nestedQueryRelation: i,
							}),
							o = $`${$.identifier(k)}.${$.identifier("data")}`.as(d)
						q.push({ on: $`true`, table: new O(n.sql, {}, k), alias: k, joinType: "left", lateral: !0 }),
							l.push({
								dbKey: d,
								tsKey: d,
								field: o,
								relationTableTsKey: j,
								isJson: !0,
								selection: n.selection,
							})
					}
				}
				if (0 === l.length) throw new ex({ message: `No fields selected for table "${e.tsName}" ("${g}")` })
				if (((p = co(j, p)), i)) {
					let a = $`json_build_array(${$.join(
						l.map(({ field: a, tsKey: b, isJson: c }) =>
							c ? $`${$.identifier(`${g}_${b}`)}.${$.identifier("data")}` : h(a, V.Aliased) ? a.sql : a,
						),
						$`, `,
					)})`
					h(i, cM) &&
						(a = $`coalesce(json_agg(${a}${o.length > 0 ? $` order by ${$.join(o, $`, `)}` : void 0}), '[]'::json)`)
					let b = [
						{
							dbKey: "data",
							tsKey: "data",
							field: a.as("data"),
							isJson: !0,
							relationTableTsKey: e.tsName,
							selection: l,
						},
					]
					void 0 !== m || void 0 !== n || o.length > 0
						? ((k = this.buildSelectQuery({
								table: ek(d, g),
								fields: {},
								fieldsFlat: [{ path: [], field: $.raw("*") }],
								where: p,
								limit: m,
								offset: n,
								orderBy: o,
								setOperators: [],
							})),
							(p = void 0),
							(m = void 0),
							(n = void 0),
							(o = []))
						: (k = ek(d, g)),
						(k = this.buildSelectQuery({
							table: h(k, ce) ? k : new O(k, {}, g),
							fields: {},
							fieldsFlat: b.map(({ field: a }) => ({ path: [], field: h(a, t) ? el(a, g) : a })),
							joins: q,
							where: p,
							limit: m,
							offset: n,
							orderBy: o,
							setOperators: [],
						}))
				} else
					k = this.buildSelectQuery({
						table: ek(d, g),
						fields: {},
						fieldsFlat: l.map(({ field: a }) => ({ path: [], field: h(a, t) ? el(a, g) : a })),
						joins: q,
						where: p,
						limit: m,
						offset: n,
						orderBy: o,
						setOperators: [],
					})
				return { tableTsKey: e.tsName, sql: k, selection: l }
			}
		}
		class eB {
			static [g] = "TypedQueryBuilder"
			getSelectedFields() {
				return this._.selectedFields
			}
		}
		class eC {
			static [g] = "PgSelectBuilder"
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
						: h(a, O)
							? Object.fromEntries(Object.keys(a._.selectedFields).map((b) => [b, a[b]]))
							: h(a, ez)
								? a[R].selectedFields
								: h(a, V)
									? {}
									: aj(a)),
					new eE({
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
		class eD extends eB {
			static [g] = "PgSelectQueryBuilder"
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
				(this.tableName = ak(a)),
				(this.joinsNotNullableMap = "string" == typeof this.tableName ? { [this.tableName]: !0 } : {}),
				eX(a)))
					this.usedTables.add(h)
			}
			getUsedTables() {
				return [...this.usedTables]
			}
			createJoin(a, b) {
				return (c, d) => {
					let e = this.tableName,
						f = ak(c)
					for (let a of eX(c)) this.usedTables.add(a)
					if ("string" == typeof f && this.config.joins?.some((a) => a.alias === f))
						throw Error(`Alias "${f}" is already used in this query`)
					if (
						!this.isPartialSelect &&
						(1 === Object.keys(this.joinsNotNullableMap).length &&
							"string" == typeof e &&
							(this.config.fields = { [e]: this.config.fields }),
						"string" == typeof f && !h(c, V))
					) {
						let a = h(c, O) ? c._.selectedFields : h(c, af) ? c[R].selectedFields : c[r.Symbol.Columns]
						this.config.fields[f] = a
					}
					if (
						("function" == typeof d &&
							(d = d(
								new Proxy(
									this.config.fields,
									new eo({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
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
					let d = "function" == typeof c ? c(eG()) : c
					if (!ah(this.getSelectedFields(), d.getSelectedFields()))
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
							new Proxy(this.config.fields, new eo({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })),
						)),
					(this.config.where = a),
					this
				)
			}
			having(a) {
				return (
					"function" == typeof a &&
						(a = a(
							new Proxy(this.config.fields, new eo({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })),
						)),
					(this.config.having = a),
					this
				)
			}
			groupBy(...a) {
				if ("function" == typeof a[0]) {
					let b = a[0](
						new Proxy(this.config.fields, new eo({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })),
					)
					this.config.groupBy = Array.isArray(b) ? b : [b]
				} else this.config.groupBy = a
				return this
			}
			orderBy(...a) {
				if ("function" == typeof a[0]) {
					let b = a[0](
							new Proxy(this.config.fields, new eo({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })),
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
				if ((b.push(...eX(this.config.table)), this.config.joins))
					for (let a of this.config.joins) b.push(...eX(a.table))
				return new Proxy(
					new O(this.getSQL(), this.config.fields, a, !1, [...new Set(b)]),
					new eo({ alias: a, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
				)
			}
			getSelectedFields() {
				return new Proxy(
					this.config.fields,
					new eo({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
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
		class eE extends eD {
			static [g] = "PgSelect"
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
				return Q("drizzle.prepareQuery", () => {
					let c = ag(i),
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
			execute = (a) => Q("drizzle.operation", () => this._prepare().execute(a, this.authToken))
		}
		for (let a of [eg])
			for (let b of Object.getOwnPropertyNames(a.prototype))
				"constructor" !== b &&
					Object.defineProperty(
						eE.prototype,
						b,
						Object.getOwnPropertyDescriptor(a.prototype, b) || Object.create(null),
					)
		function eF(a, b) {
			return (c, d, ...e) => {
				let f = [d, ...e].map((c) => ({ type: a, isAll: b, rightSelect: c }))
				for (let a of f)
					if (!ah(c.getSelectedFields(), a.rightSelect.getSelectedFields()))
						throw Error(
							"Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
						)
				return c.addSetOperators(f)
			}
		}
		let eG = () => ({ union: eH, unionAll: eI, intersect: eJ, intersectAll: eK, except: eL, exceptAll: eM }),
			eH = eF("union", !1),
			eI = eF("union", !0),
			eJ = eF("intersect", !1),
			eK = eF("intersect", !0),
			eL = eF("except", !1),
			eM = eF("except", !0)
		class eN {
			static [g] = "PgQueryBuilder"
			dialect
			dialectConfig
			constructor(a) {
				;(this.dialect = h(a, eA) ? a : void 0), (this.dialectConfig = h(a, eA) ? void 0 : a)
			}
			$with = (a, b) => {
				let c = this
				return {
					as: (d) => (
						"function" == typeof d && (d = d(c)),
						new Proxy(
							new P(
								d.getSQL(),
								b ?? ("getSelectedFields" in d ? (d.getSelectedFields() ?? {}) : {}),
								a,
								!0,
							),
							new eo({ alias: a, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					),
				}
			}
			with(...a) {
				let b = this
				return {
					select: function (c) {
						return new eC({ fields: c ?? void 0, session: void 0, dialect: b.getDialect(), withList: a })
					},
					selectDistinct: function (a) {
						return new eC({ fields: a ?? void 0, session: void 0, dialect: b.getDialect(), distinct: !0 })
					},
					selectDistinctOn: function (a, c) {
						return new eC({
							fields: c ?? void 0,
							session: void 0,
							dialect: b.getDialect(),
							distinct: { on: a },
						})
					},
				}
			}
			select(a) {
				return new eC({ fields: a ?? void 0, session: void 0, dialect: this.getDialect() })
			}
			selectDistinct(a) {
				return new eC({ fields: a ?? void 0, session: void 0, dialect: this.getDialect(), distinct: !0 })
			}
			selectDistinctOn(a, b) {
				return new eC({ fields: b ?? void 0, session: void 0, dialect: this.getDialect(), distinct: { on: a } })
			}
			getDialect() {
				return this.dialect || (this.dialect = new eA(this.dialectConfig)), this.dialect
			}
		}
		class eO {
			constructor(a, b) {
				;(this.name = a), (this.schema = b)
			}
			static [g] = "PgDefaultViewBuilderCore"
			config = {}
			with(a) {
				return (this.config.with = a), this
			}
		}
		class eP extends eO {
			static [g] = "PgViewBuilder"
			as(a) {
				"function" == typeof a && (a = a(new eN()))
				let b = new eo({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
					c = new Proxy(a.getSelectedFields(), b)
				return new Proxy(
					new eU({
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
		class eQ extends eO {
			static [g] = "PgManualViewBuilder"
			columns
			constructor(a, b, c) {
				super(a, c), (this.columns = aj(cf(a, b)))
			}
			existing() {
				return new Proxy(
					new eU({
						pgConfig: void 0,
						config: { name: this.name, schema: this.schema, selectedFields: this.columns, query: void 0 },
					}),
					new eo({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
			as(a) {
				return new Proxy(
					new eU({
						pgConfig: this.config,
						config: {
							name: this.name,
							schema: this.schema,
							selectedFields: this.columns,
							query: a.inlineParams(),
						},
					}),
					new eo({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
		}
		class eR {
			constructor(a, b) {
				;(this.name = a), (this.schema = b)
			}
			static [g] = "PgMaterializedViewBuilderCore"
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
		class eS extends eR {
			static [g] = "PgMaterializedViewBuilder"
			as(a) {
				"function" == typeof a && (a = a(new eN()))
				let b = new eo({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
					c = new Proxy(a.getSelectedFields(), b)
				return new Proxy(
					new eW({
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
		class eT extends eR {
			static [g] = "PgManualMaterializedViewBuilder"
			columns
			constructor(a, b, c) {
				super(a, c), (this.columns = aj(cf(a, b)))
			}
			existing() {
				return new Proxy(
					new eW({
						pgConfig: {
							tablespace: this.config.tablespace,
							using: this.config.using,
							with: this.config.with,
							withNoData: this.config.withNoData,
						},
						config: { name: this.name, schema: this.schema, selectedFields: this.columns, query: void 0 },
					}),
					new eo({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
			as(a) {
				return new Proxy(
					new eW({
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
					new eo({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
		}
		class eU extends ez {
			static [g] = "PgView";
			[es]
			constructor({ pgConfig: a, config: b }) {
				super(b), a && (this[es] = { with: a.with })
			}
		}
		let eV = Symbol.for("drizzle:PgMaterializedViewConfig")
		class eW extends ez {
			static [g] = "PgMaterializedView";
			[eV]
			constructor({ pgConfig: a, config: b }) {
				super(b),
					(this[eV] = {
						with: a?.with,
						using: a?.using,
						tablespace: a?.tablespace,
						withNoData: a?.withNoData,
					})
			}
		}
		function eX(a) {
			return h(a, ce)
				? [a[j] ? `${a[j]}.${a[r.Symbol.BaseName]}` : a[r.Symbol.BaseName]]
				: h(a, O)
					? (a._.usedTables ?? [])
					: h(a, V)
						? (a.usedTables ?? [])
						: []
		}
		class eY extends eg {
			constructor(a, b, c, d) {
				super(), (this.session = b), (this.dialect = c), (this.config = { table: a, withList: d })
			}
			static [g] = "PgDelete"
			config
			cacheConfig
			where(a) {
				return (this.config.where = a), this
			}
			returning(a = this.config.table[r.Symbol.Columns]) {
				return (this.config.returningFields = a), (this.config.returning = ag(a)), this
			}
			getSQL() {
				return this.dialect.buildDeleteQuery(this.config)
			}
			toSQL() {
				let { typings: a, ...b } = this.dialect.sqlToQuery(this.getSQL())
				return b
			}
			_prepare(a) {
				return Q("drizzle.prepareQuery", () =>
					this.session.prepareQuery(
						this.dialect.sqlToQuery(this.getSQL()),
						this.config.returning,
						a,
						!0,
						void 0,
						{ type: "delete", tables: eX(this.config.table) },
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
			execute = (a) => Q("drizzle.operation", () => this._prepare().execute(a, this.authToken))
			getSelectedFields() {
				return this.config.returningFields
					? new Proxy(
							this.config.returningFields,
							new eo({ alias: this.config.table[i], sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					: void 0
			}
			$dynamic() {
				return this
			}
		}
		class eZ {
			constructor(a, b, c, d, e) {
				;(this.table = a),
					(this.session = b),
					(this.dialect = c),
					(this.withList = d),
					(this.overridingSystemValue_ = e)
			}
			static [g] = "PgInsertBuilder"
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
						c = this.table[r.Symbol.Columns]
					for (let d of Object.keys(a)) {
						let e = a[d]
						b[d] = h(e, V) ? e : new Z(e, c[d])
					}
					return b
				})
				return new e$(
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
				let b = "function" == typeof a ? a(new eN()) : a
				if (!h(b, V) && !ah(this.table[k], b._.selectedFields))
					throw Error(
						"Insert select error: selected fields are not the same or are in a different order compared to the table definition",
					)
				return new e$(this.table, b, this.session, this.dialect, this.withList, !0)
			}
		}
		class e$ extends eg {
			constructor(a, b, c, d, e, f, g) {
				super(),
					(this.session = c),
					(this.dialect = d),
					(this.config = { table: a, values: b, withList: e, select: f, overridingSystemValue_: g })
			}
			static [g] = "PgInsert"
			config
			cacheConfig
			returning(a = this.config.table[r.Symbol.Columns]) {
				return (this.config.returningFields = a), (this.config.returning = ag(a)), this
			}
			onConflictDoNothing(a = {}) {
				if (void 0 === a.target) this.config.onConflict = $`do nothing`
				else {
					let b = ""
					b = Array.isArray(a.target)
						? a.target.map((a) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(a))).join(",")
						: this.dialect.escapeName(this.dialect.casing.getColumnCasing(a.target))
					let c = a.where ? $` where ${a.where}` : void 0
					this.config.onConflict = $`(${$.raw(b)})${c} do nothing`
				}
				return this
			}
			onConflictDoUpdate(a) {
				if (a.where && (a.targetWhere || a.setWhere))
					throw Error(
						'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.',
					)
				let b = a.where ? $` where ${a.where}` : void 0,
					c = a.targetWhere ? $` where ${a.targetWhere}` : void 0,
					d = a.setWhere ? $` where ${a.setWhere}` : void 0,
					e = this.dialect.buildUpdateSet(this.config.table, ai(this.config.table, a.set)),
					f = ""
				return (
					(f = Array.isArray(a.target)
						? a.target.map((a) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(a))).join(",")
						: this.dialect.escapeName(this.dialect.casing.getColumnCasing(a.target))),
					(this.config.onConflict = $`(${$.raw(f)})${c} do update set ${e}${b}${d}`),
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
				return Q("drizzle.prepareQuery", () =>
					this.session.prepareQuery(
						this.dialect.sqlToQuery(this.getSQL()),
						this.config.returning,
						a,
						!0,
						void 0,
						{ type: "insert", tables: eX(this.config.table) },
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
			execute = (a) => Q("drizzle.operation", () => this._prepare().execute(a, this.authToken))
			getSelectedFields() {
				return this.config.returningFields
					? new Proxy(
							this.config.returningFields,
							new eo({ alias: this.config.table[i], sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					: void 0
			}
			$dynamic() {
				return this
			}
		}
		class e_ {
			constructor(a, b, c, d) {
				;(this.table = a), (this.session = b), (this.dialect = c), (this.withList = d)
			}
			static [g] = "PgUpdateBuilder"
			authToken
			setToken(a) {
				return (this.authToken = a), this
			}
			set(a) {
				return new e0(this.table, ai(this.table, a), this.session, this.dialect, this.withList).setToken(
					this.authToken,
				)
			}
		}
		class e0 extends eg {
			constructor(a, b, c, d, e) {
				super(),
					(this.session = c),
					(this.dialect = d),
					(this.config = { set: b, table: a, withList: e, joins: [] }),
					(this.tableName = ak(a)),
					(this.joinsNotNullableMap = "string" == typeof this.tableName ? { [this.tableName]: !0 } : {})
			}
			static [g] = "PgUpdate"
			config
			tableName
			joinsNotNullableMap
			cacheConfig
			from(a) {
				let b = ak(a)
				return "string" == typeof b && (this.joinsNotNullableMap[b] = !0), (this.config.from = a), this
			}
			getTableLikeFields(a) {
				return h(a, ce) ? a[r.Symbol.Columns] : h(a, O) ? a._.selectedFields : a[R].selectedFields
			}
			createJoin(a) {
				return (b, c) => {
					let d = ak(b)
					if ("string" == typeof d && this.config.joins.some((a) => a.alias === d))
						throw Error(`Alias "${d}" is already used in this query`)
					if ("function" == typeof c) {
						let a =
							this.config.from && !h(this.config.from, V)
								? this.getTableLikeFields(this.config.from)
								: void 0
						c = c(
							new Proxy(
								this.config.table[r.Symbol.Columns],
								new eo({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
							),
							a && new Proxy(a, new eo({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })),
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
				if (!a && ((a = Object.assign({}, this.config.table[r.Symbol.Columns])), this.config.from)) {
					let b = ak(this.config.from)
					if ("string" == typeof b && this.config.from && !h(this.config.from, V)) {
						let c = this.getTableLikeFields(this.config.from)
						a[b] = c
					}
					for (let b of this.config.joins) {
						let c = ak(b.table)
						if ("string" == typeof c && !h(b.table, V)) {
							let d = this.getTableLikeFields(b.table)
							a[c] = d
						}
					}
				}
				return (this.config.returningFields = a), (this.config.returning = ag(a)), this
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
					{ type: "insert", tables: eX(this.config.table) },
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
							new eo({ alias: this.config.table[i], sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					: void 0
			}
			$dynamic() {
				return this
			}
		}
		class e1 extends V {
			constructor(a) {
				super(e1.buildEmbeddedCount(a.source, a.filters).queryChunks),
					(this.params = a),
					this.mapWith(Number),
					(this.session = a.session),
					(this.sql = e1.buildCount(a.source, a.filters))
			}
			sql
			token
			static [g] = "PgCountBuilder";
			[Symbol.toStringTag] = "PgCountBuilder"
			session
			static buildEmbeddedCount(a, b) {
				return $`(select count(*) from ${a}${$.raw(" where ").if(b)}${b})`
			}
			static buildCount(a, b) {
				return $`select count(*) as count from ${a}${$.raw(" where ").if(b)}${b};`
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
		class e2 {
			constructor(a, b, c, d, e, f, g) {
				;(this.fullSchema = a),
					(this.schema = b),
					(this.tableNamesMap = c),
					(this.table = d),
					(this.tableConfig = e),
					(this.dialect = f),
					(this.session = g)
			}
			static [g] = "PgRelationalQueryBuilder"
			findMany(a) {
				return new e3(
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
				return new e3(
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
		class e3 extends eg {
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
			static [g] = "PgRelationalQuery"
			_prepare(a) {
				return Q("drizzle.prepareQuery", () => {
					let { query: b, builtQuery: c } = this._toSQL()
					return this.session.prepareQuery(c, void 0, a, !0, (a, c) => {
						let d = a.map((a) =>
							(function a(b, c, d, e, f = (a) => a) {
								let g = {}
								for (let [i, j] of e.entries())
									if (j.isJson) {
										let e = c.relations[j.tsKey],
											k = d[i],
											l = "string" == typeof k ? JSON.parse(k) : k
										g[j.tsKey] = h(e, cL)
											? l && a(b, b[j.relationTableTsKey], l, j.selection, f)
											: l.map((c) => a(b, b[j.relationTableTsKey], c, j.selection, f))
									} else {
										let a,
											b = f(d[i]),
											c = j.field
										;(a = h(c, t) ? c : h(c, V) ? c.decoder : c.sql.decoder),
											(g[j.tsKey] = null === b ? null : a.mapFromDriverValue(b))
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
				return Q("drizzle.operation", () => this._prepare().execute(void 0, this.authToken))
			}
		}
		class e4 extends eg {
			constructor(a, b, c, d) {
				super(), (this.execute = a), (this.sql = b), (this.query = c), (this.mapBatchResult = d)
			}
			static [g] = "PgRaw"
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
		class e5 extends eg {
			constructor(a, b, c) {
				super(), (this.session = b), (this.dialect = c), (this.config = { view: a })
			}
			static [g] = "PgRefreshMaterializedView"
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
				return Q("drizzle.prepareQuery", () =>
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
			execute = (a) => Q("drizzle.operation", () => this._prepare().execute(a, this.authToken))
		}
		class e6 {
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
						this.query[d] = new e2(
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
			static [g] = "PgDatabase"
			query
			$with = (a, b) => {
				let c = this
				return {
					as: (d) => (
						"function" == typeof d && (d = d(new eN(c.dialect))),
						new Proxy(
							new P(
								d.getSQL(),
								b ?? ("getSelectedFields" in d ? (d.getSelectedFields() ?? {}) : {}),
								a,
								!0,
							),
							new eo({ alias: a, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					),
				}
			}
			$count(a, b) {
				return new e1({ source: a, filters: b, session: this.session })
			}
			$cache
			with(...a) {
				let b = this
				return {
					select: function (c) {
						return new eC({ fields: c ?? void 0, session: b.session, dialect: b.dialect, withList: a })
					},
					selectDistinct: function (c) {
						return new eC({
							fields: c ?? void 0,
							session: b.session,
							dialect: b.dialect,
							withList: a,
							distinct: !0,
						})
					},
					selectDistinctOn: function (c, d) {
						return new eC({
							fields: d ?? void 0,
							session: b.session,
							dialect: b.dialect,
							withList: a,
							distinct: { on: c },
						})
					},
					update: function (c) {
						return new e_(c, b.session, b.dialect, a)
					},
					insert: function (c) {
						return new eZ(c, b.session, b.dialect, a)
					},
					delete: function (c) {
						return new eY(c, b.session, b.dialect, a)
					},
				}
			}
			select(a) {
				return new eC({ fields: a ?? void 0, session: this.session, dialect: this.dialect })
			}
			selectDistinct(a) {
				return new eC({ fields: a ?? void 0, session: this.session, dialect: this.dialect, distinct: !0 })
			}
			selectDistinctOn(a, b) {
				return new eC({
					fields: b ?? void 0,
					session: this.session,
					dialect: this.dialect,
					distinct: { on: a },
				})
			}
			update(a) {
				return new e_(a, this.session, this.dialect)
			}
			insert(a) {
				return new eZ(a, this.session, this.dialect)
			}
			delete(a) {
				return new eY(a, this.session, this.dialect)
			}
			refreshMaterializedView(a) {
				return new e5(a, this.session, this.dialect)
			}
			authToken
			execute(a) {
				let b = "string" == typeof a ? $.raw(a) : a.getSQL(),
					c = this.dialect.sqlToQuery(b),
					d = this.session.prepareQuery(c, void 0, void 0, !1)
				return new e4(
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
		class e7 {
			static [g] = "Cache"
		}
		class e8 extends e7 {
			strategy() {
				return "all"
			}
			static [g] = "NoopCache"
			async get(a) {}
			async put(a, b, c, d) {}
			async onMutate(a) {}
		}
		async function e9(a, b) {
			let c = `${a}-${JSON.stringify(b)}`,
				d = new TextEncoder().encode(c)
			return [...new Uint8Array(await crypto.subtle.digest("SHA-256", d))]
				.map((a) => a.toString(16).padStart(2, "0"))
				.join("")
		}
		class fa extends Error {
			constructor(a, b, c) {
				super(`Failed query: ${a}
params: ${b}`),
					(this.query = a),
					(this.params = b),
					(this.cause = c),
					Error.captureStackTrace(this, fa),
					c && (this.cause = c)
			}
		}
		class fb {
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
			static [g] = "PgPreparedQuery"
			joinsNotNullableMap
			async queryWithCache(a, b, c) {
				if (
					void 0 === this.cache ||
					h(this.cache, e8) ||
					void 0 === this.queryMetadata ||
					(this.cacheConfig && !this.cacheConfig.enable)
				)
					try {
						return await c()
					} catch (c) {
						throw new fa(a, b, c)
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
						throw new fa(a, b, c)
					}
				if (!this.cacheConfig)
					try {
						return await c()
					} catch (c) {
						throw new fa(a, b, c)
					}
				if ("select" === this.queryMetadata.type) {
					let d = await this.cache.get(
						this.cacheConfig.tag ?? (await e9(a, b)),
						this.queryMetadata.tables,
						void 0 !== this.cacheConfig.tag,
						this.cacheConfig.autoInvalidate,
					)
					if (void 0 === d) {
						let d
						try {
							d = await c()
						} catch (c) {
							throw new fa(a, b, c)
						}
						return (
							await this.cache.put(
								this.cacheConfig.tag ?? (await e9(a, b)),
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
					throw new fa(a, b, c)
				}
			}
		}
		class fc {
			constructor(a) {
				this.dialect = a
			}
			static [g] = "PgSession"
			execute(a, b) {
				return Q("drizzle.operation", () =>
					Q("drizzle.prepareQuery", () => this.prepareQuery(this.dialect.sqlToQuery(a), void 0, void 0, !1))
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
		class fd extends e6 {
			constructor(a, b, c, d = 0) {
				super(a, b, c), (this.schema = c), (this.nestedIndex = d)
			}
			static [g] = "PgTransaction"
			rollback() {
				throw new ey()
			}
			getTransactionConfigSQL(a) {
				let b = []
				return (
					a.isolationLevel && b.push(`isolation level ${a.isolationLevel}`),
					a.accessMode && b.push(a.accessMode),
					"boolean" == typeof a.deferrable && b.push(a.deferrable ? "deferrable" : "not deferrable"),
					$.raw(b.join(" "))
				)
			}
			setTransaction(a) {
				return this.session.execute($`set transaction ${this.getTransactionConfigSQL(a)}`)
			}
		}
		class fe extends fb {
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
			static [g] = "PostgresJsPreparedQuery"
			async execute(a = {}) {
				return Q("drizzle.execute", async (b) => {
					let c = ad(this.params, a)
					b?.setAttributes({
						"drizzle.query.text": this.queryString,
						"drizzle.query.params": JSON.stringify(c),
					}),
						this.logger.logQuery(this.queryString, c)
					let { fields: d, queryString: e, client: f, joinsNotNullableMap: g, customResultMapper: j } = this
					if (!d && !j)
						return Q("drizzle.driver.execute", () =>
							this.queryWithCache(e, c, async () => await f.unsafe(e, c)),
						)
					let k = await Q(
						"drizzle.driver.execute",
						() => (
							b?.setAttributes({ "drizzle.query.text": e, "drizzle.query.params": JSON.stringify(c) }),
							this.queryWithCache(e, c, async () => await f.unsafe(e, c).values())
						),
					)
					return Q("drizzle.mapResponse", () =>
						j
							? j(k)
							: k.map((a) =>
									(function (a, b, c) {
										let d = {},
											e = a.reduce((a, { path: e, field: f }, g) => {
												let j
												j = h(f, t) ? f : h(f, V) ? f.decoder : f.sql.decoder
												let k = a
												for (let [a, l] of e.entries())
													if (a < e.length - 1) l in k || (k[l] = {}), (k = k[l])
													else {
														let a = b[g],
															m = (k[l] = null === a ? null : j.mapFromDriverValue(a))
														if (c && h(f, t) && 2 === e.length) {
															let a = e[0]
															a in d
																? "string" == typeof d[a] &&
																	d[a] !== f.table[i] &&
																	(d[a] = !1)
																: (d[a] = null === m && f.table[i])
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
				return Q("drizzle.execute", async (b) => {
					let c = ad(this.params, a)
					return (
						b?.setAttributes({
							"drizzle.query.text": this.queryString,
							"drizzle.query.params": JSON.stringify(c),
						}),
						this.logger.logQuery(this.queryString, c),
						Q(
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
		class ff extends fc {
			constructor(a, b, c, d = {}) {
				super(b),
					(this.client = a),
					(this.schema = c),
					(this.options = d),
					(this.logger = d.logger ?? new ef()),
					(this.cache = d.cache ?? new e8())
			}
			static [g] = "PostgresJsSession"
			logger
			cache
			prepareQuery(a, b, c, d, e, f, g) {
				return new fe(this.client, a.sql, a.params, this.logger, this.cache, f, g, b, d, e)
			}
			query(a, b) {
				return this.logger.logQuery(a, b), this.client.unsafe(a, b).values()
			}
			queryObjects(a, b) {
				return this.client.unsafe(a, b)
			}
			transaction(a, b) {
				return this.client.begin(async (c) => {
					let d = new ff(c, this.dialect, this.schema, this.options),
						e = new fg(this.dialect, d, this.schema)
					return b && (await e.setTransaction(b)), a(e)
				})
			}
		}
		class fg extends fd {
			constructor(a, b, c, d = 0) {
				super(a, b, c, d), (this.session = b)
			}
			static [g] = "PostgresJsTransaction"
			transaction(a) {
				return this.session.client.savepoint((b) => {
					let c = new ff(b, this.dialect, this.schema, this.session.options)
					return a(new fg(this.dialect, c, this.schema))
				})
			}
		}
		class fh extends e6 {
			static [g] = "PostgresJsDatabase"
		}
		function fi(a, b = {}) {
			let c,
				d,
				e = (a) => a
			for (let b of ["1184", "1082", "1083", "1114", "1182", "1185", "1115", "1231"])
				(a.options.parsers[b] = e), (a.options.serializers[b] = e)
			;(a.options.serializers["114"] = e), (a.options.serializers["3802"] = e)
			let f = new eA({ casing: b.casing })
			if ((!0 === b.logger ? (c = new ee()) : !1 !== b.logger && (c = b.logger), b.schema)) {
				let a = (function (a, b) {
					1 === Object.keys(a).length && "default" in a && !h(a.default, r) && (a = a.default)
					let c = {},
						d = {},
						e = {}
					for (let [f, g] of Object.entries(a))
						if (h(g, r)) {
							let a = s(g),
								b = d[a]
							for (let d of ((c[a] = f),
							(e[f] = {
								tsName: f,
								dbName: g[r.Symbol.Name],
								schema: g[r.Symbol.Schema],
								columns: g[r.Symbol.Columns],
								relations: b?.relations ?? {},
								primaryKey: b?.primaryKey ?? [],
							}),
							Object.values(g[r.Symbol.Columns])))
								d.primary && e[f].primaryKey.push(d)
							let i = g[r.Symbol.ExtraConfigBuilder]?.(g[r.Symbol.ExtraConfigColumns])
							if (i) for (let a of Object.values(i)) h(a, cj) && e[f].primaryKey.push(...a.columns)
						} else if (h(g, cK)) {
							let a,
								f = s(g.table),
								h = c[f]
							for (let [c, i] of Object.entries(g.config(b(g.table))))
								if (h) {
									let b = e[h]
									;(b.relations[c] = i), a && b.primaryKey.push(...a)
								} else f in d || (d[f] = { relations: {}, primaryKey: a }), (d[f].relations[c] = i)
						}
					return { tables: e, tableNamesMap: c }
				})(b.schema, cO)
				d = { fullSchema: b.schema, schema: a.tables, tableNamesMap: a.tableNamesMap }
			}
			let g = new ff(a, f, d, { logger: c, cache: b.cache }),
				i = new fh(f, g, d)
			return (i.$client = a), (i.$cache = b.cache), i.$cache && (i.$cache.invalidate = b.cache?.onMutate), i
		}
		function fj(...a) {
			if ("string" == typeof a[0]) return fi(d9(a[0]), a[1])
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
				if (c) return fi(c, d)
				if ("object" == typeof b && void 0 !== b.url) {
					let { url: a, ...c } = b
					return fi(d9(a, c), d)
				}
				return fi(d9(b), d)
			}
			return fi(a[0], a[1])
		}
		;(fj || (fj = {})).mock = function (a) {
			return fi({ options: { parsers: {}, serializers: {} } }, a)
		}
		var fk = a.i(76314)
		let fl = d9(process.env.DATABASE_URL, { prepare: !1 }),
			fm = fj({ client: fl, schema: fk }),
			fn = () => {
				if (!process.env.PRODUCTION_DATABASE_URL) throw Error("PRODUCTION_DATABASE_URL is not set")
				return (
					f ||
						((e = d9(process.env.PRODUCTION_DATABASE_URL, { prepare: !1 })),
						(f = fj({ client: e, schema: fk }))),
					f
				)
			},
			fo = async () => {
				await fl.end(), e && (await e.end())
			}
		a.s(["client", () => fm, "disconnect", () => fo, "getProductionClient", () => fn, "testDb", () => d], 14777)
		let fp = async (a) => {
				let b = await fm.query.taskMetrics.findFirst({ where: cm(cT.id, a) })
				if (!b) throw new cY()
				return b
			},
			fq = async (a) => {
				let b = (
					await fm
						.insert(cT)
						.values({ ...a, createdAt: new Date() })
						.returning()
				)[0]
				if (!b) throw new cZ()
				return b
			},
			fr = async (a, b) => {
				let c = (await fm.update(cT).set(b).where(cm(cT.id, a)).returning())[0]
				if (!c) throw new cY()
				return c
			}
		a.s(["createTaskMetrics", 0, fq, "findTaskMetrics", 0, fp, "updateTaskMetrics", 0, fr], 67792)
		let fs = async (a) => {
				let b = await fm.query.tasks.findFirst({ where: cm(cR.id, a) })
				if (!b) throw new cY()
				return b
			},
			ft = async (a) => {
				let b = (
					await fm
						.insert(cR)
						.values({ ...a, createdAt: new Date() })
						.returning()
				)[0]
				if (!b) throw new cZ()
				return b
			},
			fu = async (a, b) => {
				let c = (await fm.update(cR).set(b).where(cm(cR.id, a)).returning())[0]
				if (!c) throw new cY()
				return c
			},
			fv = async ({ runId: a, language: b, exercise: c }) =>
				fm.query.tasks.findFirst({ where: co(cm(cR.runId, a), cm(cR.language, b), cm(cR.exercise, c)) }),
			fw = async (a) =>
				fm.query.tasks.findMany({ where: cm(cR.runId, a), with: { taskMetrics: !0 }, orderBy: cH(cR.id) }),
			fx = async () => {
				let a = await fm
						.select({
							runId: cR.runId,
							language: cR.language,
							score: $`cast(sum(case when ${cR.passed} = true then 1 else 0 end) as float) / count(*)`,
						})
						.from(cR)
						.groupBy(cR.runId, cR.language),
					b = {}
				for (let { runId: c, language: d, score: e } of a)
					b[c] || (b[c] = { go: 0, java: 0, javascript: 0, python: 0, rust: 0 }), (b[c][d] = e)
				return b
			}
		a.s(
			[
				"createTask",
				0,
				ft,
				"findTask",
				0,
				fs,
				"getLanguageScores",
				0,
				fx,
				"getTask",
				0,
				fv,
				"getTasks",
				0,
				fw,
				"updateTask",
				0,
				fu,
			],
			89768,
		)
		let fy = async (a) => {
				let b = await fm.query.runs.findFirst({ where: cm(cW.runs.id, a) })
				if (!b) throw new cY()
				return b
			},
			fz = async (a) => {
				let b = (
					await fm
						.insert(cW.runs)
						.values({ ...a, createdAt: new Date() })
						.returning()
				)[0]
				if (!b) throw new cZ()
				return b
			},
			fA = async (a, b) => {
				let c = (await fm.update(cW.runs).set(b).where(cm(cW.runs.id, a)).returning())[0]
				if (!c) throw new cY()
				return c
			},
			fB = async () => fm.query.runs.findMany({ orderBy: cI(cW.runs.id), with: { taskMetrics: !0 } }),
			fC = async (a) => {
				let [b] = await fm
					.select({
						tokensIn: cX(cW.taskMetrics.tokensIn).mapWith(Number),
						tokensOut: cX(cW.taskMetrics.tokensOut).mapWith(Number),
						tokensContext: cX(cW.taskMetrics.tokensContext).mapWith(Number),
						cacheWrites: cX(cW.taskMetrics.cacheWrites).mapWith(Number),
						cacheReads: cX(cW.taskMetrics.cacheReads).mapWith(Number),
						cost: cX(cW.taskMetrics.cost).mapWith(Number),
						duration: cX(cW.taskMetrics.duration).mapWith(Number),
						passed: $`sum(CASE WHEN ${cW.tasks.passed} THEN 1 ELSE 0 END)`,
						failed: $`sum(CASE WHEN ${cW.tasks.passed} THEN 0 ELSE 1 END)`,
					})
					.from(cW.taskMetrics)
					.innerJoin(cW.tasks, cm(cW.taskMetrics.id, cW.tasks.taskMetricsId))
					.innerJoin(cW.runs, cm(cW.tasks.runId, cW.runs.id))
					.where(cm(cW.runs.id, a))
				if (!b) throw new cY()
				let c = (await fw(a)).reduce(
						(a, b) => (
							Object.entries(b.taskMetrics?.toolUsage || {}).forEach(
								([b, { attempts: c, failures: d }]) => {
									;(a[b] ??= { attempts: 0, failures: 0 }), (a[b].attempts += c), (a[b].failures += d)
								},
							),
							a
						),
						{},
					),
					{ passed: d, failed: e, ...f } = b,
					g = await fq({ ...f, toolUsage: c })
				await fA(a, { taskMetricsId: g.id, passed: d, failed: e })
				let h = await fy(a)
				if (!h) throw new cY()
				return { ...h, taskMetrics: g }
			},
			fD = async (a) => {
				let b = await fm.query.runs.findFirst({ where: cm(cW.runs.id, a), columns: { taskMetricsId: !0 } })
				if (!b) throw new cY()
				let c = await fm.query.tasks.findMany({
					where: cm(cW.tasks.runId, a),
					columns: { id: !0, taskMetricsId: !0 },
				})
				await fm.delete(cW.toolErrors).where(
					cv(
						cW.toolErrors.taskId,
						c.map(({ id: a }) => a),
					),
				),
					await fm.delete(cW.tasks).where(cm(cW.tasks.runId, a)),
					await fm.delete(cW.toolErrors).where(cm(cW.toolErrors.runId, a)),
					await fm.delete(cW.runs).where(cm(cW.runs.id, a))
				let d = c.map(({ taskMetricsId: a }) => a).filter((a) => null != a)
				d.push(b.taskMetricsId ?? -1), await fm.delete(cW.taskMetrics).where(cv(cW.taskMetrics.id, d))
			},
			fE = async () =>
				fm.query.runs.findMany({ where: $`${cW.runs.taskMetricsId} IS NULL`, columns: { id: !0 } }),
			fF = async (a) => {
				if (0 === a.length) return
				let b = await fm.query.tasks.findMany({
						where: cv(cW.tasks.runId, a),
						columns: { id: !0, taskMetricsId: !0 },
					}),
					c = b.map(({ id: a }) => a),
					d = await fm.query.runs.findMany({ where: cv(cW.runs.id, a), columns: { taskMetricsId: !0 } })
				for (let b of (c.length > 0 && (await fm.delete(cW.toolErrors).where(cv(cW.toolErrors.taskId, c))),
				await fm.delete(cW.tasks).where(cv(cW.tasks.runId, a)),
				await fm.delete(cW.toolErrors).where(cv(cW.toolErrors.runId, a)),
				a))
					await fm.execute($`DELETE FROM "cpuMetrics" WHERE run_id = ${b}`),
						await fm.execute($`DELETE FROM "notes" WHERE run_id = ${b}`)
				await fm.delete(cW.runs).where(cv(cW.runs.id, a))
				let e = [
					...b.map(({ taskMetricsId: a }) => a).filter((a) => null != a),
					...d.map(({ taskMetricsId: a }) => a).filter((a) => null != a),
				]
				e.length > 0 && (await fm.delete(cW.taskMetrics).where(cv(cW.taskMetrics.id, e)))
			}
		a.s(
			[
				"createRun",
				0,
				fz,
				"deleteRun",
				0,
				fD,
				"deleteRunsByIds",
				0,
				fF,
				"findRun",
				0,
				fy,
				"finishRun",
				0,
				fC,
				"getIncompleteRuns",
				0,
				fE,
				"getRuns",
				0,
				fB,
				"updateRun",
				0,
				fA,
			],
			67361,
		)
		let fG = async (a) => {
			let b = (
				await fm
					.insert(cU)
					.values({ ...a, createdAt: new Date() })
					.returning()
			)[0]
			if (!b) throw new cZ()
			return b
		}
		a.s(["createToolError", 0, fG], 21406)
		let fH = async ({ sourceDb: a, targetDb: b, runId: c }) => {
			let d = await a.query.runs.findFirst({ where: cm(cW.runs.id, c), with: { taskMetrics: !0 } })
			if (!d) throw new cY(`Run with ID ${c} not found`)
			let e = null
			if (d.taskMetrics) {
				let a = {
						tokensIn: d.taskMetrics.tokensIn,
						tokensOut: d.taskMetrics.tokensOut,
						tokensContext: d.taskMetrics.tokensContext,
						cacheWrites: d.taskMetrics.cacheWrites,
						cacheReads: d.taskMetrics.cacheReads,
						cost: d.taskMetrics.cost,
						duration: d.taskMetrics.duration,
						toolUsage: d.taskMetrics.toolUsage,
					},
					c = (
						await b
							.insert(cW.taskMetrics)
							.values({ ...a, createdAt: new Date() })
							.returning()
					)[0]
				if (!c) throw new cZ("Failed to create run taskMetrics")
				e = c.id
			}
			let f = {
					taskMetricsId: e,
					model: d.model,
					description: d.description,
					settings: d.settings,
					pid: d.pid,
					socketPath: d.socketPath,
					concurrency: d.concurrency,
					passed: d.passed,
					failed: d.failed,
				},
				g = (
					await b
						.insert(cW.runs)
						.values({ ...f, createdAt: new Date() })
						.returning()
				)[0]
			if (!g) throw new cZ("Failed to create run")
			let h = g.id,
				i = await a.query.tasks.findMany({ where: cm(cW.tasks.runId, c), with: { taskMetrics: !0 } }),
				j = new Map()
			for (let a of i) {
				let c = null
				if (a.taskMetrics) {
					let d = {
							tokensIn: a.taskMetrics.tokensIn,
							tokensOut: a.taskMetrics.tokensOut,
							tokensContext: a.taskMetrics.tokensContext,
							cacheWrites: a.taskMetrics.cacheWrites,
							cacheReads: a.taskMetrics.cacheReads,
							cost: a.taskMetrics.cost,
							duration: a.taskMetrics.duration,
							toolUsage: a.taskMetrics.toolUsage,
						},
						e = (
							await b
								.insert(cW.taskMetrics)
								.values({ ...d, createdAt: new Date() })
								.returning()
						)[0]
					if (!e) throw new cZ("Failed to create task taskMetrics")
					c = e.id
				}
				let d = {
						runId: h,
						taskMetricsId: c,
						language: a.language,
						exercise: a.exercise,
						passed: a.passed,
						startedAt: a.startedAt,
						finishedAt: a.finishedAt,
					},
					e = (
						await b
							.insert(cW.tasks)
							.values({ ...d, createdAt: new Date() })
							.returning()
					)[0]
				if (!e) throw new cZ("Failed to create task")
				j.set(a.id, e.id)
			}
			for (let [c, d] of j)
				for (let e of await a.query.toolErrors.findMany({ where: cm(cW.toolErrors.taskId, c) })) {
					let a = { runId: h, taskId: d, toolName: e.toolName, error: e.error }
					await b.insert(cW.toolErrors).values({ ...a, createdAt: new Date() })
				}
			for (let d of await a.query.toolErrors.findMany({ where: cm(cW.toolErrors.runId, c) })) {
				if (d.taskId && j.has(d.taskId)) continue
				let a = {
					runId: h,
					taskId: (d.taskId && j.get(d.taskId)) || null,
					toolName: d.toolName,
					error: d.error,
				}
				await b.insert(cW.toolErrors).values({ ...a, createdAt: new Date() })
			}
			return h
		}
		a.s(["copyRun", 0, fH], 31930), a.s([], 12966)
		var fI = a.i(14747),
			fJ = a.i(24868),
			fK = a.i(92509)
		let fL = fI.dirname(
				(0, fK.fileURLToPath)(
					{
						get url() {
							return `file://${a.P("packages/evals/src/exercises/index.ts")}`
						},
					}.url,
				),
			),
			fM = fI.resolve(fL, "..", "..", "..", "..", "..", "evals"),
			fN = async (a, b) => {
				try {
					let c = fI.resolve(a, b)
					return (await fJ.readdir(c, { withFileTypes: !0 }))
						.filter((a) => a.isDirectory() && !a.name.startsWith("."))
						.map((a) => a.name)
				} catch (a) {
					return console.error(`Error listing directories at ${b}:`, a), []
				}
			},
			fO = async (a, b) => fN(fL, fI.join(a, b))
		a.s(
			[
				"EVALS_REPO_PATH",
				0,
				fM,
				"exerciseLanguages",
				0,
				["go", "java", "javascript", "python", "rust"],
				"getExercisesForLanguage",
				0,
				fO,
				"listDirectories",
				0,
				fN,
			],
			16008,
		),
			a.s([], 52824)
	},
]

//# sourceMappingURL=packages_evals_src_index_ts_7277b150._.js.map
