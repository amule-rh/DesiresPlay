# DesirePlay — sitio estático para GitHub Pages

Sitio bilingüe español/inglés hecho con HTML, CSS y JavaScript, sin build ni dependencias. Incluye age-gate en todas las rutas, páginas editoriales y legales, un catálogo de 15 juegos repartidos en tres sectores, reglas rápidas, búsqueda, filtros y selección aleatoria. El catálogo incorpora dos recursos comerciales opcionales de Intimatify con enlaces Awin; los juegos sin producto pertinente conservan sus propuestas gratuitas.

## Publicación

GitHub Pages publica desde `main` y la raíz en [amule-rh.github.io/DesiresPlay](https://amule-rh.github.io/DesiresPlay/). La canonical de las páginas está configurada como `https://desiresplay.online/`, pero, al actualizar este sitio, GitHub Pages no mostraba un dominio personalizado configurado. Para que esa dirección responda, habrá que añadir el dominio en **Settings → Pages** y configurar sus DNS.

## Incluye

- Títulos, descripciones, canonical, Open Graph y enlaces alternativos de idioma.
- JSON-LD `WebSite` en la portada y `Article` en categorías.
- `robots.txt`, `sitemap.xml`, `404.html` y HTML rastreable.
- Aviso de afiliación y enlaces con `sponsored`, `nofollow` y apertura en nueva pestaña.
- Age-gate que conserva la confirmación durante la sesión: barrera básica, no verificación robusta de edad.

## Antes de lanzar

- Completa el responsable y contacto en `aviso-legal.html` y `privacidad.html`.
- Revisa que las políticas reflejen las herramientas realmente usadas.
- Verifica en Awin que los enlaces sigan activos y abran el producto esperado.
- Añade el dominio a Search Console y envía `https://desiresplay.online/sitemap.xml`; el sitemap facilita el descubrimiento, pero no garantiza la indexación.
- Añade enlaces comerciales solo si existe una ficha directa verificada y una relación clara con el contenido.
