module.exports = [
	59619,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(57429)
		function d({ children: a, className: d }) {
			return (0, b.jsx)(c.motion.span, {
				className: d,
				initial: { opacity: 0, y: 20 },
				animate: { opacity: 1, y: 0 },
				transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
				children: a,
			})
		}
		a.s(["AnimatedText", () => d])
	},
	94675,
	(a) => {
		"use strict"
		var b = a.i(9116),
			c = a.i(67191),
			d = a.i(80904)
		a.i(46951)
		var e = a.i(36894),
			f = a.i(49939)
		let g = d.z.object({
			name: d.z.string().min(1, "Name is required"),
			company: d.z.string().min(1, "Company is required"),
			email: d.z.string().email("Invalid email address"),
			website: d.z.string().url("Invalid website URL").or(d.z.string().length(0)),
			engineerCount: d.z.enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]),
			formType: d.z.enum(["early-access", "demo"]),
			_honeypot: d.z.string().optional(),
		})
		function h({ formType: a, buttonText: h, buttonClassName: i }) {
			let [j, k] = (0, c.useState)(!1),
				[l, m] = (0, c.useState)(!1),
				[n, o] = (0, c.useState)({}),
				[p, q] = (0, c.useState)("idle"),
				r = (0, c.useRef)(null),
				s = process.env.NEXT_PUBLIC_BASIN_ENDPOINT || ""
			s || console.warn("NEXT_PUBLIC_BASIN_ENDPOINT is not configured. Form submissions will not work.")
			let t = async (b) => {
				b.preventDefault(), m(!0), o({}), q("idle")
				let c = b.currentTarget,
					e = new FormData(c),
					f = {
						name: e.get("name"),
						company: e.get("company"),
						email: e.get("email"),
						website: e.get("website"),
						engineerCount: e.get("engineerCount"),
						formType: a,
						_honeypot: e.get("_honeypot"),
					}
				try {
					g.parse(f)
					try {
						let a = await fetch(s, {
							method: "POST",
							headers: { "Content-Type": "application/json", Accept: "application/json" },
							mode: "cors",
							body: JSON.stringify(f),
						})
						if (a.ok)
							try {
								let b = await a.json()
								b && (!0 === b.success || "success" === b.status)
									? (q("success"), c && c.reset())
									: (console.error("Basin error:", b), q("error"))
							} catch (a) {
								console.error("Error parsing JSON response:", a), q("success"), c && c.reset()
							}
						else {
							try {
								let b = await a.json()
								console.error("Basin API error:", a.status, b)
							} catch {
								console.error("Basin returned error status:", a.status)
							}
							q("error")
						}
					} catch (a) {
						console.error("Error submitting form:", a), q("error")
					}
				} catch (a) {
					if (a instanceof d.z.ZodError) {
						let b = {}
						a.errors.forEach((a) => {
							a.path[0] && (b[a.path[0]] = a.message)
						}),
							o(b)
					} else q("error")
				} finally {
					m(!1)
				}
			}
			return (0, b.jsxs)(f.Dialog, {
				open: j,
				onOpenChange: k,
				children: [
					(0, b.jsx)(f.DialogTrigger, {
						asChild: !0,
						children: (0, b.jsx)(e.Button, { className: i || "", children: h }),
					}),
					(0, b.jsxs)(f.DialogContent, {
						className: "sm:max-w-[425px]",
						children: [
							(0, b.jsxs)(f.DialogHeader, {
								children: [
									(0, b.jsx)(f.DialogTitle, {
										children:
											"early-access" === a ? "Become an Early Access Partner" : "Request a Demo",
									}),
									(0, b.jsx)(f.DialogDescription, {
										children:
											"early-access" === a
												? "Fill out the form below to collaborate in shaping Roo Code's enterprise solution."
												: "Fill out the form below to see Roo Code's enterprise capabilities in action.",
									}),
								],
							}),
							"success" === p
								? (0, b.jsxs)("div", {
										className: "flex flex-col items-center justify-center py-6",
										children: [
											(0, b.jsx)("div", {
												className:
													"mb-4 rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/20 dark:text-green-400",
												children: (0, b.jsx)("svg", {
													xmlns: "http://www.w3.org/2000/svg",
													className: "h-6 w-6",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													children: (0, b.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														strokeWidth: 2,
														d: "M5 13l4 4L19 7",
													}),
												}),
											}),
											(0, b.jsx)("h3", {
												className: "mb-2 text-xl font-bold",
												children: "Thank You!",
											}),
											(0, b.jsx)("p", {
												className: "text-center text-muted-foreground",
												children:
													"Your information has been submitted successfully. Our team will be in touch with you shortly.",
											}),
											(0, b.jsx)(e.Button, {
												className: "mt-4",
												onClick: () => k(!1),
												children: "Close",
											}),
										],
									})
								: (0, b.jsxs)("form", {
										ref: r,
										onSubmit: t,
										className: "space-y-4",
										"data-basin-form": !0,
										children: [
											(0, b.jsx)("input", {
												type: "text",
												name: "_honeypot",
												className: "hidden",
												style: { display: "none" },
											}),
											(0, b.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, b.jsxs)("label", {
														htmlFor: "name",
														className: "text-sm font-medium",
														children: [
															"Name ",
															(0, b.jsx)("span", {
																className: "text-red-500",
																children: "*",
															}),
														],
													}),
													(0, b.jsx)("input", {
														id: "name",
														name: "name",
														type: "text",
														className: `w-full rounded-md border ${n.name ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														placeholder: "Your name",
													}),
													n.name &&
														(0, b.jsx)("p", {
															className: "text-xs text-red-500",
															children: n.name,
														}),
												],
											}),
											(0, b.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, b.jsxs)("label", {
														htmlFor: "company",
														className: "text-sm font-medium",
														children: [
															"Company ",
															(0, b.jsx)("span", {
																className: "text-red-500",
																children: "*",
															}),
														],
													}),
													(0, b.jsx)("input", {
														id: "company",
														name: "company",
														type: "text",
														className: `w-full rounded-md border ${n.company ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														placeholder: "Your company",
													}),
													n.company &&
														(0, b.jsx)("p", {
															className: "text-xs text-red-500",
															children: n.company,
														}),
												],
											}),
											(0, b.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, b.jsxs)("label", {
														htmlFor: "email",
														className: "text-sm font-medium",
														children: [
															"Email ",
															(0, b.jsx)("span", {
																className: "text-red-500",
																children: "*",
															}),
														],
													}),
													(0, b.jsx)("input", {
														id: "email",
														name: "email",
														type: "email",
														className: `w-full rounded-md border ${n.email ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														placeholder: "your.email@example.com",
													}),
													n.email &&
														(0, b.jsx)("p", {
															className: "text-xs text-red-500",
															children: n.email,
														}),
												],
											}),
											(0, b.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, b.jsx)("label", {
														htmlFor: "website",
														className: "text-sm font-medium",
														children: "Website",
													}),
													(0, b.jsx)("input", {
														id: "website",
														name: "website",
														type: "url",
														className: `w-full rounded-md border ${n.website ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														placeholder: "https://example.com",
													}),
													n.website &&
														(0, b.jsx)("p", {
															className: "text-xs text-red-500",
															children: n.website,
														}),
												],
											}),
											(0, b.jsxs)("div", {
												className: "space-y-2",
												children: [
													(0, b.jsxs)("label", {
														htmlFor: "engineerCount",
														className: "text-sm font-medium",
														children: [
															"Number of Software Engineers ",
															(0, b.jsx)("span", {
																className: "text-red-500",
																children: "*",
															}),
														],
													}),
													(0, b.jsxs)("select", {
														id: "engineerCount",
														name: "engineerCount",
														className: `w-full rounded-md border ${n.engineerCount ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring`,
														defaultValue: "1-10",
														children: [
															(0, b.jsx)("option", { value: "1-10", children: "1-10" }),
															(0, b.jsx)("option", { value: "11-50", children: "11-50" }),
															(0, b.jsx)("option", {
																value: "51-200",
																children: "51-200",
															}),
															(0, b.jsx)("option", {
																value: "201-500",
																children: "201-500",
															}),
															(0, b.jsx)("option", {
																value: "501-1000",
																children: "501-1000",
															}),
															(0, b.jsx)("option", { value: "1000+", children: "1000+" }),
														],
													}),
													n.engineerCount &&
														(0, b.jsx)("p", {
															className: "text-xs text-red-500",
															children: n.engineerCount,
														}),
												],
											}),
											"error" === p &&
												(0, b.jsx)("div", {
													className:
														"rounded-md bg-red-50 p-3 text-sm text-red-500 dark:bg-red-900/20",
													children:
														"There was an error submitting your request. Please try again later.",
												}),
											(0, b.jsxs)(f.DialogFooter, {
												children: [
													(0, b.jsx)(e.Button, {
														type: "button",
														variant: "outline",
														onClick: () => k(!1),
														children: "Cancel",
													}),
													(0, b.jsx)(e.Button, {
														type: "submit",
														disabled: l,
														children: l ? "Submitting..." : "Submit",
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
		a.s(["ContactForm", () => h])
	},
]

//# sourceMappingURL=apps_web-roo-code_src_components_ded998b2._.js.map
