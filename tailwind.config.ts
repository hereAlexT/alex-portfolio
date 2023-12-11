/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed'],
      },
      width: {
        '11/24': '45.833333%',
        '17/36': '47.222222%',
      }

    },
  },
  plugins: [
    function ({ addBase }: { addBase: (styles: Record<string, any>) => void }) {
      addBase({
        'body': { fontWeight: '200' },
      })
    },
  ],
}
