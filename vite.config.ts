import { defineConfig } from 'vite'
import type { CommonServerOptions } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const serverConfig: CommonServerOptions = {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
}

export default defineConfig({
    server: serverConfig,
    preview: serverConfig,
    build: {
        outDir: 'build',
    },
    plugins: [svelte()],
})
