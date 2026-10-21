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
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  const routePairs = {
    '/': '/en/',
    '/juegos/': '/en/games/',
    '/juegos-de-mesa-eroticos/': '/en/games/',
    '/guias/': '/en/guides/',
    '/guias/juegos-de-mesa/': '/en/guides/board-games.html',
    '/guias/dados-eroticos/': '/en/guides/dice.html',
    '/guias/cartas-eroticas/': '/en/guides/cards.html',
    '/guias/juego-botella-adulto/': '/en/guides/bottle.html',
    '/guias/verdad-o-reto-adulto/': '/en/guides/truth-or-dare.html',
    '/juguetes-sexuales/': '/en/categories/sex-toys.html',
    '/lenceria-erotica/': '/en/categories/lingerie.html',
    '/lubricantes-cuidados/': '/en/categories/lube-care.html',
    '/parejas-bienestar-sexual/': '/en/categories/couples.html',
    '/dados-eroticos/': '/en/guides/dice.html',
    '/privacidad.html': '/en/legal/privacy.html',
    '/cookies.html': '/en/legal/cookies.html',
    '/aviso-legal.html': '/en/legal/legal-notice.html',
    '/afiliacion.html': '/en/legal/affiliate.html',
    '/codigo-de-la-casa.html': '/en/legal/house-code.html',
    '/en/': '/',
    '/en/games/': '/juegos/',
    '/en/guides/': '/guias/',
    '/en/guides/board-games.html': '/guias/juegos-de-mesa/',
    '/en/guides/dice.html': '/guias/dados-eroticos/',
    '/en/guides/cards.html': '/guias/cartas-eroticas/',
    '/en/guides/bottle.html': '/guias/juego-botella-adulto/',
    '/en/guides/truth-or-dare.html': '/guias/verdad-o-reto-adulto/',
    '/en/categories/sex-toys.html': '/juguetes-sexuales/',
    '/en/categories/lingerie.html': '/lenceria-erotica/',
    '/en/categories/lube-care.html': '/lubricantes-cuidados/',
    '/en/categories/couples.html': '/parejas-bienestar-sexual/',
    '/en/legal/privacy.html': '/privacidad.html',
    '/en/legal/cookies.html': '/cookies.html',
    '/en/legal/legal-notice.html': '/aviso-legal.html',
    '/en/legal/affiliate.html': '/afiliacion.html',
    '/en/legal/house-code.html': '/codigo-de-la-casa.html'
  };
  let route = location.pathname.replace(/index\.html$/, '');
  if (!route.startsWith('/')) route = `/${route}`;
  if (!route.endsWith('/') && !route.split('/').pop().includes('.')) route += '/';
  const header = document.querySelector('.site-header');
  if (header && !header.querySelector('.language-switch')) {
    const switcher = document.createElement('a');
    const english = route.startsWith('/en/');
    switcher.className = 'language-switch';
    switcher.href = routePairs[route] || (english ? '/' : '/en/');
    switcher.textContent = english ? 'ES' : 'EN';
    switcher.setAttribute('aria-label', english ? 'Ver en español' : 'View in English');
    const anchor = header.querySelector('.header-cta');
    header.insertBefore(switcher, anchor || null);
  }

  const filters = [...document.querySelectorAll('.game-filter')];
  const games = [...document.querySelectorAll('.game-card')];
  if (filters.length && games.length) {
    const search = document.getElementById('gameSearch');
    const count = document.getElementById('gameCount');
    const empty = document.getElementById('emptyGames');
    const surprise = document.getElementById('surpriseGame');
    const isEnglish = document.documentElement.lang.startsWith('en');
    let activeFilter = 'all';
    const applyFilter = () => {
      const query = search?.value.trim().toLocaleLowerCase() || '';
      filters.forEach(button => {
        button.classList.toggle('is-active', button.dataset.filter === activeFilter);
        button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter));
      });
      const visible = games.filter(card => {
        const sectorMatch = activeFilter === 'all' || card.dataset.sector === activeFilter;
        const searchMatch = !query || card.textContent.toLocaleLowerCase().includes(query);
        card.hidden = !(sectorMatch && searchMatch);
        return !card.hidden;
      });
      if (count) count.textContent = isEnglish ? `${visible.length} ${visible.length === 1 ? 'idea' : 'ideas'} shown` : `${visible.length} ${visible.length === 1 ? 'idea' : 'ideas'} visibles`;
      if (empty) empty.hidden = visible.length > 0;
      if (surprise) surprise.disabled = visible.length === 0;
      return visible;
    };
    filters.forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.filter; applyFilter(); }));
    search?.addEventListener('input', applyFilter);
    surprise?.addEventListener('click', () => {
      const visible = applyFilter();
      if (!visible.length) return;
      const picked = visible[Math.floor(Math.random() * visible.length)];
      games.forEach(card => card.classList.remove('game-picked'));
      picked.classList.add('game-picked');
      const heading = picked.querySelector('h3')?.textContent.trim() || '';
      picked.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center'});
      picked.focus({preventScroll: true});
      if (count) count.textContent = isEnglish ? `Your surprise game: ${heading}` : `Os proponemos: ${heading}`;
      window.setTimeout(() => picked.classList.remove('game-picked'), 2400);
    });
    applyFilter();
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
