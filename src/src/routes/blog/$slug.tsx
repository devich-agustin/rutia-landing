import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BlogShell, EditorialCover, PostCard, Breadcrumbs, breadcrumbJsonLd, ArticleCta } from "@/components/BlogShell";
import { formatDate, getPost, relatedPosts, SITE_URL } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const url = `${SITE_URL}/blog/${post.slug}`;
    const image = post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-image.png`;
    return {
      meta: [
        { title: `${post.title} — Blog de Rutia` },
        { name: "description", content: post.description },
        {
          name: "robots",
          content: post.draft ? "noindex, nofollow" : "index, follow",
        },
        ...(post.keywords.length ? [{ name: "keywords", content: post.keywords.join(", ") }] : []),
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:image", content: image },
        { property: "og:locale", content: "es_AR" },
        { property: "article:published_time", content: post.publishedAt },
        ...(post.updatedAt ? [{ property: "article:modified_time", content: post.updatedAt }] : []),
        { property: "article:author", content: post.author },
        { property: "article:section", content: post.category.label },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = relatedPosts(post);
  const crumbs = [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.category.label, href: `/blog/categoria/${post.category.slug}` },
    { label: post.title },
  ];
  const url = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    inLanguage: "es-AR",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: url,
    image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-image.png`,
    articleSection: post.category.label,
    ...(post.keywords.length ? { keywords: post.keywords.join(", ") } : {}),
  };

  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <main className="mx-auto max-w-3xl px-5 py-12 lg:px-0">
        <Breadcrumbs items={crumbs} />

        {post.draft && (
          <div role="status" className="mt-6 rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-[14px] font-medium text-amber-900">
            ⚠️ Borrador — contenido de prueba. Esta nota no se indexa en buscadores ni
            aparece en el sitemap ni en el RSS.
          </div>
        )}

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground">
            <Link
              to="/blog/categoria/$categoria"
              params={{ categoria: post.category.slug }}
              className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary hover:bg-primary/15"
            >
              {post.category.label}
            </Link>
            <span>·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>·</span>
            <span>{post.readingMinutes} min de lectura</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{post.description}</p>
          <p className="mt-4 text-[13.5px] text-muted-foreground">
            Por <span className="font-semibold text-foreground">{post.author}</span>
            {post.updatedAt && <> · Actualizado el {formatDate(post.updatedAt)}</>}
          </p>
        </header>

        <div className="mt-8 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-border">
          <EditorialCover post={post} hero />
        </div>

        {/* Tabla de contenidos para notas extensas */}
        {post.toc.length >= 4 && (
          <nav aria-label="Tabla de contenidos" className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <p className="text-[13px] font-bold uppercase tracking-wide text-muted-foreground">En esta nota</p>
            <ol className="mt-3 space-y-2 text-[14.5px]">
              {post.toc.map((h: { id: string; text: string; level: number }) => (
                <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                  <a href={`#${h.id}`} className="text-primary hover:underline">{h.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="blog-prose mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />

        <ArticleCta intent={post.intent} />

        {related.length > 0 && (
          <section aria-labelledby="relacionadas" className="mt-16 border-t border-border pt-10">
            <h2 id="relacionadas" className="text-xl font-bold">Notas relacionadas</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <PostCard key={r.slug} post={r} />
              ))}
            </div>
          </section>
        )}
      </main>
    </BlogShell>
  );
}
