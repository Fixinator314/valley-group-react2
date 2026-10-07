# Valley Group website

A one-page React + TypeScript + Tailwind site (Vite).

## Commands

```bash
npm install      # first time only
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
```

Upload the contents of `dist/` to the host. For Cloudflare Pages, the build command is `npm run build` and the output directory is `dist`.

## Where things live

- `src/content.ts`: all copy, stats, sectors, values, contact details and partner logos. Most text edits happen here.
- `src/components/`: one file per section (Nav, Hero, About, Values, Sectors, Impact, Approach, Leadership, Partners, Contact, Footer).
- `src/components/Hero.tsx`: the hero video URL is in `HERO_VIDEO_SRC`. It's currently a placeholder; swap it for `/images/hero.mp4` once Valley Group's own footage is in `public/images/`.
- `src/index.css`: global styles, `.liquid-glass`, and shared type styles.
- `public/images/`: web-sized photos and logos.

## Contact form

The form opens the visitor's email app with the enquiry addressed to info@valleygroup.co.za. To send it from the server instead, set up a mail endpoint and point `handleSubmit` in `src/components/Contact.tsx` at it.
