/* ============================================================
   Datos livianos del blog (categorías, tipos y utilidades).
   Separados de lib/blog.ts para que las páginas que no son del blog
   no carguen las 34 notas ni el procesador de Markdown.
   ============================================================ */

export const CATEGORIES = [
  { label: "Organización operativa", slug: "organizacion-operativa" },
  { label: "Excel y planillas", slug: "excel-y-planillas" },
  { label: "Control y trazabilidad", slug: "control-y-trazabilidad" },
  { label: "Logística por sector", slug: "logistica-por-sector" },
  { label: "Software logístico", slug: "software-logistico" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
export type Intent = "tofu" | "mofu" | "bofu";

export interface Post {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO yyyy-mm-dd
  updatedAt?: string;
  author: string;
  category: (typeof CATEGORIES)[number];
  keywords: string[];
  image?: string; // ruta bajo /public, ej: /blog/mi-portada.png
  imageAlt?: string;
  draft: boolean;
  intent: Intent;
  pillar: boolean;
  readingMinutes: number;
  html: string;
  toc: { id: string; text: string; level: number }[];
}

/** Mostrar borradores en los listados (útil para revisar contenido de prueba).
 *  Para el lanzamiento real: poner en false y los drafts desaparecen de /blog,
 *  aunque su URL directa sigue funcionando (con noindex y aviso de borrador). */
export const SHOW_DRAFTS_IN_LIST = true;

export const SITE_URL = "https://rutia.com.ar";
export const POSTS_PER_PAGE = 9;

/* ---------- utilidades ---------- */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  return `${d} de ${meses[m - 1]} de ${y}`;
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
