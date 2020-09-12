import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'es',
      file: IS_PRODUCTION
        ? 'dist/confetti-element.min.js'
        : 'dist/confetti-element.js',
    },
    plugins: [
      nodeResolve(),
      IS_PRODUCTION ? terser() : null,
      postcss({
        plugins: [],
      }),
    ],
  },
];
