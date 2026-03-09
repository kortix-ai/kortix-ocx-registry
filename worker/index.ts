export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Serve registry.json
    if (url.pathname === "/registry.json" || url.pathname === "/") {
      return new Response(registryJson, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=60"
        }
      });
    }
    
    // Serve OCX config
    if (url.pathname === "/ocx.jsonc" || url.pathname === "/ocx.json") {
      return new Response(ocxJsonc, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=60"
        }
      });
    }
    
    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS"
        }
      });
    }
    
    return new Response("Not Found", { status: 404 });
  }
};

const registryJson = JSON.stringify({
  "$schema": "https://registry.kortix.com/schema.json",
  "version": "1.0.0",
  "name": "kortix-ocx-registry",
  "description": "Kortix Marketplace - Skills for Kortix AI Agents. Tools are bundled in @kortix/kortix-oc core package.",
  "updated": "2026-03-09",
  "registryUrl": "https://registry.kortix.com",
  "repository": "https://github.com/kortix-ai/kortix-ocx-registry",
  "note": "Tools (web-search, show, etc.) are included in @kortix/kortix-oc core package. This registry contains optional installable skills.",
  "skills": [
    { "name": "skill-agent-browser", "displayName": "Browser Automation", "path": "skills/skill-agent-browser" },
    { "name": "skill-agent-builder", "displayName": "Agent Builder", "path": "skills/skill-agent-builder" },
    { "name": "skill-deep-research", "displayName": "Deep Research", "path": "skills/skill-deep-research" },
    { "name": "skill-docx", "displayName": "Word Documents", "path": "skills/skill-docx" },
    { "name": "skill-domain-research", "displayName": "Domain Research", "path": "skills/skill-domain-research" },
    { "name": "skill-elevenlabs", "displayName": "ElevenLabs Audio", "path": "skills/skill-elevenlabs" },
    { "name": "skill-email", "displayName": "Email", "path": "skills/skill-email" },
    { "name": "skill-fullstack-vite-convex", "displayName": "Full-Stack Vite + Convex", "path": "skills/skill-fullstack-vite-convex" },
    { "name": "skill-legal-writer", "displayName": "Legal Writer", "path": "skills/skill-legal-writer" },
    { "name": "skill-logo-creator", "displayName": "Logo Creator", "path": "skills/skill-logo-creator" },
    { "name": "skill-openalex-paper-search", "displayName": "Academic Paper Search", "path": "skills/skill-openalex-paper-search" },
    { "name": "skill-paper-creator", "displayName": "Paper Creator", "path": "skills/skill-paper-creator" },
    { "name": "skill-pdf", "displayName": "PDF Processing", "path": "skills/skill-pdf" },
    { "name": "skill-presentations", "displayName": "Presentations", "path": "skills/skill-presentations" },
    { "name": "skill-remotion", "displayName": "Remotion Video", "path": "skills/skill-remotion" },
    { "name": "skill-replicate", "displayName": "Replicate AI", "path": "skills/skill-replicate" },
    { "name": "skill-woa", "displayName": "Wisdom of Agents", "path": "skills/skill-woa" },
    { "name": "skill-xlsx", "displayName": "Spreadsheets", "path": "skills/skill-xlsx" }
  ]
}, null, 2);

const ocxJsonc = JSON.stringify({
  "$schema": "https://ocx.kdco.dev/schemas/ocx.json",
  "name": "kortix-ocx-registry",
  "description": "Kortix Marketplace - Skills for Kortix AI Agents",
  "registries": {
    "kortix": { "url": "https://registry.kortix.com" }
  }
}, null, 2);
