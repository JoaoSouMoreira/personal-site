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

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'bundle',
    sourcemap: true,
  },
  plugins: [
    ServePlugin({
      contentBase: 'dist',
      historyApiFallback: '/index.html',
    }),
    LiveReloadPlugin('dist'),
    VuePlugin({
      needMap: false,
    }),
    HtmlPlugin({
      template: 'src/index.html',
      fileName: 'index.html',
    }),
    BabelPlugin(),
    eslint(),
    ResolvePlugin(),
    CopyPlugin({
      targets: [
        { src: 'src/assets/images/**/*', dest: 'dist/assets/images' },
        { src: 'src/assets/fonts/**/*', dest: 'dist/assets/fonts' },
        { src: 'src/assets/CV.pdf', dest: 'dist/assets' },
        { src: 'src/assets/favicon/**/*.png', dest: 'dist/assets/favicon' },
        { src: 'src/assets/favicon/favicon.ico', dest: 'dist' },
        { src: 'src/assets/favicon/manifest.webmanifest', dest: 'dist' },
      ]
    }),
    ReplacePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    SVGPlugin(),
  ]
}
