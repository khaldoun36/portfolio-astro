import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Mona Sans",
      cssVariable: "--font-mona",
      options: {
        variants: [
          {
            weight: "300 900",
            style: "normal",
            src: ["./src/assets/fonts/MonaSansVF[wght,opsz,ital].woff2"],
          },
          {
            weight: "300 900",
            style: "italic",
            src: ["./src/assets/fonts/MonaSansVF[wght,opsz,ital].woff2"],
          },
        ],
      },
    },
  ],
});
