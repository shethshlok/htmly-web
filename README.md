# Htmly Web

Marketing / onboarding landing page for **Htmly** — the HTML visualization MCP server that lets AI agents push HTML/CSS/JS and get an instant live preview link.

Built with **Next.js 15** (App Router) + **Tailwind CSS v4**.

## What's on the page

- **Hero** — value proposition + the copy-paste connect config
- **Plain-English explainer** — what Htmly does in simple words
- **Features** — push-to-visualize, multi-file, isolated workspaces, remote-first
- **How it works** — 3 steps
- **Install your way** — tabbed instructions for Claude Desktop, Claude Code, Cursor, VS Code, and any MCP client (with copy buttons)
- **FAQ** + final CTA

## Develop

```bash
bun install
bun run dev      # http://localhost:3000
```

## Build

```bash
bun run build
bun run start
```

## Editing the server details

All MCP install snippets and copy live in [`lib/configs.ts`](./lib/configs.ts).
Change `SSE_URL` there to point at a different Htmly instance.
