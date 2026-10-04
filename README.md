# Hiddenhall Tattoo

Sitio web del estudio de tatuajes **Hiddenhall**, en Río Gallegos, Santa Cruz.

Landing page de una sola página con presentación del estudio, servicios, artistas, galería, reseñas y datos de contacto.

- **Producción:** https://hidennhalltattoo.vercel.app/
- **Repositorio:** https://github.com/leandrocalfin/tattoo_hidennhall

---

## Stack

| Tecnología | Versión |
| --- | --- |
| Next.js (App Router) | 16.3.8 |
| React | 19.2.8 |
| TypeScript | 5 (`strict: true`) |
| Tailwind CSS | 4 |
| ESLint | 9 (`eslint-config-next`) |
| Node.js | >= 20.9.0 |

El sitio es 100% estático: `next build` prerenderiza todas las rutas, no hay funciones serverless ni base de datos.

---

## Requisitos

- Node.js 20.9 o superior (probado con v24.14.1)
- npm 10 o superior

---

## Puesta en marcha

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo en http://localhost:3000
```

### Scripts

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción en `.next/` |
| `npm run start` | Sirve el build de producción (requiere `build` antes) |
| `npm run lint` | ESLint sobre todo el proyecto |

No hay test suite configurado. La verificación antes de commitear es:

```bash
npx tsc --noEmit && npm run lint && npm run build
```

---

## Estructura

```
src/
  app/
    layout.tsx        Metadata, carga de tipografías y <html>/<body>
    page.tsx          Toda la landing: secciones y datos (servicios, artistas)
    globals.css       Tokens de Tailwind, animaciones y estilos propios
    favicon.ico       Generado desde public/logo.png
    icon.png          Ícono 128x128
    apple-icon.png    Ícono 180x180 para iOS
  components/
    Navbar.tsx        Header fijo con navegación y logo animado
    Hero.tsx          Título principal y subtítulo
    Gallery.tsx       Galería con scroll infinito y lightbox
    Reviews.tsx       Reseñas de Google (datos en el propio archivo)
    Footer.tsx        Pie con logo, copyright y fondo de estrellas
    ScrollReveal.tsx   Revela elementos al entrar en viewport
    Starfield.tsx     Fondo de puntos titilantes
  fonts/
    *.woff2           5 tipografías locales (ver sección Tipografías)

public/
  galeria/            98 imágenes de trabajos
  video.webm          Video del estudio (VP9, sin audio)
  video.mp4           Fallback del video (H.264, sin audio)
  poster.jpg          Poster del video
  logo.png            Logo del estudio
  Beast.jpg, Morti.png, Pala.jpg, Palita.png, Zombie.jpg   Fotos de artistas
```

Alias de importación configurado: `@/` apunta a `src/`.

---

## Dónde cambiar el contenido

Casi todo el contenido editable vive en `src/app/page.tsx`, al principio del archivo:

| Qué | Dónde |
| --- | --- |
| Título y clases de los títulos de sección | `SECTION_TITLE`, línea 8 |
| Catálogo de servicios (5) | `services`, línea 11 |
| Artistas: nombre, estilo, foto y WhatsApp (5) | `artists`, línea 44 |
| Número de WhatsApp general | líneas 147, 182, 283 y 331 |
| Instagram | `https://www.instagram.com/hiddenhallstudio/`, líneas 124, 159 y 292 |
| Reseñas (7) | `reviews` en `src/components/Reviews.tsx`, línea 3 |
| Título y descripción del sitio (SEO) | `metadata` en `src/app/layout.tsx`, línea 45 |
| Coordenadas del mapa | `src/app/page.tsx`, iframe de Google Maps |
| Teléfono y redes del footer | `src/components/Footer.tsx` |

> **Ojo:** el número de WhatsApp general está repetido en cuatro lugares distintos (líneas 147, 182, 283 y 331), y además es el mismo que el de Morti en el array `artists` (línea 50). Si lo cambiás, cambialo en todos o te van a quedar números viejos dando vueltas.

Las secciones de la página, en orden, son: `inicio`, `estudio`, `servicios`, `artistas`, `galeria`, `contacto`. Los anchors del navbar apuntan a esos IDs.

---

## Tipografías

Cinco tipografías locales más una de Google, todas cargadas con `next/font` (sin `@font-face` manuales).

Se registran en `src/app/layout.tsx` como variables CSS y se expone como utilidades de Tailwind en el bloque `@theme` de `src/app/globals.css`:

| Variable | Archivo | Utilidad | Dónde se usa |
| --- | --- | --- | --- |
| `--nf-kong` | `Kong.woff2` | `font-humingson` | Títulos de sección y `h1` |
| `--nf-hackney` | `Hackney.woff2` | `font-brush` | Subtítulo del hero, navbar, nombres de servicios y artistas |
| `--nf-blackrush` | `Blackrush.woff2` | `font-subtitle` | Subtítulos destacados |
| `--nf-kgred` | `KGRedHands.woff2` | `font-body` | Texto corrido y descripciones |
| `--nf-komika` | `KomikaAxis.woff2` | `font-komika` | Etiquetas en uppercase |
| Cormorant Garamond | vía Google Fonts | `font-serif` / `font-sans` | Variables `--font-serif` y `--font-sans` |

