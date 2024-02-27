import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import UnoCSS from 'unocss/vite';
export default defineConfig({
    define: {
        'process.env': process.env,
    },
    plugins: [
        solidPlugin(),
        UnoCSS({
            mode: 'shadow-dom',
        }),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
