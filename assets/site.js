/* Renders the site from window.SITE (content/site.js).
   You shouldn't need to edit this file to change content or section order. */
(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;          // 'home' | 'case'
  const onHome = page === 'home';
  const live = S.sections.filter(s => s.on);
  const num = i => String(i).padStart(2, '0');
  const kindLabel = { add: 'Added', imp: 'Improved', fix: 'Fixed' };
  const caseUrl = c => `case.html?id=${encodeURIComponent(c.id)}`;
  const tags = list => list && list.length ? `<div class="tags">${list.map(t => `<span>${t}</span>`).join('')}</div>` : '';
  // Small section labels ("01 — How I work") switched off 2026-10-09: big headings only (the side menu already numbers the sections)
  const eyebrow = () => '';

  /* ---------------- Rail ---------------- */
  function rail() {
    const p = S.person;
    const href = id => (onHome ? '' : 'index.html') + '#' + id;
    return `
      <a href="${href('top')}" class="brand">
        <i class="brand-bar" aria-hidden="true"></i>
        <span class="brand-name">${(p.nameLines || [p.name]).map(n => `<b>${n}</b>`).join('')}</span>
        <span class="brand-title">${p.title}</span>
      </a>
      ${p.status ? `<div class="status"><span class="dot"></span>${p.status}</div>` : ''}
      <ul class="nav">
        ${live.map((s, i) => {
          const active = (page === 'specs' && s.id === 'specs') || ((page === 'case' || page === 'cases') && s.type === 'cases');
          return `<li><a href="${s.href || href(s.id)}" data-id="${s.id}" class="${active ? 'active' : ''}"><span class="n">${num(i)}</span>${s.label}</a></li>`;
        }).join('')}
      </ul>
      <div class="rail-foot">
        <div class="socials">
          ${p.links.map(l => `<a href="${l.url}" aria-label="${l.name}" title="${l.name}">${l.label}</a>`).join('')}
          ${p.resume ? `<a href="${p.resume}" aria-label="Download resume" title="Download resume" download>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
          </a>` : ''}
        </div>
      </div>`;
  }

  /* ---------------- Section renderers ---------------- */
  const R = {};

  R.intro = (s) => {
    const d = S.intro;
    const casesSec = live.find(x => x.type === 'cases');
    return `
    <section class="hero" id="${s.id}">
      <div class="wrap">
        <div class="hero-main reveal">
          ${d.release ? `<div class="release"><span class="tag">${d.release.tag}</span>${d.release.text}</div>` : ''}
          ${d.focus && d.focus.length ? `<p class="focus mono">${d.focus.map(f => `<span>${f}</span>`).join('')}</p>` : ''}
          <h1>${d.headline}</h1>
          <p class="sub">${d.sub}</p>
          ${tags(d.skills)}
          <div class="cta-row">
            ${casesSec ? `<a href="#${casesSec.id}" class="hero-link">See what I’ve shipped →</a>` : ''}
          </div>
        </div>
        <div class="kpi-row reveal">${d.kpis.map(([v, l, href]) => href
          ? `<a class="kpi" href="${href}"><b>${v}</b><span>${l}</span></a>`
          : `<div class="kpi"><b>${v}</b><span>${l}</span></div>`).join('')}</div>
        ${d.companies && d.companies.length ? `
        <div class="logos">
          <span class="mono">Shipped with</span>
          <div class="track">${d.companies.map(c => `<span>${c}</span>`).join('')}</div>
        </div>` : ''}
      </div>
    </section>`;
  };

  /* Editorial case card (2026-10-09): logo + "Company · Sector", title, a thin row of numbers, link.
     No pills, no grey box; the featured card is the same layout, wider, with 3 numbers.
     compact = home page (no summary). */
  function caseCard(c, compact) {
    const nums = c.featured
      ? [c.metric, ...(c.results || []).filter(r => !c.metric || r[0] !== c.metric[0])].filter(Boolean).slice(0, 3)
      : (c.heroStats || (c.metric ? [c.metric] : [])).slice(0, 2);
    return `
      <article class="case${c.featured ? ' feature' : ''} reveal">
        <div class="case-co">
          ${c.logo ? `<img src="${encodeURI(c.logo)}" alt="">` : ''}
          <span>${[c.cardCompany || c.company, (c.tags || [])[0]].filter(Boolean).join(' · ')}</span>
        </div>
        <h3>${c.cardTitle || c.title}</h3>
        ${!compact && c.summary ? `<p>${c.summary}</p>` : ''}
        ${nums.length ? `<div class="case-nums">${nums.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('')}</div>` : ''}
        <a href="${caseUrl(c)}" class="more stretch">Read the case study</a>
      </article>`;
  }

  R.cases = (s, i) => {
    const shown = S.cases.filter(c => c.home !== false).slice(0, 3);
    return `
    <section id="${s.id}">
      <div class="wrap">
        ${eyebrow(i, s.label)}
        <h2>${S.shippedHeading || 'Case studies'}</h2>
        <div class="cases">${shown.map(c => caseCard(c, true)).join('')}</div>
        ${S.cases.length > shown.length ? `<a class="all-cases btn btn-ghost" href="cases.html">See all ${S.cases.length} case studies →</a>` : ''}
      </div>
    </section>`;
  };

  /* ---------------- All case studies page ---------------- */
  function casesPage() {
    document.title = `Case studies — ${S.person.name}`;
    return `
    <section class="cs-head">
      <div class="wrap">
        <a class="back" href="index.html#work">← Back to home</a>
        <h2>All case studies</h2>
        <p class="lede">${S.cases.length} products and platforms, from my first build to global launches. Open any one for the full story.</p>
        <div class="cases">${S.cases.map(c => caseCard(c, false)).join('')}</div>
      </div>
    </section>`;
  }

  function logEntry(e) {
    const logo = e.logo
      ? `<img class="co-logo" src="${encodeURI(e.logo)}" alt="" loading="lazy">`
      : `<span class="co-logo co-initials" aria-hidden="true">${e.initials || e.company.slice(0, 2)}</span>`;
    const links = (e.cases || []).map(id => S.cases.find(c => c.id === id)).filter(Boolean);
    return `
      <div class="entry ${e.current ? 'current' : ''}" id="v${e.ver.replace('.', '-')}">
        <div class="ver"><b>${e.ver}</b><span>${e.dates}</span>${e.contract ? '<span class="contract">Contract</span>' : ''}</div>
        <div class="entry-body">
          <div class="entry-head">${logo}<div><h3>${e.role}</h3><span class="co">${e.company}</span></div></div>
          ${e.highlight ? `<p class="highlight">${e.highlight}</p>` : ''}
          ${e.wins ? `<ul class="wins">${e.wins.map(w => `<li>${w}</li>`).join('')}</ul>` : ''}
          ${e.more && e.more.length ? `
          <details class="more-changes">
            <summary><span class="lbl-more">Show more</span><span class="lbl-less">Show less</span></summary>
            <ul class="wins">${e.more.map(w => w.startsWith('## ') ? `<li class="sub">${w.slice(3)}</li>` : `<li>${w}</li>`).join('')}</ul>
          </details>` : ''}
          ${links.length ? `<div class="entry-links">${links.map(c => `<a class="inline-link" href="${caseUrl(c)}">${links.length > 1 ? `Case study: ${c.short || c.title}` : 'Read the case study'} →</a>`).join('')}</div>` : ''}
        </div>
      </div>`;
  }

  R.changelog = (s, i) => {
    const all = S.changelog, n = S.changelogShown || 4;
    const shown = all.slice(0, n), older = all.slice(n);
    const groups = [...new Set(older.map(e => e.ver.split('.')[0]))];
    return `
    <section id="${s.id}">
      <div class="wrap">
        ${eyebrow(i, s.label)}
        <h2>${S.changelogHeading || 'Changelog'}</h2>
        <div class="log">${shown.map(logEntry).join('')}</div>
        ${older.length ? `
        <details class="older">
          <summary class="btn btn-ghost"><span class="lbl-more">Show earlier versions (${older.length})</span><span class="lbl-less">Hide earlier versions</span></summary>
          ${groups.map(g => `
            <h4 class="phase"><b>${g}.x</b> ${(S.phases || {})[g] || ''}</h4>
            <div class="log">${older.filter(e => e.ver.split('.')[0] === g).map(logEntry).join('')}</div>`).join('')}
        </details>` : ''}
      </div>
    </section>`;
  };

  R.writing = (s, i) => `
    <section id="${s.id}">
      <div class="wrap">
        ${eyebrow(i, s.label)}
        <h2>Work examples and articles</h2>
        <p class="lede">Real artefacts: specs, decks, and things I've written about building products.</p>
        <div class="writing">
          ${S.writing.map(w => `
            <a href="${w.url}" class="post reveal" target="_blank" rel="noopener">
              <span class="type ${w.type === 'Article' ? 't-article' : ''}">${w.type}</span>
              <h4>${w.title}</h4>
              <p>${w.blurb || ''}</p>
              <div class="src"><span>${w.source || ''}</span><span>${w.date || ''}</span></div>
            </a>`).join('')}
        </div>
      </div>
    </section>`;

  /* Short text with an inline "Read more" that reveals the continuation underneath. */
  const textMore = (short, more) => `
    <p class="rm-short">${short}${more ? ` <button type="button" class="rm-btn rm-open" aria-expanded="false">Read more</button>` : ''}</p>
    ${more ? `<div class="rm-more" hidden>${more}<button type="button" class="rm-btn rm-close">Show less</button></div>` : ''}`;

  R.approach = (s, i) => {
    const a = S.approach;
    return `
    <section id="${s.id}">
      <div class="wrap">
        ${eyebrow(i, s.label)}
        <h2>${a.heading}</h2>
        ${a.sub ? `<p class="lede">${a.sub}</p>` : ''}
        <div class="method reveal">
          <div class="ppp">
            ${a.frame.map(f => `
              <div class="ppp-item">
                <span class="mono">${f.label}</span>
                <h4>${f.title}</h4>
                ${textMore(f.short, f.more)}
              </div>`).join('')}
          </div>
          <div class="aaa">
            <div class="stages">
              ${a.stages.map(st => `
                <div class="stage">
                  <div class="stage-body">
                    <h4>${st.name}</h4>
                    ${textMore(st.short, st.more)}
                  </div>
                  <div class="stage-d mono">${st.d}</div>
                </div>`).join('')}
            </div>
            ${a.loop ? `<p class="loop"><b aria-hidden="true">↻</b> ${a.loop}</p>` : ''}
          </div>
        </div>
      </div>
    </section>`;
  };

  R.toolkit = (s, i) => `
    <section id="${s.id}">
      <div class="wrap">
        ${eyebrow(i, s.label)}
        <h2>Feature set</h2>
        <div class="matrix">
          ${S.toolkit.map(g => `
            <div class="group reveal"><h4>${g.group}</h4><p>${g.note}</p>
              ${g.skills.map(([n, l]) => `<div class="skill">${n}<span class="lvl">${[1, 2, 3, 4, 5].map(x => `<i class="${x <= l ? 'on' : ''}"></i>`).join('')}</span></div>`).join('')}
            </div>`).join('')}
        </div>
      </div>
    </section>`;

  const who = r => `
    <div class="who"><div><b>${r.name}</b><span>${r.role}</span></div></div>`;

  /* First paragraph shows; the rest sits behind "Read more". */
  const reviewText = paras => textMore(paras[0], paras.slice(1).map(p => `<p>${p}</p>`).join(''));

  /* ---------------- Specs page (specs.html) ---------------- */
  const ICONS = {
    kanban: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.2A5 5 0 0 1 21 19"/>',
    shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    bank: '<path d="M3 10 12 4l9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    gov: '<path d="M4 20h16M6 20V10h12v10M12 4l7 6H5l7-6Z"/><path d="M10 20v-5h4v5"/>',
    bolt: '<path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z"/>',
    antenna: '<path d="M12 10v11M8 21h8"/><circle cx="12" cy="8" r="2"/><path d="M7.8 4.8a6 6 0 0 0 0 6.4M16.2 4.8a6 6 0 0 1 0 6.4"/>',
    flag: '<path d="M5 21V4h11l-2 4 2 4H5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    doc: '<path d="M14 3H6v18h12V7l-4-4Z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
  };
  const icon = k => `<svg class="sp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k] || ''}</svg>`;
  const toolTile = ([name, slug]) => `
    <div class="tool">
      ${slug ? `<span class="tool-ico" style="--ico:url('https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg')" aria-hidden="true"></span>`
             : `<span class="tool-ico tool-init" aria-hidden="true">${name.replace(/[^A-Za-z ]/g, '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}</span>`}
      <span class="tool-name">${name}</span>
    </div>`;

  // Small round badge next to a certification name; a neutral tick when there is no badge yet (e.g. ISTQB)
  const certIcon = b => `<span class="cert-ico">${!b
    ? icon('shield')
    : b.img
      ? `<img src="${encodeURI(b.img)}" alt="">`
      : `<span class="badge-ico" style="--ico:url('https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${b.icon}.svg');--c:${b.color || 'var(--ink)'}"></span>`}</span>`;

  function specsPage() {
    const sp = S.specs;
    document.title = `Specs — ${S.person.name}`;
    return `
    <section class="sp-head">
      <div class="wrap">
        <h1 class="sp-title">${sp.heading}</h1>
      </div>
    </section>

    <section class="sp-sec sp-first">
      <div class="wrap">
        <div class="cap-map">
          ${sp.expertise.map(g => `
            <div class="cap">
              <h3>${icon(g.icon)}${g.group}</h3>
              <ul>${g.items.map(x => `<li>${x}</li>`).join('')}</ul>
            </div>`).join('')}
          <div class="cap-core"><span>${sp.core}</span></div>
        </div>
      </div>
    </section>

    <section class="sp-sec">
      <div class="wrap">
        <h2 class="sp-h">Sectors ${sp.sectorsNote ? `<small>${sp.sectorsNote}</small>` : ''}</h2>
        <div class="sector-grid">
          ${sp.sectors.map(g => `
            <div class="sector">
              ${icon(g.icon)}
              <h3>${g.group}</h3>
              <ul>${g.items.map(x => `<li>${x}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sp-sec">
      <div class="wrap">
        <h2 class="sp-h">Education</h2>
        ${sp.educationIntro ? `<p class="sp-intro">${sp.educationIntro}</p>` : ''}
        <div class="cred-edu">
          ${sp.education.map(e => `
            <div class="edu-card">
              <div class="edu-top">
                ${e.logo ? `<img src="${encodeURI(e.logo)}" alt="">` : ''}
                <div><h3>${e.degree}</h3><p>${e.school} · ${e.years}</p>${e.result ? `<span class="edu-result">${e.result}</span>` : ''}</div>
              </div>
              ${e.modules ? `
              <details class="edu-mods">
                <summary>Show modules</summary>
                <dl>${e.modules.map(([g, m]) => `<dt>${g}</dt><dd>${m}</dd>`).join('')}</dl>
              </details>` : ''}
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sp-sec">
      <div class="wrap">
        <h2 class="sp-h">Certifications</h2>
        <div class="cert-cols">
          ${sp.certifications.map(g => `
            <div><h3>${g.group}</h3><ul>${g.items.map(x => `<li>${certIcon(sp.badges.find(b => b.name === x))}<span>${x}</span></li>`).join('')}</ul></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sp-sec">
      <div class="wrap">
        <h2 class="sp-h">Tools</h2>
        ${sp.tools.map(g => `
          <div class="tool-group">
            <h3>${g.group}</h3>
            <div class="tool-grid">${g.items.map(toolTile).join('')}</div>
          </div>`).join('')}
      </div>
    </section>`;
  }

  // One review card: short line (their own words), name, button. The full text sits hidden in the card
  // and is shown in the grid's shared panel, placed right under the row of the card that was opened.
  // Where a recommendation leads: r.exp = a case study id ('reward-gmm') or a Career version ('3.1').
  // Returns {href, logo, initials, label} using the logo already stored on that case study / Career entry.
  const revExp = r => {
    if (!r.exp) return null;
    const c = S.cases.find(x => x.id === r.exp);
    if (c) return { href: caseUrl(c), logo: c.logo, label: `${c.cardCompany || c.company}: case study` };
    const e = (S.changelog || []).find(x => x.ver === r.exp);
    if (e) return { href: `index.html#v${e.ver.replace('.', '-')}`, logo: e.logo, initials: e.initials, label: `${e.company}: ${e.role}` };
    return null;
  };
  const revCard = r => {
    const x = revExp(r);
    // logo shown under the name; the whole open panel links to the experience (stretched link)
    const expLink = x ? `<span class="rev-exp">${x.logo
      ? `<img src="${encodeURI(x.logo)}" alt="">` : `<span class="co-initials">${x.initials || ''}</span>`}</span><a class="rev-panel-link" href="${x.href}" aria-label="${x.label}"></a>` : '';
    return `
    <figure class="review reveal">
      <blockquote class="pull">“${r.pull || r.text[0]}”</blockquote>
      ${who(r)}
      <button type="button" class="rev-open" aria-expanded="false"><span class="lbl-more">Read full recommendation</span><span class="lbl-less">Hide full recommendation</span></button>
      <div class="rev-src" hidden><div class="rev-panel-who">${who(r)}${expLink}</div><div class="rev-panel-text">${r.text.map(p => `<p>${p}</p>`).join('')}</div></div>
    </figure>`;
  };

  R.reviews = (s, i) => {
    const rv = S.reviews;
    const total = rv.featured.length + rv.more.length;
    return `
    <section id="${s.id}">
      <div class="wrap">
        ${eyebrow(i, s.label)}
        <h2>${rv.heading}</h2>
        ${rv.sub ? `<p class="lede">${rv.sub}</p>` : ''}
        <div class="reviews">${rv.featured.map(revCard).join('')}<div class="rev-panel" hidden></div></div>
        <details class="rev-all">
          <summary class="btn btn-ghost"><span class="lbl-more">Show all ${total} recommendations</span><span class="lbl-less">Show fewer</span></summary>
          <div class="reviews reviews-more">${rv.more.map(revCard).join('')}<div class="rev-panel" hidden></div></div>
        </details>
      </div>
    </section>`;
  };

  R.roadmap = (s, i) => `
    <section id="${s.id}">
      <div class="wrap">
        ${eyebrow(i, s.label)}
        <h2>What I'm working on next</h2>
        <div class="board">
          ${Object.entries(S.roadmap).map(([col, items]) => `
            <div class="col"><div class="col-h"><b>${col}</b></div>
              ${items.map(([k, t, p]) => `<div class="ticket reveal"><span class="mono">${k}</span><b>${t}</b><p>${p}</p></div>`).join('')}
            </div>`).join('')}
        </div>
      </div>
    </section>`;

  R.contact = (s, i) => {
    const c = S.contact, p = S.person;
    return `
    <section class="contact" id="${s.id}">
      <div class="wrap">
        <div class="cta-card reveal">
          <div style="position:relative;z-index:1">
            ${c.photo ? `<img class="cta-photo" src="${c.photo}" alt="${p.name}">` : ''}
            ${eyebrow(i, s.label)}
            <h2>${c.headline}</h2>
            <p class="lede">${c.sub}</p>
            ${c.location ? `<p class="cta-loc">${c.location}</p>` : ''}
            ${c.cta ? `<div class="cta-row" style="margin-top:28px"><a href="${c.cta.url}" class="btn btn-accent">${c.cta.label}</a></div>` : ''}
          </div>
          <div class="cta-list">
            ${p.links.map(l => `<a href="${l.url}">${l.name}<span>${l.handle || ''}</span></a>`).join('')}
            ${p.resume ? `<a href="${p.resume}">Resume<span>PDF</span></a>` : ''}
          </div>
        </div>
      </div>
    </section>`;
  };

  /* ---------------- Case study page ---------------- */
  /* New case study layout (layout: 'v2'): header with logo, tinted hero numbers, fact cards, partner logos,
     quote, then the story as icon cards (long sections full width) behind "Read the full story". Wording unchanged. */
  function casePageV2(c, next) {
    const blockText = b => [].concat(b.p).map(t => t.trim().startsWith('<') ? t : `<p>${t}</p>`).join('');
    const isLong = b => [].concat(b.p).join(' ').replace(/<[^>]+>/g, '').length > 520 || [].concat(b.p).some(t => /<(ol|ul)\b/.test(t));
    const quotes = [c.quote, c.quote2].filter(Boolean);
    // Short sections pair up two per row; a short one without a short neighbour goes full width (no half-empty rows).
    const story = c.story || [];
    const wide = story.map(isLong);
    for (let k = 0; k < story.length; k++) {
      if (wide[k]) continue;
      if (k + 1 < story.length && !wide[k + 1]) { k++; continue; }
      wide[k] = true;
    }
    return `
    <section class="cs2-head">
      <div class="wrap">
        <a class="back" href="cases.html">← All case studies</a>
        ${c.label ? `<span class="cs2-label">${c.label}</span>` : ''}
        <h1>${c.title}</h1>
        <div class="cs2-co">
          ${c.logo ? `<img src="${encodeURI(c.logo)}" alt="">` : ''}
          <div><b>${c.company}</b><span>${[c.role, c.year].filter(Boolean).join(' · ')}</span></div>
        </div>
        ${c.heroStats ? `<div class="cs2-hero">${c.heroStats.map(([v, l]) => `<div><b>${v}</b><p>${l}</p></div>`).join('')}</div>` : ''}
        ${c.facts ? `<div class="cs2-facts">${c.facts.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('')}</div>` : ''}
        ${c.partners ? `
        <div class="cs2-partners">
          <span class="cs2-label">${c.partnersLabel || 'Partners'}</span>
          <div class="cs2-plist">${c.partners.map(([n, logo]) => `<div class="pp">${logo ? `<img src="${encodeURI(logo)}" alt="">` : `<i>${n.slice(0, 2)}</i>`}<b>${n}</b></div>`).join('')}</div>
        </div>` : ''}
        ${c.recognition ? `
        <div class="cs2-partners">
          <span class="cs2-label">Recognition</span>
          <div class="cs2-plist">${c.recognition.map(r => `<div class="pp"><i class="rec">${icon('star')}</i><b>${r}</b></div>`).join('')}</div>
        </div>` : ''}
        ${quotes.length ? quotes.slice(0, 1).map(q => `
        <figure class="cs2-quote">
          <blockquote>“${q.text}”</blockquote>
          <figcaption><b>${q.name}</b> · ${q.role}${q.source ? ` · <small>${q.source}</small>` : ''}</figcaption>
        </figure>`).join('') : ''}
      </div>
    </section>
    <section class="cs2-story-sec">
      <div class="wrap">
        <div class="cs2-story-head">
          <h2>The full story</h2>
          <button type="button" class="cs2-toggle" aria-expanded="true" aria-controls="cs2-story">
            <span class="lbl-more">Read the full story</span><span class="lbl-less">Hide the full story</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
          </button>
        </div>
        <div class="cs2-story is-open" id="cs2-story"><div>
          <div class="cs2-steps">
            ${story.map((b, k) => `
              <article class="cs2-step">
                <span class="cs2-ic">${icon((c.storyIcons || {})[b.h] || 'doc')}</span>
                <h3>${b.h}</h3>
                ${blockText(b)}
              </article>`).join('')}
          </div>
          ${quotes.slice(1).map(q => `
          <figure class="cs2-quote">
            <blockquote>“${q.text}”</blockquote>
            <figcaption><b>${q.name}</b> · ${q.role}${q.source ? ` · <small>${q.source}</small>` : ''}</figcaption>
          </figure>`).join('')}
        </div></div>
      </div>
    </section>
    ${next && next !== c ? `
    <section class="contact">
      <div class="wrap">
        <a class="cs-next" href="${caseUrl(next)}"><div><span class="mono" style="color:var(--muted)">Next case study</span><b>${next.title}</b></div><span class="more"></span></a>
      </div>
    </section>` : ''}`;
  }

  function casePage() {
    const id = new URLSearchParams(location.search).get('id');
    const idx = S.cases.findIndex(c => c.id === id);
    const c = S.cases[idx];
    if (!c) return `<section><div class="wrap"><a class="back" href="cases.html">← All case studies</a><h2>Case study not found</h2></div></section>`;
    document.title = `${c.title} — ${S.person.name}`;
    const next = S.cases[(idx + 1) % S.cases.length];
    if (c.layout === 'v2') return casePageV2(c, next);
    const facts = [['Company', c.company], ['When', c.year], ['My role', c.role], ['Timeline', c.timeline]].filter(x => x[1]);
    const results = c.results || (c.metric ? [c.metric] : []);
    return `
    <section class="cs-head">
      <div class="wrap">
        <a class="back" href="cases.html">← All case studies</a>
        ${tags(c.tags)}
        <h1>${c.title}</h1>
        ${c.summary ? `<p class="lede">${c.summary}</p>` : ''}
        <div class="cs-facts">${facts.map(([k, v]) => `<div><span>${k}</span>${v}</div>`).join('')}</div>
        ${results.length ? `<div class="cs-results">${results.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('')}</div>` : ''}
      </div>
    </section>
    <section>
      <div class="wrap cs-body">
        ${c.story && c.story.length
          ? c.story.map(b => `<div class="cs-block reveal"><h3>${b.h}</h3>${[].concat(b.p).map(t => t.trim().startsWith('<') ? t : `<p>${t}</p>`).join('')}${b.img ? `<img src="${b.img}" alt="${b.alt || ''}">` : ''}</div>`).join('')
          : `<p class="cs-pending">Full write-up coming soon.</p>`}
        ${[c.quote, c.quote2].filter(Boolean).map(q => `
        <figure class="cs-quote reveal">
          <blockquote>“${q.text}”</blockquote>
          <figcaption><b>${q.name}</b><span>${q.role}</span>${q.source ? `<small>${q.source}</small>` : ''}</figcaption>
        </figure>`).join('')}
      </div>
    </section>
    ${next && next !== c ? `
    <section class="contact">
      <div class="wrap">
        <a class="cs-next" href="${caseUrl(next)}"><div><span class="mono" style="color:var(--muted)">Next case study</span><b>${next.title}</b></div><span class="more"></span></a>
      </div>
    </section>` : ''}`;
  }

  /* ---------------- Mount ---------------- */
  document.querySelector('.rail').innerHTML = rail();
  const main = document.querySelector('main');
  main.innerHTML = (onHome
    ? live.map((s, i) => (R[s.type] ? R[s.type](s, i) : '')).join('')
    : page === 'cases' ? casesPage() : page === 'specs' ? specsPage() : casePage())
    + `<footer><span>© ${new Date().getFullYear()} ${S.person.name}</span><span class="mono">${S.intro.release ? S.intro.release.tag : ''}</span></footer>`;

  /* Active nav on scroll (home only) */
  if (onHome) {
    const links = document.querySelectorAll('.nav a');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.dataset.id === e.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    live.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    if (location.hash) { const t = document.querySelector(location.hash); if (t) t.scrollIntoView(); }
  }

  /* Case study v2: "Read the full story" toggle */
  document.addEventListener('click', e => {
    const t = e.target.closest('.cs2-toggle');
    if (!t) return;
    const open = t.getAttribute('aria-expanded') !== 'true';
    t.setAttribute('aria-expanded', String(open));
    document.getElementById(t.getAttribute('aria-controls')).classList.toggle('is-open', open);
  });

  /* Links to a Career entry (#v3-1): open "Show earlier versions" if the entry is inside it, then scroll to it */
  const goToHash = () => {
    const el = location.hash.length > 1 && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!el) return;
    const d = el.closest('details');
    if (d && !d.open) d.open = true;
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 1600);
    requestAnimationFrame(() => el.scrollIntoView({ block: 'center' }));
  };
  window.addEventListener('hashchange', goToHash);
  if (/^#v\d/.test(location.hash)) setTimeout(goToHash, 50);

  /* Featured reviews: full text opens in one panel under the row (other cards keep their size) */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.rev-open');
    if (!btn) return;
    const grid = btn.closest('.reviews'), card = btn.closest('.review'), panel = grid.querySelector('.rev-panel');
    const open = btn.getAttribute('aria-expanded') !== 'true';
    grid.querySelectorAll('.review').forEach(c => {
      c.classList.remove('is-open');
      c.querySelector('.rev-open').setAttribute('aria-expanded', 'false');
    });
    panel.hidden = true;
    if (!open) return;
    card.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    panel.innerHTML = card.querySelector('.rev-src').innerHTML;
    // put the panel after the last card on the same row
    const cards = [...grid.querySelectorAll('.review')];
    const rowEnd = cards.filter(c => c.offsetTop === card.offsetTop).pop();
    rowEnd.after(panel);
    panel.hidden = false;
  });

  /* Inline "Read more" / "Show less" */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.rm-btn');
    if (!btn) return;
    const box = btn.closest('.ppp-item, .stage-body, .rev-body') || btn.parentElement.parentElement;
    const open = btn.classList.contains('rm-open');
    box.querySelector('.rm-more').hidden = !open;
    const opener = box.querySelector('.rm-open');
    opener.hidden = open;
    opener.setAttribute('aria-expanded', String(open));
    if (!open) opener.focus();
  });

  /* Reveal on scroll */
  const rev = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => rev.observe(el));

  /* Visitor stats (GoatCounter: no cookies, no banner). Only on the live site, only when a code is set. */
  const gc = S.analytics && S.analytics.goatcounter;
  if (gc && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.dataset.goatcounter = `https://${gc}.goatcounter.com/count`;
    document.body.appendChild(s);
  }
})();
