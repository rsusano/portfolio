// Vercel Serverless Function — TanStack Start SSR Adapter
//
// Vercel's @vercel/nft tracer automatically follows the import below,
// traces every package in dist/server/server.js (react, @tanstack/*, h3, etc.)
// and bundles them into the function — so node_modules are available at runtime.
import server from "../dist/server/server.js";

export const config = { maxDuration: 30 };

export default async function handler(req, res) {
  try {
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `${protocol}://${host}`);

    // Build a WinterCG-compatible Headers object from the Node.js request
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (typeof value === "string") {
        headers.set(key, value);
      } else if (Array.isArray(value)) {
        value.forEach((v) => headers.append(key, v));
      }
    }

    // Collect request body for non-GET/HEAD requests
    let body;
    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }
      if (chunks.length > 0) body = Buffer.concat(chunks);
    }

    // Create a WinterCG Request
    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      ...(body ? { body } : {}),
    });

    // Hand off to TanStack Start SSR server
    const response = await server.fetch(request, {}, {});

    // Write WinterCG Response back to Node.js ServerResponse
    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    console.error("[SSR Error]", error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error: " + String(error));
  }
}
