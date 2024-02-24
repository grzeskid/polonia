/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "my-img": "url('/tlo.jpg')",
        "poznan": "url('/poznan.png')",
        "ministerstwo": "url('/ministerstwo.png')",
        "swarzedz": "url('/swarzedz.png')",
        "wss": "url('/wss.webp')"
      },
      boxShadow: {
        "glass": "0 4px 30px rgba(0, 0, 0, 0.1)"
      }
    },
  },
  plugins: [require("daisyui")],
}
