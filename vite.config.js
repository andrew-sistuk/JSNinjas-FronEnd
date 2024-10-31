import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ include: '**/*.svg?react' }), react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      components: '/src/components',
      layouts: '/src/layouts',
      myRedux: '/src/myRedux',
      helpers: '/src/helpers',
      assets: '/src/assets',
    },
  },
});
