# Santosh · still loading

Your portfolio. A light, flat-pastel storybook site with no build step: double-click `index.html` and it opens.

```
portfolio/
├── index.html      page structure (rarely needs editing)
├── content.js      ← ALL your words, projects, films and links. Edit this one.
├── styles.css      colours, fonts, layout
├── main.js         all the animation
└── assets/
    ├── projects/   project screenshots (.jpg/.png/.webp)
    ├── videos/     your films (.mp4)
    └── posters/    a still image for each film (.jpg)
```

## Editing (5 minutes)

Open `content.js` in any text editor (VS Code, Notepad), change things, save, refresh the browser.

- `*stars*` around words turn them into the soft italic serif, like `"is *still loading*"`.
- **Add a project:** copy one `{ ... }` block inside `projects: [ ]`, paste it after the last one and change the text. Put a screenshot in `assets/projects/` and write `image: "assets/projects/my-app.png"`. Leave `image: ""` and the site draws a cover for you.
- **Add a film:** put the `.mp4` in `assets/videos/` and a `.jpg` still in `assets/posters/`, then copy a block in `films: [ ]`.
- **Colours** for cards and pills: `sky`, `peach`, `butter`, `sage`, `lilac`, `rose` (skills can also use `tomato`).
- **Story chapter art:** `delhi`, `code`, `errors`, `pills`, `ai`, `loading`. Or use your own picture with `image: "assets/projects/photo.jpg"`.
- **Next stations icons:** `case`, `coins`, `rocket`, `house`, `castle`, `plane`, `heart`, `star`.
- `loadingPercent` sets how "loaded" you are everywhere on the site (hero bar, chapter 6, "you are here").
- Delete every item in a list (for example `projects: []`) and that section disappears, menu link included.
- Remember to put your real `email` and social `links` in.

Commas matter: every `{ ... }` block in a list ends with `,`. If the page goes blank after an edit, a missing comma or quote is almost always the reason. Press F12 → Console and it will point at the line.

## Changing the look

The top of `styles.css` has every colour as a variable (`--paper`, `--ink`, `--sky` …). Change a hex code and the whole site follows. The colour each section fades to while scrolling is the `data-bg` attribute on each `<section>` in `index.html`.

## Putting it online (free)

1. **Netlify Drop:** go to app.netlify.com/drop and drag the whole `portfolio` folder onto the page. You get a link in about 30 seconds.
2. **GitHub Pages:** push the folder to a repo → Settings → Pages → deploy from branch.
3. **Vercel:** `npx vercel` inside the folder.

The three films are about 25 MB each. That's fine on Netlify/Vercel. GitHub accepts files up to 100 MB, but if you'd like faster loading, re-export them smaller (720p is plenty), or host the `.mp4` on a video host such as Cloudinary and paste that link into the film's `src`.

## What's in it

- Preloader: a loading bar with eyes counts to 100%, then wipes away
- Hero: the letters of your name bob, squish on hover and float away like balloons when you scroll; a paper plane loops through the sky
- Marquee that speeds up and reverses with your scroll
- About text that lights up word by word as you read
- The story: a pinned sideways storybook, each chapter's drawing sketches itself in
- "Master of none": real physics pills you can grab and throw (tap to shake on phones)
- Work list with a cover that follows the cursor and an accordion for details
- Films pinned like photos, hover to preview, click for the full player
- Next stations: a track draws itself down the page, a paper plane rides it and the dreams light up
- Bouncing "Say hi." letters, click-to-copy email, a reading meter with eyes in the corner
- Custom cursor, smooth scroll, live Delhi clock, phone layout, reduced-motion support

Built with GSAP + ScrollTrigger, Lenis and Matter.js (loaded from a CDN, so you need internet for the animation; without it the site still shows everything, just without motion).
