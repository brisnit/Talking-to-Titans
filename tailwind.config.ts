import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Core palette — luxury editorial
        ink: {
          DEFAULT: "#0B0B0C", // near black
          soft: "#141416",
        },
        charcoal: {
          DEFAULT: "#1C1C1E",
          light: "#2A2A2D",
          muted: "#3A3A3E",
        },
        cream: {
          DEFAULT: "#F6F1E7", // warm cream
          deep: "#EDE6D6",
          soft: "#FBF8F1",
        },
        gold: {
          DEFAULT: "#B8995A", // muted gold
          light: "#CBB07A",
          deep: "#9A7E45",
        },
        stone: {
          DEFAULT: "#6B6B6E",
          light: "#8C8C8F",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial display scale
        "display-2xl": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      maxWidth: {
        prose: "68ch",
        "8xl": "88rem",
      },
      boxShadow: {
        editorial: "0 24px 60px -20px rgba(11, 11, 12, 0.35)",
        "editorial-sm": "0 12px 30px -12px rgba(11, 11, 12, 0.25)",
        lift: "0 40px 90px -30px rgba(11, 11, 12, 0.55)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
