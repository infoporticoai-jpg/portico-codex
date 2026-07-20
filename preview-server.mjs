import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const types = { ".css": "text/css", ".js": "application/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".woff2": "font/woff2" };

createServer((request, response) => {
  const path = new URL(request.url ?? "/", "http://localhost").pathname;
  const file = path === "/" ? join(root, ".next/server/app/index.html") : path.startsWith("/_next/") ? join(root, ".next", normalize(path.replace("/_next/", ""))) : join(root, ".next", normalize(path));
  if (!existsSync(file)) { response.writeHead(404); response.end("Not found"); return; }
  response.writeHead(200, { "Content-Type": types[extname(file)] ?? "text/html; charset=utf-8" });
  createReadStream(file).pipe(response);
}).listen(4173, "127.0.0.1", () => console.log("Preview ready at http://127.0.0.1:4173"));
