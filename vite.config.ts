import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://element-plus.gitee.io/zh-CN/guide/quickstart.html#按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 打包.d.ts文件
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [
            Vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            }),
            dts({
                copyDtsFiles: true,
                staticImport: true,
                insertTypesEntry: true
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src') // 配置路径别名
            }
        },
        server: {
            // 构建完成自动打开浏览器
            host: '0.0.0.0',
            open: '/',
            hmr: true,
            // 配置代理
            proxy: {
                '/api': {
                    target: loadEnv(mode, process.cwd()).VITE_PROXY_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/index.ts'),
                name: 'crud-el',
                fileName: (format) => `crud-el-${format}.js`,
                formats: ['es', 'umd', 'cjs'],
                minify: true
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        }
    }
})
