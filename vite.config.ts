import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig(
    ({mode}) => {
        return {
            // base: mode === 'production' ? 'http://localhost:3009/' : '/',
            base: 'http://localhost:3009/',
            plugins: [
                vue(),
                qiankun(
                    'vue3-vite',
                    {
                        useDevMode: true
                    }
                )
            ],
            server: {
                port: 3009,
            }
        }
    }
)
