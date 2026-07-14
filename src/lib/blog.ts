import { marked } from "marked";

/* ============================================================
   Motor del blog de Rutia
   Las notas viven en src/content/blog/*.md con frontmatter.
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
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  return `${d} de ${meses[m - 1]} de ${y}`;
}

/* ---------- frontmatter (YAML simple: clave: valor, listas [a, b]) ---------- */

function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, unknown> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([\w]+):\s*(.*)$/);
    if (!kv) continue;
    let v: unknown = kv[2].trim().replace(/^["']|["']$/g, "");
    if (v === "true") v = true;
    else if (v === "false") v = false;
    else if (typeof v === "string" && v.startsWith("[") && v.endsWith("]")) {
      v = v.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
    }
    data[kv[1]] = v;
  }
  return { data, body: m[2] };
}

/* ---------- markdown → html + toc ---------- */

function renderMarkdown(body: string): { html: string; toc: Post["toc"] } {
  let html = marked.parse(body, { async: false }) as string;
  const toc: Post["toc"] = [];
  const used = new Set<string>();
  html = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_all, lvl, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    let id = slugify(text) || "seccion";
    while (used.has(id)) id = `${id}-2`;
    used.add(id);
    toc.push({ id, text, level: Number(lvl) });
    return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
  });
  return { html, toc };
}

/* ---------- carga de todas las notas ---------- */

const files = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function buildPosts(): Post[] {
  const posts: Post[] = [];
  const slugs = new Set<string>();
  for (const [path, raw] of Object.entries(files)) {
    const { data, body } = parseFrontmatter(raw);
    const fileSlug = path.split("/").pop()!.replace(/\.md$/, "");
    const slug = slugify(String(data.slug || fileSlug));
    if (slugs.has(slug)) {
      throw new Error(`[blog] Slug duplicado: "${slug}" (${path}). Cada nota necesita un slug único.`);
    }
    slugs.add(slug);
    const catSlug = slugify(String(data.category || ""));
    const category = CATEGORIES.find((c) => c.slug === catSlug || slugify(c.label) === catSlug);
    if (!category) {
      throw new Error(`[blog] Categoría inválida en ${path}: "${data.category}". Válidas: ${CATEGORIES.map((c) => c.slug).join(", ")}`);
    }
    const { html, toc } = renderMarkdown(body);
    const words = body.split(/\s+/).filter(Boolean).length;
    posts.push({
      slug,
      title: String(data.title || fileSlug),
      description: String(data.description || ""),
      publishedAt: String(data.publishedAt || "2026-01-01"),
      updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
      author: String(data.author || "Equipo de Rutia"),
      category,
      keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : [],
      image: data.image ? String(data.image) : undefined,
      imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
      draft: data.draft === true,
      intent: (["tofu", "mofu", "bofu"].includes(String(data.intent)) ? data.intent : "tofu") as Intent,
      pillar: data.pillar === true,
      readingMinutes: Math.max(1, Math.round(words / 200)),
      html,
      toc,
    });
  }
  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

const ALL_POSTS = buildPosts();

/** Notas publicadas (sin borradores): las que ven buscadores, sitemap, RSS y relacionados. */
export function publishedPosts(): Post[] {
  return ALL_POSTS.filter((p) => !p.draft);
}

/** Notas para listados en pantalla (incluye borradores si SHOW_DRAFTS_IN_LIST). */
export function listablePosts(): Post[] {
  return SHOW_DRAFTS_IN_LIST ? ALL_POSTS : publishedPosts();
}

export function getPost(slug: string): Post | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function relatedPosts(post: Post, limit = 3): Post[] {
  return publishedPosts()
    .filter((p) => p.slug !== post.slug && p.category.slug === post.category.slug)
    .slice(0, limit);
}
