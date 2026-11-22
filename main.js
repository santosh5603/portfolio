/* ==========================================================================
   Santosh · still loading
   All the motion lives here. All the words live in content.js.
   You shouldn't need to touch this file to update the site.
   ========================================================================== */
(() => {
  'use strict';

  const S = window.SITE || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const md = s => esc(s).replace(/\*(.+?)\*/g, '<em>$1</em>');
  const pad2 = n => String(n).padStart(2, '0');
  const PAL = ['sky', 'peach', 'butter', 'sage', 'lilac', 'rose'];
  const col = (c, i) => `var(--${c || PAL[i % PAL.length]})`;
  const rand = (a, b) => a + Math.random() * (b - a);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const G = window.gsap, ST = window.ScrollTrigger;
  const pct = Math.max(1, Math.min(99, Math.round(+S.loadingPercent || 63)));

  /* ======================================================================
     ILLUSTRATIONS (flat line art, drawn on scroll)
     ====================================================================== */
  const p = (d, k = '') => `<path class="d ${k}" pathLength="1" d="${d}"/>`;
  const c = (cx, cy, r, k = '') => `<circle class="d ${k}" pathLength="1" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const rc = (x, y, w, h, rx, k = '') => `<rect class="d ${k}" pathLength="1" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}"/>`;
  const t = (x, y, s, txt, extra = '') => `<text class="t" x="${x}" y="${y}" font-size="${s}" ${extra}>${txt}</text>`;
  const svg = inner => `<svg class="art" viewBox="0 0 400 300" aria-hidden="true">${inner}</svg>`;
  const bubble = (x, y, w, h, side) => {
    const r = 12, tx = side === 'r' ? x + w - 40 : x + 22;
    return `M${x + r} ${y} H${x + w - r} A${r} ${r} 0 0 1 ${x + w} ${y + r} V${y + h - r} A${r} ${r} 0 0 1 ${x + w - r} ${y + h} H${tx + 16} L${tx + 4} ${y + h + 14} L${tx} ${y + h} H${x + r} A${r} ${r} 0 0 1 ${x} ${y + h - r} V${y + r} A${r} ${r} 0 0 1 ${x + r} ${y} Z`;
  };
  const tinyPill = (x, y, a, label, k) => `<g transform="translate(${x} ${y}) rotate(${a})">${rc(-38, -15, 76, 30, 15, k)}${t(0, 4.5, 12, label, 'text-anchor="middle"')}</g>`;
  const SPARK = (x, y, s, k = 'kb') => p(`M${x} ${y - s} L${x + s * .28} ${y - s * .28} L${x + s} ${y} L${x + s * .28} ${y + s * .28} L${x} ${y + s} L${x - s * .28} ${y + s * .28} L${x - s} ${y} L${x - s * .28} ${y - s * .28} Z`, k);

  const ART = {
    delhi: () => svg(
      c(300, 78, 34, 'kb') +
      p('M40 96 C28 96 26 82 36 78 C36 66 50 62 58 68 C62 56 82 56 86 68 C96 64 106 72 102 82 C112 84 110 96 100 96 Z', 'kw') +
      p('M20 252 H380') +
      p('M180 84 Q200 60 220 84 Z', 'kp') +
      p('M152 100 V84 H248 V100 Z', 'kp') +
      p('M122 116 V100 H278 V116 Z', 'kp') +
      p('M132 252 V116 H268 V252 H234 V178 A34 34 0 0 0 166 178 V252 Z', 'kp') +
      p('M146 132 H254') +
      p('M58 146 q8 -8 16 0 q8 -8 16 0 M98 124 q6 -6 12 0 q6 -6 12 0') +
      p('M46 252 C38 236 54 222 66 232 C72 218 94 222 92 238 C104 238 106 252 98 252 Z', 'kg') +
      c(322, 204, 10, 'kw') +
      p('M322 214 V236 L314 252 M322 236 L330 252 M322 222 L310 232 M322 222 L336 208') +
      t(36, 284, 13, 'delhi · day zero')
    ),
    code: () => svg(
      rc(92, 50, 216, 146, 12, 'ks') + rc(106, 64, 188, 118, 6, 'kw') +
      p('M60 196 H340 L322 222 H78 Z', 'kp') + p('M180 209 H220') +
      t(118, 98, 15, '&gt; print("hello,') + t(199, 120, 15, 'world")') +
      t(118, 160, 15, 'hello, world', 'style="fill:var(--tomato)"') +
      `<rect class="t blink" x="232" y="147" width="9" height="16" style="fill:var(--ink);stroke:none"/>` +
      SPARK(352, 66, 16) + SPARK(54, 104, 11) + SPARK(348, 170, 9, 'kl') +
      t(36, 270, 13, '2024 · first line ever')
    ),
    errors: () => svg(
      rc(40, 40, 196, 116, 10, 'kw') + p('M40 64 H236') + c(56, 52, 4.5, 'kr') + t(56, 100, 13, 'Error: undefined') + t(56, 122, 13, 'is not a function') +
      rc(88, 82, 196, 116, 10, 'kl') + p('M88 106 H284') + c(104, 94, 4.5, 'kr') + t(104, 146, 13, 'Error: but why??') +
      rc(140, 128, 210, 128, 10, 'kr') + p('M140 152 H350') + c(156, 140, 4.5, 'kw') +
      `<text class="t serif" x="160" y="206" font-size="36">try #47</text>` + t(162, 236, 13, '✓ it works (somehow)') +
      `<ellipse class="d kg" pathLength="1" cx="334" cy="72" rx="15" ry="20"/>` +
      p('M334 54 V92 M319 64 l-12 -6 M319 74 h-14 M320 84 l-12 6 M349 64 l12 -6 M349 74 h14 M348 84 l12 6 M328 54 l-6 -12 M340 54 l6 -12')
    ),
    pills: () => svg(
      `<path class="t" d="M96 196 C96 40 304 40 304 196" stroke-dasharray="3 9"/>` +
      c(200, 190, 14, 'kw') + p('M200 204 V246 L186 284 M200 246 L214 284 M200 218 L176 198 M200 218 L224 198') +
      tinyPill(104, 150, -28, 'Dev', 'ks') + tinyPill(140, 86, -14, 'AI/ML', 'kl') + tinyPill(200, 58, 0, 'Editing', 'kp') +
      tinyPill(260, 86, 14, 'DSA', 'kg') + tinyPill(296, 150, 28, 'Content', 'kr') +
      t(258, 262, 13, 'main thing:') + t(258, 282, 13, 'loading…')
    ),
    ai: () => svg(
      p(bubble(24, 26, 150, 44, 'r'), 'kw') + t(38, 53, 12, 'AI will replace us') +
      p(bubble(226, 18, 150, 44, 'l'), 'kw') + t(240, 45, 12, 'learn 47 new tools') +
      p(bubble(14, 116, 124, 44, 'r'), 'kr') + t(30, 143, 12, "it's so over") +
      p(bubble(262, 108, 124, 44, 'l'), 'kg') + t(276, 135, 12, "we're so back") +
      c(200, 128, 14, 'kb') + p('M193 146 h14 M195 153 h10 M200 102 v-8 M178 110 l-6 -6 M222 110 l6 -6') +
      c(200, 194, 14, 'kw') + p('M200 208 V246 M200 246 L188 282 M200 246 L212 282') +
      p('M200 220 L178 232 M200 220 L222 232') +
      p('M168 226 L200 234 L232 226 V258 L200 266 L168 258 Z M200 234 V266', 'kb')
    ),
    loading: () => {
      const w = Math.round(292 * pct / 100), ex = 54 + w;
      return svg(
        t(48, 84, 13, 'loading, at my own speed') +
        rc(46, 110, 308, 72, 36, 'kw') + rc(54, 118, w, 56, 28, 'kb') +
        c(ex - 44, 142, 10, 'kw') + c(ex - 20, 142, 10, 'kw') +
        `<circle class="t" cx="${ex - 42}" cy="143" r="4.5" style="fill:var(--ink);stroke:none"/><circle class="t" cx="${ex - 18}" cy="143" r="4.5" style="fill:var(--ink);stroke:none"/>` +
        p(`M${ex - 40} 160 q8 6 16 0`) +
        p('M140 182 V206 H128 M260 182 V206 H272') +
        `<text class="t serif" x="200" y="250" font-size="40" text-anchor="middle">${pct}%</text>` +
        p('M300 236 h40 v18 a10 10 0 0 1 -10 10 h-20 a10 10 0 0 1 -10 -10 Z M340 242 a7 7 0 0 1 0 14', 'kp') +
        p('M312 228 q-6 -8 0 -16 M326 228 q-6 -8 0 -16')
      );
    },
    blank: () => svg(SPARK(200, 150, 40) + SPARK(120, 90, 16, 'kl') + SPARK(290, 210, 20, 'kp')),
  };

  const ICON = {
    case: 'M8 17 h32 v22 H8 Z M18 17 v-5 h12 v5 M8 27 h32',
    coins: 'M12 14 a12 5 0 1 0 24 0 a12 5 0 1 0 -24 0 M12 14 v8 a12 5 0 0 0 24 0 v-8 M12 22 v8 a12 5 0 0 0 24 0 v-8',
    rocket: 'M24 6 C32 12 34 22 30 32 H18 C14 22 16 12 24 6 Z M18 30 l-6 6 v4 l8 -4 M30 30 l6 6 v4 l-8 -4 M22 36 l2 6 l2 -6 M20.5 17 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0',
    house: 'M8 22 L24 8 L40 22 V40 H8 Z M20 40 V30 h8 v10',
    castle: 'M8 40 V18 h5 v4 h4 v-4 h5 v4 h4 v-4 h5 v4 h4 v-4 h5 V40 Z M20 40 v-7 a4 4 0 0 1 8 0 v7 M24 18 V6 l8 3 l-8 3',
    plane: 'M6 24 L42 9 L32 40 L24 28 Z M24 28 L42 9',
    heart: 'M24 40 C8 30 4 20 10 13 C15 8 21 10 24 15 C27 10 33 8 38 13 C44 20 40 30 24 40 Z',
    star: 'M24 6 L29 19 L42 19 L31 27 L35 41 L24 32 L13 41 L17 27 L6 19 L19 19 Z',
  };
  const STAR = '<svg viewBox="-12 -12 24 24" aria-hidden="true"><path d="M0 -11 L3 -3 L11 0 L3 3 L0 11 L-3 3 L-11 0 L-3 -3 Z"/></svg>';

  /* project covers when no image is given: flat doodles */
  const DOODLE = [
    '<circle class="f" cx="300" cy="80" r="46"/><path d="M40 70 q30 -30 60 0 t60 0 t60 0"/>',
    '<rect class="f" x="230" y="40" width="120" height="120" rx="24" transform="rotate(12 290 100)"/><path d="M50 60 l20 20 l-20 20 M90 100 h40"/>',
    '<path class="f" d="M300 30 L318 78 L368 80 L328 110 L342 158 L300 130 L258 158 L272 110 L232 80 L282 78 Z"/><circle cx="70" cy="70" r="24"/>',
    '<path class="f" d="M240 150 C240 60 360 60 360 150 Z"/><path d="M40 50 h120 M40 80 h80 M40 110 h100"/>',
  ];
  const cover = (pr, i) => pr.image
    ? `<div class="cover" style="--c:${col(pr.color, i)}"><img src="${esc(pr.image)}" alt="${esc(pr.title)}" loading="lazy"></div>`
    : `<div class="cover" style="--c:${col(pr.color, i)}"><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">${DOODLE[i % DOODLE.length]}</svg><b>${esc((pr.title || '?').trim()[0])}</b></div>`;

  /* ======================================================================
     RENDER everything from content.js
     ====================================================================== */
  function render() {
    const name = S.name || 'Your Name';
    $$('[data-name]').forEach(el => (el.textContent = name));
    $$('[data-city]').forEach(el => (el.textContent = S.city || ''));
    document.title = `${name} · still loading`;
    $('#year').textContent = new Date().getFullYear();

    // hero
    const hn = $('#heroName');
    hn.setAttribute('aria-label', name);
    hn.innerHTML = [...name].map(ch => `<span class="ch" aria-hidden="true"><span class="chi">${ch === ' ' ? '&nbsp;' : esc(ch)}</span></span>`).join('');
    const h = S.hero || {};
    $('#heroKicker').innerHTML = h.kicker ? `( ${md(h.kicker)} )` : '';
    $('#heroLine').innerHTML = `<span>${md(h.line || '')}</span><span class="mini-bar" aria-hidden="true"><i style="width:${pct}%"></i></span><span class="mono mini-pct">${pct}%</span>`;
    $('#heroSub').innerHTML = md(h.sub || '');

    // marquee (repeated so it always fills the screen)
    const words = S.marquee && S.marquee.length ? S.marquee : ['still loading'];
    const items = Array(Math.max(2, Math.ceil(8 / words.length))).fill(words).flat().map(m => `<span class="mq-item">${md(m)}${STAR}</span>`).join('');
    $('#mqTrack').innerHTML = `<div class="mq-group">${items}</div><div class="mq-group">${items}</div>`;

    // intro + badge
    $('#introText').innerHTML = md(S.intro || '');
    $('#badgeText').textContent = `still loading • ${name} • ${S.city || 'since 2024'} • `.repeat(2);

    // story
    const story = S.story || [];
    $('#storyTrack').insertAdjacentHTML('beforeend', story.map((ch, i) => `
      <article class="card" style="--c:${col(ch.color, i)}" data-title="${esc(ch.title)}">
        <div class="card-art">${ch.image ? `<img src="${esc(ch.image)}" alt="" loading="lazy">` : (ART[ch.art] || ART.blank)()}</div>
        <div class="card-copy">
          <div class="card-top mono"><span>chapter ${esc(ch.no || pad2(i + 1))}</span><span>${pad2(i + 1)} / ${pad2(story.length)}</span></div>
          <div><h3 class="card-title">${md(ch.title)}</h3><p class="card-text">${md(ch.text)}</p></div>
        </div>
      </article>`).join('') + `
      <div class="story-end"><p class="h2">To be <em>continued…</em></p><span class="mono">(that's kind of the point)</span></div>`);
    $('#spCount').textContent = `01 / ${pad2(story.length)}`;
    if (!story.length) $('#story').remove();

    // skills
    const box = $('#pillBox');
    (S.skills || []).forEach((sk, i) => {
      const el = document.createElement('div');
      el.className = 'pill' + (sk.color === 'tomato' ? ' tomato' : '');
      el.style.setProperty('--c', col(sk.color, i));
      el.innerHTML = `<span>${md(sk.name)}</span>${sk.note ? `<small>${esc(sk.note)}</small>` : ''}`;
      box.appendChild(el);
    });
    if (!(S.skills || []).length) $('#skills').remove();

    // work
    const projects = S.projects || [];
    $('#workCount').textContent = `(${pad2(projects.length)})`;
    $('#projList').innerHTML = projects.map((pr, i) => `
      <li class="proj" style="--c:${col(pr.color, i)}" data-i="${i}">
        <button class="proj-row" aria-expanded="false" data-cursor="open">
          <span class="proj-no mono">${pad2(i + 1)}</span>
          <span class="proj-title">${md(pr.title)}</span>
          <span class="proj-tags">${(pr.tags || []).map(tg => `<span class="tag">${esc(tg)}</span>`).join('')}</span>
          <span class="proj-year mono">${esc(pr.year)}</span>
          <span class="plus" aria-hidden="true"></span>
        </button>
        <div class="proj-body"><div class="proj-inner"><div class="proj-content">
          ${cover(pr, i)}
          <div><p>${md(pr.summary)}</p>${pr.link ? `<a class="proj-link mono" href="${esc(pr.link)}" target="_blank" rel="noopener">see it live ↗</a>` : ''}</div>
        </div></div></div>
      </li>`).join('');
    if (!projects.length) $('#work').remove();

    // films
    const films = S.films || [];
    $('#filmGrid').innerHTML = films.map((f, i) => `
      <article class="film" style="--c:${col(f.color, i)};--r:${[-2.2, 1.6, -1][i % 3]}deg" data-i="${i}" tabindex="0" role="button" aria-label="Play ${esc(f.title)}" data-cursor="play">
        <div class="film-frame">
          <span class="tape" aria-hidden="true"></span>
          <div class="film-media">
            ${f.poster ? `<img src="${esc(f.poster)}" alt="" loading="lazy">` : ''}
            <video muted loop playsinline preload="none" data-src="${esc(f.src)}"></video>
            <span class="play" aria-hidden="true"><svg viewBox="0 0 20 22"><path d="M2 2 L18 11 L2 20 Z" fill="#23201C"/></svg></span>
            ${f.length ? `<span class="film-len">${esc(f.length)}</span>` : ''}
          </div>
          <div class="film-meta"><h3>${md(f.title)}</h3><span class="mono">${esc(f.year || '')}</span></div>
          <p>${md(f.text)}</p>
        </div>
      </article>`).join('');
    if (!films.length) $('#films').remove();

    // next stations
    const next = S.next || [];
    const st = $('#stations');
    const tape = '<span class="st-tape" aria-hidden="true"><svg preserveAspectRatio="none"><rect width="100%" height="100%" fill="url(#stripes)"/></svg></span>';
    st.insertAdjacentHTML('beforeend', `
      <div class="station here l"><span class="st-dot"></span>
        <div class="st-card" style="--c:var(--tomato)"><span class="st-ico"><svg viewBox="0 0 48 48"><path d="${ICON.star}"/></svg></span>
        <div><h3>You are <em>here</em></h3><span class="mono">3rd year · ${pct}% loaded</span></div></div></div>` +
      next.map((n, i) => `
      <div class="station ${i % 2 ? 'l' : 'r'}"><span class="st-dot"></span>
        <div class="st-card" style="--c:${col(n.color, i)}">${tape}<span class="st-ico"><svg viewBox="0 0 48 48"><path d="${ICON[n.icon] || ICON.star}"/></svg></span>
        <div><h3>${md(n.title)}</h3><span class="mono">station ${pad2(i + 1)} · under construction</span></div></div></div>`).join(''));
    if (!next.length) $('#next').remove();

    // contact
    $('#say').innerHTML = [...'Say hi.'].map((ch, i) => `<span class="${i >= 4 ? 'it' : ''}" aria-hidden="true">${ch === ' ' ? ' ' : esc(ch)}</span>`).join('');
    $('#emailTxt').textContent = S.email || '';
    $('#links').innerHTML = (S.links || []).map((l, i) => `<a href="${esc(l.url)}" target="_blank" rel="noopener" style="--c:${col(null, i)}">${esc(l.label)} <span>↗</span></a>`).join('');

    // prune nav links for removed sections
    $$('a[href^="#"]').forEach(a => { if (a.getAttribute('href').length > 1 && !$(a.getAttribute('href'))) a.remove(); });
  }

  /* ======================================================================
     INTERACTIONS that work without any animation library
     ====================================================================== */
  let lenis = null;
  const goTo = target => {
    const el = typeof target === 'string' ? $(target) : target;
    if (lenis) lenis.scrollTo(el || 0, { duration: 1.6 });
    else if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  function basics() {
    // anchor links
    $$('[data-scroll]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault(); closeMenu(); goTo(a.getAttribute('href'));
    }));
    $('#toTop').addEventListener('click', () => (lenis ? lenis.scrollTo(0, { duration: 2.2 }) : window.scrollTo({ top: 0, behavior: 'smooth' })));

    // mobile menu
    const btn = $('.menu-btn'), menu = $('#menu');
    function closeMenu() { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu'; menu.setAttribute('aria-hidden', 'true'); }
    btn.addEventListener('click', () => {
      const open = !menu.classList.contains('open');
      menu.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open)); btn.textContent = open ? 'Close' : 'Menu';
    });

    // clock
    const clock = $('#clock');
    const fmt = new Intl.DateTimeFormat('en-IN', { timeZone: S.timezone || 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true });
    const tick = () => (clock.textContent = fmt.format(new Date()).toLowerCase());
    tick(); setInterval(tick, 10000);

    // project accordion
    $$('.proj').forEach(li => {
      const row = $('.proj-row', li);
      row.addEventListener('click', () => {
        const open = !li.classList.contains('open');
        $$('.proj.open').forEach(o => { if (o !== li) { o.classList.remove('open'); $('.proj-row', o).setAttribute('aria-expanded', 'false'); } });
        li.classList.toggle('open', open); row.setAttribute('aria-expanded', String(open));
      });
      $('.proj-body', li).addEventListener('transitionend', e => { if (e.propertyName === 'grid-template-rows' && ST) ST.refresh(); });
    });

    // films: hover peek + lightbox
    const lb = $('#lightbox'), lbv = $('#lbVideo');
    const openFilm = i => {
      const f = (S.films || [])[i]; if (!f) return;
      $$('.film video').forEach(v => v.pause());
      lbv.src = f.src; if (f.poster) lbv.poster = f.poster;
      $('#lbTitle').innerHTML = md(f.title);
      lb.classList.add('open'); lenis && lenis.stop();
      lbv.play().catch(() => {});
      $('#lbClose').focus();
    };
    const closeFilm = () => {
      if (!lb.classList.contains('open')) return;
      lb.classList.remove('open'); lbv.pause(); lbv.removeAttribute('src'); lbv.load(); lenis && lenis.start();
    };
    $('#lbClose').addEventListener('click', closeFilm);
    lb.addEventListener('click', e => { if (e.target === lb) closeFilm(); });
    addEventListener('keydown', e => { if (e.key === 'Escape') { closeFilm(); closeMenu(); } });
    $$('.film').forEach(card => {
      const v = $('video', card);
      card.addEventListener('click', () => openFilm(+card.dataset.i));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFilm(+card.dataset.i); } });
      if (!fine) return;
      card.addEventListener('mouseenter', () => {
        if (!v.src) v.src = v.dataset.src;
        card.classList.add('peek'); v.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => { card.classList.remove('peek'); v.pause(); });
    });

    // copy email
    const toast = $('#toast'); let tt;
    const say = msg => { toast.textContent = msg; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 2200); };
    $('#emailBtn').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(S.email); say('copied! talk soon :)'); }
      catch { location.href = `mailto:${S.email}`; }
    });
  }

  /* ======================================================================
     MOTION
     ====================================================================== */
  function splitWords(el) {
    const walk = node => {
      Array.from(node.childNodes).forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span'); w.className = 'w';
            const i = document.createElement('span'); i.className = 'wi'; i.textContent = part;
            w.appendChild(i); frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains('w')) walk(n);
      });
    };
    walk(el);
    return $$('.wi', el);
  }

  function motion() {
    G.registerPlugin(ST);
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    /* ---- smooth scroll ---- */
    if (window.Lenis && !reduce) {
      lenis = window.lenis = new Lenis({ lerp: 0.095, smoothWheel: true });
      lenis.on('scroll', ST.update);
      G.ticker.add(time => lenis.raf(time * 1000));
      G.ticker.lagSmoothing(0);
      lenis.stop();
    }

    /* ---- cursor ---- */
    if (fine && !reduce) {
      document.documentElement.classList.add('custom-cursor');
      const cur = $('.cursor'), lab = $('.cursor-label');
      let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, last = '';
      addEventListener('pointermove', e => {
        mx = e.clientX; my = e.clientY; cur.classList.add('on');
        const tgt = e.target.closest ? e.target : null;
        const lbl = tgt && tgt.closest('[data-cursor]');
        const txt = lbl ? lbl.dataset.cursor : '';
        if (txt !== last) { last = txt; lab.textContent = txt; cur.classList.toggle('has-label', !!txt); }
        cur.classList.toggle('is-link', !txt && !!(tgt && tgt.closest('a, button, .chi, .say span')));
      });
      document.addEventListener('pointerleave', () => cur.classList.remove('on'));
      G.ticker.add(() => {
        cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2;
        cur.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      });
    }

    /* ---- eyes everywhere follow the pointer + blink ---- */
    let ex = innerWidth / 2, ey = innerHeight / 2, eyesDirty = true;
    addEventListener('pointermove', e => { ex = e.clientX; ey = e.clientY; eyesDirty = true; });
    G.ticker.add(() => {
      if (!eyesDirty) return; eyesDirty = false;
      $$('.eye').forEach(eye => {
        const r = eye.getBoundingClientRect(); if (!r.width || r.bottom < 0 || r.top > innerHeight) return;
        const dx = ex - (r.left + r.width / 2), dy = ey - (r.top + r.height / 2);
        const a = Math.atan2(dy, dx), m = Math.min(r.width * 0.2, Math.hypot(dx, dy) / 30);
        eye.firstElementChild.style.transform = `translate(${Math.cos(a) * m}px, ${Math.sin(a) * m}px)`;
      });
    });
    const blink = () => { G.to('.eye', { scaleY: 0.1, duration: 0.07, yoyo: true, repeat: 1, ease: 'power1.in' }); G.delayedCall(rand(2.4, 5), blink); };
    G.delayedCall(2, blink);

    /* ---- nav hides on the way down ---- */
    const nav = $('.nav');
    if (lenis) lenis.on('scroll', ({ scroll, direction }) => nav.classList.toggle('hide', direction === 1 && scroll > 300));

    hero();
    marquee();
    intro();
    story();
    pills();
    work();
    films();
    stations();
    contact();
    meter();

    /* ---- page colour shifts per section ---- */
    $$('[data-bg]').forEach(sec => ST.create({
      trigger: sec, start: 'top 55%', end: 'bottom 55%',
      onToggle: self => self.isActive && G.to(document.body, { backgroundColor: sec.dataset.bg, duration: 0.9, ease: 'power2.out', overwrite: 'auto' }),
    }));

    /* ---- headings rise word by word ---- */
    $$('.split').forEach(el => {
      const w = splitWords(el);
      G.from(w, { yPercent: 115, rotate: 5, duration: 1.15, ease: 'expo.out', stagger: 0.07, scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    $$('[data-up]').forEach(el => G.from(el, { y: 36, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'clamp(top 90%)' } }));

    addEventListener('load', () => ST.refresh());
    if (document.fonts) document.fonts.ready.then(() => ST.refresh());
  }

  /* ---- HERO ---- */
  let heroIntro;
  function hero() {
    const chs = $$('.ch'), chis = $$('.chi');
    // plane loop
    const path = $('#planePath'), plane = $('#plane'), L = path.getTotalLength(), o = { p: 0 };
    G.to(o, {
      p: 1, duration: 16, repeat: -1, ease: 'none', onUpdate() {
        const a = path.getPointAtLength(o.p * L), b = path.getPointAtLength(Math.min(L, o.p * L + 2));
        plane.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${Math.atan2(b.y - a.y, b.x - a.x) * 57.3})`);
      },
    });
    $$('.spark').forEach((s, i) => G.to(s, { scale: 0.4, rotate: 45, duration: rand(1.2, 2), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.3 }));
    $$('.cloud').forEach((cl, i) => G.to(cl.firstElementChild, { x: i % 2 ? -24 : 24, duration: rand(5, 8), repeat: -1, yoyo: true, ease: 'sine.inOut' }));

    // entrance (played when the preloader leaves)
    heroIntro = G.timeline({ paused: true })
      .from(chis, { yPercent: 120, rotate: () => rand(-18, 18), scale: 0.6, opacity: 0, duration: 1.4, ease: 'back.out(1.6)', stagger: 0.07 })
      .from('.sun', { scale: 0, duration: 1.4, ease: 'elastic.out(1, .6)' }, 0.1)
      .from('.cloud', { opacity: 0, scale: 0.6, duration: 1.2, ease: 'expo.out', stagger: 0.1 }, 0.3)
      .from(['#heroKicker', '#heroLine', '.hero-foot'], { opacity: 0, y: 24, duration: 1, ease: 'expo.out', stagger: 0.1 }, 0.6)
      .from('.mini-bar i', { width: 0, duration: 1.6, ease: 'power3.inOut' }, 0.9)
      .add(() => {
        chis.forEach((el, i) => G.to(el, { y: -14, duration: 1.8 + (i % 3) * 0.35, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.12 }));
        heroScroll();
      });

    // squish on hover
    chis.forEach(el => el.addEventListener('mouseenter', () => G.fromTo(el, { scaleX: 1.18, scaleY: 0.82 }, { scaleX: 1, scaleY: 1, duration: 1, ease: 'elastic.out(1, .3)' })));

    // mouse parallax on the sky
    if (fine && !reduce) {
      const layers = $$('[data-depth]');
      addEventListener('pointermove', e => {
        const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
        layers.forEach(l => G.to(l, { xPercent: nx * 10 * l.dataset.depth, yPercent: ny * 10 * l.dataset.depth, duration: 1.2, ease: 'power3.out', overwrite: 'auto' }));
      });
    }

  }
  // scroll: letters float away like balloons (set up after the entrance so values don't clash)
  function heroScroll() {
    if (reduce) return;
    const chs = $$('.ch');
    const tl = G.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
    chs.forEach(ch => tl.to(ch, { y: () => -innerHeight * rand(0.55, 1.15), x: () => rand(-80, 80), rotate: () => rand(-40, 40), ease: 'power1.in' }, rand(0, 0.2)));
    tl.to('.sun', { y: () => innerHeight * 0.35, ease: 'none' }, 0)
      .to('.c1', { x: -300, ease: 'none' }, 0).to('.c2', { x: 300, ease: 'none' }, 0).to('.c4', { x: -200, y: -120, ease: 'none' }, 0)
      .to(['#heroLine', '#heroKicker', '.hero-foot'], { opacity: 0, y: -60, ease: 'none' }, 0);
    ST.refresh();
  }

  /* ---- MARQUEE: speed + direction follow your scroll ---- */
  function marquee() {
    const track = $('#mqTrack'), g = $('.mq-group', track);
    let x = 0, v = 0, dir = 1;
    if (lenis) lenis.on('scroll', e => { v = e.velocity; if (Math.abs(v) > 0.3) dir = v > 0 ? 1 : -1; });
    G.ticker.add((_, dt) => {
      const w = g.offsetWidth; if (!w) return;
      x -= (0.9 + Math.min(Math.abs(v) * 0.6, 24)) * dir * (dt / 16.7);
      if (x <= -w) x += w; if (x > 0) x -= w;
      track.style.transform = `translate3d(${x}px,0,0) skewX(${Math.max(-10, Math.min(10, -v * 0.4))}deg)`;
      v *= 0.92;
    });
  }

  /* ---- INTRO: words light up as you read ---- */
  function intro() {
    const words = splitWords($('#introText'));
    G.set(words, { opacity: 0.14 });
    G.to(words, { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: '#introText', start: 'top 78%', end: 'bottom 45%', scrub: 0.6 } });
    G.to('.badge svg', { rotate: 360, ease: 'none', scrollTrigger: { trigger: '.intro', start: 'top bottom', end: 'bottom top', scrub: 1 } });
    G.from('.badge', { scale: 0, rotate: -90, duration: 1.4, ease: 'elastic.out(1,.5)', scrollTrigger: { trigger: '.intro', start: 'top 70%' } });
  }

  /* ---- STORY: a pinned, sideways storybook ---- */
  function drawIn(scope, vars) {
    const d = $$('.d', scope), tx = $$('.t', scope);
    G.set(d, { strokeDasharray: 1, strokeDashoffset: 1, fillOpacity: 0 });
    G.set(tx, { opacity: 0 });
    return G.timeline(vars)
      .to(d, { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut', stagger: 0.06 })
      .to(d, { fillOpacity: 1, duration: 0.6, stagger: 0.04 }, 0.6)
      .to(tx, { opacity: 1, duration: 0.5, stagger: 0.08 }, 0.9);
  }
  function story() {
    const sec = $('#story'); if (!sec) return;
    const track = $('#storyTrack'), cards = $$('.card', track);
    const mm = G.matchMedia();
    mm.add('(min-width: 900px)', () => {
      if (reduce) { cards.forEach(cd => drawIn(cd).progress(1)); return; }
      const dist = () => track.scrollWidth - innerWidth;
      const tween = G.to(track, {
        x: () => -dist(), ease: 'none',
        onUpdate: () => {
          const mid = innerWidth / 2;
          let idx = 0; cards.forEach((cd, i) => { if (cd.getBoundingClientRect().left < mid) idx = i; });
          $('#spLabel').textContent = `chapter ${pad2(idx + 1)} · ${cards[idx].dataset.title.toLowerCase()}`;
          $('#spCount').textContent = `${pad2(idx + 1)} / ${pad2(cards.length)}`;
        },
        scrollTrigger: {
          trigger: sec, pin: '.story-pin', scrub: 1, start: 'top top', end: () => '+=' + dist(), invalidateOnRefresh: true,
          onUpdate: self => { $('#spFill').style.transform = `scaleX(${self.progress})`; },
        },
      });
      cards.forEach(cd => {
        drawIn($('.card-art', cd), { scrollTrigger: { trigger: cd, containerAnimation: tween, start: 'left 70%', toggleActions: 'play none none reverse' } });
        G.fromTo($('.art, img', cd), { xPercent: 10 }, { xPercent: -10, ease: 'none', scrollTrigger: { trigger: cd, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
        G.fromTo(cd, { rotate: 3, y: 30 }, { rotate: -3, y: -10, ease: 'none', scrollTrigger: { trigger: cd, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
      });
    });
    mm.add('(max-width: 899px)', () => {
      cards.forEach(cd => {
        drawIn($('.card-art', cd), { scrollTrigger: { trigger: cd, start: 'top 75%' } });
        G.from(cd, { y: 60, rotate: 2, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: cd, start: 'top 92%' } });
      });
    });
  }

  /* ---- SKILLS: real physics with Matter.js ---- */
  function pills() {
    const box = $('#pillBox'); if (!box) return;
    const els = $$('.pill', box);
    const M = window.Matter;
    if (!M || reduce) { box.classList.add('static'); return; }
    const { Engine, Bodies, Body, Composite, Mouse, MouseConstraint } = M;
    let engine, walls = [], bodies = [], running = false;

    const build = () => {
      const W = box.clientWidth, H = box.clientHeight, T = 400;
      engine = Engine.create(); engine.gravity.y = 1.1;
      walls = [
        Bodies.rectangle(W / 2, H + T / 2, W * 4, T, { isStatic: true }),
        Bodies.rectangle(-T / 2, H / 2 - H, T, H * 4, { isStatic: true }),
        Bodies.rectangle(W + T / 2, H / 2 - H, T, H * 4, { isStatic: true }),
        Bodies.rectangle(W / 2, -H * 1.6 - T / 2, W * 4, T, { isStatic: true }),
      ];
      bodies = els.map((el, i) => {
        const w = el.offsetWidth, h = el.offsetHeight;
        const b = Bodies.rectangle(rand(w / 2 + 10, Math.max(w / 2 + 11, W - w / 2 - 10)), -h - i * (h * 0.9), w, h, {
          chamfer: { radius: h / 2 - 1 }, restitution: 0.45, friction: 0.08, frictionAir: 0.012, density: 0.002, angle: rand(-0.5, 0.5),
        });
        b.el = el; b.w = w; b.h = h; G.set(el, { opacity: 1 });
        return b;
      });
      Composite.add(engine.world, [...walls, ...bodies]);

      if (fine) {
        const mouse = Mouse.create(box);
        ['mousewheel', 'DOMMouseScroll', 'wheel'].forEach(ev => mouse.element.removeEventListener(ev, mouse.mousewheel));
        const mc = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.18, angularStiffness: 0, render: { visible: false } } });
        const release = () => { mouse.button = -1; };
        addEventListener('mouseup', release); box.addEventListener('mouseleave', release);
        Composite.add(engine.world, mc);
      } else {
        box.addEventListener('pointerdown', () => bodies.forEach(b => Body.setVelocity(b, { x: rand(-8, 8), y: rand(-16, -9) })));
        $('.pill-hint', box).textContent = 'tap to shake ↘';
      }
    };

    ST.create({ trigger: box, start: 'top 70%', once: true, onEnter: () => { build(); running = true; } });
    ST.create({ trigger: box, start: 'top bottom', end: 'bottom top', onToggle: self => { running = self.isActive && !!engine; } });

    G.ticker.add((_, dt) => {
      if (!running || !engine) return;
      Engine.update(engine, Math.min(dt, 33));
      for (const b of bodies) {
        b.el.style.transform = `translate3d(${b.position.x - b.w / 2}px, ${b.position.y - b.h / 2}px, 0) rotate(${b.angle}rad)`;
      }
    });

    let rw = innerWidth;
    addEventListener('resize', () => {
      if (!engine || Math.abs(innerWidth - rw) < 40) return; rw = innerWidth;
      const W = box.clientWidth, H = box.clientHeight, T = 400;
      Body.setPosition(walls[0], { x: W / 2, y: H + T / 2 });
      Body.setPosition(walls[2], { x: W + T / 2, y: H / 2 - H });
      bodies.forEach(b => Body.setPosition(b, { x: Math.min(b.position.x, W - b.w / 2), y: Math.min(b.position.y, H - b.h) }));
    });
  }

  /* ---- WORK: rows reveal, a cover follows the cursor ---- */
  function work() {
    const list = $('#projList'); if (!list) return;
    G.from($$('.proj', list), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: list, start: 'top 85%' } });
    if (!fine || reduce) return;
    const prev = $('#preview');
    G.set(prev, { xPercent: -50, yPercent: -50, scale: 0 });
    let mx = 0, my = 0, px = 0, py = 0, vis = false, cur = -1;
    const projects = S.projects || [];
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; });
    $$('.proj', list).forEach(li => {
      const row = $('.proj-row', li), i = +li.dataset.i;
      row.addEventListener('mouseenter', () => {
        if (li.classList.contains('open')) return;
        if (cur !== i) { prev.innerHTML = cover(projects[i], i); cur = i; }
        vis = true; G.to(prev, { scale: 1, duration: 0.6, ease: 'expo.out', overwrite: 'auto' });
      });
      row.addEventListener('mouseleave', () => { vis = false; G.to(prev, { scale: 0, duration: 0.45, ease: 'expo.in', overwrite: 'auto' }); });
      row.addEventListener('click', () => { vis = false; G.to(prev, { scale: 0, duration: 0.3, overwrite: 'auto' }); });
    });
    G.ticker.add(() => {
      const dx = mx - px; px += dx * 0.14; py += (my - py) * 0.14;
      prev.style.left = px + 'px'; prev.style.top = py + 'px';
      if (vis) G.set(prev.firstElementChild || prev, { rotate: Math.max(-12, Math.min(12, dx * 0.08)) });
    });
  }

  /* ---- FILMS: pinned photos drift at different speeds ---- */
  function films() {
    const cards = $$('.film'); if (!cards.length) return;
    G.from(cards, { y: 120, rotate: (i) => [-8, 6, -4][i % 3], opacity: 0, duration: 1.3, ease: 'expo.out', stagger: 0.12, clearProps: 'transform,opacity', scrollTrigger: { trigger: '#filmGrid', start: 'top 85%' } });
    if (reduce || innerWidth < 900) return;
    cards.forEach((cd, i) => G.to($('.film-frame', cd), { y: [-40, 30, -70][i % 3], ease: 'none', scrollTrigger: { trigger: '#filmGrid', start: 'top bottom', end: 'bottom top', scrub: 1 } }));
  }

  /* ---- NEXT STATIONS: the track draws itself, stations light up ---- */
  function stations() {
    const wrap = $('#stations'); if (!wrap) return;
    const ghost = $('#stGhost'), line = $('#stLine'), mp = $('#stMaskPath'), plane = $('#stPlane'), svgEl = $('.st-svg', wrap);
    const rows = $$('.station', wrap);
    let len = 1, dots = [], prog = { p: 0 };
    const build = () => {
      const r = wrap.getBoundingClientRect();
      dots = rows.map(row => { const b = $('.st-dot', row).getBoundingClientRect(); return { x: b.left + b.width / 2 - r.left, y: b.top + b.height / 2 - r.top, row }; });
      if (!dots.length) return;
      let d = `M${dots[0].x} ${dots[0].y}`;
      for (let i = 1; i < dots.length; i++) {
        const a = dots[i - 1], b = dots[i], my = (a.y + b.y) / 2;
        d += ` C${a.x} ${my} ${b.x} ${my} ${b.x} ${b.y}`;
      }
      const end = dots[dots.length - 1];
      d += ` C${end.x} ${end.y + 60} ${r.width / 2} ${end.y + 40} ${r.width / 2} ${end.y + 110}`;
      svgEl.setAttribute('viewBox', `0 0 ${r.width} ${r.height + 120}`);
      svgEl.style.height = (r.height + 120) + 'px';
      [ghost, line, mp].forEach(el => el.setAttribute('d', d));
      len = mp.getTotalLength();
      mp.style.strokeDasharray = `${len} ${len}`;
      draw();
    };
    const draw = () => {
      const l = Math.max(0.001, prog.p * len);
      mp.style.strokeDashoffset = len - l;
      const a = mp.getPointAtLength(l), b = mp.getPointAtLength(Math.min(len, l + 2));
      plane.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${Math.atan2(b.y - a.y, b.x - a.x) * 57.3})`);
      dots.forEach((dt, i) => dt.row.classList.toggle('lit', i === 0 || a.y >= dt.y - 4));
    };
    build();
    ST.addEventListener('refresh', build);
    if (reduce) { prog.p = 1; draw(); return; }
    G.to(prog, { p: 1, ease: 'none', onUpdate: draw, scrollTrigger: { trigger: wrap, start: 'top 62%', end: 'bottom 50%', scrub: 0.8 } });
  }

  /* ---- CONTACT: bouncy letters ---- */
  function contact() {
    const letters = $$('#say span');
    G.from(letters, { y: -260, rotate: () => rand(-50, 50), opacity: 0, duration: 1.4, ease: 'bounce.out', stagger: 0.07, scrollTrigger: { trigger: '#say', start: 'clamp(top 80%)' } });
    letters.forEach(l => l.addEventListener('mouseenter', () => {
      if (G.isTweening(l)) return;
      G.timeline().to(l, { y: -50, rotate: rand(-14, 14), duration: 0.28, ease: 'power2.out' }).to(l, { y: 0, rotate: 0, duration: 0.9, ease: 'bounce.out' });
    }));
    G.from('#emailBtn, .links a', { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: '#emailBtn', start: 'clamp(top 92%)' } });
  }

  /* ---- reading meter (bottom left) ---- */
  function meter() {
    const m = $('.meter'), fill = $('#meterFill'), txt = $('#meterTxt');
    ST.create({
      start: 0, end: 'max', onUpdate: self => {
        const v = self.progress;
        m.classList.toggle('show', v > 0.04);
        fill.style.width = `${Math.max(0, v * 100)}%`;
        txt.textContent = v > 0.985 ? '100% · page loaded. me: not yet' : `${Math.round(v * 100)}% read`;
      },
    });
  }

  /* ======================================================================
     PRELOADER: a loading bar with eyes counts to 100
     ====================================================================== */
  function preloader() {
    const num = $('#preNum'), fill = $('.pre-fill'), txt = $('#preTxt'), pre = $('.preloader');
    const done = () => {
      document.body.classList.remove('is-loading');
      lenis && lenis.start();
      ST.refresh();
    };
    if (reduce) { pre.remove(); done(); heroIntro && heroIntro.progress(1); return; }
    const o = { v: 0 };
    const upd = () => { const v = Math.round(o.v); num.textContent = v; fill.style.width = `${Math.max(14, v)}%`; };
    const ready = Promise.race([
      Promise.all([
        new Promise(r => (document.readyState === 'complete' ? r() : addEventListener('load', r, { once: true }))),
        document.fonts ? document.fonts.ready : Promise.resolve(),
      ]),
      new Promise(r => setTimeout(r, 3000)),
    ]);
    const jokes = ['finding motivation…', 'googling “how to be cool”…', 'almost there…'];
    G.timeline()
      .to(o, { v: 46, duration: 0.9, ease: 'power2.inOut', onUpdate: upd, onStart: () => (txt.textContent = jokes[0]) })
      .to(o, { v: 82, duration: 0.8, ease: 'power1.inOut', onUpdate: upd, onStart: () => (txt.textContent = jokes[1]) })
      .to(o, { v: 99, duration: 0.7, ease: 'power2.out', onUpdate: upd, onStart: () => (txt.textContent = jokes[2]) })
      .add(() => ready.then(() => {
        txt.textContent = '99%… okay, here we go';
        G.timeline({ delay: 0.5 })
          .to(o, { v: 100, duration: 0.25, onUpdate: upd })
          .to('.pre-inner', { y: -40, opacity: 0, duration: 0.6, ease: 'power3.in' }, '+=0.15')
          .to(pre, { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.inOut' }, '-=0.2')
          .add(() => heroIntro && heroIntro.play(), '-=0.65')
          .add(() => { pre.remove(); done(); });
      }));
  }

  /* ======================================================================
     GO
     ====================================================================== */
  render();
  basics();
  if (G && ST) {
    try { motion(); preloader(); }
    catch (err) {
      console.error(err);
      document.documentElement.classList.add('static');
      document.body.classList.remove('is-loading');
    }
  } else {
    // animation library didn't load (offline?) — show everything, no motion
    document.documentElement.classList.add('static');
    document.body.classList.remove('is-loading');
    $('#pillBox') && $('#pillBox').classList.add('static');
    $$('.station').forEach(s => s.classList.add('lit'));
  }
})();
