(() => {
  const gate = document.getElementById('ageGate');
  const confirm = document.getElementById('confirmAge');
  try {
    if (sessionStorage.getItem('desireplay-age-confirmed') === 'yes') gate?.classList.add('hidden');
  } catch (_) {}
  confirm?.addEventListener('click', () => {
    try { sessionStorage.setItem('desireplay-age-confirmed', 'yes'); } catch (_) {}
    gate?.classList.add('hidden');
  });
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();