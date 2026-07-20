import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BlogShell, PostCard, Breadcrumbs, breadcrumbJsonLd } from "@/components/BlogShell";
import { CATEGORIES, listablePosts, POSTS_PER_PAGE, SITE_URL } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  validateSearch: (s: Record<string, unknown>): { p?: number } => ({
    p: s.p === undefined ? undefined : Math.max(1, Number(s.p) || 1),
  }),
  head: () => ({
    meta: [
      { title: "Blog de Rutia — Logística y entregas para PyMEs" },
      {
        name: "description",
        content:
          "Guías prácticas sobre organización de entregas, control operativo y logística para PyMEs argentinas: mueblerías, corralones, distribuidoras y más.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { property: "og:title", content: "Blog de Rutia — Logística y entregas para PyMEs" },
      { property: "og:description", content: "Guías prácticas sobre organización de entregas, control operativo y logística para PyMEs." },
      { property: "og:image", content: `${SITE_URL}/og-image-v2.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
});

function BlogIndex() {
  const { p = 1 } = Route.useSearch();
  const [cat, setCat] = useState<string>("todas");
  const all = listablePosts();
  const filtered = cat === "todas" ? all : all.filter((x) => x.category.slug === cat);
  const pages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const page = Math.min(p, pages);
  const visible = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const crumbs = [{ label: "Inicio", href: "/" }, { label: "Blog" }];

  return (
    <BlogShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-16">
          <span className="pill pill-dark">Blog</span>
          <h1 className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.08] sm:text-4xl">
            Logística clara para empresas que entregan lo que venden
          </h1>
          <p className="mt-4 max-w-xl text-[16px] text-[#9CA9C0]">
            Guías prácticas para ordenar pedidos, entregas y depósito — sin humo y en
            criollo.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <Breadcrumbs items={crumbs} />

        <nav aria-label="Filtrar por temática" className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setCat("todas")}
            aria-pressed={cat === "todas"}
            className={`rounded-full px-4 py-1.5 text-[13.5px] font-semibold transition-colors ${
              cat === "todas"
                ? "bg-primary text-white"
                : "border border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            Todas
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setCat(c.slug)}
              aria-pressed={cat === c.slug}
              className={`rounded-full px-4 py-1.5 text-[13.5px] font-semibold transition-colors ${
                cat === c.slug
                  ? "bg-primary text-white"
                  : "border border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </nav>
        <p className="mt-3 text-[12.5px] text-muted-foreground">
          Cada temática tiene también su propia página:{" "}
          {CATEGORIES.map((c, i) => (
            <span key={c.slug}>
              <Link to="/blog/categoria/$categoria" params={{ categoria: c.slug }} className="text-primary hover:underline">
                {c.label}
              </Link>
              {i < CATEGORIES.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>

        {visible.length === 0 ? (
          <p className="mt-14 text-muted-foreground">Todavía no hay notas en esta temática. Muy pronto.</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {pages > 1 && (
          <nav aria-label="Paginación" className="mt-12 flex items-center justify-center gap-3">
            {page > 1 && (
              <Link to="/blog" search={{ p: page - 1 }} className="rounded-lg border border-border px-4 py-2 text-[14px] font-semibold hover:border-primary hover:text-primary">
                ← Anteriores
              </Link>
            )}
            <span className="text-[13.5px] text-muted-foreground">Página {page} de {pages}</span>
            {page < pages && (
              <Link to="/blog" search={{ p: page + 1 }} className="rounded-lg border border-border px-4 py-2 text-[14px] font-semibold hover:border-primary hover:text-primary">
                Siguientes →
              </Link>
            )}
          </nav>
        )}
      </main>
    </BlogShell>
  );
}
