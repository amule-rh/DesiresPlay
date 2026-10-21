# DesirePlay — versión estática para GitHub Pages

Sitio estático HTML/CSS/JS, sin build ni dependencias. Incluye páginas de categoría, SEO técnico básico, sitemap, robots.txt, páginas legales iniciales, aviso de mayoría de edad y los enlaces de afiliación Awin proporcionados.

## Publicar en GitHub Pages
1. Descomprime el ZIP.
2. Sube **el contenido de esta carpeta** a la raíz de `amule-rh/DesirePlay` en la rama `main` (no subas la carpeta contenedora).
3. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root)**.
4. Este ZIP incluye `CNAME` con `desiresplay.online`. Si todavía no tienes ese dominio configurado en GitHub Pages, configura el dominio y sus DNS antes de publicar, o elimina temporalmente `CNAME` y cambia los canonical/sitemap a la URL final de GitHub Pages.
5. Cuando GitHub Pages publique, abre todas las páginas y prueba los enlaces Awin.

## SEO incluido
- títulos y meta descripciones por página;
- canonical URLs;
- Open Graph básico;
- JSON-LD `WebSite` en portada y `Article` en categorías;
- `robots.txt`, `sitemap.xml`, `404.html`;
- enlaces internos y HTML estático rastreable.

## Antes de lanzar
- Completa el responsable y datos de contacto de `aviso-legal.html` y `privacidad.html`.
- Revisa que las políticas legales reflejen las herramientas realmente usadas.
- Comprueba en Awin que cada deeplink está activo y lleva al producto esperado.
- Añade el dominio a Google Search Console, verifica la propiedad y envía `https://desiresplay.online/sitemap.xml`.
- La inclusión en Google no es inmediata ni garantizada; el sitemap ayuda al descubrimiento, no garantiza indexación.
- El age gate es una barrera de navegación básica, no una verificación de edad robusta.
