/* ============================================================================
   EDIT ME. Everything on the website comes from this one file.
   Change the text, add projects, add films, then refresh the page.
   - Text in *asterisks* is shown in the soft italic serif.
   - Images go in assets/projects/, videos in assets/videos/, posters in assets/posters/.
   - To hide a section, delete its items or set show: false.
   ============================================================================ */
window.SITE = {

  name: "Santosh",
  role: "student builder",
  city: "Delhi",
  timezone: "Asia/Kolkata",          // the little live clock in the menu
  email: "hello@yourmail.com",       // <- your real email
  loadingPercent: 63,                // how "loaded" you feel right now :)

  hero: {
    kicker: "a story in six chapters",
    line: "is *still loading*",
    sub: "Third-year student from Delhi. I tried everything, kept the curiosity, and I'm building my way to the next station.",
  },

  intro: "I'm a *3rd-year student* from Delhi who wrote his first line of code in 2024, tried *everything*, from code and AI to editing, DSA and content, and turned all that confusion into *curiosity*. This is that story, so far.",

  /* ---------- the storybook: one page per chapter ----------
     art: delhi, code, errors, pills, ai, loading  (or set image: "assets/projects/x.jpg")
     color: sky, peach, butter, sage, lilac, rose                                        */
  story: [
    { no: "01", title: "Delhi", art: "delhi", color: "peach",   text: "Born and raised in Delhi. A *quiet* kid who liked figuring out how things worked." },
    { no: "02", title: "Hello, world", art: "code", color: "sky", text: "2024. My first line of code printed two words and I felt like a *wizard*." },
    { no: "03", title: "Errors. So many.", art: "errors", color: "rose", text: "Then the bugs arrived. My first real project worked on the *47th try*." },
    { no: "04", title: "Master of none", art: "pills", color: "lilac", text: "Development, AI/ML, editing, DSA, content. I tried *all of it*, and I'm still finding my main thing." },
    { no: "05", title: "Then AI arrived", art: "ai", color: "sage", text: "Everyone had an opinion about the future. I chose the quiet one: *keep learning*." },
    { no: "06", title: "Still loading", art: "loading", color: "butter", text: "Third year. Not finished, not lost. *Loading*, at my own speed." },
  ],

  /* ---------- the things I tried (drag them around on the site) ---------- */
  skills: [
    { name: "Development", note: "web, apps, building things" },
    { name: "AI / ML", note: "models, tools, curiosity" },
    { name: "Editing", note: "films, motion, timing" },
    { name: "DSA", note: "the gym for the brain" },
    { name: "Content", note: "telling stories online" },
    { name: "Design", note: "making it feel right" },
    { name: "Curiosity", note: "the main thing, maybe", color: "tomato" },
  ],

  /* ---------- projects: copy a block to add one ----------
     image: put a file in assets/projects/ and write its path, or leave "" for a drawn cover.
     color: one of sky, peach, butter, sage, lilac, rose                                  */
  projects: [
    { title: "Your first project", year: "2024", tags: ["web", "learning"], color: "sky",
      summary: "Replace this with what you built, why, and what you learned. Two or three lines is perfect.",
      link: "https://github.com/", image: "" },
    { title: "A thing you shipped", year: "2025", tags: ["ai", "python"], color: "peach",
      summary: "What problem did it solve? Who used it? What would you do differently next time?",
      link: "", image: "" },
    { title: "An experiment", year: "2025", tags: ["design", "motion"], color: "lilac",
      summary: "Small experiments count. Show the curiosity, not just the finished things.",
      link: "", image: "" },
    { title: "Hackathon build", year: "2026", tags: ["team", "48 hours"], color: "sage",
      summary: "Tell the story of the weekend. What broke at 3 AM and how you fixed it.",
      link: "", image: "" },
  ],

  /* ---------- films ---------- */
  films: [
    { title: "Loading Santosh", length: "1:12", year: "2026",
      text: "A progress bar with eyes tries to grow up. Motion graphics, original soundtrack.",
      src: "assets/videos/loading-santosh.mp4", poster: "assets/posters/loading-santosh.jpg", color: "butter" },
    { title: "A Bento in 9 Bites", length: "1:23", year: "2026",
      text: "My story as a Japanese lunchbox, printed like a risograph at 12 frames a second.",
      src: "assets/videos/santosh-bento.mp4", poster: "assets/posters/santosh-bento.jpg", color: "rose" },
    { title: "Every Legend Starts Somewhere", length: "0:40", year: "2026",
      text: "A pencil line, a blueprint and a hologram, narrated like a nature documentary.",
      src: "assets/videos/santosh-intro.mp4", poster: "assets/posters/santosh-intro.jpg", color: "sky" },
  ],

  /* ---------- next stations (dreams) ---------- */
  next: [
    { title: "First job", icon: "case" },
    { title: "Financially stable", icon: "coins" },
    { title: "My own business", icon: "rocket" },
    { title: "My own house", icon: "house" },
    { title: "One night in a Swiss castle", icon: "castle" },
    { title: "Travel with family", icon: "plane" },
  ],

  /* ---------- say hi ---------- */
  links: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "YouTube", url: "https://youtube.com/" },
  ],

  marquee: ["still loading", "student of everything", "Delhi", "2024 → ∞", "master of none", "curious on purpose"],
};
