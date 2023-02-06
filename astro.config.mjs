import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ericfernandezsnyk.github.io/',
  base: '/ericfernandezwebsite',
  integrations: [mdx(), sitemap(), tailwind()]
});