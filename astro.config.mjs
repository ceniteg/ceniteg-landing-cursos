// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  base: "/capacitaciones",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [partytown()]
});