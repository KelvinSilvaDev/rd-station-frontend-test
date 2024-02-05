import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(93.82deg, #6C5AE0 -1.6%, #806EFF 105.56%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'heading-lg': ['3.5rem', { lineHeight: '100%', fontWeight: '900' }],
        'heading-md': ['2.5rem', { lineHeight: '100%', fontWeight: '700' }],
        'heading-sm': ['1.5rem', { lineHeight: '110%', fontWeight: '900' }],
        'heading-xs': ['1.25rem', { lineHeight: '110%', fontWeight: '700' }],

        'subtitle-sm': ['1.125rem', { lineHeight: '110%', fontWeight: '400' }],
        'subtitle-xs': ['1rem', { lineHeight: '110%', fontWeight: '400'}],

        'body-lg': ['1.25rem', { lineHeight: '150%', fontWeight: '600'}],
        'body-md': ['1rem', { lineHeight: '110%', fontWeight: '600'}],
        'body-sm': ['0.875rem', { lineHeight: '110%', fontWeight: '400'}],
      },
      colors: {
        "color-primary-shade-1": "#100C27",
        "color-primary-shade-3": "#4839A3",
        "color-primary-shade-4": "#6C5AE0",
        "color-highlight": "#F2BF4E",
        "color-highlight-50": "#F4CA6D",
        "color-gray-100": "#212429",
        "color-gray-70": "#7E8A98",
        "color-gray-60": "#97A1AC",
        "color-gray-30": "#CFD3D8",
        "color-gray-10": "#F1F3F5",
        "color-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
