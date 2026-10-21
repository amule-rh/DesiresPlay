# DesirePlay — sitio estático para GitHub Pages

Sitio bilingüe español/inglés construido con HTML, CSS y JavaScript, sin herramientas de compilación ni dependencias de ejecución. La nueva dirección editorial combina fotografía original, guías adultas de bienestar, catálogo de juegos de lectura rápida y recomendaciones comerciales claramente opcionales.

## Rediseño y estructura

La portada ES/EN presenta la filosofía “conversación, curiosidad y respeto”, cinco áreas temáticas, conversación previa, una muestra de juegos, selección comercial con divulgación y llamadas a la acción. El catálogo reúne veintiún juegos: quince originales y seis nuevos juegos de rol, con filtros por sector, nivel, participantes y duración; permite buscar, combinar filtros de intensidad, participantes y duración, elegir una sorpresa y guardar favoritos localmente en el navegador. Cada juego tiene ahora una página permanente en ambos idiomas con tres pasos, una pauta de consentimiento y una variación sencilla. Los seis juegos de rol proponen escenas ficticias cotidianas, incluyen una opción grupal y recomiendan acordar una palabra o señal de pausa; no exigen materiales ni contacto.

Hay páginas editoriales bilingües para bienestar en pareja, juguetes íntimos, lubricación y cuidado, lencería, el Código de la Casa y la divulgación de afiliación. Los recursos editoriales propios están en `assets/redesign/`; la hoja visual y sus tokens se describen en [`REDESIGN.md`](REDESIGN.md).

## Publicación

GitHub Pages publica desde `main`, en la raíz del repositorio, en [amule-rh.github.io/DesiresPlay](https://amule-rh.github.io/DesiresPlay/). Las etiquetas canonical conservan `https://desiresplay.online/`, pero GitHub Pages no muestra un dominio personalizado configurado. Para que esa dirección responda, habrá que añadir el dominio en **Settings → Pages** y configurar sus DNS.

## Incluye y criterios

Se mantienen HTML rastreable, metadatos canonical, Open Graph, enlaces `hreflang`, JSON-LD `WebSite` en portada y `Article` en las fichas nuevas, age-gate de 18 años durante la sesión, `robots.txt`, `sitemap.xml` y la página 404. El age-gate es una barrera básica, no una verificación robusta de edad. Las páginas nuevas permanecen estáticas; las únicas preferencias persistentes en el navegador son los favoritos de juegos.

Los enlaces de afiliación Awin existentes se conservaron. Los productos siguen siendo opcionales, aparecen con divulgación y se enlazan desde recomendaciones pertinentes. La tienda controla precios, existencias y condiciones de compra.

## Antes de lanzar

Completa responsable y contacto en `aviso-legal.html` y `privacidad.html`; revisa que las políticas reflejen las herramientas realmente usadas; verifica en Awin que las fichas sigan activas; y, cuando el dominio esté configurado, envía el sitemap a Search Console. Añade enlaces comerciales solo cuando haya una ficha directa verificada y una relación clara con el contenido.
