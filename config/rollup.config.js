import vue from 'unplugin-vue/rollup';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import html from 'rollup-plugin-html2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import sitemap from 'rollup-plugin-sitemap';
import { siteMapRoutes } from '../src/sitemapRoutes';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const compiler = require('@vue/compiler-sfc');

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    // Replace env vars
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': JSON.stringify('browser'),
      preventAssignment: true,
    }),
    // Resolve external modules
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      browser: true,
    }),
    // Handle Vue 3 SFCs
    vue({
      compiler,
      template: {
        transformAssetUrls: false,
      },
    }),
    // Handle SVGs
    {
      name: 'svg-loader',
      transform(code, id) {
        if (!id.endsWith('.svg')) return null;
        const { code: renderCode } = compiler.compileTemplate({
          id,
          source: code,
          filename: id,
          transformAssetUrls: false,
        });
        return `${renderCode}; export default { render: render }`;
      }
    },
    // Convert CommonJS modules to ES6
    commonjs({
      include: [/node_modules/, /\.yarn/],
      extensions: ['.js', '.cjs'],
    }),
    // Handle SCSS/CSS
    postcss(),
    // Transpile to ES5
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
    // Generate HTML
    html({
      template: 'src/index.html',
      fileName: 'index.html',
    }),
    // Copy static assets
    copy({
      targets: [
        { src: 'src/assets/images/*', dest: 'dist/assets/images' },
        { src: 'src/assets/images/projects/**/*', dest: 'dist/assets/images/projects' },
        { src: 'src/assets/images/azores/**/*', dest: 'dist/assets/images/azores' },
        { src: 'src/assets/fonts/**/*', dest: 'dist/assets/fonts' },
        { src: 'src/assets/CV.pdf', dest: 'dist/assets' },
        { src: 'src/assets/favicon/**/*.png', dest: 'dist/assets/favicon' },
        { src: 'src/assets/favicon/favicon.ico', dest: 'dist' },
        { src: 'src/assets/favicon/manifest.webmanifest', dest: 'dist' },
        { src: 'src/assets/robots.txt', dest: 'dist' },
        { src: '_redirects', dest: 'dist' },
      ]
    }),
    // Dev server configuration
    process.env.ROLLUP_WATCH && serve({
      contentBase: 'dist',
      historyApiFallback: '/index.html',
    }),
    process.env.ROLLUP_WATCH && livereload('dist'),
    sitemap({
      baseUrl: 'https://joaosomoreira.com',
      contentBase: 'dist',
      routes: siteMapRoutes,
    }),
  ]
}
