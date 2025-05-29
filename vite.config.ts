/**
 * @file vite配置文件
 * @Time 2024
 * @description https://vitejs.dev/config/
 */

import { defineConfig } from 'vite'
import path from 'path'
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/',
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public')
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    postcss: {
      plugins: [
        autoprefixer({}),
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ]
    }
  },
  build: {
    // 生产环境关闭 sourcemap
    sourcemap: false,
    // 可选：配置输出目录及其他构建选项
    outDir: 'dist',
    assetsDir: 'assets',
    // 可选：指定分块大小
    chunkSizeWarningLimit: 2000,
    // 可选：配置最小化，移除空格等
    minify: 'terser',
  },
})
