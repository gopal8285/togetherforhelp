# TogetherForHelp — Website

Official website for TogetherForHelp, an NGO trust based in Delhi.

Live site: https://togetherforhelp.org

## Tech Stack

- React 19 + Vite (using `rolldown-vite`)
- React Router v6/v7 for routing
- Framer Motion for animations
- Plain CSS (single stylesheet: `src/styles/style.css`) — **no Tailwind**
- Hosted on GitHub Pages, served from the custom domain `togetherforhelp.org`

## Project Structure

```
src/
  pages/        One file per route (Home, About, Team, Volunteer, Donate,
                 Gallery, Contact, Faq, Recycle, Privacy, Terms, Copyright,
                 Sitemap)
  components/    Shared/reusable pieces (Navbar, Footer, JournalGallery,
                 VolunteerPerks, StickyCtaBar, FloatingWhatsAppButton,
                 FloatingDonateButton, BackToTopButton, HopeTicker, etc.)
  styles/
    style.css    The single site-wide stylesheet (mobile-first: base rules
                 are mobile, then @media (min-width: 1000px) blocks
                 override for desktop; some sections also have a
                 max-width: 768px mobile-specific override layered on top)
  assets/        Images and the birthday video
  App.jsx        Routes + BrowserRouter (basename="/") + global floating
                 buttons + image-protection listener
  main.jsx       React app entry point

public/
  CNAME          Contains "togetherforhelp.org" — required so the custom
                 domain survives every deploy (Vite copies public/ into
                 dist/ at build time). Do not delete this file.
  404.html       GitHub Pages has no server-side router, so a hard refresh
                 or a direct link to a route like /donate normally 404s.
                 This file + the redirect script in index.html work
                 together to send the visitor to the right page anyway.
  robots.txt, sitemap.xml   For search engines.
```

## Local Development

```bash
npm install       # first time only
npm run dev       # starts a local dev server, live-reloads on save
```

## Deploying to the Live Site

```bash
npm run deploy
```

This runs `npm run build` (via the `predeploy` script) and then publishes
the `dist/` folder to the `gh-pages` branch, which is what GitHub Pages
actually serves. This is the only command that updates the live site —
editing files locally does nothing to the live site until this runs.

Always also back up your source changes to GitHub itself:

```bash
git add .
git commit -m "Describe what changed"
git push
```

`git push` and `npm run deploy` do two different jobs: `git push` backs up
your *source code* to GitHub (the `main` branch); `npm run deploy` publishes
the *built site* (the `gh-pages` branch) that visitors actually see. Do
both, every time.

## Backups & Handing Off to Another Developer

This project is already a Git repository connected to
`github.com/gopal8285/togetherforhelp`. As long as you `git push` after
every change (see above), the full project — code and history — lives on
GitHub, not just on this laptop. If this laptop is lost or the local
`tfh` folder is deleted, nothing is lost.

To hand the project to another developer:

1. Add them as a **Collaborator** on the GitHub repo (repo → Settings →
   Collaborators), so they can `git clone` it directly with full history.
2. They then run `npm install` and `npm run dev` to work locally, and
   `npm run deploy` (once you're happy with a change) to publish.
3. There are no secret API keys or passwords hardcoded anywhere in this
   codebase currently, so it's safe to share the repo as-is. If that ever
   changes (e.g. a backend key gets added), put it in a `.env` file and
   add `.env` to `.gitignore` before committing.

## Notes

- The custom domain's DNS is configured on Hostinger with 4 A records
  pointing at GitHub Pages' IPs, plus a `www` CNAME. GitHub auto-issues
  the HTTPS certificate once DNS resolves correctly — no action needed
  from this project's side.
- `id="donate"` exists on two different elements across the codebase (the
  Home page's "Support Our Mission" section, used as a `#donate` scroll
  anchor from other pages' "Donate Now" links, and the Donate page's own
  section). Any new CSS targeting `#donate` must be scoped with a parent
  class (e.g. `.about-page section#donate`) or it will silently affect
  both pages.
