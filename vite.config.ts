import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import { createHtmlPlugin } from 'vite-plugin-html'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    publicDir: 'assets',
    plugins: [
      react(),
      tsconfigPaths(),
      macrosPlugin(),
      // createHtmlPlugin({
      //   minify: true,
      //   inject: { data: { domain: env.VITE_APP_DOMAIN } }
      // }),
    ],
  }
})
