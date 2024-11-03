/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			colors: {
				brand_primary:{
					50: "var(--brand_primary_50)",
					100: "var(--brand_primary_100)",
					200: "var(--brand_primary_200)",
					300: "var(--brand_primary_300)",
					400: "var(--brand_primary_400)",
					500: "var(--brand_primary_500)",
					600: "var(--brand_primary_600)",
					700: "var(--brand_primary_700)",
					800: "var(--brand_primary_800)",
					900: "var(--brand_primary_900)",
					950: "var(--brand_primary_950)",
				},
				brand_secondary:{
					50: "var(--brand_secondary_50)",
					100: "var(--brand_secondary_100)",
					200: "var(--brand_secondary_200)",
					300: "var(--brand_secondary_300)",
					400: "var(--brand_secondary_400)",
					500: "var(--brand_secondary_500)",
					600: "var(--brand_secondary_600)",
					700: "var(--brand_secondary_700)",
					800: "var(--brand_secondary_800)",
					900: "var(--brand_secondary_900)",
					950: "var(--brand_secondary_950)",
				},
				brand_tertiary:{
					50: "var(--brand_tertiary_50)",
					100: "var(--brand_tertiary_100)",
					200: "var(--brand_tertiary_200)",
					300: "var(--brand_tertiary_300)",
					400: "var(--brand_tertiary_400)",
					500: "var(--brand_tertiary_500)",
					600: "var(--brand_tertiary_600)",
					700: "var(--brand_tertiary_700)",
					800: "var(--brand_tertiary_800)",
					900: "var(--brand_tertiary_900)",
					950: "var(--brand_tertiary_950)",
				},
				brand_neutral:{
					50: "var(--brand_neutral_50)",
					100: "var(--brand_neutral_100)",
					200: "var(--brand_neutral_200)",
					300: "var(--brand_neutral_300)",
					400: "var(--brand_neutral_400)",
					500: "var(--brand_neutral_500)",
					600: "var(--brand_neutral_600)",
					700: "var(--brand_neutral_700)",
					800: "var(--brand_neutral_800)",
					900: "var(--brand_neutral_900)",
					950: "var(--brand_neutral_950)",
				},

				// Define and Use Design Token Component
				token_text: "var(--text)",
				token_bg: "var(--background)",
				token_btn_cta_text: "var(--btn_primary_text)",
				token_btn_cta_text_hover: "var(--btn_primary_text_hover)",
				token_btn_cta_bg: "var(--btn_primary_bg)",
				token_btn_cta_bg_hover: "var(--btn_primary_bg_hover)",
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
