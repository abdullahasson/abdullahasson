import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}', // Include your React components
		'./node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}', // Include shadcn/ui if used
	],
	theme: {
		extend: {
			colors: {
				c1: '#050505',
				c2: '#0ef',
				c3: '#b1b1b1',
				c4: '#242424',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backdropBlur: {
				xs: '2px',
			},
			lineClamp: {
				1: '1',
				3: '3',
			},
			perspective: {
				'1000': '1000px',
			},
		}
	},
	plugins: [
		plugin(function ({ addBase, addComponents, addUtilities }) {
			addBase({});
			addComponents({
				'*': {
					'@apply box-border no-underline scroll-smooth m-0 p-0 border-[none] outline-none': {},
				},
				html: {
					'@apply text-[62.5%]': {},
				},
				body: {
					'@apply bg-[#050505] text-[var(--text-color)]': {},
				},
				section: {
					'@apply min-h-[100vh] pt-[10rem] px-64 pb-[5rem] max-[560px]:px-10 max-[767px]:px-10': {},
				},
				hr: {
					'@apply w-[60%] ml-auto mr-auto my-0 bg-[#242424] border-none h-[2px]': {},
				},
				'.txt': {
					'@apply text-c3 text-center pt-11 text-5xl font-normal leading-[1.2]': {},
				},
				'.btn': {
					'@apply inline-block text-[1.6rem] text-[color:var(--second-bg-color)] tracking-[0.1rem] font-semibold px-[2.8rem] py-4 rounded-[4rem] hover:shadow-none bg-[var(--main-color)]': {},
				},
				span: {
					'@apply text-[var(--main-color)]': {},
				},
			});
			addUtilities({
				'.tap-highlight-color': {
					'-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
				},
			});
		}),
		require("tailwindcss-animate")
	],
};

export default config;