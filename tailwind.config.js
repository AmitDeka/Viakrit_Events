const { primary } = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['var(--font-space-grotesk)'],
        sans: ['var(--font-inter)'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0e0e0f",
        foreground: "#f2f2f2",
        
        surface: "#0e0e0f",
        surface_container_lowest: "#090909",
        surface_container_low: "#141415",
        surface_container: "#1a191b",
        surface_container_high: "#222123",
        surface_container_highest: "#2c2b2d",
        surface_bright: "#2c2c2d",
        
        on_surface: "#ffffff",
        on_surface_variant: "#adaaab",
        outline_variant: "rgba(173, 170, 171, 0.2)", // Ghost border
        
        primary: {
          DEFAULT: "#97a9ff",
          dim: "#3e65ff",
          foreground: "#ffffff",
          fixed_dim: "#bcc2ff",
        },
        secondary: {
          DEFAULT: "#3e4256",
          container: "#222538",
          foreground: "#ffffff",
        },
        tertiary: {
          DEFAULT: "#ffa3e9",
          dim: "#ab7f9b",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#1a191b",
          foreground: "#adaaab",
        },
        accent: {
          DEFAULT: "#1a191b",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#1a191b",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#1a191b",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#1a191b",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #97a9ff 0%, #3e65ff 100%)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
