module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			base: ["sans-serif"],
			alt: ["Rufina, serif"],
		},
		extend: {
			spacing: {
				"1/2": "50%",
				"1/3": "calc(100% / 3 * 1 )",
				"2/3": "calc(100% / 3 * 2 )",
				"1/4": "25%",
				"1/6": "16%",
			},
			aspectRatio: {
				"4/3": "4/3",
			},
		},
	},
	plugins: [],
};
