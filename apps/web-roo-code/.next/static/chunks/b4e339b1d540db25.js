;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	5819,
	(t) => {
		"use strict"
		var e = t.i(10008),
			l = t.i(60185)
		function u() {
			return (
				(0, e.useEffect)(() => {
					l.default.__loaded && l.default.capture("blog_index_view")
				}, []),
				null
			)
		}
		function i({ post: t }) {
			return (
				(0, e.useEffect)(() => {
					l.default.__loaded &&
						l.default.capture("blog_post_view", {
							slug: t.slug,
							title: t.title,
							publish_date: t.publish_date,
							publish_time_pt: t.publish_time_pt,
							tags: t.tags,
						})
				}, [t]),
				null
			)
		}
		t.s(["BlogIndexAnalytics", () => u, "BlogPostAnalytics", () => i], 5819)
	},
])
