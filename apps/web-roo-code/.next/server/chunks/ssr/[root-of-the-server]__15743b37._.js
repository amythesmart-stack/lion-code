module.exports = [
	93695,
	(a, b, c) => {
		b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
			require("next/dist/shared/lib/no-fallback-error.external.js"),
		)
	},
	4776,
	(a) => {
		a.n(a.i(80606))
	},
	99376,
	(a) => {
		a.n(a.i(44673))
	},
	96860,
	(a) => {
		a.n(a.i(92386))
	},
	28656,
	(a) => {
		a.n(a.i(79868))
	},
	93563,
	(a) => {
		a.n(a.i(16472))
	},
	82088,
	(a) => {
		"use strict"
		a.s(["AgentLandingContent", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call AgentLandingContent() from the server but AgentLandingContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/app/shared/AgentLandingContent.tsx <module evaluation>",
			"AgentLandingContent",
		)
	},
	27127,
	(a) => {
		"use strict"
		a.s(["AgentLandingContent", () => b])
		let b = (0, a.i(57689).registerClientReference)(
			function () {
				throw Error(
					"Attempted to call AgentLandingContent() from the server but AgentLandingContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
				)
			},
			"[project]/apps/web-roo-code/src/app/shared/AgentLandingContent.tsx",
			"AgentLandingContent",
		)
	},
	83019,
	(a) => {
		"use strict"
		a.i(82088)
		var b = a.i(27127)
		a.n(b)
	},
	43438,
	(a) => {
		"use strict"
		function b(a, b) {
			let c = a.v?.toUpperCase()
			if (c && b[c]) return b[c]
			if (!b.A) throw Error("Content variants must include variant 'A' as the default")
			return b.A
		}
		a.s(["getContentVariant", () => b])
	},
	13394,
	(a) => {
		a.v("/_next/static/media/agent-pr-fixer.1cf2192f.png")
	},
	76889,
	(a) => {
		"use strict"
		var b = a.i(1020),
			c = a.i(8258),
			d = a.i(34508),
			e = a.i(83019),
			f = a.i(43438),
			g = a.i(83733)
		let h = {
				agentName: "PR Fixer",
				hero: {
					icon: "Wrench",
					heading: "State-of-the-art fixes for the comments on your PRs.",
					paragraphs: [
						"Roo Code's PR Fixer applies high-quality changes to your PRs, right from GitHub. Invoke via a PR comment and it will read the entire comment history to understand context, agreements, and tradeoffs — then implement the right fix.",
						"As always, you bring the model key; we orchestrate smart, efficient workflows.",
					],
					image: {
						url: {
							src: a.i(13394).default,
							width: 1600,
							height: 1422,
							blurWidth: 8,
							blurHeight: 7,
							blurDataURL:
								"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAr0lEQVR42iWNSw6EIBBEORaH5hDu5+9Eo8GFC6NRUVTQhEGoUazk9aK7q4pEUURv8YPeP096f79onH5pkic0K3Ka8owS6yxLupRxUbCiLVkpK1aphjVbxzrTM+K8N6OURoyjkdNk5mUJ6FWbU2Tfd2i9QikN5xy8xwUuEc45pnnBvCio49H8LOxhsrsLEGst+l6grhu0bYdhGI80hW3bQiI5h5QSvRDhcBrO3VXn8Qf1kctGmYZgFgAAAABJRU5ErkJggg==",
						}.src,
						width: 800,
						height: 711,
						alt: "Example of a PR Fixer applying changes from review comments",
					},
					crossAgentLink: {
						text: "Works great with",
						links: [{ text: "PR Reviewer Agent", href: "/reviewer", icon: "GitPullRequest" }],
					},
					cta: { buttonText: "Try now for free", disclaimer: "", tracking: "&agent=pr-fixer" },
				},
				howItWorks: {
					heading: "How It Works",
					steps: [
						{
							title: "1. Connect your GitHub repositories",
							description: "Pick which repos the PR Fixer can work on by pushing to ongoing branches.",
							icon: "GitPullRequest",
						},
						{
							title: "2. Invoke from a comment",
							description:
								'Ask the agent to fix issues directly from GitHub PR comments (e.g. "@roomote: fix these review comments"). It\'s fully aware of the entire comment history and latest diffs and focuses on fixing them – not random changes to your code.',
							icon: "MessageSquareCode",
						},
						{
							title: "3. Get clean scoped commits",
							description: (0, b.jsxs)(b.Fragment, {
								children: [
									"The agent proposes targeted changes and pushes concise commits or patch suggestions you (or",
									" ",
									(0, b.jsx)(g.default, { href: "/reviewer", children: "PR Reviewer" }),
									") can review and merge quickly.",
								],
							}),
							icon: "Wrench",
						},
					],
				},
				whyBetter: {
					heading: "Why Roo Code's PR Fixer is different",
					features: [
						{
							title: "Comment-history aware",
							description:
								"Understands the entire conversation on the PR – previous reviews, your replies, follow-ups – and uses that context to produce accurate fixes.",
							icon: "History",
						},
						{
							title: "Bring your own key",
							description:
								"Use your preferred models at full strength. We optimize prompts and execution without capping your model to protect our margins.",
							icon: "Key",
						},
						{
							title: "Repository- and diff-aware",
							description:
								"Analyzes the full repo context and the latest diff to ensure fixes align with project conventions and pass checks.",
							icon: "GitPullRequest",
						},
					],
				},
				cta: {
					heading: "Ship fixes, not follow-ups.",
					description:
						"Let Roo Code's PR Fixer turn your review feedback into clean, ready-to-merge commits.",
					buttonText: "Try now for free",
				},
			},
			i = "PR Fixer",
			j =
				"Automatically apply high-quality fixes to your pull requests with comment-aware, GitHub-native workflows.",
			k = "Transform review feedback into clean commits",
			l = "/pr-fixer",
			m = {
				title: i,
				description: j,
				alternates: { canonical: `${c.SEO.url}${l}` },
				openGraph: {
					title: i,
					description: j,
					url: `${c.SEO.url}${l}`,
					siteName: c.SEO.name,
					images: [{ url: (0, d.ogImageUrl)(i, k), width: 1200, height: 630, alt: i }],
					locale: c.SEO.locale,
					type: "website",
				},
				twitter: { card: c.SEO.twitterCard, title: i, description: j, images: [(0, d.ogImageUrl)(i, k)] },
				keywords: [
					...c.SEO.keywords,
					"PR fixer",
					"pull request fixes",
					"code fixes",
					"GitHub PR",
					"automated code fixes",
					"comment-aware agent",
					"repository-aware fixes",
					"bring your own key",
					"BYOK AI",
					"code quality",
					"cloud agents",
					"AI development team",
				],
			}
		async function n({ searchParams: a }) {
			let c = await a,
				d = (0, f.getContentVariant)(c, { A: h })
			return (0, b.jsx)(e.AgentLandingContent, { content: d })
		}
		a.s(["default", () => n, "metadata", 0, m], 76889)
	},
]

//# sourceMappingURL=%5Broot-of-the-server%5D__15743b37._.js.map
