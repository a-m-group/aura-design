import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import UnoCSS from 'unocss/vite';

export default defineConfig({
    plugins: [
        solidPlugin(),
        tsconfigPaths(),
        typescript(),
        nodeResolve(),
        commonjs(),
        UnoCSS({
            mode: 'shadow-dom',
        }),
    ],
    build: {
        lib: {
            entry: 'src/components/index.ts',
            name: 'aura-design',
            fileName: (format) => `aura-design.${format}.js`,
        },
    },
});
