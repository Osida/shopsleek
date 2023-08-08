import { Open_Sans, Roboto_Condensed } from 'next/font/google';

const open_sans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

const roboto_condensed = Roboto_Condensed({
  weight: ['700'],
  subsets: ['latin'],
});

export const UrbanBazaar = {
  lightColorPalette: {
    primary: 'rgb(42, 46, 53)', // Charcoal
    secondary: 'rgb(255, 99, 71)', // Coral
    accent: 'rgb(119, 221, 119)', // Pastel Green
    bg: 'rgb(245, 245, 245)', // Light Gray
    fc: 'rgb(51, 51, 51)', // Dark Gray
  },
  fonts: {
    roboto_condensed,
    open_sans,
  },
};
