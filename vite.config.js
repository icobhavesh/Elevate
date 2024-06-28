import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['react-redux', 'react-router-dom', '@reduxjs/toolkit']
//     }
//   },
// });

// import { defineConfig } from 'vite'

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       external: ['react-redux']
//     }
//   }
// })
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import { defineConfig } from 'vite';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import nodeResolve from '@rollup/plugin-node-resolve';

// export default defineConfig({
//   plugins: [
//     reactRefresh(),
//     peerDepsExternal(),
//     nodeResolve(),
//   ],
//   build: {
//     rollupOptions: {
//       external: ['react-redux', 'react-router-dom', '@reduxjs/toolkit'],
//     },
//   },
// });
