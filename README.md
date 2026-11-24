# Master SEO CRM

A single-file SEO agency and blogging operations CRM, powered by Supabase.

## Live app
GitHub Pages deploys automatically from the `main` branch after changes to `index.html`:
https://luffymiller.github.io/Master-SEO-CRM/

## Setup
1. Open the live app and create an account.
2. Confirm your email if Supabase email confirmation is enabled.
3. Sign in. The database trigger provisions your personal workspace.
4. Add clients, websites, projects, SEO records, publishers, articles and finance records.

## Stack
- One static `index.html` (HTML, CSS and JavaScript)
- Supabase Auth + PostgreSQL + Row Level Security
- Supabase JS v2 loaded from jsDelivr CDN
- GitHub Pages deployment through GitHub Actions

## Security
The browser contains only the Supabase publishable key. Never add a service-role or secret key to this repository. Workspace data is protected by database Row Level Security. Keep the repository public only while it contains no private credentials or customer information.

## Included modules
Leads, clients, websites, projects, tasks, keywords, ranking history, SEO audits and issues, backlinks, publisher sites, outreach campaigns and messages, content categories, articles, article links, proposals, invoices, invoice items, payments, expenses, activities, notes, document metadata and notifications.

WordPress integration is reserved for later. Google Search Console and Google Analytics are intentionally out of scope.
