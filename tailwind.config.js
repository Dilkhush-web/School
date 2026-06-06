/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          dark: '#0f172a',    // Rich dark slate
          primary: '#1e3a8a', // Royal Blue (Trust & Knowledge)
          secondary: '#b45309', // Deep Amber/Gold (Success & Premium)
          accent: '#0ea5e9',    // Bright sky blue for links/actions
          light: '#f8fafc'    // Super clean white-gray background
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}