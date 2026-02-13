import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { tamaguiPlugin } from '@tamagui/vite-plugin'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: path.resolve(__dirname, '../../packages/config/tamagui.config.ts'),
      components: ['tamagui'],
      outputCSS: false,
    }),
  ],
  resolve: {
    alias: {
      '@travel/config': path.resolve(__dirname, '../../packages/config'),
      '@travel/ui': path.resolve(__dirname, '../../packages/ui'),
    },
  },
})
