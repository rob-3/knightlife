import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { generateSW } from "./pwa.mjs";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    serviceWorker: {
      register: false
    },
    files: {
      serviceWorker: generateSW ? undefined : "src/prompt-prompt-sw.ts"
    }
  }
};

export default config;
