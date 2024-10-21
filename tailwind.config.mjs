/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// darkMode: "class",
	theme: {
		extend: {
			colors: {
				ftnBrandMain:{
					100: "var(--brandMain100)",
					900: "var(--brandMain900)"
				},
			},
		},
		
	},
	plugins: [],
}
