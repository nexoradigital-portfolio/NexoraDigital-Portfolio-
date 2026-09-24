import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, type Plugin } from 'vite';
import contactHandler from './api/contact.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function apiMiddlewarePlugin(): Plugin {
  return {
    name: 'api-contact-middleware',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req: any, res: any) => {
        let rawBody = '';
        req.on('data', (chunk: any) => {
          rawBody += chunk;
        });
        req.on('end', async () => {
          try {
            req.body = rawBody ? JSON.parse(rawBody) : {};
          } catch {
            req.body = {};
          }

          if (!res.status) {
            res.status = function (code: number) {
              res.statusCode = code;
              return res;
            };
          }
          if (!res.json) {
            res.json = function (data: any) {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
              return res;
            };
          }

          try {
            await contactHandler(req, res);
          } catch (err: any) {
            console.error('API Error in dev server:', err);
            if (!res.headersSent) {
              res.status(500).json({ success: false, error: 'Internal server error' });
            }
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiMiddlewarePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
