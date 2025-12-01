import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/guests-bbs'
    },
    prerender: {
      handleHttpError: 'warn'
    }
  }
};
