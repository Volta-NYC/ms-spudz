import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spudz: {
          black: "#162411",
          charcoal: "#f5ffef",
          ink: "#25331f",
          gold: "#c1e5a1",
          red: "#c1e5a1",
          cream: "#ffffff",
          muted: "#53664d",
        },
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(193, 229, 161, 0.34)",
      },
    },
  },
  plugins: [],
}
export default config
