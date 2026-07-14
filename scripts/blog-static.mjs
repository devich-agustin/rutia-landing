/**
 * Genera public/rss.xml y public/sitemap.xml a partir de las notas del blog.
 * Corre automáticamente antes de cada build (ver package.json).
 * Los borradores (draft: true) quedan EXCLUIDOS de ambos.
 */
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const SITE = "https://rutia.com.ar";
const DIR = "src/content/blog";
const TODAY = new Date().toISOString().slice(0, 10);

const CATEGORIES = [
  "organizacion-operativa","excel-y-planillas","control-y-trazabilidad",
  "logistica-por-sector","software-logistico",
];

function fm(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (m) for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([\w]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, "");
  }
  return data;
}

const posts = readdirSync(DIR).filter(f => f.endsWith(".md")).map(f => {
  const d = fm(readFileSync(join(DIR, f), "utf8"));
  return { ...d, slug: d.slug || f.replace(/\.md$/, ""), draft: d.draft === "true" };
}).filter(p => !p.draft).sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));

const esc = s => String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

/* ---- sitemap.xml ---- */
const staticUrls = [
  { loc: `${SITE}/`, priority: "1.0", changefreq: "weekly" },
  { loc: `${SITE}/blog`, priority: "0.8", changefreq: "weekly" },
  ...CATEGORIES.filter(c => posts.some(p => (p.category||"") === c))
    .map(c => ({ loc: `${SITE}/blog/categoria/${c}`, priority: "0.6", changefreq: "weekly" })),
  { loc: `${SITE}/privacidad`, priority: "0.3", changefreq: "yearly" },
  { loc: `${SITE}/terminos`, priority: "0.3", changefreq: "yearly" },
  { loc: `${SITE}/cookies`, priority: "0.3", changefreq: "yearly" },
  { loc: `${SITE}/aviso-legal`, priority: "0.3", changefreq: "yearly" },
];
const postUrls = posts.map(p => ({
  loc: `${SITE}/blog/${p.slug}`, priority: "0.7", changefreq: "monthly",
  lastmod: p.updatedAt || p.publishedAt || TODAY,
}));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...postUrls].map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod || TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;
writeFileSync("public/sitemap.xml", sitemap);

/* ---- rss.xml ---- */
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog de Rutia</title>
    <link>${SITE}/blog</link>
    <description>Guías prácticas sobre organización de entregas, control operativo y logística para PyMEs.</description>
    <language>es-AR</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
${posts.map(p => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <pubDate>${new Date(`${p.publishedAt || TODAY}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`).join("\n")}
  </channel>
</rss>
`;
writeFileSync("public/rss.xml", rss);
console.log(`[blog-static] sitemap: ${staticUrls.length + postUrls.length} URLs · rss: ${posts.length} notas publicadas (borradores excluidos)`);
