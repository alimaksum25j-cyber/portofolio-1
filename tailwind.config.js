/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030308',
          900: '#050510', // main background
          850: '#0a0a1a',
          800: '#0e0e24',
          700: '#171738',
          600: '#22224c',
        },
        cyber: {
          cyan: '#00f0ff',
          neon: '#0df5e3',
          purple: '#a855f7',
          violet: '#8b5cf6',
          blue: '#3b82f6',
          pink: '#f43f5e',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.45)',
        'glow-cyan-lg': '0 0 50px -10px rgba(0, 240, 255, 0.55)',
        'glow-purple': '0 0 25px -5px rgba(168, 85, 247, 0.45)',
        'glow-purple-lg': '0 0 50px -10px rgba(168, 85, 247, 0.55)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(168,85,247,0.7))' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
