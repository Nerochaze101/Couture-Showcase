# replit.md

## Overview

Nerochaze is a luxury fashion couture brand website built as a full-stack TypeScript application. It features a dark-themed, gold-accented design with scroll-triggered animations, a custom cursor, image/video galleries, and a contact inquiry form. The site is a marketing/portfolio site for a high-end fashion brand, not an e-commerce platform.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with two pages: Home (`/`) and Contact (`/contact`)
- **Styling**: Tailwind CSS with CSS variables for theming (luxury dark theme with gold accents). Uses shadcn/ui component library (new-york style) with extensive Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations, page transitions, and a custom cursor effect
- **State/Data**: TanStack React Query for server state management; react-hook-form with Zod validation for forms
- **Fonts**: Cormorant Garamond (display) and Montserrat (sans) via Google Fonts, configured as CSS custom properties (`--font-display`, `--font-sans`)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 running on Node.js with TypeScript (via tsx)
- **API**: Single REST endpoint `POST /api/inquiries` for contact form submissions
- **Server structure**: 
  - `server/index.ts` — Express app setup, logging middleware, HTTP server creation
  - `server/routes.ts` — API route registration
  - `server/storage.ts` — Database storage layer with an interface (`IStorage`) and `DatabaseStorage` implementation
  - `server/vite.ts` — Vite dev server middleware integration for development
  - `server/static.ts` — Static file serving for production builds
  - `server/db.ts` — Database connection pool setup

### Data Storage
- **Database**: PostgreSQL via `node-postgres` (pg) connection pool
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts`, shared between client and server
- **Current tables**:
  - `inquiries` — id (serial PK), name (text), email (text), message (text), createdAt (timestamp)
- **Validation**: Zod schemas generated from Drizzle schemas using `drizzle-zod`
- **Migrations**: Drizzle Kit with `db:push` command; migrations output to `./migrations`

### Shared Code
- `shared/schema.ts` — Database schema definitions and Zod validation schemas, used by both frontend and backend
- `shared/routes.ts` — API route contracts (method, path, input/output schemas) for type-safe API usage

### Build System
- **Development**: `tsx server/index.ts` with Vite dev server middleware for HMR
- **Production build**: Custom `script/build.ts` that runs Vite for client and esbuild for server, outputting to `dist/` (server as `dist/index.cjs`, client as `dist/public/`)
- **Key detail**: Server dependencies in an allowlist are bundled to reduce cold start times; all others are treated as externals

## External Dependencies

- **PostgreSQL**: Required database, connected via `DATABASE_URL` environment variable
- **Google Fonts**: Cormorant Garamond and Montserrat loaded via CDN
- **Unsplash**: Hero and gallery images served from Unsplash CDN
- **Vimeo**: Gallery video content served from Vimeo external player
- **Replit plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev-only)
- **connect-pg-simple**: Available for PostgreSQL-backed session storage (listed in dependencies but not yet wired up)