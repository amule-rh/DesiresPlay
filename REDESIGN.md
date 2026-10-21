# DesirePlay — dirección visual y arquitectura

## Idea de marca

**El deseo se construye con conversación, curiosidad y respeto.** DesirePlay es una guía editorial para personas adultas que buscan juegos, bienestar íntimo y maneras de conectar sin presión. Su personalidad es cálida, discreta y segura de sí misma. No promete resultados sexuales ni trata el consentimiento como una casilla: lo presenta como una práctica continua, reversible y compartida.

## Dirección visual

Editorial de bienestar íntimo con influencias de Kinfolk, fotografía cinematográfica de luz suave y moda de lujo discreta. La sensualidad procede del gesto, los materiales y el espacio compartido; no de imágenes explícitas. La composición alterna hero a sangre, columnas desiguales, bandas oscuras, márgenes amplios y listas editoriales. Las tarjetas se reservan para comparar juegos o datos útiles, no para toda la página.

### Tokens

- **Tinta:** `#171316` para navegación, fondos profundos y texto de máximo contraste.
- **Crema:** `#F7F2EC` y `#FFFDF9` para lectura larga y superficies editoriales.
- **Rosa polvo:** `#D9A7AE` para un matiz cálido, nunca para texto pequeño sobre fondo claro.
- **Vino DesirePlay:** `#722B47` como acento reconocible en CTAs, enlaces activos y señales de juego.
- **Latón suave:** `#B99A68`, reservado a reglas finas, numeración y detalles.
- **Tipografía:** serif de display para titulares; Inter/system sans para navegación, instrucciones, fichas y controles. Los titulares usan escala fluida con una altura compacta; las instrucciones priorizan legibilidad móvil.
- **Ritmo:** contenedores de 1200 px, separación vertical generosa, radios discretos y bordes finos; sombras solo donde ayudan a separar superficies.
- **Movimiento:** entradas pequeñas y no esenciales, hover de 180–240 ms y desplazamiento suave. Todo respeta `prefers-reduced-motion`; ningún contenido depende de una animación para ser accesible.

### Componentes clave

`site-header` es una barra fija oscura con wordmark, navegación, selector ES/EN y un CTA. `editorial-hero` combina titular y fotografía propia con un recorte adaptable. `consent-note` y `house-principle` hacen visibles la pausa, el paso y la posibilidad de cambiar de opinión. `game-tool` ofrece búsqueda, filtros de intensidad/personas/duración, sorpresa y favoritos guardados localmente. `game-editorial` conserva miniatura, tiempo, participantes y una llamada clara a la ficha completa. `product-feature` mezcla criterio editorial, ficha y divulgación junto al enlace comercial. El age-gate mantiene la marca, el lenguaje claro y el acceso por teclado sin cubrir el sitio con mensajes agresivos.

## Estructura editorial

- `/` y `/en/`: hero cinematográfico; idea central; categorías; bloque de conversación y consentimiento; tres juegos de muestra; selección editorial de productos con disclosure; cita; CTA final y Código de la Casa.
- `/juegos/` y `/en/games/`: exploración de 15 títulos con controles combinables de intensidad, participantes y duración, búsqueda, favoritos y “Sorpréndeme”. Cada ficha tiene enlace permanente.
- `/juegos/<slug>/` y `/en/games/<slug>/`: quince páginas estáticas bilingües, una por juego, con resumen, duración, personas, instrucciones, consejo de consentimiento, variantes y producto opcional cuando existe una recomendación pertinente.
- Categorías de juguetes, lubricación y cuidado, bienestar en pareja y lencería: hero fotográfico y contenido editorial en ambos idiomas, con selección comercial señalada cuando aplica.
- Código de la Casa / House Code: página destacada de principios prácticos, con consentimiento continuo como eje.
- Afiliación / Affiliate notice: explicación clara de comisiones posibles, independencia editorial, límites de las recomendaciones y relación de compra con terceros.
- Guías y páginas legales existentes: se conservan, con navegación y sistema tipográfico coherentes.

## Entrega

Implementación estática y bilingüe sobre el repositorio existente y GitHub Pages. No requiere una migración de plataforma ni introduce dependencias de JavaScript. Mantiene el age-gate actual como barrera básica, los destinos comerciales Awin existentes y el dominio público configurado. Las fichas y el catálogo siguen siendo HTML rastreable.
