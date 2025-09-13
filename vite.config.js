import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api/geeta': {
				target: 'https://sanskrit.ie',
				changeOrigin: true,
				secure: true,
				rewrite: (path) => path.replace(/^\/api\/geeta/, '/api/geeta.php')
			}
		}
	}
});