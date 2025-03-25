import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Professional dark theme colors
        elegant: {
          slate: "#1e293b",
          charcoal: "#334155",
          navy: "#0f172a",
          indigo: "#3730a3",
          teal: "#0d9488",
          emerald: "#047857",
          amber: "#b45309",
          rose: "#9f1239",
          gray: "#475569",
          highlight: "#94a3b8",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "gentle-pulse": {
          "0%, 100%": { opacity: "0.9" },
          "50%": { opacity: "1" },
        },
        "subtle-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out",
        "fade-out": "fade-out 0.7s ease-out",
        "slide-up": "slide-up 0.7s ease-out",
        "slide-down": "slide-down 0.7s ease-out",
        "gentle-pulse": "gentle-pulse 4s ease-in-out infinite",
        "subtle-rotate": "subtle-rotate 20s linear infinite",
        "subtle-float": "subtle-float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom, #0f172a, #1e293b)",
        "gradient-subtle": "linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))",
        "gradient-accent": "linear-gradient(135deg, rgba(55, 48, 163, 0.2) 0%, rgba(13, 148, 136, 0.2) 100%)",
        "gradient-card": "linear-gradient(to bottom, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

