module.exports = [
	97884,
	2226,
	35865,
	(e) => {
		"use strict"
		let t,
			i,
			r = Symbol.for("drizzle:entityKind")
		function n(e, t) {
			if (!e || "object" != typeof e) return !1
			if (e instanceof t) return !0
			if (!Object.prototype.hasOwnProperty.call(t, r))
				throw Error(
					`Class "${t.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`,
				)
			let i = Object.getPrototypeOf(e).constructor
			if (i)
				for (; i; ) {
					if (r in i && i[r] === t[r]) return !0
					i = Object.getPrototypeOf(i)
				}
			return !1
		}
		Symbol.for("drizzle:hasOwnEntityKind")
		let s = Symbol.for("drizzle:Name"),
			a = Symbol.for("drizzle:Schema"),
			o = Symbol.for("drizzle:Columns"),
			l = Symbol.for("drizzle:ExtraConfigColumns"),
			c = Symbol.for("drizzle:OriginalName"),
			u = Symbol.for("drizzle:BaseName"),
			h = Symbol.for("drizzle:IsAlias"),
			f = Symbol.for("drizzle:ExtraConfigBuilder"),
			d = Symbol.for("drizzle:IsDrizzleTable")
		class m {
			static [r] = "Table"
			static Symbol = {
				Name: s,
				Schema: a,
				OriginalName: c,
				Columns: o,
				ExtraConfigColumns: l,
				BaseName: u,
				IsAlias: h,
				ExtraConfigBuilder: f,
			};
			[s];
			[c];
			[a];
			[o];
			[l];
			[u];
			[h] = !1;
			[d] = !0;
			[f] = void 0
			constructor(e, t, i) {
				;(this[s] = this[c] = e), (this[a] = t), (this[u] = i)
			}
		}
		function g(e) {
			return `${e[a] ?? "public"}.${e[s]}`
		}
		class p {
			constructor(e, t) {
				;(this.table = e),
					(this.config = t),
					(this.name = t.name),
					(this.keyAsName = t.keyAsName),
					(this.notNull = t.notNull),
					(this.default = t.default),
					(this.defaultFn = t.defaultFn),
					(this.onUpdateFn = t.onUpdateFn),
					(this.hasDefault = t.hasDefault),
					(this.primary = t.primaryKey),
					(this.isUnique = t.isUnique),
					(this.uniqueName = t.uniqueName),
					(this.uniqueType = t.uniqueType),
					(this.dataType = t.dataType),
					(this.columnType = t.columnType),
					(this.generated = t.generated),
					(this.generatedIdentity = t.generatedIdentity)
			}
			static [r] = "Column"
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
			mapFromDriverValue(e) {
				return e
			}
			mapToDriverValue(e) {
				return e
			}
			shouldDisableInsert() {
				return void 0 !== this.config.generated && "byDefault" !== this.config.generated.type
			}
		}
		class y {
			static [r] = "ColumnBuilder"
			config
			constructor(e, t, i) {
				this.config = {
					name: e,
					keyAsName: "" === e,
					notNull: !1,
					default: void 0,
					hasDefault: !1,
					primaryKey: !1,
					isUnique: !1,
					uniqueName: void 0,
					uniqueType: void 0,
					dataType: t,
					columnType: i,
					generated: void 0,
				}
			}
			$type() {
				return this
			}
			notNull() {
				return (this.config.notNull = !0), this
			}
			default(e) {
				return (this.config.default = e), (this.config.hasDefault = !0), this
			}
			$defaultFn(e) {
				return (this.config.defaultFn = e), (this.config.hasDefault = !0), this
			}
			$default = this.$defaultFn
			$onUpdateFn(e) {
				return (this.config.onUpdateFn = e), (this.config.hasDefault = !0), this
			}
			$onUpdate = this.$onUpdateFn
			primaryKey() {
				return (this.config.primaryKey = !0), (this.config.notNull = !0), this
			}
			setName(e) {
				"" === this.config.name && (this.config.name = e)
			}
		}
		class b {
			static [r] = "PgForeignKeyBuilder"
			reference
			_onUpdate = "no action"
			_onDelete = "no action"
			constructor(e, t) {
				;(this.reference = () => {
					let { name: t, columns: i, foreignColumns: r } = e()
					return { name: t, columns: i, foreignTable: r[0].table, foreignColumns: r }
				}),
					t && ((this._onUpdate = t.onUpdate), (this._onDelete = t.onDelete))
			}
			onUpdate(e) {
				return (this._onUpdate = void 0 === e ? "no action" : e), this
			}
			onDelete(e) {
				return (this._onDelete = void 0 === e ? "no action" : e), this
			}
			build(e) {
				return new w(e, this)
			}
		}
		class w {
			constructor(e, t) {
				;(this.table = e),
					(this.reference = t.reference),
					(this.onUpdate = t._onUpdate),
					(this.onDelete = t._onDelete)
			}
			static [r] = "PgForeignKey"
			reference
			onUpdate
			onDelete
			getName() {
				let { name: e, columns: t, foreignColumns: i } = this.reference(),
					r = t.map((e) => e.name),
					n = i.map((e) => e.name),
					a = [this.table[s], ...r, i[0].table[s], ...n]
				return e ?? `${a.join("_")}_fk`
			}
		}
		function v(e, ...t) {
			return e(...t)
		}
		function S(e, t) {
			return `${e[s]}_${t.join("_")}_unique`
		}
		class N {
			constructor(e, t) {
				;(this.name = t), (this.columns = e)
			}
			static [r] = "PgUniqueConstraintBuilder"
			columns
			nullsNotDistinctConfig = !1
			nullsNotDistinct() {
				return (this.nullsNotDistinctConfig = !0), this
			}
			build(e) {
				return new T(e, this.columns, this.nullsNotDistinctConfig, this.name)
			}
		}
		class P {
			static [r] = "PgUniqueOnConstraintBuilder"
			name
			constructor(e) {
				this.name = e
			}
			on(...e) {
				return new N(e, this.name)
			}
		}
		class T {
			constructor(e, t, i, r) {
				;(this.table = e),
					(this.columns = t),
					(this.name =
						r ??
						S(
							this.table,
							this.columns.map((e) => e.name),
						)),
					(this.nullsNotDistinct = i)
			}
			static [r] = "PgUniqueConstraint"
			columns
			name
			nullsNotDistinct = !1
			getName() {
				return this.name
			}
		}
		function x(e, t, i) {
			for (let r = t; r < e.length; r++) {
				let n = e[r]
				if ("\\" === n) {
					r++
					continue
				}
				if ('"' === n) return [e.slice(t, r).replace(/\\/g, ""), r + 1]
				if (!i && ("," === n || "}" === n)) return [e.slice(t, r).replace(/\\/g, ""), r]
			}
			return [e.slice(t).replace(/\\/g, ""), e.length]
		}
		class $ extends y {
			foreignKeyConfigs = []
			static [r] = "PgColumnBuilder"
			array(e) {
				return new B(this.config.name, this, e)
			}
			references(e, t = {}) {
				return this.foreignKeyConfigs.push({ ref: e, actions: t }), this
			}
			unique(e, t) {
				return (
					(this.config.isUnique = !0), (this.config.uniqueName = e), (this.config.uniqueType = t?.nulls), this
				)
			}
			generatedAlwaysAs(e) {
				return (this.config.generated = { as: e, type: "always", mode: "stored" }), this
			}
			buildForeignKeys(e, t) {
				return this.foreignKeyConfigs.map(({ ref: i, actions: r }) =>
					v(
						(i, r) => {
							let n = new b(() => ({ columns: [e], foreignColumns: [i()] }))
							return (
								r.onUpdate && n.onUpdate(r.onUpdate), r.onDelete && n.onDelete(r.onDelete), n.build(t)
							)
						},
						i,
						r,
					),
				)
			}
			buildExtraConfigColumn(e) {
				return new q(e, this.config)
			}
		}
		class C extends p {
			constructor(e, t) {
				t.uniqueName || (t.uniqueName = S(e, [t.name])), super(e, t), (this.table = e)
			}
			static [r] = "PgColumn"
		}
		class q extends C {
			static [r] = "ExtraConfigColumn"
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
			op(e) {
				return (this.indexConfig.opClass = e), this
			}
		}
		class _ {
			static [r] = "IndexedColumn"
			constructor(e, t, i, r) {
				;(this.name = e), (this.keyAsName = t), (this.type = i), (this.indexConfig = r)
			}
			name
			keyAsName
			type
			indexConfig
		}
		class B extends $ {
			static [r] = "PgArrayBuilder"
			constructor(e, t, i) {
				super(e, "array", "PgArray"), (this.config.baseBuilder = t), (this.config.size = i)
			}
			build(e) {
				let t = this.config.baseBuilder.build(e)
				return new A(e, this.config, t)
			}
		}
		class A extends C {
			constructor(e, t, i, r) {
				super(e, t), (this.baseColumn = i), (this.range = r), (this.size = t.size)
			}
			size
			static [r] = "PgArray"
			getSQLType() {
				return `${this.baseColumn.getSQLType()}[${"number" == typeof this.size ? this.size : ""}]`
			}
			mapFromDriverValue(e) {
				return (
					"string" == typeof e &&
						(e = (function (e) {
							let [t] = (function e(t, i = 0) {
								let r = [],
									n = i,
									s = !1
								for (; n < t.length; ) {
									let a = t[n]
									if ("," === a) {
										;(s || n === i) && r.push(""), (s = !0), n++
										continue
									}
									if (((s = !1), "\\" === a)) {
										n += 2
										continue
									}
									if ('"' === a) {
										let [e, i] = x(t, n + 1, !0)
										r.push(e), (n = i)
										continue
									}
									if ("}" === a) return [r, n + 1]
									if ("{" === a) {
										let [i, s] = e(t, n + 1)
										r.push(i), (n = s)
										continue
									}
									let [o, l] = x(t, n, !1)
									r.push(o), (n = l)
								}
								return [r, n]
							})(e, 1)
							return t
						})(e)),
					e.map((e) => this.baseColumn.mapFromDriverValue(e))
				)
			}
			mapToDriverValue(e, t = !1) {
				let i = e.map((e) =>
					null === e
						? null
						: n(this.baseColumn, A)
							? this.baseColumn.mapToDriverValue(e, !0)
							: this.baseColumn.mapToDriverValue(e),
				)
				return t
					? i
					: (function e(t) {
							return `{${t.map((t) => (Array.isArray(t) ? e(t) : "string" == typeof t ? `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${t}`)).join(",")}}`
						})(i)
			}
		}
		class O extends $ {
			static [r] = "PgEnumObjectColumnBuilder"
			constructor(e, t) {
				super(e, "string", "PgEnumObjectColumn"), (this.config.enum = t)
			}
			build(e) {
				return new j(e, this.config)
			}
		}
		class j extends C {
			static [r] = "PgEnumObjectColumn"
			enum
			enumValues = this.config.enum.enumValues
			constructor(e, t) {
				super(e, t), (this.enum = t.enum)
			}
			getSQLType() {
				return this.enum.enumName
			}
		}
		let E = Symbol.for("drizzle:isPgEnum")
		class k extends $ {
			static [r] = "PgEnumColumnBuilder"
			constructor(e, t) {
				super(e, "string", "PgEnumColumn"), (this.config.enum = t)
			}
			build(e) {
				return new D(e, this.config)
			}
		}
		class D extends C {
			static [r] = "PgEnumColumn"
			enum = this.config.enum
			enumValues = this.config.enum.enumValues
			constructor(e, t) {
				super(e, t), (this.enum = t.enum)
			}
			getSQLType() {
				return this.enum.enumName
			}
		}
		class z {
			static [r] = "Subquery"
			constructor(e, t, i, r = !1, n = []) {
				this._ = { brand: "Subquery", sql: e, selectedFields: t, alias: i, isWith: r, usedTables: n }
			}
		}
		class Q extends z {
			static [r] = "WithSubquery"
		}
		let L = (e, r) =>
				t
					? (i || (i = t.trace.getTracer("drizzle-orm", "0.44.1")),
						v(
							(t, i) =>
								i.startActiveSpan(e, (e) => {
									try {
										return r(e)
									} catch (i) {
										throw (
											(e.setStatus({
												code: t.SpanStatusCode.ERROR,
												message: i instanceof Error ? i.message : "Unknown error",
											}),
											i)
										)
									} finally {
										e.end()
									}
								}),
							t,
							i,
						))
					: r(),
			F = Symbol.for("drizzle:ViewBaseConfig")
		class I {
			static [r] = "FakePrimitiveParam"
		}
		function M(e) {
			return null != e && "function" == typeof e.getSQL
		}
		class U {
			static [r] = "StringChunk"
			value
			constructor(e) {
				this.value = Array.isArray(e) ? e : [e]
			}
			getSQL() {
				return new V([this])
			}
		}
		class V {
			constructor(e) {
				for (const t of ((this.queryChunks = e), e))
					if (n(t, m)) {
						const e = t[m.Symbol.Schema]
						this.usedTables.push(void 0 === e ? t[m.Symbol.Name] : e + "." + t[m.Symbol.Name])
					}
			}
			static [r] = "SQL"
			decoder = J
			shouldInlineParams = !1
			usedTables = []
			append(e) {
				return this.queryChunks.push(...e.queryChunks), this
			}
			toQuery(e) {
				return L("drizzle.buildSQL", (t) => {
					let i = this.buildQueryFromSourceParams(this.queryChunks, e)
					return (
						t?.setAttributes({
							"drizzle.query.text": i.sql,
							"drizzle.query.params": JSON.stringify(i.params),
						}),
						i
					)
				})
			}
			buildQueryFromSourceParams(e, t) {
				let i = Object.assign({}, t, {
						inlineParams: t.inlineParams || this.shouldInlineParams,
						paramStartIndex: t.paramStartIndex || { value: 0 },
					}),
					{
						casing: r,
						escapeName: s,
						escapeParam: a,
						prepareTyping: o,
						inlineParams: l,
						paramStartIndex: c,
					} = i
				var u = e.map((e) => {
					if (n(e, U)) return { sql: e.value.join(""), params: [] }
					if (n(e, R)) return { sql: s(e.value), params: [] }
					if (void 0 === e) return { sql: "", params: [] }
					if (Array.isArray(e)) {
						let t = [new U("(")]
						for (let [i, r] of e.entries()) t.push(r), i < e.length - 1 && t.push(new U(", "))
						return t.push(new U(")")), this.buildQueryFromSourceParams(t, i)
					}
					if (n(e, V))
						return this.buildQueryFromSourceParams(e.queryChunks, {
							...i,
							inlineParams: l || e.shouldInlineParams,
						})
					if (n(e, m)) {
						let t = e[m.Symbol.Schema],
							i = e[m.Symbol.Name]
						return { sql: void 0 === t || e[h] ? s(i) : s(t) + "." + s(i), params: [] }
					}
					if (n(e, p)) {
						let i = r.getColumnCasing(e)
						if ("indexes" === t.invokeSource) return { sql: s(i), params: [] }
						let n = e.table[m.Symbol.Schema]
						return {
							sql:
								e.table[h] || void 0 === n
									? s(e.table[m.Symbol.Name]) + "." + s(i)
									: s(n) + "." + s(e.table[m.Symbol.Name]) + "." + s(i),
							params: [],
						}
					}
					if (n(e, ei)) {
						let t = e[F].schema,
							i = e[F].name
						return { sql: void 0 === t || e[F].isAlias ? s(i) : s(t) + "." + s(i), params: [] }
					}
					if (n(e, W)) {
						if (n(e.value, Z)) return { sql: a(c.value++, e), params: [e], typings: ["none"] }
						let t = null === e.value ? null : e.encoder.mapToDriverValue(e.value)
						if (n(t, V)) return this.buildQueryFromSourceParams([t], i)
						if (l) return { sql: this.mapInlineParam(t, i), params: [] }
						let r = ["none"]
						return o && (r = [o(e.encoder)]), { sql: a(c.value++, t), params: [t], typings: r }
					}
					return n(e, Z)
						? { sql: a(c.value++, e), params: [e], typings: ["none"] }
						: n(e, V.Aliased) && void 0 !== e.fieldAlias
							? { sql: s(e.fieldAlias), params: [] }
							: n(e, z)
								? e._.isWith
									? { sql: s(e._.alias), params: [] }
									: this.buildQueryFromSourceParams(
											[new U("("), e._.sql, new U(") "), new R(e._.alias)],
											i,
										)
								: e && "function" == typeof e && E in e && !0 === e[E]
									? e.schema
										? { sql: s(e.schema) + "." + s(e.enumName), params: [] }
										: { sql: s(e.enumName), params: [] }
									: M(e)
										? e.shouldOmitSQLParens?.()
											? this.buildQueryFromSourceParams([e.getSQL()], i)
											: this.buildQueryFromSourceParams([new U("("), e.getSQL(), new U(")")], i)
										: l
											? { sql: this.mapInlineParam(e, i), params: [] }
											: { sql: a(c.value++, e), params: [e], typings: ["none"] }
				})
				let f = { sql: "", params: [] }
				for (let e of u)
					(f.sql += e.sql),
						f.params.push(...e.params),
						e.typings?.length && (f.typings || (f.typings = []), f.typings.push(...e.typings))
				return f
			}
			mapInlineParam(e, { escapeString: t }) {
				if (null === e) return "null"
				if ("number" == typeof e || "boolean" == typeof e) return e.toString()
				if ("string" == typeof e) return t(e)
				if ("object" == typeof e) {
					let i = e.toString()
					return "[object Object]" === i ? t(JSON.stringify(e)) : t(i)
				}
				throw Error("Unexpected param value: " + e)
			}
			getSQL() {
				return this
			}
			as(e) {
				return void 0 === e ? this : new V.Aliased(this, e)
			}
			mapWith(e) {
				return (this.decoder = "function" == typeof e ? { mapFromDriverValue: e } : e), this
			}
			inlineParams() {
				return (this.shouldInlineParams = !0), this
			}
			if(e) {
				return e ? this : void 0
			}
		}
		class R {
			constructor(e) {
				this.value = e
			}
			static [r] = "Name"
			brand
			getSQL() {
				return new V([this])
			}
		}
		let J = { mapFromDriverValue: (e) => e },
			K = { mapToDriverValue: (e) => e }
		;({ ...J, ...K })
		class W {
			constructor(e, t = K) {
				;(this.value = e), (this.encoder = t)
			}
			static [r] = "Param"
			brand
			getSQL() {
				return new V([this])
			}
		}
		function G(e, ...t) {
			let i = []
			for (let [r, n] of ((t.length > 0 || (e.length > 0 && "" !== e[0])) && i.push(new U(e[0])), t.entries()))
				i.push(n, new U(e[r + 1]))
			return new V(i)
		}
		;((H = G || (G = {})).empty = function () {
			return new V([])
		}),
			(H.fromList = function (e) {
				return new V(e)
			}),
			(H.raw = function (e) {
				return new V([new U(e)])
			}),
			(H.join = function (e, t) {
				let i = []
				for (let [r, n] of e.entries()) r > 0 && void 0 !== t && i.push(t), i.push(n)
				return new V(i)
			}),
			(H.identifier = function (e) {
				return new R(e)
			}),
			(H.placeholder = function (e) {
				return new Z(e)
			}),
			(H.param = function (e, t) {
				return new W(e, t)
			})
		var H,
			Y = V || (V = {})
		class X {
			constructor(e, t) {
				;(this.sql = e), (this.fieldAlias = t)
			}
			static [r] = "SQL.Aliased"
			isSelectionField = !1
			getSQL() {
				return this.sql
			}
			clone() {
				return new X(this.sql, this.fieldAlias)
			}
		}
		Y.Aliased = X
		class Z {
			constructor(e) {
				this.name = e
			}
			static [r] = "Placeholder"
			getSQL() {
				return new V([this])
			}
		}
		function ee(e, t) {
			return e.map((e) => {
				if (n(e, Z)) {
					if (!(e.name in t)) throw Error(`No value for placeholder "${e.name}" was provided`)
					return t[e.name]
				}
				if (n(e, W) && n(e.value, Z)) {
					if (!(e.value.name in t)) throw Error(`No value for placeholder "${e.value.name}" was provided`)
					return e.encoder.mapToDriverValue(t[e.value.name])
				}
				return e
			})
		}
		let et = Symbol.for("drizzle:IsDrizzleView")
		class ei {
			static [r] = "View";
			[F];
			[et] = !0
			constructor({ name: e, schema: t, selectedFields: i, query: r }) {
				this[F] = {
					name: e,
					originalName: e,
					schema: t,
					selectedFields: i,
					query: r,
					isExisting: !r,
					isAlias: !1,
				}
			}
			getSQL() {
				return new V([this])
			}
		}
		function er(e, t) {
			return Object.entries(e).reduce((e, [i, r]) => {
				if ("string" != typeof i) return e
				let s = t ? [...t, i] : [i]
				return (
					n(r, p) || n(r, V) || n(r, V.Aliased)
						? e.push({ path: s, field: r })
						: n(r, m)
							? e.push(...er(r[m.Symbol.Columns], s))
							: e.push(...er(r, s)),
					e
				)
			}, [])
		}
		function en(e, t) {
			let i = Object.keys(e),
				r = Object.keys(t)
			if (i.length !== r.length) return !1
			for (let [e, t] of i.entries()) if (t !== r[e]) return !1
			return !0
		}
		function es(e, t) {
			let i = Object.entries(t)
				.filter(([, e]) => void 0 !== e)
				.map(([t, i]) => (n(i, V) || n(i, p) ? [t, i] : [t, new W(i, e[m.Symbol.Columns][t])]))
			if (0 === i.length) throw Error("No values to set")
			return Object.fromEntries(i)
		}
		function ea(e) {
			return e[m.Symbol.Columns]
		}
		function eo(e) {
			return n(e, z)
				? e._.alias
				: n(e, ei)
					? e[F].name
					: n(e, V)
						? void 0
						: e[m.Symbol.IsAlias]
							? e[m.Symbol.Name]
							: e[m.Symbol.BaseName]
		}
		function el(e, t) {
			return { name: "string" == typeof e && e.length > 0 ? e : "", config: "object" == typeof e ? e : t }
		}
		;(p.prototype.getSQL = function () {
			return new V([this])
		}),
			(m.prototype.getSQL = function () {
				return new V([this])
			}),
			(z.prototype.getSQL = function () {
				return new V([this])
			})
		class ec extends $ {
			static [r] = "PgIntColumnBaseBuilder"
			generatedAlwaysAsIdentity(e) {
				if (e) {
					let { name: t, ...i } = e
					this.config.generatedIdentity = { type: "always", sequenceName: t, sequenceOptions: i }
				} else this.config.generatedIdentity = { type: "always" }
				return (this.config.hasDefault = !0), (this.config.notNull = !0), this
			}
			generatedByDefaultAsIdentity(e) {
				if (e) {
					let { name: t, ...i } = e
					this.config.generatedIdentity = { type: "byDefault", sequenceName: t, sequenceOptions: i }
				} else this.config.generatedIdentity = { type: "byDefault" }
				return (this.config.hasDefault = !0), (this.config.notNull = !0), this
			}
		}
		class eu extends ec {
			static [r] = "PgBigInt53Builder"
			constructor(e) {
				super(e, "number", "PgBigInt53")
			}
			build(e) {
				return new eh(e, this.config)
			}
		}
		class eh extends C {
			static [r] = "PgBigInt53"
			getSQLType() {
				return "bigint"
			}
			mapFromDriverValue(e) {
				return "number" == typeof e ? e : Number(e)
			}
		}
		class ef extends ec {
			static [r] = "PgBigInt64Builder"
			constructor(e) {
				super(e, "bigint", "PgBigInt64")
			}
			build(e) {
				return new ed(e, this.config)
			}
		}
		class ed extends C {
			static [r] = "PgBigInt64"
			getSQLType() {
				return "bigint"
			}
			mapFromDriverValue(e) {
				return BigInt(e)
			}
		}
		function em(e, t) {
			let { name: i, config: r } = el(e, t)
			return "number" === r.mode ? new eu(i) : new ef(i)
		}
		class eg extends $ {
			static [r] = "PgBigSerial53Builder"
			constructor(e) {
				super(e, "number", "PgBigSerial53"), (this.config.hasDefault = !0), (this.config.notNull = !0)
			}
			build(e) {
				return new ep(e, this.config)
			}
		}
		class ep extends C {
			static [r] = "PgBigSerial53"
			getSQLType() {
				return "bigserial"
			}
			mapFromDriverValue(e) {
				return "number" == typeof e ? e : Number(e)
			}
		}
		class ey extends $ {
			static [r] = "PgBigSerial64Builder"
			constructor(e) {
				super(e, "bigint", "PgBigSerial64"), (this.config.hasDefault = !0)
			}
			build(e) {
				return new eb(e, this.config)
			}
		}
		class eb extends C {
			static [r] = "PgBigSerial64"
			getSQLType() {
				return "bigserial"
			}
			mapFromDriverValue(e) {
				return BigInt(e)
			}
		}
		function ew(e, t) {
			let { name: i, config: r } = el(e, t)
			return "number" === r.mode ? new eg(i) : new ey(i)
		}
		class ev extends $ {
			static [r] = "PgBooleanBuilder"
			constructor(e) {
				super(e, "boolean", "PgBoolean")
			}
			build(e) {
				return new eS(e, this.config)
			}
		}
		class eS extends C {
			static [r] = "PgBoolean"
			getSQLType() {
				return "boolean"
			}
		}
		function eN(e) {
			return new ev(e ?? "")
		}
		class eP extends $ {
			static [r] = "PgCharBuilder"
			constructor(e, t) {
				super(e, "string", "PgChar"), (this.config.length = t.length), (this.config.enumValues = t.enum)
			}
			build(e) {
				return new eT(e, this.config)
			}
		}
		class eT extends C {
			static [r] = "PgChar"
			length = this.config.length
			enumValues = this.config.enumValues
			getSQLType() {
				return void 0 === this.length ? "char" : `char(${this.length})`
			}
		}
		function ex(e, t = {}) {
			let { name: i, config: r } = el(e, t)
			return new eP(i, r)
		}
		class e$ extends $ {
			static [r] = "PgCidrBuilder"
			constructor(e) {
				super(e, "string", "PgCidr")
			}
			build(e) {
				return new eC(e, this.config)
			}
		}
		class eC extends C {
			static [r] = "PgCidr"
			getSQLType() {
				return "cidr"
			}
		}
		function eq(e) {
			return new e$(e ?? "")
		}
		class e_ extends $ {
			static [r] = "PgCustomColumnBuilder"
			constructor(e, t, i) {
				super(e, "custom", "PgCustomColumn"), (this.config.fieldConfig = t), (this.config.customTypeParams = i)
			}
			build(e) {
				return new eB(e, this.config)
			}
		}
		class eB extends C {
			static [r] = "PgCustomColumn"
			sqlName
			mapTo
			mapFrom
			constructor(e, t) {
				super(e, t),
					(this.sqlName = t.customTypeParams.dataType(t.fieldConfig)),
					(this.mapTo = t.customTypeParams.toDriver),
					(this.mapFrom = t.customTypeParams.fromDriver)
			}
			getSQLType() {
				return this.sqlName
			}
			mapFromDriverValue(e) {
				return "function" == typeof this.mapFrom ? this.mapFrom(e) : e
			}
			mapToDriverValue(e) {
				return "function" == typeof this.mapTo ? this.mapTo(e) : e
			}
		}
		function eA(e) {
			return (t, i) => {
				let { name: r, config: n } = el(t, i)
				return new e_(r, n, e)
			}
		}
		class eO extends $ {
			static [r] = "PgDateColumnBaseBuilder"
			defaultNow() {
				return this.default(G`now()`)
			}
		}
		class ej extends eO {
			static [r] = "PgDateBuilder"
			constructor(e) {
				super(e, "date", "PgDate")
			}
			build(e) {
				return new eE(e, this.config)
			}
		}
		class eE extends C {
			static [r] = "PgDate"
			getSQLType() {
				return "date"
			}
			mapFromDriverValue(e) {
				return new Date(e)
			}
			mapToDriverValue(e) {
				return e.toISOString()
			}
		}
		class ek extends eO {
			static [r] = "PgDateStringBuilder"
			constructor(e) {
				super(e, "string", "PgDateString")
			}
			build(e) {
				return new eD(e, this.config)
			}
		}
		class eD extends C {
			static [r] = "PgDateString"
			getSQLType() {
				return "date"
			}
		}
		function ez(e, t) {
			let { name: i, config: r } = el(e, t)
			return r?.mode === "date" ? new ej(i) : new ek(i)
		}
		class eQ extends $ {
			static [r] = "PgDoublePrecisionBuilder"
			constructor(e) {
				super(e, "number", "PgDoublePrecision")
			}
			build(e) {
				return new eL(e, this.config)
			}
		}
		class eL extends C {
			static [r] = "PgDoublePrecision"
			getSQLType() {
				return "double precision"
			}
			mapFromDriverValue(e) {
				return "string" == typeof e ? Number.parseFloat(e) : e
			}
		}
		function eF(e) {
			return new eQ(e ?? "")
		}
		class eI extends $ {
			static [r] = "PgInetBuilder"
			constructor(e) {
				super(e, "string", "PgInet")
			}
			build(e) {
				return new eM(e, this.config)
			}
		}
		class eM extends C {
			static [r] = "PgInet"
			getSQLType() {
				return "inet"
			}
		}
		function eU(e) {
			return new eI(e ?? "")
		}
		class eV extends ec {
			static [r] = "PgIntegerBuilder"
			constructor(e) {
				super(e, "number", "PgInteger")
			}
			build(e) {
				return new eR(e, this.config)
			}
		}
		class eR extends C {
			static [r] = "PgInteger"
			getSQLType() {
				return "integer"
			}
			mapFromDriverValue(e) {
				return "string" == typeof e ? Number.parseInt(e) : e
			}
		}
		function eJ(e) {
			return new eV(e ?? "")
		}
		class eK extends $ {
			static [r] = "PgIntervalBuilder"
			constructor(e, t) {
				super(e, "string", "PgInterval"), (this.config.intervalConfig = t)
			}
			build(e) {
				return new eW(e, this.config)
			}
		}
		class eW extends C {
			static [r] = "PgInterval"
			fields = this.config.intervalConfig.fields
			precision = this.config.intervalConfig.precision
			getSQLType() {
				let e = this.fields ? ` ${this.fields}` : "",
					t = this.precision ? `(${this.precision})` : ""
				return `interval${e}${t}`
			}
		}
		function eG(e, t = {}) {
			let { name: i, config: r } = el(e, t)
			return new eK(i, r)
		}
		class eH extends $ {
			static [r] = "PgJsonBuilder"
			constructor(e) {
				super(e, "json", "PgJson")
			}
			build(e) {
				return new eY(e, this.config)
			}
		}
		class eY extends C {
			static [r] = "PgJson"
			constructor(e, t) {
				super(e, t)
			}
			getSQLType() {
				return "json"
			}
			mapToDriverValue(e) {
				return JSON.stringify(e)
			}
			mapFromDriverValue(e) {
				if ("string" == typeof e)
					try {
						return JSON.parse(e)
					} catch {}
				return e
			}
		}
		function eX(e) {
			return new eH(e ?? "")
		}
		class eZ extends $ {
			static [r] = "PgJsonbBuilder"
			constructor(e) {
				super(e, "json", "PgJsonb")
			}
			build(e) {
				return new e0(e, this.config)
			}
		}
		class e0 extends C {
			static [r] = "PgJsonb"
			constructor(e, t) {
				super(e, t)
			}
			getSQLType() {
				return "jsonb"
			}
			mapToDriverValue(e) {
				return JSON.stringify(e)
			}
			mapFromDriverValue(e) {
				if ("string" == typeof e)
					try {
						return JSON.parse(e)
					} catch {}
				return e
			}
		}
		function e1(e) {
			return new eZ(e ?? "")
		}
		class e2 extends $ {
			static [r] = "PgLineBuilder"
			constructor(e) {
				super(e, "array", "PgLine")
			}
			build(e) {
				return new e3(e, this.config)
			}
		}
		class e3 extends C {
			static [r] = "PgLine"
			getSQLType() {
				return "line"
			}
			mapFromDriverValue(e) {
				let [t, i, r] = e.slice(1, -1).split(",")
				return [Number.parseFloat(t), Number.parseFloat(i), Number.parseFloat(r)]
			}
			mapToDriverValue(e) {
				return `{${e[0]},${e[1]},${e[2]}}`
			}
		}
		class e4 extends $ {
			static [r] = "PgLineABCBuilder"
			constructor(e) {
				super(e, "json", "PgLineABC")
			}
			build(e) {
				return new e8(e, this.config)
			}
		}
		class e8 extends C {
			static [r] = "PgLineABC"
			getSQLType() {
				return "line"
			}
			mapFromDriverValue(e) {
				let [t, i, r] = e.slice(1, -1).split(",")
				return { a: Number.parseFloat(t), b: Number.parseFloat(i), c: Number.parseFloat(r) }
			}
			mapToDriverValue(e) {
				return `{${e.a},${e.b},${e.c}}`
			}
		}
		function e6(e, t) {
			let { name: i, config: r } = el(e, t)
			return r?.mode && "tuple" !== r.mode ? new e4(i) : new e2(i)
		}
		class e5 extends $ {
			static [r] = "PgMacaddrBuilder"
			constructor(e) {
				super(e, "string", "PgMacaddr")
			}
			build(e) {
				return new e7(e, this.config)
			}
		}
		class e7 extends C {
			static [r] = "PgMacaddr"
			getSQLType() {
				return "macaddr"
			}
		}
		function e9(e) {
			return new e5(e ?? "")
		}
		class te extends $ {
			static [r] = "PgMacaddr8Builder"
			constructor(e) {
				super(e, "string", "PgMacaddr8")
			}
			build(e) {
				return new tt(e, this.config)
			}
		}
		class tt extends C {
			static [r] = "PgMacaddr8"
			getSQLType() {
				return "macaddr8"
			}
		}
		function ti(e) {
			return new te(e ?? "")
		}
		class tr extends $ {
			static [r] = "PgNumericBuilder"
			constructor(e, t, i) {
				super(e, "string", "PgNumeric"), (this.config.precision = t), (this.config.scale = i)
			}
			build(e) {
				return new tn(e, this.config)
			}
		}
		class tn extends C {
			static [r] = "PgNumeric"
			precision
			scale
			constructor(e, t) {
				super(e, t), (this.precision = t.precision), (this.scale = t.scale)
			}
			mapFromDriverValue(e) {
				return "string" == typeof e ? e : String(e)
			}
			getSQLType() {
				return void 0 !== this.precision && void 0 !== this.scale
					? `numeric(${this.precision}, ${this.scale})`
					: void 0 === this.precision
						? "numeric"
						: `numeric(${this.precision})`
			}
		}
		class ts extends $ {
			static [r] = "PgNumericNumberBuilder"
			constructor(e, t, i) {
				super(e, "number", "PgNumericNumber"), (this.config.precision = t), (this.config.scale = i)
			}
			build(e) {
				return new ta(e, this.config)
			}
		}
		class ta extends C {
			static [r] = "PgNumericNumber"
			precision
			scale
			constructor(e, t) {
				super(e, t), (this.precision = t.precision), (this.scale = t.scale)
			}
			mapFromDriverValue(e) {
				return "number" == typeof e ? e : Number(e)
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
		class to extends $ {
			static [r] = "PgNumericBigIntBuilder"
			constructor(e, t, i) {
				super(e, "bigint", "PgNumericBigInt"), (this.config.precision = t), (this.config.scale = i)
			}
			build(e) {
				return new tl(e, this.config)
			}
		}
		class tl extends C {
			static [r] = "PgNumericBigInt"
			precision
			scale
			constructor(e, t) {
				super(e, t), (this.precision = t.precision), (this.scale = t.scale)
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
		function tc(e, t) {
			let { name: i, config: r } = el(e, t),
				n = r?.mode
			return "number" === n
				? new ts(i, r?.precision, r?.scale)
				: "bigint" === n
					? new to(i, r?.precision, r?.scale)
					: new tr(i, r?.precision, r?.scale)
		}
		class tu extends $ {
			static [r] = "PgPointTupleBuilder"
			constructor(e) {
				super(e, "array", "PgPointTuple")
			}
			build(e) {
				return new th(e, this.config)
			}
		}
		class th extends C {
			static [r] = "PgPointTuple"
			getSQLType() {
				return "point"
			}
			mapFromDriverValue(e) {
				if ("string" == typeof e) {
					let [t, i] = e.slice(1, -1).split(",")
					return [Number.parseFloat(t), Number.parseFloat(i)]
				}
				return [e.x, e.y]
			}
			mapToDriverValue(e) {
				return `(${e[0]},${e[1]})`
			}
		}
		class tf extends $ {
			static [r] = "PgPointObjectBuilder"
			constructor(e) {
				super(e, "json", "PgPointObject")
			}
			build(e) {
				return new td(e, this.config)
			}
		}
		class td extends C {
			static [r] = "PgPointObject"
			getSQLType() {
				return "point"
			}
			mapFromDriverValue(e) {
				if ("string" == typeof e) {
					let [t, i] = e.slice(1, -1).split(",")
					return { x: Number.parseFloat(t), y: Number.parseFloat(i) }
				}
				return e
			}
			mapToDriverValue(e) {
				return `(${e.x},${e.y})`
			}
		}
		function tm(e, t) {
			let { name: i, config: r } = el(e, t)
			return r?.mode && "tuple" !== r.mode ? new tf(i) : new tu(i)
		}
		function tg(e, t) {
			let i = new DataView(new ArrayBuffer(8))
			for (let r = 0; r < 8; r++) i.setUint8(r, e[t + r])
			return i.getFloat64(0, !0)
		}
		function tp(e) {
			let t = (function (e) {
					let t = []
					for (let i = 0; i < e.length; i += 2) t.push(Number.parseInt(e.slice(i, i + 2), 16))
					return new Uint8Array(t)
				})(e),
				i = 0,
				r = t[0]
			i += 1
			let n = new DataView(t.buffer),
				s = n.getUint32(i, 1 === r)
			if (((i += 4), 0x20000000 & s && (n.getUint32(i, 1 === r), (i += 4)), (65535 & s) == 1)) {
				let e = tg(t, i),
					r = tg(t, (i += 8))
				return (i += 8), [e, r]
			}
			throw Error("Unsupported geometry type")
		}
		class ty extends $ {
			static [r] = "PgGeometryBuilder"
			constructor(e) {
				super(e, "array", "PgGeometry")
			}
			build(e) {
				return new tb(e, this.config)
			}
		}
		class tb extends C {
			static [r] = "PgGeometry"
			getSQLType() {
				return "geometry(point)"
			}
			mapFromDriverValue(e) {
				return tp(e)
			}
			mapToDriverValue(e) {
				return `point(${e[0]} ${e[1]})`
			}
		}
		class tw extends $ {
			static [r] = "PgGeometryObjectBuilder"
			constructor(e) {
				super(e, "json", "PgGeometryObject")
			}
			build(e) {
				return new tv(e, this.config)
			}
		}
		class tv extends C {
			static [r] = "PgGeometryObject"
			getSQLType() {
				return "geometry(point)"
			}
			mapFromDriverValue(e) {
				let t = tp(e)
				return { x: t[0], y: t[1] }
			}
			mapToDriverValue(e) {
				return `point(${e.x} ${e.y})`
			}
		}
		function tS(e, t) {
			let { name: i, config: r } = el(e, t)
			return r?.mode && "tuple" !== r.mode ? new tw(i) : new ty(i)
		}
		class tN extends $ {
			static [r] = "PgRealBuilder"
			constructor(e, t) {
				super(e, "number", "PgReal"), (this.config.length = t)
			}
			build(e) {
				return new tP(e, this.config)
			}
		}
		class tP extends C {
			static [r] = "PgReal"
			constructor(e, t) {
				super(e, t)
			}
			getSQLType() {
				return "real"
			}
			mapFromDriverValue = (e) => ("string" == typeof e ? Number.parseFloat(e) : e)
		}
		function tT(e) {
			return new tN(e ?? "")
		}
		class tx extends $ {
			static [r] = "PgSerialBuilder"
			constructor(e) {
				super(e, "number", "PgSerial"), (this.config.hasDefault = !0), (this.config.notNull = !0)
			}
			build(e) {
				return new t$(e, this.config)
			}
		}
		class t$ extends C {
			static [r] = "PgSerial"
			getSQLType() {
				return "serial"
			}
		}
		function tC(e) {
			return new tx(e ?? "")
		}
		class tq extends ec {
			static [r] = "PgSmallIntBuilder"
			constructor(e) {
				super(e, "number", "PgSmallInt")
			}
			build(e) {
				return new t_(e, this.config)
			}
		}
		class t_ extends C {
			static [r] = "PgSmallInt"
			getSQLType() {
				return "smallint"
			}
			mapFromDriverValue = (e) => ("string" == typeof e ? Number(e) : e)
		}
		function tB(e) {
			return new tq(e ?? "")
		}
		class tA extends $ {
			static [r] = "PgSmallSerialBuilder"
			constructor(e) {
				super(e, "number", "PgSmallSerial"), (this.config.hasDefault = !0), (this.config.notNull = !0)
			}
			build(e) {
				return new tO(e, this.config)
			}
		}
		class tO extends C {
			static [r] = "PgSmallSerial"
			getSQLType() {
				return "smallserial"
			}
		}
		function tj(e) {
			return new tA(e ?? "")
		}
		class tE extends $ {
			static [r] = "PgTextBuilder"
			constructor(e, t) {
				super(e, "string", "PgText"), (this.config.enumValues = t.enum)
			}
			build(e) {
				return new tk(e, this.config)
			}
		}
		class tk extends C {
			static [r] = "PgText"
			enumValues = this.config.enumValues
			getSQLType() {
				return "text"
			}
		}
		function tD(e, t = {}) {
			let { name: i, config: r } = el(e, t)
			return new tE(i, r)
		}
		class tz extends eO {
			constructor(e, t, i) {
				super(e, "string", "PgTime"),
					(this.withTimezone = t),
					(this.precision = i),
					(this.config.withTimezone = t),
					(this.config.precision = i)
			}
			static [r] = "PgTimeBuilder"
			build(e) {
				return new tQ(e, this.config)
			}
		}
		class tQ extends C {
			static [r] = "PgTime"
			withTimezone
			precision
			constructor(e, t) {
				super(e, t), (this.withTimezone = t.withTimezone), (this.precision = t.precision)
			}
			getSQLType() {
				let e = void 0 === this.precision ? "" : `(${this.precision})`
				return `time${e}${this.withTimezone ? " with time zone" : ""}`
			}
		}
		function tL(e, t = {}) {
			let { name: i, config: r } = el(e, t)
			return new tz(i, r.withTimezone ?? !1, r.precision)
		}
		class tF extends eO {
			static [r] = "PgTimestampBuilder"
			constructor(e, t, i) {
				super(e, "date", "PgTimestamp"), (this.config.withTimezone = t), (this.config.precision = i)
			}
			build(e) {
				return new tI(e, this.config)
			}
		}
		class tI extends C {
			static [r] = "PgTimestamp"
			withTimezone
			precision
			constructor(e, t) {
				super(e, t), (this.withTimezone = t.withTimezone), (this.precision = t.precision)
			}
			getSQLType() {
				let e = void 0 === this.precision ? "" : ` (${this.precision})`
				return `timestamp${e}${this.withTimezone ? " with time zone" : ""}`
			}
			mapFromDriverValue = (e) => new Date(this.withTimezone ? e : e + "+0000")
			mapToDriverValue = (e) => e.toISOString()
		}
		class tM extends eO {
			static [r] = "PgTimestampStringBuilder"
			constructor(e, t, i) {
				super(e, "string", "PgTimestampString"), (this.config.withTimezone = t), (this.config.precision = i)
			}
			build(e) {
				return new tU(e, this.config)
			}
		}
		class tU extends C {
			static [r] = "PgTimestampString"
			withTimezone
			precision
			constructor(e, t) {
				super(e, t), (this.withTimezone = t.withTimezone), (this.precision = t.precision)
			}
			getSQLType() {
				let e = void 0 === this.precision ? "" : `(${this.precision})`
				return `timestamp${e}${this.withTimezone ? " with time zone" : ""}`
			}
		}
		function tV(e, t = {}) {
			let { name: i, config: r } = el(e, t)
			return r?.mode === "string"
				? new tM(i, r.withTimezone ?? !1, r.precision)
				: new tF(i, r?.withTimezone ?? !1, r?.precision)
		}
		class tR extends $ {
			static [r] = "PgUUIDBuilder"
			constructor(e) {
				super(e, "string", "PgUUID")
			}
			defaultRandom() {
				return this.default(G`gen_random_uuid()`)
			}
			build(e) {
				return new tJ(e, this.config)
			}
		}
		class tJ extends C {
			static [r] = "PgUUID"
			getSQLType() {
				return "uuid"
			}
		}
		function tK(e) {
			return new tR(e ?? "")
		}
		class tW extends $ {
			static [r] = "PgVarcharBuilder"
			constructor(e, t) {
				super(e, "string", "PgVarchar"), (this.config.length = t.length), (this.config.enumValues = t.enum)
			}
			build(e) {
				return new tG(e, this.config)
			}
		}
		class tG extends C {
			static [r] = "PgVarchar"
			length = this.config.length
			enumValues = this.config.enumValues
			getSQLType() {
				return void 0 === this.length ? "varchar" : `varchar(${this.length})`
			}
		}
		function tH(e, t = {}) {
			let { name: i, config: r } = el(e, t)
			return new tW(i, r)
		}
		class tY extends $ {
			static [r] = "PgBinaryVectorBuilder"
			constructor(e, t) {
				super(e, "string", "PgBinaryVector"), (this.config.dimensions = t.dimensions)
			}
			build(e) {
				return new tX(e, this.config)
			}
		}
		class tX extends C {
			static [r] = "PgBinaryVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `bit(${this.dimensions})`
			}
		}
		function tZ(e, t) {
			let { name: i, config: r } = el(e, t)
			return new tY(i, r)
		}
		class t0 extends $ {
			static [r] = "PgHalfVectorBuilder"
			constructor(e, t) {
				super(e, "array", "PgHalfVector"), (this.config.dimensions = t.dimensions)
			}
			build(e) {
				return new t1(e, this.config)
			}
		}
		class t1 extends C {
			static [r] = "PgHalfVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `halfvec(${this.dimensions})`
			}
			mapToDriverValue(e) {
				return JSON.stringify(e)
			}
			mapFromDriverValue(e) {
				return e
					.slice(1, -1)
					.split(",")
					.map((e) => Number.parseFloat(e))
			}
		}
		function t2(e, t) {
			let { name: i, config: r } = el(e, t)
			return new t0(i, r)
		}
		class t3 extends $ {
			static [r] = "PgSparseVectorBuilder"
			constructor(e, t) {
				super(e, "string", "PgSparseVector"), (this.config.dimensions = t.dimensions)
			}
			build(e) {
				return new t4(e, this.config)
			}
		}
		class t4 extends C {
			static [r] = "PgSparseVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `sparsevec(${this.dimensions})`
			}
		}
		function t8(e, t) {
			let { name: i, config: r } = el(e, t)
			return new t3(i, r)
		}
		class t6 extends $ {
			static [r] = "PgVectorBuilder"
			constructor(e, t) {
				super(e, "array", "PgVector"), (this.config.dimensions = t.dimensions)
			}
			build(e) {
				return new t5(e, this.config)
			}
		}
		class t5 extends C {
			static [r] = "PgVector"
			dimensions = this.config.dimensions
			getSQLType() {
				return `vector(${this.dimensions})`
			}
			mapToDriverValue(e) {
				return JSON.stringify(e)
			}
			mapFromDriverValue(e) {
				return e
					.slice(1, -1)
					.split(",")
					.map((e) => Number.parseFloat(e))
			}
		}
		function t7(e, t) {
			let { name: i, config: r } = el(e, t)
			return new t6(i, r)
		}
		let t9 = Symbol.for("drizzle:PgInlineForeignKeys"),
			ie = Symbol.for("drizzle:EnableRLS")
		class it extends m {
			static [r] = "PgTable"
			static Symbol = Object.assign({}, m.Symbol, { InlineForeignKeys: t9, EnableRLS: ie });
			[t9] = [];
			[ie] = !1;
			[m.Symbol.ExtraConfigBuilder] = void 0;
			[m.Symbol.ExtraConfigColumns] = {}
		}
		let ii = (e, t, i) =>
			(function (e, t, i, r, n = e) {
				let s = new it(e, r, n),
					a =
						"function" == typeof t
							? t({
									bigint: em,
									bigserial: ew,
									boolean: eN,
									char: ex,
									cidr: eq,
									customType: eA,
									date: ez,
									doublePrecision: eF,
									inet: eU,
									integer: eJ,
									interval: eG,
									json: eX,
									jsonb: e1,
									line: e6,
									macaddr: e9,
									macaddr8: ti,
									numeric: tc,
									point: tm,
									geometry: tS,
									real: tT,
									serial: tC,
									smallint: tB,
									smallserial: tj,
									text: tD,
									time: tL,
									timestamp: tV,
									uuid: tK,
									varchar: tH,
									bit: tZ,
									halfvec: t2,
									sparsevec: t8,
									vector: t7,
								})
							: t,
					o = Object.fromEntries(
						Object.entries(a).map(([e, t]) => {
							t.setName(e)
							let i = t.build(s)
							return s[t9].push(...t.buildForeignKeys(i, s)), [e, i]
						}),
					),
					l = Object.fromEntries(
						Object.entries(a).map(([e, t]) => (t.setName(e), [e, t.buildExtraConfigColumn(s)])),
					),
					c = Object.assign(s, o)
				return (
					(c[m.Symbol.Columns] = o),
					(c[m.Symbol.ExtraConfigColumns] = l),
					i && (c[it.Symbol.ExtraConfigBuilder] = i),
					Object.assign(c, { enableRLS: () => ((c[it.Symbol.EnableRLS] = !0), c) })
				)
			})(e, t, i, void 0)
		class ir {
			constructor(e, t) {
				;(this.unique = e), (this.name = t)
			}
			static [r] = "PgIndexBuilderOn"
			on(...e) {
				return new is(
					e.map((e) => {
						if (n(e, V)) return e
						let t = new _(e.name, !!e.keyAsName, e.columnType, e.indexConfig)
						return (e.indexConfig = JSON.parse(JSON.stringify(e.defaultConfig))), t
					}),
					this.unique,
					!1,
					this.name,
				)
			}
			onOnly(...e) {
				return new is(
					e.map((e) => {
						if (n(e, V)) return e
						let t = new _(e.name, !!e.keyAsName, e.columnType, e.indexConfig)
						return (e.indexConfig = e.defaultConfig), t
					}),
					this.unique,
					!0,
					this.name,
				)
			}
			using(e, ...t) {
				return new is(
					t.map((e) => {
						if (n(e, V)) return e
						let t = new _(e.name, !!e.keyAsName, e.columnType, e.indexConfig)
						return (e.indexConfig = JSON.parse(JSON.stringify(e.defaultConfig))), t
					}),
					this.unique,
					!0,
					this.name,
					e,
				)
			}
		}
		class is {
			static [r] = "PgIndexBuilder"
			config
			constructor(e, t, i, r, n = "btree") {
				this.config = { name: r, columns: e, unique: t, only: i, method: n }
			}
			concurrently() {
				return (this.config.concurrently = !0), this
			}
			with(e) {
				return (this.config.with = e), this
			}
			where(e) {
				return (this.config.where = e), this
			}
			build(e) {
				return new ia(this.config, e)
			}
		}
		class ia {
			static [r] = "PgIndex"
			config
			constructor(e, t) {
				this.config = { ...e, table: t }
			}
		}
		class io {
			static [r] = "PgPrimaryKeyBuilder"
			columns
			name
			constructor(e, t) {
				;(this.columns = e), (this.name = t)
			}
			build(e) {
				return new il(e, this.columns, this.name)
			}
		}
		class il {
			constructor(e, t, i) {
				;(this.table = e), (this.columns = t), (this.name = i)
			}
			static [r] = "PgPrimaryKey"
			columns
			name
			getName() {
				return this.name ?? `${this.table[it.Symbol.Name]}_${this.columns.map((e) => e.name).join("_")}_pk`
			}
		}
		function ic(e, t) {
			return "object" != typeof t ||
				null === t ||
				!("mapToDriverValue" in t) ||
				"function" != typeof t.mapToDriverValue ||
				M(e) ||
				n(e, W) ||
				n(e, Z) ||
				n(e, p) ||
				n(e, m) ||
				n(e, ei)
				? e
				: new W(e, t)
		}
		let iu = (e, t) => G`${e} = ${ic(t, e)}`,
			ih = (e, t) => G`${e} <> ${ic(t, e)}`
		function id(...e) {
			let t = e.filter((e) => void 0 !== e)
			if (0 !== t.length) return new V(1 === t.length ? t : [new U("("), G.join(t, new U(" and ")), new U(")")])
		}
		function im(...e) {
			let t = e.filter((e) => void 0 !== e)
			if (0 !== t.length) return new V(1 === t.length ? t : [new U("("), G.join(t, new U(" or ")), new U(")")])
		}
		function ig(e) {
			return G`not ${e}`
		}
		let ip = (e, t) => G`${e} > ${ic(t, e)}`,
			iy = (e, t) => G`${e} >= ${ic(t, e)}`,
			ib = (e, t) => G`${e} < ${ic(t, e)}`,
			iw = (e, t) => G`${e} <= ${ic(t, e)}`
		function iv(e, t) {
			return Array.isArray(t)
				? 0 === t.length
					? G`false`
					: G`${e} in ${t.map((t) => ic(t, e))}`
				: G`${e} in ${ic(t, e)}`
		}
		function iS(e, t) {
			return Array.isArray(t)
				? 0 === t.length
					? G`true`
					: G`${e} not in ${t.map((t) => ic(t, e))}`
				: G`${e} not in ${ic(t, e)}`
		}
		function iN(e) {
			return G`${e} is null`
		}
		function iP(e) {
			return G`${e} is not null`
		}
		function iT(e) {
			return G`exists ${e}`
		}
		function ix(e) {
			return G`not exists ${e}`
		}
		function i$(e, t, i) {
			return G`${e} between ${ic(t, e)} and ${ic(i, e)}`
		}
		function iC(e, t, i) {
			return G`${e} not between ${ic(t, e)} and ${ic(i, e)}`
		}
		function iq(e, t) {
			return G`${e} like ${t}`
		}
		function i_(e, t) {
			return G`${e} not like ${t}`
		}
		function iB(e, t) {
			return G`${e} ilike ${t}`
		}
		function iA(e, t) {
			return G`${e} not ilike ${t}`
		}
		function iO(e) {
			return G`${e} asc`
		}
		function ij(e) {
			return G`${e} desc`
		}
		class iE {
			constructor(e, t, i) {
				;(this.sourceTable = e),
					(this.referencedTable = t),
					(this.relationName = i),
					(this.referencedTableName = t[m.Symbol.Name])
			}
			static [r] = "Relation"
			referencedTableName
			fieldName
		}
		class ik {
			constructor(e, t) {
				;(this.table = e), (this.config = t)
			}
			static [r] = "Relations"
		}
		class iD extends iE {
			constructor(e, t, i, r) {
				super(e, t, i?.relationName), (this.config = i), (this.isNullable = r)
			}
			static [r] = "One"
			withFieldName(e) {
				let t = new iD(this.sourceTable, this.referencedTable, this.config, this.isNullable)
				return (t.fieldName = e), t
			}
		}
		class iz extends iE {
			constructor(e, t, i) {
				super(e, t, i?.relationName), (this.config = i)
			}
			static [r] = "Many"
			withFieldName(e) {
				let t = new iz(this.sourceTable, this.referencedTable, this.config)
				return (t.fieldName = e), t
			}
		}
		function iQ(e, t) {
			return new ik(e, (e) => Object.fromEntries(Object.entries(t(e)).map(([e, t]) => [e, t.withFieldName(e)])))
		}
		function iL(e) {
			return {
				one: function (t, i) {
					return new iD(e, t, i, i?.fields.reduce((e, t) => e && t.notNull, !0) ?? !1)
				},
				many: function (t, i) {
					return new iz(e, t, i)
				},
			}
		}
		let iF = ii("runs", {
				id: eJ().primaryKey().generatedAlwaysAsIdentity(),
				taskMetricsId: eJ("task_metrics_id").references(() => iV.id),
				model: tD().notNull(),
				name: tD(),
				description: tD(),
				contextWindow: eJ(),
				inputPrice: tT(),
				outputPrice: tT(),
				cacheWritesPrice: tT(),
				cacheReadsPrice: tT(),
				settings: e1().$type(),
				jobToken: tD(),
				pid: eJ(),
				socketPath: tD("socket_path").notNull(),
				executionMethod: tD("execution_method").default("vscode").notNull().$type(),
				concurrency: eJ().default(2).notNull(),
				timeout: eJ().default(5).notNull(),
				passed: eJ().default(0).notNull(),
				failed: eJ().default(0).notNull(),
				createdAt: tV("created_at").notNull(),
			}),
			iI = iQ(iF, ({ one: e }) => ({ taskMetrics: e(iV, { fields: [iF.taskMetricsId], references: [iV.id] }) })),
			iM = ii(
				"tasks",
				{
					id: eJ().primaryKey().generatedAlwaysAsIdentity(),
					runId: eJ("run_id")
						.references(() => iF.id, { onDelete: "cascade" })
						.notNull(),
					taskMetricsId: eJ("task_metrics_id").references(() => iV.id, { onDelete: "set null" }),
					language: tD().notNull().$type(),
					exercise: tD().notNull(),
					iteration: eJ().default(1).notNull(),
					passed: eN(),
					startedAt: tV("started_at"),
					finishedAt: tV("finished_at"),
					createdAt: tV("created_at").notNull(),
				},
				(e) => [
					new ir(!0, "tasks_language_exercise_iteration_idx").on(
						e.runId,
						e.language,
						e.exercise,
						e.iteration,
					),
				],
			),
			iU = iQ(iM, ({ one: e }) => ({
				run: e(iF, { fields: [iM.runId], references: [iF.id] }),
				taskMetrics: e(iV, { fields: [iM.taskMetricsId], references: [iV.id] }),
			})),
			iV = ii("taskMetrics", {
				id: eJ().primaryKey().generatedAlwaysAsIdentity(),
				tokensIn: eJ("tokens_in").notNull(),
				tokensOut: eJ("tokens_out").notNull(),
				tokensContext: eJ("tokens_context").notNull(),
				cacheWrites: eJ("cache_writes").notNull(),
				cacheReads: eJ("cache_reads").notNull(),
				cost: tT().notNull(),
				duration: eJ().notNull(),
				toolUsage: e1("tool_usage").$type(),
				createdAt: tV("created_at").notNull(),
			}),
			iR = ii("toolErrors", {
				id: eJ().primaryKey().generatedAlwaysAsIdentity(),
				runId: eJ("run_id").references(() => iF.id, { onDelete: "cascade" }),
				taskId: eJ("task_id").references(() => iM.id, { onDelete: "cascade" }),
				toolName: tD("tool_name").notNull().$type(),
				error: tD().notNull(),
				createdAt: tV("created_at").notNull(),
			}),
			iJ = iQ(iR, ({ one: e }) => ({
				run: e(iF, { fields: [iR.runId], references: [iF.id] }),
				task: e(iM, { fields: [iR.taskId], references: [iM.id] }),
			})),
			iK = {
				runs: iF,
				runsRelations: iI,
				tasks: iM,
				tasksRelations: iU,
				taskMetrics: iV,
				toolErrors: iR,
				toolErrorsRelations: iJ,
			}
		e.s(
			[
				"runs",
				0,
				iF,
				"runsRelations",
				0,
				iI,
				"schema",
				0,
				iK,
				"taskMetrics",
				0,
				iV,
				"tasks",
				0,
				iM,
				"tasksRelations",
				0,
				iU,
				"toolErrors",
				0,
				iR,
				"toolErrorsRelations",
				0,
				iJ,
			],
			77434,
		)
		class iW extends Error {}
		var iG = e.i(46786),
			iH = e.i(22734)
		let iY = new Map(),
			iX = new Map(),
			iZ = Symbol("OriginError"),
			i0 = {}
		class i1 extends Promise {
			constructor(e, t, i, r, n = {}) {
				let s, a
				super((e, t) => {
					;(s = e), (a = t)
				}),
					(this.tagged = Array.isArray(e.raw)),
					(this.strings = e),
					(this.args = t),
					(this.handler = i),
					(this.canceller = r),
					(this.options = n),
					(this.state = null),
					(this.statement = null),
					(this.resolve = (e) => ((this.active = !1), s(e))),
					(this.reject = (e) => ((this.active = !1), a(e))),
					(this.active = !1),
					(this.cancelled = null),
					(this.executed = !1),
					(this.signature = ""),
					(this[iZ] = this.handler.debug
						? Error()
						: this.tagged &&
							(function (e) {
								if (iY.has(e)) return iY.get(e)
								let t = Error.stackTraceLimit
								return (
									(Error.stackTraceLimit = 4),
									iY.set(e, Error()),
									(Error.stackTraceLimit = t),
									iY.get(e)
								)
							})(this.strings))
			}
			get origin() {
				return (
					(this.handler.debug
						? this[iZ].stack
						: this.tagged && iX.has(this.strings)
							? iX.get(this.strings)
							: iX.set(this.strings, this[iZ].stack).get(this.strings)) || ""
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
			cursor(e = 1, t) {
				let i
				return ((this.options.simple = !1),
				"function" == typeof e && ((t = e), (e = 1)),
				(this.cursorRows = e),
				"function" == typeof t)
					? ((this.cursorFn = t), this)
					: {
							[Symbol.asyncIterator]: () => ({
								next: () => {
									if (this.executed && !this.active) return { done: !0 }
									i && i()
									let e = new Promise((e, t) => {
										;(this.cursorFn = (t) => (
											e({ value: t, done: !1 }), new Promise((e) => (i = e))
										)),
											(this.resolve = () => ((this.active = !1), e({ done: !0 }))),
											(this.reject = (e) => ((this.active = !1), t(e)))
									})
									return this.execute(), e
								},
								return: () => (i && i(i0), { done: !0 }),
							}),
						}
			}
			describe() {
				return (this.options.simple = !1), (this.onlyDescribe = this.options.prepare = !0), this
			}
			stream() {
				throw Error(".stream has been renamed to .forEach")
			}
			forEach(e) {
				return (this.forEachFn = e), this.handle(), this
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
		class i2 extends Error {
			constructor(e) {
				super(e.message), (this.name = this.constructor.name), Object.assign(this, e)
			}
		}
		let i3 = function e(t, i, r) {
				let { host: n, port: s } = r || i,
					a = Object.assign(
						Error("write " + t + " " + (i.path || n + ":" + s)),
						{ code: t, errno: t, address: i.path || n },
						i.path ? {} : { port: s },
					)
				return Error.captureStackTrace(a, e), a
			},
			i4 = function e(t) {
				let i = new i2(t)
				return Error.captureStackTrace(i, e), i
			},
			i8 = function e(t, i) {
				let r = Object.assign(Error(t + ": " + i), { code: t })
				return Error.captureStackTrace(r, e), r
			},
			i6 = function e(t) {
				let i = Object.assign(Error(t + " (B) is not supported"), { code: "MESSAGE_NOT_SUPPORTED", name: t })
				return Error.captureStackTrace(i, e), i
			}
		class i5 {
			then() {
				ru()
			}
			catch() {
				ru()
			}
			finally() {
				ru()
			}
		}
		class i7 extends i5 {
			constructor(e) {
				super(), (this.value = rp(e))
			}
		}
		class i9 extends i5 {
			constructor(e, t, i) {
				super(), (this.value = e), (this.type = t), (this.array = i)
			}
		}
		class re extends i5 {
			constructor(e, t) {
				super(), (this.first = e), (this.rest = t)
			}
			build(e, t, i, r) {
				let n = rc
					.map(([t, i]) => ({ fn: i, i: e.search(t) }))
					.sort((e, t) => e.i - t.i)
					.pop()
				return -1 === n.i ? rg(this.first, r) : n.fn(this.first, this.rest, t, i, r)
			}
		}
		function rt(e, t, i, r) {
			let n = e instanceof i9 ? e.value : e
			if (
				void 0 === n &&
				(e instanceof i9 ? (e.value = r.transform.undefined) : (n = e = r.transform.undefined), void 0 === n)
			)
				throw i8("UNDEFINED_VALUE", "Undefined values are not allowed")
			return (
				"$" +
				i.push(
					e instanceof i9
						? (t.push(e.value),
							e.array
								? e.array[e.type || ry(e.value)] ||
									e.type ||
									(function e(t) {
										return Array.isArray(t) ? e(t[0]) : 1009 * ("string" == typeof t)
									})(e.value)
								: e.type)
						: (t.push(e), ry(e)),
				)
			)
		}
		let ri = rm({
			string: { to: 25, from: null, serialize: (e) => "" + e },
			number: { to: 0, from: [21, 23, 26, 700, 701], serialize: (e) => "" + e, parse: (e) => +e },
			json: { to: 114, from: [114, 3802], serialize: (e) => JSON.stringify(e), parse: (e) => JSON.parse(e) },
			boolean: { to: 16, from: 16, serialize: (e) => (!0 === e ? "t" : "f"), parse: (e) => "t" === e },
			date: {
				to: 1184,
				from: [1082, 1114, 1184],
				serialize: (e) => (e instanceof Date ? e : new Date(e)).toISOString(),
				parse: (e) => new Date(e),
			},
			bytea: {
				to: 17,
				from: 17,
				serialize: (e) => "\\x" + Buffer.from(e).toString("hex"),
				parse: (e) => Buffer.from(e.slice(2), "hex"),
			},
		})
		function rr(e, t, i, r, n, s) {
			for (let a = 1; a < e.strings.length; a++) (t += rn(t, i, r, n, s) + e.strings[a]), (i = e.args[a])
			return t
		}
		function rn(e, t, i, r, n) {
			return t instanceof re
				? t.build(e, i, r, n)
				: t instanceof i1
					? rs(t, i, r, n)
					: t instanceof i7
						? t.value
						: t && t[0] instanceof i1
							? t.reduce((e, t) => e + " " + rs(t, i, r, n), "")
							: rt(t, i, r, n)
		}
		function rs(e, t, i, r) {
			return (e.fragment = !0), rr(e, e.strings[0], e.args[0], t, i, r)
		}
		function ra(e, t, i, r, n) {
			return e.map((e) => "(" + r.map((r) => rn("values", e[r], t, i, n)).join(",") + ")").join(",")
		}
		function ro(e, t, i, r, n) {
			let s = Array.isArray(e[0]),
				a = t.length ? t.flat() : Object.keys(s ? e[0] : e)
			return ra(s ? e : [e], i, r, a, n)
		}
		function rl(e, t, i, r, n) {
			let s
			return ("string" == typeof e && (e = [e].concat(t)), Array.isArray(e))
				? rg(e, n)
				: (t.length ? t.flat() : Object.keys(e))
						.map(
							(t) =>
								((s = e[t]) instanceof i1
									? rs(s, i, r, n)
									: s instanceof i7
										? s.value
										: rt(s, i, r, n)) +
								" as " +
								rp(n.transform.column.to ? n.transform.column.to(t) : t),
						)
						.join(",")
		}
		let rc = Object.entries({
			values: ro,
			in: (...e) => {
				let t = ro(...e)
				return "()" === t ? "(null)" : t
			},
			select: rl,
			as: rl,
			returning: rl,
			"\\(": rl,
			update: (e, t, i, r, n) =>
				(t.length ? t.flat() : Object.keys(e)).map(
					(t) => rp(n.transform.column.to ? n.transform.column.to(t) : t) + "=" + rn("values", e[t], i, r, n),
				),
			insert(e, t, i, r, n) {
				let s = t.length ? t.flat() : Object.keys(Array.isArray(e) ? e[0] : e)
				return "(" + rg(s, n) + ")values" + ra(Array.isArray(e) ? e : [e], i, r, s, n)
			},
		}).map(([e, t]) => [RegExp("((?:^|[\\s(])" + e + "(?:$|[\\s(]))(?![\\s\\S]*\\1)", "i"), t])
		function ru() {
			throw i8("NOT_TAGGED_CALL", "Query not called as a tagged template literal")
		}
		let rh = ri.serializers,
			rf = ri.parsers,
			rd = function (e) {
				let t = rm(e || {})
				return { serializers: Object.assign({}, rh, t.serializers), parsers: Object.assign({}, rf, t.parsers) }
			}
		function rm(e) {
			return Object.keys(e).reduce(
				(t, i) => (
					e[i].from && [].concat(e[i].from).forEach((r) => (t.parsers[r] = e[i].parse)),
					e[i].serialize &&
						((t.serializers[e[i].to] = e[i].serialize),
						e[i].from && [].concat(e[i].from).forEach((r) => (t.serializers[r] = e[i].serialize))),
					t
				),
				{ parsers: {}, serializers: {} },
			)
		}
		function rg(e, { transform: { column: t } }) {
			return e.map((e) => rp(t.to ? t.to(e) : e)).join(",")
		}
		let rp = function (e) {
				return '"' + e.replace(/"/g, '""').replace(/\./g, '"."') + '"'
			},
			ry = function e(t) {
				return t instanceof i9
					? t.type
					: t instanceof Date
						? 1184
						: t instanceof Uint8Array
							? 17
							: !0 === t || !1 === t
								? 16
								: "bigint" == typeof t
									? 20
									: Array.isArray(t)
										? e(t[0])
										: 0
			},
			rb = /\\/g,
			rw = /"/g,
			rv = function e(t, i, r, n) {
				if (!1 === Array.isArray(t)) return t
				if (!t.length) return "{}"
				let s = t[0],
					a = 1020 === n ? ";" : ","
				return Array.isArray(s) && !s.type
					? "{" + t.map((t) => e(t, i, r, n)).join(a) + "}"
					: "{" +
							t
								.map((e) => {
									if (void 0 === e && void 0 === (e = r.transform.undefined))
										throw i8("UNDEFINED_VALUE", "Undefined values are not allowed")
									return null === e
										? "null"
										: '"' +
												(i ? i(e.type ? e.value : e) : "" + e)
													.replace(rb, "\\\\")
													.replace(rw, '\\"') +
												'"'
								})
								.join(a) +
							"}"
			},
			rS = { i: 0, char: null, str: "", quoted: !1, last: 0 },
			rN = (e) => {
				let t = e[0]
				for (let i = 1; i < e.length; i++) t += "_" === e[i] ? e[++i].toUpperCase() : e[i]
				return t
			},
			rP = (e) => {
				let t = e[0].toUpperCase()
				for (let i = 1; i < e.length; i++) t += "_" === e[i] ? e[++i].toUpperCase() : e[i]
				return t
			},
			rT = (e) => e.replace(/_/g, "-"),
			rx = (e) => e.replace(/([A-Z])/g, "_$1").toLowerCase(),
			r$ = (e) => (e.slice(0, 1) + e.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase(),
			rC = (e) => e.replace(/-/g, "_")
		function rq(e) {
			return function t(i, r) {
				return "object" == typeof i && null !== i && (114 === r.type || 3802 === r.type)
					? Array.isArray(i)
						? i.map((e) => t(e, r))
						: Object.entries(i).reduce((i, [n, s]) => Object.assign(i, { [e(n)]: t(s, r) }), {})
					: i
			}
		}
		;(rN.column = { from: rN }), (rN.value = { from: rq(rN) }), (rx.column = { to: rx })
		let r_ = { ...rN }
		;(r_.column.to = rx), (rP.column = { from: rP }), (rP.value = { from: rq(rP) }), (r$.column = { to: r$ })
		let rB = { ...rP }
		;(rB.column.to = r$), (rT.column = { from: rT }), (rT.value = { from: rq(rT) }), (rC.column = { to: rC })
		let rA = { ...rT }
		rA.column.to = rC
		var rO = e.i(4446),
			rj = e.i(55004),
			rE = e.i(54799),
			rk = e.i(88947),
			rD = e.i(60438)
		class rz extends Array {
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
		let rQ = function (e = []) {
				let t = e.slice(),
					i = 0
				return {
					get length() {
						return t.length - i
					},
					remove: (e) => {
						let i = t.indexOf(e)
						return -1 === i ? null : (t.splice(i, 1), e)
					},
					push: (e) => (t.push(e), e),
					shift: () => {
						let e = t[i++]
						return i === t.length ? ((i = 0), (t = [])) : (t[i - 1] = void 0), e
					},
				}
			},
			rL = Buffer.allocUnsafe(256),
			rF = Object.assign(
				function () {
					return (rF.i = 0), rF
				},
				"BCcDdEFfHPpQSX".split("").reduce((e, t) => {
					let i = t.charCodeAt(0)
					return (e[t] = () => ((rL[0] = i), (rF.i = 5), rF)), e
				}, {}),
				{
					N: "\0",
					i: 0,
					inc: (e) => ((rF.i += e), rF),
					str(e) {
						let t = Buffer.byteLength(e)
						return rI(t), (rF.i += rL.write(e, rF.i, t, "utf8")), rF
					},
					i16: (e) => (rI(2), rL.writeUInt16BE(e, rF.i), (rF.i += 2), rF),
					i32: (e, t) => (
						t || 0 === t ? rL.writeUInt32BE(e, t) : (rI(4), rL.writeUInt32BE(e, rF.i), (rF.i += 4)), rF
					),
					z: (e) => (rI(e), rL.fill(0, rF.i, rF.i + e), (rF.i += e), rF),
					raw: (e) => ((rL = Buffer.concat([rL.subarray(0, rF.i), e])), (rF.i = rL.length), rF),
					end(e = 1) {
						rL.writeUInt32BE(rF.i - e, e)
						let t = rL.subarray(0, rF.i)
						return (rF.i = 0), (rL = Buffer.allocUnsafe(256)), t
					},
				},
			)
		function rI(e) {
			if (rL.length - rF.i < e) {
				let t = rL,
					i = t.length
				;(rL = Buffer.allocUnsafe(i + (i >> 1) + e)), t.copy(rL)
			}
		}
		let rM = function e(t, i = {}, { onopen: r = rG, onend: n = rG, onclose: s = rG } = {}) {
				let {
						ssl: a,
						max: o,
						user: l,
						host: c,
						port: u,
						database: h,
						parsers: f,
						transform: d,
						onnotice: m,
						onnotify: g,
						onparameter: p,
						max_pipeline: y,
						keep_alive: b,
						backoff: w,
						target_session_attrs: v,
					} = t,
					S = rQ(),
					N = rU++,
					P = { pid: null, secret: null },
					T = r1(ew, t.idle_timeout),
					x = r1(ew, t.max_lifetime),
					$ = r1(function () {
						ey(i3("CONNECT_TIMEOUT", t, C)), C.destroy()
					}, t.connect_timeout),
					C = null,
					q,
					_ = new rz(),
					B = Buffer.alloc(0),
					A = t.fetch_types,
					O = {},
					j = {},
					E = Math.random().toString(36).slice(2),
					k = 1,
					D = 0,
					z = 0,
					Q = 0,
					L = 0,
					F = 0,
					I = 0,
					M = 0,
					U = null,
					V = null,
					R = !1,
					J = null,
					K = null,
					W = null,
					G = null,
					H = null,
					Y = null,
					X = null,
					Z = null,
					ee = null,
					et = null,
					ei = {
						queue: i.closed,
						idleTimer: T,
						connect(e) {
							;(W = e), em()
						},
						terminate: ev,
						execute: es,
						cancel: en,
						end: ew,
						count: 0,
						id: N,
					}
				return i.closed && i.closed.push(ei), ei
				async function er() {
					let e
					try {
						e = t.socket ? await Promise.resolve(t.socket(t)) : new rO.default.Socket()
					} catch (e) {
						ep(e)
						return
					}
					return e.on("error", ep), e.on("close", eS), e.on("drain", eh), e
				}
				async function en({ pid: e, secret: t }, i, r) {
					try {
						;(q = rF().i32(16).i32(0x4d2162e).i32(e).i32(t).end(16)),
							await ed(),
							C.once("error", r),
							C.once("close", i)
					} catch (e) {
						r(e)
					}
				}
				function es(e) {
					if (R) return eb(e, i3("CONNECTION_DESTROYED", t))
					if (!e.cancelled)
						try {
							var i
							let r, n, s
							return (
								(e.state = P),
								ee ? S.push(e) : ((ee = e).active = !0),
								(i = e),
								(r = []),
								(n = []),
								(s = rr(i, i.strings[0], i.args[0], r, n, t)),
								i.tagged || i.args.forEach((e) => rt(e, r, n, t)),
								(i.prepare = t.prepare && (!("prepare" in i.options) || i.options.prepare)),
								(i.string = s),
								(i.signature = i.prepare && n + s),
								i.onlyDescribe && delete j[i.signature],
								(i.parameters = i.parameters || r),
								(i.prepared = i.prepare && i.signature in j),
								(i.describeFirst = i.onlyDescribe || (r.length && !i.prepared)),
								(i.statement = i.prepared
									? j[i.signature]
									: { string: s, types: n, name: i.prepare ? E + k++ : "" }),
								"function" == typeof t.debug && t.debug(N, s, r, n),
								el(
									(function (e) {
										var t
										if (e.parameters.length >= 65534)
											throw i8(
												"MAX_PARAMETERS_EXCEEDED",
												"Max number of parameters (65534) exceeded",
											)
										return e.options.simple
											? rF()
													.Q()
													.str(e.statement.string + rF.N)
													.end()
											: e.describeFirst
												? Buffer.concat([ea(e), rR])
												: e.prepare
													? e.prepared
														? eo(e)
														: Buffer.concat([ea(e), eo(e)])
													: ((t = e),
														Buffer.concat([
															eA(t.statement.string, t.parameters, t.statement.types),
															rW,
															eo(t),
														]))
									})(e),
								) &&
									!e.describeFirst &&
									!e.cursorFn &&
									S.length < y &&
									(!e.options.onexecute || e.options.onexecute(ei))
							)
						} catch (e) {
							return 0 === S.length && el(rV), ey(e), !0
						}
				}
				function ea(e) {
					return Buffer.concat([
						eA(e.statement.string, e.parameters, e.statement.types, e.statement.name),
						(function (e, t = "") {
							return rF()
								.D()
								.str("S")
								.str(t + rF.N)
								.end()
						})("S", e.statement.name),
					])
				}
				function eo(e) {
					return Buffer.concat([
						(function (e, i, r = "", n = "") {
							let s, a
							return (
								rF()
									.B()
									.str(n + rF.N)
									.str(r + rF.N)
									.i16(0)
									.i16(e.length),
								e.forEach((r, n) => {
									if (null === r) return rF.i32(0xffffffff)
									;(a = i[n]),
										(e[n] = r = a in t.serializers ? t.serializers[a](r) : "" + r),
										(s = rF.i),
										rF
											.inc(4)
											.str(r)
											.i32(rF.i - s - 4, s)
								}),
								rF.i16(0),
								rF.end()
							)
						})(e.parameters, e.statement.types, e.statement.name, e.cursorName),
						e.cursorFn ? eO("", e.cursorRows) : rK,
					])
				}
				function el(e, t) {
					return ((Y = Y ? Buffer.concat([Y, e]) : Buffer.from(e)), t || Y.length >= 1024)
						? ec(t)
						: (null === V && (V = setImmediate(ec)), !0)
				}
				function ec(e) {
					let t = C.write(Y, e)
					return null !== V && clearImmediate(V), (Y = V = null), t
				}
				async function eu() {
					if ((el(rJ), !(await new Promise((e) => C.once("data", (t) => e(83 === t[0])))) && "prefer" === a))
						return eg()
					C.removeAllListeners(),
						(C = rj.default.connect({
							socket: C,
							servername: rO.default.isIP(C.host) ? void 0 : C.host,
							...("require" === a || "allow" === a || "prefer" === a
								? { rejectUnauthorized: !1 }
								: "verify-full" === a
									? {}
									: "object" == typeof a
										? a
										: {}),
						})).on("secureConnect", eg),
						C.on("error", ep),
						C.on("close", eS),
						C.on("drain", eh)
				}
				function eh() {
					ee || r(ei)
				}
				function ef(i) {
					if (!J || (J.push(i), !((z -= i.length) > 0)))
						for (
							B = J
								? Buffer.concat(J, F - z)
								: 0 === B.length
									? i
									: Buffer.concat([B, i], B.length + i.length);
							B.length > 4;

						) {
							if ((F = B.readUInt32BE(1)) >= B.length) {
								;(z = F - B.length), (J = [B])
								break
							}
							try {
								!(function (i, n = i[0]) {
									;(68 === n
										? function (e) {
												let t,
													i,
													r,
													n = 7,
													s = ee.isRaw ? Array(ee.statement.columns.length) : {}
												for (let a = 0; a < ee.statement.columns.length; a++)
													(i = ee.statement.columns[a]),
														(t = e.readInt32BE(n)),
														(n += 4),
														(r =
															-1 === t
																? null
																: !0 === ee.isRaw
																	? e.subarray(n, (n += t))
																	: void 0 === i.parser
																		? e.toString("utf8", n, (n += t))
																		: !0 === i.parser.array
																			? i.parser(
																					e.toString("utf8", n + 1, (n += t)),
																				)
																			: i.parser(
																					e.toString("utf8", n, (n += t)),
																				)),
														ee.isRaw
															? (s[a] =
																	!0 === ee.isRaw
																		? r
																		: d.value.from
																			? d.value.from(r, i)
																			: r)
															: (s[i.name] = d.value.from ? d.value.from(r, i) : r)
												ee.forEachFn
													? ee.forEachFn(d.row.from ? d.row.from(s) : s, _)
													: (_[M++] = d.row.from ? d.row.from(s) : s)
											}
										: 100 === n
											? function (e) {
													H && (H.push(e.subarray(5)) || C.pause())
												}
											: 65 === n
												? function (e) {
														if (!g) return
														let t = 9
														for (; 0 !== e[t++]; );
														g(
															e.toString("utf8", 9, t - 1),
															e.toString("utf8", t, e.length - 1),
														)
													}
												: 83 === n
													? function (e) {
															let [i, r] = e.toString("utf8", 5, e.length - 1).split(rF.N)
															;(O[i] = r),
																t.parameters[i] !== r &&
																	((t.parameters[i] = r), p && p(i, r))
														}
													: 90 === n
														? function (i) {
																if (
																	(ee && ee.options.simple && ee.resolve(K || _),
																	(ee = K = null),
																	(_ = new rz()),
																	$.cancel(),
																	W)
																) {
																	if (v)
																		if (
																			!O.in_hot_standby ||
																			!O.default_transaction_read_only
																		)
																			return (function () {
																				let e = new i1(
																					[
																						`
      show transaction_read_only;
      select pg_catalog.pg_is_in_recovery()
    `,
																					],
																					[],
																					es,
																					null,
																					{ simple: !0 },
																				)
																				;(e.resolve = ([[e], [t]]) => {
																					;(O.default_transaction_read_only =
																						e.transaction_read_only),
																						(O.in_hot_standby =
																							t.pg_is_in_recovery
																								? "on"
																								: "off")
																				}),
																					e.execute()
																			})()
																		else {
																			var n, s
																			if (
																				((n = v),
																				(s = O),
																				("read-write" === n &&
																					"on" ===
																						s.default_transaction_read_only) ||
																					("read-only" === n &&
																						"off" ===
																							s.default_transaction_read_only) ||
																					("primary" === n &&
																						"on" === s.in_hot_standby) ||
																					("standby" === n &&
																						"off" === s.in_hot_standby) ||
																					("prefer-standby" === n &&
																						"off" === s.in_hot_standby &&
																						t.host[L]))
																			)
																				return ev()
																		}
																	return A
																		? (W.reserve && (W = null), e_())
																		: (W && !W.reserve && es(W),
																			(t.shared.retries = L = 0),
																			void (W = null))
																}
																for (
																	;
																	S.length &&
																	(ee = S.shift()) &&
																	((ee.active = !0), ee.cancelled);

																)
																	e(t).cancel(
																		ee.state,
																		ee.cancelled.resolve,
																		ee.cancelled.reject,
																	)
																ee ||
																	(ei.reserved
																		? ei.reserved.release || 73 !== i[5]
																			? ei.reserved()
																			: G
																				? ev()
																				: ((ei.reserved = null), r(ei))
																		: G
																			? ev()
																			: r(ei))
															}
														: 67 === n
															? function (e) {
																	M = 0
																	for (let t = e.length - 1; t > 0; t--)
																		if (
																			(32 === e[t] &&
																				e[t + 1] < 58 &&
																				null === _.count &&
																				(_.count = +e.toString(
																					"utf8",
																					t + 1,
																					e.length - 1,
																				)),
																			e[t - 1] >= 65)
																		) {
																			;(_.command = e.toString("utf8", 5, t)),
																				(_.state = P)
																			break
																		}
																	return (et && (et(), (et = null)),
																	"BEGIN" !== _.command || 1 === o || ei.reserved)
																		? ee.options.simple
																			? eN()
																			: void (ee.cursorFn &&
																					(_.count && ee.cursorFn(_), el(rV)),
																				ee.resolve(_))
																		: ey(
																				i8(
																					"UNSAFE_TRANSACTION",
																					"Only use sql.begin, sql.reserved or max: 1",
																				),
																			)
																}
															: 50 === n
																? eN
																: 49 === n
																	? function () {
																			ee.parsing = !1
																		}
																	: 116 === n
																		? function (e) {
																				let t = e.readUInt16BE(5)
																				for (let i = 0; i < t; ++i)
																					ee.statement.types[i] ||
																						(ee.statement.types[i] =
																							e.readUInt32BE(7 + 4 * i))
																				ee.prepare &&
																					(j[ee.signature] = ee.statement),
																					ee.describeFirst &&
																						!ee.onlyDescribe &&
																						(el(eo(ee)),
																						(ee.describeFirst = !1))
																			}
																		: 84 === n
																			? function (e) {
																					let t
																					_.command &&
																						((K = K || [_]).push(
																							(_ = new rz()),
																						),
																						(_.count = null),
																						(ee.statement.columns = null))
																					let i = e.readUInt16BE(5),
																						r = 7
																					ee.statement.columns = Array(i)
																					for (let n = 0; n < i; ++n) {
																						for (t = r; 0 !== e[r++]; );
																						let i = e.readUInt32BE(r),
																							s = e.readUInt16BE(r + 4),
																							a = e.readUInt32BE(r + 6)
																						;(ee.statement.columns[n] = {
																							name: d.column.from
																								? d.column.from(
																										e.toString(
																											"utf8",
																											t,
																											r - 1,
																										),
																									)
																								: e.toString(
																										"utf8",
																										t,
																										r - 1,
																									),
																							parser: f[a],
																							table: i,
																							number: s,
																							type: a,
																						}),
																							(r += 18)
																					}
																					if (
																						((_.statement = ee.statement),
																						ee.onlyDescribe)
																					)
																						return (
																							ee.resolve(ee.statement),
																							el(rV)
																						)
																				}
																			: 82 === n
																				? eP
																				: 110 === n
																					? function () {
																							if (
																								((_.statement =
																									ee.statement),
																								(_.statement.columns =
																									[]),
																								ee.onlyDescribe)
																							)
																								return (
																									ee.resolve(
																										ee.statement,
																									),
																									el(rV)
																								)
																						}
																					: 75 === n
																						? function (e) {
																								;(P.pid =
																									e.readUInt32BE(5)),
																									(P.secret =
																										e.readUInt32BE(
																											9,
																										))
																							}
																						: 69 === n
																							? function (e) {
																									var t, i
																									ee &&
																										(ee.cursorFn ||
																											ee.describeFirst) &&
																										el(rV)
																									let r = i4(rX(e))
																									ee && ee.retried
																										? ey(ee.retried)
																										: ee &&
																											  ee.prepared &&
																											  rH.has(
																													r.routine,
																											  )
																											? ((t = ee),
																												(i = r),
																												delete j[
																													t
																														.signature
																												],
																												(t.retried =
																													i),
																												es(t))
																											: ey(r)
																								}
																							: 115 === n
																								? eB
																								: 51 === n
																									? function () {
																											_.count &&
																												ee.cursorFn(
																													_,
																												),
																												ee.resolve(
																													_,
																												)
																										}
																									: 71 === n
																										? function () {
																												;(H =
																													new rk.default.Writable(
																														{
																															autoDestroy:
																																!0,
																															write(
																																e,
																																t,
																																i,
																															) {
																																C.write(
																																	rF()
																																		.d()
																																		.raw(
																																			e,
																																		)
																																		.end(),
																																	i,
																																)
																															},
																															destroy(
																																e,
																																t,
																															) {
																																t(
																																	e,
																																),
																																	C.write(
																																		rF()
																																			.f()
																																			.str(
																																				e +
																																					rF.N,
																																			)
																																			.end(),
																																	),
																																	(H =
																																		null)
																															},
																															final(
																																e,
																															) {
																																C.write(
																																	rF()
																																		.c()
																																		.end(),
																																),
																																	(et =
																																		e)
																															},
																														},
																													)),
																													ee.resolve(
																														H,
																													)
																											}
																										: 78 === n
																											? function (
																													e,
																												) {
																													m
																														? m(
																																rX(
																																	e,
																																),
																															)
																														: console.log(
																																rX(
																																	e,
																																),
																															)
																												}
																											: 72 === n
																												? function () {
																														;(H =
																															new rk.default.Readable(
																																{
																																	read() {
																																		C.resume()
																																	},
																																},
																															)),
																															ee.resolve(
																																H,
																															)
																													}
																												: 99 ===
																													  n
																													? function () {
																															H &&
																																H.push(
																																	null,
																																),
																																(H =
																																	null)
																														}
																													: 73 ===
																														  n
																														? function () {}
																														: 86 ===
																															  n
																															? function () {
																																	ey(
																																		i6(
																																			"FunctionCallResponse",
																																		),
																																	)
																																}
																															: 118 ===
																																  n
																																? function () {
																																		ey(
																																			i6(
																																				"NegotiateProtocolVersion",
																																			),
																																		)
																																	}
																																: 87 ===
																																	  n
																																	? function () {
																																			;(H =
																																				new rk.default.Duplex(
																																					{
																																						autoDestroy:
																																							!0,
																																						read() {
																																							C.resume()
																																						},
																																						write(
																																							e,
																																							t,
																																							i,
																																						) {
																																							C.write(
																																								rF()
																																									.d()
																																									.raw(
																																										e,
																																									)
																																									.end(),
																																								i,
																																							)
																																						},
																																						destroy(
																																							e,
																																							t,
																																						) {
																																							t(
																																								e,
																																							),
																																								C.write(
																																									rF()
																																										.f()
																																										.str(
																																											e +
																																												rF.N,
																																										)
																																										.end(),
																																								),
																																								(H =
																																									null)
																																						},
																																						final(
																																							e,
																																						) {
																																							C.write(
																																								rF()
																																									.c()
																																									.end(),
																																							),
																																								(et =
																																									e)
																																						},
																																					},
																																				)),
																																				ee.resolve(
																																					H,
																																				)
																																		}
																																	: function (
																																			e,
																																		) {
																																			console.error(
																																				"Postgres.js : Unknown Message:",
																																				e[0],
																																			)
																																		})(
										i,
									)
								})(B.subarray(0, F + 1))
							} catch (e) {
								ee && (ee.cursorFn || ee.describeFirst) && el(rV), ey(e)
							}
							;(B = B.subarray(F + 1)), (z = 0), (J = null)
						}
				}
				async function ed() {
					if (((R = !1), (O = {}), C || (C = await er()), C)) {
						if (($.start(), t.socket)) return a ? eu() : eg()
						if ((C.on("connect", a ? eu : eg), t.path)) return C.connect(t.path)
						;(C.ssl = a), C.connect(u[Q], c[Q]), (C.host = c[Q]), (C.port = u[Q]), (Q = (Q + 1) % u.length)
					}
				}
				function em() {
					setTimeout(ed, D ? D + I - rD.performance.now() : 0)
				}
				function eg() {
					try {
						;(j = {}),
							(A = t.fetch_types),
							(E = Math.random().toString(36).slice(2)),
							(k = 1),
							x.start(),
							C.on("data", ef),
							b && C.setKeepAlive && C.setKeepAlive(!0, 1e3 * b)
						let e =
							q ||
							rF()
								.inc(4)
								.i16(3)
								.z(2)
								.str(
									Object.entries(
										Object.assign({ user: l, database: h, client_encoding: "UTF8" }, t.connection),
									)
										.filter(([, e]) => e)
										.map(([e, t]) => e + rF.N + t)
										.join(rF.N),
								)
								.z(2)
								.end(0)
						el(e)
					} catch (e) {
						ep(e)
					}
				}
				function ep(e) {
					if (ei.queue !== i.connecting || !t.host[L + 1]) for (ey(e); S.length; ) eb(S.shift(), e)
				}
				function ey(e) {
					H && (H.destroy(e), (H = null)), ee && eb(ee, e), W && (eb(W, e), (W = null))
				}
				function eb(e, i) {
					if (e.reserve) return e.reject(i)
					;(i && "object" == typeof i) || (i = Error(i)),
						"query" in i ||
							"parameters" in i ||
							Object.defineProperties(i, {
								stack: { value: i.stack + e.origin.replace(/.*\n/, "\n"), enumerable: t.debug },
								query: { value: e.string, enumerable: t.debug },
								parameters: { value: e.parameters, enumerable: t.debug },
								args: { value: e.args, enumerable: t.debug },
								types: { value: e.statement && e.statement.types, enumerable: t.debug },
							}),
						e.reject(i)
				}
				function ew() {
					return (
						G ||
						(ei.reserved || n(ei),
						ei.reserved || W || ee || 0 !== S.length
							? (G = new Promise((e) => (X = e)))
							: (ev(), new Promise((e) => (C && "closed" !== C.readyState ? C.once("close", e) : e()))))
					)
				}
				function ev() {
					;(R = !0),
						(H || ee || W || S.length) && ep(i3("CONNECTION_DESTROYED", t)),
						clearImmediate(V),
						C &&
							(C.removeListener("data", ef),
							C.removeListener("connect", eg),
							"open" === C.readyState && C.end(rF().X().end())),
						X && (X(), (G = X = null))
				}
				async function eS(e) {
					if (
						((B = Buffer.alloc(0)),
						(z = 0),
						(J = null),
						clearImmediate(V),
						C.removeListener("data", ef),
						C.removeListener("connect", eg),
						T.cancel(),
						x.cancel(),
						$.cancel(),
						C.removeAllListeners(),
						(C = null),
						W)
					)
						return em()
					!e && (ee || S.length) && ep(i3("CONNECTION_CLOSED", t, C)),
						(D = rD.performance.now()),
						e && t.shared.retries++,
						(I = ("function" == typeof w ? w(t.shared.retries) : w) * 1e3),
						s(ei, i3("CONNECTION_CLOSED", t, C))
				}
				function eN() {
					_.statement || (_.statement = ee.statement), (_.columns = ee.statement.columns)
				}
				async function eP(e, t = e.readUInt32BE(5)) {
					;(3 === t
						? eT
						: 5 === t
							? ex
							: 10 === t
								? e$
								: 11 === t
									? eC
									: 12 === t
										? function (e) {
												e.toString("utf8", 9).split(rF.N, 1)[0].slice(2) !== U &&
													(ey(
														i8(
															"SASL_SIGNATURE_MISMATCH",
															"The server did not return the correct signature",
														),
													),
													C.destroy())
											}
										: 0 !== t
											? function (e, t) {
													console.error("Postgres.js : Unknown Auth:", t)
												}
											: rG)(e, t)
				}
				async function eT() {
					let e = await eq()
					el(rF().p().str(e).z(1).end())
				}
				async function ex(e) {
					let t = "md5" + (await rZ(Buffer.concat([Buffer.from(await rZ((await eq()) + l)), e.subarray(9)])))
					el(rF().p().str(t).z(1).end())
				}
				async function e$() {
					;(Z = (await rE.default.randomBytes(18)).toString("base64")),
						rF()
							.p()
							.str("SCRAM-SHA-256" + rF.N)
					let e = rF.i
					el(
						rF
							.inc(4)
							.str("n,,n=*,r=" + Z)
							.i32(rF.i - e - 4, e)
							.end(),
					)
				}
				async function eC(e) {
					var t
					let i = e
							.toString("utf8", 9)
							.split(",")
							.reduce((e, t) => ((e[t[0]] = t.slice(2)), e), {}),
						r = await rE.default.pbkdf2Sync(
							await eq(),
							Buffer.from(i.s, "base64"),
							parseInt(i.i),
							32,
							"sha256",
						),
						n = await r0(r, "Client Key"),
						s = "n=*,r=" + Z + ",r=" + i.r + ",s=" + i.s + ",i=" + i.i + ",c=biws,r=" + i.r
					U = (await r0(await r0(r, "Server Key"), s)).toString("base64")
					let a =
						"c=biws,r=" +
						i.r +
						",p=" +
						(function (e, t) {
							let i = Math.max(e.length, t.length),
								r = Buffer.allocUnsafe(i)
							for (let n = 0; n < i; n++) r[n] = e[n] ^ t[n]
							return r
						})(
							n,
							Buffer.from(
								await r0(await ((t = n), rE.default.createHash("sha256").update(t).digest()), s),
							),
						).toString("base64")
					el(rF().p().str(a).end())
				}
				function eq() {
					return Promise.resolve("function" == typeof t.pass ? t.pass() : t.pass)
				}
				async function e_() {
					;(A = !1),
						(
							await new i1(
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
								es,
							)
						).forEach(({ oid: e, typarray: i }) =>
							(function (e, i) {
								if (t.parsers[i] && t.serializers[i]) return
								let r = t.parsers[e]
								;(t.shared.typeArrayMap[e] = i),
									(t.parsers[i] = (e) => (
										(rS.i = rS.last = 0),
										(function e(t, i, r, n) {
											let s = [],
												a = 1020 === n ? ";" : ","
											for (; t.i < i.length; t.i++) {
												if (((t.char = i[t.i]), t.quoted))
													"\\" === t.char
														? (t.str += i[++t.i])
														: '"' === t.char
															? (s.push(r ? r(t.str) : t.str),
																(t.str = ""),
																(t.quoted = '"' === i[t.i + 1]),
																(t.last = t.i + 2))
															: (t.str += t.char)
												else if ('"' === t.char) t.quoted = !0
												else if ("{" === t.char) (t.last = ++t.i), s.push(e(t, i, r, n))
												else if ("}" === t.char) {
													;(t.quoted = !1),
														t.last < t.i &&
															s.push(r ? r(i.slice(t.last, t.i)) : i.slice(t.last, t.i)),
														(t.last = t.i + 1)
													break
												} else
													t.char === a &&
														"}" !== t.p &&
														'"' !== t.p &&
														(s.push(r ? r(i.slice(t.last, t.i)) : i.slice(t.last, t.i)),
														(t.last = t.i + 1))
												t.p = t.char
											}
											return (
												t.last < t.i &&
													s.push(r ? r(i.slice(t.last, t.i + 1)) : i.slice(t.last, t.i + 1)),
												s
											)
										})(rS, e, r, i)
									)),
									(t.parsers[i].array = !0),
									(t.serializers[i] = (r) => rv(r, t.serializers[e], t, i))
							})(e, i),
						)
				}
				async function eB() {
					try {
						let e = await Promise.resolve(ee.cursorFn(_))
						;(M = 0),
							e === i0
								? el(
										(function (e = "") {
											return Buffer.concat([
												rF()
													.C()
													.str("P")
													.str(e + rF.N)
													.end(),
												rF().S().end(),
											])
										})(ee.portal),
									)
								: ((_ = new rz()), el(eO("", ee.cursorRows)))
					} catch (e) {
						el(rV), ee.reject(e)
					}
				}
				function eA(e, t, i, r = "") {
					return (
						rF()
							.P()
							.str(r + rF.N)
							.str(e + rF.N)
							.i16(t.length),
						t.forEach((e, t) => rF.i32(i[t] || 0)),
						rF.end()
					)
				}
				function eO(e = "", t = 0) {
					return Buffer.concat([
						rF()
							.E()
							.str(e + rF.N)
							.i32(t)
							.end(),
						rR,
					])
				}
			},
			rU = 1,
			rV = rF().S().end(),
			rR = rF().H().end(),
			rJ = rF().i32(8).i32(0x4d2162f).end(8),
			rK = Buffer.concat([rF().E().str(rF.N).i32(0).end(), rV]),
			rW = rF().D().str("S").str(rF.N).end(),
			rG = () => {},
			rH = new Set(["FetchPreparedStatement", "RevalidateCachedQuery", "transformAssignedExpr"]),
			rY = {
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
		function rX(e) {
			let t = {},
				i = 5
			for (let r = 5; r < e.length - 1; r++)
				0 === e[r] && ((t[rY[e[i]]] = e.toString("utf8", i + 1, r)), (i = r + 1))
			return t
		}
		function rZ(e) {
			return rE.default.createHash("md5").update(e).digest("hex")
		}
		function r0(e, t) {
			return rE.default.createHmac("sha256", e).update(t).digest()
		}
		function r1(e, t) {
			let i
			if (!(t = "function" == typeof t ? t() : t)) return { cancel: rG, start: rG }
			return {
				cancel() {
					i && (clearTimeout(i), (i = null))
				},
				start() {
					i && clearTimeout(i), (i = setTimeout(r, 1e3 * t, arguments))
				},
			}
			function r(t) {
				e.apply(null, t), (i = null)
			}
		}
		let r2 = () => {}
		function r3(e, t, i, r) {
			let n,
				s,
				a,
				o = r.raw ? Array(t.length) : {}
			for (let l = 0; l < t.length; l++)
				(n = e[i++]),
					(s = t[l]),
					(a =
						110 === n
							? null
							: 117 === n
								? void 0
								: void 0 === s.parser
									? e.toString("utf8", i + 4, (i += 4 + e.readUInt32BE(i)))
									: !0 === s.parser.array
										? s.parser(e.toString("utf8", i + 5, (i += 4 + e.readUInt32BE(i))))
										: s.parser(e.toString("utf8", i + 4, (i += 4 + e.readUInt32BE(i))))),
					r.raw
						? (o[l] = !0 === r.raw ? a : r.value.from ? r.value.from(a, s) : a)
						: (o[s.name] = r.value.from ? r.value.from(a, s) : a)
			return { i: i, row: r.row.from ? r.row.from(o) : o }
		}
		function r4(e, t, i = 393216) {
			return new Promise(async (r, n) => {
				await e
					.begin(async (e) => {
						let n
						t || ([{ oid: t }] = await e`select lo_creat(-1) as oid`)
						let [{ fd: s }] = await e`select lo_open(${t}, ${i}) as fd`,
							a = {
								writable: l,
								readable: o,
								close: () => e`select lo_close(${s})`.then(n),
								tell: () => e`select lo_tell64(${s})`,
								read: (t) => e`select loread(${s}, ${t}) as data`,
								write: (t) => e`select lowrite(${s}, ${t})`,
								truncate: (t) => e`select lo_truncate64(${s}, ${t})`,
								seek: (t, i = 0) => e`select lo_lseek64(${s}, ${t}, ${i})`,
								size: () => e`
          select
            lo_lseek64(${s}, location, 0) as position,
            seek.size
          from (
            select
              lo_lseek64($1, 0, 2) as size,
              tell.location
            from (select lo_tell64($1) as location) tell
          ) seek
        `,
							}
						return r(a), new Promise(async (e) => (n = e))
						async function o({ highWaterMark: e = 16384, start: t = 0, end: i = 1 / 0 } = {}) {
							let r = i - t
							return (
								t && (await a.seek(t)),
								new rk.default.Readable({
									highWaterMark: e,
									async read(e) {
										let t = e > r ? e - r : e
										r -= e
										let [{ data: i }] = await a.read(t)
										this.push(i), i.length < e && this.push(null)
									},
								})
							)
						}
						async function l({ highWaterMark: e = 16384, start: t = 0 } = {}) {
							return (
								t && (await a.seek(t)),
								new rk.default.Writable({
									highWaterMark: e,
									write(e, t, i) {
										a.write(e).then(() => i(), i)
									},
								})
							)
						}
					})
					.catch(n)
			})
		}
		Object.assign(r6, {
			PostgresError: i2,
			toPascal: rP,
			pascal: rB,
			toCamel: rN,
			camel: r_,
			toKebab: rT,
			kebab: rA,
			fromPascal: r$,
			fromCamel: rx,
			fromKebab: rC,
			BigInt: { to: 20, from: [20], parse: (e) => BigInt(e), serialize: (e) => e.toString() },
		})
		let r8 = r6
		function r6(e, t) {
			let i = (function (e, t) {
					var i
					if (e && e.shared) return e
					let r = process.env,
						n = (e && "string" != typeof e ? e : t) || {},
						{ url: s, multihost: a } = (function (e) {
							if (!e || "string" != typeof e) return { url: { searchParams: new Map() } }
							let t = e
							t = decodeURIComponent(
								(t = t.slice(t.indexOf("://") + 3).split(/[?/]/)[0]).slice(t.indexOf("@") + 1),
							)
							let i = new URL(e.replace(t, t.split(",")[0]))
							return {
								url: {
									username: decodeURIComponent(i.username),
									password: decodeURIComponent(i.password),
									host: i.host,
									hostname: i.hostname,
									port: i.port,
									pathname: i.pathname,
									searchParams: i.searchParams,
								},
								multihost: t.indexOf(",") > -1 && t,
							}
						})(e),
						o = [...s.searchParams].reduce((e, [t, i]) => ((e[t] = i), e), {}),
						l = n.hostname || n.host || a || s.hostname || r.PGHOST || "localhost",
						c = n.port || s.port || r.PGPORT || 5432,
						u =
							n.user ||
							n.username ||
							s.username ||
							r.PGUSERNAME ||
							r.PGUSER ||
							(function () {
								try {
									return iG.default.userInfo().username
								} catch (e) {
									return process.env.USERNAME || process.env.USER || process.env.LOGNAME
								}
							})()
					n.no_prepare && (n.prepare = !1),
						o.sslmode && ((o.ssl = o.sslmode), delete o.sslmode),
						"timeout" in n &&
							(console.log("The timeout option is deprecated, use idle_timeout instead"),
							(n.idle_timeout = n.timeout)),
						"system" === o.sslrootcert && (o.ssl = "verify-full")
					let h = [
							"idle_timeout",
							"connect_timeout",
							"max_lifetime",
							"max_pipeline",
							"backoff",
							"keep_alive",
						],
						f = {
							max: 10,
							ssl: !1,
							idle_timeout: null,
							connect_timeout: 30,
							max_lifetime: r7,
							max_pipeline: 100,
							backoff: r5,
							keep_alive: 60,
							prepare: !0,
							debug: !1,
							fetch_types: !0,
							publications: "alltables",
							target_session_attrs: null,
						}
					return {
						host: Array.isArray(l) ? l : l.split(",").map((e) => e.split(":")[0]),
						port: Array.isArray(c) ? c : l.split(",").map((e) => parseInt(e.split(":")[1] || c)),
						path: n.path || (l.indexOf("/") > -1 && l + "/.s.PGSQL." + c),
						database: n.database || n.db || (s.pathname || "").slice(1) || r.PGDATABASE || u,
						user: u,
						pass: n.pass || n.password || s.password || r.PGPASSWORD || "",
						...Object.entries(f).reduce((e, [t, i]) => {
							let s =
								t in n
									? n[t]
									: t in o
										? "disable" !== o[t] && "false" !== o[t] && o[t]
										: r["PG" + t.toUpperCase()] || i
							return (e[t] = "string" == typeof s && h.includes(t) ? +s : s), e
						}, {}),
						connection: {
							application_name: r.PGAPPNAME || "postgres.js",
							...n.connection,
							...Object.entries(o).reduce((e, [t, i]) => (t in f || (e[t] = i), e), {}),
						},
						types: n.types || {},
						target_session_attrs: (function (e, t, i) {
							let r =
								e.target_session_attrs ||
								t.searchParams.get("target_session_attrs") ||
								i.PGTARGETSESSIONATTRS
							if (!r || ["read-write", "read-only", "primary", "standby", "prefer-standby"].includes(r))
								return r
							throw Error("target_session_attrs " + r + " is not supported")
						})(n, s, r),
						onnotice: n.onnotice,
						onnotify: n.onnotify,
						onclose: n.onclose,
						onparameter: n.onparameter,
						socket: n.socket,
						transform: {
							undefined: (i = n.transform || { undefined: void 0 }).undefined,
							column: {
								from: "function" == typeof i.column ? i.column : i.column && i.column.from,
								to: i.column && i.column.to,
							},
							value: {
								from: "function" == typeof i.value ? i.value : i.value && i.value.from,
								to: i.value && i.value.to,
							},
							row: {
								from: "function" == typeof i.row ? i.row : i.row && i.row.from,
								to: i.row && i.row.to,
							},
						},
						parameters: {},
						shared: { retries: 0, typeArrayMap: {} },
						...rd(n.types),
					}
				})(e, t),
				r =
					i.no_subscribe ||
					(function (e, t) {
						let i = new Map(),
							r = "postgresjs_" + Math.random().toString(36).slice(2),
							n = {},
							s,
							a,
							o = !1,
							l = (h.sql = e({
								...t,
								transform: { column: {}, value: {}, row: {} },
								max: 1,
								fetch_types: !1,
								idle_timeout: null,
								max_lifetime: null,
								connection: { ...t.connection, replication: "database" },
								onclose: async function () {
									o ||
										((a = null),
										(n.pid = n.secret = void 0),
										f(await d(l, r, t.publications)),
										i.forEach((e) => e.forEach(({ onsubscribe: e }) => e())))
								},
								no_subscribe: !0,
							})),
							c = l.end,
							u = l.close
						return (
							(l.end = async () => (
								(o = !0), a && (await new Promise((e) => (a.once("close", e), a.end()))), c()
							)),
							(l.close = async () => (
								a && (await new Promise((e) => (a.once("close", e), a.end()))), u()
							)),
							h
						)
						async function h(e, o, c = r2, u = r2) {
							;(e = (function (e) {
								let [, t, i, r] =
									e.match(/^(\*|insert|update|delete)?:?([^.]+?\.?[^=]+)?=?(.+)?/i) || []
								return (
									(t || "*") +
									(i ? ":" + (-1 === i.indexOf(".") ? "public." + i : i) : "") +
									(r ? "=" + r : "")
								)
							})(e)),
								s || (s = d(l, r, t.publications))
							let m = { fn: o, onsubscribe: c },
								g = i.has(e) ? i.get(e).add(m) : i.set(e, new Set([m])).get(e),
								p = () => {
									g.delete(m), 0 === g.size && i.delete(e)
								}
							return s.then(
								(e) => (f(e), c(), a && a.on("error", u), { unsubscribe: p, state: n, sql: l }),
							)
						}
						function f(e) {
							;(a = e.stream), (n.pid = e.state.pid), (n.secret = e.state.secret)
						}
						async function d(e, i, r) {
							if (!r) throw Error("Missing publication names")
							let n = await e.unsafe(
									`CREATE_REPLICATION_SLOT ${i} TEMPORARY LOGICAL pgoutput NOEXPORT_SNAPSHOT`,
								),
								[s] = n,
								a = await e
									.unsafe(
										`START_REPLICATION SLOT ${i} LOGICAL ${s.consistent_point} (proto_version '1', publication_names '${r}')`,
									)
									.writable(),
								o = {
									lsn: Buffer.concat(
										s.consistent_point
											.split("/")
											.map((e) => Buffer.from(("00000000" + e).slice(-8), "hex")),
									),
								}
							return (
								a.on("data", function (i) {
									var r, n, s, c, u
									let h
									119 === i[0]
										? ((r = i.subarray(25)),
											(n = o),
											(s = e.options.parsers),
											(c = l),
											(u = t.transform),
											Object.entries({
												R: (e) => {
													let t = 1,
														i = (n[e.readUInt32BE(t)] = {
															schema:
																e.toString("utf8", (t += 4), (t = e.indexOf(0, t))) ||
																"pg_catalog",
															table: e.toString("utf8", t + 1, (t = e.indexOf(0, t + 1))),
															columns: Array(e.readUInt16BE((t += 2))),
															keys: [],
														})
													t += 2
													let r = 0,
														a
													for (; t < e.length; )
														(a = i.columns[r++] =
															{
																key: e[t++],
																name: u.column.from
																	? u.column.from(
																			e.toString(
																				"utf8",
																				t,
																				(t = e.indexOf(0, t)),
																			),
																		)
																	: e.toString("utf8", t, (t = e.indexOf(0, t))),
																type: e.readUInt32BE((t += 1)),
																parser: s[e.readUInt32BE(t)],
																atttypmod: e.readUInt32BE((t += 4)),
															}).key && i.keys.push(a),
															(t += 4)
												},
												Y: () => {},
												O: () => {},
												B: (e) => {
													var t
													;(t = e.readBigInt64BE(9)),
														(n.date = new Date(
															Date.UTC(2e3, 0, 1) + Number(t / BigInt(1e3)),
														)),
														(n.lsn = e.subarray(1, 9))
												},
												I: (e) => {
													let t = 1,
														i = n[e.readUInt32BE(t)],
														{ row: r } = r3(e, i.columns, (t += 7), u)
													c(r, { command: "insert", relation: i })
												},
												D: (e) => {
													let t = 1,
														i = n[e.readUInt32BE(t)],
														r = 75 === e[(t += 4)]
													c(r || 79 === e[t] ? r3(e, i.columns, (t += 3), u).row : null, {
														command: "delete",
														relation: i,
														key: r,
													})
												},
												U: (e) => {
													let t = 1,
														i = n[e.readUInt32BE(t)],
														r = 75 === e[(t += 4)],
														s = r || 79 === e[t] ? r3(e, i.columns, (t += 3), u) : null
													s && (t = s.i)
													let { row: a } = r3(e, i.columns, t + 3, u)
													c(a, { command: "update", relation: i, key: r, old: s && s.row })
												},
												T: () => {},
												C: () => {},
											})
												.reduce((e, [t, i]) => ((e[t.charCodeAt(0)] = i), e), {})
												[r[0]](r))
										: 107 === i[0] &&
											i[17] &&
											((o.lsn = i.subarray(1, 9)),
											((h = Buffer.alloc(34))[0] = 114),
											h.fill(o.lsn, 1),
											h.writeBigInt64BE(
												BigInt(Date.now() - Date.UTC(2e3, 0, 1)) * BigInt(1e3),
												25,
											),
											a.write(h))
								}),
								a.on("error", function (e) {
									console.error("Unexpected error during logical streaming - reconnecting", e)
								}),
								a.on("close", e.close),
								{ stream: a, state: n.state }
							)
							function l(e, t) {
								let i = t.relation.schema + "." + t.relation.table
								m("*", e, t),
									m("*:" + i, e, t),
									t.relation.keys.length &&
										m("*:" + i + "=" + t.relation.keys.map((t) => e[t.name]), e, t),
									m(t.command, e, t),
									m(t.command + ":" + i, e, t),
									t.relation.keys.length &&
										m(t.command + ":" + i + "=" + t.relation.keys.map((t) => e[t.name]), e, t)
							}
						}
						function m(e, t, r) {
							i.has(e) && i.get(e).forEach(({ fn: i }) => i(t, r, e))
						}
					})(r6, { ...i }),
				n = !1,
				s = rQ(),
				a = rQ(),
				o = rQ(),
				l = rQ(),
				c = rQ(),
				u = rQ(),
				h = rQ(),
				f = rQ(),
				d = { connecting: a, reserved: o, closed: l, ended: c, open: u, busy: h, full: f },
				m = [...Array(i.max)].map(() => rM(i, d, { onopen: B, onend: _, onclose: A })),
				g = p(function (e) {
					return n
						? e.reject(i3("CONNECTION_ENDED", i, i))
						: u.length
							? P(u.shift(), e)
							: l.length
								? q(l.shift(), e)
								: void (h.length ? P(h.shift(), e) : s.push(e))
				})
			return (
				Object.assign(g, {
					get parameters() {
						return i.parameters
					},
					largeObject: r4.bind(null, g),
					subscribe: r,
					CLOSE: i0,
					END: i0,
					PostgresError: i2,
					options: i,
					reserve: w,
					listen: y,
					begin: v,
					close: $,
					end: x,
				}),
				g
			)
			function p(e) {
				return (
					(e.debug = i.debug),
					Object.entries(i.types).reduce((e, [t, i]) => ((e[t] = (e) => new i9(e, i.to)), e), t),
					Object.assign(r, {
						types: t,
						typed: t,
						unsafe: function (t, i = [], r = {}) {
							return (
								2 != arguments.length || Array.isArray(i) || ((r = i), (i = [])),
								new i1([t], i, e, T, {
									prepare: !1,
									...r,
									simple: "simple" in r ? r.simple : 0 === i.length,
								})
							)
						},
						notify: b,
						array: function e(t, r) {
							return Array.isArray(t)
								? new i9(t, r || (t.length ? ry(t) || 25 : 0), i.shared.typeArrayMap)
								: e(Array.from(arguments))
						},
						json: N,
						file: function (t, i = [], r = {}) {
							return (
								2 != arguments.length || Array.isArray(i) || ((r = i), (i = [])),
								new i1(
									[],
									i,
									(i) => {
										iH.default.readFile(t, "utf8", (t, r) => {
											if (t) return i.reject(t)
											;(i.strings = [r]), e(i)
										})
									},
									T,
									{ ...r, simple: "simple" in r ? r.simple : 0 === i.length },
								)
							)
						},
					}),
					r
				)
				function t(e, t) {
					return new i9(e, t)
				}
				function r(t, ...n) {
					return t && Array.isArray(t.raw)
						? new i1(t, n, e, T)
						: "string" != typeof t || n.length
							? new re(t, n)
							: new i7(i.transform.column.to ? i.transform.column.to(t) : t)
				}
			}
			async function y(e, t, r) {
				let n = { fn: t, onlisten: r },
					s =
						y.sql ||
						(y.sql = r6({
							...i,
							max: 1,
							idle_timeout: null,
							max_lifetime: null,
							fetch_types: !1,
							onclose() {
								Object.entries(y.channels).forEach(([e, { listeners: t }]) => {
									delete y.channels[e],
										Promise.all(t.map((t) => y(e, t.fn, t.onlisten).catch(() => {})))
								})
							},
							onnotify(e, t) {
								e in y.channels && y.channels[e].listeners.forEach((e) => e.fn(t))
							},
						})),
					a = y.channels || (y.channels = {})
				if (e in a) {
					a[e].listeners.push(n)
					let t = await a[e].result
					return n.onlisten && n.onlisten(), { state: t.state, unlisten: l }
				}
				a[e] = { result: s`listen ${s.unsafe('"' + e.replace(/"/g, '""') + '"')}`, listeners: [n] }
				let o = await a[e].result
				return n.onlisten && n.onlisten(), { state: o.state, unlisten: l }
				async function l() {
					if (
						e in a != !1 &&
						((a[e].listeners = a[e].listeners.filter((e) => e !== n)), !a[e].listeners.length)
					)
						return delete a[e], s`unlisten ${s.unsafe('"' + e.replace(/"/g, '""') + '"')}`
				}
			}
			async function b(e, t) {
				return await g`select pg_notify(${e}, ${"" + t})`
			}
			async function w() {
				let e = rQ(),
					t = u.length
						? u.shift()
						: await new Promise((e, t) => {
								let i = { reserve: e, reject: t }
								s.push(i), l.length && q(l.shift(), i)
							})
				S(t, o), (t.reserved = () => (e.length ? t.execute(e.shift()) : S(t, o))), (t.reserved.release = !0)
				let i = p(function (i) {
					t.queue === f ? e.push(i) : t.execute(i) || S(t, f)
				})
				return (
					(i.release = () => {
						;(t.reserved = null), B(t)
					}),
					i
				)
			}
			async function v(e, t) {
				t || ((t = e), (e = ""))
				let i = rQ(),
					r = 0,
					n,
					s = null
				try {
					return (
						await g
							.unsafe("begin " + e.replace(/[^a-z ]/gi, ""), [], {
								onexecute: function (e) {
									;(n = e), S(e, o), (e.reserved = () => (i.length ? e.execute(i.shift()) : S(e, o)))
								},
							})
							.execute(),
						await Promise.race([a(n, t), new Promise((e, t) => (n.onclose = t))])
					)
				} catch (e) {
					throw e
				}
				async function a(e, t, n) {
					let o,
						l,
						c = p(function (t) {
							t.catch((e) => o || (o = e)), e.queue === f ? i.push(t) : e.execute(t) || S(e, f)
						})
					;(c.savepoint = function t(i, n) {
						return i && Array.isArray(i.raw)
							? t((e) => e.apply(e, arguments))
							: (1 == arguments.length && ((n = i), (i = null)), a(e, n, "s" + r++ + (i ? "_" + i : "")))
					}),
						(c.prepare = (e) => (s = e.replace(/[^a-z0-9$-_. ]/gi))),
						n && (await c`savepoint ${c(n)}`)
					try {
						if (
							((l = await new Promise((e, i) => {
								let r = t(c)
								Promise.resolve(Array.isArray(r) ? Promise.all(r) : r).then(e, i)
							})),
							o)
						)
							throw o
					} catch (e) {
						throw (
							(await (n ? c`rollback to ${c(n)}` : c`rollback`),
							(e instanceof i2 && "25P02" === e.code && o) || e)
						)
					}
					return n || (s ? await c`prepare transaction '${c.unsafe(s)}'` : await c`commit`), l
				}
			}
			function S(e, t) {
				return (
					e.queue.remove(e), t.push(e), (e.queue = t), t === u ? e.idleTimer.start() : e.idleTimer.cancel(), e
				)
			}
			function N(e) {
				return new i9(e, 3802)
			}
			function P(e, t) {
				return e.execute(t) ? S(e, h) : S(e, f)
			}
			function T(e) {
				return new Promise((t, r) => {
					e.state
						? e.active
							? rM(i).cancel(e.state, t, r)
							: (e.cancelled = { resolve: t, reject: r })
						: (s.remove(e),
							(e.cancelled = !0),
							e.reject(i8("57014", "canceling statement due to user request")),
							t())
				})
			}
			async function x({ timeout: e = null } = {}) {
				let t
				return (
					n ||
					(await 1,
					(n = Promise.race([
						new Promise((i) => null !== e && (t = setTimeout(C, 1e3 * e, i))),
						Promise.all(
							m
								.map((e) => e.end())
								.concat(y.sql ? y.sql.end({ timeout: 0 }) : [], r.sql ? r.sql.end({ timeout: 0 }) : []),
						),
					]).then(() => clearTimeout(t))))
				)
			}
			async function $() {
				await Promise.all(m.map((e) => e.end()))
			}
			async function C(e) {
				for (await Promise.all(m.map((e) => e.terminate())); s.length; )
					s.shift().reject(i3("CONNECTION_DESTROYED", i))
				e()
			}
			function q(e, t) {
				return S(e, a), e.connect(t), e
			}
			function _(e) {
				S(e, c)
			}
			function B(e) {
				if (0 === s.length) return S(e, u)
				let t = Math.ceil(s.length / (a.length + 1)),
					i = !0
				for (; i && s.length && t-- > 0; ) {
					let t = s.shift()
					if (t.reserve) return t.reserve(e)
					i = e.execute(t)
				}
				i ? S(e, h) : S(e, f)
			}
			function A(e, t) {
				S(e, l),
					(e.reserved = null),
					e.onclose && (e.onclose(t), (e.onclose = null)),
					i.onclose && i.onclose(e.id),
					s.length && q(e, s.shift())
			}
		}
		function r5(e) {
			return (0.5 + Math.random() / 2) * Math.min(3 ** e / 100, 20)
		}
		function r7() {
			return 60 * (30 + 30 * Math.random())
		}
		class r9 {
			static [r] = "ConsoleLogWriter"
			write(e) {
				console.log(e)
			}
		}
		class ne {
			static [r] = "DefaultLogger"
			writer
			constructor(e) {
				this.writer = e?.writer ?? new r9()
			}
			logQuery(e, t) {
				let i = t.map((e) => {
						try {
							return JSON.stringify(e)
						} catch {
							return String(e)
						}
					}),
					r = i.length ? ` -- params: [${i.join(", ")}]` : ""
				this.writer.write(`Query: ${e}${r}`)
			}
		}
		class nt {
			static [r] = "NoopLogger"
			logQuery() {}
		}
		class ni {
			static [r] = "QueryPromise";
			[Symbol.toStringTag] = "QueryPromise"
			catch(e) {
				return this.then(void 0, e)
			}
			finally(e) {
				return this.then(
					(t) => (e?.(), t),
					(t) => {
						throw (e?.(), t)
					},
				)
			}
			then(e, t) {
				return this.execute().then(e, t)
			}
		}
		class nr {
			constructor(e) {
				this.table = e
			}
			static [r] = "ColumnAliasProxyHandler"
			get(e, t) {
				return "table" === t ? this.table : e[t]
			}
		}
		class nn {
			constructor(e, t) {
				;(this.alias = e), (this.replaceOriginalName = t)
			}
			static [r] = "TableAliasProxyHandler"
			get(e, t) {
				if (t === m.Symbol.IsAlias) return !0
				if (t === m.Symbol.Name || (this.replaceOriginalName && t === m.Symbol.OriginalName)) return this.alias
				if (t === F) return { ...e[F], name: this.alias, isAlias: !0 }
				if (t === m.Symbol.Columns) {
					let t = e[m.Symbol.Columns]
					if (!t) return t
					let i = {}
					return (
						Object.keys(t).map((r) => {
							i[r] = new Proxy(t[r], new nr(new Proxy(e, this)))
						}),
						i
					)
				}
				let i = e[t]
				return n(i, p) ? new Proxy(i, new nr(new Proxy(e, this))) : i
			}
		}
		class ns {
			constructor(e) {
				this.alias = e
			}
			static [r] = "RelationTableAliasProxyHandler"
			get(e, t) {
				return "sourceTable" === t ? na(e.sourceTable, this.alias) : e[t]
			}
		}
		function na(e, t) {
			return new Proxy(e, new nn(t, !1))
		}
		function no(e, t) {
			return new Proxy(e, new nr(new Proxy(e.table, new nn(t, !1))))
		}
		function nl(e, t) {
			return new V.Aliased(nc(e.sql, t), e.fieldAlias)
		}
		function nc(e, t) {
			return G.join(
				e.queryChunks.map((e) => (n(e, p) ? no(e, t) : n(e, V) ? nc(e, t) : n(e, V.Aliased) ? nl(e, t) : e)),
			)
		}
		class nu {
			static [r] = "SelectionProxyHandler"
			config
			constructor(e) {
				this.config = { ...e }
			}
			get(e, t) {
				if ("_" === t) return { ...e._, selectedFields: new Proxy(e._.selectedFields, this) }
				if (t === F) return { ...e[F], selectedFields: new Proxy(e[F].selectedFields, this) }
				if ("symbol" == typeof t) return e[t]
				let i = (n(e, z) ? e._.selectedFields : n(e, ei) ? e[F].selectedFields : e)[t]
				if (n(i, V.Aliased)) {
					if ("sql" === this.config.sqlAliasedBehavior && !i.isSelectionField) return i.sql
					let e = i.clone()
					return (e.isSelectionField = !0), e
				}
				if (n(i, V)) {
					if ("sql" === this.config.sqlBehavior) return i
					throw Error(
						`You tried to reference "${t}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`,
					)
				}
				return n(i, p)
					? this.config.alias
						? new Proxy(
								i,
								new nr(
									new Proxy(
										i.table,
										new nn(this.config.alias, this.config.replaceOriginalName ?? !1),
									),
								),
							)
						: i
					: "object" != typeof i || null === i
						? i
						: new Proxy(i, new nu(this.config))
			}
		}
		class nh {
			constructor(e, t) {
				;(this.name = e), (this.value = t)
			}
			static [r] = "PgCheckBuilder"
			brand
			build(e) {
				return new nf(e, this)
			}
		}
		class nf {
			constructor(e, t) {
				;(this.table = e), (this.name = t.name), (this.value = t.value)
			}
			static [r] = "PgCheck"
			name
			value
		}
		class nd {
			constructor(e, t) {
				;(this.name = e),
					t &&
						((this.as = t.as),
						(this.for = t.for),
						(this.to = t.to),
						(this.using = t.using),
						(this.withCheck = t.withCheck))
			}
			static [r] = "PgPolicy"
			as
			for
			to
			using
			withCheck
			_linkedTable
			link(e) {
				return (this._linkedTable = e), this
			}
		}
		let nm = Symbol.for("drizzle:PgViewConfig")
		function ng(e) {
			return (e.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? [])
				.map((e) => e.toLowerCase())
				.join("_")
		}
		function np(e) {
			return (e.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []).reduce(
				(e, t, i) => e + (0 === i ? t.toLowerCase() : `${t[0].toUpperCase()}${t.slice(1)}`),
				"",
			)
		}
		function ny(e) {
			return e
		}
		class nb {
			static [r] = "CasingCache"
			cache = {}
			cachedTables = {}
			convert
			constructor(e) {
				this.convert = "snake_case" === e ? ng : "camelCase" === e ? np : ny
			}
			getColumnCasing(e) {
				if (!e.keyAsName) return e.name
				let t = e.table[m.Symbol.Schema] ?? "public",
					i = e.table[m.Symbol.OriginalName],
					r = `${t}.${i}.${e.name}`
				return this.cache[r] || this.cacheTable(e.table), this.cache[r]
			}
			cacheTable(e) {
				let t = e[m.Symbol.Schema] ?? "public",
					i = e[m.Symbol.OriginalName],
					r = `${t}.${i}`
				if (!this.cachedTables[r]) {
					for (let t of Object.values(e[m.Symbol.Columns])) {
						let e = `${r}.${t.name}`
						this.cache[e] = this.convert(t.name)
					}
					this.cachedTables[r] = !0
				}
			}
			clearCache() {
				;(this.cache = {}), (this.cachedTables = {})
			}
		}
		class nw extends Error {
			static [r] = "DrizzleError"
			constructor({ message: e, cause: t }) {
				super(e), (this.name = "DrizzleError"), (this.cause = t)
			}
		}
		class nv extends nw {
			static [r] = "TransactionRollbackError"
			constructor() {
				super({ message: "Rollback" })
			}
		}
		class nS extends ei {
			static [r] = "PgViewBase"
		}
		class nN {
			static [r] = "PgDialect"
			casing
			constructor(e) {
				this.casing = new nb(e?.casing)
			}
			async migrate(e, t, i) {
				let r = "string" == typeof i ? "__drizzle_migrations" : (i.migrationsTable ?? "__drizzle_migrations"),
					n = "string" == typeof i ? "drizzle" : (i.migrationsSchema ?? "drizzle"),
					s = G`
			CREATE TABLE IF NOT EXISTS ${G.identifier(n)}.${G.identifier(r)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`
				await t.execute(G`CREATE SCHEMA IF NOT EXISTS ${G.identifier(n)}`), await t.execute(s)
				let a = (
					await t.all(
						G`select id, hash, created_at from ${G.identifier(n)}.${G.identifier(r)} order by created_at desc limit 1`,
					)
				)[0]
				await t.transaction(async (t) => {
					for await (let i of e)
						if (!a || Number(a.created_at) < i.folderMillis) {
							for (let e of i.sql) await t.execute(G.raw(e))
							await t.execute(
								G`insert into ${G.identifier(n)}.${G.identifier(r)} ("hash", "created_at") values(${i.hash}, ${i.folderMillis})`,
							)
						}
				})
			}
			escapeName(e) {
				return `"${e}"`
			}
			escapeParam(e) {
				return `$${e + 1}`
			}
			escapeString(e) {
				return `'${e.replace(/'/g, "''")}'`
			}
			buildWithCTE(e) {
				if (!e?.length) return
				let t = [G`with `]
				for (let [i, r] of e.entries())
					t.push(G`${G.identifier(r._.alias)} as (${r._.sql})`), i < e.length - 1 && t.push(G`, `)
				return t.push(G` `), G.join(t)
			}
			buildDeleteQuery({ table: e, where: t, returning: i, withList: r }) {
				let n = this.buildWithCTE(r),
					s = i ? G` returning ${this.buildSelection(i, { isSingleTable: !0 })}` : void 0,
					a = t ? G` where ${t}` : void 0
				return G`${n}delete from ${e}${a}${s}`
			}
			buildUpdateSet(e, t) {
				let i = e[m.Symbol.Columns],
					r = Object.keys(i).filter((e) => void 0 !== t[e] || i[e]?.onUpdateFn !== void 0),
					n = r.length
				return G.join(
					r.flatMap((e, r) => {
						let s = i[e],
							a = t[e] ?? G.param(s.onUpdateFn(), s),
							o = G`${G.identifier(this.casing.getColumnCasing(s))} = ${a}`
						return r < n - 1 ? [o, G.raw(", ")] : [o]
					}),
				)
			}
			buildUpdateQuery({ table: e, set: t, where: i, returning: r, withList: n, from: s, joins: a }) {
				let o = this.buildWithCTE(n),
					l = e[it.Symbol.Name],
					c = e[it.Symbol.Schema],
					u = e[it.Symbol.OriginalName],
					h = l === u ? void 0 : l,
					f = G`${c ? G`${G.identifier(c)}.` : void 0}${G.identifier(u)}${h && G` ${G.identifier(h)}`}`,
					d = this.buildUpdateSet(e, t),
					m = s && G.join([G.raw(" from "), this.buildFromTable(s)]),
					g = this.buildJoins(a),
					p = r ? G` returning ${this.buildSelection(r, { isSingleTable: !s })}` : void 0,
					y = i ? G` where ${i}` : void 0
				return G`${o}update ${f} set ${d}${m}${g}${y}${p}`
			}
			buildSelection(e, { isSingleTable: t = !1 } = {}) {
				let i = e.length,
					r = e.flatMap(({ field: e }, r) => {
						let s = []
						if (n(e, V.Aliased) && e.isSelectionField) s.push(G.identifier(e.fieldAlias))
						else if (n(e, V.Aliased) || n(e, V)) {
							let i = n(e, V.Aliased) ? e.sql : e
							t
								? s.push(
										new V(
											i.queryChunks.map((e) =>
												n(e, C) ? G.identifier(this.casing.getColumnCasing(e)) : e,
											),
										),
									)
								: s.push(i),
								n(e, V.Aliased) && s.push(G` as ${G.identifier(e.fieldAlias)}`)
						} else n(e, p) && (t ? s.push(G.identifier(this.casing.getColumnCasing(e))) : s.push(e))
						return r < i - 1 && s.push(G`, `), s
					})
				return G.join(r)
			}
			buildJoins(e) {
				if (!e || 0 === e.length) return
				let t = []
				for (let [i, r] of e.entries()) {
					0 === i && t.push(G` `)
					let s = r.table,
						a = r.lateral ? G` lateral` : void 0,
						o = r.on ? G` on ${r.on}` : void 0
					if (n(s, it)) {
						let e = s[it.Symbol.Name],
							i = s[it.Symbol.Schema],
							n = s[it.Symbol.OriginalName],
							l = e === n ? void 0 : r.alias
						t.push(
							G`${G.raw(r.joinType)} join${a} ${i ? G`${G.identifier(i)}.` : void 0}${G.identifier(n)}${l && G` ${G.identifier(l)}`}${o}`,
						)
					} else if (n(s, ei)) {
						let e = s[F].name,
							i = s[F].schema,
							n = s[F].originalName,
							l = e === n ? void 0 : r.alias
						t.push(
							G`${G.raw(r.joinType)} join${a} ${i ? G`${G.identifier(i)}.` : void 0}${G.identifier(n)}${l && G` ${G.identifier(l)}`}${o}`,
						)
					} else t.push(G`${G.raw(r.joinType)} join${a} ${s}${o}`)
					i < e.length - 1 && t.push(G` `)
				}
				return G.join(t)
			}
			buildFromTable(e) {
				if (n(e, m) && e[m.Symbol.IsAlias]) {
					let t = G`${G.identifier(e[m.Symbol.OriginalName])}`
					return (
						e[m.Symbol.Schema] && (t = G`${G.identifier(e[m.Symbol.Schema])}.${t}`),
						G`${t} ${G.identifier(e[m.Symbol.Name])}`
					)
				}
				return e
			}
			buildSelectQuery({
				withList: e,
				fields: t,
				fieldsFlat: i,
				where: r,
				having: a,
				table: o,
				joins: l,
				orderBy: c,
				groupBy: u,
				limit: h,
				offset: f,
				lockingClause: d,
				distinct: g,
				setOperators: y,
			}) {
				let b,
					w,
					v,
					S = i ?? er(t)
				for (let e of S) {
					let t
					if (
						n(e.field, p) &&
						e.field.table[s] !== (n(o, z) ? o._.alias : n(o, nS) ? o[F].name : n(o, V) ? void 0 : o[s]) &&
						((t = e.field.table),
						!l?.some(({ alias: e }) => e === (t[m.Symbol.IsAlias] ? t[s] : t[m.Symbol.BaseName])))
					) {
						let t = e.field.table[s]
						throw Error(
							`Your "${e.path.join("->")}" field references a column "${t}"."${e.field.name}", but the table "${t}" is not part of the query! Did you forget to join it?`,
						)
					}
				}
				let N = !l || 0 === l.length,
					P = this.buildWithCTE(e)
				g && (b = !0 === g ? G` distinct` : G` distinct on (${G.join(g.on, G`, `)})`)
				let T = this.buildSelection(S, { isSingleTable: N }),
					x = this.buildFromTable(o),
					$ = this.buildJoins(l),
					C = r ? G` where ${r}` : void 0,
					q = a ? G` having ${a}` : void 0
				c && c.length > 0 && (w = G` order by ${G.join(c, G`, `)}`),
					u && u.length > 0 && (v = G` group by ${G.join(u, G`, `)}`)
				let _ = "object" == typeof h || ("number" == typeof h && h >= 0) ? G` limit ${h}` : void 0,
					B = f ? G` offset ${f}` : void 0,
					A = G.empty()
				if (d) {
					let e = G` for ${G.raw(d.strength)}`
					d.config.of &&
						e.append(G` of ${G.join(Array.isArray(d.config.of) ? d.config.of : [d.config.of], G`, `)}`),
						d.config.noWait ? e.append(G` nowait`) : d.config.skipLocked && e.append(G` skip locked`),
						A.append(e)
				}
				let O = G`${P}select${b} ${T} from ${x}${$}${C}${v}${q}${w}${_}${B}${A}`
				return y.length > 0 ? this.buildSetOperations(O, y) : O
			}
			buildSetOperations(e, t) {
				let [i, ...r] = t
				if (!i) throw Error("Cannot pass undefined values to any set operator")
				return 0 === r.length
					? this.buildSetOperationQuery({ leftSelect: e, setOperator: i })
					: this.buildSetOperations(this.buildSetOperationQuery({ leftSelect: e, setOperator: i }), r)
			}
			buildSetOperationQuery({
				leftSelect: e,
				setOperator: { type: t, isAll: i, rightSelect: r, limit: s, orderBy: a, offset: o },
			}) {
				let l,
					c = G`(${e.getSQL()}) `,
					u = G`(${r.getSQL()})`
				if (a && a.length > 0) {
					let e = []
					for (let t of a)
						if (n(t, C)) e.push(G.identifier(t.name))
						else if (n(t, V)) {
							for (let e = 0; e < t.queryChunks.length; e++) {
								let i = t.queryChunks[e]
								n(i, C) && (t.queryChunks[e] = G.identifier(i.name))
							}
							e.push(G`${t}`)
						} else e.push(G`${t}`)
					l = G` order by ${G.join(e, G`, `)} `
				}
				let h = "object" == typeof s || ("number" == typeof s && s >= 0) ? G` limit ${s}` : void 0,
					f = G.raw(`${t} ${i ? "all " : ""}`),
					d = o ? G` offset ${o}` : void 0
				return G`${c}${f}${u}${l}${h}${d}`
			}
			buildInsertQuery({
				table: e,
				values: t,
				onConflict: i,
				returning: r,
				withList: s,
				select: a,
				overridingSystemValue_: o,
			}) {
				let l = [],
					c = Object.entries(e[m.Symbol.Columns]).filter(([e, t]) => !t.shouldDisableInsert()),
					u = c.map(([, e]) => G.identifier(this.casing.getColumnCasing(e)))
				if (a) n(t, V) ? l.push(t) : l.push(t.getSQL())
				else
					for (let [e, i] of (l.push(G.raw("values ")), t.entries())) {
						let r = []
						for (let [e, t] of c) {
							let s = i[e]
							if (void 0 === s || (n(s, W) && void 0 === s.value))
								if (void 0 !== t.defaultFn) {
									let e = t.defaultFn(),
										i = n(e, V) ? e : G.param(e, t)
									r.push(i)
								} else if (t.default || void 0 === t.onUpdateFn) r.push(G`default`)
								else {
									let e = t.onUpdateFn(),
										i = n(e, V) ? e : G.param(e, t)
									r.push(i)
								}
							else r.push(s)
						}
						l.push(r), e < t.length - 1 && l.push(G`, `)
					}
				let h = this.buildWithCTE(s),
					f = G.join(l),
					d = r ? G` returning ${this.buildSelection(r, { isSingleTable: !0 })}` : void 0,
					g = i ? G` on conflict ${i}` : void 0,
					p = !0 === o ? G`overriding system value ` : void 0
				return G`${h}insert into ${e} ${u} ${p}${f}${g}${d}`
			}
			buildRefreshMaterializedViewQuery({ view: e, concurrently: t, withNoData: i }) {
				let r = t ? G` concurrently` : void 0,
					n = i ? G` with no data` : void 0
				return G`refresh materialized view${r} ${e}${n}`
			}
			prepareTyping(e) {
				if (n(e, e0) || n(e, eY)) return "json"
				if (n(e, tn)) return "decimal"
				if (n(e, tQ)) return "time"
				if (n(e, tI) || n(e, tU)) return "timestamp"
				if (n(e, eE) || n(e, eD)) return "date"
				else if (n(e, tJ)) return "uuid"
				else return "none"
			}
			sqlToQuery(e, t) {
				return e.toQuery({
					casing: this.casing,
					escapeName: this.escapeName,
					escapeParam: this.escapeParam,
					escapeString: this.escapeString,
					prepareTyping: this.prepareTyping,
					invokeSource: t,
				})
			}
			buildRelationalQueryWithoutPK({
				fullSchema: e,
				schema: t,
				tableNamesMap: i,
				table: r,
				tableConfig: s,
				queryConfig: a,
				tableAlias: o,
				nestedQueryRelation: l,
				joinOn: c,
			}) {
				let u,
					h = [],
					f,
					d,
					y = [],
					b,
					w = []
				if (!0 === a)
					h = Object.entries(s.columns).map(([e, t]) => ({
						dbKey: t.name,
						tsKey: e,
						field: no(t, o),
						relationTableTsKey: void 0,
						isJson: !1,
						selection: [],
					}))
				else {
					let r = Object.fromEntries(Object.entries(s.columns).map(([e, t]) => [e, no(t, o)]))
					if (a.where) {
						let e =
							"function" == typeof a.where
								? a.where(r, {
										and: id,
										between: i$,
										eq: iu,
										exists: iT,
										gt: ip,
										gte: iy,
										ilike: iB,
										inArray: iv,
										isNull: iN,
										isNotNull: iP,
										like: iq,
										lt: ib,
										lte: iw,
										ne: ih,
										not: ig,
										notBetween: iC,
										notExists: ix,
										notLike: i_,
										notIlike: iA,
										notInArray: iS,
										or: im,
										sql: G,
									})
								: a.where
						b = e && nc(e, o)
					}
					let l = [],
						c = []
					if (a.columns) {
						let e = !1
						for (let [t, i] of Object.entries(a.columns))
							void 0 !== i && t in s.columns && (e || !0 !== i || (e = !0), c.push(t))
						c.length > 0 &&
							(c = e
								? c.filter((e) => a.columns?.[e] === !0)
								: Object.keys(s.columns).filter((e) => !c.includes(e)))
					} else c = Object.keys(s.columns)
					for (let e of c) {
						let t = s.columns[e]
						l.push({ tsKey: e, value: t })
					}
					let u = []
					if (
						(a.with &&
							(u = Object.entries(a.with)
								.filter((e) => !!e[1])
								.map(([e, t]) => ({ tsKey: e, queryConfig: t, relation: s.relations[e] }))),
						a.extras)
					)
						for (let [e, t] of Object.entries(
							"function" == typeof a.extras ? a.extras(r, { sql: G }) : a.extras,
						))
							l.push({ tsKey: e, value: nl(t, o) })
					for (let { tsKey: e, value: t } of l)
						h.push({
							dbKey: n(t, V.Aliased) ? t.fieldAlias : s.columns[e].name,
							tsKey: e,
							field: n(t, p) ? no(t, o) : t,
							relationTableTsKey: void 0,
							isJson: !1,
							selection: [],
						})
					let v =
						"function" == typeof a.orderBy ? a.orderBy(r, { sql: G, asc: iO, desc: ij }) : (a.orderBy ?? [])
					for (let { tsKey: r, queryConfig: s, relation: l } of (Array.isArray(v) || (v = [v]),
					(y = v.map((e) => (n(e, p) ? no(e, o) : nc(e, o)))),
					(f = a.limit),
					(d = a.offset),
					u)) {
						let a = (function (e, t, i) {
								if (n(i, iD) && i.config)
									return { fields: i.config.fields, references: i.config.references }
								let r = t[g(i.referencedTable)]
								if (!r) throw Error(`Table "${i.referencedTable[m.Symbol.Name]}" not found in schema`)
								let s = e[r]
								if (!s) throw Error(`Table "${r}" not found in schema`)
								let a = i.sourceTable,
									o = t[g(a)]
								if (!o) throw Error(`Table "${a[m.Symbol.Name]}" not found in schema`)
								let l = []
								for (let e of Object.values(s.relations))
									((i.relationName && i !== e && e.relationName === i.relationName) ||
										(!i.relationName && e.referencedTable === i.sourceTable)) &&
										l.push(e)
								if (l.length > 1)
									throw i.relationName
										? Error(
												`There are multiple relations with name "${i.relationName}" in table "${r}"`,
											)
										: Error(
												`There are multiple relations between "${r}" and "${i.sourceTable[m.Symbol.Name]}". Please specify relation name`,
											)
								if (l[0] && n(l[0], iD) && l[0].config)
									return { fields: l[0].config.references, references: l[0].config.fields }
								throw Error(`There is not enough information to infer relation "${o}.${i.fieldName}"`)
							})(t, i, l),
							c = i[g(l.referencedTable)],
							u = `${o}_${r}`,
							f = id(...a.fields.map((e, t) => iu(no(a.references[t], u), no(e, o)))),
							d = this.buildRelationalQueryWithoutPK({
								fullSchema: e,
								schema: t,
								tableNamesMap: i,
								table: e[c],
								tableConfig: t[c],
								queryConfig: n(l, iD) ? (!0 === s ? { limit: 1 } : { ...s, limit: 1 }) : s,
								tableAlias: u,
								joinOn: f,
								nestedQueryRelation: l,
							}),
							p = G`${G.identifier(u)}.${G.identifier("data")}`.as(r)
						w.push({ on: G`true`, table: new z(d.sql, {}, u), alias: u, joinType: "left", lateral: !0 }),
							h.push({
								dbKey: r,
								tsKey: r,
								field: p,
								relationTableTsKey: c,
								isJson: !0,
								selection: d.selection,
							})
					}
				}
				if (0 === h.length) throw new nw({ message: `No fields selected for table "${s.tsName}" ("${o}")` })
				if (((b = id(c, b)), l)) {
					let e = G`json_build_array(${G.join(
						h.map(({ field: e, tsKey: t, isJson: i }) =>
							i ? G`${G.identifier(`${o}_${t}`)}.${G.identifier("data")}` : n(e, V.Aliased) ? e.sql : e,
						),
						G`, `,
					)})`
					n(l, iz) &&
						(e = G`coalesce(json_agg(${e}${y.length > 0 ? G` order by ${G.join(y, G`, `)}` : void 0}), '[]'::json)`)
					let t = [
						{
							dbKey: "data",
							tsKey: "data",
							field: e.as("data"),
							isJson: !0,
							relationTableTsKey: s.tsName,
							selection: h,
						},
					]
					void 0 !== f || void 0 !== d || y.length > 0
						? ((u = this.buildSelectQuery({
								table: na(r, o),
								fields: {},
								fieldsFlat: [{ path: [], field: G.raw("*") }],
								where: b,
								limit: f,
								offset: d,
								orderBy: y,
								setOperators: [],
							})),
							(b = void 0),
							(f = void 0),
							(d = void 0),
							(y = []))
						: (u = na(r, o)),
						(u = this.buildSelectQuery({
							table: n(u, it) ? u : new z(u, {}, o),
							fields: {},
							fieldsFlat: t.map(({ field: e }) => ({ path: [], field: n(e, p) ? no(e, o) : e })),
							joins: w,
							where: b,
							limit: f,
							offset: d,
							orderBy: y,
							setOperators: [],
						}))
				} else
					u = this.buildSelectQuery({
						table: na(r, o),
						fields: {},
						fieldsFlat: h.map(({ field: e }) => ({ path: [], field: n(e, p) ? no(e, o) : e })),
						joins: w,
						where: b,
						limit: f,
						offset: d,
						orderBy: y,
						setOperators: [],
					})
				return { tableTsKey: s.tsName, sql: u, selection: h }
			}
		}
		class nP {
			static [r] = "TypedQueryBuilder"
			getSelectedFields() {
				return this._.selectedFields
			}
		}
		class nT {
			static [r] = "PgSelectBuilder"
			fields
			session
			dialect
			withList = []
			distinct
			constructor(e) {
				;(this.fields = e.fields),
					(this.session = e.session),
					(this.dialect = e.dialect),
					e.withList && (this.withList = e.withList),
					(this.distinct = e.distinct)
			}
			authToken
			setToken(e) {
				return (this.authToken = e), this
			}
			from(e) {
				let t,
					i = !!this.fields
				return (
					(t = this.fields
						? this.fields
						: n(e, z)
							? Object.fromEntries(Object.keys(e._.selectedFields).map((t) => [t, e[t]]))
							: n(e, nS)
								? e[F].selectedFields
								: n(e, V)
									? {}
									: ea(e)),
					new n$({
						table: e,
						fields: t,
						isPartialSelect: i,
						session: this.session,
						dialect: this.dialect,
						withList: this.withList,
						distinct: this.distinct,
					}).setToken(this.authToken)
				)
			}
		}
		class nx extends nP {
			static [r] = "PgSelectQueryBuilder"
			_
			config
			joinsNotNullableMap
			tableName
			isPartialSelect
			session
			dialect
			cacheConfig = void 0
			usedTables = new Set()
			constructor({ table: e, fields: t, isPartialSelect: i, session: r, dialect: n, withList: s, distinct: a }) {
				for (const o of (super(),
				(this.config = { withList: s, table: e, fields: { ...t }, distinct: a, setOperators: [] }),
				(this.isPartialSelect = i),
				(this.session = r),
				(this.dialect = n),
				(this._ = { selectedFields: t, config: this.config }),
				(this.tableName = eo(e)),
				(this.joinsNotNullableMap = "string" == typeof this.tableName ? { [this.tableName]: !0 } : {}),
				nR(e)))
					this.usedTables.add(o)
			}
			getUsedTables() {
				return [...this.usedTables]
			}
			createJoin(e, t) {
				return (i, r) => {
					let s = this.tableName,
						a = eo(i)
					for (let e of nR(i)) this.usedTables.add(e)
					if ("string" == typeof a && this.config.joins?.some((e) => e.alias === a))
						throw Error(`Alias "${a}" is already used in this query`)
					if (
						!this.isPartialSelect &&
						(1 === Object.keys(this.joinsNotNullableMap).length &&
							"string" == typeof s &&
							(this.config.fields = { [s]: this.config.fields }),
						"string" == typeof a && !n(i, V))
					) {
						let e = n(i, z) ? i._.selectedFields : n(i, ei) ? i[F].selectedFields : i[m.Symbol.Columns]
						this.config.fields[a] = e
					}
					if (
						("function" == typeof r &&
							(r = r(
								new Proxy(
									this.config.fields,
									new nu({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
								),
							)),
						this.config.joins || (this.config.joins = []),
						this.config.joins.push({ on: r, table: i, joinType: e, alias: a, lateral: t }),
						"string" == typeof a)
					)
						switch (e) {
							case "left":
								this.joinsNotNullableMap[a] = !1
								break
							case "right":
								;(this.joinsNotNullableMap = Object.fromEntries(
									Object.entries(this.joinsNotNullableMap).map(([e]) => [e, !1]),
								)),
									(this.joinsNotNullableMap[a] = !0)
								break
							case "cross":
							case "inner":
								this.joinsNotNullableMap[a] = !0
								break
							case "full":
								;(this.joinsNotNullableMap = Object.fromEntries(
									Object.entries(this.joinsNotNullableMap).map(([e]) => [e, !1]),
								)),
									(this.joinsNotNullableMap[a] = !1)
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
			createSetOperator(e, t) {
				return (i) => {
					let r = "function" == typeof i ? i(nq()) : i
					if (!en(this.getSelectedFields(), r.getSelectedFields()))
						throw Error(
							"Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
						)
					return this.config.setOperators.push({ type: e, isAll: t, rightSelect: r }), this
				}
			}
			union = this.createSetOperator("union", !1)
			unionAll = this.createSetOperator("union", !0)
			intersect = this.createSetOperator("intersect", !1)
			intersectAll = this.createSetOperator("intersect", !0)
			except = this.createSetOperator("except", !1)
			exceptAll = this.createSetOperator("except", !0)
			addSetOperators(e) {
				return this.config.setOperators.push(...e), this
			}
			where(e) {
				return (
					"function" == typeof e &&
						(e = e(
							new Proxy(this.config.fields, new nu({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })),
						)),
					(this.config.where = e),
					this
				)
			}
			having(e) {
				return (
					"function" == typeof e &&
						(e = e(
							new Proxy(this.config.fields, new nu({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })),
						)),
					(this.config.having = e),
					this
				)
			}
			groupBy(...e) {
				if ("function" == typeof e[0]) {
					let t = e[0](
						new Proxy(this.config.fields, new nu({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })),
					)
					this.config.groupBy = Array.isArray(t) ? t : [t]
				} else this.config.groupBy = e
				return this
			}
			orderBy(...e) {
				if ("function" == typeof e[0]) {
					let t = e[0](
							new Proxy(this.config.fields, new nu({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })),
						),
						i = Array.isArray(t) ? t : [t]
					this.config.setOperators.length > 0
						? (this.config.setOperators.at(-1).orderBy = i)
						: (this.config.orderBy = i)
				} else
					this.config.setOperators.length > 0
						? (this.config.setOperators.at(-1).orderBy = e)
						: (this.config.orderBy = e)
				return this
			}
			limit(e) {
				return (
					this.config.setOperators.length > 0
						? (this.config.setOperators.at(-1).limit = e)
						: (this.config.limit = e),
					this
				)
			}
			offset(e) {
				return (
					this.config.setOperators.length > 0
						? (this.config.setOperators.at(-1).offset = e)
						: (this.config.offset = e),
					this
				)
			}
			for(e, t = {}) {
				return (this.config.lockingClause = { strength: e, config: t }), this
			}
			getSQL() {
				return this.dialect.buildSelectQuery(this.config)
			}
			toSQL() {
				let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL())
				return t
			}
			as(e) {
				let t = []
				if ((t.push(...nR(this.config.table)), this.config.joins))
					for (let e of this.config.joins) t.push(...nR(e.table))
				return new Proxy(
					new z(this.getSQL(), this.config.fields, e, !1, [...new Set(t)]),
					new nu({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
				)
			}
			getSelectedFields() {
				return new Proxy(
					this.config.fields,
					new nu({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
				)
			}
			$dynamic() {
				return this
			}
			$withCache(e) {
				return (
					(this.cacheConfig =
						void 0 === e
							? { config: {}, enable: !0, autoInvalidate: !0 }
							: !1 === e
								? { enable: !1 }
								: { enable: !0, autoInvalidate: !0, ...e }),
					this
				)
			}
		}
		class n$ extends nx {
			static [r] = "PgSelect"
			_prepare(e) {
				let {
					session: t,
					config: i,
					dialect: r,
					joinsNotNullableMap: n,
					authToken: s,
					cacheConfig: a,
					usedTables: o,
				} = this
				if (!t)
					throw Error("Cannot execute a query on a query builder. Please use a database instance instead.")
				let { fields: l } = i
				return L("drizzle.prepareQuery", () => {
					let i = er(l),
						c = t.prepareQuery(
							r.sqlToQuery(this.getSQL()),
							i,
							e,
							!0,
							void 0,
							{ type: "select", tables: [...o] },
							a,
						)
					return (c.joinsNotNullableMap = n), c.setToken(s)
				})
			}
			prepare(e) {
				return this._prepare(e)
			}
			authToken
			setToken(e) {
				return (this.authToken = e), this
			}
			execute = (e) => L("drizzle.operation", () => this._prepare().execute(e, this.authToken))
		}
		for (let e of [ni])
			for (let t of Object.getOwnPropertyNames(e.prototype))
				"constructor" !== t &&
					Object.defineProperty(
						n$.prototype,
						t,
						Object.getOwnPropertyDescriptor(e.prototype, t) || Object.create(null),
					)
		function nC(e, t) {
			return (i, r, ...n) => {
				let s = [r, ...n].map((i) => ({ type: e, isAll: t, rightSelect: i }))
				for (let e of s)
					if (!en(i.getSelectedFields(), e.rightSelect.getSelectedFields()))
						throw Error(
							"Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
						)
				return i.addSetOperators(s)
			}
		}
		let nq = () => ({ union: n_, unionAll: nB, intersect: nA, intersectAll: nO, except: nj, exceptAll: nE }),
			n_ = nC("union", !1),
			nB = nC("union", !0),
			nA = nC("intersect", !1),
			nO = nC("intersect", !0),
			nj = nC("except", !1),
			nE = nC("except", !0)
		class nk {
			static [r] = "PgQueryBuilder"
			dialect
			dialectConfig
			constructor(e) {
				;(this.dialect = n(e, nN) ? e : void 0), (this.dialectConfig = n(e, nN) ? void 0 : e)
			}
			$with = (e, t) => {
				let i = this
				return {
					as: (r) => (
						"function" == typeof r && (r = r(i)),
						new Proxy(
							new Q(
								r.getSQL(),
								t ?? ("getSelectedFields" in r ? (r.getSelectedFields() ?? {}) : {}),
								e,
								!0,
							),
							new nu({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					),
				}
			}
			with(...e) {
				let t = this
				return {
					select: function (i) {
						return new nT({ fields: i ?? void 0, session: void 0, dialect: t.getDialect(), withList: e })
					},
					selectDistinct: function (e) {
						return new nT({ fields: e ?? void 0, session: void 0, dialect: t.getDialect(), distinct: !0 })
					},
					selectDistinctOn: function (e, i) {
						return new nT({
							fields: i ?? void 0,
							session: void 0,
							dialect: t.getDialect(),
							distinct: { on: e },
						})
					},
				}
			}
			select(e) {
				return new nT({ fields: e ?? void 0, session: void 0, dialect: this.getDialect() })
			}
			selectDistinct(e) {
				return new nT({ fields: e ?? void 0, session: void 0, dialect: this.getDialect(), distinct: !0 })
			}
			selectDistinctOn(e, t) {
				return new nT({ fields: t ?? void 0, session: void 0, dialect: this.getDialect(), distinct: { on: e } })
			}
			getDialect() {
				return this.dialect || (this.dialect = new nN(this.dialectConfig)), this.dialect
			}
		}
		class nD {
			constructor(e, t) {
				;(this.name = e), (this.schema = t)
			}
			static [r] = "PgDefaultViewBuilderCore"
			config = {}
			with(e) {
				return (this.config.with = e), this
			}
		}
		class nz extends nD {
			static [r] = "PgViewBuilder"
			as(e) {
				"function" == typeof e && (e = e(new nk()))
				let t = new nu({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
					i = new Proxy(e.getSelectedFields(), t)
				return new Proxy(
					new nM({
						pgConfig: this.config,
						config: {
							name: this.name,
							schema: this.schema,
							selectedFields: i,
							query: e.getSQL().inlineParams(),
						},
					}),
					t,
				)
			}
		}
		class nQ extends nD {
			static [r] = "PgManualViewBuilder"
			columns
			constructor(e, t, i) {
				super(e, i), (this.columns = ea(ii(e, t)))
			}
			existing() {
				return new Proxy(
					new nM({
						pgConfig: void 0,
						config: { name: this.name, schema: this.schema, selectedFields: this.columns, query: void 0 },
					}),
					new nu({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
			as(e) {
				return new Proxy(
					new nM({
						pgConfig: this.config,
						config: {
							name: this.name,
							schema: this.schema,
							selectedFields: this.columns,
							query: e.inlineParams(),
						},
					}),
					new nu({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
		}
		class nL {
			constructor(e, t) {
				;(this.name = e), (this.schema = t)
			}
			static [r] = "PgMaterializedViewBuilderCore"
			config = {}
			using(e) {
				return (this.config.using = e), this
			}
			with(e) {
				return (this.config.with = e), this
			}
			tablespace(e) {
				return (this.config.tablespace = e), this
			}
			withNoData() {
				return (this.config.withNoData = !0), this
			}
		}
		class nF extends nL {
			static [r] = "PgMaterializedViewBuilder"
			as(e) {
				"function" == typeof e && (e = e(new nk()))
				let t = new nu({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
					i = new Proxy(e.getSelectedFields(), t)
				return new Proxy(
					new nV({
						pgConfig: {
							with: this.config.with,
							using: this.config.using,
							tablespace: this.config.tablespace,
							withNoData: this.config.withNoData,
						},
						config: {
							name: this.name,
							schema: this.schema,
							selectedFields: i,
							query: e.getSQL().inlineParams(),
						},
					}),
					t,
				)
			}
		}
		class nI extends nL {
			static [r] = "PgManualMaterializedViewBuilder"
			columns
			constructor(e, t, i) {
				super(e, i), (this.columns = ea(ii(e, t)))
			}
			existing() {
				return new Proxy(
					new nV({
						pgConfig: {
							tablespace: this.config.tablespace,
							using: this.config.using,
							with: this.config.with,
							withNoData: this.config.withNoData,
						},
						config: { name: this.name, schema: this.schema, selectedFields: this.columns, query: void 0 },
					}),
					new nu({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
			as(e) {
				return new Proxy(
					new nV({
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
							query: e.inlineParams(),
						},
					}),
					new nu({
						alias: this.name,
						sqlBehavior: "error",
						sqlAliasedBehavior: "alias",
						replaceOriginalName: !0,
					}),
				)
			}
		}
		class nM extends nS {
			static [r] = "PgView";
			[nm]
			constructor({ pgConfig: e, config: t }) {
				super(t), e && (this[nm] = { with: e.with })
			}
		}
		let nU = Symbol.for("drizzle:PgMaterializedViewConfig")
		class nV extends nS {
			static [r] = "PgMaterializedView";
			[nU]
			constructor({ pgConfig: e, config: t }) {
				super(t),
					(this[nU] = {
						with: e?.with,
						using: e?.using,
						tablespace: e?.tablespace,
						withNoData: e?.withNoData,
					})
			}
		}
		function nR(e) {
			return n(e, it)
				? [e[a] ? `${e[a]}.${e[m.Symbol.BaseName]}` : e[m.Symbol.BaseName]]
				: n(e, z)
					? (e._.usedTables ?? [])
					: n(e, V)
						? (e.usedTables ?? [])
						: []
		}
		class nJ extends ni {
			constructor(e, t, i, r) {
				super(), (this.session = t), (this.dialect = i), (this.config = { table: e, withList: r })
			}
			static [r] = "PgDelete"
			config
			cacheConfig
			where(e) {
				return (this.config.where = e), this
			}
			returning(e = this.config.table[m.Symbol.Columns]) {
				return (this.config.returningFields = e), (this.config.returning = er(e)), this
			}
			getSQL() {
				return this.dialect.buildDeleteQuery(this.config)
			}
			toSQL() {
				let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL())
				return t
			}
			_prepare(e) {
				return L("drizzle.prepareQuery", () =>
					this.session.prepareQuery(
						this.dialect.sqlToQuery(this.getSQL()),
						this.config.returning,
						e,
						!0,
						void 0,
						{ type: "delete", tables: nR(this.config.table) },
						this.cacheConfig,
					),
				)
			}
			prepare(e) {
				return this._prepare(e)
			}
			authToken
			setToken(e) {
				return (this.authToken = e), this
			}
			execute = (e) => L("drizzle.operation", () => this._prepare().execute(e, this.authToken))
			getSelectedFields() {
				return this.config.returningFields
					? new Proxy(
							this.config.returningFields,
							new nu({ alias: this.config.table[s], sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					: void 0
			}
			$dynamic() {
				return this
			}
		}
		class nK {
			constructor(e, t, i, r, n) {
				;(this.table = e),
					(this.session = t),
					(this.dialect = i),
					(this.withList = r),
					(this.overridingSystemValue_ = n)
			}
			static [r] = "PgInsertBuilder"
			authToken
			setToken(e) {
				return (this.authToken = e), this
			}
			overridingSystemValue() {
				return (this.overridingSystemValue_ = !0), this
			}
			values(e) {
				if (0 === (e = Array.isArray(e) ? e : [e]).length)
					throw Error("values() must be called with at least one value")
				let t = e.map((e) => {
					let t = {},
						i = this.table[m.Symbol.Columns]
					for (let r of Object.keys(e)) {
						let s = e[r]
						t[r] = n(s, V) ? s : new W(s, i[r])
					}
					return t
				})
				return new nW(
					this.table,
					t,
					this.session,
					this.dialect,
					this.withList,
					!1,
					this.overridingSystemValue_,
				).setToken(this.authToken)
			}
			select(e) {
				let t = "function" == typeof e ? e(new nk()) : e
				if (!n(t, V) && !en(this.table[o], t._.selectedFields))
					throw Error(
						"Insert select error: selected fields are not the same or are in a different order compared to the table definition",
					)
				return new nW(this.table, t, this.session, this.dialect, this.withList, !0)
			}
		}
		class nW extends ni {
			constructor(e, t, i, r, n, s, a) {
				super(),
					(this.session = i),
					(this.dialect = r),
					(this.config = { table: e, values: t, withList: n, select: s, overridingSystemValue_: a })
			}
			static [r] = "PgInsert"
			config
			cacheConfig
			returning(e = this.config.table[m.Symbol.Columns]) {
				return (this.config.returningFields = e), (this.config.returning = er(e)), this
			}
			onConflictDoNothing(e = {}) {
				if (void 0 === e.target) this.config.onConflict = G`do nothing`
				else {
					let t = ""
					t = Array.isArray(e.target)
						? e.target.map((e) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(e))).join(",")
						: this.dialect.escapeName(this.dialect.casing.getColumnCasing(e.target))
					let i = e.where ? G` where ${e.where}` : void 0
					this.config.onConflict = G`(${G.raw(t)})${i} do nothing`
				}
				return this
			}
			onConflictDoUpdate(e) {
				if (e.where && (e.targetWhere || e.setWhere))
					throw Error(
						'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.',
					)
				let t = e.where ? G` where ${e.where}` : void 0,
					i = e.targetWhere ? G` where ${e.targetWhere}` : void 0,
					r = e.setWhere ? G` where ${e.setWhere}` : void 0,
					n = this.dialect.buildUpdateSet(this.config.table, es(this.config.table, e.set)),
					s = ""
				return (
					(s = Array.isArray(e.target)
						? e.target.map((e) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(e))).join(",")
						: this.dialect.escapeName(this.dialect.casing.getColumnCasing(e.target))),
					(this.config.onConflict = G`(${G.raw(s)})${i} do update set ${n}${t}${r}`),
					this
				)
			}
			getSQL() {
				return this.dialect.buildInsertQuery(this.config)
			}
			toSQL() {
				let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL())
				return t
			}
			_prepare(e) {
				return L("drizzle.prepareQuery", () =>
					this.session.prepareQuery(
						this.dialect.sqlToQuery(this.getSQL()),
						this.config.returning,
						e,
						!0,
						void 0,
						{ type: "insert", tables: nR(this.config.table) },
						this.cacheConfig,
					),
				)
			}
			prepare(e) {
				return this._prepare(e)
			}
			authToken
			setToken(e) {
				return (this.authToken = e), this
			}
			execute = (e) => L("drizzle.operation", () => this._prepare().execute(e, this.authToken))
			getSelectedFields() {
				return this.config.returningFields
					? new Proxy(
							this.config.returningFields,
							new nu({ alias: this.config.table[s], sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					: void 0
			}
			$dynamic() {
				return this
			}
		}
		class nG {
			constructor(e, t, i, r) {
				;(this.table = e), (this.session = t), (this.dialect = i), (this.withList = r)
			}
			static [r] = "PgUpdateBuilder"
			authToken
			setToken(e) {
				return (this.authToken = e), this
			}
			set(e) {
				return new nH(this.table, es(this.table, e), this.session, this.dialect, this.withList).setToken(
					this.authToken,
				)
			}
		}
		class nH extends ni {
			constructor(e, t, i, r, n) {
				super(),
					(this.session = i),
					(this.dialect = r),
					(this.config = { set: t, table: e, withList: n, joins: [] }),
					(this.tableName = eo(e)),
					(this.joinsNotNullableMap = "string" == typeof this.tableName ? { [this.tableName]: !0 } : {})
			}
			static [r] = "PgUpdate"
			config
			tableName
			joinsNotNullableMap
			cacheConfig
			from(e) {
				let t = eo(e)
				return "string" == typeof t && (this.joinsNotNullableMap[t] = !0), (this.config.from = e), this
			}
			getTableLikeFields(e) {
				return n(e, it) ? e[m.Symbol.Columns] : n(e, z) ? e._.selectedFields : e[F].selectedFields
			}
			createJoin(e) {
				return (t, i) => {
					let r = eo(t)
					if ("string" == typeof r && this.config.joins.some((e) => e.alias === r))
						throw Error(`Alias "${r}" is already used in this query`)
					if ("function" == typeof i) {
						let e =
							this.config.from && !n(this.config.from, V)
								? this.getTableLikeFields(this.config.from)
								: void 0
						i = i(
							new Proxy(
								this.config.table[m.Symbol.Columns],
								new nu({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
							),
							e && new Proxy(e, new nu({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })),
						)
					}
					if ((this.config.joins.push({ on: i, table: t, joinType: e, alias: r }), "string" == typeof r))
						switch (e) {
							case "left":
								this.joinsNotNullableMap[r] = !1
								break
							case "right":
								;(this.joinsNotNullableMap = Object.fromEntries(
									Object.entries(this.joinsNotNullableMap).map(([e]) => [e, !1]),
								)),
									(this.joinsNotNullableMap[r] = !0)
								break
							case "inner":
								this.joinsNotNullableMap[r] = !0
								break
							case "full":
								;(this.joinsNotNullableMap = Object.fromEntries(
									Object.entries(this.joinsNotNullableMap).map(([e]) => [e, !1]),
								)),
									(this.joinsNotNullableMap[r] = !1)
						}
					return this
				}
			}
			leftJoin = this.createJoin("left")
			rightJoin = this.createJoin("right")
			innerJoin = this.createJoin("inner")
			fullJoin = this.createJoin("full")
			where(e) {
				return (this.config.where = e), this
			}
			returning(e) {
				if (!e && ((e = Object.assign({}, this.config.table[m.Symbol.Columns])), this.config.from)) {
					let t = eo(this.config.from)
					if ("string" == typeof t && this.config.from && !n(this.config.from, V)) {
						let i = this.getTableLikeFields(this.config.from)
						e[t] = i
					}
					for (let t of this.config.joins) {
						let i = eo(t.table)
						if ("string" == typeof i && !n(t.table, V)) {
							let r = this.getTableLikeFields(t.table)
							e[i] = r
						}
					}
				}
				return (this.config.returningFields = e), (this.config.returning = er(e)), this
			}
			getSQL() {
				return this.dialect.buildUpdateQuery(this.config)
			}
			toSQL() {
				let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL())
				return t
			}
			_prepare(e) {
				let t = this.session.prepareQuery(
					this.dialect.sqlToQuery(this.getSQL()),
					this.config.returning,
					e,
					!0,
					void 0,
					{ type: "insert", tables: nR(this.config.table) },
					this.cacheConfig,
				)
				return (t.joinsNotNullableMap = this.joinsNotNullableMap), t
			}
			prepare(e) {
				return this._prepare(e)
			}
			authToken
			setToken(e) {
				return (this.authToken = e), this
			}
			execute = (e) => this._prepare().execute(e, this.authToken)
			getSelectedFields() {
				return this.config.returningFields
					? new Proxy(
							this.config.returningFields,
							new nu({ alias: this.config.table[s], sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					: void 0
			}
			$dynamic() {
				return this
			}
		}
		class nY extends V {
			constructor(e) {
				super(nY.buildEmbeddedCount(e.source, e.filters).queryChunks),
					(this.params = e),
					this.mapWith(Number),
					(this.session = e.session),
					(this.sql = nY.buildCount(e.source, e.filters))
			}
			sql
			token
			static [r] = "PgCountBuilder";
			[Symbol.toStringTag] = "PgCountBuilder"
			session
			static buildEmbeddedCount(e, t) {
				return G`(select count(*) from ${e}${G.raw(" where ").if(t)}${t})`
			}
			static buildCount(e, t) {
				return G`select count(*) as count from ${e}${G.raw(" where ").if(t)}${t};`
			}
			setToken(e) {
				return (this.token = e), this
			}
			then(e, t) {
				return Promise.resolve(this.session.count(this.sql, this.token)).then(e, t)
			}
			catch(e) {
				return this.then(void 0, e)
			}
			finally(e) {
				return this.then(
					(t) => (e?.(), t),
					(t) => {
						throw (e?.(), t)
					},
				)
			}
		}
		class nX {
			constructor(e, t, i, r, n, s, a) {
				;(this.fullSchema = e),
					(this.schema = t),
					(this.tableNamesMap = i),
					(this.table = r),
					(this.tableConfig = n),
					(this.dialect = s),
					(this.session = a)
			}
			static [r] = "PgRelationalQueryBuilder"
			findMany(e) {
				return new nZ(
					this.fullSchema,
					this.schema,
					this.tableNamesMap,
					this.table,
					this.tableConfig,
					this.dialect,
					this.session,
					e || {},
					"many",
				)
			}
			findFirst(e) {
				return new nZ(
					this.fullSchema,
					this.schema,
					this.tableNamesMap,
					this.table,
					this.tableConfig,
					this.dialect,
					this.session,
					e ? { ...e, limit: 1 } : { limit: 1 },
					"first",
				)
			}
		}
		class nZ extends ni {
			constructor(e, t, i, r, n, s, a, o, l) {
				super(),
					(this.fullSchema = e),
					(this.schema = t),
					(this.tableNamesMap = i),
					(this.table = r),
					(this.tableConfig = n),
					(this.dialect = s),
					(this.session = a),
					(this.config = o),
					(this.mode = l)
			}
			static [r] = "PgRelationalQuery"
			_prepare(e) {
				return L("drizzle.prepareQuery", () => {
					let { query: t, builtQuery: i } = this._toSQL()
					return this.session.prepareQuery(i, void 0, e, !0, (e, i) => {
						let r = e.map((e) =>
							(function e(t, i, r, s, a = (e) => e) {
								let o = {}
								for (let [l, c] of s.entries())
									if (c.isJson) {
										let s = i.relations[c.tsKey],
											u = r[l],
											h = "string" == typeof u ? JSON.parse(u) : u
										o[c.tsKey] = n(s, iD)
											? h && e(t, t[c.relationTableTsKey], h, c.selection, a)
											: h.map((i) => e(t, t[c.relationTableTsKey], i, c.selection, a))
									} else {
										let e,
											t = a(r[l]),
											i = c.field
										;(e = n(i, p) ? i : n(i, V) ? i.decoder : i.sql.decoder),
											(o[c.tsKey] = null === t ? null : e.mapFromDriverValue(t))
									}
								return o
							})(this.schema, this.tableConfig, e, t.selection, i),
						)
						return "first" === this.mode ? r[0] : r
					})
				})
			}
			prepare(e) {
				return this._prepare(e)
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
				let e = this._getQuery(),
					t = this.dialect.sqlToQuery(e.sql)
				return { query: e, builtQuery: t }
			}
			toSQL() {
				return this._toSQL().builtQuery
			}
			authToken
			setToken(e) {
				return (this.authToken = e), this
			}
			execute() {
				return L("drizzle.operation", () => this._prepare().execute(void 0, this.authToken))
			}
		}
		class n0 extends ni {
			constructor(e, t, i, r) {
				super(), (this.execute = e), (this.sql = t), (this.query = i), (this.mapBatchResult = r)
			}
			static [r] = "PgRaw"
			getSQL() {
				return this.sql
			}
			getQuery() {
				return this.query
			}
			mapResult(e, t) {
				return t ? this.mapBatchResult(e) : e
			}
			_prepare() {
				return this
			}
			isResponseInArrayMode() {
				return !1
			}
		}
		class n1 extends ni {
			constructor(e, t, i) {
				super(), (this.session = t), (this.dialect = i), (this.config = { view: e })
			}
			static [r] = "PgRefreshMaterializedView"
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
				let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL())
				return t
			}
			_prepare(e) {
				return L("drizzle.prepareQuery", () =>
					this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), void 0, e, !0),
				)
			}
			prepare(e) {
				return this._prepare(e)
			}
			authToken
			setToken(e) {
				return (this.authToken = e), this
			}
			execute = (e) => L("drizzle.operation", () => this._prepare().execute(e, this.authToken))
		}
		class n2 {
			constructor(e, t, i) {
				if (
					((this.dialect = e),
					(this.session = t),
					(this._ = i
						? { schema: i.schema, fullSchema: i.fullSchema, tableNamesMap: i.tableNamesMap, session: t }
						: { schema: void 0, fullSchema: {}, tableNamesMap: {}, session: t }),
					(this.query = {}),
					this._.schema)
				)
					for (const [r, n] of Object.entries(this._.schema))
						this.query[r] = new nX(
							i.fullSchema,
							this._.schema,
							this._.tableNamesMap,
							i.fullSchema[r],
							n,
							e,
							t,
						)
				this.$cache = { invalidate: async (e) => {} }
			}
			static [r] = "PgDatabase"
			query
			$with = (e, t) => {
				let i = this
				return {
					as: (r) => (
						"function" == typeof r && (r = r(new nk(i.dialect))),
						new Proxy(
							new Q(
								r.getSQL(),
								t ?? ("getSelectedFields" in r ? (r.getSelectedFields() ?? {}) : {}),
								e,
								!0,
							),
							new nu({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" }),
						)
					),
				}
			}
			$count(e, t) {
				return new nY({ source: e, filters: t, session: this.session })
			}
			$cache
			with(...e) {
				let t = this
				return {
					select: function (i) {
						return new nT({ fields: i ?? void 0, session: t.session, dialect: t.dialect, withList: e })
					},
					selectDistinct: function (i) {
						return new nT({
							fields: i ?? void 0,
							session: t.session,
							dialect: t.dialect,
							withList: e,
							distinct: !0,
						})
					},
					selectDistinctOn: function (i, r) {
						return new nT({
							fields: r ?? void 0,
							session: t.session,
							dialect: t.dialect,
							withList: e,
							distinct: { on: i },
						})
					},
					update: function (i) {
						return new nG(i, t.session, t.dialect, e)
					},
					insert: function (i) {
						return new nK(i, t.session, t.dialect, e)
					},
					delete: function (i) {
						return new nJ(i, t.session, t.dialect, e)
					},
				}
			}
			select(e) {
				return new nT({ fields: e ?? void 0, session: this.session, dialect: this.dialect })
			}
			selectDistinct(e) {
				return new nT({ fields: e ?? void 0, session: this.session, dialect: this.dialect, distinct: !0 })
			}
			selectDistinctOn(e, t) {
				return new nT({
					fields: t ?? void 0,
					session: this.session,
					dialect: this.dialect,
					distinct: { on: e },
				})
			}
			update(e) {
				return new nG(e, this.session, this.dialect)
			}
			insert(e) {
				return new nK(e, this.session, this.dialect)
			}
			delete(e) {
				return new nJ(e, this.session, this.dialect)
			}
			refreshMaterializedView(e) {
				return new n1(e, this.session, this.dialect)
			}
			authToken
			execute(e) {
				let t = "string" == typeof e ? G.raw(e) : e.getSQL(),
					i = this.dialect.sqlToQuery(t),
					r = this.session.prepareQuery(i, void 0, void 0, !1)
				return new n0(
					() => r.execute(void 0, this.authToken),
					t,
					i,
					(e) => r.mapResult(e, !0),
				)
			}
			transaction(e, t) {
				return this.session.transaction(e, t)
			}
		}
		class n3 {
			static [r] = "Cache"
		}
		class n4 extends n3 {
			strategy() {
				return "all"
			}
			static [r] = "NoopCache"
			async get(e) {}
			async put(e, t, i, r) {}
			async onMutate(e) {}
		}
		async function n8(e, t) {
			let i = `${e}-${JSON.stringify(t)}`,
				r = new TextEncoder().encode(i)
			return [...new Uint8Array(await crypto.subtle.digest("SHA-256", r))]
				.map((e) => e.toString(16).padStart(2, "0"))
				.join("")
		}
		class n6 extends Error {
			constructor(e, t, i) {
				super(`Failed query: ${e}
params: ${t}`),
					(this.query = e),
					(this.params = t),
					(this.cause = i),
					Error.captureStackTrace(this, n6),
					i && (this.cause = i)
			}
		}
		class n5 {
			constructor(e, t, i, r) {
				;(this.query = e),
					(this.cache = t),
					(this.queryMetadata = i),
					(this.cacheConfig = r),
					t &&
						"all" === t.strategy() &&
						void 0 === r &&
						(this.cacheConfig = { enable: !0, autoInvalidate: !0 }),
					this.cacheConfig?.enable || (this.cacheConfig = void 0)
			}
			authToken
			getQuery() {
				return this.query
			}
			mapResult(e, t) {
				return e
			}
			setToken(e) {
				return (this.authToken = e), this
			}
			static [r] = "PgPreparedQuery"
			joinsNotNullableMap
			async queryWithCache(e, t, i) {
				if (
					void 0 === this.cache ||
					n(this.cache, n4) ||
					void 0 === this.queryMetadata ||
					(this.cacheConfig && !this.cacheConfig.enable)
				)
					try {
						return await i()
					} catch (i) {
						throw new n6(e, t, i)
					}
				if (
					("insert" === this.queryMetadata.type ||
						"update" === this.queryMetadata.type ||
						"delete" === this.queryMetadata.type) &&
					this.queryMetadata.tables.length > 0
				)
					try {
						let [e] = await Promise.all([i(), this.cache.onMutate({ tables: this.queryMetadata.tables })])
						return e
					} catch (i) {
						throw new n6(e, t, i)
					}
				if (!this.cacheConfig)
					try {
						return await i()
					} catch (i) {
						throw new n6(e, t, i)
					}
				if ("select" === this.queryMetadata.type) {
					let r = await this.cache.get(
						this.cacheConfig.tag ?? (await n8(e, t)),
						this.queryMetadata.tables,
						void 0 !== this.cacheConfig.tag,
						this.cacheConfig.autoInvalidate,
					)
					if (void 0 === r) {
						let r
						try {
							r = await i()
						} catch (i) {
							throw new n6(e, t, i)
						}
						return (
							await this.cache.put(
								this.cacheConfig.tag ?? (await n8(e, t)),
								r,
								this.cacheConfig.autoInvalidate ? this.queryMetadata.tables : [],
								void 0 !== this.cacheConfig.tag,
								this.cacheConfig.config,
							),
							r
						)
					}
					return r
				}
				try {
					return await i()
				} catch (i) {
					throw new n6(e, t, i)
				}
			}
		}
		class n7 {
			constructor(e) {
				this.dialect = e
			}
			static [r] = "PgSession"
			execute(e, t) {
				return L("drizzle.operation", () =>
					L("drizzle.prepareQuery", () => this.prepareQuery(this.dialect.sqlToQuery(e), void 0, void 0, !1))
						.setToken(t)
						.execute(void 0, t),
				)
			}
			all(e) {
				return this.prepareQuery(this.dialect.sqlToQuery(e), void 0, void 0, !1).all()
			}
			async count(e, t) {
				return Number((await this.execute(e, t))[0].count)
			}
		}
		class n9 extends n2 {
			constructor(e, t, i, r = 0) {
				super(e, t, i), (this.schema = i), (this.nestedIndex = r)
			}
			static [r] = "PgTransaction"
			rollback() {
				throw new nv()
			}
			getTransactionConfigSQL(e) {
				let t = []
				return (
					e.isolationLevel && t.push(`isolation level ${e.isolationLevel}`),
					e.accessMode && t.push(e.accessMode),
					"boolean" == typeof e.deferrable && t.push(e.deferrable ? "deferrable" : "not deferrable"),
					G.raw(t.join(" "))
				)
			}
			setTransaction(e) {
				return this.session.execute(G`set transaction ${this.getTransactionConfigSQL(e)}`)
			}
		}
		class se extends n5 {
			constructor(e, t, i, r, n, s, a, o, l, c) {
				super({ sql: t, params: i }, n, s, a),
					(this.client = e),
					(this.queryString = t),
					(this.params = i),
					(this.logger = r),
					(this.fields = o),
					(this._isResponseInArrayMode = l),
					(this.customResultMapper = c)
			}
			static [r] = "PostgresJsPreparedQuery"
			async execute(e = {}) {
				return L("drizzle.execute", async (t) => {
					let i = ee(this.params, e)
					t?.setAttributes({
						"drizzle.query.text": this.queryString,
						"drizzle.query.params": JSON.stringify(i),
					}),
						this.logger.logQuery(this.queryString, i)
					let { fields: r, queryString: a, client: o, joinsNotNullableMap: l, customResultMapper: c } = this
					if (!r && !c)
						return L("drizzle.driver.execute", () =>
							this.queryWithCache(a, i, async () => await o.unsafe(a, i)),
						)
					let u = await L(
						"drizzle.driver.execute",
						() => (
							t?.setAttributes({ "drizzle.query.text": a, "drizzle.query.params": JSON.stringify(i) }),
							this.queryWithCache(a, i, async () => await o.unsafe(a, i).values())
						),
					)
					return L("drizzle.mapResponse", () =>
						c
							? c(u)
							: u.map((e) =>
									(function (e, t, i) {
										let r = {},
											a = e.reduce((e, { path: a, field: o }, l) => {
												let c
												c = n(o, p) ? o : n(o, V) ? o.decoder : o.sql.decoder
												let u = e
												for (let [e, h] of a.entries())
													if (e < a.length - 1) h in u || (u[h] = {}), (u = u[h])
													else {
														let e = t[l],
															f = (u[h] = null === e ? null : c.mapFromDriverValue(e))
														if (i && n(o, p) && 2 === a.length) {
															let e = a[0]
															e in r
																? "string" == typeof r[e] &&
																	r[e] !== o.table[s] &&
																	(r[e] = !1)
																: (r[e] = null === f && o.table[s])
														}
													}
												return e
											}, {})
										if (i && Object.keys(r).length > 0)
											for (let [e, t] of Object.entries(r))
												"string" != typeof t || i[t] || (a[e] = null)
										return a
									})(r, e, l),
								),
					)
				})
			}
			all(e = {}) {
				return L("drizzle.execute", async (t) => {
					let i = ee(this.params, e)
					return (
						t?.setAttributes({
							"drizzle.query.text": this.queryString,
							"drizzle.query.params": JSON.stringify(i),
						}),
						this.logger.logQuery(this.queryString, i),
						L(
							"drizzle.driver.execute",
							() => (
								t?.setAttributes({
									"drizzle.query.text": this.queryString,
									"drizzle.query.params": JSON.stringify(i),
								}),
								this.queryWithCache(this.queryString, i, async () =>
									this.client.unsafe(this.queryString, i),
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
		class st extends n7 {
			constructor(e, t, i, r = {}) {
				super(t),
					(this.client = e),
					(this.schema = i),
					(this.options = r),
					(this.logger = r.logger ?? new nt()),
					(this.cache = r.cache ?? new n4())
			}
			static [r] = "PostgresJsSession"
			logger
			cache
			prepareQuery(e, t, i, r, n, s, a) {
				return new se(this.client, e.sql, e.params, this.logger, this.cache, s, a, t, r, n)
			}
			query(e, t) {
				return this.logger.logQuery(e, t), this.client.unsafe(e, t).values()
			}
			queryObjects(e, t) {
				return this.client.unsafe(e, t)
			}
			transaction(e, t) {
				return this.client.begin(async (i) => {
					let r = new st(i, this.dialect, this.schema, this.options),
						n = new si(this.dialect, r, this.schema)
					return t && (await n.setTransaction(t)), e(n)
				})
			}
		}
		class si extends n9 {
			constructor(e, t, i, r = 0) {
				super(e, t, i, r), (this.session = t)
			}
			static [r] = "PostgresJsTransaction"
			transaction(e) {
				return this.session.client.savepoint((t) => {
					let i = new st(t, this.dialect, this.schema, this.session.options)
					return e(new si(this.dialect, i, this.schema))
				})
			}
		}
		class sr extends n2 {
			static [r] = "PostgresJsDatabase"
		}
		function sn(e, t = {}) {
			let i,
				r,
				s = (e) => e
			for (let t of ["1184", "1082", "1083", "1114", "1182", "1185", "1115", "1231"])
				(e.options.parsers[t] = s), (e.options.serializers[t] = s)
			;(e.options.serializers["114"] = s), (e.options.serializers["3802"] = s)
			let a = new nN({ casing: t.casing })
			if ((!0 === t.logger ? (i = new ne()) : !1 !== t.logger && (i = t.logger), t.schema)) {
				let e = (function (e, t) {
					1 === Object.keys(e).length && "default" in e && !n(e.default, m) && (e = e.default)
					let i = {},
						r = {},
						s = {}
					for (let [a, o] of Object.entries(e))
						if (n(o, m)) {
							let e = g(o),
								t = r[e]
							for (let r of ((i[e] = a),
							(s[a] = {
								tsName: a,
								dbName: o[m.Symbol.Name],
								schema: o[m.Symbol.Schema],
								columns: o[m.Symbol.Columns],
								relations: t?.relations ?? {},
								primaryKey: t?.primaryKey ?? [],
							}),
							Object.values(o[m.Symbol.Columns])))
								r.primary && s[a].primaryKey.push(r)
							let l = o[m.Symbol.ExtraConfigBuilder]?.(o[m.Symbol.ExtraConfigColumns])
							if (l) for (let e of Object.values(l)) n(e, io) && s[a].primaryKey.push(...e.columns)
						} else if (n(o, ik)) {
							let e,
								n = g(o.table),
								a = i[n]
							for (let [i, l] of Object.entries(o.config(t(o.table))))
								if (a) {
									let t = s[a]
									;(t.relations[i] = l), e && t.primaryKey.push(...e)
								} else n in r || (r[n] = { relations: {}, primaryKey: e }), (r[n].relations[i] = l)
						}
					return { tables: s, tableNamesMap: i }
				})(t.schema, iL)
				r = { fullSchema: t.schema, schema: e.tables, tableNamesMap: e.tableNamesMap }
			}
			let o = new st(e, a, r, { logger: i, cache: t.cache }),
				l = new sr(a, o, r)
			return (l.$client = e), (l.$cache = t.cache), l.$cache && (l.$cache.invalidate = t.cache?.onMutate), l
		}
		function ss(...e) {
			if ("string" == typeof e[0]) return sn(r8(e[0]), e[1])
			if (
				(function (e) {
					if ("object" != typeof e || null === e || "Object" !== e.constructor.name) return !1
					if ("logger" in e) {
						let t = typeof e.logger
						return (
							"boolean" === t ||
							("object" === t && "function" == typeof e.logger.logQuery) ||
							"undefined" === t
						)
					}
					if ("schema" in e) {
						let t = typeof e.schema
						return "object" === t || "undefined" === t
					}
					if ("casing" in e) {
						let t = typeof e.casing
						return "string" === t || "undefined" === t
					}
					if ("mode" in e) return "default" === e.mode && "planetscale" === e.mode && void 0 === e.mode
					if ("connection" in e) {
						let t = typeof e.connection
						return "string" === t || "object" === t || "undefined" === t
					}
					if ("client" in e) {
						let t = typeof e.client
						return "object" === t || "function" === t || "undefined" === t
					}
					return 0 === Object.keys(e).length
				})(e[0])
			) {
				let { connection: t, client: i, ...r } = e[0]
				if (i) return sn(i, r)
				if ("object" == typeof t && void 0 !== t.url) {
					let { url: e, ...i } = t
					return sn(r8(e, i), r)
				}
				return sn(r8(t), r)
			}
			return sn(e[0], e[1])
		}
		;(ss || (ss = {})).mock = function (e) {
			return sn({ options: { parsers: {}, serializers: {} } }, e)
		}
		var sa = e.i(77434)
		let so = ss({ client: r8(process.env.DATABASE_URL, { prepare: !1 }), schema: sa }),
			sl = async (e) => {
				let t = await so.query.tasks.findFirst({ where: iu(iM.id, e) })
				if (!t) throw new iW()
				return t
			},
			sc = async (e) =>
				so.query.tasks.findMany({ where: iu(iM.runId, e), with: { taskMetrics: !0 }, orderBy: iO(iM.id) })
		e.s(["findTask", 0, sl, "getTasks", 0, sc], 2226)
		let su = async (e) => {
			let t = await so.query.runs.findFirst({ where: iu(iK.runs.id, e) })
			if (!t) throw new iW()
			return t
		}
		e.s(["findRun", 0, su], 35865)
		var sh = e.i(14747)
		e.i(24868)
		var sf = e.i(92509)
		let sd = sh.dirname(
			(0, sf.fileURLToPath)(
				{
					get url() {
						return `file://${e.P("packages/evals/src/exercises/index.ts")}`
					},
				}.url,
			),
		)
		sh.resolve(sd, "..", "..", "..", "..", "..", "evals"), e.s([], 97884)
	},
]

//# sourceMappingURL=packages_evals_src_index_ts_708174d0._.js.map
