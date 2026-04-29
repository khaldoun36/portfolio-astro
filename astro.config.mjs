import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  integrations: [icon()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Injects this line into every <style lang="scss"> block
          additionalData: `@use "/src/styles/_utilities.scss" as *;`,
        },
      },
    },
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
