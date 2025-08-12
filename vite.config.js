import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173, // Pastikan port sesuai dengan yang Anda gunakan
    strictPort: true,
    hmr: {
      clientPort: 443 // Jika Anda menggunakan HTTPS seperti ngrok
    },
    cors: {
      origin: '*', // Izinkan semua origin sementara untuk debugging
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: true
    },
    proxy: {
      // Tambahkan proxy jika diperlukan
      '/api': {
        target: 'http://localhost:8000', // Sesuaikan dengan API backend Anda jika ada
        changeOrigin: true
      }
    },
    // Tambahkan konfigurasi allowedHosts
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'a2cc-36-73-100-128.ngrok-free.app',
      '.ngrok-free.app', // Mengizinkan semua subdomain ngrok-free.app
      'all' // Mengizinkan semua host (gunakan hanya untuk pengembangan)
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    cors: true
  }
})