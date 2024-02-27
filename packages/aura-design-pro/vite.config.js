import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
    plugins: [
        solidPlugin(),
        tsconfigPaths(),
        typescript(),
        nodeResolve(),
        commonjs({
            requireReturnsDefault: true,
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: 'src/components/index.ts',
            name: 'aura-design-pro',
            fileName: (format) => `aura-design-pro.${format}.js`,
        },
    },
});
