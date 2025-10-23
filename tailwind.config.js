module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 88%)",
        input: "hsl(0, 0%, 88%)",
        ring: "hsl(0, 72%, 52%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(0, 0%, 10%)",
        primary: {
          DEFAULT: "hsl(0, 72%, 52%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(0, 72%, 40%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(208, 100%, 52%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 95%)",
          foreground: "hsl(0, 0%, 38%)",
        },
        accent: {
          DEFAULT: "hsl(0, 0%, 95%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        success: "hsl(145, 52%, 45%)",
        warning: "hsl(38, 95%, 54%)",
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 95%)",
          200: "hsl(0, 0%, 88%)",
          300: "hsl(0, 0%, 76%)",
          400: "hsl(0, 0%, 64%)",
          500: "hsl(0, 0%, 51%)",
          600: "hsl(0, 0%, 38%)",
          700: "hsl(0, 0%, 26%)",
          800: "hsl(0, 0%, 15%)",
          900: "hsl(0, 0%, 7%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(0, 72%, 52%), hsl(0, 80%, 58%))',
        'gradient-2': 'linear-gradient(135deg, hsl(0, 72%, 45%), hsl(0, 72%, 32%))',
        'button-border-gradient': 'linear-gradient(90deg, hsla(0, 72%, 52%, 1), hsla(0, 72%, 42%, 0.7))',
      },
    },
  },
  plugins: [],
}
