import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
    fontFamily: {
      jost: "Jost, sans-serif",
    },
    extend: {
      boxShadow: {
        resume_btn_shadow:
          "0 0 5px var(--accent-color), 0 0 25px var(--accent-color), 0 0 50px var(--accent-color), 0 0 200px var(--accent-color)",
      },
      colors: {
        accentColor: "var(--accent-color)",
        pageBg: "var(--theme-page-bg)",
        pageText: "var(--theme-page-text)",
        pageTextMuted: "var(--theme-page-text-muted)",
        panelBg: "var(--theme-panel-bg)",
        panelText: "var(--theme-panel-text)",
        panelTextMuted: "var(--theme-panel-text-muted)",
        panelAltBg: "var(--theme-panel-alt-bg)",
        panelAltText: "var(--theme-panel-alt-text)",
        panelAltTextMuted: "var(--theme-panel-alt-text-muted)",
        themeBorder: "var(--theme-border)",
        themeHeroFrom: "var(--theme-hero-from)",
        themeHeroTo: "var(--theme-hero-to)",
        themeAccentForeground: "var(--theme-accent-foreground)",

        // Navbar
        navbar_text_size: "var(--navbar-text-color)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        baseBackground: "var(--base-background)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "frame-contact-me-btn-icon": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "animate-frame-contact-me-btn-icon":
          "frame-contact-me-btn-icon .3s ease",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      addUtilities({
        ".bg-clip-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
        },
      })
    },
  ],
} satisfies Config

export default config
