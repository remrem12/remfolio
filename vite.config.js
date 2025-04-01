import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-static';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/YOUR_REPO_NAME/', // IMPORTANT: Replace with your repo name
});
