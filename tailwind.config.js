/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%, 100%': { textShadow: '0 0 4px rgba(255,255,255,0.1), 0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.1)' },
          '50%': { textShadow: '0 0 4px rgba(255,255,255,0.2), 0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1)' },
        },
        shimmerHorizontal: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'text-shimmer': 'shimmer 4s ease-in-out infinite',
        'gradient-x': 'shimmerHorizontal 3s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 100%',
      },
    },
  },
  plugins: [],
}