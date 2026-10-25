/* Local preview only. Cards remain visible without JavaScript or observers. */
(()=>{
 const cards=[...document.querySelectorAll('body[data-page="cases"] .project-card, .gallery-page .gallery-grid .sample')];
 const preference=window.matchMedia?.('(prefers-reduced-motion: reduce)');
 if(!cards.length||preference?.matches||!('IntersectionObserver' in window))return;
 let observer;const seen=new WeakSet();
 const stop=()=>{observer?.disconnect();cards.forEach(card=>card.classList.remove('card-motion-enter'));};
 try{
  observer=new IntersectionObserver(entries=>{let order=0;entries.forEach(entry=>{if(!entry.isIntersecting||seen.has(entry.target)||entry.target.hidden)return;seen.add(entry.target);entry.target.style.setProperty('--card-motion-delay',Math.min(order++,2)*90+'ms');entry.target.classList.add('card-motion-enter');observer.unobserve(entry.target);});},{threshold:.08});
  cards.forEach(card=>observer.observe(card));
 }catch(_){stop();}
 preference?.addEventListener?.('change',event=>{if(event.matches)stop();});
})();
