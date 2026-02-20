This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Admin Panel

The site includes an admin panel at `/admin` for managing calendar events and blog posts. Content is stored in Vercel Blob and merged with hardcoded data at request time.

### Setup

Three environment variables are required:

| Variable | Purpose | How to generate |
|----------|---------|-----------------|
| `ADMIN_PASSWORD_HASH` | bcrypt hash of admin password | `node -e "require('bcryptjs').hash('your-password',12).then(console.log)"` |
| `JWT_SECRET` | Signs auth tokens | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob access | Auto-created when connecting a Blob store in the Vercel dashboard |

### Vercel Blob Setup

1. In the Vercel dashboard, go to your project's **Storage** tab
2. Click **Create Database** and select **Blob**
3. Connect it to your project — the `BLOB_READ_WRITE_TOKEN` env var is set automatically

### Usage

1. Navigate to `/admin` and sign in with the password you hashed above
2. Create events and blog posts via the admin forms
3. Content appears on the public calendar and blog pages immediately

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
