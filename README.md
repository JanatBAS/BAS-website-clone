# Bitcoin Association Switzerland website

The public website of the Bitcoin Association Switzerland (www.bitcoinassociation.ch), built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Node.js 24 is required (`engines` in `package.json`; CI and Vercel use the same version). Without a `BLOB_READ_WRITE_TOKEN` the site runs normally and admin-created content is simply empty.

## Structure

- `src/app/(full-footer)/` and `src/app/(simple-footer)/`: the public pages. Each route group has a layout that renders the header and its footer, so pages render only their own content. The folder names do not appear in URLs.
- `src/app/admin/`: the admin panel; `(panel)/` holds the pages behind the login, with the admin navigation in its layout.
- `src/data/`: hardcoded content. `blog-posts.ts` holds one record per News post; each post page under `bitcoin-association-switzerland/` reads its title, date, author and neighbour links from there with `getPostPage()`. `events.ts` does the same for event pages.
- `src/lib/`: data loading (Vercel Blob, Meetup sync, shop feed), admin auth and input checks, date helpers.
- The site palette (`brand`, `brand-teal`, `taupe`, `ink`) is defined in `src/app/globals.css`; use those utilities (`text-brand`, `bg-brand-teal`, ...) instead of hex values.

## Admin Panel

The site includes an admin panel at `/admin` for managing calendar events and blog posts. Content is stored in Vercel Blob and merged with hardcoded data at request time.

### Setup

Three environment variables are required:

| Variable | Purpose | How to generate |
|----------|---------|-----------------|
| `ADMIN_PASSWORD_HASH` | bcrypt hash of admin password | `node -e "require('bcryptjs').hash('your-password',12).then(console.log)"` |
| `JWT_SECRET` | Signs auth tokens | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob access | Auto-created when connecting a Blob store in the Vercel dashboard |

`CRON_SECRET` is required for the daily Meetup sync (`/api/cron/sync-meetup`, see `vercel.json`). Vercel Cron sends it as `Authorization: Bearer $CRON_SECRET`; without it the endpoint refuses every request.

### Meetup events

Once a day the cron job reads the public events pages of the groups in `src/data/meetup-groups.ts` and stores published upcoming and last-90-days events in one Blob file. The calendar shows a meetup only after the organizers publish it on Meetup (drafts are not public), so a new date can take up to a day to appear.

### Vercel Blob usage

Keep Blob operations to a minimum: an admin save is one read plus one write, and public pages read Blob only through the Next.js data cache, which the admin API and the Meetup sync expire after a write. A local `next build` or `next dev` with the production `BLOB_READ_WRITE_TOKEN` in `.env.local` reads (and, on admin saves, writes) the production store, so leave the token out unless you need it. Without a token, admin data is simply empty locally.

### Vercel Blob Setup

1. In the Vercel dashboard, go to your project's **Storage** tab
2. Click **Create Database** and select **Blob**
3. Connect it to your project — the `BLOB_READ_WRITE_TOKEN` env var is set automatically

### Usage

1. Navigate to `/admin` and sign in with the password you hashed above
2. Create events and blog posts via the admin forms
3. Content appears on the public calendar and blog pages immediately

## Deployment

Pushes to `main` are deployed by Vercel's Git integration. GitHub Actions (`.github/workflows/ci.yml`) runs lint, build and `npm audit` on every push and pull request.
