import ServePlugin from 'rollup-plugin-serve';
import LiveReloadPlugin from 'rollup-plugin-livereload';
import BabelPlugin from '@rollup/plugin-babel';
import VuePlugin from 'rollup-plugin-vue';
import HtmlPlugin from 'rollup-plugin-html2';
import { eslint } from "rollup-plugin-eslint";
import ResolvePlugin from '@rollup/plugin-node-resolve';
import CopyPlugin from 'rollup-plugin-copy';
import ReplacePlugin from '@rollup/plugin-replace';
import SVGPlugin from 'rollup-plugin-vue-inline-svg';
import SitemapPlugin from 'rollup-plugin-sitemap';
import routes from '../src/routes';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'bundle',
    sourcemap: true,
  },
  plugins: [
    process.env.ROLLUP_WATCH ? ServePlugin({
      contentBase: 'dist',
      historyApiFallback: '/index.html',
    }) : null,
    process.env.ROLLUP_WATCH ? LiveReloadPlugin('dist') : null,
    VuePlugin({
      needMap: false,
    }),
    HtmlPlugin({
      template: 'src/index.html',
      fileName: 'index.html',
    }),
    BabelPlugin({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    eslint(),
    ResolvePlugin(),
    CopyPlugin({
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
    ReplacePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    SVGPlugin(),
    SitemapPlugin({
      baseUrl: 'https://joaosomoreira.com',
      contentBase: 'dist',
      routes,
    }),
  ]
}
