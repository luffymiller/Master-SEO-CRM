# Master SEO CRM

A modular SEO agency and publishing operations platform.

## Stack
- Next.js 15 + TypeScript
- Tailwind CSS
- Supabase Auth + PostgreSQL + Row Level Security
- Zod validation and Lucide icons

## Local setup
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add the Supabase project URL and publishable key.
4. Run `npm run dev`.

## Security
Never put a Supabase service-role/secret key in browser code or a `NEXT_PUBLIC_*` variable. Database access is protected by workspace membership RLS. A first Auth signup automatically provisions a personal workspace and owner membership.

## Modules
Agency CRM, clients, websites, projects, tasks, keyword tracking, audits, backlinks, publisher/outreach CRM, blogging/content operations, proposals, invoicing, payments, expenses, activity history and notifications.

WordPress fields are reserved for a future integration. Google Search Console and Google Analytics integrations are intentionally out of scope for this build.

## Database
The initial schema is provisioned in the dedicated Supabase project. Keep future schema changes in versioned migrations under `supabase/migrations`.
