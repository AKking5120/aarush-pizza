# Aarush Gas Pizza Oven Repair & Spare Parts

React + TypeScript + Tailwind marketing site with **Supabase** CMS and **admin panel**.

## Local development

```bash
npm install
cp .env.example .env   # add Supabase URL + anon key
npm run dev
```

- Public site: http://localhost:5173/
- Admin: http://localhost:5173/admin/login

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run:
   - `supabase/migrations/001_initial_schema.sql`
   - `supabase/seed.sql` (optional demo content)
3. Copy **Project URL** and **anon public key** into `.env`:

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

4. **Authentication → Users**: create an admin user (email + password).
5. In SQL Editor, grant admin access (use the user’s UUID from Auth):

```sql
insert into public.admin_users (user_id)
values ('YOUR_AUTH_USER_UUID');
```

6. Sign in at `/admin/login`.

## Admin panel

| Route | Purpose |
|--------|---------|
| `/admin/settings` | Phone, WhatsApp, hours, map URLs |
| `/admin/services` | Service cards |
| `/admin/spare-parts` | Parts catalogue |
| `/admin/gallery` | Gallery images |
| `/admin/enquiries` | Form submissions |

Without Supabase, the site uses static files under `src/config/` and enquiries are not stored server-side.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Deploy the `dist` folder (Vercel, Netlify, etc.) and set the same `VITE_*` env vars in the host dashboard.
