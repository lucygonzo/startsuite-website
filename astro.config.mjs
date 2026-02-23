import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [yaml()]
  }
});
