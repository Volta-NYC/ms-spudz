import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spudz: {
          black: "#080807",
          charcoal: "#11110f",
          ink: "#181714",
          gold: "#d4a017",
          red: "#ff4d2d",
          cream: "#fff8e7",
          muted: "#cfc7b8",
        },
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(212, 160, 23, 0.16)",
      },
    },
  },
  plugins: [],
}
export default config