Detalles a tener en cuenta:

- Las cinco locales usan `display: "block"`. Sin esto las fuentes no tienen fallback y el texto se muestra invisible hasta que cargan.
- `next/font` agrega un hash del contenido al nombre del archivo (`Kong-s.p.2qyk1rez9zc3n.woff2`). Si cambiás el contenido de una fuente, la URL cambia sola y el cache se invalida: **no hace falta renombrar el archivo a mano**.
- `--font-sans` y `--font-serif` apuntan ambos a Cormorant Garamond. Si querés diferenciar la tipografía del cuerpo, editá el bloque `@theme` en `globals.css` y la declaración `sans` en `layout.tsx`.

### Licencias de las tipografías

**Las cinco tipografías locales no tienen licencia de uso comercial verificada.** Antes de vender o publicar el sitio para el cliente hay que confirmar la licencia de cada una en su fuente original.

La fuente `Traffic` que se usaba antes fue eliminada del proyecto justamente porque su licencia era de uso personal y no comercial.

---

## Galería

`src/components/Gallery.tsx` construye el listado de imágenes de forma programática:

```ts
const images = Array.from({ length: 98 }, (_, i) => {
  const num = i + 1;
  const ext = [23, 26, 31, 38, 76, 77, 78, 79, 83, 84, 85, 87, 93, 95].includes(num) ? ".heic" : ".jpg";
  return `/galeria/${num}${ext}`;
});
```

La galería son tres filas con scroll infinito (el duplicado de la fila es lo que hace el bucle) y un lightbox con navegación por teclado (`Esc`, flechas izquierda y derecha).

> Si agregás o sacás imágenes, actualizá **la cantidad (98)** y **la lista de extensiones HEIC**. Vercel sí convierte los `.heic` a JPEG en el optimizador de `next/image`, pero los archivos tienen que existir en `public/galeria/` con el nombre exacto, numeración consecutiva desde 1.

---

## Video

El video del estudio se reproduce en loop, sin audio y con autoplay, en dos formatos para cobertura de navegadores:

- `public/video.webm` — VP9, 480x854 (~3,3 MB)
- `public/video.mp4` — H.264, 480x854 (~4,2 MB), fallback

El orden de los `<source>` en `page.tsx` importa: el navegador toma el primero que soporta.

---

## Seguridad

`next.config.ts` define una CSP y headers de seguridad que se aplican a todas las rutas:

| Header | Valor |
| --- | --- |
| `Content-Security-Policy` | Ver abajo |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | desactiva cámara, micrófono, geolocalización y pagos |

La CSP permite `frame-src https://www.google.com` **únicamente** para el mapa embebido de Google Maps de la sección de contacto. Si sacás el iframe, sacá también esa directiva.

`'unsafe-eval'` se agrega a `script-src` solo en desarrollo; en producción no está.

---

## Accesibilidad

- `prefers-reduced-motion` desactiva todas las animaciones (scroll de la galería, marquee, estrellas, balanceo del logo) y el scroll suave.
- Con reduced motion, `.reveal` arranca en `opacity: 1` para que el contenido quede visible aunque `ScrollReveal` no corra.
- El lightbox cierra con `Esc` y la navegación tiene etiquetas `aria-label`.
- El HTML declara `lang="es"`.

---

## Variables de entorno

**No hay ninguna.** El sitio no lee `process.env` en ningún archivo de `src/`, y no hay archivo `.env.example` ni `vercel.json`.

El project no necesita configuración en Vercel: importás el repositorio y listo. Vercel detecta Next.js solo.

---

## Deploy

El repositorio está conectado a Vercel, así que **cada push a `main` dispara un deploy automático**.

Si necesitás deployar a mano:

```bash
npm run build
npx vercel --prod
```

- Node: no hay campo `engines` en `package.json`, así que Vercel usa su versión por defecto (compatible, ya que pide >= 20.9.0). Fijalo si querés reproducibilidad.
- Build command: `npm run build`
- Framework preset: Next.js (detectado automáticamente)

---

## Pendientes conocidos

Cosas que están pendientes o que conviene tener en cuenta. Ninguna bloquea el deploy.

1. **`npm audit`: 5 vulnerabilidades high** por `CVE-2026-93687` en `braces@3.0.3`. Es transitiva de ESLint, o sea que solo afecta al entorno de desarrollo y **no llega a producción**. No hay parche upstream disponible, así que se resuelve solo cuando ESLint actualice su árbol de dependencias. No aplicar `npm audit fix --force`.

2. **Licencias de las tipografías sin verificar.** Ver la sección de arriba. Es el punto más importante a resolver antes de vender el sitio.

3. **No hay archivo `LICENSE`.** El `package.json` está en `private: true`, así que el repo no se publica en npm por error, pero falta definir la licencia del código.

4. **No hay `engines` fijado** en `package.json` ni `.nvmrc`.

5. **`--font-sans` y `--font-serif` son la misma fuente** (Cormorant Garamond), probablemente un residuo de una decisión anterior.

6. **Los datos de contacto están duplicados** en varias líneas de `page.tsx`. Ver la nota en "Dónde cambiar el contenido".

---

## Créditos

Desarrollado por **Leandro Calfin**.
