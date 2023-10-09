import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      srcDir: "./src",
      strategies: "injectManifest",
      filename: "prompt-sw.ts",
      mode: "development",
      scope: "/",
      base: "/",
      manifest: {
        short_name: "KnightLife PWA",
        name: "KnightLife PWA",
        start_url: "/",
        scope: "/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "/favicon.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "/svelte_icon_large.png",
            sizes: "600x600",
            type: "image/png"
          }
        ]
      },
      injectManifest: {
        globPatterns: ["client/**/*.{js,css,ico,png,svg,webp,woff,woff2}"]
      },
      workbox: {
        globPatterns: ["client/**/*.{js,css,ico,png,svg,webp,woff,woff2}"]
      },
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "/"
      },
      kit: {}
    })
  ]
});
