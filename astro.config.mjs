// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://NicolasR98.github.io',
  base: '/mecanica-rios',
  vite: {
    plugins: [tailwindcss()]
  }
});