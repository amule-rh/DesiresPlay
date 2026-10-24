(() => {
  const isEnglish = document.documentElement.lang.toLowerCase().startsWith('en');

  // Connection bingo: marks remain in memory only and are discarded on reload.
  const bingo = document.querySelector('[data-bingo-board]');
  if (bingo) {
    const cells = [...bingo.querySelectorAll('[data-bingo-cell]')];
    const status = document.querySelector('[data-bingo-status]');
    const reset = document.querySelector('[data-bingo-reset]');
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    const sayStatus = () => {
      if (!status) return;
      const selected = cells.map(cell => cell.getAttribute('aria-pressed') === 'true');
      const hasLine = lines.some(line => line.every(index => selected[index]));
      const count = selected.filter(Boolean).length;
      if (hasLine) {
        status.textContent = isEnglish
          ? 'A line of shared interests. Choose only one prompt you both want to discuss.'
          : '¡Una línea de afinidades! Elegid solo una pregunta que a ambas personas les apetezca conversar.';
      } else {
        status.textContent = isEnglish
          ? `${count} of 9 squares marked. Leave any prompt blank if either person prefers to pass.`
          : `${count} de 9 casillas marcadas. Dejad en blanco cualquiera que alguien prefiera pasar.`;
      }
    };
    cells.forEach(cell => cell.addEventListener('click', () => {
      const pressed = cell.getAttribute('aria-pressed') === 'true';
      cell.setAttribute('aria-pressed', String(!pressed));
      sayStatus();
    }));
    reset?.addEventListener('click', () => {
      cells.forEach(cell => cell.setAttribute('aria-pressed', 'false'));
      sayStatus();
      cells[0]?.focus();
    });
    sayStatus();
  }

  // A two-minute optional pause. No sound, tracking, or persisted state.
  const timer = document.querySelector('[data-pause-timer]');
  if (timer) {
    const display = timer.querySelector('[data-timer-display]');
    const status = timer.querySelector('[data-timer-status]');
    const start = timer.querySelector('[data-timer-start]');
    const pause = timer.querySelector('[data-timer-pause]');
    const reset = timer.querySelector('[data-timer-reset]');
    const total = 120;
    const initialStartLabel = start?.textContent ?? '';
    let remaining = total;
    let interval = null;
    const format = seconds => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    const render = () => {
      if (display) display.textContent = format(remaining);
    };
    const stop = () => {
      if (interval !== null) window.clearInterval(interval);
      interval = null;
    };
    const startTimer = () => {
      if (interval !== null || remaining <= 0) return;
      if (start) { start.disabled = true; start.textContent = isEnglish ? 'In progress…' : 'En marcha…'; }
      if (status) status.textContent = isEnglish ? 'Take this pause at your own pace.' : 'Tomad esta pausa a vuestro ritmo.';
      interval = window.setInterval(() => {
        remaining = Math.max(0, remaining - 1);
        render();
        if (remaining === 0) {
          stop();
          if (start) { start.disabled = true; start.textContent = isEnglish ? 'Complete' : 'Terminada'; }
          if (status) status.textContent = isEnglish
            ? 'Pause complete. Talk, stay quiet, or leave it here—your choice.'
            : 'Pausa terminada. Podéis hablar, guardar silencio o dejarlo aquí; es vuestra elección.';
        }
      }, 1000);
    };
    start?.addEventListener('click', startTimer);
    pause?.addEventListener('click', () => {
      if (interval === null) return;
      stop();
      if (start) { start.disabled = false; start.textContent = isEnglish ? 'Resume' : 'Reanudar'; }
      if (status) status.textContent = isEnglish ? 'Paused. Resume whenever you like.' : 'En pausa; podéis continuar cuando queráis.';
    });
    reset?.addEventListener('click', () => {
      stop();
      remaining = total;
      if (start) { start.disabled = false; start.textContent = initialStartLabel; }
      render();
      if (status) status.textContent = isEnglish ? 'Ready when you are.' : 'Lista cuando queráis.';
      start?.focus();
    });
    render();
  }

  // Fiction-only scene prompts are generated in the browser and never saved.
  const scene = document.querySelector('[data-scene-generator]');
  if (scene) {
    const output = {
      setting: scene.querySelector('[data-scene-setting]'),
      mood: scene.querySelector('[data-scene-mood]'),
      object: scene.querySelector('[data-scene-object]')
    };
    const sets = isEnglish ? {
      setting: ['a quiet bookshop at closing time', 'a small station on a rainy evening', 'a gallery before it opens', 'a seaside café in the off-season', 'a train paused between towns', 'a hotel lobby with an old clock', 'a garden just after sunrise', 'a tiny cinema before the film'],
      mood: ['curious', 'dreamy', 'gently funny', 'mysterious', 'hopeful', 'playful', 'tender', 'unexpected'],
      object: ['a brass key', 'a blank postcard', 'a folded ticket', 'a red umbrella', 'a paper star', 'a ribbon bookmark', 'a little bell', 'a sealed envelope']
    } : {
      setting: ['una librería tranquila al cerrar', 'una estación pequeña en una tarde de lluvia', 'una galería antes de abrir', 'un café junto al mar fuera de temporada', 'un tren detenido entre dos pueblos', 'el vestíbulo de un hotel con un reloj antiguo', 'un jardín justo después del amanecer', 'un cine pequeño antes de la película'],
      mood: ['curiosa', 'soñadora', 'ligeramente cómica', 'misteriosa', 'esperanzada', 'juguetona', 'tierna', 'inesperada'],
      object: ['una llave de latón', 'una postal en blanco', 'un billete doblado', 'un paraguas rojo', 'una estrella de papel', 'un marcapáginas de cinta', 'una campanilla', 'un sobre cerrado']
    };
    let previous = { setting: '', mood: '', object: '' };
    const choose = (items, last) => {
      const pool = items.filter(item => item !== last);
      return pool[Math.floor(Math.random() * pool.length)];
    };
    const generate = () => {
      for (const key of Object.keys(output)) {
        previous[key] = choose(sets[key], previous[key]);
        if (output[key]) output[key].textContent = previous[key];
      }
    };
    scene.querySelector('[data-scene-new]')?.addEventListener('click', generate);
    generate();
  }
})();
