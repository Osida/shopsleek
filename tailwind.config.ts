import type { Config } from 'tailwindcss';
import { UrbanBazaar } from './styles';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--c-primary) / <alpha-value>)',
        secondary: 'rgb(var(--c-secondary) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        fc: 'rgb(var(--c-fc) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Roboto Condensed', 'sans-serif'],
        paragraph: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
