# Blood4Life marketing site

A responsive Next.js presentation site for the Blood4Life Flutter application. The original Flutter source remains at the repository root; this site is independently installable from `marketing-site`.

## Run locally

```bash
cd marketing-site
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run build
```

## Deployment

Create a Vercel project from the repository and set **Root Directory** to `marketing-site`. No environment variables are required. The canonical URL is currently configured as `https://blood4life.vercel.app`; update the metadata, sitemap, and robots URL if a different domain is used.

## Project status

The site accurately presents verified Flutter flows and repository technologies. The source project does not contain exported screen captures, so the phone previews are illustrative UI compositions based on the implemented screens. This is a portfolio demonstration, not a live healthcare service, and the marketing site does not collect health information.

Repository: https://github.com/Ranidu-Ravishka/blood_4_life  
Figma reference: https://www.figma.com/proto/3UOZJ5LCNrHnnj7BUcG6TB/blood-donation
