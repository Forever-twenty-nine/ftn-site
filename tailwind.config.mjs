/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			colors: {

				// Define and Use Design Token Component
				token_text: "var(--color_text)",
				token_text_btn_cta: "var(--color_text_btn_primary)",
				token_text_btn_cta_hover: "var(--color_text_btn_primary_hover)",
				token_bg: "var(--color_bg)",
				token_bg_btn_cta: "var(--color_bg_btn_primary)",
				token_bg_btn_cta_hover: "var(--color_bg_btn_primary_hover)",
			},
			fontFamily:{
				sharp_grotesk_book:  ['SharpGrotesk-Book', 'sans-serif'],
				sharp_grotesk_light:  ['SharpGrotesk-Light', 'sans-serif'],
				sharp_grotesk_semibold:  ['SharpGrotesk-SemiBold', 'sans-serif'],
				sharp_grotesk_semibold25: ['SharpGrotesk-SemiBold25', 'sans-serif']
			}
		},
		
	},
	plugins: [],
}
