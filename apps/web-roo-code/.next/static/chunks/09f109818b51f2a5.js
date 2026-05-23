;(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	71647,
	(e) => {
		"use strict"
		var s = e.i(8026),
			r = e.i(66904)
		function t({ children: e, className: t }) {
			return (0, s.jsx)(r.motion.span, {
				className: t,
				initial: { opacity: 0, y: 20 },
				animate: { opacity: 1, y: 0 },
				transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
				children: e,
			})
		}
		e.s(["AnimatedText", () => t])
	},
	70534,
	(e) => {
		"use strict"
		var s = e.i(53378),
			r = e.i(8026),
			t = e.i(10008),
			n = e.i(32356)
		e.i(8068)
		var o = e.i(38387),
			a = e.i(65221)
		let i = n.z.object({
			name: n.z.string().min(1, "Name is required"),
			company: n.z.string().min(1, "Company is required"),
			email: n.z.string().email("Invalid email address"),
			website: n.z.string().url("Invalid website URL").or(n.z.string().length(0)),
			engineerCount: n.z.enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]),
			formType: n.z.enum(["early-access", "demo"]),
			_honeypot: n.z.string().optional(),
		})
		function l({ formType: e, buttonText: l, buttonClassName: c }) {
			let [d, m] = (0, t.useState)(!1),
				[u, p] = (0, t.useState)(!1),
				[x, h] = (0, t.useState)({}),
				[g, b] = (0, t.useState)("idle"),
				y = (0, t.useRef)(null),
				j = s.default.env.NEXT_PUBLIC_BASIN_ENDPOINT || ""
			j || console.warn("NEXT_PUBLIC_BASIN_ENDPOINT is not configured. Form submissions will not work.")
			let f = async (s) => {
				s.preventDefault(), p(!0), h({}), b("idle")
				let r = s.currentTarget,
					t = new FormData(r),
					o = {
						name: t.get("name"),
						company: t.get("company"),
						email: t.get("email"),
						website: t.get("website"),
						engineerCount: t.get("engineerCount"),
						formType: e,
						_honeypot: t.get("_honeypot"),
					}
				try {
					i.parse(o)
					try {
						let e = await fetch(j, {
							method: "POST",
							headers: { "Content-Type": "application/json", Accept: "application/json" },
							mode: "cors",
							body: JSON.stringify(o),
						})
						if (e.ok)
							try {
								let s = await e.json()
								s && (!0 === s.success || "success" === s.status)
									? (b("success"), r && r.reset())
									: (console.error("Basin error:", s), b("error"))
							} catch (e) {
								console.error("Error parsing JSON response:", e), b("success"), r && r.reset()
							}
						else {
							try {
								let s = await e.json()
								console.error("Basin API error:", e.status, s)
							} catch {
								console.error("Basin returned error status:", e.status)
							}
							b("error")
						}
					} catch (e) {
						console.error("Error submitting form:", e), b("error")
					}
				} catch (e) {
					if (e instanceof n.z.ZodError) {
						let s = {}
						e.errors.forEach((e) => {
							e.path[0] && (s[e.path[0]] = e.message)
						}),
							h(s)
					} else b("error")
				} finally {
					p(!1)
				}
			}
			return (0, r.jsxs)(a.Dialog, {
				open: d,
				onOpenChange: m,
				children: [
					(0, r.jsx)(a.DialogTrigger, {
						asChild: !0,
						children: (0, r.jsx)(o.Button, { className: c || "", children: l }),
					}),
					(0, r.jsxs)(a.DialogContent, {
						className: "sm:max-w-[425px]",
						children: [
							(0, r.jsxs)(a.DialogHeader, {
								children: [
									(0, r.jsx)(a.DialogTitle, {
										children:
											"early-access" === e ? "Become an Early Access Partner" : "Request a Demo",
									}),
									(0, r.jsx)(a.DialogDescription, {
										children:
											"early-access" === e
												? "Fill out the form below to collaborate in shaping Roo Code's enterprise solution."
												: "Fill out the form below to see Roo Code's enterprise capabilities in action.",
									}),
								],
							}),
							"success" === g
								? (0, r.jsxs)("div", {
										className: "flex flex-col items-center justify-center py-6",
										children: [
											(0, r.jsx)("div", {
												className:
													"mb-4 rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/20 dark:text-green-400",
												children: (0, r.jsx)("svg", {
													xmlns: "http://www.w3.org/2000/svg",
													className: "h-6 w-6",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													children: (0, r.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														strokeWidth: 2,
														d: "M5 13l4 4L19 7",
													}),
												}),
											}),
											(0, r.jsx)("h3", {
												className: "mb-2 text-xl font-bold",
												children: "Thank You!",
											}),
											(0, r.jsx)("p", {
												className: "text-center text-muted-foreground",
												children:
													"Your information has been submitted successfully. Our team will be in touch with you shortly.",
											}),
											(0, r.jsx)(o.Button, {
												className: "mt-4",
												onClick: () => m(!1),
												children: "Close",
											}),
										],
									})
								: (0, r.jsxs)("form", {
										ref: y,
										onSubmit: f,
										className: "space-y-4",
										"data-basin-form": !0,
										children: [
											(0, r.jsx)("input", {
												type: "text",
												name: "_honeypot",
												className: "hidden",
												style: { display: "none" },
											}),
											(0, r.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, r.jsxs)("label", {
														htmlFor: "name",
														className: "text-sm font-medium",
														children: [
															"Name ",
															(0, r.jsx)("span", {
																className: "text-red-500",
																children: "*",
															}),
														],
													}),
													(0, r.jsx)("input", {
														id: "name",
														name: "name",
														type: "text",
														className: `w-full rounded-md border ${x.name ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														placeholder: "Your name",
													}),
													x.name &&
														(0, r.jsx)("p", {
															className: "text-xs text-red-500",
															children: x.name,
														}),
												],
											}),
											(0, r.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, r.jsxs)("label", {
														htmlFor: "company",
														className: "text-sm font-medium",
														children: [
															"Company ",
															(0, r.jsx)("span", {
																className: "text-red-500",
																children: "*",
															}),
														],
													}),
													(0, r.jsx)("input", {
														id: "company",
														name: "company",
														type: "text",
														className: `w-full rounded-md border ${x.company ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														placeholder: "Your company",
													}),
													x.company &&
														(0, r.jsx)("p", {
															className: "text-xs text-red-500",
															children: x.company,
														}),
												],
											}),
											(0, r.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, r.jsxs)("label", {
														htmlFor: "email",
														className: "text-sm font-medium",
														children: [
															"Email ",
															(0, r.jsx)("span", {
																className: "text-red-500",
																children: "*",
															}),
														],
													}),
													(0, r.jsx)("input", {
														id: "email",
														name: "email",
														type: "email",
														className: `w-full rounded-md border ${x.email ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														placeholder: "your.email@example.com",
													}),
													x.email &&
														(0, r.jsx)("p", {
															className: "text-xs text-red-500",
															children: x.email,
														}),
												],
											}),
											(0, r.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, r.jsx)("label", {
														htmlFor: "website",
														className: "text-sm font-medium",
														children: "Website",
													}),
													(0, r.jsx)("input", {
														id: "website",
														name: "website",
														type: "url",
														className: `w-full rounded-md border ${x.website ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														placeholder: "https://example.com",
													}),
													x.website &&
														(0, r.jsx)("p", {
															className: "text-xs text-red-500",
															children: x.website,
														}),
												],
											}),
											(0, r.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, r.jsxs)("label", {
														htmlFor: "engineerCount",
														className: "text-sm font-medium",
														children: [
															"Number of Software Engineers ",
															(0, r.jsx)("span", {
																className: "text-red-500",
																children: "*",
															}),
														],
													}),
													(0, r.jsxs)("select", {
														id: "engineerCount",
														name: "engineerCount",
														className: `w-full rounded-md border ${x.engineerCount ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														defaultValue: "1-10",
														children: [
															(0, r.jsx)("option", { value: "1-10", children: "1-10" }),
															(0, r.jsx)("option", { value: "11-50", children: "11-50" }),
															(0, r.jsx)("option", {
																value: "51-200",
																children: "51-200",
															}),
															(0, r.jsx)("option", {
																value: "201-500",
																children: "201-500",
															}),
															(0, r.jsx)("option", {
																value: "501-1000",
																children: "501-1000",
															}),
															(0, r.jsx)("option", { value: "1000+", children: "1000+" }),
														],
													}),
													x.engineerCount &&
														(0, r.jsx)("p", {
															className: "text-xs text-red-500",
															children: x.engineerCount,
														}),
												],
											}),
											"error" === g &&
												(0, r.jsx)("div", {
													className:
														"rounded-md bg-red-50 p-3 text-sm text-red-500 dark:bg-red-900/20",
													children:
														"There was an error submitting your request. Please try again later.",
												}),
											(0, r.jsxs)(a.DialogFooter, {
												children: [
													(0, r.jsx)(o.Button, {
														type: "button",
														variant: "outline",
														onClick: () => m(!1),
														children: "Cancel",
													}),
													(0, r.jsx)(o.Button, {
														type: "submit",
														disabled: u,
														children: u ? "Submitting..." : "Submit",
													}),
												],
											}),
										],
									}),
						],
					}),
				],
			})
		}
		e.s(["ContactForm", () => l])
	},
])
