# DesirePlay — versión estática para GitHub Pages

Sitio estático bilingüe español/inglés en HTML/CSS/JS, sin build ni dependencias. Incluye age-gate en todas las rutas HTML, páginas de categoría, cinco guías editoriales y un catálogo filtrable de 15 juegos para adultos en tres sectores, SEO técnico básico, sitemap, robots.txt, páginas legales iniciales y los enlaces de afiliación Awin proporcionados (conservados sin cambios).

## Publicar en GitHub Pages
1. Descomprime el ZIP.
2. Sube **el contenido de esta carpeta** a la raíz de `amule-rh/DesirePlay` en la rama `main` (no subas la carpeta contenedora).
3. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root)**.
4. La URL canónica configurada es `https://desiresplay.online/`. Confirma que el dominio personalizado y sus DNS estén configurados en GitHub Pages antes de publicar.
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
- El age-gate se aplica en la navegación del sitio y recuerda la confirmación durante la sesión del navegador; es una barrera básica, no una verificación de edad robusta.
- Los artículos de juegos no inventan destinos afiliados. Añade un enlace de producto solo cuando esté verificado y claramente identificado como comercial.
