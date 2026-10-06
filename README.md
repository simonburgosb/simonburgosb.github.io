# Portafolio de Simón Burgos — nueva versión

Sitio estático para GitHub Pages. No requiere npm, Node, frameworks ni compilación.

## Archivos principales

- `index.html`: inicio y presentación profesional.
- `styles.css`: sistema visual compartido y reglas responsive.
- `script.js`: traducciones, selector de idioma, menú móvil, navegación activa, ampliación de imágenes y formulario.
- `RedesignRappi/index.html`, `MemoriaViva/index.html`, `InvisibleIntruders/index.html`: casos de estudio.
- Las imágenes, el video de Memoria Viva y los tres currículos están incluidos en sus rutas originales.

## Cómo reemplazar la versión anterior

1. Guarda una copia de tu repositorio actual.
2. Extrae el ZIP y copia **el contenido** de `portfolio-uiux` a la raíz del repositorio de tu portafolio. No copies esa carpeta como una subcarpeta adicional.
3. Reemplaza los archivos con el mismo nombre. Los casos nuevos usan `../styles.css` y `../script.js`; sus CSS y JavaScript anteriores pueden quedar sin usarse.
4. Prueba el inicio y las tres páginas de proyecto antes de subir los cambios.
5. Publica mediante el flujo de GitHub Pages que ya tienes configurado.

## Vista previa local

Puedes abrir `index.html` directamente en el navegador para revisar el contenido y navegar entre casos. Para probar el formulario desde un servidor local, usa Live Server en Visual Studio Code o, si tienes Python:

```bash
cd ruta/de/tu/portafolio
python -m http.server 8000
```

En Windows también puedes usar `py -m http.server 8000`. Abre `http://localhost:8000` y detén el servidor con `Ctrl+C`.

## Contacto

Se conserva tu endpoint de Formspree: `https://formspree.io/f/xkjwjgnq`. Se eliminó la integración incompleta de EmailJS. El HTML conserva un envío POST nativo si JavaScript está desactivado.

El JavaScript muestra confirmación solo cuando el servicio responde correctamente. Si ocurre un error o no puede confirmar la recepción, conserva el texto del mensaje y ofrece el correo directo.

**Antes de compartirlo:** comprueba en tu cuenta de Formspree que el formulario está activo, que el correo de destino es correcto y que el dominio publicado está permitido si configuraste restricciones. Envía tú un mensaje de prueba y verifica que lo recibes. Durante la preparación del código no se enviaron mensajes reales.

## Personalización

- Colores, espaciados y tamaños compartidos: tokens al inicio de `styles.css`.
- Textos y contenido de los casos: sus respectivos `index.html`.
- Contacto: `mailto:` del inicio, más la dirección del mensaje de error en `script.js`.
- Currículos: sustituye los PDFs conservando sus nombres para mantener los enlaces.
- Las cuatro páginas ofrecen contenido en español, inglés y francés, con los currículos originales en cada idioma.

## Idiomas y descargas del CV

En la barra de navegación de las cuatro páginas puedes elegir **Español**, **English** o **Français**. En pantallas pequeñas se muestran **ES**, **EN** y **FR**, siempre visibles junto al botón del menú. El selector cambia los textos, menús, botones, títulos de pestaña, metadatos, descripciones de imágenes, etiquetas del formulario y mensajes de interacción.

La selección se guarda en el navegador. Los enlaces internos también llevan `?lang=es`, `?lang=en` o `?lang=fr` para conservarla si el almacenamiento está desactivado y para compartir enlaces en un idioma concreto. El parámetro del enlace tiene prioridad sobre una selección guardada.

Las traducciones están incluidas en `script.js`; no dependen de un servicio de traducción externo ni de archivos adicionales. Al modificar una frase en el HTML, actualiza también esa frase y sus traducciones en el objeto `dictionaries` al inicio del JavaScript.

El inicio conserva su sección de CV con tres tarjetas grandes. Cada tarjeta descarga el PDF del idioma indicado. El footer del inicio no incluye descargas del CV; los footers de los tres proyectos conservan los tres accesos. El botón de la barra de navegación y el botón del inicio abren automáticamente el CV del idioma seleccionado para el sitio.

Los nombres propios, las marcas, los textos incrustados en las imágenes, el contenido de los prototipos externos y los videos conservan su versión original. Sus descripciones y los textos que los acompañan sí cambian de idioma.

## Contenido y evidencia

La nueva versión reorganiza y traduce los datos del portafolio original. No incorpora cifras de participantes, citas de entrevistas ni resultados medidos que no estaban documentados. Las siguientes evaluaciones se presentan como propuestas de validación.

Para fortalecer tus casos, añade cuando los tengas: número y perfil de participantes, fuentes de investigación, artefactos propios, capturas de wireframes, cambios entre versiones y resultados de pruebas. Confirma también los títulos de tu carrera y tus roles antes de publicar.

Las imágenes faltantes `process.png` y `maxilibro.png` no se utilizan. Maxilibro se explica con un esquema de interacción en HTML, identificado como esquema explicativo. Las piezas de Mapa de Memorias y Chismógrafo se presentan como material del producto, no como pantallas de uso.

## Revisión antes de publicar

- Inicio, navegación de los tres casos y botón de regreso a proyectos.
- Menú, selector de idioma y tarjetas de CV a 320, 375, 768 y 1440 px, además de orientación horizontal.
- Navegación con teclado, cierre del menú con Escape y ampliación de imágenes.
- Formularios: campos obligatorios, envío correcto y mensaje de error.
- Descarga/apertura de los tres PDFs y reproducción del video de Memoria Viva.
- Cambio de idioma en las cuatro páginas, conservación al navegar y CV automático del idioma elegido.
- Enlaces externos: Figma, proyecto Memoria Viva, LinkedIn y gameplay.
- Chrome, Firefox, Safari y un teléfono real.

La apertura de la vista local en el navegador automatizado de este entorno está restringida. La entrega incluye comprobaciones de estructura, rutas, sintaxis y comportamiento del JavaScript en un DOM de prueba; no equivale a una revisión visual completa en todos los navegadores.

Comprobaciones realizadas: 149 referencias locales y anclas revisadas; sintaxis de JavaScript y CSS; apertura/cierre del menú y foco del teclado; apertura/cierre de imágenes; envío simulado correcto, error del servicio, fallo de red, prevención de doble envío y formulario inválido. Se comprobó el selector de idiomas en la navbar de las cuatro páginas, la ausencia del CV en el footer del inicio y su conservación en los proyectos. Se comprobó la traducción de los textos y atributos, la preferencia guardada, el parámetro de idioma, el funcionamiento sin almacenamiento y los mensajes mientras se cambia de idioma durante un envío. La revisión automatizada de accesibilidad del DOM no encontró incidencias en las cuatro páginas; el contraste y la disposición visual requieren comprobación en navegador.
