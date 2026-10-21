(() => {
  const gate = document.getElementById('ageGate');
  const confirm = document.getElementById('confirmAge');
  const exit = document.getElementById('exitAge');
  const storageKey = 'desireplay-age-confirmed';
  const setGate = (open) => {
    if (!gate) return;
    gate.classList.toggle('hidden', !open);
    document.body.classList.toggle('age-gate-open', open);
    if (open) confirm?.focus();
  };
  try {
    if (sessionStorage.getItem(storageKey) === 'yes') setGate(false);
    else setGate(true);
  } catch (_) { setGate(true); }
  confirm?.addEventListener('click', () => {
    try { sessionStorage.setItem(storageKey, 'yes'); } catch (_) {}
    setGate(false);
  });
  exit?.addEventListener('click', () => {
    try { sessionStorage.removeItem(storageKey); } catch (_) {}
    // The explicit outbound link is the exit route; do not reveal site content.
  });
  gate?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { event.preventDefault(); exit?.focus(); }
  });
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false');
  }));
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
