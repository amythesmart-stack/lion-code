module.exports = [
	72936,
	(a) => {
		"use strict"
		var b = a.i(67191)
		function c() {
			return (0, b.useEffect)(() => {}, []), null
		}
		function d({ post: a }) {
			return (0, b.useEffect)(() => {}, [a]), null
		}
		a.i(79242), a.s(["BlogIndexAnalytics", () => c, "BlogPostAnalytics", () => d], 72936)
	},
	7085,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(46395),
			d = a.i(69317)
		function e({ curatedCount: a, totalCount: e }) {
			let f = (0, d.useSearchParams)().get("view") || "featured"
			return (0, b.jsx)("div", {
				className: "mt-6 flex items-center gap-4",
				children: (0, b.jsxs)("div", {
					className: "flex rounded-lg border border-border bg-muted/50 p-1",
					children: [
						(0, b.jsxs)(c.default, {
							href: "/blog",
							className: `rounded-md px-4 py-2 text-sm font-medium transition-colors ${"featured" === f ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: [
								"Featured",
								(0, b.jsxs)("span", {
									className: "ml-1.5 text-xs text-muted-foreground",
									children: ["(", a, ")"],
								}),
							],
						}),
						(0, b.jsxs)(c.default, {
							href: "/blog?view=all",
							className: `rounded-md px-4 py-2 text-sm font-medium transition-colors ${"all" === f ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: [
								"All Posts",
								(0, b.jsxs)("span", {
									className: "ml-1.5 text-xs text-muted-foreground",
									children: ["(", e, ")"],
								}),
							],
						}),
					],
				}),
			})
		}
		function f(a) {
			return "all" === a.get("view") ? "all" : "featured"
		}
		a.s(["BlogViewToggle", () => e, "getBlogView", () => f])
	},
]

//# sourceMappingURL=apps_web-roo-code_src_components_blog_720d776f._.js.map
