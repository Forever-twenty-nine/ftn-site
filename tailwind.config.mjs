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
				brand_tertiary:{
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
				}
			},
			fontFamily:{
				sharp_grotesk_book:  ['SharpGrotesk-Book', 'sans-serif'],
				sharp_grotesk_light:  ['SharpGrotesk-Light', 'sans-serif'],
				sharp_grotesk_semibold:  ['SharpGrotesk-SemiBold', 'sans-serif'],
			}
		},
		
	},
	plugins: [],
}
