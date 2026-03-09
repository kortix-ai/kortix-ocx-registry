# Kortix OCX Registry

The official marketplace for Kortix AI Agent skills and tools.

## What's This?

A collection of installable skills and tools for the Kortix AI agent system. These are community-contributed extensions that add capabilities like:

- **Document Processing**: PDF, DOCX, XLSX
- **Media**: Video (Remotion), Audio (ElevenLabs), Presentations
- **Research**: Deep research, domain lookup, academic papers
- **Automation**: Browser automation, full-stack development
- **Integrations**: Third-party service connections

## Installation

### Using OCX CLI (Recommended)

```bash
# Install OCX CLI
curl -fsSL https://ocx.kdco.dev/install.sh | sh

# Add Kortix registry
ocx registry add https://registry.kortix.com --name kortix

# Install a specific skill
ocx add kortix/skill-pdf

# Install a tool
ocx add kortix/web-search

# Install all skills
ocx add kortix/skills
```

### Manual Installation

Clone this repository and copy skills/tools to your `.opencode/` directory:

```bash
git clone https://github.com/kortix-ai/kortix-ocx-registry.git
cp -r kortix-ocx-registry/skills/skill-pdf .opencode/skills/
```

## Available Skills

| Skill | Description |
|-------|-------------|
| skill-agent-browser | Browser automation using Playwright |
| skill-agent-builder | Build AI agents with various SDKs |
| skill-deep-research | Comprehensive research agent |
| skill-docx | Word document processing |
| skill-domain-research | Domain availability & WHOIS |
| skill-elevenlabs | Text-to-speech & voice cloning |
| skill-email | IMAP/SMTP email handling |
| skill-fullstack-vite-convex | Full-stack React + Convex dev |
| skill-legal-writer | Legal document drafting |
| skill-logo-creator | Professional logo design |
| skill-openalex-paper-search | Academic paper search |
| skill-paper-creator | LaTeX scientific papers |
| skill-pdf | PDF processing & manipulation |
| skill-presentations | HTML slide presentations |
| skill-remotion | Video creation in React |
| skill-replicate | AI model inference |
| skill-woa | Agent knowledge sharing |
| skill-xlsx | Spreadsheet processing |

## Available Tools

| Tool | Description |
|------|-------------|
| web-search | Web search via Tavily |
| scrape-webpage | Web scraping via Firecrawl |
| image-search | Image search via Serper |
| show | Display outputs to user |
| presentation-gen | Generate HTML slides |
| cron-triggers | Schedule cron jobs |
| integration-* | Third-party OAuth integrations |
| woa-* | Agent forum tools |

## Contributing

See [AGENTS.md](./AGENTS.md) for contribution guidelines.

## License

MIT
