;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	5819,
	(e) => {
		"use strict"
		var t = e.i(10008),
			l = e.i(60185)
		function r() {
			return (
				(0, t.useEffect)(() => {
					l.default.__loaded && l.default.capture("blog_index_view")
				}, []),
				null
			)
		}
		function s({ post: e }) {
			return (
				(0, t.useEffect)(() => {
					l.default.__loaded &&
						l.default.capture("blog_post_view", {
							slug: e.slug,
							title: e.title,
							publish_date: e.publish_date,
							publish_time_pt: e.publish_time_pt,
							tags: e.tags,
						})
				}, [e]),
				null
			)
		}
		e.s(["BlogIndexAnalytics", () => r, "BlogPostAnalytics", () => s], 5819)
	},
	43251,
	(e) => {
		"use strict"
		var t = e.i(8026),
			l = e.i(21862),
			r = e.i(86192)
		function s({ curatedCount: e, totalCount: s }) {
			let o = (0, r.useSearchParams)().get("view") || "featured"
			return (0, t.jsx)("div", {
				className: "mt-6 flex items-center gap-4",
				children: (0, t.jsxs)("div", {
					className: "flex rounded-lg border border-border bg-muted/50 p-1",
					children: [
						(0, t.jsxs)(l.default, {
							href: "/blog",
							className: `rounded-md px-4 py-2 text-sm font-medium transition-colors ${"featured" === o ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: [
								"Featured",
								(0, t.jsxs)("span", {
									className: "ml-1.5 text-xs text-muted-foreground",
									children: ["(", e, ")"],
								}),
							],
						}),
						(0, t.jsxs)(l.default, {
							href: "/blog?view=all",
							className: `rounded-md px-4 py-2 text-sm font-medium transition-colors ${"all" === o ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: [
								"All Posts",
								(0, t.jsxs)("span", {
									className: "ml-1.5 text-xs text-muted-foreground",
									children: ["(", s, ")"],
								}),
							],
						}),
					],
				}),
			})
		}
		function o(e) {
			return "all" === e.get("view") ? "all" : "featured"
		}
		e.s(["BlogViewToggle", () => s, "getBlogView", () => o])
	},
])
