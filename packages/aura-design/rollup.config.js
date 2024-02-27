import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
export default {
    input: 'src/components/index.ts',
    output: [{ file: 'bundle/aura.esm.js', format: 'es' }],
    plugins: [
        babel({
            extensions,
            babelHelpers: 'bundled',
        }),
        resolve({ extensions }),
        commonjs(),
        typescript(),
        postcss({
            extensions: ['.css'],
        }),
    ],
};
