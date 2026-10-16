/* Employment-first presentation. Evidence remains sourced from content/site.js. */
window.portfolioActionIcon = function(name) {
  const paths = {
    home: '<path d="m3 11 9-8 9 8M5 10v11h5v-7h4v7h5V10"/>',
    back: '<path d="m15 5-7 7 7 7"/>',
    left: '<path d="M20 12H4m6-6-6 6 6 6"/>',
    heart: '<path d="M20 5c-3-3-7-1-8 1-1-2-5-4-8-1-4 4 2 10 8 15 6-5 12-11 8-15Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    right: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    down: '<path d="M12 4v16m-6-6 6 6 6-6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4"/>'
  };
  return `<svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name] || paths.right}</svg>`;
};
/* Original portfolio illustrations; no confidential source artwork is embedded. */
window.portfolioGmmEcosystem = function() {
 return `<figure class="loyalty-platform-visual"><img src="assets/loyalty-platform-watercolour-supplied-v002.png" width="1800" height="1362" alt="Sketch of a loyalty platform: Customer at the top, Bank and Retailer in the middle, and Loyalty Platform below, connected by arrows."></figure>`;
};
window.portfolioGmmVisuals = function() {
 const icon=window.portfolioActionIcon;
 const food=`<svg class="gmm-merchant-art" viewBox="0 0 220 110" aria-hidden="true"><rect width="220" height="110" fill="#ede4d8"/><path d="M0 82 220 55v55H0" fill="#e4d5c3"/><ellipse cx="112" cy="59" rx="50" ry="40" fill="#fcfaf5"/><ellipse cx="112" cy="59" rx="34" ry="27" fill="#ead6b1"/><path d="M89 43c17-13 23 3 38 1l9 13-12 16-27-4-12-15Z" fill="#e29365"/><path d="m102 42 6 16 14-13m-25 22 21-7" fill="none" stroke="#598b6a" stroke-width="5" stroke-linecap="round"/><path d="M40 30v50m-5-50v18h10V30m134 0v50m0-50c-13 0-13 24 0 24" stroke="#807b6d" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="185" cy="16" r="28" fill="#b0c8b4" opacity=".7"/></svg>`;
 const rewards=`<svg class="gmm-rewards-art" viewBox="0 0 110 100" aria-hidden="true"><circle cx="53" cy="48" r="34" fill="#eaf4f0"/><path d="M24 40h50l-6 46H30L24 40Z" fill="#f39f86"/><path d="M37 44V32a12 12 0 0 1 24 0v12" fill="none" stroke="#a85546" stroke-width="4"/><ellipse cx="78" cy="69" rx="14" ry="20" fill="#e5bf68" transform="rotate(24 78 69)"/><path d="m79 53-7 31" stroke="#c49739" stroke-width="2"/><path d="m85 16 2 7 7 2-7 2-2 7-2-7-7-2 7-2Z" fill="#477967"/></svg>`;
 const status='<div class="gmm-phone-top"><span>9:41</span><span class="gmm-status-icons" aria-hidden="true">▂▄▆ ▰</span></div>';
 const nav=active=>`<div class="gmm-bottom-nav"><span>${icon('home')}<small>Home</small></span><span class="${active==='offers'?'active':''}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 4 10-1 8 8-10 10-8-8V4Z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/></svg><small>Offers</small></span><span class="${active==='activity'?'active':''}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V10m7 10V4m7 16v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><small>Activity</small></span></div>`;
 return `<div class="gmm-story-visual gmm-customer-visual"><div class="gmm-visual-heading"><p class="section-label">Customer experience</p><h2>Offers to cashback.</h2></div><div class="gmm-phones">
 <figure class="gmm-phone-step"><div class="gmm-phone">${status}<div class="gmm-app-header"><h3>Cashback</h3><span class="gmm-info-icon">i</span></div><div class="gmm-wallet-preview"><div><small>You’ve earned</small><strong>£14.20</strong><span>This month</span></div>${rewards}</div><div class="gmm-app-tabs" aria-label="Offers selected"><b>Offers</b><span>Activity</span></div><p class="gmm-phone-label">Picked for you</p><div class="gmm-featured-offer">${food}<div><b>Harbour Kitchen</b><span class="gmm-rate">10% cashback</span><small>Dining · activate before shopping</small></div><span class="gmm-add-offer">+</span></div><div class="gmm-mini-offer"><span class="gmm-mini-brand">S</span><div><b>Sunday Market</b><small>£3 cashback</small></div><span>+</span></div>${nav('offers')}</div><figcaption><b>01 / Discover</b><span>Find an offer</span></figcaption></figure>
 <span class="gmm-phone-arrow" aria-hidden="true">${icon('right')}</span>
 <figure class="gmm-phone-step"><div class="gmm-phone">${status}<div class="gmm-detail-toolbar"><span aria-hidden="true">${icon('back')}</span><b>Offer details</b><span aria-hidden="true">${icon('heart')}</span></div><div class="gmm-detail-art">${food}<span class="gmm-image-tag">Dining</span></div><p class="gmm-phone-label">Harbour Kitchen</p><h3 class="gmm-offer-title">10% cashback</h3><p class="gmm-screen-sub">A little back on your next meal.</p><div class="gmm-terms-row"><span>Minimum spend</span><b>£20</b></div><div class="gmm-terms-row"><span>Cashback limit</span><b>£5</b></div><div class="gmm-terms-row"><span>Where to use</span><b>In store</b></div><div class="gmm-demo-button">Activate offer</div><p class="gmm-activation-note">Activate before you pay</p></div><figcaption><b>02 / Activate</b><span>Choose the reward</span></figcaption></figure>
 <span class="gmm-phone-arrow" aria-hidden="true">${icon('right')}</span>
 <figure class="gmm-phone-step"><div class="gmm-phone">${status}<div class="gmm-app-header"><h3>Cashback</h3><span class="gmm-info-icon">i</span></div><div class="gmm-wallet-preview gmm-wallet-earned"><div><small>From your latest purchase</small><strong>£3.00</strong><span class="gmm-pending-pill">Pending</span></div>${rewards}</div><div class="gmm-app-tabs" aria-label="Activity selected"><span>Offers</span><b>Activity</b></div><p class="gmm-phone-label">Recent activity</p><div class="gmm-reward-transaction"><span class="gmm-transaction-brand">H</span><div><b>Harbour Kitchen</b><small>Purchase £30.00</small></div><strong>+£3.00</strong></div><div class="gmm-confirmation"><span aria-hidden="true">✓</span><div><b>Cashback earned</b><small>Your purchase has been matched</small></div></div>${nav('activity')}</div><figcaption><b>03 / Track</b><span>Track cashback</span></figcaption></figure>
 </div><p class="product-illustration-note">Illustrative product views</p></div>`;
};
window.portfolioHeader = function(S, page) {
  const prefix = page === 'home' ? '' : 'index.html';
  return `<div class="header-inner"><a class="identity" href="${prefix}#top" aria-label="Salman Abdul Ghaffar, home"><span class="identity-name">Salman Abdul Ghaffar</span></a><nav aria-label="Main navigation"><a href="${prefix}#work" ${['case','cases'].includes(page)?'aria-current="page"':''}>Selected work</a><a href="${prefix}#approach" ${page==='approach'?'aria-current="page"':''}>Leadership</a><a href="${prefix}#changelog">Experience</a><a href="specs.html" ${page==='specs'?'aria-current="page"':''}>Capabilities</a></nav><a class="header-contact" href="${prefix}#contact">Contact me ${window.portfolioActionIcon("mail")}</a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button></div><nav id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation" hidden><a href="${prefix}#work">Selected work</a><a href="${prefix}#approach" ${page==='approach'?'aria-current="page"':''}>Leadership</a><a href="${prefix}#changelog">Experience</a><a href="specs.html">Capabilities</a><a href="${prefix}#contact">Contact</a></nav>`;
};
window.portfolioCVDownloads = function(person, className='quiet-link') {
  return `<details class="cv-downloads"><summary class="${className}">Download CV ${window.portfolioActionIcon('download')}</summary><div class="cv-download-menu"><a href="${person.resumeShort}" download>One-page CV <small>PDF · Quick overview</small></a><a href="${person.resume}" download>Full CV <small>PDF · Detailed experience</small></a></div></details>`;
};
window.portfolioProductPreview = function(kind) {
 const toolbar=title=>`<div class="preview-toolbar"><span class="preview-window-dots" aria-hidden="true"><i></i><i></i><i></i></span><b>${title}</b><span class="preview-avatar" aria-hidden="true">S</span></div>`;
 if(kind==='public') return `<div class="product-preview education-preview" role="img" aria-label="Illustrative leave and claims interface showing a request, approval and readiness for payroll">${toolbar('Leave & claims')}<div class="education-workspace"><aside class="preview-sidebar"><b>Workspace</b><span class="selected">Requests</span><span>Claims</span><span>Payroll</span></aside><div class="preview-main"><div class="preview-page-title"><b>Leave requests</b><span class="preview-add">+ New request</span></div><div class="preview-list-row"><span class="preview-person">AM</span><div><b>Alex Morgan</b><small>Annual leave · 3 days</small></div><span class="preview-state">Approved</span></div><div class="preview-list-row secondary"><span class="preview-person">JT</span><div><b>Jamie Taylor</b><small>Leave request · 1 day</small></div><span class="preview-review">In review</span></div><div class="preview-payroll"><span class="preview-check" aria-hidden="true">✓</span><div><b>Ready for payroll</b><small>Approved request · record updated</small></div></div></div></div></div>`;
 return `<div class="product-preview broker-preview" role="img" aria-label="Illustrative broker journey from application capture through risk review to a quote">${toolbar('Broker workspace')}<div class="broker-journey"><div class="broker-stage"><span class="preview-stage-label">01 / Application</span><b>Start with the details</b><div class="preview-field"><small>Cover</small><span>Equine insurance <i>⌄</i></span></div><div class="preview-field"><small>Applicant</small><span>Harbour Stables</span></div><span class="preview-primary">Continue <span aria-hidden="true">→</span></span></div><div class="broker-stage"><span class="preview-stage-label">02 / Review</span><b>A clear risk picture</b><div class="preview-risk-ring"><svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="20" fill="none" stroke="#e5e1f2" stroke-width="5"/><path d="M26 6a20 20 0 1 1-19 26" fill="none" stroke="#8171b1" stroke-width="5" stroke-linecap="round"/></svg><span>✓</span></div><span class="preview-risk-line">Details checked</span><span class="preview-risk-line">Ready for review</span></div><div class="broker-stage"><span class="preview-stage-label">03 / Quote</span><b>Ready for the client</b><span class="preview-quote-icon" aria-hidden="true">${window.portfolioActionIcon('download')}</span><span class="preview-state">Quote prepared</span><span class="preview-primary">View quote <span aria-hidden="true">→</span></span></div></div></div>`;
};
window.portfolioProjectEmblem = function(kind) {
 const emblems = {
  reward: {className:'reward-emblem',image:'logos/reward-transparent-v001.png',alt:'Reward',category:'Fintech · International',title:'API-based loyalty platform'},
  public: {className:'education-emblem',image:'logos/ey-supplied-v001.webp',alt:'EY Ireland',category:'Education · Ireland',title:'National leave & claims platform'},
  insurance: {className:'equine-emblem',image:'equine-horse.png',alt:'Horse silhouette',category:'Insurance · United States',title:'Equine & livestock underwriting'}
 };
 const emblem=emblems[kind];
 return `<div class="project-emblem ${emblem.className}"><img src="assets/${emblem.image}" alt="${emblem.alt}"><div><span>${emblem.category}</span><b>${emblem.title}</b></div></div>`;
};
window.portfolioCaseProductVisual = function(kind) {
 const education=kind==='public';
 return `<figure class="case-product-visual ${education?'education-case-preview':'broker-case-preview'}"><div class="case-preview-heading"><p class="section-label">${education?'Leave & claims':'Broker experience'}</p><h2>${education?'A clearer path from request to payroll.':'From application to quote.'}</h2></div>${window.portfolioProductPreview(kind)}<figcaption>Illustrative product view</figcaption></figure>`;
};
window.portfolioSummaryYears = function(dateRange='') {
 const years=String(dateRange).match(/\b(?:19|20)\d{2}\b/g) || [];
 return years.length>1 && years[0]!==years[years.length-1] ? `${years[0]}–${years[years.length-1]}` : years[0] || String(dateRange);
};
window.portfolioCaseCard = function(c, presentation={}) {
 const icon=window.portfolioActionIcon;
 return `<article class="project-card ${presentation.visual?'project-card-illustrated':''}">${presentation.visual?`<div class="project-card-visual ${presentation.type||''}">${presentation.visual}</div>`:''}<div class="project-card-body"><p class="project-card-meta">${[c.company,window.portfolioSummaryYears(c.year)].filter(Boolean).join(' · ')}</p><h3>${presentation.title||c.title}</h3>${presentation.description?`<p class="project-card-description">${presentation.description}</p>`:''}${c.metric?`<div class="project-card-metric"><b>${c.metric[0]}</b><span>${c.metric[1]}</span></div>`:''}<a class="project-card-link" href="case.html?id=${encodeURIComponent(c.id)}" aria-label="Read the case study: ${(presentation.title||c.title).replace(/"/g,'&quot;')}">Read the case study ${icon('right')}</a></div></article>`;
};
window.portfolioRecommendations = function(reviews) {
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const all = [...reviews.featured, ...reviews.more];
  const selections = [
    ['Declan Ballantyne', 'Salman is a product-minded leader who brings clarity to complex problems, unifies teams into a single delivery unit, and sets a high quality bar.'],
    ['Piers Sanders', 'Salman’s leadership transformed the GMM vision into reality, propelling Reward to new heights in the global fintech space.']
  ];
  const relationship = r => r.relationship ? `<span class="recommendation-relationship">${escape(r.relationship)}</span>` : '';
  const attribution = r => {
    const split = r.role.lastIndexOf(',');
    const location = r.location ? ` · ${escape(r.location)}` : '';
    const role = split < 0 ? `<strong>${escape(r.role)}</strong>${location ? `<span class="recommendation-company">${escape(r.location)}</span>` : ''}` : `<strong>${escape(r.role.slice(0, split))}</strong><span class="recommendation-company">${escape(r.role.slice(split + 1).trim())}${location}</span>`;
    return `<span class="recommendation-role">${role}</span>`;
  };
  const fullText = r => `${r.context ? `<p class="recommendation-context">${escape(r.context)}</p>` : ''}${r.text.map(p => `<p>${escape(p)}</p>`).join('')}`;
  const primary = selections.map(([name, excerpt]) => {
    const r = all.find(item => item.name === name);
    return `<figure class="recommendation-entry"><figcaption>${relationship(r)}<h3>${escape(r.name)}</h3>${attribution(r)}</figcaption><blockquote><p>“${escape(excerpt)}”</p></blockquote><details class="recommendation-full"><summary aria-label="Toggle full recommendation from ${escape(r.name)}"><span class="recommendation-expand-icon" aria-hidden="true"></span></summary><div>${fullText(r)}</div></details></figure>`;
  }).join('');
  const selectedNames = new Set(selections.map(([name]) => name));
  const remaining = all.filter(r => !selectedNames.has(r.name)).sort((a,b) => Number(b.name === 'Tracy Webb') - Number(a.name === 'Tracy Webb'));
  return `<section class="recommendation-spotlight" id="reviews"><div class="wrap testimonials-preview-layout"><div class="testimonials-preview-intro"><p class="section-label">03 / In good company</p><h2>Leadership,<em>seen by others.</em></h2><a class="quiet-link" href="${escape(reviews.linkedin)}" target="_blank" rel="noopener">Recommendations on LinkedIn ${window.portfolioActionIcon('linkedin')}</a></div><div class="testimonials-preview-voices" id="featured-recommendations">${primary}<details class="recommendations-more testimonials-preview-all"><summary>View all recommendations <span>${remaining.length} more voices</span></summary><div class="recommendations-directory">${remaining.map(r => `<details class="recommendation-directory-entry"><summary><span class="recommendation-person">${relationship(r)}<b>${escape(r.name)}</b>${attribution(r)}${r.teaser ? `<span class="recommendation-teaser">“${escape(r.teaser)}”</span>` : ''}</span></summary><div>${fullText(r)}</div></details>`).join('')}</div></details></div></div></section>`;
};
window.portfolioHome = function(S) {
  const caseLink=id=>`case.html?id=${encodeURIComponent(id)}`;
  const email=`mailto:${S.person.email}?subject=Senior%20product%20opportunity`;
  const icon=window.portfolioActionIcon;
  const arrow=icon('right');
  const current=S.changelog[0];
  const selected=[
    {id:'reward-gmm',type:'platform',title:'Driving global expansion.',description:'An API-based loyalty platform, from concept to international launch.',visual:window.portfolioProjectEmblem('reward')},
    {id:'olcs',type:'public',title:'Modernising a national leave & claims platform.',description:'Product ownership across three teams, connecting policy, service and payroll.',visual:window.portfolioProjectEmblem('public')},
    {id:'liberty-equine',type:'insurance',title:'Digital underwriting for brokers.',description:'Equine and livestock products, from concept to launch.',visual:window.portfolioProjectEmblem('insurance')}
  ];
  const experienceBody=e=>{
    const intro=[],groups=[];
    let active=null;
    for(const paragraph of e.more||[]){
      if(paragraph.startsWith('## ')){
        const heading=paragraph.slice(3),name=heading.replace(/^(Client|Internal):\s*/, '');
        active={name,internal:heading.startsWith('Internal:'),paragraphs:[]};
        groups.push(active);
      }else (active?active.paragraphs:intro).push(paragraph);
    }
    const paragraphs=items=>items.length?`<ul class="experience-evidence">${items.map(p=>`<li${p.startsWith('Role:')?' class="experience-role-statement"':''}>${p}</li>`).join('')}</ul>`:'';
    return `${paragraphs(intro)}${groups.length?`<div class="experience-engagements">${groups.map(g=>{
      const meta=(S.experienceEngagements||{})[g.name]||{};
      const mark=meta.logo?`<img src="${meta.logo}" alt="" width="44" height="44" loading="lazy">`:`<span aria-hidden="true">${meta.initials||g.name.slice(0,2)}</span>`;
      return `<details class="experience-engagement"><summary><span class="engagement-mark">${mark}</span><span class="engagement-identity"><b>${meta.role||g.name}</b><span>${g.internal?'Deloitte · ':''}${g.name}</span></span><span class="engagement-toggle" aria-hidden="true">+</span></summary><div class="engagement-detail">${paragraphs(g.paragraphs)}</div></details>`;
    }).join('')}</div>`:''}`;
  };
  const experienceRow=(e)=>`<details class="experience-row"><summary><span class="experience-date">${e.dates}${e.current?'<small>Current</small>':''}</span><span class="experience-identity"><span class="experience-logo-slot">${e.logo ? `<span class="experience-mark ${e.company==='Malaysian Board of Technology'?'experience-mark-mbot':''}"><img src="${e.company==='Reward' ? 'assets/logos/reward-transparent-v001.png' : e.company.includes('Department of Education') ? 'assets/logos/irish-harp-transparent-v001.png' : e.logo}" alt="" width="56" height="56" loading="lazy"></span>` : `<span class="experience-mark experience-initials" aria-hidden="true">${e.initials||e.company.slice(0,2)}</span>`}</span><span class="experience-position"><b>${e.role}</b><span>${e.company}</span>${e.endClient?`<small class="experience-end-client">End client: ${e.endClient}</small>`:''}</span></span><span class="experience-toggle" aria-hidden="true">+</span></summary><div class="experience-detail"><p>${e.highlight}</p>${experienceBody(e)}${(e.cases||[]).map(id=>`<a class="quiet-link" href="case.html?id=${encodeURIComponent(id)}">Read the case study ${arrow}</a>`).join('')}</div></details>`;
  const careerGroups=[
    {id:'experience-product',title:'Product & delivery leadership',period:'2016–present',phase:'3'},
    {id:'experience-consulting',title:'Consulting, strategy & architecture',period:'2012–2016',phase:'2'},
    {id:'experience-foundations',title:'Software engineering',period:'2006–2012',phase:'1'}
  ];
  const careerTimeline=[...careerGroups].reverse().map(g=>`<button type="button" class="career-milestone career-stage-${g.phase}" role="tab" id="${g.id}-tab" aria-selected="${g.phase==='3'}" tabindex="${g.phase==='3'?'0':'-1'}" data-career-target="${g.id}" aria-controls="${g.id}"><span class="career-stage-dot" aria-hidden="true"></span><span class="career-stage-title">${g.title}</span><span class="career-stage-date">${g.period}</span></button>`).join('');
  const careerSections=careerGroups.map((g,index)=>{
    const entries=S.changelog.filter(e=>e.ver.split('.')[0]===g.phase);
    const earlier=g.phase==='1' ? S.changelog.filter(e=>e.ver.split('.')[0]==='0') : [];
    return `<section class="career-group" id="${g.id}" role="tabpanel" tabindex="0" aria-labelledby="${g.id}-tab" ${index===0?'':'hidden'}>${g.phase==='3'?'<span id="experience-ai" aria-hidden="true"></span>':''}<div class="career-group-heading"><span><b>${g.title}</b><small>${g.period}</small></span></div><div class="experience-list">${entries.map(experienceRow).join('')}${earlier.length?`<h4 class="career-earlier-heading">Earlier experience · 2004–2006</h4>${earlier.map(experienceRow).join('')}`:''}</div></section>`;
  }).join('');
  return `
  <section class="new-hero" id="top"><div class="wrap hero-layout"><div class="hero-copy"><p class="section-label hero-positioning">Product-led transformation · Responsible AI · Strategy &amp; architecture</p><h1>From complex business problems <em class="hero-heading-secondary">to products that work at scale.</em></h1><p class="hero-intro">I lead business and technology teams to deliver complex transformation—from strategy to operational readiness.</p><div class="hero-actions"><a class="btn btn-primary" href="#work">Explore my work ${icon("down")}</a>${window.portfolioCVDownloads(S.person)}</div></div><figure class="intersection-visual leadership-process-hero"><button type="button" class="diagram-zoom-trigger" aria-haspopup="dialog" aria-controls="leadership-diagram-dialog" aria-label="Enlarge the product leadership diagram"><picture><source media="(max-width:640px)" srcset="assets/approach-process-mobile-watercolour-v002.png" width="1024" height="1536"><img src="assets/approach-process-desktop-watercolour-v001.png" width="2200" height="1080" alt="Hands-on product leadership: set direction, shape the product, engineer for scale, deliver and evolve, with continuous learning. Responsible AI underpins every stage; human-led."></picture></button><figcaption class="diagram-zoom-hint"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M3 3l6 6m12-6-6 6M3 21l6-6m12 6-6-6"/></svg> Click to enlarge</figcaption></figure><dialog id="leadership-diagram-dialog" class="diagram-dialog" aria-labelledby="leadership-diagram-title"><div class="diagram-dialog-heading"><h2 id="leadership-diagram-title">Hands-on product leadership</h2><button type="button" class="diagram-dialog-close" aria-label="Close enlarged diagram" autofocus>×</button></div><picture><source media="(max-width:640px)" srcset="assets/approach-process-mobile-watercolour-v002.png" width="1024" height="1536"><img src="assets/approach-process-desktop-watercolour-v001.png" width="2200" height="1080" alt="Hands-on product leadership: set direction, shape the product, engineer for scale, deliver and evolve, with continuous learning. Responsible AI underpins every stage; human-led."></picture><a class="diagram-download-link" href="assets/approach-process-desktop-watercolour-v001.png" target="_blank" rel="noopener">Open original image</a></dialog></div><div class="wrap hero-evidence career-evidence">${[...S.intro.kpis.slice(0,2), ['8', 'industries']].map(([value,label])=>`<div><b>${value}</b><p>${label}</p></div>`).join('')}</div></section>



  <section class="selected-work" id="work"><div class="wrap work-preview-layout"><div class="work-preview-intro"><p class="section-label">01 / Selected work</p><h2>Selected <em>work.</em></h2><p>More of the story: service design, automation and my first product.</p><a class="quiet-link" href="cases.html">All case studies <span aria-hidden="true">→</span></a></div><div class="work-preview-projects"><a class="work-preview-project" href="case-reward-gmm.html" aria-label="Read the case study: Driving global expansion."><div><div class="work-preview-identity"><img src="assets/logos/reward-transparent-v001.png" alt="Reward" loading="lazy"><span class="work-preview-meta">Reward Insights · 2021–2023</span></div><h3>Driving global expansion.</h3><p class="work-preview-description">An API-based loyalty platform, from concept to international launch.</p><span class="work-preview-action">Read the case study <span aria-hidden="true">→</span></span></div><div class="work-preview-outcome"><b>£1M+</b><span>profit by year two</span></div></a><a class="work-preview-project" href="case-olcs.html" aria-label="Read the case study: Modernising a national leave &amp; claims platform."><div><div class="work-preview-identity"><img src="assets/logos/ey-supplied-v001.webp" alt="EY Ireland" loading="lazy"><span class="work-preview-meta">EY Ireland · Department of Education (Ireland) · 2024–2026</span></div><h3>Modernising a national leave &amp; claims platform.</h3><p class="work-preview-description">Product ownership across three teams, connecting policy, service and payroll.</p><span class="work-preview-action">Read the case study <span aria-hidden="true">→</span></span></div><div class="work-preview-outcome"><b>1,000+</b><span>hours saved per month</span></div></a><a class="work-preview-project" href="case-liberty-equine.html" aria-label="Read the case study: Digital underwriting for brokers."><div><div class="work-preview-identity"><img src="assets/equine-horse.png" alt="Equine underwriting" loading="lazy"><span class="work-preview-meta">Liberty IT · Liberty Mutual · 2020–2021</span></div><h3>Digital underwriting for brokers.</h3><p class="work-preview-description">Equine and livestock products, from concept to launch.</p><span class="work-preview-action">Read the case study <span aria-hidden="true">→</span></span></div><div class="work-preview-outcome"><b>$5M</b><span>gross written premium</span></div></a></div></div></section>

  <section class="leadership homepage-approach" id="approach"><div class="wrap"><div class="section-heading"><div><p class="section-label">02 / How I lead</p><h2>Clarity before velocity.<br><em>Outcomes over output.</em></h2></div></div><picture class="home-ppp-visual"><source media="(max-width:640px)" srcset="assets/approach-ppp-mobile-watercolour-v001.png"><img src="assets/approach-ppp-desktop-watercolour-v001.png" alt="Philosophy, represented by a compass; Principles, represented by a filter; Process, represented by connected steps." loading="lazy"></picture><div class="home-ppp home-ppp-concepts"><article><h3>Start with the impact.</h3></article><article><h3>Make complexity clear.</h3></article><article><h3>Create systems to deliver.</h3></article></div><div class="home-approach-footer"><a class="quiet-link" href="approach.html">Explore my approach ${arrow}</a></div></div></section>

  ${window.portfolioRecommendations(S.reviews)}



  <section class="now-section"><div class="wrap now-layout"><div><p class="section-label">Currently / Ocorian</p><h2>Putting AI to work.<br><em>Beyond the prototype.</em></h2><p>As Senior AI Product Manager, I report to the CIO and lead the business–IT relationship for HR transformation.</p><p>I’ve delivered live process automation across ${current.countries} countries and built an AI-enabled onboarding MVP that has transitioned to the development team.</p></div><div class="now-evidence"><span class="now-label">Current work · HR transformation</span><strong>80%<span>+</span></strong><p>reduction in processing time<br>for core automated HR processes</p><div class="now-divider"></div><div class="now-bottom"><b>${current.countries} countries</b><span>AI · Automation · Integrations</span></div></div></div></section>

  <section class="experience" id="changelog"><div class="wrap"><div class="section-heading"><div><p class="section-label">04 / Experience</p><h2>A track record<br><em>across complex domains.</em></h2><p class="experience-breadth">Professional training and hands-on experience across product strategy, architecture, large-scale programme management, engineering, quality and service management.</p><a class="quiet-link experience-capabilities-link" href="specs.html">Explore my capabilities &amp; credentials ${arrow}</a></div></div><figure class="career-journey-visual"><div class="career-journey-interactive career-three-stage" role="tablist" aria-label="Career stages">${careerTimeline}</div></figure>${careerSections}<div class="experience-foot"><a class="quiet-link" href="${S.person.resume}">View full CV ${icon("download")}</a></div></div></section>

  <section class="hiring-contact" id="contact"><div class="wrap contact-layout"><div><p class="section-label">05 / Your next product leader</p><h2>Have a complex<br>product challenge?<br><em>Let’s talk.</em></h2><p>I’m interested in senior product roles where strategy, technical depth and delivery leadership can make a measurable difference.</p><div class="contact-actions"><a class="btn btn-accent" href="${email}">Discuss a role ${icon("mail")}</a>${window.portfolioCVDownloads(S.person,"contact-cv")}</div></div><div class="contact-details"><div class="contact-portrait"><img src="assets/salman.jpg" alt="Salman Abdul Ghaffar" loading="lazy"><div class="contact-portrait-caption">Salman Abdul Ghaffar<small>Hands-on product leader</small></div></div><a href="${S.person.links[0].url}" target="_blank" rel="noopener">Connect on LinkedIn ${icon("linkedin")}</a><p>Belfast, United Kingdom</p></div></div></section>`;
};

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
  const eyebrow = (i, label) => `<div class="eyebrow mono">${num(i)} — ${label}</div>`;

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
      <ul class="nav" aria-label="Main navigation">
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
            ${casesSec ? `<a href="#${casesSec.id}" class="btn btn-primary">Explore my case studies →</a>` : ''}
            <a href="#contact" class="btn btn-ghost">Let’s talk</a>
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

  /* Shared card treatment: one primary impact measure per project. */
  function caseCard(c, compact) {
    return window.portfolioCaseCard(c);
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
        <a class="back" href="index.html#work">${window.portfolioActionIcon('left')} Back to home</a>
        <div class="eyebrow mono">Shipped</div>
        <h2>All case studies</h2>
        <p class="lede">${S.cases.length} products and platforms, from my first build to global launches.</p>
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
      <div class="entry ${e.current ? 'current' : ''}">
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

  function specsPage() {
    const sp = S.specs;
    const action = window.portfolioActionIcon;
    document.title = `Capabilities & credentials - ${S.person.name}`;
    const links = entries => entries.map(link => `<a class="quiet-link" href="${link.href}">${link.label} ${action('right')}</a>`).join('');
    const capabilityIcons=[
      '<path d="M5 3v18M5 5h10l-2 4 2 4H5M10 18l2 2 5-5"/>',
      '<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6M21 21v-3a6 6 0 0 0-3-5"/>',
      '<rect x="8" y="2" width="8" height="5" rx="1"/><rect x="2" y="17" width="7" height="5" rx="1"/><rect x="15" y="17" width="7" height="5" rx="1"/><path d="M12 7v5M5.5 17v-5h13v5"/>',
      '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>'
    ];
    const credential = name => {
      const badge = sp.badges.find(b => b.name === name);
      return `<li>${badge && badge.img ? `<img src="${encodeURI(badge.img)}" alt="" width="88" height="88" loading="lazy">` : '<span class="credential-dot" aria-hidden="true"></span>'}<span>${name}</span></li>`;
    };
    return `
    <section class="capabilities-hero"><div class="wrap">
      <a class="back" href="index.html#changelog">${action('left')} Experience</a>
      <div class="capabilities-hero-layout"><div class="capabilities-hero-copy"><h1>Capabilities &amp;<br><em>credentials.</em></h1><p class="lede">${sp.lead}</p><p class="capabilities-breadth">From strategy and large programme delivery to software engineering and service management.</p></div>
      <figure class="capability-map-art"><a href="assets/capability-map-watercolour-supplied-v001.png" target="_blank" rel="noopener" aria-label="Open full-size capability map"><img src="assets/capability-map-watercolour-supplied-v001.png" width="1700" height="1700" alt="AI-enabled Product and Delivery Lead, connecting Product Strategy and Execution; Strategy, Analysis and Architecture; Stakeholder and Commercial Leadership; and Governance, Risk and Quality."></a><figcaption><a class="quiet-link" href="assets/capability-map-watercolour-supplied-v001.png" target="_blank" rel="noopener">View full-size map ${action('right')}</a></figcaption></figure></div>
      <nav class="capabilities-nav" aria-label="On this page"><a href="#capabilities">Capabilities</a><a href="#industries">Industries</a><a href="#credentials">Credentials</a><a href="#tools">Tools</a></nav>
    </div></section>
    <section class="capabilities-section" id="capabilities"><div class="wrap">
      <h2>What I bring.</h2>
      <div class="capabilities-list">${sp.capabilities.map((g,i) => `<article class="capability-chapter"><div class="capability-heading"><div class="capability-heading-meta"><svg class="capability-heading-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${capabilityIcons[i]}</svg><span class="capability-number">0${i+1}</span></div><h3>${g.title}</h3>${g.focus?`<p class="capability-heading-focus">${g.focus}</p>`:''}</div><div class="capability-copy"><p>${g.description}</p><ul>${g.strengths.map(item => `<li>${item}</li>`).join('')}</ul><div class="capability-evidence">${links(g.evidence)}</div></div></article>`).join('')}</div>
      <details class="capabilities-detail"><summary>Detailed expertise &amp; delivery methods</summary><div class="capabilities-detail-grid">${sp.expertise.map(g => `<div><h3>${g.group}</h3><ul>${g.items.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}</div></details>
    </div></section>
    <section class="capabilities-section" id="industries"><div class="wrap"><div class="capabilities-section-heading"><h2>Across eight industries.</h2><p>Different domains. The same focus on clear decisions and useful products.</p></div>
      <div class="capabilities-industries">${sp.industries.map(g => `<article><img class="industry-icon" src="${g.icon}" alt="" width="56" height="56" loading="lazy"><h3>${g.name}</h3><p>${g.detail}</p></article>`).join('')}</div>
    </div></section>
    <section class="capabilities-section" id="credentials"><div class="wrap"><h2>Credentials that support the work.</h2>
      <div class="capabilities-credentials">${sp.certifications.map(g => `<article><h3>${g.group}</h3>${g.note?`<p class="credential-note">${g.note}</p>`:''}<ul>${g.items.map(credential).join('')}</ul></article>`).join('')}</div>
      ${sp.historicalTraining?.length?`<details class="capabilities-detail"><summary>Earlier professional training</summary><div class="capabilities-detail-grid">${sp.historicalTraining.map(g=>`<div><h3>${g.group}</h3><ul>${g.items.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}</div></details>`:''}
      <h3 class="capabilities-education-title">Education</h3><p class="capabilities-intro">${sp.educationIntro}</p>
      <div class="cred-edu">${sp.education.map(e=>`<article class="edu-card"><div class="edu-top">${e.logo ? `<img src="${encodeURI(e.logo)}" alt="" width="52" height="52" loading="lazy">`:''}<div><h3>${e.degree}</h3><p>${e.school} &middot; ${e.years}</p>${e.result?`<span class="edu-result">${e.result}</span>`:''}</div></div>${e.modules?`<details class="edu-mods"><summary>Course modules</summary><dl>${e.modules.map(([g,m])=>`<dt>${g}</dt><dd>${m}</dd>`).join('')}</dl></details>`:''}</article>`).join('')}</div>
    </div></section>
    <section class="capabilities-section" id="tools"><div class="wrap"><h2>Tools across the product lifecycle.</h2><p class="capabilities-intro">Tools used across my career in product, delivery, architecture and engineering, including earlier technical work.</p>
      <div class="capabilities-tools">${sp.tools.map(g=>`<div><h3>${g.group}</h3><ul>${g.items.map(([name])=>`<li>${name}</li>`).join('')}</ul></div>`).join('')}</div>
    </div></section>
    <section class="capabilities-close"><div class="wrap"><h2>See these capabilities in practice.</h2><div><a class="btn btn-primary" href="cases.html">Explore selected work ${action('right')}</a>${window.portfolioCVDownloads(S.person)}</div></div></section>`;
  }

  R.reviews = (s, i) => {
    const rv = S.reviews;
    const total = rv.featured.length + rv.more.length;
    return `
    <section id="${s.id}">
      <div class="wrap">
        ${eyebrow(i, s.label)}
        <h2>${rv.heading}</h2>
        ${rv.sub ? `<p class="lede">${rv.sub}</p>` : ''}
        <div class="reviews">
          ${rv.featured.map(r => `
            <figure class="review reveal">
              <blockquote class="pull">“${r.pull}”</blockquote>
              ${who(r)}
              <details class="rev-full"><summary><span class="lbl-more">Read full recommendation</span><span class="lbl-less">Hide full recommendation</span></summary>
                ${r.text.map(p => `<p>${p}</p>`).join('')}
              </details>
            </figure>`).join('')}
        </div>
        <details class="rev-all">
          <summary class="btn btn-ghost"><span class="lbl-more">Show all ${total} recommendations</span><span class="lbl-less">Show fewer</span></summary>
          <div class="rev-grid">
            ${rv.more.map(r => `
              <figure class="rev-card">
                ${who(r)}
                <div class="rev-body">${reviewText(r.text)}</div>
              </figure>`).join('')}
          </div>
        </details>
        ${rv.linkedin ? `<p class="rev-source">From my LinkedIn recommendations. <a class="inline-link" href="${rv.linkedin}" target="_blank" rel="noopener">View my LinkedIn profile ${window.portfolioActionIcon("linkedin")}</a></p>` : ''}
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
  function caseHeading(c) {
    return `<div class="case-heading-layout"><div class="case-heading-copy">
      ${c.label ? `<span class="cs2-label">${c.label}</span>` : ''}
      <h1>${c.title}</h1>
      <p class="case-role-date">${[c.role,c.year].filter(Boolean).join(' · ')}</p>
      ${tags(c.tags)}
    </div><div class="case-company-identity">
      ${c.logo ? `<img src="${encodeURI(c.logo)}" alt="">` : ''}
      <b>${c.company}</b>
    </div></div>`;
  }

  function casePageV2(c, next) {
    const editorialClass = {'reward-gmm':'gmm-case',olcs:'doe-case','liberty-equine':'liberty-case','service-hive':'hive-case'}[c.id];
    const caseClass = editorialClass ? `${editorialClass} editorial-case` : '';
    const blockText = b => [].concat(b.p).map(t => t.trim().startsWith('<') ? t : `<p>${t}</p>`).join('');
    const isLong = b => [].concat(b.p).join(' ').replace(/<[^>]+>/g, '').length > 520 || [].concat(b.p).some(t => /<(ol|ul)\b/.test(t));
    const quotes = [c.quote, c.quote2].filter(Boolean);
    // Short sections pair up two per row; a short one without a short neighbour goes full width (no half-empty rows).
    const story = c.story || [];
    const contentsHeadings = {
      'reward-gmm':['Strategic Initiative','Transformation','Outstanding Results','Conclusion'],
      'service-hive':['Current situation','Key decisions','Results','What I learned'],
      'liberty-equine':['The challenge','Automated rating removed the two-expert bottleneck','Outcomes','What I learned'],
      'copyrite-genuscan':['About the project','From an idea to a product','Results','What I learned'],
      olcs:['The business challenge','Established a repeatable path from policy to delivery','Results and leadership impact','Lessons learned']
    };
    const labels = ['Challenge','Decisions','Outcomes','Lessons'];
    const contents = [['Overview','case-overview'],...(contentsHeadings[c.id] || []).flatMap((heading,i) => {
      const index = story.findIndex(block => block.h === heading);
      return index < 0 ? [] : [[labels[i],`case-section-${index+1}`]];
    })];
    const contentsLinks = () => contents.map(([label,id])=>`<a class="case-contents-link" href="#${id}">${label}</a>`).join('');
    const wide = story.map(isLong);
    for (let k = 0; k < story.length; k++) {
      if (wide[k]) continue;
      if (k + 1 < story.length && !wide[k + 1]) { k++; continue; }
      wide[k] = true;
    }
    return `
    <div class="case-reading-layout"><aside class="case-contents" aria-label="Case study contents"><nav class="case-contents-desktop" aria-label="On this page"><p>On this page</p>${contentsLinks()}</nav><details class="case-contents-mobile"><summary>On this page</summary><nav aria-label="On this page">${contentsLinks()}</nav></details></aside><div class="case-reading-content">
    <section class="cs2-head ${caseClass}" id="case-overview" tabindex="-1">
      <div class="wrap">
        <a class="back" href="cases.html">${window.portfolioActionIcon('left')} All case studies</a>
        ${caseHeading(c)}
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
    <section class="cs2-story-sec ${caseClass}">
      <div class="wrap">
        <div class="cs2-story-head">
          <h2>${c.id === 'reward-gmm' ? 'From concept to global platform' : c.id === 'olcs' ? 'From complex policy to a clearer service' : c.id === 'liberty-equine' ? 'From manual underwriting to a broker product' : c.id === 'service-hive' ? 'From fragmented support to global servicing' : 'The full story'}</h2>
          ${!editorialClass?`<button type="button" class="cs2-toggle" aria-expanded="true" aria-controls="cs2-story">
            <span class="lbl-more">Read the full story</span><span class="lbl-less">Hide the full story</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
          </button>`:''}
        </div>
        <div class="cs2-story is-open" id="cs2-story"><div>
          <div class="cs2-steps">
            ${story.map((b, k) => `
              <article class="cs2-step" id="case-section-${k+1}" tabindex="-1">
                <span class="cs2-ic">${icon((c.storyIcons || {})[b.h] || 'doc')}</span>
                <h3>${b.h}</h3>
                ${blockText(b)}
              </article>${c.id === 'service-hive' && b.h === 'Product vision' ? `<figure class="service-hive-team-visual"><img src="assets/service-hive-team-watercolour-supplied-v001.png" width="1700" height="1174" alt="Service Hive brings together business operations, product owners, architects, product designers and engineers." loading="lazy"></figure>` : ''}${c.id === 'reward-gmm' && b.h === 'Strategic Initiative' ? `<div class="gmm-story-visual"><div class="gmm-visual-heading"><p class="section-label">The loyalty platform</p><h2>Connecting retailers, banks and consumers.</h2></div>${window.portfolioGmmEcosystem()}</div>` : ''}${c.id === 'reward-gmm' && b.h === 'Transformation' ? window.portfolioGmmVisuals() : ''}`).join('')}
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
    </section>` : ''}</div></div>`;
  }

  function casePage() {
    const id = document.body.dataset.caseId || new URLSearchParams(location.search).get('id');
    const idx = S.cases.findIndex(c => c.id === id);
    const c = S.cases[idx];
    if (!c) return `<section><div class="wrap"><a class="back" href="cases.html">${window.portfolioActionIcon('left')} All case studies</a><h2>Case study not found</h2></div></section>`;
    document.title = `${c.title} — ${S.person.name}`;
    const next = S.cases[(idx + 1) % S.cases.length];
    if (c.layout === 'v2') return casePageV2(c, next);
    const facts = [['Timeline', c.timeline]].filter(x => x[1]);
    const results = c.results || (c.metric ? [c.metric] : []);
    return `
    <section class="cs-head">
      <div class="wrap">
        <a class="back" href="cases.html">${window.portfolioActionIcon('left')} All case studies</a>
        ${caseHeading(c)}
        ${c.summary ? `<p class="lede">${c.summary}</p>` : ''}
        ${facts.length ? `<div class="cs-facts">${facts.map(([k, v]) => `<div><span>${k}</span>${v}</div>`).join('')}</div>` : ''}
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


  function approachPage() {
    document.title = `My approach — ${S.person.name}`;
    const frame = S.approach.frame;
    const chapters = frame.map((item, index) => `<section class="approach-chapter" id="approach-${item.label.toLowerCase()}"><div class="wrap approach-chapter-layout"><header><p class="section-label">0${index+1} / ${item.label}</p><h2>${item.title}</h2></header><div class="approach-chapter-copy"><p class="approach-chapter-lead">${item.short}</p>${item.more}${item.label==='Process'?`<div class="approach-delivery-stages">${S.approach.stages.map((stage,i)=>`<article><div class="approach-stage-heading"><span>0${i+1}</span><h3>${stage.name}</h3><small>${stage.d}</small></div><p>${stage.short}</p>${stage.more}</article>`).join('')}</div><p class="approach-feedback">${S.approach.loop}</p>`:''}</div></div></section>`).join('');
    return `<section class="approach-intro approach-redesign"><div class="wrap"><a class="quiet-link back-navigation" href="index.html#approach">${window.portfolioActionIcon('left')} Back to Leadership</a><p class="section-label">How I work</p><h1>A clear direction.<br>A system for delivery.</h1><p class="lede">My philosophy, principles and process for turning complex problems into products that work.</p><picture class="approach-overview-art"><source media="(max-width:640px)" srcset="assets/approach-process-mobile-watercolour-v002.png" width="1024" height="1536"><img src="assets/approach-process-desktop-watercolour-v001.png" alt="Hands-on product leadership: set direction, shape the product, engineer for scale, deliver and evolve, then return to direction through continuous learning. Responsible AI underpins every stage; human-led." loading="lazy"></picture><nav class="approach-contents" aria-label="My approach sections">${frame.map(item=>`<a href="#approach-${item.label.toLowerCase()}">${item.label} ${window.portfolioActionIcon('down')}</a>`).join('')}</nav></div></section>${chapters}<section class="approach-evidence"><div class="wrap"><div><p class="section-label">In practice</p><h2>See the decisions.<br>And what changed.</h2></div><a class="btn btn-primary" href="cases.html">Explore the case studies ${window.portfolioActionIcon('right')}</a></div></section>`;
  }
  /* ---------------- Mount ---------------- */
  const normaliseCaseLinks = html => S.cases.reduce((result, c) => result.replaceAll(`href="case.html?id=${encodeURIComponent(c.id)}"`, `href="case-${c.id}.html"`), html);
  const legacyCase = page === 'case' && !document.body.dataset.caseId && S.cases.find(c => c.id === new URLSearchParams(location.search).get('id'));
  if (legacyCase && typeof location.replace === 'function') {
    location.replace(`case-${legacyCase.id}.html${location.hash || ''}`);
    return;
  }
  if (document.body.dataset.prerendered !== 'true') {
  document.querySelector('.rail').innerHTML = window.portfolioHeader ? window.portfolioHeader(S, page) : rail();
  const main = document.querySelector('main');
  main.innerHTML = (onHome
    ? (window.portfolioHome ? window.portfolioHome(S) : live.map((s, i) => (R[s.type] ? R[s.type](s, i) : '')).join(''))
    : page === 'approach' ? approachPage() : page === 'cases' ? casesPage() : page === 'specs' ? specsPage() : casePage())
    + `<footer><span>© ${new Date().getFullYear()} ${S.person.name}</span>${onHome ? '' : `<a href="${S.person.links[0].url}" target="_blank" rel="noopener">LinkedIn ${window.portfolioActionIcon("linkedin")}</a>`}</footer>`;
  main.innerHTML = normaliseCaseLinks(main.innerHTML);
  }

  /* Career stages switch in place; selection never scrolls the page. */
  if (onHome) {
    const tabs = [...document.querySelectorAll('.career-milestone[role="tab"]')];
    const revealCareer = (tab, animate = true) => {
      const viewport = document.querySelector('.career-journey-visual');
      if (!viewport || viewport.scrollWidth <= viewport.clientWidth) return;
      const left = tab.offsetLeft, right = left + tab.offsetWidth;
      const current = viewport.scrollLeft;
      const target = left < current ? left : right > current + viewport.clientWidth ? right - viewport.clientWidth : current;
      if (target !== current) viewport.scrollTo({left: target, behavior: animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'auto'});
    };
    const selectCareer = (tab, updateUrl = true) => {
      tabs.forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
      });
      if (updateUrl) history.replaceState(null, '', '#' + tab.getAttribute('aria-controls'));
      revealCareer(tab, updateUrl);
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectCareer(tab));
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        selectCareer(tabs[next]);
        tabs[next].focus({preventScroll: true});
      });
    });
    const requestedCareerHash = location.hash === '#experience-ai' ? '#experience-product' : location.hash;
    const initialTab = tabs.find(tab => '#' + tab.getAttribute('aria-controls') === requestedCareerHash);
    if (initialTab) selectCareer(initialTab, false);
    else {
      const selected = tabs.find(tab => tab.getAttribute('aria-selected') === 'true');
      if (selected) revealCareer(selected, false);
    }
  }

  /* Case contents: close the mobile disclosure and reveal a collapsed story before following anchors. */
  document.querySelectorAll('.case-contents-link').forEach(link => link.addEventListener('click', () => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    const story = target && target.closest('.cs2-story');
    if (story) {
      story.classList.add('is-open');
      const toggle = document.querySelector('.cs2-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
    }
    const mobile = document.querySelector('.case-contents-mobile');
    if (mobile) mobile.open = false;
  }));

  /* Responsive navigation */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      mobileMenu.hidden = !open;
    });
    mobileMenu.addEventListener('click', e => { if (e.target.closest('a')) { mobileMenu.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation'); } });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mobileMenu.hidden) { mobileMenu.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation'); menuToggle.focus(); } });
  }

  /* Diagram enlargement: native modal handles focus containment and Escape. */
  const diagramTrigger = document.querySelector('.diagram-zoom-trigger');
  const diagramDialog = document.getElementById('leadership-diagram-dialog');
  if (diagramTrigger && diagramDialog && typeof diagramDialog.showModal === 'function') {
    const closeDiagram = () => diagramDialog.close();
    diagramTrigger.addEventListener('click', () => diagramDialog.showModal());
    diagramDialog.querySelector('.diagram-dialog-close').addEventListener('click', closeDiagram);
    diagramDialog.addEventListener('click', event => {
      if (event.target !== diagramDialog) return;
      const bounds = diagramDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDiagram();
    });
    diagramDialog.addEventListener('close', () => diagramTrigger.focus({preventScroll:true}));
  }

  /* Active nav on scroll (home only) */
  if (onHome) {
    const links = document.querySelectorAll('.nav a');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.dataset.id === e.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    live.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    if (location.hash && document.body.dataset.prerendered !== 'true') { const t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) t.scrollIntoView({behavior:'instant'}); }
  }

  /* Case study v2: "Read the full story" toggle */
  document.addEventListener('click', e => {
    const t = e.target.closest('.cs2-toggle');
    if (!t) return;
    const open = t.getAttribute('aria-expanded') !== 'true';
    t.setAttribute('aria-expanded', String(open));
    document.getElementById(t.getAttribute('aria-controls')).classList.toggle('is-open', open);
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
  if (false && gc && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.dataset.goatcounter = `https://${gc}.goatcounter.com/count`;
    document.body.appendChild(s);
  }
})();

