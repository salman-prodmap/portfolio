/* Progressive enhancement for the homepage HR section only. */
(function () {
  const sections = document.querySelectorAll('.now-section');
  const preference = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  if (!sections.length || preference?.matches || !('IntersectionObserver' in window)) return;
  let observer;
  const revealAll = () => { sections.forEach(section => { section.classList.remove('animator-reveal'); section.classList.add('is-visible'); }); observer?.disconnect(); };
  try {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.14 });
    sections.forEach(section => { section.classList.add('animator-reveal'); observer.observe(section); });
  } catch (_) { revealAll(); }
  preference?.addEventListener?.('change', event => { if (event.matches) revealAll(); });
}());
