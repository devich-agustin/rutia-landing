# 📝 Cómo publicar una nota en el blog de Rutia

Publicar no requiere tocar código. Todo se hace desde GitHub en el navegador.

## Publicar una nota nueva (5 minutos)

1. Entrá al repo → carpeta **`src/content/blog`**.
2. **Add file → Create new file**.
3. Nombrá el archivo con el slug de la nota + `.md`. El nombre del archivo **es la URL**:
   `como-reducir-entregas-fallidas.md` → `rutia.com.ar/blog/como-reducir-entregas-fallidas`
   (minúsculas, sin espacios, sin acentos, palabras separadas con guiones — pensalo como el título para Google).
4. Pegá esta plantilla y completala:

```
---
title: "Título de la nota (60-70 caracteres, con la keyword principal)"
description: "Descripción para Google y las cards (140-160 caracteres)."
publishedAt: 2026-07-20
author: Equipo de Rutia
category: organizacion-operativa
keywords: [keyword principal, keyword secundaria, otra keyword]
intent: tofu
draft: false
---

Acá empieza el contenido en Markdown.

## Los subtítulos van con dos numerales

Texto normal. **Negrita** con dos asteriscos. Listas con guiones:

- Un punto
- Otro punto

### Subtítulo menor, con tres numerales
```

5. Abajo de todo: **Commit changes** → directo a `main`.
6. Vercel publica solo en 1-2 minutos. La nota aparece en `/blog`, en su categoría, en el sitemap y en el RSS automáticamente.

## Los campos, uno por uno

| Campo | Qué es |
|---|---|
| `category` | Una de: `organizacion-operativa` · `excel-y-planillas` · `control-y-trazabilidad` · `logistica-por-sector` · `software-logistico` (si ponés otra cosa, el build falla y te avisa) |
| `intent` | Define el CTA del final: `tofu` (seguir leyendo) · `mofu` (conocer el enfoque de Rutia) · `bofu` (solicitar demo) |
| `draft` | `true` = borrador: visible por URL directa con aviso, pero **no indexable, fuera del sitemap y del RSS**. `false` = publicada. |
| `updatedAt` | (Opcional) Agregalo cuando edites una nota ya publicada: `updatedAt: 2026-08-01` |
| `pillar` | (Opcional) `true` para artículos pilares |
| `slug` | (Opcional) Solo si querés una URL distinta al nombre del archivo |

## Portadas

**No hace falta subir imagen.** Sin imagen, la nota usa la plantilla editorial de Rutia (navy + ruta + categoría) y la preview de redes usa la imagen de marca del sitio. Se ve profesional siempre.

**Para una nota pilar con portada especial:**

1. Creá una imagen de **1200 × 630 px** (Canva sirve; JPG o PNG, ideal < 300 KB).
2. En el repo → carpeta **`public/blog`** → **Add file → Upload files** → arrastrá la imagen → Commit.
3. En el frontmatter de la nota agregá:

```
image: /blog/nombre-de-tu-imagen.png
imageAlt: "Descripción de la imagen para accesibilidad"
```

Esa imagen se usa en la card, en la cabecera de la nota y en la preview de LinkedIn/WhatsApp.

## Editar o despublicar

- **Editar:** abrí el `.md` en GitHub → ícono del lápiz → editá → Commit. Agregá `updatedAt` con la fecha.
- **Despublicar:** cambiá `draft: false` por `draft: true` → Commit.
- **Eliminar:** abrí el archivo → ícono del tachito → Commit.

## Las 3 notas de demostración

Las notas actuales (`[DEMO]` en el título, `draft: true`) son de prueba. Cuando tengas contenido real: borralas o reemplazá su contenido. Y en `src/lib/blog.ts`, cuando quieras que los borradores dejen de verse en el listado, cambiá `SHOW_DRAFTS_IN_LIST = true` por `false`.
