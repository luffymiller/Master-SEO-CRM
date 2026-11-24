# Master SEO CRM — Blogging Studio

A private, single-file blogging and SEO publishing workspace powered by Supabase.

## Live app
GitHub Pages deploys from the `main` branch after changes to `index.html`:
https://luffymiller.github.io/Master-SEO-CRM/

## Workflow
1. Add each blog or website once.
2. Create niches and nested categories under the correct website.
3. Plan articles, briefs, writers, SEO metadata and publishing dates.
4. Organize keyword research by website and niche.
5. Store SEO audits and issues with private PDF attachments.
6. Track backlinks and indexing status.
7. Maintain publisher websites, outreach campaigns and campaign messages.
8. Manage internal and external article links.

## Website relationships
Each website receives an automatic `website_code` (for example, `WEB-XXXXXXXX`). Website selectors across the workspace use real database IDs behind the scenes, so UUIDs are never entered manually. The website selector in the top bar filters the related records for the selected blog.

## Stack
- One static `index.html` (HTML, CSS and JavaScript)
- Supabase Auth, PostgreSQL, Row Level Security and private Storage
- Supabase JS v2 from jsDelivr CDN
- GitHub Pages via GitHub Actions

## Security
The browser contains only the Supabase publishable key. Never add a service-role or secret key to this public repository. Workspace rows are protected by RLS. SEO PDF files are stored in a private bucket and scoped to workspace membership. Public self-registration should remain disabled; create the owner account through Supabase Auth.

## Scope
This CRM is for the owner's blogging websites and publishing workflow, not client-agency management. WordPress connection is reserved for later. Google Search Console and Google Analytics are out of scope for now.
