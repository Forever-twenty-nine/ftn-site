9/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		// Define and Use Design Token Component
		extend: {
			backgroundImage: {
				token_bg_gradient: "linear-gradient(yellow,green), linear-gradient(90deg, green,var(--brand_blue_800)), linear-gradient(-180deg, green,var(--brand_blue_500)), linear-gradient(-240deg, darkblue, var(--brand_violet_500));",
				token_text_gradient: "linear-gradient(to top left, #2ce9ec, #aaf74d)" 
			},
			colors: {

				token_border_strong: "var(--brand_green_500)",
				token_border_strong_opacity: "rgba(170,247,77,.6)",
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
				// sharp_grotesk_semibold:  ['SharpGrotesk-SemiBold', 'sans-serif'],
				// sharp_grotesk_semibold25: ['SharpGrotesk-SemiBold25', 'sans-serif'],
				sharp_grotesk_book25: ['SharpGrotesk-Book25', 'sans-serif'],
				sharp_grotesk_medium25: ['SharpGrotesk-Medium25', 'sans-serif']
			}
		},
		
	},
	plugins: [],
}
