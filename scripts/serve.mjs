import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('dist/portfolio/browser');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.pdf':'application/pdf','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.json':'application/json','.woff2':'font/woff2'};
const server = createServer(async (req,res) => {
 try {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let file = resolve(root, '.' + pathname);
  if (file !== root && !file.startsWith(root + sep)) {res.writeHead(403).end();return;}
  try { if ((await stat(file)).isDirectory()) file = resolve(file,'index.html'); }
  catch { if (extname(file)) {res.writeHead(404).end();return;} file=resolve(root,'index.html'); }
  const body=await readFile(file);
  res.writeHead(200,{'Content-Type':types[extname(file)] || 'application/octet-stream','Cache-Control':'no-store'});
  res.end(req.method === 'HEAD' ? undefined : body);
 } catch {res.writeHead(500).end('Não foi possível carregar o arquivo.');}
});
server.on('error', error => {console.error(error.message);process.exitCode=1;});
server.listen(4200,'127.0.0.1',()=>console.log('Portfólio: http://localhost:4200\nApós editar, reinicie npm start para recompilar.'));
