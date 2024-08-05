import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...colors,
      primary: colors.blue, // Update this if you need specific shades
      secondary: colors.blue, // Update this if you need specific shades
      lightBlue: colors.sky, // Updated color name
      warmGray: colors.stone, // Updated color name
      trueGray: colors.neutral, // Updated color name
      coolGray: colors.gray, // Updated color name
      blueGray: colors.slate, // Updated color name
    },
  },
  plugins: [],
};

export default config;
