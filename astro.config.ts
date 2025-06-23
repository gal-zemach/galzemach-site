import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import netlify from '@astrojs/netlify';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  // @ts-ignore — Astro’s types aren’t updated for this yet
  experimental: {
    session: true,
  },
  site: 'https://galzemach-dev.netlify.app',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Gal Zemach',
      openGraph: {
        home: {
          title: 'Gal Zemach',
          description: 'Software & Tools Engineer',
        },
        blog: {
          title: 'Blog',
          description: 'News, guides and thoughts'
        },
        projects: {
          title: 'Projects',
          description: 'Some of my personal projects'
        }
      },
      // giscus: {
      //   repository: 'louisescher/spectre',
      //   repositoryId: 'R_kgDONjm3ig',
      //   category: 'General',
      //   categoryId: 'DIC_kwDONjm3is4ClmBF',
      //   mapping: 'pathname',
      //   strict: true,
      //   reactionsEnabled: true,
      //   emitMetadata: false,
      //   lang: 'en',
      // }
    })
  ],
  adapter: netlify()
});