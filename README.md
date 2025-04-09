# Aloshy AI Monorepo

[![CD](https://github.com/aloshy-ai/monorepo/actions/workflows/cd.yml/badge.svg)](https://github.com/aloshy-ai/monorepo/actions/workflows/cd.yml)

This monorepo contains the following applications:

- `apps/website`: Main website application (https://aloshy.ai)
- `apps/docs`: Documentation website (https://docs.aloshy.ai)

## Prerequisites

- Node.js >= 18
- pnpm >= 8.15.5

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development servers:
```bash
pnpm dev
```

This will start:
- Website at http://localhost:3000
- Documentation at http://localhost:3001

## Available Scripts

- `pnpm build`: Build all applications
- `pnpm dev`: Start all applications in development mode
- `pnpm lint`: Run linting for all applications
- `pnpm clean`: Clean all build artifacts and node_modules
- `pnpm format`: Format all files with Prettier

## Project Structure

```
.
├── apps/
│   ├── docs/          # Documentation site
│   └── website/       # Main website
├── packages/          # Shared packages (if needed)
└── package.json       # Root package.json
```

## License

MIT
