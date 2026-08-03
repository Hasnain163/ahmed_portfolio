/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        'bg-primary': '#0b0c10',
        'bg-secondary': '#13141a',
        'bg-card': '#161b22',
        'bg-card-hover': '#1c2333',
        'border-subtle': '#21262d',
        'border-accent': '#30363d',
        // Text
        'text-primary': '#e6edf3',
        'text-secondary': '#8b949e',
        'text-muted': '#6e7681',
        // Accent - electric sky blue
        'accent': '#38bdf8',
        'accent-dim': '#0ea5e9',
        'accent-dark': '#0c4a6e',
        'accent-glow': 'rgba(56, 189, 248, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 5vw, 3.75rem)',
        'display': 'clamp(1.875rem, 3vw, 2.5rem)',
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'section': '120px',
        'section-sm': '80px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
        'dot-blink': 'blink 1.4s infinite both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 80%, 100%': { opacity: '0' },
          '40%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #21262d 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '20px 20px',
        'grid-sm': '40px 40px',
      },
      boxShadow: {
        'accent-glow': '0 0 30px rgba(56, 189, 248, 0.15)',
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.6)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
