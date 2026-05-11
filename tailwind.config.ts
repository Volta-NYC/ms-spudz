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
          gold: "#a7da79",
          red: "#a7da79",
          cream: "#ffffff",
          muted: "#53664d",
          volta: "#85cc17",
        },
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(167, 218, 121, 0.34)",
      },
    },
  },
  plugins: [],
}
export default config
