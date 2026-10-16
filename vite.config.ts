import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type ProxyOptions } from 'vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

function rawgProxy(apiKey: string): ProxyOptions {
  return {
    target: 'https://api.rawg.io/api',
    changeOrigin: true,
    rewrite: (p) => {
      const url = new URL(p, 'http://localhost')
      const pathname = url.pathname.replace(/^\/api\/rawg/, '') || '/'
      url.searchParams.set('key', apiKey)
      return `${pathname}${url.search}`
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const proxy = {
    '/api/rawg': rawgProxy(env.VITE_RAWG_API_KEY ?? ''),
  }

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, './src'),
      },
    },
    server: { proxy },
    preview: { proxy },
  }
})


