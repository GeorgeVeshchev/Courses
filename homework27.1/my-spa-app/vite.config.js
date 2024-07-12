import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333 , 
    open: true ,
    proxy: {
      '/api' : {
        targer : 'http://localohost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,'')

      }
    }
  },
  define: {
    'process.env' : {}
  }
});
