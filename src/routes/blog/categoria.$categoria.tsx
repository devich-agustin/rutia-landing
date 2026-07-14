import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BlogShell, PostCard, Breadcrumbs, breadcrumbJsonLd } from "@/components/BlogShell";
import { CATEGORIES, getCategory, listablePosts, SITE_URL } from "@/lib/blog";

export const Route = createFileRoute("/blog/categoria/$categoria")({
  loader: ({ params }) => {
    const category = getCategory(params.categoria);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    if (!c) return {};
    const title = `${c.label} — Blog de Rutia`;
    const desc = `Notas sobre ${c.label.toLowerCase()} para PyMEs que gestionan sus propias entregas.`;
    const url = `${SITE_URL}/blog/categoria/${c.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: `${SITE_URL}/og-image.png` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const posts = listablePosts().filter((p) => p.category.slug === category.slug);
  const crumbs = [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: category.label },
  ];
  return (
    <BlogShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
          <span className="pill pill-dark">Temática</span>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{category.label}</h1>
        </div>
      </section>
      <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <nav aria-label="Otras temáticas" className="mt-8 flex flex-wrap gap-2">
          <Link to="/blog" className="rounded-full border border-border bg-white px-4 py-1.5 text-[13.5px] font-semibold text-muted-foreground hover:border-primary/40 hover:text-foreground">
            Todas
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/blog/categoria/$categoria"
              params={{ categoria: c.slug }}
              className={`rounded-full px-4 py-1.5 text-[13.5px] font-semibold transition-colors ${
                c.slug === category.slug
                  ? "bg-primary text-white"
                  : "border border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </nav>
        {posts.length === 0 ? (
          <p className="mt-14 text-muted-foreground">Todavía no hay notas en esta temática. Muy pronto.</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
    </BlogShell>
  );
}
