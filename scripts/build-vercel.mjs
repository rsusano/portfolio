#!/usr/bin/env node
/**
 * Vercel Build Script for TanStack Start
 *
 * Converts TanStack Start's build output (dist/) into Vercel Build Output API v3 format:
 * .vercel/output/
 *   config.json            - routing rules
 *   static/                - static files (CSS, JS, favicon)
 *   functions/
 *     ssr.func/
 *       .vc-config.json    - Vercel function config
 *       index.js           - WinterCG ↔ Node.js adapter
 *       server.js          - TanStack Start SSR server bundle
 *       assets/            - server-side code chunks
 */

import { execSync } from "child_process";
import { cpSync, mkdirSync, writeFileSync, rmSync } from "fs";
import { resolve, join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..");

console.log("🔨 Building TanStack Start for Vercel...\n");

// 1. Run Vite build
execSync("npx vite build", { stdio: "inherit", cwd: root });

console.log("\n📦 Creating Vercel Build Output API v3 structure...\n");

// 2. Clean previous .vercel/output and create fresh structure
const vercelOut = join(root, ".vercel/output");
rmSync(vercelOut, { recursive: true, force: true });
mkdirSync(join(vercelOut, "static"), { recursive: true });
mkdirSync(join(vercelOut, "functions/ssr.func"), { recursive: true });

// 3. Copy static client assets → .vercel/output/static/
cpSync(join(root, "dist/client"), join(vercelOut, "static"), {
  recursive: true,
});
console.log("✓ Static files copied  →  .vercel/output/static/");

// 4. Copy server bundle → .vercel/output/functions/ssr.func/
cpSync(join(root, "dist/server"), join(vercelOut, "functions/ssr.func"), {
  recursive: true,
});
console.log(
  "✓ Server bundle copied →  .vercel/output/functions/ssr.func/"
);

// 5. Write WinterCG → Node.js adapter as the function entry point
writeFileSync(
  join(vercelOut, "functions/ssr.func/index.js"),
  `// TanStack Start SSR adapter for Vercel Serverless Functions
// Converts Vercel's Node.js IncomingMessage format to WinterCG Request/Response
import server from './server.js';

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || 'localhost';
    const url = new URL(req.url || '/', \`\${protocol}://\${host}\`);

    // Build WinterCG Headers from Node.js IncomingMessage headers
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (typeof value === 'string') {
        headers.set(key, value);
      } else if (Array.isArray(value)) {
        value.forEach((v) => headers.append(key, v));
      }
    }

    // Read request body for non-GET/HEAD requests
    let body;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }
      if (chunks.length > 0) body = Buffer.concat(chunks);
    }

    // Create WinterCG Request
    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      ...(body ? { body } : {}),
    });

    // Call TanStack Start SSR server
    const response = await server.fetch(request, {}, {});

    // Write WinterCG Response back to Node.js ServerResponse
    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    console.error('[SSR Error]', error);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end('<h1>500 Internal Server Error</h1>');
  }
}
`
);
console.log("✓ Function adapter created");

// 6. Write Vercel function configuration
writeFileSync(
  join(vercelOut, "functions/ssr.func/.vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.js",
      launcherType: "Nodejs",
      shouldAddHelpers: true,
    },
    null,
    2
  )
);
console.log("✓ Function config written");

// 7. Write Vercel output routing config
//    - First: try to serve from static filesystem (CSS, JS, favicon)
//    - Fallback: route everything else to the SSR function
writeFileSync(
  join(vercelOut, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/ssr" },
      ],
    },
    null,
    2
  )
);
console.log("✓ Routing config written");

console.log("\n✅ Vercel build complete!");
console.log("   Output: .vercel/output/\n");
