import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/proyecto4/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                result: resolve(__dirname, 'result.html'),
                payment: resolve(__dirname, 'paymentSettings.html'),
                map: resolve(__dirname, 'maps.html'),
            },
        },
    },
})